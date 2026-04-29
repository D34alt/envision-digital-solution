import type { Metadata } from "next";
import {
  Clock,
  MapPin,
  MessageSquare,
} from "lucide-react";

import ContactForm from "@/components/contact-form";
import CopyEmail from "@/components/copy-email";
import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ContactIllustration } from "@/components/service-illustrations";

const pageTitle = "Contact";
const pageDescription =
  "Get in touch with Envision Digital Solution. Book a strategy call to map your highest-value opportunities across digital marketing, websites, and location strategy.";
const ogDescription =
  "Book a strategy conversation with Envision Digital Solution. Clear, practical advice on marketing, websites, and location strategy.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
    title: `${pageTitle} | Envision Digital Solution`,
    description: ogDescription,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | Envision Digital Solution`,
    description: ogDescription,
  },
};

const contactPoints = [
  {
    icon: MessageSquare,
    title: "Book a strategy call",
    description:
      "Send us a quick brief and we will reply with a time that works for both of us, usually within one business day.",
  },
  {
    icon: Clock,
    title: "Response time",
    description:
      "We reply to enquiries Monday to Friday, between 9am and 5pm AEST. Weekend messages get answered first thing Monday.",
  },
  {
    icon: MapPin,
    title: "Based in Melbourne",
    description:
      "We work with businesses across Melbourne, Victoria, and remotely throughout Australia.",
  },
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";

const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur";

const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function ContactPage() {
  return (
    <div className="relative isolate flex flex-1 overflow-x-clip bg-slate-950 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 45% at 50% 0%, rgba(6,182,212,0.14) 0%, transparent 70%)",
            "radial-gradient(ellipse 65% 35% at 32% 4%, rgba(99,102,241,0.10) 0%, transparent 60%)",
            "radial-gradient(ellipse 35% 45% at 88% 55%, rgba(139,92,246,0.06) 0%, transparent 55%)",
            "radial-gradient(ellipse 50% 30% at 75% 95%, rgba(99,102,241,0.08) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <CursorGlow />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        <SiteHeader />

        {/* Hero */}
        <section className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className={chapterClass}>Contact</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let us help you grow with more clarity.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Tell us a bit about your business and what you are working on. We
              will reply with a strategy conversation, usually within one
              business day.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-2xl"
            />
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur">
              <ContactIllustration />
            </div>
          </div>
        </section>

        {/* Quick contact info */}
        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div key={point.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">
                    {point.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact form */}
        <section className="mt-12">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-4">
                <p className={chapterClass}>Get in touch</p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Send us a brief and we will take it from there.
                </h2>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Whether you are starting fresh, rebuilding something that is
                  not working, or looking to expand into new areas, we will map
                  the highest-leverage next step.
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Prefer email? Tap the address below to copy it across.
                </p>
                <CopyEmail />
              </div>
              <ContactForm source="Contact Page" />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
