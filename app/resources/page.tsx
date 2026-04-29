import type { Metadata } from "next";
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Map,
  MapPin,
  Megaphone,
  MousePointerClick,
  Search,
} from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import RoadmapCapture from "@/components/roadmap-capture";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const pageTitle = "Free Marketing Resources for Business Owners";
const pageDescription =
  "Access free marketing, website, local SEO, paid ads, and location strategy resources to help your business grow with more clarity.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    type: "website",
    url: "/resources",
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

type ResourceStatus = "available" | "coming-soon";

type Resource = {
  icon: typeof Compass;
  title: string;
  description: string;
  status: ResourceStatus;
  ctaLabel: string;
  ctaHref?: string;
};

const resources: Resource[] = [
  {
    icon: Compass,
    title: "90-Day Marketing Clarity Plan",
    description:
      "A simple guide to help you understand what to focus on across your website, marketing, content, and conversion journey over the next 90 days.",
    status: "available",
    ctaLabel: "Download Guide",
    ctaHref: "#download-roadmap",
  },
  {
    icon: MapPin,
    title: "Business Location Checklist",
    description:
      "A checklist for business owners thinking about opening, expanding, or targeting a new area. It helps identify key factors such as customer fit, competition, accessibility, local demand, and marketing potential.",
    status: "coming-soon",
    ctaLabel: "Coming Soon",
  },
  {
    icon: Search,
    title: "Local SEO Checklist",
    description:
      "A practical checklist to help local businesses improve their Google visibility, suburb targeting, website structure, and local search presence.",
    status: "coming-soon",
    ctaLabel: "Coming Soon",
  },
  {
    icon: MousePointerClick,
    title: "Website Conversion Checklist",
    description:
      "A quick checklist to help businesses review whether their website is clear, trustworthy, easy to use, and designed to turn visitors into enquiries.",
    status: "coming-soon",
    ctaLabel: "Coming Soon",
  },
  {
    icon: Megaphone,
    title: "Paid Ads Readiness Checklist",
    description:
      "A simple checklist to help businesses work out whether they are ready to run paid ads, including landing pages, offer clarity, tracking, budget, and follow-up process.",
    status: "coming-soon",
    ctaLabel: "Coming Soon",
  },
  {
    icon: Map,
    title: "Location Strategy Starter Guide",
    description:
      "A beginner-friendly guide explaining how location strategy can help businesses understand where to open, expand, advertise, or focus their growth using local market insights.",
    status: "coming-soon",
    ctaLabel: "Coming Soon",
  },
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";
const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function ResourcesPage() {
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
        <section className="mt-12 sm:mt-16">
          <div className="max-w-3xl space-y-4">
            <p className={chapterClass}>Resources</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Free resources to help you grow with more clarity.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Practical guides, checklists, and tools to help you improve your
              marketing, website, and business growth decisions before you
              spend more money.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#resource-grid"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                Explore Resources
              </a>
            </div>
          </div>
        </section>

        {/* Page intro */}
        <section className="mt-16">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Why these resources</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Get clear before you spend more.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Not every business needs to spend more straight away. Sometimes
              the best first step is getting clear on what is working, what is
              missing, and where the biggest opportunities are. These resources
              are designed to help business owners make smarter decisions
              around digital marketing, websites, local growth, and location
              strategy.
            </p>
          </div>
        </section>

        {/* Resources grid */}
        <section id="resource-grid" className="mt-16 scroll-mt-24">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>The library</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Pick the area you want to get clearer on.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;
              const isAvailable = resource.status === "available";

              return (
                <article key={resource.title} className={cardClass}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        isAvailable
                          ? "border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
                          : "border-white/10 bg-slate-950/60 text-slate-400"
                      }`}
                    >
                      {isAvailable ? "Available now" : "Coming soon"}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {resource.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {resource.description}
                  </p>
                  <div className="mt-6">
                    {isAvailable && resource.ctaHref ? (
                      <a
                        href={resource.ctaHref}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                      >
                        {resource.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-5 text-sm font-semibold text-slate-400"
                      >
                        <ClipboardCheck className="h-4 w-4" />
                        {resource.ctaLabel}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 90-Day Marketing Clarity Plan download */}
        <section id="download-roadmap" className="mt-20 scroll-mt-24">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <div className="flex flex-wrap items-center gap-3">
              <p className={chapterClass}>Available now</p>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                Free download
              </span>
            </div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Get the 90-Day Marketing Clarity Plan.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              The same framework we use with clients. Drop in your email and we
              will send it through, no follow-up pressure, just a useful
              starting point for your next 90 days.
            </p>
            <div className="mt-8 max-w-xl">
              <RoadmapCapture />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Not sure where to start?</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Need help working out what to focus on first?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              If you&apos;re not sure whether your website, marketing, or
              location strategy needs the most attention, book a strategy call
              and we&apos;ll help you find the clearest next step.
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
