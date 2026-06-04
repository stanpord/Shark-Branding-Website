'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

const EMPLOYEES = [
  {
    name: 'Gemma', role: 'Chat Receptionist', cardImg: '/avatars/gemma.png', color: '#18b5d8',
    desc: 'Responds to every website visitor instantly. Qualifies leads and books appointments 24/7.',
    tags: ['Live chat', 'Lead qualification', 'Booking'],
  },
  {
    name: 'Blogger', role: 'Content Writer', cardImg: '/avatars/blogger.png', color: '#4FD1A0',
    desc: 'Publishes SEO articles weekly, builds authority, and gets you cited by AI search engines.',
    tags: ['SEO content', 'AI citations', 'Weekly articles'],
  },
  {
    name: 'Reputation Specialist', role: 'Review Manager', cardImg: '/avatars/reputation.png', color: '#F9DB79',
    desc: 'Requests reviews after every job and responds to every comment — automatically.',
    tags: ['Review requests', 'Auto-responses', '5-star growth'],
  },
  {
    name: 'AI CRM', role: 'Sales Assistant', cardImg: '/avatars/sales.png', color: '#18b5d8',
    desc: 'Runs multi-touch follow-up across email, SMS, and phone so no lead falls through the cracks.',
    tags: ['Email + SMS', 'Cold lead rescue', 'Multi-channel'],
  },
  {
    name: 'Social Media Manager', role: 'Content Publisher', cardImg: '/avatars/social.png', color: '#F7555F',
    desc: 'Creates and schedules daily social content, on brand, without any effort from your team.',
    tags: ['Daily posting', 'Brand voice', 'All platforms'],
  },
]

const TOTAL = EMPLOYEES.length
const DRAG_SCALE = 260
const DAMPING = 0.93
const SNAP_SPEED = 0.12

const QUIZ_QUESTIONS = [
  {
    question: "What's your biggest bottleneck right now?",
    options: [
      { label: "Responding to new leads fast enough", result: 0 },
      { label: "Leads going cold before we follow up", result: 3 },
      { label: "Not enough 5-star reviews online", result: 2 },
      { label: "Inconsistent social media presence", result: 4 },
    ],
  },
  {
    question: "How many new leads come in each month?",
    options: [
      { label: "Under 20" },
      { label: "20 – 50" },
      { label: "50 – 100" },
      { label: "100+" },
    ],
  },
  {
    question: "How would you describe your current follow-up?",
    options: [
      { label: "Basically nonexistent" },
      { label: "A few emails here and there" },
      { label: "We try but it's inconsistent" },
      { label: "We have a process — it's just manual" },
    ],
  },
]

