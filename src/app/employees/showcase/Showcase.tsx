'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

const EMPLOYEES = [
  { name: 'Gemma', role: 'Chat Receptionist', cardImg: '/avatars/gemma.png', color: '#18b5d8' },
  { name: 'Blogger', role: 'Content Writer', cardImg: '/avatars/blogger.png', color: '#4FD1A0' },
  { name: 'Reputation Specialist', role: 'Review Manager', cardImg: '/avatars/reputation.png', color: '#F9DB79' },
  { name: 'Lead Qualifier', role: 'Sales Employee', cardImg: '/avatars/sales.png', color: '#18b5d8' },
  { name: 'Social Media Manager', role: 'Content Publisher', cardImg: '/avatars/social.png', color: '#F7555F' },
]

const TOTAL = EMPLOYEES.length
const DRAG_SCALE = 260   // px of drag = 1 card
const DAMPING = 0.93     // momentum friction (higher = slides longer)
const SNAP_SPEED = 0.12  // ease toward nearest card

// ── Demo conversation ──────────────────────────────────────────────────────────
const CONVO = [
  { role: 'bot', text: "Hey! I'm Gemma. What brings you to Shark AI Solutions today?", delay: 600 },
  { role: 'user', text: "I want to know how AI employees work and what they cost.", delay: 0 },
  { role: 'bot', text: "Great question. We build AI employees that handle lead qualification, follow-up, and appointment booking — so your team only talks to people ready to buy. What part of your sales process feels like the biggest bottleneck?", delay: 1400 },
  { role: 'user', text: "Follow-up. Leads go cold and we never catch them in time.", delay: 0 },
  { role: 'bot', text: "That's exactly what our Follow-Up AI solves. It runs multi-touch sequences across email, SMS, and phone — automatically. Re-engages cold leads at the right moment without anyone lifting a finger.", delay: 1600 },
  { role: 'bot', text: "Quick question — roughly how many new leads do you see per month?", delay: 800 },
  { role: 'user', text: "Around 80 to 100 per month.", delay: 0 },
  { role: 'bot', text: "Perfect fit. At that volume you'd recover 20–30 leads per month that currently go cold. That's typically 2–4 extra closed deals monthly for our clients.", delay: 1500 },
  { role: 'bot', text: "Can I grab a 30-minute call on your calendar so you can see this live with your real numbers?", delay: 900 },
  { role: 'user', text: "Yes — Thursday afternoon works.", delay: 0 },
  { role: 'bot', text: '__booking__', delay: 1200 },
]

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)) }

