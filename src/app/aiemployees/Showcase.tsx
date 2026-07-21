'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

const EMPLOYEES = [
  {
    name: 'Gemma', role: 'Chat Receptionist', cardImg: '/avatars/gemma.png', color: '#18b5d8',
    desc: 'Responds to every website visitor instantly. Qualifies leads and books appointments 24/7.',
    tags: ['Live chat', 'Lead qualification', 'Booking'],
  },
  {
    name: 'Voice Receptionist', role: 'Voice Receptionist', cardImg: '/avatars/voice.png', color: '#4FD1A0',
    desc: 'Answers every inbound call in seconds, handles FAQs, qualifies callers, and books appointments without a human picking up.',
    tags: ['Inbound calls', 'Voice AI', 'Appointment booking'],
  },
  {
    name: 'Reputation Specialist', role: 'Review Manager', cardImg: '/avatars/reputation.png', color: '#F9DB79',
    desc: 'Requests reviews after every job and responds to every comment automatically.',
    tags: ['Review requests', 'Auto-responses', '5-star growth'],
  },
  {
    name: 'AI CRM', role: 'Sales Assistant', cardImg: '/avatars/sales.png', color: '#18b5d8',
    desc: 'Runs multi-touch follow-up across email, SMS, and phone so no lead falls through the cracks.',
    tags: ['Email + SMS', 'Cold lead rescue', 'Multi-channel'],
  },
  {
    name: 'AI Sales Assistant', role: 'Manager & Coach', cardImg: '/avatars/sales-coach.png', color: '#7C3AED',
    desc: 'Joins every sales meeting, records the full transcript, and delivers a BANT score and Sandler scorecard within minutes, then auto-fills your CRM and coaches your team on exactly what to do next.',
    tags: ['BANT scoring', 'Sandler scorecard', 'Call transcription', 'CRM auto-fill', 'Pipeline coaching'],
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
      { label: "Responding to new web leads fast enough", result: 0 },
      { label: "Missing inbound calls from potential customers", result: 1 },
      { label: "Not enough 5-star reviews online", result: 2 },
      { label: "Sales team needs help closing and qualifying deals", result: 4 },
      { label: "Not showing up when people search on ChatGPT or Google AI", result: 5, immediate: true },
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
      { label: "We have a process, it's just manual" },
    ],
  },
]

const QUIZ_RESULTS = [
  {
    employee: 0,
    headline: "Your AI Employee: Gemma",
    role: 'Chat Receptionist',
    body: "You need an AI that responds to every lead the moment they arrive, before they check a competitor. Gemma handles inbound chat, qualifies visitors in real-time, and books appointments 24/7.",
  },
  {
    employee: 1,
    headline: "Your AI Employee: Voice Receptionist",
    role: 'Voice Receptionist',
    body: "Every missed call is a missed customer. Your Voice Receptionist answers every inbound call in seconds, handles common questions, qualifies the caller, and books the appointment without a human picking up.",
  },
  {
    employee: 2,
    headline: "Your AI Employee: Reputation Specialist",
    role: 'Review Manager',
    body: "Reviews are the first thing potential customers check. Your Reputation Specialist requests reviews after every job and responds to every comment, fully automatically.",
  },
  {
    employee: 3,
    headline: "Your AI Employee: AI CRM",
    role: 'Sales Assistant',
    body: "Every cold lead is a deal waiting to happen. Your AI CRM runs automated multi-touch follow-up across email, SMS, and phone so no lead ever falls through the cracks again.",
  },
  {
    employee: 4,
    headline: "Your AI Employee: AI Sales Assistant",
    role: 'Manager & Coach',
    body: "After every sales call, your AI Sales Assistant delivers a BANT qualification score, a full Sandler scorecard across all seven steps, and a complete meeting transcript, then auto-fills your CRM and sends your rep a specific coaching note on exactly what to do differently next time.",
  },
  {
    employee: -1,
    headline: "You need AI Visibility",
    role: 'AI Visibility',
    body: "People are searching for businesses like yours on ChatGPT, Google AI, and Gemini every day. Most local businesses aren't showing up. We audit your current AI visibility, build the content and authority signals that get you cited, and track your mentions across every major AI platform.",
  },
]

