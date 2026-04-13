"use server";

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    enquiry?: string;
  };
} | null;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export type RoadmapCaptureState = {
  success: boolean;
  message: string;
  error?: string;
} | null;

export async function submitRoadmapCapture(
  _prevState: RoadmapCaptureState,
  formData: FormData,
): Promise<RoadmapCaptureState> {
  const email = formData.get("email") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      error: "Please enter a valid email address.",
    };
  }

  try {
    const pdfPath = join(process.cwd(), "public/downloads/90-day-marketing-clarity-plan.pdf");
    const pdfBuffer = await readFile(pdfPath);

    if (resend) {
      await Promise.all([
        resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL ?? "noreply@envisionds.com.au",
          to: email.trim(),
          subject: "Your 90-Day Marketing Clarity Plan",
          text: [
            "Thanks for your interest in Envision Digital Solution.",
            "",
            "Attached is your free 90-Day Marketing Clarity Plan. It outlines the framework we use to help service-led businesses turn scattered marketing effort into predictable pipeline growth.",
            "",
"If you would like to discuss how this applies to your business specifically, simply reply to this email or book a strategy conversation at https://envisionds.com.au/welcome?src=clarity-plan-email",
            "",
            "Cheers,",
            "The Envision Digital Solution Team",
          ].join("\n"),
          attachments: [
            {
              filename: "90-Day-Marketing-Clarity-Plan.pdf",
              content: pdfBuffer,
            },
          ],
        }),
        resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL ?? "noreply@envisionds.com.au",
          to: "hello@envisionds.com.au",
          subject: "New 90-day roadmap download",
          text: `Someone has downloaded the 90-Day Marketing Clarity Plan.\n\nEmail: ${email.trim()}`,
        }),
      ]);
    } else {
      console.log("Roadmap capture (RESEND_API_KEY not set):", email.trim());
    }

    return {
      success: true,
      message: "Check your inbox! Your 90-Day Marketing Clarity Plan is on its way.",
    };
  } catch (error) {
    console.error("Failed to send roadmap capture email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const business = formData.get("business") as string;
  const service = formData.get("service") as string;
  const enquiry = formData.get("enquiry") as string;
  const source = (formData.get("source") as string) ?? "";

  const errors: NonNullable<ContactFormState>["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!enquiry || enquiry.trim().length < 10) {
    errors.enquiry =
      "Please tell us a bit more about your needs (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  try {
    if (resend) {
      await resend.emails.send({
from: process.env.RESEND_FROM_EMAIL ?? "noreply@envisionds.com.au",
        to: "hello@envisionds.com.au",
        subject: `New enquiry from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          business ? `Business: ${business.trim()}` : null,
          service ? `Service interest: ${service}` : null,
          source ? `Source: ${source}` : null,
          `\nMessage:\n${enquiry.trim()}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } else {
      console.log("Contact form submission (RESEND_API_KEY not set):", {
        name: name.trim(),
        email: email.trim(),
        business: business?.trim(),
        service,
        enquiry: enquiry.trim(),
      });
    }

    return {
      success: true,
      message: "Thanks for reaching out! We will be in touch shortly.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message:
        "Something went wrong. Please try again or email us directly at hello@envisionds.com.au.",
    };
  }
}
