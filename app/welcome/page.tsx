import type { Metadata } from "next";
import Image from "next/image";

import { CircleCheckBig } from "lucide-react";
import CursorGlow from "@/components/cursor-glow";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Your Next Step | Envision Digital Solution",
  description:
    "You have got your 90-Day Marketing Clarity Plan. Book a strategy conversation to put it into action.",
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
      <CursorGlow />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        <header className="flex items-center justify-center py-4">
          <a href="/">
            <Image
              src="/branding/envision-logo-light.png"
              alt="Envision Digital Solution"
              width={220}
              height={45}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </a>
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

        <footer className="mt-10 text-center text-xs text-slate-500 sm:text-sm">
          &copy; {new Date().getFullYear()} Envision Digital Solution. All
          rights reserved.
        </footer>
      </main>
    </div>
  );
}
