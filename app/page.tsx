import Image from "next/image";

import CursorGlow from "@/components/cursor-glow";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CircleCheckBig,
  Code2,
  Compass,
  Crosshair,
  Gauge,
  Mail,
  Map,
  Megaphone,
  MousePointerClick,
  Network,
  Rocket,
  Search,
  Share2,
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
    title: "Paid Ads Management",
    description:
      "For businesses tired of paying for low-fit clicks, we tighten targeting, messaging, and offer alignment to improve lead quality.",
  },
  {
    icon: Search,
    title: "SEO and Content Strategy",
    description:
      "If your ideal buyers are searching and not finding you, we build intent-led pages and content that bring qualified traffic.",
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    description:
      "When social feels busy but not effective, we create a clear content rhythm that builds trust and drives real enquiry behaviour.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Journey Optimisation",
    description:
      "If users click but do not convert, we simplify key journeys, improve calls to action, and remove friction in decision moments.",
  },
  {
    icon: Mail,
    title: "Email and CRM Nurture",
    description:
      "For leads that go quiet after first contact, we build practical nurture journeys that keep conversations moving toward action.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "If you already have a brand direction, wireframe, or reference style, we build fast, conversion-focused websites and landing pages with clean implementation.",
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

const differentiators = [
  {
    icon: Crosshair,
    title: "Commercial focus from day one",
    description:
      "We do not chase vanity metrics. We focus on enquiries, conversion intent, and measurable business outcomes.",
  },
  {
    icon: Workflow,
    title: "Connected marketing, not random tactics",
    description:
      "Your channels are planned as one system, so each touchpoint supports the next instead of competing for attention.",
  },
  {
    icon: CircleCheckBig,
    title: "Clear reporting you can actually use",
    description:
      "You get straightforward updates, what changed, why it changed, and what we are doing next.",
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
      <CursorGlow />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        <header className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/branding/envision-logo-light.png"
              alt="Envision Digital Solution"
              width={220}
              height={45}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </a>
          <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
            <a href="#examples" className="transition hover:text-white">
              Examples
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#framework" className="transition hover:text-white">
              Framework
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </header>

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
                Digital marketing for service-led businesses
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              If marketing feels busy but sales still feel inconsistent, you
              are not the problem, your system is.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              You might be posting content, running ads, and trying to improve
              SEO, yet still wondering where the next qualified enquiry is
              coming from. We help you build a clear, connected marketing system
              that turns effort into predictable pipeline growth.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#examples"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                See Real-World Examples
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

        <section id="examples" className="mt-20">
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

        <section id="services" className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 3: The services</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How we solve these problems in practice
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {servicePillars.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="framework" className="mt-20">
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
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 5: Why Envision</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Why clients stay with us long-term
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => {
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

        <section className="mt-20">
          <div className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>Act 6: Engagement</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
              Clear scope, clear process, clear outcomes
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
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
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Plan My Marketing Strategy
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
              <details
                key={item.question}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20">
          <div
            className={`${panelClass} flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between`}
          >
            <div className="max-w-2xl space-y-2">
              <p className={chapterClass}>Final step</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                If marketing currently feels confusing, we can make it clear.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Book a strategy conversation and we will map your highest-value
                opportunities across channel, messaging, and conversion flow.
              </p>
            </div>
            <a
              href="mailto:hello@envisiondigitalsolution.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" />
              hello@envisiondigitalsolution.com
            </a>
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-500 sm:text-sm">
          © {new Date().getFullYear()} Envision Digital Solution. All rights
          reserved.
        </footer>
      </main>
    </div>
  );
}
