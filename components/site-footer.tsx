"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useCallback } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/location-strategy", label: "Location Strategy" },
  { href: "/examples", label: "Examples" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const coreServices = [
  {
    href: "/services/website-design-and-development",
    label: "Website Design & Development",
  },
  {
    href: "/services/seo-and-content-strategy",
    label: "SEO & Content Strategy",
  },
  {
    href: "/services/paid-ads-management",
    label: "Paid Ads Management",
  },
  { href: "/location-strategy", label: "Location Strategy" },
];

const EMAIL = "hello@envisionds.com.au";

function FooterEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
    >
      <Mail className="h-4 w-4 shrink-0 text-cyan-400/70" />
      {copied ? "Copied!" : EMAIL}
    </button>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Main footer */}
      <footer className="mt-12 mb-8">
        {/* Top divider */}
        <div className="h-px w-full bg-white/10" />

        {/* 4-column grid */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/branding/envision-logo-light.png"
                alt="Envision Digital Solutions"
                width={180}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Stop guessing. Start growing.
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/70" />
              <span>Melbourne, Victoria, Australia</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Core Services
            </h3>
            <ul className="mt-4 space-y-2">
              {coreServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterEmail />
              </li>
              <li>
                <a
                  href="tel:"
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-cyan-400/70" />
                  03 9969 3883
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {year} Envision Digital Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-slate-300"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