const CONVO = [
  { role: 'bot', text: "Hey! I'm Gemma. What brings you to Shark AI Solutions today?", delay: 600 },
  { role: 'user', text: "I want to know how AI employees work and what they cost.", delay: 0 },
  { role: 'bot', text: "Great question. We build AI employees that handle lead qualification, follow-up, and appointment booking so your team only talks to people ready to buy. What part of your sales process feels like the biggest bottleneck?", delay: 1400 },
  { role: 'user', text: "Follow-up. Leads go cold and we never catch them in time.", delay: 0 },
  { role: 'bot', text: "That's exactly what our Follow-Up AI solves. It runs multi-touch sequences across email, SMS, and phone automatically. Re-engages cold leads at the right moment without anyone lifting a finger.", delay: 1600 },
  { role: 'bot', text: "Quick question, roughly how many new leads do you see per month?", delay: 800 },
  { role: 'user', text: "Around 80 to 100 per month.", delay: 0 },
  { role: 'bot', text: "Perfect fit. At that volume you'd recover 20-30 leads per month that currently go cold. That's typically 2-4 extra closed deals monthly for our clients.", delay: 1500 },
  { role: 'bot', text: "Can I grab a 30-minute call on your calendar so you can see this live with your real numbers?", delay: 900 },
  { role: 'user', text: "Yes, Thursday afternoon works.", delay: 0 },
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
    const opt = q.options[answerIndex] as { label: string; result?: number; immediate?: boolean }
    if (opt.result !== undefined) {
      setQuizResultIndex(opt.result)
      if (opt.immediate) {
        setQuizStep(QUIZ_QUESTIONS.length)
      } else if (quizStep < QUIZ_QUESTIONS.length - 1) {
        setQuizStep(quizStep + 1)
      } else {
        setQuizStep(QUIZ_QUESTIONS.length)
      }
    } else if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
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
            <span className="text-[#18b5d8] text-[12px] font-semibold tracking-wide">Shark AI Solutions, Tampa Bay</span>
          </div>

          <h1 className="text-[52px] sm:text-[68px] font-extrabold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6">
            The first business<br className="hidden sm:block" />
            <span style={{ color: '#18b5d8' }}>to respond wins the job.</span>
          </h1>
          <p className="text-[#6e6e73] text-[18px] sm:text-[20px] leading-relaxed mb-10 max-w-2xl mx-auto">
            Most Tampa Bay businesses lose leads every single day. Calls go unanswered. Web forms sit for hours. Reviews pile up without a reply. We put AI employees in your business to handle all of it automatically, and we make sure ChatGPT and Google AI recommend you when customers search.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/ai-audit"
              className="bg-[#18b5d8] text-white text-[16px] font-bold rounded-full px-9 py-4 hover:bg-[#1297b8] transition-colors duration-150 inline-block shadow-[0_4px_20px_rgba(24,181,216,0.35)]"
            >
              Book My Free AI Audit
            </a>
            <button
              onClick={openDemo}
              className="text-[#1d1d1f] text-[15px] font-medium hover:text-[#18b5d8] transition-colors duration-150 flex items-center gap-2.5"
            >
              <span className="w-9 h-9 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[12px] text-[#18b5d8]">&#9654;</span>
              Watch Gemma qualify a lead
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-[#86868b] font-medium">
            {[
              { icon: '⚡', text: 'Up and running within the week' },
              { icon: '🤖', text: '5 AI employee types' },
              { icon: '📞', text: 'Chat · SMS · Phone · Email' },
              { icon: '🔍', text: 'AI Visibility included' },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO-PILLAR ───────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">Two ways we grow your business</p>
            <h2 className="text-[40px] sm:text-[46px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight">
              AI Employees. AI Visibility.
            </h2>
            <p className="text-[#6e6e73] text-[17px] mt-4 max-w-lg mx-auto leading-relaxed">
              Most companies pick one. We do both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Employees card */}
            <div className="rounded-[24px] bg-white border border-[#e5e5ea] p-8 flex flex-col gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#18b5d8]/10 flex items-center justify-center text-[24px]">🤖</div>
              <div>
                <h3 className="text-[24px] font-extrabold text-[#1d1d1f] leading-tight mb-3">AI Employees</h3>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                  Five AI employees that handle leads, calls, follow-up, reviews, and sales coaching. They work 24/7, respond in under 30 seconds, and never have a bad day. Your team focuses on closing. The AI handles everything else.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Chat', 'Voice', 'CRM', 'Reviews', 'Sales Coach'].map(tag => (
                  <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#f0fafd] border border-[#18b5d8]/20 text-[#18b5d8] uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="/aiemployees"
                className="mt-auto inline-flex items-center gap-2 text-[#18b5d8] font-bold text-[14px] hover:gap-3 transition-all duration-150"
              >
                Meet the team <span>&#8594;</span>
              </a>
            </div>

            {/* AI Visibility card */}
            <div className="rounded-[24px] bg-white border border-[#e5e5ea] p-8 flex flex-col gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#18b5d8]/10 flex items-center justify-center text-[24px]">🔍</div>
              <div>
                <h3 className="text-[24px] font-extrabold text-[#1d1d1f] leading-tight mb-3">AI Visibility</h3>
                <p className="text-[#6e6e73] text-[15px] leading-relaxed">
                  When someone asks ChatGPT or Google AI for the best plumber, contractor, or consultant in Tampa Bay, do they recommend you? Probably not yet. We build the content and authority signals that change that.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {['ChatGPT', 'Google AI', 'Perplexity', 'Gemini'].map(tag => (
                  <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#f0fafd] border border-[#18b5d8]/20 text-[#18b5d8] uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="/ai-audit"
                className="mt-auto inline-flex items-center gap-2 text-[#18b5d8] font-bold text-[14px] hover:gap-3 transition-all duration-150"
              >
                Get my AI visibility audit <span>&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ─────────────────────────────────────────────────────── */}
      <div
        className="bg-white flex flex-col items-center justify-center overflow-hidden py-16 border-t border-[#e5e5ea]"
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

        <div className="mt-8 z-20 pointer-events-auto">
          <a
            href="/aiemployees"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#18b5d8] border border-[#18b5d8]/30 rounded-full px-6 py-2.5 hover:bg-[#f0fafd] transition-colors duration-150"
          >
            See all AI employees &#8594;
          </a>
        </div>
      </div>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <div className="bg-[#f5f5f7] border-y border-[#e5e5ea]">
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

      {/* ── AI VISIBILITY ────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">AI visibility</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">
            Get found where people<br className="hidden sm:block" /> are actually searching now.
          </h2>
          <p className="text-[#6e6e73] text-[16px] mb-14 max-w-xl leading-relaxed">
            Traditional SEO gets you on Google. That still matters. But searches are moving to ChatGPT, Google AI Overviews, Gemini, and Perplexity. Your competitors aren&apos;t there yet. We make sure you are.
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
                snippet: '"Based on local reputation and online presence, I\'d recommend checking out Shark Cooling. They\'re well-reviewed and respond quickly to new customers."',
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
            <div className="flex-1">
              <p className="text-[#1d1d1f] font-bold text-[15px] mb-1">We build the signals that get your business cited</p>
              <p className="text-[#6e6e73] text-[13px] leading-relaxed">SEO-optimized, geo-targeted content that builds authority in your local market and earns you citations across AI-powered search platforms. No writing required from you.</p>
            </div>
            <a
              href="/ai-audit"
              className="shrink-0 bg-[#18b5d8] text-white text-[13px] font-bold rounded-full px-6 py-2.5 hover:bg-[#1297b8] transition-colors duration-150 whitespace-nowrap"
            >
              Get my free audit
            </a>
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
                  'Inbound calls go to voicemail and get lost',
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
                  'Every call answered, every lead captured and followed up',
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

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#e5e5ea] py-24 px-6">
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
              <div key={r.label} className="rounded-[20px] border border-[#e5e5ea] bg-[#f5f5f7] p-7 text-center shadow-sm">
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
              &ldquo;We were losing leads every week. They&apos;d fill out the form and we&apos;d call back two hours later and they&apos;d already hired someone else. Now Gemma responds in 30 seconds and books them on the spot. We closed 6 extra jobs in the first month.&rdquo;
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
      <section className="bg-[#f5f5f7] border-t border-[#e5e5ea] py-24 px-6">
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
            Try it yourself &#8594;
          </button>
        </div>
      </section>

      {/* ── QUIZ ─────────────────────────────────────────────────────────── */}
      <section id="quiz" className="bg-white border-t border-[#e5e5ea] py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3 text-center">Find your fit</p>
          <h2 className="text-[36px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4 text-center">
            Not sure where to start?
          </h2>
          <p className="text-[#6e6e73] text-[15px] mb-12 text-center leading-relaxed">
            One question. Get a personalized recommendation instantly.
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
              {quizResult.employee >= 0 ? (
                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 shadow-lg" style={{ boxShadow: `0 8px 30px ${EMPLOYEES[quizResult.employee].color}30` }}>
                  <img src={EMPLOYEES[quizResult.employee].cardImg} alt={EMPLOYEES[quizResult.employee].name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-[#f0fafd] border-2 border-[#18b5d8]/30 flex items-center justify-center mx-auto mb-6 shadow-lg text-[42px]">
                  🔍
                </div>
              )}
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-2">Your match</p>
              <h3 className="text-[28px] font-bold text-[#1d1d1f] mb-1">{quizResult.headline}</h3>
              <p className="text-[#86868b] text-[13px] uppercase tracking-wide font-medium mb-6">{quizResult.role}</p>
              <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-10 max-w-md mx-auto">{quizResult.body}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-[#18b5d8] text-white text-[15px] font-bold rounded-full px-8 py-3.5 hover:bg-[#1297b8] transition-colors duration-150 inline-block shadow-[0_4px_16px_rgba(24,181,216,0.3)]"
                >
                  Contact Us
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
            Ready to see what AI can do for your business?
          </h2>
          <p className="text-[#6e6e73] text-[16px] mb-10 leading-relaxed">
            Tell us about your business and we&apos;ll map out exactly which AI employees fit, what they&apos;ll do, and what to expect in the first 90 days.
          </p>
          <a
            href="/contact"
            className="bg-[#18b5d8] text-white text-[15px] font-bold rounded-full px-8 py-3.5 hover:bg-[#1297b8] transition-colors duration-150 inline-block shadow-[0_4px_20px_rgba(24,181,216,0.35)]"
          >
            Contact Us
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
                <p className="text-white font-bold text-[13px]">Gemma, Chat Receptionist</p>
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
                      {[['Date','Thursday, this week'],['Time','2:00 PM EST'],['Host','Miche, Shark AI'],['Type','Live AI Demo']].map(([l,v]) => (
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
