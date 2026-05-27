'use client'

import { useState } from 'react'

type Recommendation = {
  bot: string
  category: 'Visibility' | 'Marketing' | 'Operations'
  priority: number
  why: string
  pitch: string
  urgency: 'high' | 'medium' | 'low'
}

type Result = {
  business_summary: string
  recommendations: Recommendation[]
  notes: string
}

const categoryColors: Record<string, string> = {
  Visibility: 'bg-[#18b5d8]/15 text-[#18b5d8] border border-[#18b5d8]/30',
  Marketing:  'bg-purple-500/15 text-purple-300 border border-purple-500/30',
  Operations: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
}

const urgencyColors: Record<string, string> = {
  high:   'text-red-400',
  medium: 'text-yellow-400',
  low:    'text-white/40',
}

const urgencyLabels: Record<string, string> = {
  high: 'High urgency',
  medium: 'Medium urgency',
  low: 'Lower priority',
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
      className="text-[11px] font-semibold tracking-wide text-[#18b5d8] hover:text-[#1ec8ee] transition-colors shrink-0"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default function BotAdvisor() {
  const [form, setForm] = useState({
    name: '',
    industry: '',
    description: '',
    teamSize: '',
    challenge: '',
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError('')

    try {
      const res = await fetch('/api/bots-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-[#07141a] border border-white/8 rounded-2xl p-7 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="adv-name" className="block text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-2">
              Business Name <span className="text-[#18b5d8]">*</span>
            </label>
            <input
              id="adv-name"
              type="text"
              required
              placeholder="e.g. Tampa Bay HVAC Pro"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/50 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="adv-industry" className="block text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-2">
              Industry / Type <span className="text-[#18b5d8]">*</span>
            </label>
            <input
              id="adv-industry"
              type="text"
              required
              placeholder="e.g. HVAC, Real Estate, Restaurant"
              value={form.industry}
              onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/50 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="adv-desc" className="block text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-2">
            What they do <span className="text-white/20">(optional)</span>
          </label>
          <textarea
            id="adv-desc"
            rows={2}
            placeholder="Brief description: services, location, how they get customers…"
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/50 transition-colors resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="adv-team" className="block text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-2">
              Team size <span className="text-white/20">(optional)</span>
            </label>
            <select
              id="adv-team"
              value={form.teamSize}
              onChange={e => setForm(f => ({ ...f, teamSize: e.target.value }))}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#18b5d8]/50 transition-colors"
            >
              <option value="">Unknown</option>
              <option value="Solo / owner-operator">Solo / owner-operator</option>
              <option value="2–5 people">2–5 people</option>
              <option value="6–15 people">6–15 people</option>
              <option value="16–50 people">16–50 people</option>
              <option value="50+ people">50+ people</option>
            </select>
          </div>
          <div>
            <label htmlFor="adv-challenge" className="block text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-2">
              Main challenge <span className="text-white/20">(optional)</span>
            </label>
            <input
              id="adv-challenge"
              type="text"
              placeholder="e.g. Not showing up on Google, losing leads"
              value={form.challenge}
              onChange={e => setForm(f => ({ ...f, challenge: e.target.value }))}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/50 transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#18b5d8] text-white font-semibold text-[16px] py-4 rounded-xl hover:bg-[#1ec8ee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Analyzing…' : 'Get Bot Recommendations →'}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl px-5 py-4 text-red-300 text-[14px]">
          {error}
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block size-8 border-2 border-[#18b5d8]/30 border-t-[#18b5d8] rounded-full animate-spin mb-4" />
          <p className="text-white/40 text-[14px]">Analyzing {form.name}…</p>
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <div className="space-y-6">
          {/* Business summary */}
          <div className="bg-[#07141a] border border-white/8 rounded-2xl px-6 py-5">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-[#18b5d8] mb-2">Business Read</p>
            <p className="text-white/70 text-[15px] leading-relaxed">{result.business_summary}</p>
          </div>

          {/* Recommendations */}
          <div className="space-y-4">
            {result.recommendations
              .toSorted((a, b) => a.priority - b.priority)
              .map((rec) => (
                <div
                  key={rec.bot}
                  className="bg-[#07141a] border border-white/8 rounded-2xl p-6 space-y-4"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">
                        #{rec.priority}
                      </span>
                      <h3 className="text-[18px] font-semibold text-white">{rec.bot}</h3>
                      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${categoryColors[rec.category]}`}>
                        {rec.category}
                      </span>
                    </div>
                    <span className={`text-[12px] font-semibold ${urgencyColors[rec.urgency]}`}>
                      {urgencyLabels[rec.urgency]}
                    </span>
                  </div>

                  {/* Why */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-white/30 mb-2">Why it fits</p>
                    <p className="text-white/65 text-[14px] leading-relaxed">{rec.why}</p>
                  </div>

                  {/* Pitch opener */}
                  <div className="bg-[#0a0a0a] rounded-xl px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#18b5d8]/70">Pitch opener</p>
                      <CopyButton text={rec.pitch} />
                    </div>
                    <p className="text-white text-[14px] leading-relaxed italic">&ldquo;{rec.pitch}&rdquo;</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Notes */}
          {result.notes && (
            <div className="bg-yellow-500/8 border border-yellow-500/20 rounded-2xl px-6 py-5">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-yellow-400 mb-2">Notes for Miche</p>
              <p className="text-white/65 text-[14px] leading-relaxed">{result.notes}</p>
            </div>
          )}

          {/* Reset */}
          <button
            type="button"
            onClick={() => { setResult(null); setForm({ name: '', industry: '', description: '', teamSize: '', challenge: '' }) }}
            className="text-[13px] text-white/30 hover:text-white/60 transition-colors"
          >
            ← Analyze another business
          </button>
        </div>
      )}
    </div>
  )
}
