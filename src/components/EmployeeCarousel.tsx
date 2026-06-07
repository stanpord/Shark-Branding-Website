"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

const INTERVAL = 5000

/* ── Workflow mock components ─────────────────────────── */

function GemmaWorkflow() {
  return (
    <div className="bg-[#f5f5f7] rounded-[16px] p-5 border border-[#e8e8ed]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[10px] font-bold">G</div>
        <p className="text-[12px] font-semibold text-[#0a0a0a]">Gemma</p>
        <span className="ml-auto flex items-center gap-1 text-[11px] text-green-600 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online 24/7
        </span>
      </div>
      <div className="space-y-2.5">
        <div className="flex justify-start">
          <div className="bg-white border border-[#e8e8ed] text-[#333] text-[12px] rounded-[12px] rounded-tl-[4px] px-3 py-2 max-w-[85%] leading-relaxed">
            Hey! I&rsquo;m Gemma. Are you looking for a quote, or do you have a question I can help with?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#18b5d8] text-white text-[12px] rounded-[12px] rounded-tr-[4px] px-3 py-2 max-w-[80%]">
            Need a quote for a roof inspection
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white border border-[#e8e8ed] text-[#333] text-[12px] rounded-[12px] rounded-tl-[4px] px-3 py-2 max-w-[85%] leading-relaxed">
            Got it. What&rsquo;s the zip code? And is this for a full inspection or storm damage?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#18b5d8] text-white text-[12px] rounded-[12px] rounded-tr-[4px] px-3 py-2 max-w-[80%]">
            33544, storm damage
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white border border-[#e8e8ed] text-[#333] text-[12px] rounded-[12px] rounded-tl-[4px] px-3 py-2 max-w-[85%] leading-relaxed">
            Perfect. I have openings Thursday at 9 AM or Friday at 1 PM. Which works better?
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 bg-white rounded-full border border-[#e8e8ed] px-3 py-2">
        <span className="text-[11px] text-[#999] flex-1">Type a message…</span>
        <div className="w-5 h-5 rounded-full bg-[#18b5d8] flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function ReputationWorkflow() {
  return (
    <div className="space-y-3">
      {/* Review request SMS */}
      <div className="bg-[#f5f5f7] rounded-[16px] p-4 border border-[#e8e8ed]">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-3">Post-Job SMS — Sent Automatically</p>
        <div className="bg-white rounded-[10px] border border-[#e8e8ed] p-3">
          <p className="text-[12px] text-[#333] leading-relaxed">
            Hi Marcus! Thanks for choosing us for your AC service today. If you have a moment, we&rsquo;d love a quick Google review — it means the world to a small business. Tap here: [link]
          </p>
        </div>
        <div className="flex items-center justify-between mt-2.5">
          <span className="text-[10px] text-[#999]">Sent 2 hrs after job completion</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Delivered</span>
        </div>
      </div>
      {/* Review came in */}
      <div className="bg-[#f5f5f7] rounded-[16px] p-4 border border-[#e8e8ed]">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-3">Review Response — Auto Within 2 Hours</p>
        <div className="flex gap-1 mb-2">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-[11px] text-[#555] italic mb-2">&ldquo;Amazing service. Fast, professional, fixed the issue in one visit.&rdquo;</p>
        <div className="bg-white rounded-[10px] border border-[#e8e8ed] p-3">
          <p className="text-[11px] text-[#333] leading-relaxed">
            Thank you, Marcus! We&rsquo;re so glad we could get your AC sorted quickly — we&rsquo;ll pass the kind words to the whole team!
          </p>
          <p className="text-[10px] text-[#18b5d8] font-semibold mt-1.5">AI Response · Posted automatically</p>
        </div>
      </div>
    </div>
  )
}

function CRMWorkflow() {
  const steps = [
    { day: 'Immediately', channel: 'Email', label: 'Acknowledgment', sent: true },
    { day: '5 min', channel: 'SMS', label: 'First follow-up text', sent: true },
    { day: '24 hrs', channel: 'Email', label: 'Value follow-up', sent: true },
    { day: 'Day 3', channel: 'Phone', label: 'Outbound call attempt', sent: false },
    { day: 'Day 10', channel: 'Email', label: 'Final touch', sent: false },
  ]
  return (
    <div className="bg-[#f5f5f7] rounded-[16px] p-5 border border-[#e8e8ed]">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999] mb-4">Follow-Up Sequence — Starts the Moment a Lead Comes In</p>
      <div className="space-y-2">
        {steps.map((s) => (
          <div key={s.day} className="flex items-center gap-3 py-2.5 border-b border-[#e8e8ed] last:border-0">
            <div className="w-16 text-[10px] text-[#999] font-semibold shrink-0">{s.day}</div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
              s.channel === 'Email' ? 'bg-blue-100 text-blue-700' :
              s.channel === 'SMS' ? 'bg-green-100 text-green-700' :
              'bg-orange-100 text-orange-700'
            }`}>{s.channel}</span>
            <p className="text-[12px] text-[#333] flex-1">{s.label}</p>
            <span className={`w-2 h-2 rounded-full shrink-0 ${s.sent ? 'bg-green-400' : 'bg-[#d1d5db]'}`} />
          </div>
        ))}
      </div>
      <div className="mt-4 bg-[#0a0a0a] rounded-[10px] px-4 py-3">
        <p className="text-[11px] font-semibold text-[#18b5d8]">Stops the moment they reply or book.</p>
      </div>
    </div>
  )
}

/* ── Employee data ────────────────────────────────────── */

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
    stats: [
      { val: "3–7", label: "qualified leads booked overnight" },
      { val: "24/7", label: "never clocks out" },
    ],
    workflow: <GemmaWorkflow />,
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
    stats: [
      { val: "21", label: "new reviews in 30 days" },
      { val: "2hr", label: "response on every review" },
    ],
    workflow: <ReputationWorkflow />,
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
    stats: [
      { val: "21×", label: "more likely to qualify in 5 min" },
      { val: "78%", label: "buy from the first responder" },
    ],
    workflow: <CRMWorkflow />,
  },
]

/* ── Carousel ─────────────────────────────────────────── */

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
    >
      <div className="rounded-[24px] overflow-hidden" style={{ background: emp.colorBg }}>
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left — Identity + stats */}
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

          {/* Right — Live workflow mock */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-white">
            <div className="mb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#999] mb-4">See it in action</p>
              {emp.workflow}
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
