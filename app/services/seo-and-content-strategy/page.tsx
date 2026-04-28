import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenText,
  CircleCheckBig,
  Compass,
  FileSearch,
  Gauge,
  Globe2,
  LineChart,
  MapPin,
  PenLine,
  Search,
  TrendingUp,
} from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FaqItem from "@/components/faq-item";
import { SeoIllustration } from "@/components/service-illustrations";

export const metadata: Metadata = {
  title: "SEO and Content Strategy | Envision Digital Solution",
  description:
    "We help businesses get found by the right people at the right moment. Local SEO, intent-led content, and a site structure that earns rankings instead of chasing them.",
};

const frictions = [
  {
    icon: Search,
    title: "You exist online, but no one is finding you",
    description:
      "Customers are actively searching for what you offer, yet your site never shows up on the first page when it matters.",
  },
  {
    icon: PenLine,
    title: "You have content, but it does not bring leads",
    description:
      "You have written blogs and added pages, but they do not rank, do not drive traffic, and do not seem to do anything for the business.",
  },
  {
    icon: MapPin,
    title: "Your local competitors keep showing up first",
    description:
      "When someone searches in your suburb or area, the same few competitors appear above you, even when your service is genuinely better.",
  },
];

const deliverables = [
  {
    icon: FileSearch,
    title: "Keyword and intent mapping",
    description:
      "We map what your buyers are actually searching, including the questions they ask before they are ready to enquire.",
  },
  {
    icon: Globe2,
    title: "Local and suburb-level SEO",
    description:
      "We target the suburbs and areas where your best opportunities live, with content and structure built around real local demand.",
  },
  {
    icon: BookOpenText,
    title: "Content that earns its place",
    description:
      "Pages and articles that answer real questions, build trust, and quietly do the convincing for you before the first conversation.",
  },
  {
    icon: LineChart,
    title: "Plain-English reporting",
    description:
      "Every month you see what is moving, what is not, and what we are changing next. No vanity metrics, no jargon.",
  },
];

const process = [
  {
    icon: Compass,
    title: "Audit",
    description:
      "We start with a clear picture of where you rank now, what is helping, and what is silently holding the site back.",
  },
  {
    icon: FileSearch,
    title: "Plan",
    description:
      "We map the keywords, locations, and intent we are going after, and prioritise the work that compounds the fastest.",
  },
  {
    icon: PenLine,
    title: "Build",
    description:
      "We write, optimise, and structure pages around real buyer questions and local demand, not made-up keyword density rules.",
  },
  {
    icon: Gauge,
    title: "Refine",
    description:
      "We watch behaviour, refine titles and content, and reinvest in the pages that are starting to gain traction.",
  },
];

const faqs = [
  {
    question: "How long until I actually see results?",
    answer:
      "SEO is a compounding game. Most businesses see clearer signals in the early weeks (better-fitting traffic, a few priority terms moving) and stronger results over a few months as content compounds and authority builds.",
  },
  {
    question: "Do I have to publish a blog every week?",
    answer:
      "No. We focus on a smaller number of high-quality, intent-led pages instead of a constant stream of forgettable articles. Frequency matters less than fit.",
  },
  {
    question: "What if I have already tried SEO and was disappointed?",
    answer:
      "That is common. A lot of SEO work focuses on traffic instead of revenue. We focus on intent, lead quality, and local fit, so the visitors you attract are actually people you want to talk to.",
  },
  {
    question: "Can SEO work alongside paid ads?",
    answer:
      "Yes, and they tend to compound. Paid gives you fast feedback on what messaging converts. SEO turns those proven messages into long-term, lower-cost traffic over time.",
  },
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";
const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function SeoAndContentStrategyPage() {
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
        <section className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-cyan-300">
              <Search className="h-4 w-4" />
              <p className="text-xs font-medium uppercase tracking-[0.12em]">
                SEO and Content Strategy
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Be found by the right people, at the moment they are actually
              ready to enquire.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Most businesses do not have an SEO problem, they have an intent
              problem. The right people are searching for what you do every
              week. The work is making sure your site is the answer when they
              are ready, in the suburbs and search terms that actually matter.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                See all services
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-2xl"
            />
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur">
              <SeoIllustration />
            </div>
          </div>
        </section>

        {/* Friction */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>The reality you are facing</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Quiet problems that are costing you enquiries every week
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              These are the patterns we see most often before we step in. None
              of them mean your offer is wrong, they usually mean the right
              people are not finding the right page at the right moment.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {frictions.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>What you actually get</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              SEO that earns its keep, not just its rankings
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>How it works</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              A clear, compounding rhythm, not a one-off audit on a shelf
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article key={step.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
                    {`Step ${index + 1}`}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Authority pivot */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Why this matters</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
              Paid traffic stops the moment you stop paying. Search compounds.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Every well-built page becomes an asset that keeps earning long
              after it is published. Buyers searching at midnight, weekends, or
              months from now will quietly find their way to your site, already
              partly convinced. That is what we are really building, a slow
              accumulating advantage that costs less every month it runs.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Better-fit traffic from real buying intent",
                "Local presence in the suburbs that matter",
                "Lower cost per enquiry over time",
                "Content that does the trust-building for you",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Common questions</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Honest answers we usually give in the first call
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Take the next step</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Ready to be the answer when your buyer finally searches?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and we will look at where you rank now, the
              suburbs and search terms worth chasing, and the highest-leverage
              content moves to make first.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/location-strategy"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                <TrendingUp className="h-4 w-4 text-cyan-300" />
                Pair with Location Strategy
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
