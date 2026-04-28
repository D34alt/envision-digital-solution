import type { Metadata } from "next";
import {
  ArrowRight,
  CircleCheckBig,
  Code2,
  Compass,
  Gauge,
  LayoutTemplate,
  MessageSquareWarning,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import FaqItem from "@/components/faq-item";
import { WebsiteIllustration } from "@/components/service-illustrations";

export const metadata: Metadata = {
  title:
    "Website Design and Development | Envision Digital Solution",
  description:
    "We design and build websites that load fast, communicate clearly, and turn visitors into enquiries. Modern, mobile-first, conversion-focused websites for Melbourne businesses.",
};

const frictions = [
  {
    icon: MessageSquareWarning,
    title: "Visitors land, then quietly leave",
    description:
      "You are getting traffic, but the bounce rate tells a different story. Your homepage looks fine, yet people are not enquiring.",
  },
  {
    icon: Smartphone,
    title: "It does not feel right on a phone",
    description:
      "Most of your visitors are on mobile, but your buttons are too small, the menu is awkward, and forms feel like a chore to complete.",
  },
  {
    icon: Wrench,
    title: "Every small change feels like a project",
    description:
      "You want to update a section or add a service page, and instead you are emailing a developer and waiting two weeks for a quote.",
  },
];

const deliverables = [
  {
    icon: LayoutTemplate,
    title: "Conversion-first structure",
    description:
      "Pages built around what your buyer actually needs to know to take the next step. No fluff, no filler, no generic stock language.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first by default",
    description:
      "Everything is designed for the small screen first, then scaled up. Touch targets, readable text, and forms that do not fight your thumb.",
  },
  {
    icon: Gauge,
    title: "Built for speed",
    description:
      "Modern stack, optimised images, and minimal bloat so your site loads quickly on a phone and a flaky connection.",
  },
  {
    icon: ShieldCheck,
    title: "Stable, secure, easy to update",
    description:
      "Hosting, security, and a clean structure that is easy to extend. Adding a new page or section is not a six-week project.",
  },
];

const process = [
  {
    icon: Compass,
    title: "Clarify",
    description:
      "We start with what the website is meant to do, who it is talking to, and what success actually looks like.",
  },
  {
    icon: LayoutTemplate,
    title: "Wireframe",
    description:
      "We map the flow before we worry about colours and fonts. The structure is what makes a website convert.",
  },
  {
    icon: Sparkles,
    title: "Design and build",
    description:
      "A clean, professional design built on a fast modern stack. You see progress in stages, not in a single big reveal.",
  },
  {
    icon: Rocket,
    title: "Launch and iterate",
    description:
      "We ship, monitor real visitor behaviour, and refine. A website is not finished at launch, it is just open for business.",
  },
];

const faqs = [
  {
    question: "Can you work with the brand and assets I already have?",
    answer:
      "Yes. We can work from your existing brand, simple references, or wireframes. If you do not have brand assets yet, we can help shape the basics so the site still feels considered.",
  },
  {
    question: "How long does a website project usually take?",
    answer:
      "A focused marketing site is typically a few weeks of design and build, plus a short feedback loop. Larger sites with more pages, integrations, or content take longer, and we will tell you the realistic range up front.",
  },
  {
    question: "Will I be able to edit the site myself afterwards?",
    answer:
      "Yes. We hand over a clean structure with simple editing for the parts you actually need to change, and we stay available for the heavier lifts so you are not stuck if something needs adjusting.",
  },
  {
    question: "Can you redesign an existing site without losing my SEO?",
    answer:
      "Yes. We map your current pages, redirects, and ranking content before launch so the new site keeps the equity you have built rather than starting from zero.",
  },
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";
const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";
const chapterClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function WebsiteDesignAndDevelopmentPage() {
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
              <Code2 className="h-4 w-4" />
              <p className="text-xs font-medium uppercase tracking-[0.12em]">
                Website Design and Development
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your website should be your hardest-working salesperson, not your
              biggest disappointment.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Most business websites quietly cost their owners enquiries every
              week. Slow on mobile, unclear about who they help, and built more
              like a brochure than a buying journey. We design and build the
              opposite: fast, focused, mobile-first websites that actually move
              prospects toward a decision.
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
              <WebsiteIllustration />
            </div>
          </div>
        </section>

        {/* Friction */}
        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>The reality you are facing</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Things you have probably already noticed about your current site
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              These are the patterns we see most often before we rebuild. None
              of them are unfixable. They are just rarely solved by adding more
              pages.
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
              A website built like a system, not a one-off project
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
              A clear process, with no surprises in the final invoice
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
              A website is not a marketing expense, it is the room your buyer
              walks into.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Every ad, every search result, every word-of-mouth recommendation
              eventually points back to your site. If the room they walk into
              feels slow, generic, or confusing, it does not matter how strong
              the campaign was. We build the room first, then make sure
              everything else points the right people toward it.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Faster pages, less drop-off on mobile",
                "Clear messaging that speaks to real buyer concerns",
                "A structure that holds up as your business grows",
                "An asset that compounds with every campaign",
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
              Things people usually ask before starting a build
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
              Ready to give your website a job description?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and we will look at your current site, the
              audience you are trying to reach, and where the biggest gains are
              hiding before any redesign begins.
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
