"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

const INTERVAL = 5000

/* ── Result summary components (home-page exclusive) ────────────── */

function GemmaResults() {
  const rows = [
    { label: "Leads captured today", val: "7" },
    { label: "Appointments booked", val: "4" },
    { label: "Captured after hours", val: "3" },
    { label: "Avg. response time", val: "< 1 sec" },
  ]
  return (
    <div className="bg-[#f5f5f7] rounded-[16px] p-5 border border-[#e8e8ed]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Live Activity, Today</p>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between py-2.5 border-b border-[#e8e8ed] last:border-0">
            <p className="text-[13px] text-[#444]">{r.label}</p>
            <p className="text-[15px] font-extrabold text-[#0a0a0a]">{r.val}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-[#0a0a0a] rounded-[10px] px-4 py-3">
        <p className="text-[11px] font-semibold text-[#18b5d8]">Running 24/7. No one on your team did any of this.</p>
      </div>
    </div>
  )
}

function ReputationResults() {
  return (
    <div className="space-y-3">
      <div className="bg-[#f5f5f7] rounded-[16px] p-4 border border-[#e8e8ed]">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-3">Last 30 Days</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { val: "21", label: "new Google reviews" },
            { val: "100%", label: "response rate" },
            { val: "1h 47m", label: "avg response time" },
            { val: "4.4 → 4.8", label: "rating trend" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-[10px] border border-[#e8e8ed] p-3 text-center">
              <p className="text-[16px] font-extrabold text-[#0a0a0a] leading-none mb-1">{s.val}</p>
              <p className="text-[10px] text-[#999] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f5f5f7] rounded-[16px] p-4 border border-[#e8e8ed]">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-2">Review pipeline</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-[#e8e8ed] rounded-full h-2">
            <div className="bg-[#d4a200] h-2 rounded-full" style={{ width: "68%" }} />
          </div>
          <span className="text-[11px] font-bold text-[#d4a200] shrink-0">+68% vs last month</span>
        </div>
        <p className="text-[10px] text-[#bbb] mt-1.5">Review requests → responses → posted</p>
      </div>
    </div>
  )
}

function CRMResults() {
  const rows = [
    { icon: "✓", label: "Leads converted this week", val: "3", color: "text-green-600" },
    { icon: "↩", label: "Cold leads re-engaged", val: "2", color: "text-[#18b5d8]" },
    { icon: "✉", label: "Follow-ups sent automatically", val: "47", color: "text-[#555]" },
    { icon: "☏", label: "Outbound call attempts", val: "8", color: "text-orange-500" },
  ]
  return (
    <div className="bg-[#f5f5f7] rounded-[16px] p-5 border border-[#e8e8ed]">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-4">Pipeline Activity, This Week</p>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 py-2.5 border-b border-[#e8e8ed] last:border-0">
            <span className={`text-[13px] shrink-0 ${r.color}`}>{r.icon}</span>
            <p className="text-[12px] text-[#444] flex-1">{r.label}</p>
            <p className="text-[15px] font-extrabold text-[#0a0a0a]">{r.val}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-[#0a0a0a] rounded-[10px] px-4 py-3">
        <p className="text-[11px] font-semibold text-[#18b5d8]">Stops the moment they reply or book.</p>
      </div>
    </div>
  )
}

/* ── Employee data ────────────────────────────────────────────── */

const employees = [
  {
    id: "gemma",
    name: "Gemma",
    role: "Chat Receptionist",
    color: "#18b5d8",
    colorBg: "#e8f8fc",
    href: "/aiemployees#gemma",
    tagline: "Your business, open 24/7.",
    stats: [
      { val: "3–7", label: "qualified leads booked overnight" },
      { val: "24/7", label: "never clocks out" },
    ],
    results: <GemmaResults />,
  },
  {
    id: "reputation",
    name: "Reputation Specialist",
    role: "Review Manager",
    color: "#d4a200",
    colorBg: "#fef9e7",
    href: "/aiemployees#reputation",
    tagline: "Build trust without lifting a finger.",
    stats: [
      { val: "21", label: "new reviews in 30 days" },
      { val: "2hr", label: "response on every review" },
    ],
    results: <ReputationResults />,
  },
  {
    id: "aicrm",
    name: "AI CRM",
    role: "Sales Assistant",
    color: "#18b5d8",
    colorBg: "#e8f8fc",
    href: "/aiemployees#aicrm",
    tagline: "No lead goes cold. Ever.",
    stats: [
      { val: "21×", label: "more likely to qualify in 5 min" },
      { val: "78%", label: "buy from the first responder" },
    ],
    results: <CRMResults />,
  },
]

/* ── Carousel ─────────────────────────────────────────────────── */

export default function EmployeeCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c === employees.length - 1 ? 0 : c + 1)), [])
  const prev = useCallback(() => setCurrent((c) => (c === 0 ? employees.length - 1 : c - 1)), [])

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
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="rounded-[24px] overflow-hidden" style={{ background: emp.colorBg }}>
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left, Identity + stats */}
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

          {/* Right, Results snapshot (unique to home, not shown on /aiemployees) */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-white">
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#999] mb-4">Results at a glance</p>
              {emp.results}
            </div>
            <Link
              href={emp.href}
              className="inline-block text-[14px] font-bold text-white rounded-full px-6 py-3 hover:opacity-90 motion-safe:transition-opacity self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              style={{ background: emp.color }}
            >
              See how {emp.name} works →
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2">
          {employees.map((e, i) => (
            <button
              key={e.id}
              onClick={() => { setCurrent(i); setPaused(true) }}
              aria-label={`Go to ${e.name}`}
              className="rounded-full motion-safe:transition-[width,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-1"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? emp.color : '#d1d5db',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { prev(); setPaused(true) }}
            aria-label="Previous employee"
            className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#555] hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => { next(); setPaused(true) }}
            aria-label="Next employee"
            className="w-10 h-10 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#555] hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
