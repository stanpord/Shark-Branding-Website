'use client'

import { useState } from 'react'

const BOOKING_URL = 'https://bookmenow.info/book/jstanaland/30-minutes'

const INDUSTRIES = [
  'HVAC / Air Conditioning',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Landscaping / Lawn Care',
  'Cleaning Services',
  'Restaurant / Food Service',
  'Healthcare / Medical',
  'Legal / Law Firm',
  'Real Estate',
  'Insurance',
  'Auto Service / Mechanic',
  'Salon / Beauty',
  'Fitness / Gym',
  'Contractor / Construction',
  'Retail / E-commerce',
  'Financial Services',
  'Dental / Orthodontics',
  'Pest Control',
  'Painting',
  'Other',
]

const STATUS_COLOR: Record<string, string> = {
  pass: '#22c55e',
  warn: '#f59e0b',
  fail: '#ef4444',
}

const STATUS_LABEL: Record<string, string> = {
  pass: 'Pass',
  warn: 'Needs Work',
  fail: 'Missing',
}

const SIGNAL_ICONS: Record<string, string> = {
  'Schema Markup': '⬡',
  'Local Signals': '◎',
  'FAQ Content': '?',
  'Authority Proof': '★',
  'Technical Access': '⚙',
  'AI Citation Readiness': '⬤',
}

type Finding = {
  signal: string
  status: 'pass' | 'warn' | 'fail'
  summary: string
  fix: string
}

type AuditResult = {
  score: number
  findings: Finding[]
}

function ScoreRing({ score }: { score: number }) {
  const r = 54
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ
  const color = score >= 70 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444'

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
        <text x="70" y="66" textAnchor="middle" fill="white" fontSize="32" fontWeight="700">
          {score}
        </text>
        <text x="70" y="86" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="12">
          out of 100
        </text>
      </svg>
      <p className="text-[13px] mt-2" style={{ color }}>
        {score >= 70 ? 'Strong AI Visibility' : score >= 40 ? 'Needs Improvement' : 'Low AI Visibility'}
      </p>
    </div>
  )
}

export default function AuditForm() {
  const [form, setForm] = useState({ businessName: '', websiteUrl: '', city: '', industry: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [result, setResult] = useState<AuditResult | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setResult(null)
    setErrorMsg('')

    try {
      const res = await fetch('/api/ai-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setState('error')
        return
      }
      setResult(data)
      setState('done')
    } catch {
      setErrorMsg('Network error — please check your connection and try again.')
      setState('error')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
  }

  if (state === 'loading') {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: '#091c24', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex flex-col items-center gap-5">
          <div
            className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: '#18b5d8', borderTopColor: 'transparent' }}
          />
          <div>
            <p className="text-white font-semibold text-base mb-1">Running your AI visibility audit…</p>
            <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Checking schema, local signals, citations, and more
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (state === 'done' && result) {
    const passCount = result.findings.filter((f) => f.status === 'pass').length
    return (
      <div className="space-y-6">
        {/* Score card */}
        <div className="rounded-2xl p-6 md:p-8" style={{ background: '#091c24', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-center text-[11px] font-semibold tracking-[0.1em] uppercase mb-6" style={{ color: '#18b5d8' }}>
            AI Visibility Score for {form.businessName}
          </p>
          <div className="flex justify-center mb-6">
            <ScoreRing score={result.score} />
          </div>
          <p className="text-center text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {passCount} of {result.findings.length} signals passing
          </p>
        </div>

        {/* Findings */}
        <div className="rounded-2xl overflow-hidden" style={{ background: '#091c24', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="px-6 pt-6 pb-2">
            <p className="text-white font-semibold text-[15px]">Signal Breakdown</p>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {result.findings.map((f) => (
              <div key={f.signal} className="px-6 py-4">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px]" style={{ color: '#18b5d8' }}>
                      {SIGNAL_ICONS[f.signal] || '•'}
                    </span>
                    <span className="text-[13px] font-semibold text-white">{f.signal}</span>
                  </div>
                  <span
                    className="shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] rounded-full px-2.5 py-0.5"
                    style={{
                      color: STATUS_COLOR[f.status],
                      background: `${STATUS_COLOR[f.status]}18`,
                      border: `1px solid ${STATUS_COLOR[f.status]}40`,
                    }}
                  >
                    {STATUS_LABEL[f.status]}
                  </span>
                </div>
                <p className="text-[12px] mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {f.summary}
                </p>
                {f.status !== 'pass' && (
                  <p className="text-[12px]" style={{ color: '#18b5d8' }}>
                    Fix: {f.fix}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-6 md:p-8 text-center" style={{ background: 'rgba(24,181,216,0.08)', border: '1px solid rgba(24,181,216,0.2)' }}>
          <p className="text-white font-bold text-[18px] mb-2">Want the full picture?</p>
          <p className="text-[13px] mb-6 max-w-sm mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Book a free call and we&apos;ll walk you through a deeper report, show you exactly where you&apos;re losing ground to AI, and build a plan to fix it.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.08em] hover:opacity-90 transition-opacity"
            style={{ background: '#18b5d8', color: '#07141a' }}
          >
            Book a Free Call
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-[11px] mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            No obligation. 30 minutes. Real answers.
          </p>
        </div>

        <button
          onClick={() => { setState('idle'); setResult(null) }}
          className="w-full text-center text-[13px] py-2 hover:opacity-80 transition-opacity"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          Run another audit
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-2xl p-6 md:p-8" style={{ background: '#091c24', border: '1px solid rgba(255,255,255,0.08)' }}>
        {state === 'error' && (
          <div className="mb-5 rounded-xl px-4 py-3 text-[13px]" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}>
            {errorMsg}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Business Name
              </label>
              <input
                type="text"
                placeholder="Acme Plumbing"
                required
                value={form.businessName}
                onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Website URL
              </label>
              <input
                type="text"
                placeholder="acmeplumbing.com"
                required
                value={form.websiteUrl}
                onChange={(e) => setForm({ ...form, websiteUrl: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                City &amp; State
              </label>
              <input
                type="text"
                placeholder="Tampa, FL"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                style={inputStyle}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Industry
              </label>
              <select
                required
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none appearance-none"
                style={{ ...inputStyle, color: form.industry ? '#fff' : 'rgba(255,255,255,0.35)' }}
              >
                <option value="" disabled>Select industry</option>
                {INDUSTRIES.map((i) => (
                  <option key={i} value={i} style={{ background: '#091c24', color: '#fff' }}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
            style={{ background: '#18b5d8', color: '#07141a' }}
          >
            Run My Free AI Visibility Audit
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            No credit card. No account. Results in under 60 seconds.
          </p>
        </form>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Object.entries(SIGNAL_ICONS).map(([label, icon]) => (
          <div
            key={label}
            className="rounded-xl px-3 py-3 flex items-center gap-2 text-xs"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}
          >
            <span style={{ color: '#18b5d8', fontSize: '0.65rem' }}>{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </>
  )
}
