import type { Metadata } from "next";
import { ArrowRight, CircleCheckBig } from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "About | Envision Digital Solution",
  description:
    "Envision Digital Solutions helps businesses grow with practical digital strategy, clean websites, marketing systems, and location-based insights.",
};

const values = [
  "We keep things simple and practical, no jargon, no fluff.",
  "We focus on business outcomes, not just marketing activity.",
  "We connect digital marketing and location strategy so your decisions are backed by real insight.",
  "We tell you what is working, what is not, and what we are doing about it.",
];

const panelClass = "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const chapterClass = "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function AboutPage() {
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
            <p className={chapterClass}>About Envision</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              We help businesses grow with more clarity and less guesswork.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Envision Digital Solutions helps businesses grow through practical
              digital strategy, clean websites, marketing systems, and
              location-based insights. We work with business owners who want to
              make smarter decisions and build growth that actually lasts.
            </p>
          </div>
        </section>

        {/* What we do */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>What we do</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Digital marketing meets smarter decision-making.
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <p className="text-base leading-relaxed text-slate-300">
                We combine digital marketing with smarter decision-making,
                helping clients avoid guesswork and build growth with more
                clarity. That means understanding not just how to reach people
                online, but where your best customers actually are, what they
                respond to, and how to build a system that keeps delivering
                results over time.
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Most businesses spend money on marketing before they have
                clarity on who they are targeting, where those people are, or
                what their message should be. We help fix that. Whether you are
                starting from scratch, rebuilding something that is not working,
                or looking to expand into new areas, we give you the strategy
                and execution to move forward with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="mt-16">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>How we work</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Practical, honest, and focused on results.
            </h2>
          </div>
          <div className="mt-8">
            <ul className="space-y-3">
              {values.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Work with us</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Ready to grow with more clarity?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and let&apos;s look at where your business is
              now, where the opportunity is, and what needs to happen next.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
