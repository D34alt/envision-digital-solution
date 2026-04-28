import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart2,
  Code2,
  Mail,
  MapPin,
  Megaphone,
  Search,
  Share2,
  Workflow,
} from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { ServicesIllustration } from "@/components/service-illustrations";

export const metadata: Metadata = {
  title: "Services | Envision Digital Solution",
  description:
    "From websites and SEO to paid ads, automation, and location strategy, we help businesses build a stronger digital foundation and make smarter growth decisions.",
};

const services = [
  {
    icon: Code2,
    title: "Website Design and Development",
    description:
      "A website is only as valuable as the results it creates. We design and build websites that communicate clearly, load fast, and are structured to turn visitors into enquiries. Whether you are starting from scratch or rebuilding, we focus on a clean, professional result that actually works.",
    href: "/services/website-design-and-development",
  },
  {
    icon: Search,
    title: "SEO and Content Strategy",
    description:
      "If your ideal customers are searching online and not finding you, we fix that. We build intent-led pages, optimise your site structure, and develop content that brings qualified, local traffic to your business over time.",
    href: "/services/seo-and-content-strategy",
  },
  {
    icon: Megaphone,
    title: "Paid Ads Management",
    description:
      "We manage Google Ads and Meta Ads campaigns that target the right people with the right message. No wasted clicks on low-fit audiences. We focus on lead quality, not just volume, and optimise continuously to improve results.",
    href: "/services/paid-ads-management",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Social media works when it is consistent, clear, and built around your audience. We create content strategies and manage your presence in a way that builds genuine trust and drives real enquiry behaviour, not just likes.",
  },
  {
    icon: BarChart2,
    title: "Conversion Optimisation",
    description:
      "Traffic that does not convert is wasted opportunity. We review your key pages, simplify the visitor journey, improve your calls to action, and remove the friction that stops people from taking the next step.",
  },
  {
    icon: Mail,
    title: "Email and CRM Nurture",
    description:
      "Most leads do not buy immediately. We build practical email nurture sequences and CRM workflows that keep warm leads engaged, answer their concerns, and guide them back to a decision when they are ready.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "We set up smart automations that handle the repetitive parts of your marketing and follow-up process. From lead capture to booking confirmations to re-engagement flows, automation helps you do more without adding more to your plate.",
  },
  {
    icon: MapPin,
    title: "Location Strategy",
    description:
      "Before spending on marketing, it pays to understand where your best opportunities actually are. We use location-based insights, suburb data, competitor analysis, and local demand signals to help you make smarter decisions about where to target, open, or expand.",
    href: "/location-strategy",
  },
];

const panelClass = "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";
const chapterClass = "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function ServicesPage() {
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

        <section className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className={chapterClass}>Services</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Everything you need to grow smarter.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              From websites and SEO to paid ads, automation, and location
              strategy, we help businesses build a stronger digital foundation
              and make smarter growth decisions.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-2xl"
            />
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur">
              <ServicesIllustration />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              if (service.href) {
                return (
                  <a
                    key={service.title}
                    href={service.href}
                    className={`${cardClass} group flex flex-col`}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                );
              }

              return (
                <article key={service.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Get started</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Not sure which services suit your business?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and we will review your current situation,
              identify the highest-impact areas, and map out a practical path
              forward.
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
