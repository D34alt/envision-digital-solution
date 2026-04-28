"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Info,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/services", label: "Services", icon: Megaphone },
  { href: "/location-strategy", label: "Location Strategy", icon: MapPin },
  { href: "/examples", label: "Examples", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Mail },
];

// Minimum vertical scroll delta (px) before we toggle the hide/show state.
// Stops the header flickering on tiny trackpad jitters.
const SCROLL_DELTA = 6;

// Below this scrollY (px) the header is always visible, so the top of the
// page never appears with a hidden navigation bar.
const TOP_REVEAL_THRESHOLD = 80;

export default function SiteHeader() {
  // The contact CTA always routes to the dedicated /contact page, even
  // from the homepage, so the click feels like a proper navigation.
  const ctaHref = "/contact";

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastY.current;

        if (currentY < TOP_REVEAL_THRESHOLD) {
          setHidden(false);
        } else if (delta > SCROLL_DELTA) {
          setHidden(true);
          setMenuOpen(false);
        } else if (delta < -SCROLL_DELTA) {
          setHidden(false);
        }

        lastY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu when the user presses Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-3 z-50 rounded-3xl border border-white/10 bg-slate-900/70 p-3 backdrop-blur transition-transform duration-300 ease-out will-change-transform sm:top-4 sm:p-4 ${
        hidden
          ? "-translate-y-[calc(100%+1.5rem)]"
          : "translate-y-0"
      }`}
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/branding/envision-logo-light.png"
            alt="Envision Digital Solution"
            width={220}
            height={45}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <div aria-hidden className="hidden h-5 w-px shrink-0 bg-white/15 md:block" />

        <nav className="hidden min-w-0 overflow-x-auto md:flex md:flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max items-center gap-1 px-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <Link
          href={ctaHref}
          className="ml-auto inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:ml-0"
        >
          <span className="md:hidden">Book</span>
          <span className="hidden md:inline xl:hidden">Book Strategy</span>
          <span className="hidden xl:inline">Book a Strategy Call</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-slate-200 transition hover:border-cyan-400/55 hover:bg-cyan-500/10 hover:text-white md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav
        id="mobile-nav-panel"
        aria-hidden={!menuOpen}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out md:hidden ${
          menuOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-2 border-t border-white/10 pt-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-sm font-medium text-slate-200 transition hover:border-cyan-400/55 hover:bg-cyan-500/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
