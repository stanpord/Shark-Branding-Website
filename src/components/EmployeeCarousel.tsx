"use client"

import { useState, useEffect, useCallback } from "react"
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
  },
]

const INTERVAL = 5000

export default function EmployeeCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c === employees.length - 1 ? 0 : c + 1))
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? employees.length - 1 : c - 1))
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [paused, next])

  const emp = employees[current]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card */}
      <div
        className="rounded-[24px] overflow-hidden"
        style={{ background: emp.colorBg }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left — Identity */}
          <div className="p-8 md:p-10 flex flex-col justify-between" style={{ background: emp.color }}>
            <div>
              <span
                className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                {emp.role}
              </span>

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

            <Link
              href={emp.href}
              className="inline-block text-[14px] font-bold text-white rounded-full px-6 py-3 hover:opacity-90 motion-safe:transition-opacity self-start"
              style={{ background: emp.color }}
            >
              Meet {emp.name} →
            </Link>
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
              onClick={() => { setCurrent(i); setPaused(true) }}
              aria-label={`Go to ${e.name}`}
              className="rounded-full motion-safe:transition-all duration-300"
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
            onClick={() => { prev(); setPaused(true) }}
            aria-label="Previous employee"
            className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#555] hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => { next(); setPaused(true) }}
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
