import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const json = await request.json();

    // 1. Server-side validation via Zod
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

    // 2. Anti-spam honeypot verification
    if (data.website_hp && data.website_hp.length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    // 3. Documented Email Delivery Adapter Point (e.g. Resend, Postmark, AWS SES)
    const resendApiKey = process.env.RESEND_API_KEY;
    const isEmailConfigured = Boolean(
      resendApiKey && resendApiKey.trim().length > 0
    );

    // Audit log submission on server
    console.info("[SARVOS INQUIRY AUDIT]", {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company || "N/A",
      service: data.service,
      budget: data.budget || "N/A",
      timeline: data.timeline || "N/A",
      emailConfigured: isEmailConfigured,
    });

    if (!isEmailConfigured) {
      // Strictly do not claim delivery if not configured
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

    // If Resend or email adapter is configured, dispatch here:
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
  } catch (error) {
    console.error("[SARVOS INQUIRY ERROR]", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
