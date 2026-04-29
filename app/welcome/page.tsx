import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CircleCheckBig } from "lucide-react";
import CursorGlow from "@/components/cursor-glow";
import ContactForm from "@/components/contact-form";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Your Next Step",
  description:
    "You have got your 90-Day Marketing Clarity Plan. Book a strategy conversation to put it into action.",
  alternates: {
    canonical: "/welcome",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const planHighlights = [
  "Where your current funnel is leaking the most attention",
  "Which channels deserve priority based on your stage",
  "How to turn scattered effort into a connected growth system",
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";

const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const source = typeof params.src === "string" ? params.src : undefined;

  return (
    <div className="relative isolate flex flex-1 overflow-x-clip bg-slate-950 text-slate-100">
      {/* Smooth ambient gradients -- no blobs, just light */}
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

      <main className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        <header className="flex items-center justify-center py-4">
          <Link href="/">
            <Image
              src="/branding/envision-logo-light.png"
              alt="Envision Digital Solution"
              width={220}
              height={45}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>
        </header>

        <section className="mt-10 text-center sm:mt-14">
          <p className={chapterClass}>Your plan is on its way</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            You have got your 90-Day Marketing Clarity Plan. Here is what to do
            next.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            The plan covers the framework we use with every client. To see how
            it maps to your business specifically, book a free strategy
            conversation.
          </p>
        </section>

        <section className={`${panelClass} mt-12 p-6 sm:p-8`}>
          <p className={chapterClass}>Inside the plan</p>
          <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            What you will find in your clarity plan
          </h2>
          <ul className="mt-5 space-y-3">
            {planHighlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${panelClass} mt-8 p-6 sm:p-8`}>
          <p className={chapterClass}>Book a strategy conversation</p>
          <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            Let us show you exactly where to focus first
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Tell us a bit about your business and we will map the
            highest-leverage opportunities across your channels, messaging, and
            conversion flow.
          </p>
          <div className="mt-6">
            <ContactForm source={source} />
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
