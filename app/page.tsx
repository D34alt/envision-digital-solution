import Image from "next/image";

import CursorGlow from "@/components/cursor-glow";
import ContactForm from "@/components/contact-form";
import CopyEmail from "@/components/copy-email";
import RoadmapCapture from "@/components/roadmap-capture";
import FaqItem from "@/components/faq-item";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import LeadCaptureForm from "@/components/lead-capture-form";
import { HomeIllustration } from "@/components/service-illustrations";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CircleCheckBig,
  Code2,
  Compass,
  Gauge,
  Mail,
  Map,
  Megaphone,
  MousePointerClick,
  Network,
  Rocket,
  Share2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const frictions = [
  {
    icon: AlertTriangle,
    title: "You are spending money, but growth still feels unpredictable",
    description:
      "A common scenario: you put budget into ads each month, yet enquiry quality swings wildly and sales still feel inconsistent.",
  },
  {
    icon: Network,
    title: "Your channels are active, but not aligned",
    description:
      "You post on social, run ads, and send emails, but each channel tells a different story, so prospects lose confidence before they enquire.",
  },
  {
    icon: BarChart3,
    title: "You see data everywhere, but no clear next move",
    description:
      "Impressions go up, clicks look fine, but revenue is flat. The real problem is not effort, it is unclear priorities.",
  },
];

const clientScenarios = [
  {
    icon: Share2,
    title: "Posting consistently, but still hearing silence",
    description:
      "Many businesses post three to five times a week and build reach, yet still get few serious enquiries because the offer feels vague.",
  },
  {
    icon: MousePointerClick,
    title: "Ads get clicks, landing pages lose people",
    description:
      "A frequent issue is message mismatch: the ad promises one thing, the page feels generic, and high-intent visitors drop off quickly.",
  },
  {
    icon: Mail,
    title: "Leads enquire once, then disappear",
    description:
      "Without a follow-up nurture flow, warm leads cool off fast. This is where many good opportunities quietly die.",
  },
];

const servicePillars = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Reach the right people with SEO, paid ads, social media, and content strategies designed to generate better enquiries.",
    href: "/services",
  },
  {
    icon: Code2,
    title: "Websites and Conversion",
    description:
      "Build a stronger online presence with websites and landing pages designed to look professional, communicate clearly, and turn visitors into leads.",
    href: "/services",
  },
  {
    icon: Map,
    title: "Location Strategy",
    description:
      "Understand where your best opportunities are before spending money on marketing, opening a new location, or expanding into a new area.",
    href: "/location-strategy",
  },
];

const differentiators = [
  {
    icon: Compass,
    title: "Strategy before spending",
    description:
      "We understand where your best opportunities are before recommending what to invest. Location data, audience insight, and market context all shape the plan before any budget moves.",
  },
  {
    icon: Workflow,
    title: "One system, not scattered tactics",
    description:
      "Your SEO, paid ads, website, social, and location strategy are planned as one connected system. Every channel reinforces the same message instead of competing for attention.",
  },
  {
    icon: ShieldCheck,
    title: "Plain English, every week",
    description:
      "You get clear, honest updates on what is working, what is not, and what is changing. No jargon, no vanity metrics, just a straight read on where things stand and what happens next.",
  },
];

const frameworkSteps = [
  {
    icon: Compass,
    title: "Discover and Diagnose",
    description:
      "We review your current funnel and identify exactly where attention is being lost before it becomes revenue.",
  },
  {
    icon: Map,
    title: "Build the Growth Plan",
    description:
      "You get a clear 90-day roadmap with channel priorities, message angles, and practical focus areas.",
  },
  {
    icon: Rocket,
    title: "Launch and Coordinate",
    description:
      "We execute across your key channels with one connected strategy, so every campaign reinforces the same promise.",
  },
  {
    icon: Gauge,
    title: "Optimise Weekly",
    description:
      "We track behaviour, refine creative, and reallocate effort to what is genuinely improving lead quality.",
  },
];

const engagementPoints = [
  "A tailored 90-day digital marketing roadmap",
  "Campaign execution across your highest-priority channels",
  "Weekly optimisation rhythm with plain-English reporting",
  "Clear focus on better-fit leads and conversion behaviour",
];

