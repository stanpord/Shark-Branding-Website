"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

const servicesDropdown = [
  { href: "/services", label: "AI Visibility", desc: "ChatGPT, Google AI, Gemini citations" },
  { href: "/automation", label: "AI Automation", desc: "Workflows that replace manual tasks" },
  { href: "/ai-assessment", label: "AI Assessment", desc: "See where you stand in 48 hours" },
];

const aiEmployeesDropdown = [
  { href: "/aiemployees", label: "Meet the AI Team", bold: true },
  { href: "/resources/blog-what-is-ai-voice-receptionist", label: "What Is an AI Voice Receptionist?" },
  { href: "/resources/blog-what-is-ai-crm-vs-hubspot", label: "What Is an AI CRM?" },
  { href: "/resources/blog-what-is-ai-sales-manager", label: "What Is an AI Sales Manager?" },
  { href: "/resources/blog-what-is-ai-sales-assistant-bant-sandler", label: "What Is an AI Sales Assistant?" },
  { href: "/resources/blog-full-ai-suite-pricing", label: "How Much Does the Full AI Suite Cost?" },
];

const resourcesDropdown = [
  { href: "/resources/blog-how-to-appear-in-google-ai-overviews", label: "How to Appear in Google AI Overviews" },
  { href: "/resources/blog-ai-receptionist-vs-human-receptionist", label: "AI Receptionist vs. Human Receptionist" },
  { href: "/resources/blog-end-of-local-seo-ai-visibility", label: "The End of Local SEO as You Know It" },
  { href: "/resources/blog-ai-funnel-chatgpt-new-front-door", label: "ChatGPT Is the New Front Door" },
];

const flatLinks = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
];

