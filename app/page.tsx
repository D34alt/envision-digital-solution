import Image from "next/image";

import CursorGlow from "@/components/cursor-glow";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CircleCheckBig,
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
    title: "You are getting traffic, but not enough qualified leads",
    description:
      "Clicks alone do not grow a business. Without a full-funnel plan, attention rarely becomes revenue.",
  },
  {
    icon: Network,
    title: "Your marketing channels are working in silos",
    description:
      "Paid ads, SEO, social and email should amplify each other, not compete for budget without direction.",
  },
  {
    icon: BarChart3,
    title: "Reporting is noisy and hard to action",
    description:
      "When data is unclear, decisions slow down. Growth comes from simple, measurable priorities each week.",
  },
];

const servicePillars = [
  {
    icon: Megaphone,
    title: "Paid Ads Management",
    description:
      "Google and Meta campaigns designed around commercial intent, not vanity metrics.",
  },
  {
    icon: Search,
    title: "SEO and Content Strategy",
    description:
      "Search visibility built through targeted pages and content mapped to buyer intent.",
  },
  {
    icon: Share2,
    title: "Social Media Growth",
    description:
      "Brand-led social systems that build trust and keep your business consistently top of mind.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Journey Optimisation",
    description:
      "Landing pages and website journeys improved to turn attention into enquiries.",
  },
  {
    icon: Mail,
    title: "Email and CRM Nurture",
    description:
      "Automated nurture journeys that warm up leads and move prospects towards decision.",
  },
];

const frameworkSteps = [
  {
    icon: Compass,
    title: "Discover and Diagnose",
    description:
      "We audit your market, funnel and channels to identify where growth is leaking.",
  },
  {
    icon: Map,
    title: "Build the Growth Plan",
    description:
      "We define channel roles, messaging angles, and a practical 90-day action roadmap.",
  },
  {
    icon: Rocket,
    title: "Launch and Coordinate",
    description:
      "We execute campaigns across the right channels with one clear strategy and creative direction.",
  },
  {
    icon: Gauge,
    title: "Optimise Weekly",
    description:
      "We review results, reallocate effort, and refine creative and copy to improve performance over time.",
  },
];

const differentiators = [
  {
    icon: Crosshair,
    title: "Strategy before spend",
    description:
      "Every campaign starts with positioning and intent mapping, so budget follows a clear commercial purpose.",
  },
  {
    icon: Workflow,
    title: "One connected growth system",
    description:
      "We design channels to work together, creating compounding momentum instead of isolated activity.",
  },
  {
    icon: CircleCheckBig,
    title: "Clarity-led reporting",
    description:
      "You get plain-English updates focused on actions, priorities and expected impact.",
  },
];

const engagementPoints = [
  "90-day digital marketing roadmap tailored to your goals",
  "Channel setup and campaign execution across priority platforms",
  "Weekly optimisation rhythm and transparent performance reviews",
  "Clear focus on lead quality, conversion intent and pipeline growth",
];

const faqs = [
  {
    question: "Do you work with early-stage businesses?",
    answer:
      "Yes. We work with both growing and established businesses, provided there is commitment to a consistent growth strategy.",
  },
  {
    question: "Do I need all channels from day one?",
    answer:
      "No. We prioritise the channels that best match your audience and commercial goals, then scale from there.",
  },
  {
    question: "How soon can we begin?",
    answer:
      "Most projects can begin quickly after a discovery call and planning session, depending on scope and readiness.",
  },
];

const stats = [
  {
    icon: Compass,
    value: "Full-Funnel",
    label: "Awareness to enquiry strategy",
  },
  {
    icon: Gauge,
    value: "Weekly",
    label: "Optimisation and reporting cadence",
  },
  {
    icon: Network,
    value: "Multi-Channel",
    label: "SEO, paid, social and nurture",
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
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#framework" className="transition hover:text-white">
              Framework
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
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

        <section className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
                Digital marketing that drives business growth
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Build a predictable pipeline with digital marketing designed for
              qualified enquiries.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Envision Digital Solution helps service businesses attract the
              right audience, increase conversion intent, and turn marketing
              activity into measurable pipeline outcomes.
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
                href="#framework"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                See Our Growth Framework
              </a>
            </div>
          </div>

          <aside className={`${panelClass} p-6 sm:p-8`}>
            <p className={chapterClass}>The growth story</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              How we move your audience from attention to action
            </h2>
            <ol className="mt-5 space-y-4">
              {[
                "Attract the right people with clear channel positioning.",
                "Build trust through relevant messaging and proof.",
                "Convert intent with focused offers and low-friction next steps.",
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
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                      {stat.label}
                    </p>
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
              If this feels familiar, your growth system likely needs structure
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

        <section id="services" className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className={chapterClass}>Act 2: The channels</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Services built to create demand and convert intent
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
            <p className={chapterClass}>Act 3: The framework</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              A clear operating model for sustainable digital growth
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
            <p className={chapterClass}>Act 4: Why Envision</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              What makes our approach different
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
            <p className={chapterClass}>Act 5: Engagement</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-3xl">
              A practical digital marketing engagement focused on lead quality
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
              What businesses often ask before getting started
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
                Ready to turn marketing effort into consistent pipeline growth?
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Book a strategy conversation and we will map where your best
                growth opportunities are across channel, messaging and funnel.
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
