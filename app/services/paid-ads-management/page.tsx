import type { Metadata } from "next";
import {
  ArrowRight,
  CircleCheckBig,
  Compass,
  Crosshair,
  DollarSign,
  Flame,
  Gauge,
  LineChart,
  Megaphone,
  MousePointerClick,
  Sparkles,
  Target,
} from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FaqItem from "@/components/faq-item";
import LeadCaptureForm from "@/components/lead-capture-form";
import { PaidAdsIllustration } from "@/components/service-illustrations";

const pageTitle = "Paid Ads Management";
const pageDescription =
  "Google Ads and Meta Ads campaigns built around lead quality, not just clicks. We manage targeting, creative, and weekly optimisation so your budget works harder.";
const pagePath = "/services/paid-ads-management";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    url: pagePath,
    title: `${pageTitle} | Envision Digital Solution`,
    description: pageDescription,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | Envision Digital Solution`,
    description: pageDescription,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paid Ads Management",
  serviceType: "Google Ads and Meta Ads management",
  description: pageDescription,
  provider: {
    "@type": "Organization",
    name: "Envision Digital Solutions",
    url: "https://envisiondigitalsolutions.com.au",
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "AdministrativeArea", name: "Victoria" },
    { "@type": "Country", name: "Australia" },
  ],
  url: `https://envisiondigitalsolutions.com.au${pagePath}`,
};

const frictions = [
  {
    icon: DollarSign,
    title: "Budget goes out, very little comes back",
    description:
      "You can see the spend leaving your account every week, but the leads that arrive feel random and low quality.",
  },
  {
    icon: MousePointerClick,
    title: "Clicks look healthy, sales do not",
    description:
      "The dashboard shows traffic and clicks moving in the right direction, but the people landing on your site rarely become customers.",
  },
  {
    icon: Flame,
    title: "Campaigns get set up, then quietly drift",
    description:
      "An agency or freelancer launched it, then attention moved on. Now no one is sure what is actually being optimised week to week.",
  },
];

const deliverables = [
  {
    icon: Crosshair,
    title: "Targeting built around real buyers",
    description:
      "We define audience, intent, and locations in plain English first. The platform setup follows the strategy, not the other way around.",
  },
  {
    icon: Sparkles,
    title: "Ad copy and creative direction",
    description:
      "We write ads in the language your buyers actually use. Hooks, angles, and offers tested deliberately, not at random.",
  },
  {
    icon: Megaphone,
    title: "Google Ads and Meta Ads setup",
    description:
      "Search, performance, retargeting, and social campaigns built and connected so they reinforce each other instead of competing for budget.",
  },
  {
    icon: Gauge,
    title: "Weekly optimisation and bid management",
    description:
      "We watch performance, kill the underperformers, double down on what is working, and keep budget moving toward better-fit leads.",
  },
];

const process = [
  {
    icon: Compass,
    title: "Diagnose",
    description:
      "We look at your offer, audience, current campaigns, and landing pages to spot where money is being wasted before we change a single ad.",
  },
  {
    icon: Target,
    title: "Build",
    description:
      "We restructure or build the campaigns, write the creative, align the landing pages, and set up tracking that actually tells the truth.",
  },
  {
    icon: LineChart,
    title: "Launch",
    description:
      "We go live with sensible budgets, watch the early data closely, and tune quickly so we are not paying to learn the same lesson twice.",
  },
  {
    icon: Gauge,
    title: "Optimise weekly",
    description:
      "Every week we review what is converting, refine creative and targeting, and reallocate spend toward better-fit lead behaviour.",
  },
];

const faqs = [
  {
    question: "How big a budget do I need to make ads worthwhile?",
    answer:
      "It depends on your service value and competition, but we are not chasing scale for the sake of it. We start with the smallest meaningful budget that lets us learn quickly, then scale once we see consistent signals.",
  },
  {
    question: "Will you lock me into a long contract?",
    answer:
      "No. We work month to month and earn the renewal. If something is not working, we want you to be able to step back and reassess without friction.",
  },
  {
    question: "Do you handle landing pages too?",
    answer:
      "Yes. Most ad performance issues are actually landing page issues. We will tell you when the page is the bottleneck, and either fix it or build a focused one for the campaign.",
  },
  {
    question: "How will I know it is actually working?",
    answer:
      "You get plain-English weekly reporting that shows what is improving, what is not, and what we are changing next. No vanity metrics, no hiding behind impressions.",
  },
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";
const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function PaidAdsManagementPage() {
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
              <Megaphone className="h-4 w-4" />
              <p className="text-xs font-medium uppercase tracking-[0.12em]">
                Paid Ads Management
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Stop watching your budget disappear into clicks that go nowhere.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Most paid campaigns do not fail because the platforms are broken.
              They fail because targeting is too broad, creative is too generic,
              and no one is watching the data closely enough to act on it. We
              build campaigns where every dollar has a job, and every week
              someone is making sure that job is being done.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#trial"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                See the 90-day trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-2xl"
            />
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur">
              <PaidAdsIllustration />
            </div>
          </div>
        </section>

        {/* Friction */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>The reality you are facing</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Three uncomfortable patterns we see in most ad accounts
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              If any of these feel familiar, you are not alone. They are the
              default outcome when campaigns are set up once and then left to
              drift.
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
              Paid ads run like a system, not a side project
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
              From audit to weekly optimisation, in plain English
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
              Paid ads are the fastest, most honest feedback loop your business
              has.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Run well, paid is the quickest way to learn what your buyers
              actually respond to: which problems they care about, which words
              cut through, which offers they take seriously. We treat every
              campaign as a structured experiment that funds itself, then
              reinvest those lessons into the rest of your marketing.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Tighter targeting and better-fit leads",
                "Creative built around real buyer language",
                "Tracking you can actually trust",
                "A weekly rhythm of refinement, not set and forget",
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

        {/* 90-day trial */}
        <section id="trial" className="mt-20 scroll-mt-8">
          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className={chapterClass}>Trial offer</p>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                90 days
              </span>
            </div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Try paid ads for 3 months. You cover the spend, we handle
              everything else.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Not sure if paid ads will work for your business? This trial is
              designed to remove the risk from finding out. You set the budget,
              we build and run the campaigns, and after 90 days you have real
              data to make a decision with.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  What we handle
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Campaign strategy and audience targeting",
                    "Ad copy and creative direction",
                    "Google Ads and Meta Ads setup",
                    "Weekly optimisation and bid management",
                    "Plain-English reporting every week",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-slate-200">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  How it works
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Starts with a strategy call to align on goals and targeting",
                    "You set the ad budget, we make it work as hard as possible",
                    "90-day window with clear weekly milestones",
                    "No lock-in contract after the trial period",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-slate-200">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <LeadCaptureForm
                    source="Paid Ads Trial"
                    buttonLabel="Start my trial"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Common questions</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              The questions most owners ask before handing over a budget
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
              Ready to make every click pull its weight?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and we will look at your current ad setup,
              the audiences you should be reaching, and where the biggest gains
              are hiding before you spend another dollar.
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </div>
  );
}