const QUIZ_RESULTS = [
  {
    employee: 0,
    headline: "Your AI Employee: Gemma",
    role: 'Chat Receptionist',
    body: "You need an AI that responds to every lead the moment they arrive — before they check a competitor. Gemma handles inbound chat, qualifies visitors in real-time, and books appointments 24/7.",
  },
  {
    employee: 1,
    headline: "Your AI Employee: Blogger",
    role: 'Content Writer',
    body: "Your business needs consistent SEO content to build authority and attract leads organically. Blogger publishes weekly articles that rank on Google and get surfaced by AI search tools.",
  },
  {
    employee: 2,
    headline: "Your AI Employee: Reputation Specialist",
    role: 'Review Manager',
    body: "Reviews are the first thing potential customers check. Your Reputation Specialist requests reviews after every job and responds to every comment — fully automatically.",
  },
  {
    employee: 3,
    headline: "Your AI Employee: AI CRM",
    role: 'Sales Assistant',
    body: "Every cold lead is a deal waiting to happen. Your AI CRM runs automated multi-touch follow-up across email, SMS, and phone so no lead ever falls through the cracks again.",
  },
  {
    employee: 4,
    headline: "Your AI Employee: Social Media Manager",
    role: 'Content Publisher',
    body: "Consistent social presence builds trust and keeps you top-of-mind. Your Social Media Manager creates and schedules content every day — on brand, without any effort from you.",
  },
]

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

  const [demoOpen, setDemoOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([])
  const [typing, setTyping] = useState(false)
  const [userInput, setUserInput] = useState('')
  const demoRunning = useRef(false)
  const msgsEndRef = useRef<HTMLDivElement>(null)

  const [quizStep, setQuizStep] = useState(0)
  const [quizResultIndex, setQuizResultIndex] = useState<number | null>(null)

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

  const handleQuizAnswer = (answerIndex: number) => {
    const q = QUIZ_QUESTIONS[quizStep]
    const opt = q.options[answerIndex] as { label: string; result?: number }
    if (quizStep === 0 && opt.result !== undefined) {
      if (quizStep < QUIZ_QUESTIONS.length - 1) {
        setQuizStep(quizStep + 1)
        setQuizResultIndex(opt.result)
      } else {
        setQuizResultIndex(opt.result)
      }
    } else if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setQuizStep(QUIZ_QUESTIONS.length)
    }
    if (quizStep === QUIZ_QUESTIONS.length - 1) {
      setQuizStep(QUIZ_QUESTIONS.length)
    }
  }

  const resetQuiz = () => {
    setQuizStep(0)
    setQuizResultIndex(null)
  }

  const quizDone = quizStep >= QUIZ_QUESTIONS.length
  const quizResult = quizResultIndex !== null ? QUIZ_RESULTS[quizResultIndex] : null

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #18b5d812 0%, transparent 65%)' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#f0fafd] border border-[#18b5d8]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18b5d8]" style={{ animation: 'blink 1.5s infinite' }} />
            <span className="text-[#18b5d8] text-[12px] font-semibold tracking-wide">Shark AI Solutions — Tampa Bay</span>
          </div>

          <h1 className="text-[52px] sm:text-[68px] font-extrabold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6">
            Hire your first AI employee<br className="hidden sm:block" />
            <span style={{ color: '#18b5d8' }}> in 30 days.</span>
          </h1>
          <p className="text-[#6e6e73] text-[18px] sm:text-[20px] leading-relaxed mb-10 max-w-2xl mx-auto">
            AI employees that handle leads, follow-up, reviews, and content — 24/7, on autopilot. Your team closes deals. The AI handles everything else.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#quiz"
              className="bg-[#18b5d8] text-white text-[16px] font-bold rounded-full px-9 py-4 hover:bg-[#1297b8] transition-colors duration-150 inline-block shadow-[0_4px_20px_rgba(24,181,216,0.35)]"
            >
              Find My AI Employee
            </a>
            <button
              onClick={openDemo}
              className="text-[#1d1d1f] text-[15px] font-medium hover:text-[#18b5d8] transition-colors duration-150 flex items-center gap-2.5"
            >
              <span className="w-9 h-9 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[12px] text-[#18b5d8]">&#9654;</span>
              Watch a live demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-[#86868b] font-medium">
            {[
              { icon: '⚡', text: 'Up and running within the week' },
              { icon: '🤖', text: '5 AI employee types' },
              { icon: '📞', text: 'Email · SMS · Phone · Chat' },
              { icon: '📈', text: '3× more qualified pipeline' },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ─────────────────────────────────────────────────────── */}
      <div
        className="bg-[#f5f5f7] flex flex-col items-center justify-center overflow-hidden py-16 border-t border-[#e5e5ea]"
        style={{ userSelect: 'none' }}
      >
        <div className="text-center mb-10 z-20 pointer-events-none">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-2">
            Your AI workforce
          </p>
          <h2 className="text-[34px] font-bold text-[#1d1d1f] leading-tight">Meet the team</h2>
          <p className="text-[#86868b] text-[14px] mt-2">Drag to explore your AI employees</p>
        </div>

        <div
          className="relative w-full"
          style={{
            height: 370,
            perspective: 1100,
            perspectiveOrigin: '50% 50%',
            cursor: dragging.current ? 'grabbing' : 'grab',
            touchAction: 'pan-y',
          }}
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          aria-label="AI Employees carousel"
        >
          {EMPLOYEES.map((card, i) => (
            <div key={i} style={cardStyle(i)}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: `0 0 40px ${card.color}20, 0 16px 40px rgba(0,0,0,0.12)` }}
              >
                <img src={card.cardImg} alt={card.name} style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-8 z-20">
          {EMPLOYEES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={EMPLOYEES[i].name}
              className="rounded-full transition-all duration-300 flex items-center justify-center [touch-action:manipulation]"
              style={{ width: 44, height: 44 }}
            >
              <span
                className="rounded-full transition-all duration-300 block"
                style={{
                  width: i === activeIndex ? 22 : 7,
                  height: 7,
                  backgroundColor: i === activeIndex ? emp.color : '#d2d2d7',
                }}
              />
            </button>
          ))}
        </div>

        <div className="mt-5 text-center z-20 px-6 max-w-sm mx-auto" style={{ minHeight: 80 }}>
          <p className="text-[#1d1d1f] font-bold text-[18px]">{emp.name}</p>
          <p className="text-[#86868b] text-[12px] mt-0.5 mb-2 uppercase tracking-wide font-medium">{emp.role}</p>
          <p className="text-[#6e6e73] text-[13px] leading-relaxed">{emp.desc}</p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            {emp.tags.map(tag => (
              <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#d2d2d7] text-[#6e6e73] uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <div className="bg-white border-y border-[#e5e5ea]">
        <div className="max-w-5xl mx-auto px-6 py-7 grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#e5e5ea]">
          {[
            { n: '24/7', l: 'Always working' },
            { n: '< 1 wk', l: 'From zero to live' },
            { n: '5+', l: 'Channels' },
            { n: '3×', l: 'More pipeline' },
          ].map(s => (
            <div key={s.l} className="text-center px-6 py-2">
              <p className="text-[30px] font-extrabold text-[#18b5d8] leading-none tracking-tight">{s.n}</p>
              <p className="text-[11px] text-[#86868b] mt-1.5 font-semibold uppercase tracking-wide">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CUSTOMER JOURNEY ─────────────────────────────────────────────── */}
      <section className="bg-white py-28 px-6 border-t border-[#e5e5ea]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-3">How it flows</p>
            <h2 className="text-[40px] sm:text-[46px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight">
              Let AI handle your<br className="hidden sm:block" /> entire customer journey
            </h2>
            <p className="text-[#6e6e73] text-[17px] mt-4 max-w-xl mx-auto leading-relaxed">
              From first touch to booked appointment — fully automated, every time.
            </p>
          </div>

          {/* Step 1 — Lead Arrives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-6">
            <div className="rounded-[28px] bg-[#f0fafd] border border-[#d0eef7] p-8 flex items-center justify-center" style={{ minHeight: 280 }}>
              <div className="w-full max-w-xs">
                {/* Mock: notification badges */}
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm mb-3 border border-[#e5e5ea]">
                  <div className="w-10 h-10 rounded-xl bg-[#18b5d8]/10 flex items-center justify-center text-[20px] shrink-0">💬</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1d1d1f] font-semibold text-[13px]">New lead from website</p>
                    <p className="text-[#86868b] text-[11px]">Just now · sharkbrandingsolutions.com</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18b5d8] shrink-0" />
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm mb-3 border border-[#e5e5ea] opacity-70">
                  <div className="w-10 h-10 rounded-xl bg-[#F7555F]/10 flex items-center justify-center text-[20px] shrink-0">📱</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1d1d1f] font-semibold text-[13px]">Facebook form submission</p>
                    <p className="text-[#86868b] text-[11px]">2 min ago · Facebook Ads</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7555F] shrink-0" />
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-[#e5e5ea] opacity-40">
                  <div className="w-10 h-10 rounded-xl bg-[#4FD1A0]/10 flex items-center justify-center text-[20px] shrink-0">📞</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1d1d1f] font-semibold text-[13px]">Missed call — lead in queue</p>
                    <p className="text-[#86868b] text-[11px]">14 min ago · Inbound call</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Step 01</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                Lead arrives from any channel
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Whether it's a website chat, Facebook form, missed call, or Google ad — your AI employee is watching every channel simultaneously, 24 hours a day.
              </p>
              <ul className="space-y-2">
                {['Website chat widget', 'Facebook & Instagram forms', 'Google Ads & call tracking', 'SMS and missed calls'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-2 md:my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#d2d2d7]" />
              <div className="w-6 h-6 rounded-full border-2 border-[#18b5d8] bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
              </div>
              <div className="w-px h-8 bg-[#d2d2d7]" />
            </div>
          </div>

          {/* Step 2 — AI Responds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-6">
            <div className="md:order-2 rounded-[28px] bg-[#f5f5f7] border border-[#e5e5ea] p-8 flex items-center justify-center" style={{ minHeight: 280 }}>
              <div className="w-full max-w-xs">
                <div className="flex gap-2 items-end mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-extrabold shrink-0">G</div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-[#e5e5ea] text-[13px] text-[#1d1d1f] leading-snug max-w-[220px]">
                    Hey! I'm Gemma. What brings you to Shark AI Solutions today?
                  </div>
                </div>
                <div className="flex gap-2 items-end justify-end mb-3">
                  <div className="bg-[#18b5d8] text-white rounded-2xl rounded-br-sm px-4 py-3 text-[13px] leading-snug max-w-[180px]">
                    I need help with follow-up on my leads.
                  </div>
                </div>
                <div className="flex gap-2 items-end mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-extrabold shrink-0">G</div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-sm border border-[#e5e5ea] flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" style={{ animation: 'dotBounce .9s 0ms infinite' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" style={{ animation: 'dotBounce .9s 150ms infinite' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" style={{ animation: 'dotBounce .9s 300ms infinite' }} />
                  </div>
                </div>
                <p className="text-[11px] text-[#86868b] text-center mt-3 font-medium">Response time: &lt; 30 seconds</p>
              </div>
            </div>
            <div className="md:order-1">
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Step 02</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                AI responds in under 30 seconds
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Before a competitor even sees the notification, your AI employee is already in a conversation — personalized, on-brand, and available at 2am on a Sunday.
              </p>
              <ul className="space-y-2">
                {['Responds in your brand voice', 'Available every hour, every day', 'No lag, no missed messages', 'Handles multiple leads simultaneously'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-2 md:my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#d2d2d7]" />
              <div className="w-6 h-6 rounded-full border-2 border-[#18b5d8] bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
              </div>
              <div className="w-px h-8 bg-[#d2d2d7]" />
            </div>
          </div>

          {/* Step 3 — Qualifies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-6">
            <div className="rounded-[28px] bg-[#f0fafd] border border-[#d0eef7] p-8 flex items-center justify-center" style={{ minHeight: 280 }}>
              <div className="w-full max-w-xs">
                <p className="text-[#1d1d1f] font-bold text-[13px] mb-4">Lead qualification checklist</p>
                {[
                  { label: 'Budget confirmed', done: true },
                  { label: 'Timeline identified', done: true },
                  { label: 'Decision-maker reached', done: true },
                  { label: 'Pain point captured', done: true },
                  { label: 'Ready to book call', done: false, active: true },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 py-2.5 border-b last:border-0 ${item.active ? 'border-[#18b5d8]/20' : 'border-[#e5e5ea]'}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${item.done ? 'bg-[#18b5d8] text-white' : 'bg-[#18b5d8]/10 border-2 border-[#18b5d8]'}`}>
                      {item.done ? '✓' : ''}
                    </div>
                    <p className={`text-[13px] font-medium ${item.active ? 'text-[#18b5d8]' : 'text-[#1d1d1f]'}`}>{item.label}</p>
                    {item.done && <span className="ml-auto text-[10px] text-[#86868b]">Done</span>}
                    {item.active && <span className="ml-auto text-[10px] text-[#18b5d8] font-semibold animate-pulse">In progress</span>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Step 03</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                Qualifies every lead automatically
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI employee asks the right questions — budget, timeline, decision-making authority — so your team only speaks with qualified, ready-to-buy prospects.
              </p>
              <ul className="space-y-2">
                {['Budget & timeline questions', 'Custom qualification criteria', 'Instant lead scoring', 'Hot leads flagged immediately'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-2 md:my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#d2d2d7]" />
              <div className="w-6 h-6 rounded-full border-2 border-[#18b5d8] bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
              </div>
              <div className="w-px h-8 bg-[#d2d2d7]" />
            </div>
          </div>

          {/* Step 4 — Books */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-6">
            <div className="md:order-2 rounded-[28px] bg-[#f5f5f7] border border-[#e5e5ea] p-8 flex items-center justify-center" style={{ minHeight: 280 }}>
              <div className="w-full max-w-xs">
                <div className="bg-white rounded-2xl border border-[#18b5d8] p-5 shadow-sm">
                  <p className="text-[#18b5d8] font-bold text-[12px] mb-3">&#128197; Appointment Confirmed</p>
                  {[
                    ['Date', 'Thursday, this week'],
                    ['Time', '2:00 PM EST'],
                    ['Host', 'Your Team'],
                    ['Type', 'Live AI Demo'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between py-1.5 border-b border-[#f0f0f0] last:border-0">
                      <span className="text-[12px] text-[#86868b]">{l}</span>
                      <span className="text-[12px] font-semibold text-[#1d1d1f]">{v}</span>
                    </div>
                  ))}
                  <div className="mt-4 py-2.5 rounded-xl text-center text-[12px] font-bold text-white" style={{ background: '#18b5d8' }}>
                    Added to calendar &#10003;
                  </div>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Step 04</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                Books straight to your calendar
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                No back-and-forth emails. No scheduling friction. Qualified leads book themselves directly into your calendar — confirmed, reminded, and ready to show.
              </p>
              <ul className="space-y-2">
                {['Direct calendar integration', 'Automated reminders sent', '40% fewer no-shows', 'Reschedule handled automatically'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-2 md:my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#d2d2d7]" />
              <div className="w-6 h-6 rounded-full border-2 border-[#18b5d8] bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
              </div>
              <div className="w-px h-8 bg-[#d2d2d7]" />
            </div>
          </div>

          {/* Step 5 — You Close */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="rounded-[28px] bg-[#f0fafd] border border-[#d0eef7] p-8 flex items-center justify-center" style={{ minHeight: 280 }}>
              <div className="w-full max-w-xs text-center">
                <div className="w-16 h-16 rounded-full bg-[#18b5d8]/10 border-2 border-[#18b5d8]/30 flex items-center justify-center text-[32px] mx-auto mb-4">
                  &#129309;
                </div>
                <p className="text-[#1d1d1f] font-bold text-[16px] mb-1">Deal closed</p>
                <p className="text-[#86868b] text-[13px] mb-5">Tampa Bay Plumbing Co.</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: '6', l: 'Extra jobs' },
                    { n: '< 30s', l: 'Response' },
                    { n: '100%', l: 'Automated' },
                  ].map(s => (
                    <div key={s.l} className="bg-white rounded-xl p-3 border border-[#e5e5ea]">
                      <p className="text-[#18b5d8] font-extrabold text-[16px] leading-none">{s.n}</p>
                      <p className="text-[#86868b] text-[9px] mt-1 font-semibold uppercase">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Step 05</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                You show up and close the deal
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                By the time you talk to a prospect, they're already warmed up, qualified, and expecting your call. Your team does what it does best: close deals. The AI handled everything else.
              </p>
              <ul className="space-y-2">
                {['Only talk to ready buyers', 'Every lead followed up automatically', 'Full conversation history in your CRM', 'Your team stays in revenue mode'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">The difference</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-14">
            Before vs. after AI employees.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-[20px] border border-[#e5e5ea] bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-400 font-bold text-[14px]">&#10007;</div>
                <p className="text-[#86868b] font-bold text-[13px] uppercase tracking-wide">Without AI Employees</p>
              </div>
              <div className="space-y-4">
                {[
                  'Leads sit for hours before anyone responds',
                  'Follow-up happens when someone remembers',
                  'Cold leads quietly disappear',
                  'Reviews only come in when clients think to leave them',
                  "Social media posts when there's \"time\"",
                  'Your team spends half their day on admin',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-red-300 mt-0.5 shrink-0 text-[13px]">&#10007;</span>
                    <p className="text-[#86868b] text-[13px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-[#18b5d8]/25 bg-[#f0fafd] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#18b5d8]/10 border border-[#18b5d8]/25 flex items-center justify-center text-[#18b5d8] font-bold text-[14px]">&#10003;</div>
                <p className="text-[#18b5d8] font-bold text-[13px] uppercase tracking-wide">With AI Employees</p>
              </div>
              <div className="space-y-4">
                {[
                  'Every lead gets a response in under 60 seconds',
                  'Multi-touch follow-up runs automatically',
                  'Cold leads re-engaged before they\'re gone forever',
                  'Reviews requested after every completed job',
                  'Fresh social content published every single day',
                  'Your team only handles revenue-generating work',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#18b5d8] mt-0.5 shrink-0 text-[13px]">&#10003;</span>
                    <p className="text-[#1d1d1f] text-[13px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI VISIBILITY ────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">AI visibility</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
            Get found where people<br className="hidden sm:block" /> are searching now.
          </h2>
          <p className="text-[#6e6e73] text-[16px] mb-14 max-w-xl leading-relaxed">
            Searches are moving to ChatGPT, Google AI Overviews, and Perplexity. Your Blogger AI employee creates the content that gets your business cited in these answers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                platform: 'Google AI Overview',
                icon: '🔍',
                snippet: '"For HVAC repairs in Tampa, Shark Cooling is frequently mentioned as a trusted local option with strong reviews and fast response times."',
                label: 'Cited by AI',
              },
              {
                platform: 'ChatGPT',
                icon: '🤖',
                snippet: '"Based on local reputation and online presence, I\'d recommend checking out Shark Cooling — they\'re well-reviewed and respond quickly to new customers."',
                label: 'Recommended',
              },
              {
                platform: 'Perplexity',
                icon: '🌐',
                snippet: '"Shark Cooling appears in multiple local sources as a highly rated HVAC provider in the Tampa Bay area with consistent 5-star reviews."',
                label: 'Referenced',
              },
            ].map(card => (
              <div key={card.platform} className="rounded-[20px] border border-[#e5e5ea] bg-[#f5f5f7] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]">{card.icon}</span>
                    <p className="text-[#1d1d1f] font-semibold text-[12px]">{card.platform}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] uppercase tracking-wide">
                    {card.label}
                  </span>
                </div>
                <p className="text-[#6e6e73] text-[12px] leading-relaxed italic">{card.snippet}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border border-[#18b5d8]/20 bg-[#f0fafd] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-[#18b5d8]/10 flex items-center justify-center text-[22px]">&#128221;</div>
            <div>
              <p className="text-[#1d1d1f] font-bold text-[15px] mb-1">Blogger publishes weekly articles in your voice</p>
              <p className="text-[#6e6e73] text-[13px] leading-relaxed">SEO-optimized, geo-targeted content that builds authority in your local market — and earns you citations in AI-powered search results. No writing required from you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">Real results</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-14">
            What happens in the first 90 days.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {[
              { stat: '2–4', label: 'Extra deals closed per month', sub: 'From leads that used to go cold' },
              { stat: '40%', label: 'Reduction in no-shows', sub: 'AI confirms and reminds automatically' },
              { stat: '4.8★', label: 'Average review rating', sub: 'After 90 days of automated requests' },
            ].map(r => (
              <div key={r.label} className="rounded-[20px] border border-[#e5e5ea] bg-white p-7 text-center shadow-sm">
                <p className="text-[44px] font-extrabold text-[#18b5d8] leading-none mb-3">{r.stat}</p>
                <p className="text-[#1d1d1f] font-semibold text-[14px] mb-1.5">{r.label}</p>
                <p className="text-[#86868b] text-[12px]">{r.sub}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border border-[#e5e5ea] bg-white p-8 sm:p-10 shadow-sm">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#F9DB79] text-[18px]">&#9733;</span>
              ))}
            </div>
            <p className="text-[#1d1d1f] text-[17px] sm:text-[19px] leading-relaxed mb-6 max-w-2xl font-medium">
              &ldquo;We were losing leads every week — they&apos;d fill out the form and we&apos;d call back two hours later and they&apos;d already hired someone else. Now Gemma responds in 30 seconds and books them on the spot. We closed 6 extra jobs in the first month.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] font-extrabold text-[14px]">JR</div>
              <div>
                <p className="text-[#1d1d1f] font-semibold text-[13px]">James R.</p>
                <p className="text-[#86868b] text-[12px]">Owner, Tampa Bay Plumbing Co.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO SECTION ─────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">Live demo</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
            See Gemma qualify a lead.<br className="hidden sm:block" /> Right now.
          </h2>
          <p className="text-[#6e6e73] text-[16px] mb-10 max-w-lg leading-relaxed">
            This is the same AI that will represent your business. Watch how it qualifies, handles objections, and books the appointment.
          </p>

          <div className="rounded-[20px] overflow-hidden border border-[#e5e5ea] shadow-lg mb-8">
            <video
              controls
              preload="metadata"
              className="w-full block"
            >
              <source src="/rabbit-groomers.mp4" type="video/mp4" />
            </video>
          </div>

          <button
            onClick={openDemo}
            className="bg-[#18b5d8] text-white text-[14px] font-bold rounded-full px-7 py-3 hover:bg-[#1297b8] transition-colors duration-150 shadow-[0_4px_16px_rgba(24,181,216,0.3)]"
          >
            Try it yourself →
          </button>
        </div>
      </section>

      {/* ── AI CRM / SALES ASSISTANT ─────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-3">AI CRM Assistant</p>
            <h2 className="text-[40px] sm:text-[46px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight">
              Say goodbye to manual notes<br className="hidden sm:block" /> and messy data.
            </h2>
            <p className="text-[#6e6e73] text-[17px] mt-4 max-w-xl mx-auto leading-relaxed">
              Your AI CRM Assistant logs every interaction, finds customer details on demand, and enriches your pipeline — automatically.
            </p>
          </div>

          {/* Hero image */}
          <div className="flex justify-center mb-20">
            <img
              src="/AI-Sales-Assistant-hero-img.webp"
              alt="AI Sales Assistant — automate CRM updates and find deal details instantly"
              className="w-full max-w-2xl rounded-[20px] shadow-md"
            />
          </div>

          {/* Feature 1 — Automate CRM updates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-6">
            <div className="rounded-[28px] bg-white border border-[#e5e5ea] p-8 flex items-center justify-center shadow-sm" style={{ minHeight: 300 }}>
              <div className="w-full max-w-xs">
                <p className="text-[#1d1d1f] font-bold text-[13px] mb-4">CRM Activity Log</p>
                {[
                  { icon: '📞', label: 'Call with Marcus T.', detail: 'Discussed budget · 12 min', time: 'Just now', auto: true },
                  { icon: '📧', label: 'Follow-up email sent', detail: 'Proposal + pricing deck', time: '2h ago', auto: true },
                  { icon: '📅', label: 'Meeting notes saved', detail: 'Demo call — ready to close', time: 'Yesterday', auto: true },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-[#f0f0f0] last:border-0">
                    <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[16px] shrink-0">{row.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1d1d1f] font-semibold text-[12px] truncate">{row.label}</p>
                      <p className="text-[#86868b] text-[11px] truncate">{row.detail}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[#86868b] text-[10px]">{row.time}</p>
                      {row.auto && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] uppercase">Auto</span>
                      )}
                    </div>
                  </div>
                ))}
                <p className="text-[11px] text-[#86868b] text-center mt-3 font-medium">All logged automatically · Zero manual entry</p>
              </div>
            </div>
            <div>
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Feature 01</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                Automate CRM updates so you focus on selling
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Every call, email, and meeting gets logged automatically. No more manual data entry at the end of the day — your pipeline stays accurate without your team lifting a finger.
              </p>
              <ul className="space-y-2">
                {['Auto-logs every call and email', 'Meeting notes captured instantly', 'Pipeline stages updated in real time', 'Zero manual CRM work for your team'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-2 md:my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#d2d2d7]" />
              <div className="w-6 h-6 rounded-full border-2 border-[#18b5d8] bg-[#f5f5f7] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
              </div>
              <div className="w-px h-8 bg-[#d2d2d7]" />
            </div>
          </div>

          {/* Feature 2 — AI Chat for customer details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-6">
            <div className="md:order-2 rounded-[28px] bg-[#f0fafd] border border-[#d0eef7] p-8 flex items-center justify-center" style={{ minHeight: 300 }}>
              <div className="w-full max-w-xs">
                <p className="text-[#1d1d1f] font-bold text-[13px] mb-4">Ask your AI anything</p>
                <div className="space-y-3">
                  <div className="flex gap-2 items-end">
                    <div className="w-7 h-7 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[9px] font-extrabold shrink-0">AI</div>
                    <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-[#e5e5ea] text-[12px] text-[#1d1d1f] leading-snug max-w-[210px]">
                      How can I help you today?
                    </div>
                  </div>
                  <div className="flex gap-2 items-end justify-end">
                    <div className="bg-[#18b5d8] text-white rounded-2xl rounded-br-sm px-3 py-2.5 text-[12px] leading-snug max-w-[190px]">
                      What&apos;s the status on the Marcus T. account?
                    </div>
                  </div>
                  <div className="flex gap-2 items-end">
                    <div className="w-7 h-7 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[9px] font-extrabold shrink-0">AI</div>
                    <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm border border-[#e5e5ea] text-[12px] text-[#1d1d1f] leading-snug max-w-[210px]">
                      Marcus is in <strong>Proposal Sent</strong> stage. Budget $4K/mo, last contact 2h ago. Ready to follow up.
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-[#86868b] text-center mt-4 font-medium">Instant answers · No digging through records</p>
              </div>
            </div>
            <div className="md:order-1">
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Feature 02</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                Find customer details and opportunities via AI Chat
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Instead of digging through records, just ask. Your AI surfaces deal status, contact history, open opportunities, and next best actions — in seconds.
              </p>
              <ul className="space-y-2">
                {['Instant deal status on any account', 'Full contact and activity history', 'Next-step recommendations', 'Works across your entire pipeline'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center my-2 md:my-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#d2d2d7]" />
              <div className="w-6 h-6 rounded-full border-2 border-[#18b5d8] bg-[#f5f5f7] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
              </div>
              <div className="w-px h-8 bg-[#d2d2d7]" />
            </div>
          </div>

          {/* Feature 3 — Enrich leads with AI search */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="rounded-[28px] bg-white border border-[#e5e5ea] p-8 flex items-center justify-center shadow-sm" style={{ minHeight: 300 }}>
              <div className="w-full max-w-xs">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 bg-[#f5f5f7] rounded-xl px-3 py-2 text-[11px] text-[#86868b]">Searching: &quot;Tampa Bay Roofing LLC&quot;</div>
                  <div className="w-7 h-7 rounded-lg bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-bold shrink-0">↵</div>
                </div>
                <div className="bg-[#f0fafd] rounded-2xl p-4 border border-[#d0eef7]">
                  <p className="text-[#18b5d8] font-bold text-[11px] uppercase tracking-wide mb-3">Lead enriched ✓</p>
                  {[
                    ['Company', 'Tampa Bay Roofing LLC'],
                    ['Owner', 'Derek S. · (813) 555-0142'],
                    ['Revenue', '~$2.4M / year'],
                    ['Employees', '12–18 staff'],
                    ['Online reviews', '4.6★ · 87 Google reviews'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between py-1.5 border-b border-[#e0f0f8] last:border-0">
                      <span className="text-[11px] text-[#86868b]">{l}</span>
                      <span className="text-[11px] font-semibold text-[#1d1d1f] text-right max-w-[140px]">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#86868b] text-center mt-3 font-medium">Data found in &lt; 5 seconds</p>
              </div>
            </div>
            <div>
              <span className="text-[#18b5d8] font-bold text-[12px] uppercase tracking-widest">Feature 03</span>
              <h3 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mt-2 mb-4">
                Enrich lead and account details with AI search
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Walk into every conversation fully prepared. Your AI automatically finds company size, revenue, ownership, reviews, and contact details — before your first call.
              </p>
              <ul className="space-y-2">
                {['Company size and revenue data', 'Owner and direct contact info', 'Online reputation snapshot', 'Enrichment runs automatically on new leads'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI REPUTATION SPECIALIST ─────────────────────────────────────── */}
      <section className="bg-white border-t border-[#e5e5ea] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">AI Reputation Specialist</p>
            <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
              Turn every review into an opportunity.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed">
              Your AI Reputation Specialist monitors, responds to, and analyzes every Google and Facebook review — automatically — so your brand always looks its best without adding to your team's workload.
            </p>
          </div>

          {/* Hero image */}
          <div className="flex justify-center mb-20">
            <img
              src="/Reputation-Management-specialist-hero-img.webp"
              alt="AI Reputation Specialist — respond to reviews and analyze customer feedback automatically"
              className="w-full max-w-2xl rounded-[20px] shadow-md"
            />
          </div>

          {/* Feature 01 — Auto responses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            {/* Mock: Review response card */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-bold">G</div>
                <div>
                  <p className="text-[#1d1d1f] text-[13px] font-semibold">Google Review</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-[11px] text-[#86868b]">2 min ago</span>
              </div>
              <p className="text-[#1d1d1f] text-[13px] mb-5 leading-relaxed">"Amazing experience from start to finish. The team was professional, responsive, and truly went above and beyond. Highly recommend!"</p>
              <div className="bg-white rounded-[12px] border border-[#e5e5ea] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center">
                    <span className="text-[#18b5d8] text-[9px] font-bold">AI</span>
                  </div>
                  <p className="text-[10px] font-semibold text-[#18b5d8] uppercase tracking-wide">AI Response — Draft</p>
                </div>
                <p className="text-[#1d1d1f] text-[12px] leading-relaxed">"Thank you so much for the kind words! We love hearing when our clients feel taken care of. It's exactly why we do what we do — we'll pass this along to the whole team!"</p>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-[#18b5d8] text-white text-[11px] font-semibold rounded-full py-1.5 text-center">Post Reply</button>
                  <button className="flex-1 border border-[#e5e5ea] text-[#1d1d1f] text-[11px] font-semibold rounded-full py-1.5 text-center">Edit</button>
                </div>
              </div>
            </div>
            {/* Copy */}
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                Reputation-safe responses, on autopilot.
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI crafts personalized, context-aware replies for every Google and Facebook review — matching your brand voice for 5-star praise and handling negative feedback with professionalism and care.
              </p>
              <ul className="space-y-2">
                {['Responds to positive and negative reviews', 'Brand-safe tone on every reply', 'Multi-platform: Google & Facebook', 'Multilingual response support'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center mb-24">
            <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
            <div className="w-px h-12 bg-gradient-to-b from-[#18b5d8] to-transparent" />
          </div>

          {/* Feature 02 — Configurable rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            {/* Copy */}
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                Your rules. Your standards.
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Set exactly when and how your AI responds. Configure star-rating thresholds, response timing, platform preferences, and tone guidelines — so every reply reflects your brand the way you want it.
              </p>
              <ul className="space-y-2">
                {['Star-rating response thresholds', 'Auto-post or draft-for-review mode', 'Response timing controls', 'Per-platform tone settings'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mock: Settings panel */}
            <div className="order-1 lg:order-2 bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Response Rules</p>
              {[
                { label: 'Auto-respond to 4–5 star reviews', active: true },
                { label: 'Draft responses for 1–3 star reviews', active: true },
                { label: 'Respond within 2 hours of posting', active: true },
                { label: 'Use formal tone on all platforms', active: false },
              ].map(rule => (
                <div key={rule.label} className="flex items-center justify-between py-3 border-b border-[#e5e5ea] last:border-0">
                  <span className="text-[13px] text-[#1d1d1f]">{rule.label}</span>
                  <div className={`w-9 h-5 rounded-full transition-colors ${rule.active ? 'bg-[#18b5d8]' : 'bg-[#d1d1d6]'} relative shrink-0`}>
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${rule.active ? 'left-[18px]' : 'left-0.5'}`} />
                  </div>
                </div>
              ))}
              <div className="mt-4 bg-white rounded-[12px] border border-[#e5e5ea] p-3">
                <p className="text-[11px] text-[#86868b] mb-1">Brand tone keywords</p>
                <div className="flex flex-wrap gap-1.5">
                  {['professional', 'warm', 'grateful', 'local'].map(tag => (
                    <span key={tag} className="bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center mb-24">
            <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
            <div className="w-px h-12 bg-gradient-to-b from-[#18b5d8] to-transparent" />
          </div>

          {/* Feature 03 — Review insights chat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mock: Insights chat */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Review Insights Chat</p>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">
                    What are customers saying most about our service this month?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                    Top themes this month: <span className="font-semibold text-[#18b5d8]">response time</span> (mentioned 18×), <span className="font-semibold text-[#18b5d8]">professionalism</span> (14×), and <span className="font-semibold text-[#18b5d8]">value</span> (11×). Sentiment is up 12% vs last month.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">
                    Any recurring complaints I should act on?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                    3 reviews mention <span className="font-semibold">wait times</span> on Fridays. Consider a follow-up message for Friday bookings to set expectations proactively.
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 bg-white rounded-full border border-[#e5e5ea] px-4 py-2">
                <span className="text-[12px] text-[#86868b] flex-1">Ask about your reviews…</span>
                <div className="w-6 h-6 rounded-full bg-[#18b5d8] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
            {/* Copy */}
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
                Ask your reviews anything.
              </h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Skip the spreadsheets. Chat directly with your review data to surface sentiment shifts, keyword trends, and actionable recommendations — in plain English, in seconds.
              </p>
              <ul className="space-y-2">
                {['Sentiment trend analysis', 'Top keyword and topic patterns', 'NPS and rating breakdowns', 'Actionable improvement suggestions'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
                    <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">The process</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-14">
            Up and running within the week.
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
                <div className="w-12 h-12 rounded-full bg-[#18b5d8]/10 border border-[#18b5d8]/20 flex items-center justify-center text-[#18b5d8] font-extrabold text-[15px] mb-4 shrink-0">
                  {step.n}
                </div>
                <p className="text-[#1d1d1f] font-bold text-[14px] mb-2">{step.title}</p>
                <p className="text-[#6e6e73] text-[13px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIZ ─────────────────────────────────────────────────────────── */}
      <section id="quiz" className="bg-white border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3 text-center">Find your fit</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4 text-center">
            Which AI employee do you need?
          </h2>
          <p className="text-[#6e6e73] text-[15px] mb-12 text-center leading-relaxed">
            3 quick questions. Get your personalized recommendation instantly.
          </p>

          {!quizDone ? (
            <div>
              <div className="flex items-center gap-2 mb-8 justify-center">
                {QUIZ_QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: i <= quizStep ? 32 : 16,
                      backgroundColor: i <= quizStep ? '#18b5d8' : '#e5e5ea',
                      opacity: i === quizStep ? 1 : i < quizStep ? 0.6 : 1,
                    }}
                  />
                ))}
              </div>

              <p className="text-[#86868b] text-[12px] text-center mb-3 uppercase tracking-wide font-medium">
                Question {quizStep + 1} of {QUIZ_QUESTIONS.length}
              </p>
              <h3 className="text-[22px] font-bold text-[#1d1d1f] text-center mb-8 leading-snug">
                {QUIZ_QUESTIONS[quizStep].question}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {QUIZ_QUESTIONS[quizStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuizAnswer(i)}
                    className="text-left rounded-2xl border border-[#d2d2d7] bg-white p-5 hover:border-[#18b5d8] hover:bg-[#f0fafd] transition-all duration-150 group shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#d2d2d7] group-hover:border-[#18b5d8] flex items-center justify-center text-[12px] font-bold text-[#86868b] group-hover:text-[#18b5d8] group-hover:bg-[#18b5d8]/5 transition-colors shrink-0">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <p className="text-[#1d1d1f] text-[14px] font-medium">
                        {opt.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : quizResult ? (
            <div className="text-center" style={{ animation: 'popIn .3s cubic-bezier(.34,1.56,.64,1)' }}>
              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 shadow-lg" style={{ boxShadow: `0 8px 30px ${EMPLOYEES[quizResult.employee].color}30` }}>
                <img src={EMPLOYEES[quizResult.employee].cardImg} alt={EMPLOYEES[quizResult.employee].name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-2">Your match</p>
              <h3 className="text-[28px] font-bold text-[#1d1d1f] mb-1">{quizResult.headline}</h3>
              <p className="text-[#86868b] text-[13px] uppercase tracking-wide font-medium mb-6">{quizResult.role}</p>
              <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-10 max-w-md mx-auto">{quizResult.body}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/free-report"
                  className="bg-[#18b5d8] text-white text-[15px] font-bold rounded-full px-8 py-3.5 hover:bg-[#1297b8] transition-colors duration-150 inline-block shadow-[0_4px_16px_rgba(24,181,216,0.3)]"
                >
                  Book My Free AI Audit
                </a>
                <button
                  onClick={resetQuiz}
                  className="text-[#86868b] text-[13px] font-medium hover:text-[#1d1d1f] transition-colors"
                >
                  Start over
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-[#6e6e73] text-[15px] mb-6">Let&apos;s find your best fit.</p>
              <button onClick={resetQuiz} className="text-[#18b5d8] font-bold">Try again</button>
            </div>
          )}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-5">Get started</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
            Ready to hire your first AI employee?
          </h2>
          <p className="text-[#6e6e73] text-[16px] mb-10 leading-relaxed">
            Book a free 30-minute audit. We&apos;ll show you exactly where AI employees fit in your business and what to expect in the first 90 days.
          </p>
          <a
            href="/free-report"
            className="bg-[#18b5d8] text-white text-[15px] font-bold rounded-full px-8 py-3.5 hover:bg-[#1297b8] transition-colors duration-150 inline-block shadow-[0_4px_20px_rgba(24,181,216,0.35)]"
          >
            Book My Free AI Audit
          </a>
        </div>
      </section>

      {/* ── DEMO MODAL ───────────────────────────────────────────────────── */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-[500] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeDemo()}
        >
          <div className="bg-white rounded-2xl w-full max-w-[420px] overflow-hidden shadow-2xl flex flex-col"
               style={{ maxHeight: '90vh', animation: 'popIn .22s cubic-bezier(.34,1.56,.64,1)' }}>

            <div style={{ background: 'linear-gradient(135deg,#18b5d8,#1282a0)' }} className="px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-extrabold text-[14px]">G</div>
              <div className="flex-1">
                <p className="text-white font-bold text-[13px]">Gemma — Chat Receptionist</p>
                <p className="text-white/70 text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" style={{ animation: 'blink 1.5s infinite' }} />
                  Online · Shark AI Solutions
                </p>
              </div>
              <button onClick={closeDemo} className="w-7 h-7 rounded-full bg-white/15 text-white flex items-center justify-center text-[15px] hover:bg-white/25 transition-colors">&#10005;</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ minHeight: 320, maxHeight: 380 }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {m.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[11px] font-extrabold text-white"
                         style={{ background: 'linear-gradient(135deg,#18b5d8,#1282a0)' }}>G</div>
                  )}
                  {m.text === '__booking__' ? (
                    <div className="bg-[#f0fafd] border-[1.5px] border-[#18b5d8] rounded-xl p-3 max-w-[80%]">
                      <p className="text-[#18b5d8] font-bold text-[11.5px] mb-2">&#128197; Appointment Confirmed</p>
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
                &#9654;
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn { from{transform:scale(.9);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes dotBounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
      `}</style>
    </>
  )
}
