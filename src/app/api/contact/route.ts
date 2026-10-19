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

    // 6. Email delivery via Resend's REST API (no SDK dependency).
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
    const isEmailConfigured = Boolean(resendApiKey && toEmail && fromEmail);
    const referenceId = `SRV-${Date.now().toString(36).toUpperCase()}`;

    // Audit log without personal data (name, email and message are never logged).
    console.info("[SARVOS INQUIRY AUDIT]", {
      timestamp: new Date().toISOString(),
      referenceId,
      service: data.service,
      budget: data.budget || "N/A",
      timeline: data.timeline || "N/A",
      emailConfigured: isEmailConfigured,
    });

    // Never report success when nothing was delivered.
    if (!isEmailConfigured) {
      return NextResponse.json(
        {
          success: false,
          delivered: false,
          error:
            "Enquiry delivery is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    const text = [
      `Reference: ${referenceId}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "N/A"}`,
      `Service: ${data.service}`,
      `Budget: ${data.budget || "N/A"}`,
      `Timeline: ${data.timeline || "N/A"}`,
      "",
      data.description,
    ].join("\n");

    const deliveryResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `SARVOS enquiry (${referenceId}): ${data.service}`,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!deliveryResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          delivered: false,
          error:
            "We could not deliver your enquiry. Please try again in a few minutes.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        delivered: true,
        message: "Enquiry successfully received and delivered.",
        data: { referenceId },
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
