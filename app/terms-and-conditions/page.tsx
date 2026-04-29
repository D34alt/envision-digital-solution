// NOTE: This page is a general template and should be reviewed by a legal professional before being relied on fully.

import type { Metadata } from "next";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const pageTitle = "Terms and Conditions";
const pageDescription =
  "Terms and Conditions for the Envision Digital Solutions website. Please read these terms carefully before using our site.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    type: "website",
    url: "/terms-and-conditions",
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

const chapterClass = "text-xs font-medium uppercase tracking-[0.14em] text-cyan-300";
const sectionHeadingClass = "text-lg font-semibold text-white";
const bodyClass = "text-sm leading-relaxed text-slate-300 sm:text-base";

export default function TermsAndConditionsPage() {
  const lastUpdated = "April 2026";

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

        <section className="mt-12 sm:mt-16">
          <div className="max-w-3xl space-y-4">
            <p className={chapterClass}>Legal</p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Terms &amp; Conditions
            </h1>
            <p className={bodyClass}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <div className="mt-12 space-y-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur sm:p-10">

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>1. Use of This Website</h2>
            <p className={bodyClass}>
              By accessing and using the Envision Digital Solutions website (&quot;the website&quot;), you accept and agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use this website.
            </p>
            <p className={bodyClass}>
              We reserve the right to modify these terms at any time. Continued use of the website after any changes constitutes your acceptance of the updated terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>2. General Information Only</h2>
            <p className={bodyClass}>
              The content on this website is provided for general information purposes only. It is not intended to constitute professional advice of any kind, including marketing, legal, financial, or business advice. You should seek independent professional advice before acting on any information presented on this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>3. No Guarantee of Outcomes</h2>
            <p className={bodyClass}>
              Envision Digital Solutions does not guarantee specific outcomes from any digital marketing, SEO, paid advertising, website, or business strategy services. Results vary depending on a wide range of factors including market conditions, competition, audience behaviour, budget, and execution. Any case studies, examples, or indicative results presented on this website are illustrative only and should not be taken as a guarantee of similar results for your business.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>4. Location Strategy Disclaimer</h2>
            <p className={bodyClass}>
              Location Strategy insights, suburb analyses, and market recommendations provided by Envision Digital Solutions are based on available data and our professional interpretation at the time of delivery. These insights are recommendations only and should not be treated as guaranteed business results, investment advice, or a substitute for independent due diligence. Business location decisions carry inherent risk, and we strongly recommend obtaining independent advice before committing to any significant business decision.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>5. Intellectual Property</h2>
            <p className={bodyClass}>
              All content on this website, including but not limited to text, graphics, logos, images, and page layouts, is the property of Envision Digital Solutions or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>6. Third-Party Links</h2>
            <p className={bodyClass}>
              This website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or take responsibility for the content, accuracy, or practices of any third-party websites. Visiting linked websites is done at your own risk.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>7. Limitation of Liability</h2>
            <p className={bodyClass}>
              To the fullest extent permitted by law, Envision Digital Solutions shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of this website or reliance on any information provided herein. This includes, but is not limited to, loss of profits, loss of business, or loss of data.
            </p>
            <p className={bodyClass}>
              Nothing in these terms limits any rights you may have under Australian consumer law that cannot be excluded by agreement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>8. Governing Law</h2>
            <p className={bodyClass}>
              These Terms &amp; Conditions are governed by the laws of Victoria, Australia. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Victoria.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>9. Contact Us</h2>
            <p className={bodyClass}>
              If you have any questions about these Terms &amp; Conditions, please contact us at:
            </p>
            <div className="mt-3 space-y-1 text-sm text-slate-300">
              <p className="font-medium text-white">Envision Digital Solutions</p>
              <p>Melbourne, Victoria, Australia</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@envisionds.com.au"
                  className="text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  hello@envisionds.com.au
                </a>
              </p>
            </div>
          </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
