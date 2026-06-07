"use client"

import { useState } from "react"
import Link from "next/link"

const employees = [
  {
    id: "gemma",
    name: "Gemma",
    role: "Chat Receptionist",
    color: "#18b5d8",
    colorBg: "#e8f8fc",
    colorText: "#0d7fa8",
    href: "/aiemployees#gemma",
    tagline: "Your business, open 24/7.",
    desc: "Gemma greets every website visitor, asks 2 to 3 qualifying questions, and books them directly to your calendar — day or night, without any effort from your team.",
    stats: [
      { val: "3–7", label: "qualified leads booked overnight" },
      { val: "24/7", label: "never clocks out" },
    ],
    features: ["Instant lead capture", "Real-time calendar booking", "SMS & email confirmations", "Voice receptionist add-on"],
    comingSoon: false,
  },
  {
    id: "reputation",
    name: "Reputation Specialist",
    role: "Review Manager",
    color: "#d4a200",
    colorBg: "#fef9e7",
    colorText: "#9a7400",
    href: "/aiemployees#reputation",
    tagline: "Build trust without lifting a finger.",
    desc: "After every completed job, your Reputation Specialist sends a personalized SMS review request. Every incoming review gets a brand-voice response within two hours. Automatically.",
    stats: [
      { val: "21", label: "new reviews in 30 days" },
      { val: "2hr", label: "response time on every review" },
    ],
    features: ["Post-job SMS review requests", "Auto-response to all reviews", "Google & Facebook coverage", "Sentiment analysis and insights"],
    comingSoon: false,
  },
  {
    id: "aicrm",
    name: "AI CRM",
    role: "Sales Assistant",
    color: "#18b5d8",
    colorBg: "#e8f8fc",
    colorText: "#0d7fa8",
    href: "/aiemployees#aicrm",
    tagline: "No lead goes cold. Ever.",
    desc: "Every new lead gets an immediate response and a multi-touch sequence across email, SMS, and phone. The moment they reply or book, it stops. No awkward messages. No dropped balls.",
    stats: [
      { val: "21×", label: "more likely to qualify a lead in 5 min" },
      { val: "78%", label: "of buyers go with the first responder" },
    ],
    features: ["Immediate lead response", "Email, SMS, and phone sequences", "Cold lead re-engagement at 30/60/90 days", "CRM auto-logging"],
    comingSoon: false,
  },
  {
    id: "blogger",
    name: "Blogger",
    role: "Content Writer",
    color: "#4FD1A0",
    colorBg: "#edfaf5",
    colorText: "#1a7a56",
    href: "/aiemployees#blogger",
    tagline: "Rank. Get cited. Get found.",
    desc: "Blogger publishes weekly SEO articles targeting the exact keywords your customers search for, structured to get cited by Google AI, ChatGPT, and Perplexity. Hands-free.",
    stats: [
      { val: "52+", label: "articles published per year" },
      { val: "#1", label: "AI citation target per category" },
    ],
    features: ["Keyword-targeted weekly articles", "AI citation optimization", "Schema markup on every post", "Content calendar built for you"],
    comingSoon: true,
  },
  {
    id: "social",
    name: "Social Media Manager",
    role: "Content Publisher",
    color: "#F7555F",
    colorBg: "#fef0f1",
    colorText: "#c73a43",
    href: "/aiemployees#social",
    tagline: "Daily content. Zero effort.",
    desc: "Your Social Media Manager creates and publishes daily on-brand content across Facebook, Instagram, Google Business, and LinkedIn — in your voice, every single day.",
    stats: [
      { val: "31", label: "posts published per month" },
      { val: "4+", label: "platforms managed simultaneously" },
    ],
    features: ["Daily brand-voice posts", "Facebook, Instagram, Google, LinkedIn", "Optimal posting time scheduling", "Monthly performance reports"],
    comingSoon: true,
  },
]

export default function EmployeeCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? employees.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === employees.length - 1 ? 0 : c + 1))

  const emp = employees[current]

  return (
    <div className="relative">
      {/* Card */}
      <div
        className="rounded-[24px] border overflow-hidden"
        style={{ borderColor: emp.colorBg, background: emp.colorBg }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — Identity */}
          <div className="p-8 md:p-10 flex flex-col justify-between" style={{ background: emp.color }}>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
                >
                  {emp.role}
                </span>
                {emp.comingSoon && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-black/20 text-white/80">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Big avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-black text-[36px] mb-6"
                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                {emp.name[0]}
              </div>

              <h3 className="text-[36px] sm:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-3">
                {emp.name}
              </h3>
              <p className="text-white/80 text-[18px] font-semibold leading-snug">
                {emp.tagline}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {emp.stats.map((s) => (
                <div key={s.val} className="bg-white/15 rounded-[14px] p-4">
                  <p className="text-white font-black text-[26px] leading-none mb-1">{s.val}</p>
                  <p className="text-white/70 text-[12px] leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Details */}
          <div className="p-8 md:p-10 flex flex-col justify-between bg-white">
            <div>
              <p className="text-[#555] text-[16px] leading-relaxed mb-8">
                {emp.desc}
              </p>

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#999] mb-4">What it does</p>
              <ul className="space-y-3 mb-8">
                {emp.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14px] text-[#333]">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                      style={{ background: emp.colorBg, color: emp.colorText }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              {emp.comingSoon ? (
                <span className="inline-block text-[14px] font-semibold text-[#999] border border-[#e0e0e0] rounded-full px-5 py-2.5">
                  Coming Soon
                </span>
              ) : (
                <Link
                  href={emp.href}
                  className="inline-block text-[14px] font-bold text-white rounded-full px-6 py-3 hover:opacity-90 motion-safe:transition-opacity"
                  style={{ background: emp.color }}
                >
                  Meet {emp.name} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {employees.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setCurrent(i)}
              aria-label={`Go to ${e.name}`}
              className="rounded-full transition-all motion-safe:transition-all duration-200"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? emp.color : '#d1d5db',
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous employee"
            className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#555] hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next employee"
            className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#555] hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
