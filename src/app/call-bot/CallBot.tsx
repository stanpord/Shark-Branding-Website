'use client'

import { useState, useEffect, useRef } from 'react'

interface Prospect {
  name: string
  business: string
  phone: string
  industry: string
}

interface CallRecord {
  id: string
  prospect: Prospect
  status: 'queued' | 'ringing' | 'in-progress' | 'forwarding' | 'ended'
  transcript?: string
  summary?: string
  startedAt?: string
  endedAt?: string
  endedReason?: string
  recordingUrl?: string
  createdAt: string
}

const INDUSTRIES = [
  'Restoration / Decon',
  'Healthcare / Rehab',
  'HVAC / Contractor',
  'Real Estate',
  'Legal',
  'Restaurant / Food',
  'Retail',
  'Franchise',
  'Other',
]

const STATUS_CONFIG: Record<string, { label: string; color: string; pulse: boolean }> = {
  queued: { label: 'Queued', color: 'text-white/40', pulse: false },
  ringing: { label: 'Ringing...', color: 'text-[#F9DB79]', pulse: true },
  'in-progress': { label: '● Live', color: 'text-[#4FD1A0]', pulse: true },
  forwarding: { label: 'Forwarding', color: 'text-[#18b5d8]', pulse: false },
  ended: { label: 'Ended', color: 'text-white/30', pulse: false },
}

