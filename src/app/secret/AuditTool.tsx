'use client'

import { useState } from 'react'

interface Finding {
  system: string
  status: 'pass' | 'warn' | 'fail'
  issue: string
  fix: string
}

interface AuditResult {
  score: number
  url: string
  findings: Finding[]
  error?: string
}

const statusColor: Record<string, string> = {
  pass: 'text-[#4FD1A0] border-[#4FD1A0]/30 bg-[#4FD1A0]/5',
  warn: 'text-[#F9DB79] border-[#F9DB79]/30 bg-[#F9DB79]/5',
  fail: 'text-[#F7555F] border-[#F7555F]/30 bg-[#F7555F]/5',
}

const statusIcon: Record<string, string> = {
  pass: '✓',
  warn: '⚠',
  fail: '✗',
}

export default function AuditTool() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AuditResult | null>(null)
  const [error, setError] = useState('')

  async function runAudit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError('')

    try {
      const res = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setResult(data)
      }
    } catch {
      setError('Request failed. Check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const scoreColor =
    result?.score != null
      ? result.score >= 75
        ? '#4FD1A0'
        : result.score >= 50
          ? '#F9DB79'
          : '#F7555F'
      : '#18b5d8'

  return (
    <div className="max-w-[860px] mx-auto">
      <form onSubmit={runAudit} className="mb-10">
        <label className="block text-[13px] font-semibold tracking-[0.15em] uppercase text-[#18b5d8] mb-3">
          Website URL to Audit
        </label>
        <div className="flex gap-3">
          <input
            type="url"
            required
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-[#07141a] border border-white/10 rounded-xl px-5 py-3 text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-[#18b5d8]/50 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#18b5d8] text-white font-semibold text-[15px] px-7 py-3 rounded-xl hover:bg-[#1ec8ee] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? 'Auditing…' : 'Run Audit'}
          </button>
        </div>
        <p className="text-white/30 text-[12px] mt-2">
          Analyzes against Google&apos;s 10 core ranking systems using Claude AI
        </p>
      </form>

      {loading && (
        <div className="text-center py-20">
          <div className="inline-block size-8 border-2 border-[#18b5d8]/30 border-t-[#18b5d8] rounded-full animate-spin mb-4" />
          <p className="text-white/40 text-[14px]">Fetching page and running Claude analysis…</p>
        </div>
      )}

      {error && (
        <div className="bg-[#F7555F]/10 border border-[#F7555F]/30 rounded-xl px-6 py-4 text-[#F7555F] text-[14px]">
          {error}
        </div>
      )}

      {result && (
        <div>
          {/* Score header */}
          <div className="bg-[#07141a] border border-white/10 rounded-2xl p-8 mb-6 flex items-center gap-8">
            <div
              className="text-[64px] font-bold leading-none tabular-nums"
              style={{ color: scoreColor }}
            >
              {result.score}
            </div>
            <div>
              <p className="text-white/40 text-[12px] uppercase tracking-widest mb-1">SEO Score</p>
              <p className="text-white text-[17px] font-semibold break-all">{result.url}</p>
              <p className="text-white/40 text-[13px] mt-1">
                {result.findings?.filter((f) => f.status === 'fail').length ?? 0} issues ·{' '}
                {result.findings?.filter((f) => f.status === 'warn').length ?? 0} warnings ·{' '}
                {result.findings?.filter((f) => f.status === 'pass').length ?? 0} passed
              </p>
            </div>
          </div>

          {/* Findings */}
          <div className="space-y-3">
            {result.findings
              ?.toSorted((a, b) => {
                const order = { fail: 0, warn: 1, pass: 2 }
                return order[a.status] - order[b.status]
              })
              .map((finding) => (
                <div
                  key={finding.system}
                  className={`border rounded-xl px-6 py-5 ${statusColor[finding.status]}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[18px] font-bold mt-0.5 shrink-0">
                      {statusIcon[finding.status]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-semibold text-[14px]">{finding.system}</span>
                        <span className="text-[11px] uppercase tracking-[0.12em] opacity-60 font-medium">
                          {finding.status}
                        </span>
                      </div>
                      <p className="text-white/70 text-[13px] leading-relaxed mb-2">
                        {finding.issue}
                      </p>
                      {finding.status !== 'pass' && (
                        <p className="text-white/50 text-[12px] leading-relaxed border-t border-white/5 pt-2 mt-2">
                          <span className="font-semibold text-white/60">Fix:</span> {finding.fix}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
