// NOTE: This page is a general template and should be reviewed by a legal professional before being relied on fully.

import type { Metadata } from "next";

import CursorGlow from "@/components/cursor-glow";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Privacy Policy for Envision Digital Solutions. Learn how we collect, use, and protect your personal information.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className={bodyClass}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <div className="mt-12 space-y-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur sm:p-10">

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>1. About This Policy</h2>
            <p className={bodyClass}>
              Envision Digital Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and disclose information when you visit our website or use our services.
            </p>
            <p className={bodyClass}>
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>2. Information We May Collect</h2>
            <p className={bodyClass}>We may collect the following types of personal information:</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Your name, email address, and phone number when you submit a contact or enquiry form</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Information about your business, including its name, industry, and current marketing situation, when you engage with us</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Your email address when you sign up to receive free resources or marketing communications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Usage data such as pages visited, time spent on site, and referring URL, collected through website analytics tools</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>3. Contact Forms and Enquiry Submissions</h2>
            <p className={bodyClass}>
              When you complete a contact form, book a strategy call, or submit an enquiry through our website, we collect the information you provide in order to respond to your request and provide you with relevant services. This information is used solely to communicate with you and assess how we can help your business.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>4. Email Marketing and Resource Downloads</h2>
            <p className={bodyClass}>
              If you sign up to receive a free resource, newsletter, or marketing communications from us, we will use your email address to send you the requested content and, from time to time, relevant updates or insights. You may unsubscribe at any time by clicking the unsubscribe link in any email we send, or by contacting us directly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>5. Website Analytics and Cookies</h2>
            <p className={bodyClass}>
              Our website may use analytics tools such as Google Analytics or Vercel Analytics to help us understand how visitors use our site. These tools may collect information such as your IP address, browser type, device type, pages visited, and time spent on site. This information is used in aggregate to improve our website and services.
            </p>
            <p className={bodyClass}>
              Cookies are small data files stored on your device. You can control cookie settings through your browser. Note that disabling cookies may affect some functionality of our website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>6. Third-Party Tools and Platforms</h2>
            <p className={bodyClass}>
              We may use third-party tools and platforms to operate our business and deliver our services. These may include:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Hosting and infrastructure providers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Website analytics platforms (such as Google Analytics or Vercel Analytics)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Email and CRM platforms used to manage communications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>Advertising platforms such as Google Ads and Meta Ads, when running campaigns on behalf of clients</span>
              </li>
            </ul>
            <p className={`mt-3 ${bodyClass}`}>
              Each of these providers has their own privacy policy. We do not sell or share your personal information with third parties for their own marketing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>7. How We Store and Protect Your Information</h2>
            <p className={bodyClass}>
              We take reasonable precautions to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>8. Access, Correction, and Deletion</h2>
            <p className={bodyClass}>
              You have the right to request access to, correction of, or deletion of your personal information held by us. To make such a request, please contact us using the details below. We will respond within a reasonable timeframe and in accordance with applicable Australian privacy laws.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>9. Links to Other Websites</h2>
            <p className={bodyClass}>
              Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>10. Changes to This Policy</h2>
            <p className={bodyClass}>
              We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated date. We encourage you to review this page periodically.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeadingClass}>11. Contact Us</h2>
            <p className={bodyClass}>
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
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
