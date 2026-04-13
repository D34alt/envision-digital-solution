import Image from "next/image";

import CursorGlow from "@/components/cursor-glow";
const services = [
  {
    title: "Website Design & Development",
    description:
      "Conversion-focused, responsive websites tailored to your brand and growth goals.",
  },
  {
    title: "Brand & Visual Systems",
    description:
      "Cohesive identity direction that keeps your business memorable across every touchpoint.",
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Fast, search-ready experiences engineered to improve discoverability and lead quality.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "We understand your audience, goals, and offers to define a clear digital direction.",
  },
  {
    title: "Design",
    description:
      "We create intuitive layouts and visual hierarchy that guide visitors toward action.",
  },
  {
    title: "Launch",
    description:
      "We deliver a production-ready website with ongoing optimization opportunities.",
  },
];

const highlights = [
  "Mobile-first by default for seamless experiences on phones and tablets",
  "Modern slate aesthetic with purposeful, confidence-building visual clarity",
  "Scalable architecture built for fast iteration as your business grows",
];

const stats = [
  { value: "2-3 Weeks", label: "Typical launch window" },
  { value: "90+", label: "Performance target" },
];

const panelClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75";

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
              src="/branding/envision-logo.png"
              alt="Envision Digital Solution"
              width={220}
              height={45}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Book a Call
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
                Digital agency for modern brands
              </p>
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Web experiences that make your business impossible to ignore.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Envision Digital Solution helps startups and growing businesses
              launch sleek, intuitive websites that convert visitors into
              high-value clients.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Explore Services
              </a>
              <a
                href="#process"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                See Our Process
              </a>
            </div>
          </div>

          <aside className={`${panelClass} p-6 sm:p-8`}>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              What you can expect
            </p>
            <ul className="mt-5 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                >
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="services" className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
              Services
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Everything you need to launch and scale your online presence
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className={`${panelClass} p-6`}>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mt-20">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
              Process
            </p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              A clear path from idea to high-impact launch
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className={`${panelClass} p-6`}>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
                  {`0${index + 1}`}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20">
          <div
            className={`${panelClass} flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between`}
          >
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
                Ready to build?
              </p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Let’s design a website your audience actually remembers.
              </h2>
            </div>
            <a
              href="mailto:hello@envisiondigitalsolution.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
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
