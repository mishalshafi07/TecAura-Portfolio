import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";
import { COMPANY_INFO } from "@/data/company";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot spam protection check
    if (body.websiteHoneypot && String(body.websiteHoneypot).trim().length > 0) {
      return NextResponse.json(
        { success: false, error: "Automated spam submission blocked." },
        { status: 400 }
      );
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check the highlighted fields.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || COMPANY_INFO.email;

    const isResendConfigured =
      Boolean(apiKey) &&
      apiKey !== "re_your_api_key_here" &&
      apiKey!.startsWith("re_");

    if (isResendConfigured && apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: "TecAura Website <onboarding@resend.dev>",
        to: [receiverEmail],
        replyTo: data.email,
        subject: `[TecAura Project Enquiry] ${data.serviceRequired} — ${data.companyName}`,
        html: `
          <div style="font-family: sans-serif; background: #101018; color: #F5F5FA; padding: 32px; border-radius: 12px;">
            <h2 style="color: #7657FF; margin-top: 0;">New Project Enquiry — TecAura</h2>
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Business Email:</strong> ${data.email}</p>
            <p><strong>Phone / WhatsApp:</strong> ${data.phone}</p>
            <p><strong>Company Name:</strong> ${data.companyName}</p>
            <p><strong>Service Required:</strong> ${data.serviceRequired}</p>
            <p><strong>Estimated Budget:</strong> ${data.estimatedBudget || "Not specified"}</p>
            <hr style="border-color: #30303B; margin: 20px 0;" />
            <p><strong>Project Description:</strong></p>
            <p style="white-space: pre-wrap; color: #A5A5B5;">${data.projectDescription}</p>
          </div>
        `,
      });

      if (error) {
        return NextResponse.json(
          {
            success: false,
            error: `Email provider error: ${error.message}`,
          },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        deliveryMode: "live_email",
        message:
          "Your project enquiry has been securely transmitted to the TecAura engineering team via Resend.",
      });
    }

    // Transparent response when RESEND_API_KEY is not yet populated in .env.local
    return NextResponse.json({
      success: true,
      deliveryMode: "verified_local_ready",
      message:
        "Your enquiry passed server-side validation. Because RESEND_API_KEY is not yet configured in .env.local, live SMTP/Resend dispatch is in standby mode—you can dispatch this exact brief immediately via Direct Email or WhatsApp below.",
      submittedData: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        serviceRequired: data.serviceRequired,
        estimatedBudget: data.estimatedBudget || "Flexible / To be discussed",
        projectDescription: data.projectDescription,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process request payload. Please try again.",
      },
      { status: 500 }
    );
  }
}

