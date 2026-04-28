import type { Metadata } from "next";

import CursorGlow from "@/components/cursor-glow";
import ExamplesList from "@/components/examples-list";
import LeadCaptureForm from "@/components/lead-capture-form";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Examples | Envision Digital Solution",
  description:
    "See how Envision Digital Solutions helps businesses grow through digital marketing, websites, and location strategy. Real-world scenarios for cafes, clinics, and new business owners.",
};

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function ExamplesPage() {
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
          ].join(", "),
        }}
      />

      <CursorGlow />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        <SiteHeader />

        {/* Hero */}
        <section className="mt-12 sm:mt-16">
          <div className="max-w-3xl space-y-4">
            <p className={chapterClass}>Examples</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Real-world situations we help businesses navigate.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              These are the types of challenges we work through with our
              clients. Click any example to step through the full story, page
              by page. The names are illustrative, but the situations are ones
              we see regularly.
            </p>
          </div>
        </section>

        {/* Examples (cards + paged story modal) */}
        <ExamplesList />

        {/* CTA */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Your situation</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Does any of this sound familiar?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and we will look at where your business is
              now, identify the highest-impact opportunities, and map out a
              practical path forward.
            </p>
            <div className="mt-8">
              <LeadCaptureForm
                source="Examples Page CTA"
                buttonLabel="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
