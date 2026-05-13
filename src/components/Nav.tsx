"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/operations", label: "Operations" },
  { href: "/marketing", label: "Marketing" },
  { href: "/Hackathon", label: "Hackathon", accent: true },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white h-11 flex items-center border-b border-[#e0e0e0]">
      <nav className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.webp"
            alt="Shark Branding Solutions"
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
                className={`nav-link rounded motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 ${
                  l.accent
                    ? "text-[#9dff42] hover:text-[#7cff00]"
                    : "text-[#1d1d1f] hover:text-[#18b5d8]"
                }`}
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
            Get Free Report
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1d1d1f] p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-5 h-px bg-[#1d1d1f] mb-1" />
          <span className="block w-5 h-px bg-[#1d1d1f] mb-1" />
          <span className="block w-5 h-px bg-[#1d1d1f]" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-11 inset-x-0 bg-white py-6 px-6 flex flex-col gap-5 border-t border-[#e0e0e0]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base motion-safe:transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 ${
                l.accent
                  ? "text-[#72d400] hover:text-[#4d9900] font-semibold"
                  : "text-[#1d1d1f] hover:text-[#18b5d8]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/free-report"
            onClick={() => setOpen(false)}
            className="btn-press self-start bg-[#18b5d8] text-white text-sm font-semibold rounded-full px-5 py-2 hover:bg-[#1ec8ee] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Get Free Report
          </Link>
        </div>
      )}
    </header>
  );
}
