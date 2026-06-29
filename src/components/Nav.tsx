"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/aiemployees", label: "AI Employees" },
  { href: "/automation", label: "Automation" },
  { href: "/ai-assessment", label: "AI Assessment" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/plans", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

const resourcesDropdown = [
  {
    section: "AI Employees",
    items: [
      { href: "/resources/blog-what-is-ai-voice-receptionist", label: "What Is an AI Voice Receptionist?" },
      { href: "/resources/blog-what-is-ai-crm-vs-hubspot", label: "What Is an AI CRM?" },
      { href: "/resources/blog-what-is-ai-sales-manager", label: "What Is an AI Sales Manager?" },
      { href: "/resources/blog-what-is-ai-sales-assistant-bant-sandler", label: "What Is an AI Sales Assistant?" },
      { href: "/resources/blog-full-ai-suite-pricing", label: "How Much Does the Full AI Suite Cost?" },
    ],
  },
  {
    section: "AI Visibility",
    items: [
      { href: "/resources/blog-how-to-appear-in-google-ai-overviews", label: "How to Appear in Google AI Overviews" },
      { href: "/resources/blog-ai-receptionist-vs-human-receptionist", label: "AI Receptionist vs. Human Receptionist" },
      { href: "/resources/blog-end-of-local-seo-ai-visibility", label: "The End of Local SEO as You Know It" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleResourcesEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResourcesOpen(true);
  }

  function handleResourcesLeave() {
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 120);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      {/* Rebrand announcement bar */}
      <div className="bg-[#18b5d8] text-white text-center text-[12px] font-semibold tracking-wide py-2 px-4">
        Shark Branding Solutions is now&nbsp;<span className="font-extrabold">Shark AI Solutions</span>&nbsp;,  same team, bigger mission.
      </div>
      <div className="bg-white border-b border-[#e0e0e0]">
      <nav className="w-full h-20 max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.webp"
            alt="Shark AI Solutions"
            width={200}
            height={72}
            className="h-16 w-auto object-contain"
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

          {/* Resources with dropdown */}
          <li
            className="relative"
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <Link
              href="/resources"
              className="nav-link rounded motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 text-[#1d1d1f] hover:text-[#18b5d8] flex items-center gap-1"
            >
              Resources
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-150 ${resourcesOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {resourcesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-[20px] border border-[#e8e8ed] shadow-[0_8px_40px_rgba(0,0,0,0.10)] p-6"
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                {/* Arrow */}
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#e8e8ed] rotate-45" />

                <div className="grid grid-cols-2 gap-6">
                  {resourcesDropdown.map((group) => (
                    <div key={group.section}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8] mb-3">{group.section}</p>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className="text-[13px] text-[#333] hover:text-[#18b5d8] transition-colors leading-snug block py-0.5"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[#f0f0f0]">
                  <Link
                    href="/resources"
                    onClick={() => setResourcesOpen(false)}
                    className="text-[13px] font-semibold text-[#18b5d8] hover:underline"
                  >
                    View all resources →
                  </Link>
                </div>
              </div>
            )}
          </li>
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
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute inset-x-0 bg-white py-6 px-6 flex flex-col gap-5 border-t border-[#e0e0e0]" style={{ top: 'calc(5rem + 2.25rem + env(safe-area-inset-top))' }}>
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

          {/* Mobile Resources accordion */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="min-h-[44px] flex items-center justify-between w-full text-base text-[#1d1d1f] hover:text-[#18b5d8] transition-colors"
            >
              Resources
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-150 ${mobileResourcesOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {mobileResourcesOpen && (
              <div className="mt-2 pl-4 flex flex-col gap-3">
                {resourcesDropdown.map((group) => (
                  <div key={group.section}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8] mb-2">{group.section}</p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setOpen(false); setMobileResourcesOpen(false); }}
                        className="block py-1.5 text-[14px] text-[#333] hover:text-[#18b5d8] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/resources"
                  onClick={() => { setOpen(false); setMobileResourcesOpen(false); }}
                  className="text-[13px] font-semibold text-[#18b5d8] mt-1"
                >
                  View all resources →
                </Link>
              </div>
            )}
          </div>

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