function formatDuration(start?: string, end?: string) {
  if (!start) return null
  const s = new Date(start)
  const e = end ? new Date(end) : new Date()
  const secs = Math.floor((e.getTime() - s.getTime()) / 1000)
  const m = Math.floor(secs / 60)
  const sec = secs % 60
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function CallBot() {
  const [form, setForm] = useState<Prospect>({ name: '', business: '', phone: '', industry: '' })
  const [calls, setCalls] = useState<CallRecord[]>([])
  const [selectedCallId, setSelectedCallId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const transcriptEndRef = useRef<HTMLDivElement>(null)

  // Poll active calls every 3s
  useEffect(() => {
    const activeCalls = calls.filter((c) => c.status !== 'ended')
    if (pollRef.current) clearInterval(pollRef.current)
    if (activeCalls.length === 0) return

    pollRef.current = setInterval(async () => {
      for (const call of activeCalls) {
        try {
          const res = await fetch(`/api/vapi-calls?callId=${call.id}`)
          const data = await res.json()
          if (data.id) {
            setCalls((prev) =>
              prev.map((c) =>
                c.id === call.id
                  ? {
                      ...c,
                      status: data.status ?? c.status,
                      transcript: data.transcript ?? c.transcript,
                      summary: data.summary ?? c.summary,
                      startedAt: data.startedAt ?? c.startedAt,
                      endedAt: data.endedAt ?? c.endedAt,
                      endedReason: data.endedReason ?? c.endedReason,
                      recordingUrl: data.recordingUrl ?? c.recordingUrl,
                    }
                  : c
              )
            )
          }
        } catch {
          // ignore polling errors
        }
      }
    }, 3000)

    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [calls])

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [calls, selectedCallId])

  const startCall = async () => {
    if (!form.phone) {
      setError('Phone number required')
      return
    }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/vapi-calls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.error) {
        setError(data.error)
        return
      }

      const newCall: CallRecord = {
        id: data.id,
        prospect: { ...form },
        status: data.status ?? 'queued',
        createdAt: new Date().toISOString(),
      }

      setCalls((prev) => [newCall, ...prev])
      setSelectedCallId(data.id)
      setForm({ name: '', business: '', phone: '', industry: '' })
    } catch {
      setError('Failed to start call. Check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const selectedCall = calls.find((c) => c.id === selectedCallId)
  const cfg = selectedCall ? (STATUS_CONFIG[selectedCall.status] ?? STATUS_CONFIG.queued) : null

  return (
    <div className="bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold text-[15px]">AI Call Bot</span>
          <span className="text-white/30 text-[12px]">Outbound Sales · Aria</span>
        </div>
        <p className="text-[11px] text-white/20">Voice powered by Azure · Brain powered by Claude</p>
      </div>

      <div className="flex divide-x divide-white/10" style={{ minHeight: 'calc(100vh - 113px)' }}>

        {/* Left — Form + History */}
        <div className="w-[300px] shrink-0 flex flex-col">

          {/* New Call Form */}
          <div className="p-4 border-b border-white/10 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/25 mb-3">New Call</p>
            <input
              type="text"
              placeholder="Prospect name"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/40"
            />
            <input
              type="text"
              placeholder="Business name"
              value={form.business}
              onChange={(e) => setForm((p) => ({ ...p, business: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/40"
            />
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/40"
            />
            <select
              value={form.industry}
              onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-[13px] focus:outline-none focus:border-[#18b5d8]/40"
            >
              <option value="">Industry...</option>
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>

            {error && <p className="text-[#F7555F] text-[12px] pt-1">{error}</p>}

            <button
              onClick={startCall}
              disabled={loading || !form.phone}
              className="w-full bg-[#18b5d8] text-white font-semibold text-[14px] py-2.5 rounded-lg hover:bg-[#1ec8ee] transition-colors disabled:opacity-40 disabled:cursor-not-allowed mt-1"
            >
              {loading ? 'Starting...' : 'Call Now'}
            </button>
          </div>

          {/* Call History */}
          <div className="flex-1 overflow-y-auto">
            {calls.length === 0 ? (
              <p className="text-white/15 text-[12px] text-center mt-10 px-4">No calls yet</p>
            ) : (
              <div className="divide-y divide-white/5">
                {calls.map((call) => {
                  const c = STATUS_CONFIG[call.status] ?? STATUS_CONFIG.queued
                  return (
                    <button
                      key={call.id}
                      onClick={() => setSelectedCallId(call.id)}
                      className={`w-full text-left px-4 py-3 hover:bg-white/5 transition-colors ${selectedCallId === call.id ? 'bg-white/[0.06]' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-white text-[13px] font-medium truncate">
                          {call.prospect.name || call.prospect.phone}
                        </span>
                        <span className={`text-[11px] font-semibold shrink-0 ml-2 ${c.color}`}>
                          {c.label}
                        </span>
                      </div>
                      <p className="text-white/25 text-[11px]">
                        {call.prospect.business || call.prospect.industry || call.prospect.phone}
                      </p>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right — Live Call View */}
        <div className="flex-1 flex flex-col min-w-0">
          {!selectedCall ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-white/20 text-[15px]">Start a call to see it live</p>
                <p className="text-white/10 text-[13px]">Transcript and call status appear here in real-time</p>
              </div>
            </div>
          ) : (
            <>
              {/* Call Header */}
              <div className="px-6 py-3 border-b border-white/10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-[16px]">
                    {selectedCall.prospect.name || selectedCall.prospect.phone}
                  </p>
                  <p className="text-white/30 text-[12px]">
                    {[selectedCall.prospect.business, selectedCall.prospect.industry].filter(Boolean).join(' · ')}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`text-[14px] font-bold ${cfg?.color}`}>
                    {cfg?.label}
                  </p>
                  {selectedCall.startedAt && (
                    <p className="text-white/25 text-[11px] mt-0.5 font-mono">
                      {formatDuration(selectedCall.startedAt, selectedCall.endedAt)}
                    </p>
                  )}
                  {selectedCall.endedReason && (
                    <p className="text-white/20 text-[11px]">{selectedCall.endedReason}</p>
                  )}
                </div>
              </div>

              {/* Summary (if call ended) */}
              {selectedCall.summary && (
                <div className="mx-6 mt-4 bg-[#18b5d8]/10 border border-[#18b5d8]/25 rounded-xl p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#18b5d8] mb-2">AI Summary</p>
                  <p className="text-white/70 text-[13px] leading-relaxed">{selectedCall.summary}</p>
                </div>
              )}

              {/* Transcript */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {!selectedCall.transcript && selectedCall.status !== 'ended' && (
                  <div className="flex items-center gap-2 mt-8 justify-center">
                    <div className="w-1.5 h-1.5 bg-[#18b5d8] rounded-full animate-bounce [animation-delay:0ms]" />
                    <div className="w-1.5 h-1.5 bg-[#18b5d8] rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-1.5 h-1.5 bg-[#18b5d8] rounded-full animate-bounce [animation-delay:300ms]" />
                    <span className="text-white/30 text-[12px] ml-1">Waiting for call to connect...</span>
                  </div>
                )}

                {!selectedCall.transcript && selectedCall.status === 'ended' && (
                  <p className="text-white/20 text-[13px] text-center mt-8">No transcript available</p>
                )}

                {selectedCall.transcript && (
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4">Transcript</p>
                    {selectedCall.transcript.split('\n').filter(Boolean).map((line, i) => {
                      const isAria = /^(aria|AI|assistant)\s*:/i.test(line)
                      return (
                        <div key={i} className="flex gap-2">
                          <span className={`text-[11px] font-semibold shrink-0 mt-0.5 w-16 ${isAria ? 'text-[#18b5d8]/60' : 'text-white/25'}`}>
                            {isAria ? 'Aria' : 'Prospect'}
                          </span>
                          <p className={`text-[13px] leading-relaxed ${isAria ? 'text-white/60' : 'text-white/85'}`}>
                            {line.replace(/^(aria|AI|assistant|user|prospect)\s*:\s*/i, '')}
                          </p>
                        </div>
                      )
                    })}
                    <div ref={transcriptEndRef} />
                  </div>
                )}
              </div>

              {/* Recording Footer */}
              {selectedCall.recordingUrl && (
                <div className="border-t border-white/10 px-6 py-3 flex items-center gap-4">
                  <p className="text-white/30 text-[12px]">Recording available</p>
                  <a
                    href={selectedCall.recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#18b5d8] text-[13px] hover:text-[#1ec8ee] transition-colors font-medium"
                  >
                    Listen →
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
