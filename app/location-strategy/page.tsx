import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart2,
  CircleCheckBig,
  Compass,
  MapPin,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import LeadCaptureForm from "@/components/lead-capture-form";

export const metadata: Metadata = {
  title: "Location Strategy | Envision Digital Solution",
  description:
    "Location Strategy helps businesses choose better locations, target better areas, and grow with more confidence using suburb data, competitor insights, demographics, and market mapping.",
};

const whoItIsFor = [
  "Cafes and restaurants",
  "Clinics and allied health providers",
  "Gyms and fitness studios",
  "Retail stores",
  "Service-based businesses",
  "Franchises",
  "New business owners choosing their first location",
  "Existing businesses looking to expand",
];

const whatWeLookAt = [
  { icon: Users, label: "Customer demographics" },
  { icon: MapPin, label: "Nearby competitors" },
  { icon: TrendingUp, label: "Local demand" },
  { icon: Compass, label: "Suburb and area trends" },
  { icon: BarChart2, label: "Accessibility and visibility" },
  { icon: Search, label: "Search behaviour" },
  { icon: BarChart2, label: "Opportunity gaps" },
  { icon: MapPin, label: "Local marketing potential" },
];

const clientReceives = [
  "Location opportunity summary",
  "Competitor and area insights",
  "Suburb or area comparison",
  "Recommended target areas",
  "Marketing recommendations based on the location insights",
];

const panelClass = "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur";
const chapterClass = "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function LocationStrategyPage() {
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
            <p className={chapterClass}>Location Strategy</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Choose better locations. Target better areas. Grow with more
              confidence.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              We help businesses understand which suburbs, streets, or local
              areas have the strongest opportunity based on customer
              demographics, competition, local demand, accessibility, and market
              insights.
            </p>
            <div className="pt-2">
              <a
                href="/#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* What is Location Strategy */}
        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>What is Location Strategy?</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Make smarter decisions about where to grow.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Location Strategy helps businesses make smarter decisions about
              where to open, expand, advertise, or focus their growth. Instead
              of guessing, we use location-based data and market insights to
              identify stronger opportunities. Whether you are choosing your
              first premises, considering a second location, or trying to reach
              better-fit customers in nearby areas, Location Strategy gives you
              a clearer picture before you commit.
            </p>
          </div>
        </section>

        {/* Who it is for */}
        <section className="mt-16">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Who it is for</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Built for businesses making growth decisions.
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whoItIsFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4"
              >
                <CircleCheckBig className="h-4 w-4 shrink-0 text-cyan-300" />
                <p className="text-sm font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we look at */}
        <section className="mt-16">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>What we look at</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              A clear picture of your local opportunity.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeLookAt.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-white">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* What the client receives */}
        <section className="mt-16">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>What you receive</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Clear outputs, not just data.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              We translate location insights into practical, easy-to-understand
              outputs that help you make a decision with confidence.
            </p>
            <ul className="mt-6 space-y-3">
              {clientReceives.map((item) => (
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

        {/* How it connects to digital marketing */}
        <section className="mt-16">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>How it connects</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Location Strategy is the starting point, not a standalone
              service.
            </h2>
          </div>
          <div className="mt-8">
            <p className="max-w-3xl text-base leading-relaxed text-slate-300">
              Once we understand where the best opportunities are, we can build
              the right digital strategy around it. This can include local SEO,
              suburb-based landing pages, Google Ads, Meta Ads, website updates,
              and content targeting the right audience. When your marketing is
              built on a clear understanding of your local market, every dollar
              goes further.
            </p>
          </div>
        </section>

        {/* Free Snapshot Offer */}
        <section className="mt-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className={chapterClass}>Free offer</p>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                No cost, no obligation
              </span>
            </div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Get a free Location Strategy snapshot for your area.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and we will put together a focused snapshot
              of your local market. Where the opportunity is, who your
              competitors are, and which areas are worth targeting first. You
              keep it whether you proceed with us or not.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Suburb and area opportunity summary",
                "Nearby competitor overview",
                "Local demand and search behaviour",
                "Recommended target areas",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-relaxed text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <LeadCaptureForm
                source="Location Strategy Snapshot"
                buttonLabel="Claim my free snapshot"
              />
            </div>
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
