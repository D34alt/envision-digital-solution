"use client";

import { useActionState, useState } from "react";
import { ArrowRight, CircleCheckBig, LoaderCircle } from "lucide-react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const services = [
  "Paid Ads Management",
  "SEO and Content Strategy",
  "Social Media Growth",
  "Conversion Journey Optimisation",
  "Email and CRM Nurture",
  "Website Development",
  "Location Strategy",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 sm:text-sm";

const labelClass = "mb-1.5 block text-sm font-medium text-slate-300";

export default function ContactForm({ source }: { source?: string }) {
  const [state, formAction, pending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [service, setService] = useState("");
  const [enquiry, setEnquiry] = useState("");

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/15">
          <CircleCheckBig className="h-7 w-7 text-cyan-300" />
        </div>
        <h3 className="text-xl font-semibold text-white">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-300">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" suppressHydrationWarning>
      {source && <input type="hidden" name="source" value={source} />}
      {state?.message && !state.success && (
        <p className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            suppressHydrationWarning
          />
          {state?.errors?.name && (
            <p className="mt-1.5 text-xs text-red-400">{state.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            suppressHydrationWarning
          />
          {state?.errors?.email && (
            <p className="mt-1.5 text-xs text-red-400">{state.errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-business" className={labelClass}>
            Business name
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            placeholder="Acme Pty Ltd"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className={inputClass}
            suppressHydrationWarning
          />
        </div>

        <div>
          <label htmlFor="contact-service" className={labelClass}>
            Service of interest
          </label>
          <select
            id="contact-service"
            name="service"
            className={`${inputClass} appearance-none`}
            value={service}
            onChange={(e) => setService(e.target.value)}
            suppressHydrationWarning
          >
            <option value="">
              Select a service (optional)
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-enquiry" className={labelClass}>
          How can we help? <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="contact-enquiry"
          name="enquiry"
          required
          rows={4}
          placeholder="Tell us a bit about your business and what you are looking to achieve..."
          value={enquiry}
          onChange={(e) => setEnquiry(e.target.value)}
          className={`${inputClass} resize-none`}
          suppressHydrationWarning
        />
        {state?.errors?.enquiry && (
          <p className="mt-1.5 text-xs text-red-400">
            {state.errors.enquiry}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
