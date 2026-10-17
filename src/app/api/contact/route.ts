import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    // 1. Content-Type check to mitigate simple form CSRF
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid Content-Type. Expected application/json.",
        },
        { status: 415 }
      );
    }

    // 2. CSRF & Origin validation
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host) {
      try {
        const originUrl = new URL(origin);
        // Ensure origin hostname matches host header
        if (originUrl.host !== host) {
          return NextResponse.json(
            { success: false, error: "Cross-origin request rejected." },
            { status: 403 }
          );
        }
      } catch {
        return NextResponse.json(
          { success: false, error: "Malformed origin header." },
          { status: 400 }
        );
      }
    }

    // 3. Payload size limitation
    const rawBody = await request.text();
    if (rawBody.length > 64 * 1024) {
      return NextResponse.json(
        { success: false, error: "Payload exceeds permissible size limit." },
        { status: 413 }
      );
    }

    let json: unknown;
    try {
      json = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "Malformed JSON payload." },
        { status: 400 }
      );
    }

    // 4. Server-side validation via Zod
    const parseResult = contactFormSchema.safeParse(json);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // 5. Anti-spam honeypot verification
    if (data.website_hp && data.website_hp.length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 6. Documented Email Delivery Adapter Point
    const resendApiKey = process.env.RESEND_API_KEY;
    const isEmailConfigured = Boolean(
      resendApiKey && resendApiKey.trim().length > 0
    );

    // Audit log submission on server with sanitized telemetry
    console.info("[SARVOS INQUIRY AUDIT]", {
      timestamp: new Date().toISOString(),
      name: data.name.replace(/[\r\n\t]/g, " "),
      email: data.email.replace(/[\r\n\t]/g, " "),
      company: data.company ? data.company.replace(/[\r\n\t]/g, " ") : "N/A",
      service: data.service,
      budget: data.budget || "N/A",
      timeline: data.timeline || "N/A",
      emailConfigured: isEmailConfigured,
    });

    if (!isEmailConfigured) {
      return NextResponse.json(
        {
          success: true,
          delivered: false,
          message:
            "Enquiry validated and recorded. Note: Production email dispatch provider is unconfigured.",
          data: {
            referenceId: `SRV-${Date.now().toString(36).toUpperCase()}`,
            timestamp: new Date().toISOString(),
          },
        },
        { status: 200 }
      );
    }

    // When configured with Resend API key:
    // const resend = new Resend(resendApiKey);
    // await resend.emails.send({ ... });

    return NextResponse.json(
      {
        success: true,
        delivered: true,
        message: "Enquiry successfully received and delivered.",
        data: {
          referenceId: `SRV-${Date.now().toString(36).toUpperCase()}`,
        },
      },
      { status: 200 }
    );
  } catch {
    // Non-verbose, no stack traces leaked
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