const faqs = [
  {
    question: "What if I have tried agencies before and been disappointed?",
    answer:
      "That is common. Our approach is intentionally transparent, strategy-led, and grounded in practical weekly actions tied to real outcomes.",
  },
  {
    question: "Do I need a large budget to get started?",
    answer:
      "Not always. We start by prioritising the highest-leverage channels for your stage, then scale once consistent signals appear.",
  },
  {
    question: "How quickly can we start seeing useful signals?",
    answer:
      "Most businesses start seeing clearer performance direction in the early weeks, with stronger improvements as optimisation compounds.",
  },
  {
    question: "Can you handle website builds if I do not need full design?",
    answer:
      "Yes. We can work from existing brand assets, simple references, or wireframes and focus on a strong development implementation.",
  },
];

const stats = [
  {
    icon: Compass,
    value: "Buyer-first messaging",
    label: "Speak to real buying concerns",
  },
  {
    icon: Gauge,
    value: "Weekly optimisation",
    label: "Clear reporting and next actions",
  },
  {
    icon: Network,
    value: "Connected channels",
    label: "SEO, paid, social and nurture aligned",
  },
];

const panelClass = "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur";

const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";

const chapterClass = "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 overflow-x-clip bg-slate-950 text-slate-100">
      {/* Smooth ambient gradients */}
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

        <section className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1.5 text-cyan-300">
              <Image
                src="/branding/circle-blue.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-full"
              />
              <p className="text-xs font-medium uppercase tracking-[0.12em]">
                Digital marketing, websites, and location strategy
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Digital marketing, websites, and location strategy for businesses
              ready to grow smarter.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We help businesses improve their online presence, attract
              better-fit customers, and make smarter growth decisions using
              digital marketing, conversion strategy, and location-based
              insights.
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
                Explore Services
              </a>
            </div>
          </div>

          <aside className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>What your audience is thinking</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Before people enquire, they quietly ask themselves three questions
            </h2>
            <ol className="mt-5 space-y-4">
              {[
                "Do they actually understand my problem, or are they just selling a package?",
                "Can I trust them to use my budget properly?",
                "Is it worth taking the next step with them right now?",
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              Our strategy aligns your messaging and campaigns to answer these
              questions clearly, so enquiry feels natural.
            </p>
            <div className="mt-8 grid gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-base font-semibold leading-tight text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </section>

        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 1: The challenge</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Real signs your marketing is working hard but not working properly
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {frictions.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

<section id="examples" className="mt-20 scroll-mt-8">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 2: Real-world examples</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Situations we see every week in growing businesses
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {clientScenarios.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

<section id="services" className="mt-20 scroll-mt-8">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 3: The solution</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How we turn these problems into a clear growth plan
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              Everything above is fixable. The difference is building one
              connected strategy instead of patching individual channels.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {servicePillars.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.title}
                  href={service.href}
                  className={`${cardClass} group flex flex-col`}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

<section id="framework" className="mt-20 scroll-mt-8">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 4: The framework</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              What working together looks like, step by step
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {frameworkSteps.map((step, index) => {
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

        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-2xl"
              />
              <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur">
                <HomeIllustration />
              </div>
            </div>
            <div className="order-1 space-y-4 lg:order-2">
              <p className={chapterClass}>Interlude</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                One connected system, not scattered tactics.
              </h2>
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                SEO, paid ads, websites, location strategy, and content all
                share the same hub: a clear understanding of your buyer, your
                market, and the next decision they need to make. When every
                channel reinforces that, marketing stops feeling like a
                collection of efforts and starts behaving like a system that
                pulls in the same direction.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 5: Why Envision</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              What makes our approach different
            </h2>
            <p className="text-base leading-relaxed text-slate-400">
              Most businesses guess where to advertise, who to target, or where
              to grow next. We combine digital marketing, website strategy, and
              location insights to help businesses make smarter decisions
              before they spend.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => {
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

        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Act 6: Engagement</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
              Clear scope, clear process, clear outcomes
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <ul className="space-y-3">
                {engagementPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
              <RoadmapCapture />
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Take the next step</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Ready to grow with more clarity?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
              Book a strategy call and let&apos;s look at where your business
              is now, where the opportunity is, and what needs to happen next.
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

        <section className="mt-16">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Common questions</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Honest answers to what clients usually ask first
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

        <section className="mt-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className={chapterClass}>Trial offer</p>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                90 days
              </span>
            </div>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Try paid ads for 3 months. You cover the spend, we handle everything else.
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

        <section id="contact" className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-4">
                <p className={chapterClass}>Final step</p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  If marketing currently feels confusing, we can make it clear.
                </h2>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  Book a strategy conversation and we will map your
                  highest-value opportunities across channel, messaging, and
                  conversion flow.
                </p>
                <CopyEmail />
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
