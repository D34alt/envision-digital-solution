import type { Metadata } from "next";
import { Coffee, Stethoscope, Rocket } from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Examples | Envision Digital Solution",
  description:
    "See how Envision Digital Solutions helps businesses grow through digital marketing, websites, and location strategy. Real-world scenarios for cafes, clinics, and new business owners.",
};

const examples = [
  {
    icon: Coffee,
    tag: "Location Strategy + Digital Marketing",
    title: "Local Cafe Expansion",
    challenge:
      "A cafe owner wants to open a second location but is unsure which suburb has the strongest opportunity.",
    approach:
      "We compare local demographics, nearby competitors, foot traffic patterns, accessibility, and marketing potential across the suburbs they are considering. Once we identify the strongest opportunity, we build a local launch strategy that includes Google Ads, local SEO, and suburb-targeted social media to drive awareness from day one.",
    outcome:
      "The owner makes a location decision backed by data, not gut feeling, and enters the market with a marketing plan already in place.",
  },
  {
    icon: Stethoscope,
    tag: "SEO + Paid Ads + Website",
    title: "Allied Health Clinic Growth",
    challenge:
      "A clinic wants more enquiries from nearby suburbs but is not showing up in local search results, and their website is not converting visitors.",
    approach:
      "We review local search behaviour, competitor visibility, website structure, and suburb-based targeting. We rebuild key service pages around local intent, set up a Google Ads campaign targeting nearby postcodes, and improve the website to convert visitors into bookings more reliably.",
    outcome:
      "More qualified enquiries from nearby suburbs, improved search visibility, and a website that does a better job of turning interest into action.",
  },
  {
    icon: Rocket,
    tag: "Website + Strategy + Location",
    title: "New Business Launch",
    challenge:
      "A new business owner needs a website, a local marketing plan, and clarity on which area to target first before they start spending on ads.",
    approach:
      "We start with a location analysis to identify which suburb or area has the strongest demand and the least competitive pressure. From there, we build a clean, professional website and a 90-day marketing plan that prioritises the highest-leverage channels for their situation, so they are spending money where it is most likely to return results.",
    outcome:
      "A new business that launches with a clear strategy, a strong online presence, and a focused target market, instead of guessing and hoping something sticks.",
  },
];

const panelClass = "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur sm:p-8";
const chapterClass = "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

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
              clients. The names are illustrative, but the situations are ones
              we see regularly.
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="mt-12 space-y-6">
          {examples.map((example, index) => {
            const Icon = example.icon;

            return (
              <article key={example.title} className={cardClass}>
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                  <div className="lg:w-72 lg:shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-cyan-300">
                      {example.tag}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      {example.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-400">
                      Example {index + 1} of {examples.length}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        The situation
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-slate-300">
                        {example.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        How we approach it
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-slate-300">
                        {example.approach}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        The result
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-slate-300">
                        {example.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

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
