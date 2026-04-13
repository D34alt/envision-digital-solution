"use server";

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

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const business = formData.get("business") as string;
  const service = formData.get("service") as string;
  const enquiry = formData.get("enquiry") as string;

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
