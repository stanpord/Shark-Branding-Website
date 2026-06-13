"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/aiemployees", label: "AI Employees" },
  { href: "/automation", label: "Automation" },
  { href: "/ai-assessment", label: "AI Assessment" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/plans", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      {/* Rebrand announcement bar */}
      <div className="bg-[#18b5d8] text-white text-center text-[12px] font-semibold tracking-wide py-2 px-4">
        Shark Branding Solutions is now&nbsp;<span className="font-extrabold">Shark AI Solutions</span>&nbsp;— same team, bigger mission.
      </div>
      <div className="bg-white border-b border-[#e0e0e0]">
      <nav className="w-full h-11 max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.webp"
            alt="Shark AI Solutions"
            width={120}
            height={32}
            className="h-7 w-auto object-contain"
            priority
            onError={() => {}}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="nav-link rounded motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 text-[#1d1d1f] hover:text-[#18b5d8]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/free-report"
            className="btn-press bg-[#18b5d8] text-white text-[12px] font-semibold rounded-full px-4 py-1.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1d1d1f] min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="flex flex-col gap-[5px]" aria-hidden="true">
            <span className="block w-5 h-px bg-[#1d1d1f]" />
            <span className="block w-5 h-px bg-[#1d1d1f]" />
            <span className="block w-5 h-px bg-[#1d1d1f]" />
          </span>
        </button>
      </nav>
      </div>{/* end white nav bar */}

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute inset-x-0 bg-white py-6 px-6 flex flex-col gap-5 border-t border-[#e0e0e0]" style={{ top: 'calc(2.75rem + 2rem + env(safe-area-inset-top))' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="min-h-[44px] flex items-center text-base motion-safe:transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 text-[#1d1d1f] hover:text-[#18b5d8]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/free-report"
            onClick={() => setOpen(false)}
            className="btn-press self-start bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-5 py-3 hover:bg-[#1ec8ee] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      )}
    </header>
  );
}
