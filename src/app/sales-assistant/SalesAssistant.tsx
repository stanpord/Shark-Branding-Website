'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface TranscriptLine {
  id: string
  text: string
  ts: string
  final: boolean
}

interface Coaching {
  signal: 'buying' | 'objection' | 'neutral' | 'close_now'
  suggested_response: string
  subtext?: string
}

const SIGNAL_CONFIG = {
  buying: { label: '🟢 BUYING', color: 'text-[#4FD1A0]', bg: 'bg-[#4FD1A0]/10 border-[#4FD1A0]/40' },
  objection: { label: '🔴 OBJECTION', color: 'text-[#F7555F]', bg: 'bg-[#F7555F]/10 border-[#F7555F]/40' },
  neutral: { label: '⚪ NEUTRAL', color: 'text-white/40', bg: 'bg-white/5 border-white/10' },
  close_now: { label: '⚡ CLOSE NOW', color: 'text-[#18b5d8]', bg: 'bg-[#18b5d8]/15 border-[#18b5d8]/50' },
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

export default function SalesAssistant() {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState<TranscriptLine[]>([])
  const [interim, setInterim] = useState('')
  const [coaching, setCoaching] = useState<Coaching | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [prospectName, setProspectName] = useState('')
  const [prospectIndustry, setProspectIndustry] = useState('')
  const [callType, setCallType] = useState('Discovery')
  const [supported, setSupported] = useState(true)
  const [autoCoach, setAutoCoach] = useState(true)
  const [newLinesSinceCoach, setNewLinesSinceCoach] = useState(0)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null)
  const transcriptRef = useRef<TranscriptLine[]>([])
  const transcriptEndRef = useRef<HTMLDivElement>(null)
  const autoCoachTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const newLinesRef = useRef(0)

  // Keep refs in sync
  useEffect(() => {
    transcriptRef.current = transcript
  }, [transcript])

  useEffect(() => {
    newLinesRef.current = newLinesSinceCoach
  }, [newLinesSinceCoach])

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setSupported(false)
    }
  }, [])

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [transcript, interim])

  const getCoaching = useCallback(async (lines: TranscriptLine[]) => {
    if (lines.length === 0) return
    setLoading(true)
    setError('')

    const recent = lines
      .filter((l) => l.final)
      .slice(-12)
      .map((l) => `[${l.ts}] ${l.text}`)
      .join('\n')

    try {
      const res = await fetch('/api/sales-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: recent,
          prospectName,
          prospectIndustry,
          callType,
        }),
      })

      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setCoaching(data)
        setNewLinesSinceCoach(0)
        newLinesRef.current = 0
      }
    } catch {
      setError('Failed to get coaching. Check connection.')
    } finally {
      setLoading(false)
    }
  }, [prospectName, prospectIndustry, callType])

  // Auto-coach: fire after 4 new final lines
  useEffect(() => {
    if (!autoCoach || !listening) return
    if (newLinesSinceCoach >= 2) {
      if (autoCoachTimerRef.current) clearTimeout(autoCoachTimerRef.current)
      autoCoachTimerRef.current = setTimeout(() => {
        getCoaching(transcriptRef.current)
      }, 1500)
    }
    return () => {
      if (autoCoachTimerRef.current) clearTimeout(autoCoachTimerRef.current)
    }
  }, [newLinesSinceCoach, autoCoach, listening, getCoaching])

  const startListening = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SR: any = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    const recognition = new SR()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let interimText = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          const text = result[0].transcript.trim()
          if (text) {
            const now = new Date()
            const ts = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            const line: TranscriptLine = {
              id: `${Date.now()}-${Math.random()}`,
              text,
              ts,
              final: true,
            }
            setTranscript((prev) => [...prev, line])
            setNewLinesSinceCoach((n) => n + 1)
          }
        } else {
          interimText += result[0].transcript
        }
      }
      setInterim(interimText)
    }

    recognition.onend = () => {
      // Auto-restart if still supposed to be listening
      if (recognitionRef.current) {
        try {
          recognition.start()
        } catch {
          // ignore
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      // no-speech and network are transient, onend will auto-restart, ignore them
      if (event.error !== 'no-speech' && event.error !== 'network') {
        setError(`Mic error: ${event.error}`)
      }
    }

    recognition.start()
    recognitionRef.current = recognition
    setListening(true)
  }, [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.onend = null
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    setListening(false)
    setInterim('')
    if (autoCoachTimerRef.current) clearTimeout(autoCoachTimerRef.current)
  }, [])

  const clearAll = useCallback(() => {
    stopListening()
    setTranscript([])
    setInterim('')
    setCoaching(null)
    setError('')
    setNewLinesSinceCoach(0)
  }, [stopListening])

  if (!supported) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-[#F7555F] text-[18px] font-semibold mb-3">Chrome Required</p>
          <p className="text-white/50 text-[14px]">
            This tool uses Chrome&apos;s built-in speech recognition. Open this page in Google Chrome to use the Sales Assistant.
          </p>
        </div>
      </div>
    )
  }

  const signal = coaching?.signal ?? 'neutral'
  const signalCfg = SIGNAL_CONFIG[signal]

  return (
    <div className="bg-[#0a0a0a]">

      {/* Header */}
      <div className="border-b border-white/10 px-6 py-3 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className={`size-2 rounded-full ${listening ? 'bg-[#4FD1A0] animate-pulse' : 'bg-white/20'}`} />
          <span className="text-white font-semibold text-[15px]">Sales Assistant</span>
          <span className="text-white/30 text-[12px] font-mono uppercase tracking-widest">
            {listening ? 'LIVE' : 'STOPPED'}
          </span>
        </div>
        <p className="text-[11px] text-white/20 tracking-wide">
          Only visible on your screen. Do not share this tab
        </p>
      </div>

      {/* Call Context Bar */}
      <div className="border-b border-white/10 px-6 py-2.5 flex flex-wrap gap-3 items-center bg-[#07141a]">
        <input
          type="text"
          placeholder="Prospect name..."
          value={prospectName}
          onChange={(e) => setProspectName(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-[13px] placeholder:text-white/25 focus:outline-none focus:border-[#18b5d8]/40 w-40"
        />
        <select
          value={prospectIndustry}
          onChange={(e) => setProspectIndustry(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-[13px] focus:outline-none focus:border-[#18b5d8]/40"
        >
          <option value="">Industry...</option>
          {INDUSTRIES.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <select
          value={callType}
          onChange={(e) => setCallType(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-white text-[13px] focus:outline-none focus:border-[#18b5d8]/40"
        >
          <option>Discovery</option>
          <option>Close</option>
          <option>Follow-up</option>
          <option>Cold Outreach</option>
          <option>Objection Handling</option>
        </select>
        <label className="flex items-center gap-2 text-white/40 text-[12px] cursor-pointer select-none ml-auto">
          <input
            type="checkbox"
            checked={autoCoach}
            onChange={(e) => setAutoCoach(e.target.checked)}
            className="accent-[#18b5d8]"
          />
          Auto-coach
        </label>
      </div>

      {/* Main layout, two columns, each independently scrollable */}
      <div className="flex gap-0 divide-x divide-white/10">

        {/* Left, Transcript */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30">Live Transcript</span>
            {transcript.length > 0 && (
              <button
                type="button"
                onClick={() => setTranscript([])}
                className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Transcript scroll area */}
          <div className="overflow-y-auto p-4 space-y-2" style={{ minHeight: '300px', maxHeight: '55vh' }}>
            {transcript.length === 0 && !interim && (
              <p className="text-white/20 text-[13px] text-center mt-8">
                {listening ? 'Listening... speak normally.' : 'Press Start to begin listening.'}
              </p>
            )}
            {transcript.map((line) => (
              <div key={line.id} className="flex gap-2">
                <span className="text-white/20 text-[11px] font-mono shrink-0 mt-0.5">{line.ts}</span>
                <p className="text-white/80 text-[13px] leading-relaxed">{line.text}</p>
              </div>
            ))}
            {interim && (
              <div className="flex gap-2">
                <span className="text-white/10 text-[11px] font-mono shrink-0 mt-0.5">...</span>
                <p className="text-white/30 text-[13px] leading-relaxed italic">{interim}</p>
              </div>
            )}
            <div ref={transcriptEndRef} />
          </div>

          {/* Controls, always visible */}
          <div className="border-t border-white/10 px-4 py-3 flex gap-2 bg-[#0a0a0a]">
            {!listening ? (
              <button
                type="button"
                onClick={startListening}
                className="flex-1 bg-[#18b5d8] text-white font-semibold text-[14px] py-2.5 rounded-lg hover:bg-[#1ec8ee] transition-colors"
              >
                Start Listening
              </button>
            ) : (
              <button
                type="button"
                onClick={stopListening}
                className="flex-1 bg-[#F7555F]/20 text-[#F7555F] font-semibold text-[14px] py-2.5 rounded-lg hover:bg-[#F7555F]/30 transition-colors border border-[#F7555F]/30"
              >
                Stop
              </button>
            )}
            <button
              type="button"
              onClick={() => getCoaching(transcript)}
              disabled={loading || transcript.length === 0}
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/70 font-semibold text-[13px] rounded-lg hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {loading ? '...' : 'Coach Me'}
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="px-3 py-2.5 bg-white/5 border border-white/10 text-white/30 text-[13px] rounded-lg hover:text-white/60 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right, Coaching Panel */}
        <div className="w-[360px] shrink-0 flex flex-col">
          <div className="px-4 py-2 border-b border-white/5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30">AI Coach</span>
          </div>

          {/* Coaching panel, glanceable, not readable */}
          <div className="flex flex-col p-4 gap-3" style={{ minHeight: '300px', maxHeight: '55vh', overflowY: 'auto' }}>

            {/* Signal badge */}
            {coaching && !loading && (
              <div className={`rounded-xl px-4 py-2 border ${signalCfg.bg}`}>
                <p className={`text-[15px] font-black uppercase tracking-widest ${signalCfg.color}`}>
                  {signalCfg.label}
                </p>
              </div>
            )}

            {/* The one thing to say, LARGE */}
            {coaching && !loading && (
              <div className="bg-white/5 border border-white/15 rounded-xl px-4 py-5 flex-1">
                <p className="text-white text-[22px] leading-snug font-bold">
                  &ldquo;{coaching.suggested_response}&rdquo;
                </p>
                {coaching.subtext && (
                  <p className="text-white/30 text-[12px] mt-3 uppercase tracking-wide">{coaching.subtext}</p>
                )}
              </div>
            )}

            {/* Loading */}
            {loading && (
              <div className="flex items-center gap-2 py-4 justify-center flex-1">
                <div className="size-2 bg-[#18b5d8] rounded-full animate-bounce [animation-delay:0ms]" />
                <div className="size-2 bg-[#18b5d8] rounded-full animate-bounce [animation-delay:150ms]" />
                <div className="size-2 bg-[#18b5d8] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            )}

            {/* Error */}
            {error && !loading && (
              <p className="text-[#F7555F] text-[12px] px-1">{error}</p>
            )}

            {/* Empty state */}
            {!coaching && !loading && !error && (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-white/15 text-[13px] text-center">
                  {autoCoach ? 'Auto-coaches every 2 lines' : 'Press Coach Me'}
                </p>
              </div>
            )}
          </div>

          {/* Quick Reference, always visible */}
          <div className="border-t border-white/10 px-4 py-3 bg-[#0a0a0a]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">Quick Close</p>
            <p className="text-white/40 text-[11px] leading-relaxed">
              &ldquo;Does the math work for your business?&rdquo;
            </p>
            <p className="text-white/20 text-[10px] mt-1.5 leading-relaxed">
              If hesitant: &ldquo;What specifically are you weighing: budget, timing, or the deliverable?&rdquo;
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