export default function Showcase() {
  const posRef = useRef(0)
  const velRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const dragging = useRef(false)
  const drag = useRef({ startX: 0, startPos: 0, lastX: 0, lastT: 0 })
  const [pos, setPos] = useState(0)

  // Demo modal state
  const [demoOpen, setDemoOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([])
  const [typing, setTyping] = useState(false)
  const [userInput, setUserInput] = useState('')
  const demoRunning = useRef(false)
  const msgsEndRef = useRef<HTMLDivElement>(null)

  const wrapOffset = (i: number, p: number) => {
    let off = (i - p) % TOTAL
    if (off > TOTAL / 2) off -= TOTAL
    if (off < -TOTAL / 2) off += TOTAL
    return off
  }

  const activeIndex = ((Math.round(pos) % TOTAL) + TOTAL) % TOTAL
  const emp = EMPLOYEES[activeIndex]

  const physics = useCallback(() => {
    const snapping = Math.abs(velRef.current) < 0.015
    if (snapping) {
      const target = Math.round(posRef.current)
      const diff = target - posRef.current
      posRef.current += diff * SNAP_SPEED
      setPos(posRef.current)
      if (Math.abs(diff) > 0.001) {
        rafRef.current = requestAnimationFrame(physics)
      } else {
        posRef.current = target
        setPos(target)
        rafRef.current = null
      }
    } else {
      velRef.current *= DAMPING
      posRef.current += velRef.current
      setPos(posRef.current)
      rafRef.current = requestAnimationFrame(physics)
    }
  }, [])

  const startDrag = useCallback((x: number) => {
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    dragging.current = true
    velRef.current = 0
    drag.current = { startX: x, startPos: posRef.current, lastX: x, lastT: Date.now() }
  }, [])

  const moveDrag = useCallback((x: number) => {
    if (!dragging.current) return
    const dx = x - drag.current.startX
    posRef.current = drag.current.startPos - dx / DRAG_SCALE
    setPos(posRef.current)
    const now = Date.now()
    const dt = now - drag.current.lastT
    if (dt > 0 && dt < 80) {
      velRef.current = (drag.current.lastX - x) / DRAG_SCALE / dt * 16
    }
    drag.current.lastX = x
    drag.current.lastT = now
  }, [])

  const endDrag = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    rafRef.current = requestAnimationFrame(physics)
  }, [physics])

  useEffect(() => {
    const onMove = (e: MouseEvent) => moveDrag(e.clientX)
    const onUp = () => endDrag()
    const onTouchMove = (e: TouchEvent) => moveDrag(e.touches[0].clientX)
    const onTouchEnd = () => endDrag()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [moveDrag, endDrag])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        velRef.current = 0
        posRef.current = Math.round(posRef.current) - 1
        setPos(posRef.current)
      }
      if (e.key === 'ArrowRight') {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        velRef.current = 0
        posRef.current = Math.round(posRef.current) + 1
        setPos(posRef.current)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const goTo = (i: number) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    velRef.current = 0
    posRef.current = Math.round(posRef.current) + wrapOffset(i, Math.round(posRef.current))
    setPos(posRef.current)
  }

  const cardStyle = (i: number): React.CSSProperties => {
    const off = wrapOffset(i, pos)
    const absOff = Math.abs(off)
    const visible = absOff < 2.8
    return {
      position: 'absolute',
      width: 300,
      top: '50%',
      left: '50%',
      transform: `
        translateX(calc(-50% + ${off * 255}px))
        translateY(-50%)
        rotateY(${off * 36}deg)
        translateZ(${-absOff * 90}px)
        scale(${Math.max(0.55, 1 - absOff * 0.17)})
      `,
      opacity: visible ? Math.max(0, 1 - absOff * 0.32) : 0,
      zIndex: Math.round(30 - absOff * 8),
      pointerEvents: absOff < 0.5 ? 'none' : 'auto',
      transition: dragging.current ? 'none' : 'opacity 0.3s',
    }
  }

  // Demo modal logic
  const runDemo = async () => {
    if (demoRunning.current) return
    demoRunning.current = true
    setMessages([])
    for (const item of CONVO) {
      await sleep(item.delay || 400)
      if (item.role === 'bot') {
        setTyping(true)
        await sleep(Math.min(item.text.length * 18 + 400, 2000))
        setTyping(false)
        setMessages(prev => [...prev, { role: 'bot', text: item.text }])
      } else {
        setMessages(prev => [...prev, { role: 'user', text: item.text }])
      }
    }
    demoRunning.current = false
  }

  const openDemo = () => {
    setDemoOpen(true)
    setTimeout(runDemo, 300)
  }

  const closeDemo = () => {
    setDemoOpen(false)
    demoRunning.current = false
  }

  const sendUserMsg = () => {
    const text = userInput.trim()
    if (!text) return
    setUserInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setTimeout(() => {
      setTyping(true)
      setTimeout(() => {
        setTyping(false)
        setMessages(prev => [...prev, { role: 'bot', text: "Thanks for that. Would you like to book a quick 30-minute call to see a live demo with your actual numbers?" }])
      }, 1600)
    }, 400)
  }

  useEffect(() => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  return (
    <>
      {/* ── CAROUSEL (unchanged) ─────────────────────────────────────────── */}
      <div
        className="h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        style={{ userSelect: 'none' }}
      >
        {/* Header */}
        <div className="text-center mb-10 z-20 pointer-events-none">
          <p className="text-[12px] font-semibold tracking-[0.25em] uppercase text-[#18b5d8] mb-2">
            Shark AI Solutions
          </p>
          <h1 className="text-[38px] font-bold text-white leading-tight">AI Workforce</h1>
          <p className="text-white/30 text-[14px] mt-2">
            Your AI employees: built, trained, and live in 30 days.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative w-full"
          style={{
            height: 370,
            perspective: 1100,
            perspectiveOrigin: '50% 50%',
            cursor: dragging.current ? 'grabbing' : 'grab',
          }}
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          aria-label="AI Employees carousel"
        >
          {EMPLOYEES.map((card, i) => (
            <div key={i} style={cardStyle(i)}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: `0 0 40px ${card.color}25, 0 16px 48px rgba(0,0,0,0.6)` }}
              >
                <img src={card.cardImg} alt={card.name} style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Dots nav */}
        <div className="flex items-center gap-2 mt-8 z-20">
          {EMPLOYEES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={EMPLOYEES[i].name}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 22 : 7,
                height: 7,
                backgroundColor: i === activeIndex ? emp.color : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>

        {/* Active label */}
        <div className="mt-5 text-center z-20 pointer-events-none" style={{ minHeight: 48 }}>
          <p className="text-white font-bold text-[18px]">{emp.name}</p>
          <p className="text-white/30 text-[13px] mt-0.5">{emp.role}</p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center z-20 pointer-events-none">
          <p className="text-white/20 text-[12px]">
            One AI employee included · Live in 30 days · Drag to explore
          </p>
        </div>
      </div>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <div className="bg-[#0d0d0d] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-7 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/5">
          {[
            { n: '24/7', l: 'Always working' },
            { n: '30d', l: 'From zero to live' },
            { n: '5+', l: 'Channels covered' },
            { n: '3x', l: 'More pipeline' },
          ].map(s => (
            <div key={s.l} className="text-center px-6 py-2">
              <p className="text-[28px] font-extrabold text-[#18b5d8] leading-none tracking-tight">{s.n}</p>
              <p className="text-[11px] text-white/30 mt-1 font-medium uppercase tracking-wide">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">What they do</p>
          <h2 className="text-[36px] font-bold text-white leading-tight tracking-tight mb-4">
            One team. Every channel.
          </h2>
          <p className="text-white/40 text-[15px] mb-14 max-w-lg leading-relaxed">
            Each AI employee is purpose-trained for a specific role and passes work to the next one automatically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '💬',
                name: 'Gemma',
                title: 'Chat Receptionist',
                color: '#18b5d8',
                desc: 'Answers every inbound chat 24/7, qualifies the visitor, and routes hot leads directly to your calendar — before you check your phone.',
              },
              {
                icon: '✍️',
                name: 'Blogger',
                title: 'Content Writer',
                color: '#4FD1A0',
                desc: 'Produces SEO-ready blog posts, social captions, and email copy in your brand voice. Consistent content without the weekly scramble.',
              },
              {
                icon: '⭐',
                name: 'Reputation Specialist',
                title: 'Review Manager',
                color: '#F9DB79',
                desc: 'Monitors your reviews across Google, Yelp, and Facebook. Drafts replies, flags negatives, and builds the trust signals AI search looks for.',
              },
              {
                icon: '🎯',
                name: 'Lead Qualifier',
                title: 'Sales Employee',
                color: '#18b5d8',
                desc: 'Engages every inbound lead in real time, scores fit against your ICP, and books only the qualified ones — saving your team hours every week.',
              },
              {
                icon: '📱',
                name: 'Social Media Manager',
                title: 'Content Publisher',
                color: '#F7555F',
                desc: 'Schedules and publishes across Instagram, Facebook, and LinkedIn. Keeps your brand visible and consistent without manual posting.',
              },
              {
                icon: '🔄',
                name: 'Follow-Up Specialist',
                title: 'Coming Soon',
                color: '#a78bfa',
                desc: 'Runs multi-touch follow-up sequences across email, SMS, and voice. Re-engages cold leads automatically so your pipeline never goes quiet.',
                soon: true,
              },
            ].map(card => (
              <div
                key={card.name}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200"
                style={card.soon ? { opacity: 0.55 } : {}}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] mb-4"
                  style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
                >
                  {card.icon}
                </div>
                <p className="text-[13px] font-bold mb-0.5" style={{ color: card.color }}>{card.name}</p>
                <p className="text-white font-semibold text-[15px] mb-3">{card.title}</p>
                <p className="text-white/40 text-[13px] leading-relaxed">{card.desc}</p>
                {card.soon && (
                  <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-white/5 text-white/30">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] border-t border-white/5 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">The process</p>
          <h2 className="text-[36px] font-bold text-white leading-tight tracking-tight mb-14">
            Live in 30 days. Here is how.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
            {[
              { n: '01', title: 'Discovery call', desc: 'We map your sales process, lead sources, and the gaps costing you deals.' },
              { n: '02', title: 'AI employee design', desc: 'We build and train each employee on your offer, your voice, and your ideal customer.' },
              { n: '03', title: 'CRM + channel setup', desc: 'Email, SMS, phone, and chat connected and tested. Everything synced.' },
              { n: '04', title: 'Live demo + approval', desc: 'You see every AI employee in action before anything goes live.' },
              { n: '05', title: 'Go live + optimize', desc: 'Your AI team launches. We monitor the first 30 days and tune for results.' },
            ].map(step => (
              <div key={step.n} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#18b5d8]/10 border border-[#18b5d8]/25 flex items-center justify-center text-[#18b5d8] font-extrabold text-[16px] mb-4 shrink-0">
                  {step.n}
                </div>
                <p className="text-white font-bold text-[14px] mb-2">{step.title}</p>
                <p className="text-white/40 text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/5 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">Live demo</p>
          <h2 className="text-[36px] font-bold text-white leading-tight tracking-tight mb-4">
            See Gemma qualify a lead.<br className="hidden sm:block" /> Right now.
          </h2>
          <p className="text-white/40 text-[15px] mb-10 max-w-lg leading-relaxed">
            This is the same AI that will represent your business. Watch how it qualifies, handles objections, and books the appointment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Inbound website lead', sub: 'Visitor asks about pricing → qualified → booked' },
              { title: 'Cold lead re-engagement', sub: 'Lead went quiet → AI reaches back out → meeting set' },
              { title: 'Facebook form response', sub: 'Form submission → instant qualification → booked' },
            ].map(card => (
              <button
                key={card.title}
                onClick={openDemo}
                className="text-left rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-[#18b5d8]/40 hover:bg-[#18b5d8]/5 transition-all duration-200 cursor-pointer"
              >
                <p className="text-white font-semibold text-[14px] mb-1">{card.title}</p>
                <p className="text-white/35 text-[12px]">{card.sub}</p>
              </button>
            ))}
          </div>

          <button
            onClick={openDemo}
            className="btn-press bg-[#18b5d8] text-white text-[14px] font-bold rounded-full px-7 py-3 hover:bg-[#1ec8ee] transition-colors duration-150"
          >
            Watch the demo
          </button>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] border-t border-white/5 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-5">Get started</p>
          <h2 className="text-[36px] font-bold text-white leading-tight tracking-tight mb-4">
            Ready to hire your first AI employee?
          </h2>
          <p className="text-white/40 text-[16px] mb-10 leading-relaxed">
            Book a free 30-minute audit. We will show you exactly where AI employees fit in your business and what to expect in the first 90 days.
          </p>
          <a
            href="/free-report"
            className="btn-press bg-[#18b5d8] text-white text-[15px] font-bold rounded-full px-8 py-3.5 hover:bg-[#1ec8ee] transition-colors duration-150 inline-block"
          >
            Book My Free AI Audit
          </a>
        </div>
      </section>

      {/* ── DEMO MODAL ───────────────────────────────────────────────────── */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-[500] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeDemo()}
        >
          <div className="bg-white rounded-2xl w-full max-w-[420px] overflow-hidden shadow-2xl flex flex-col"
               style={{ maxHeight: '90vh', animation: 'popIn .22s cubic-bezier(.34,1.56,.64,1)' }}>

            {/* Chat header */}
            <div style={{ background: 'linear-gradient(135deg,#18b5d8,#1282a0)' }} className="px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-[14px]">G</div>
              <div className="flex-1">
                <p className="text-white font-bold text-[13px]">Gemma — Chat Receptionist</p>
                <p className="text-white/60 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" style={{ animation: 'blink 1.5s infinite' }} />
                  Online · Shark AI Solutions
                </p>
              </div>
              <button onClick={closeDemo} className="w-7 h-7 rounded-full bg-white/15 text-white flex items-center justify-center text-[15px] hover:bg-white/25 transition-colors">✕</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ minHeight: 320, maxHeight: 380 }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {m.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[11px] font-extrabold text-white"
                         style={{ background: 'linear-gradient(135deg,#18b5d8,#1282a0)' }}>G</div>
                  )}
                  {m.text === '__booking__' ? (
                    <div className="bg-[#f0fafd] border-[1.5px] border-[#18b5d8] rounded-xl p-3 max-w-[80%]">
                      <p className="text-[#18b5d8] font-bold text-[11.5px] mb-2">📅 Appointment Confirmed</p>
                      {[['Date','Thursday, this week'],['Time','2:00 PM EST'],['Host','Miche — Shark AI'],['Type','Live AI Demo']].map(([l,v]) => (
                        <div key={l} className="flex justify-between mb-1">
                          <span className="text-[11px] text-gray-400">{l}</span>
                          <span className="text-[11px] font-semibold text-gray-800">{v}</span>
                        </div>
                      ))}
                      <button className="w-full mt-2 py-2 rounded-lg text-[12px] font-bold text-white" style={{ background: '#18b5d8' }}>
                        Confirm Booking
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug max-w-[80%] ${
                        m.role === 'user'
                          ? 'text-white rounded-br-sm'
                          : 'bg-[#f0f2f5] text-gray-800 rounded-bl-sm'
                      }`}
                      style={m.role === 'user' ? { background: '#18b5d8' } : {}}
                    >
                      {m.text}
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[11px] font-extrabold text-white"
                       style={{ background: 'linear-gradient(135deg,#18b5d8,#1282a0)' }}>G</div>
                  <div className="bg-[#f0f2f5] rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex gap-1 items-center">
                    {[0, 150, 300].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full bg-gray-400"
                            style={{ animation: `dotBounce .9s ${d}ms infinite` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={msgsEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 px-4 py-3 flex gap-2 items-center">
              <input
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-[13px] text-gray-800 outline-none focus:border-[#18b5d8] transition-colors"
                placeholder="Type a message…"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendUserMsg()}
              />
              <button
                onClick={sendUserMsg}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: '#18b5d8' }}
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations injected once */}
      <style>{`
        @keyframes popIn { from{transform:scale(.9);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes dotBounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
      `}</style>
    </>
  )
}