type DropdownKey = "services" | "aiEmployees" | "resources" | null;

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="10" height="6" viewBox="0 0 10 6" fill="none"
      className={`shrink-0 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const linkBase =
  "flex items-center gap-1 text-[13px] font-medium text-[#1d1d1f] hover:text-[#18b5d8] px-3 py-2 rounded-lg motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2";

const dropdownPanel =
  "absolute top-full mt-2 bg-white rounded-2xl shadow-[0_4px_28px_rgba(0,0,0,0.11)] p-3 z-50";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter(key: DropdownKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  function closeAll() {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileAiOpen(false);
    setMobileResourcesOpen(false);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      {/* Rebrand bar */}
      <div className="bg-[#18b5d8] text-white text-center text-[12px] font-medium py-2 px-4 leading-[18px]">
        Shark Branding Solutions is now&nbsp;<strong className="font-bold">Shark AI Solutions</strong>&nbsp;— same team, bigger mission.
      </div>

      <div className="bg-white/95 backdrop-blur-sm border-b border-[#e0e0e0]">
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

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">

            {/* Services dropdown */}
            <li className="relative" onMouseEnter={() => handleEnter("services")} onMouseLeave={handleLeave}>
              <Link href="/services" className={linkBase}>
                Services
                <Chevron isOpen={activeDropdown === "services"} />
              </Link>
              {activeDropdown === "services" && (
                <div
                  className={`${dropdownPanel} left-1/2 -translate-x-1/2 w-[296px]`}
                  onMouseEnter={() => handleEnter("services")}
                  onMouseLeave={handleLeave}
                >
                  <ul className="space-y-0.5">
                    {servicesDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                        >
                          <span className="text-[13px] font-semibold text-[#1d1d1f] group-hover:text-[#18b5d8] transition-colors">
                            {item.label}
                          </span>
                          <span className="text-[12px] text-[#6e6e73]">{item.desc}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* AI Employees dropdown */}
            <li className="relative" onMouseEnter={() => handleEnter("aiEmployees")} onMouseLeave={handleLeave}>
              <Link href="/aiemployees" className={linkBase}>
                AI Employees
                <Chevron isOpen={activeDropdown === "aiEmployees"} />
              </Link>
              {activeDropdown === "aiEmployees" && (
                <div
                  className={`${dropdownPanel} left-1/2 -translate-x-1/2 w-[272px]`}
                  onMouseEnter={() => handleEnter("aiEmployees")}
                  onMouseLeave={handleLeave}
                >
                  <ul className="space-y-0.5">
                    {aiEmployeesDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className={`block px-3 py-2 rounded-xl text-[13px] leading-snug hover:bg-[#f5f5f7] hover:text-[#18b5d8] transition-colors ${
                            item.bold ? "font-semibold text-[#1d1d1f]" : "text-[#444]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Flat links */}
            {flatLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkBase}>
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Resources dropdown */}
            <li className="relative" onMouseEnter={() => handleEnter("resources")} onMouseLeave={handleLeave}>
              <Link href="/resources" className={linkBase}>
                Resources
                <Chevron isOpen={activeDropdown === "resources"} />
              </Link>
              {activeDropdown === "resources" && (
                <div
                  className={`${dropdownPanel} right-0 w-[296px]`}
                  onMouseEnter={() => handleEnter("resources")}
                  onMouseLeave={handleLeave}
                >
                  <ul className="space-y-0.5">
                    {resourcesDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2 rounded-xl text-[13px] text-[#444] leading-snug hover:bg-[#f5f5f7] hover:text-[#18b5d8] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 pt-2 border-t border-[#f0f0f0] px-3">
                    <Link
                      href="/resources"
                      onClick={() => setActiveDropdown(null)}
                      className="text-[13px] font-semibold text-[#18b5d8] hover:underline"
                    >
                      View all resources →
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/free-report"
              className="btn-press bg-[#18b5d8] text-white text-[13px] font-semibold rounded-full px-5 py-2 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get Free AI Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded text-[#1d1d1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="flex flex-col gap-[5px]" aria-hidden="true">
              <span className={`block w-5 h-px bg-current transition-transform duration-200 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-current transition-transform duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu — always rendered, CSS-animated */}
      <div
        aria-hidden={!open}
        className={`lg:hidden absolute inset-x-0 bg-white border-t border-[#e0e0e0] overflow-y-auto transition-[opacity,transform] duration-200 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto visible" : "opacity-0 -translate-y-2 pointer-events-none invisible"
        }`}
        style={{
          top: "calc(5rem + 34px + env(safe-area-inset-top))",
          maxHeight: "calc(100dvh - 5rem - 34px - env(safe-area-inset-top))",
        }}
      >
        <div className="py-3 px-6 flex flex-col">

          {/* Services accordion */}
          <div className="border-b border-[#f5f5f7]">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="min-h-[48px] flex items-center justify-between w-full text-[15px] font-medium text-[#1d1d1f] hover:text-[#18b5d8] transition-colors"
            >
              Services
              <Chevron isOpen={mobileServicesOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ease-out ${mobileServicesOpen ? "max-h-[240px] pb-3" : "max-h-0"}`}>
              <div className="flex flex-col gap-0.5 pl-1">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="flex flex-col gap-0.5 py-2 px-3 rounded-xl hover:bg-[#f5f5f7]"
                  >
                    <span className="text-[14px] font-semibold text-[#1d1d1f]">{item.label}</span>
                    <span className="text-[12px] text-[#6e6e73]">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* AI Employees accordion */}
          <div className="border-b border-[#f5f5f7]">
            <button
              onClick={() => setMobileAiOpen(!mobileAiOpen)}
              className="min-h-[48px] flex items-center justify-between w-full text-[15px] font-medium text-[#1d1d1f] hover:text-[#18b5d8] transition-colors"
            >
              AI Employees
              <Chevron isOpen={mobileAiOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ease-out ${mobileAiOpen ? "max-h-[360px] pb-3" : "max-h-0"}`}>
              <div className="flex flex-col gap-0.5 pl-1">
                {aiEmployeesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className={`block py-2 px-3 rounded-xl text-[14px] leading-snug hover:bg-[#f5f5f7] hover:text-[#18b5d8] transition-colors ${
                      item.bold ? "font-semibold text-[#1d1d1f]" : "text-[#444]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Flat links */}
          {flatLinks.map((l) => (
            <div key={l.href} className="border-b border-[#f5f5f7]">
              <Link
                href={l.href}
                onClick={closeAll}
                className="min-h-[48px] flex items-center text-[15px] font-medium text-[#1d1d1f] hover:text-[#18b5d8] transition-colors"
              >
                {l.label}
              </Link>
            </div>
          ))}

          {/* Resources accordion */}
          <div className="border-b border-[#f5f5f7]">
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="min-h-[48px] flex items-center justify-between w-full text-[15px] font-medium text-[#1d1d1f] hover:text-[#18b5d8] transition-colors"
            >
              Resources
              <Chevron isOpen={mobileResourcesOpen} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ease-out ${mobileResourcesOpen ? "max-h-[360px] pb-3" : "max-h-0"}`}>
              <div className="flex flex-col gap-0.5 pl-1">
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    className="block py-2 px-3 rounded-xl text-[14px] text-[#444] leading-snug hover:bg-[#f5f5f7] hover:text-[#18b5d8] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/resources"
                  onClick={closeAll}
                  className="block py-2 px-3 text-[13px] font-semibold text-[#18b5d8]"
                >
                  View all resources →
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="pt-5 pb-4">
            <Link
              href="/free-report"
              onClick={closeAll}
              className="btn-press block w-full text-center bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-5 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
