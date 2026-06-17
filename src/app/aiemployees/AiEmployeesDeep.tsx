'use client'

import { useState, useEffect, useRef } from 'react'

/* ── Scroll-reveal hook ─────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ── Nav data ───────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'gemma',          label: 'Gemma',               role: 'Chat Receptionist' },
  { id: 'voice',          label: 'Voice Receptionist',  role: 'Call Handler' },
  { id: 'reputation',     label: 'Reputation',          role: 'Review Manager' },
  { id: 'aicrm',          label: 'AI CRM',              role: 'Lead Qualifier' },
  { id: 'sales-assistant',label: 'Sales Coach',         role: 'Revenue AI' },
  { id: 'suite',          label: 'Full Suite',          role: 'Pricing' },
]

/* ── Helpers ────────────────────────────────────────────────────────── */
function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
      <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">✓</span>
      {text}
    </li>
  )
}

function Connector() {
  return (
    <div className="flex flex-col items-center my-16">
      <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
      <div className="w-px h-12 bg-gradient-to-b from-[#18b5d8] to-transparent" />
    </div>
  )
}

function SectionDivider() {
  return <div className="border-t border-[#e5e5ea] my-0" />
}

/* ── Blinking cursor for typing effect ─────────────────────────────── */
function Cursor() {
  return <span className="inline-block w-[2px] h-[13px] bg-[#18b5d8] align-middle ml-0.5 ai-blink" />
}

/* ════════════════════════════════════════════════════════════════════ */
export default function AiEmployeesDeep() {
  const [active, setActive] = useState('gemma')

  useEffect(() => {
    const handleScroll = () => {
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) setActive(item.id)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-white">

      {/* Global animation keyframes */}
      <style>{`
        @keyframes ai-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes ai-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes ai-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @keyframes ai-shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes ai-typing {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }
        @keyframes ai-bar-fill {
          from { width: 0%; }
        }
        @keyframes ai-fade-slide {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ai-float { animation: ai-float 7s ease-in-out infinite; }
        .ai-blink { animation: ai-blink 1.1s step-end infinite; }
        .ai-pulse-dot { animation: ai-pulse-dot 2s ease-in-out infinite; }
        .ai-typing-dot { animation: ai-typing 1.4s ease-in-out infinite; }
        .ai-typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .ai-typing-dot:nth-child(3) { animation-delay: 0.4s; }
        .demo-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .demo-card:hover {
          box-shadow: 0 12px 40px rgba(24,181,216,0.12);
          transform: translateY(-3px);
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* ── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] pt-20 sm:pt-24 pb-10 sm:pb-16 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-widest mb-5">Five AI employees. One team.</span>
            <h1 className="text-[48px] sm:text-[58px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">
              Your business runs.<br className="hidden sm:block" /> You sleep.
            </h1>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
              Every employee below answers calls, books appointments, responds to reviews, follows up on leads, and coaches your sales reps — automatically, starting within the week.
            </p>
            <a href="#suite" className="inline-block bg-[#18b5d8] text-white font-bold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#14a0c0] transition-colors">
              See pricing
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── HOW IT WORKS + 24/7 CALLOUT ────────────────────────────── */}
      <section className="bg-white py-14 sm:py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[800px] mx-auto">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-4">How It Works</p>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-5" style={{ textWrap: 'balance' }}>
              How does a Shark Branding AI employee work?
            </h2>
            <p className="text-[#444] text-[17px] leading-relaxed mb-10">
              A Shark Branding AI employee is a software agent configured to perform a single, specific business function automatically — without human supervision. Each one is trained on your business data: your services, your voice, your pricing, and your workflows. When a lead contacts you, the AI employee greets them, qualifies them using your criteria, and either books an appointment, sends a follow-up sequence, or escalates to a human — depending on what the situation requires. Unlike a chatbot that needs constant prompting, an AI employee has a defined job, a fixed data source, and a built-in escalation path. Every interaction is logged and every transcript is saved. Your team sees only the conversations that need a human. Most AI employees go live within five to seven business days. They run continuously — answering calls, responding to reviews, and following up on leads — whether your office is open or not.
            </p>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: '24/7', label: 'Always on', sub: 'Nights, weekends, and holidays — no exceptions' },
                { stat: '< 7 days', label: 'Live fast', sub: 'Most deployments go live within one week of kickoff' },
                { stat: '5 employees', label: 'One team', sub: 'Chat, voice, reviews, CRM, and sales coaching' },
              ].map(item => (
                <div key={item.stat} className="bg-[#f5f5f7] rounded-[16px] p-5 border border-[#e5e5ea]">
                  <p className="text-[#18b5d8] text-[30px] font-extrabold leading-none mb-1">{item.stat}</p>
                  <p className="text-[#1d1d1f] font-semibold text-[13px] mb-1">{item.label}</p>
                  <p className="text-[#86868b] text-[12px] leading-snug">{item.sub}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STICKY ANCHOR NAV ──────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#e5e5ea]">
        <div className="max-w-5xl mx-auto px-6 overflow-x-auto">
          <nav className="flex gap-0 min-w-max">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-1.5 px-4 py-4 text-[13px] font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  active === item.id
                    ? 'border-[#18b5d8] text-[#18b5d8]'
                    : 'border-transparent text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {item.label}
                {item.id === 'suite' && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#18b5d8] text-white uppercase tracking-wide">Pricing</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── GEMMA — CHAT RECEPTIONIST ─────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="gemma" className="py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-wide mb-4">Chat Receptionist</span>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Gemma</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Gemma sits on your website 24/7, greets every visitor, qualifies them, and books appointments — before they can bounce to a competitor.
            </p>
          </FadeUp>

          {/* Feature 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0}>
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card ai-float">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-bold">G</div>
                  <p className="text-[12px] font-semibold text-[#1d1d1f]">Gemma · Online</p>
                  <span className="ml-auto w-2 h-2 rounded-full bg-green-400 ai-pulse-dot" />
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-start">
                    <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                      Hey! I'm Gemma. Are you looking for a quote, or do you have a question I can help with?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">
                      I need a quote for a bathroom remodel
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                      Great — what zip code is the project in? And is this a full gut or cosmetic update?
                    </div>
                  </div>
                  <div className="flex justify-start items-end gap-1.5 pt-1">
                    <div className="w-7 h-7 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-bold shrink-0">G</div>
                    <div className="bg-white border border-[#e5e5ea] px-3.5 py-2.5 rounded-[14px] rounded-tl-[4px] flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] ai-typing-dot" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] ai-typing-dot" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] ai-typing-dot" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 bg-white rounded-full border border-[#e5e5ea] px-4 py-2">
                  <span className="text-[12px] text-[#86868b] flex-1">Type a message…</span>
                  <div className="w-6 h-6 rounded-full bg-[#18b5d8] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Respond to every visitor the moment they land.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Most leads decide in seconds whether to reach out. Gemma greets every visitor instantly, asks qualifying questions, and captures contact info before they bounce.
              </p>
              <ul className="space-y-2">
                {['Instant greeting — no wait time', 'Customizable qualifying questions', 'Lead info captured automatically', 'Hands off to your team when ready'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0} className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Book appointments without back-and-forth.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Gemma connects to your calendar and lets qualified leads pick a time. No phone tag. No scheduling delay. No dropped balls.
              </p>
              <ul className="space-y-2">
                {['Real-time calendar integration', 'Confirms via SMS and email', 'Sends reminders automatically', 'Reschedule and cancel support'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
            <FadeUp delay={120} className="order-1 lg:order-2">
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-4">Choose a time that works for you</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {['Mon 6/9', 'Tue 6/10', 'Wed 6/11'].map((d, i) => (
                    <div key={d} className={`rounded-[10px] border p-2 text-center cursor-pointer transition-colors ${i === 1 ? 'border-[#18b5d8] bg-[#18b5d8]/5' : 'border-[#e5e5ea] bg-white'}`}>
                      <p className={`text-[11px] font-semibold ${i === 1 ? 'text-[#18b5d8]' : 'text-[#1d1d1f]'}`}>{d}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map((t, i) => (
                    <div key={t} className={`rounded-[10px] border px-4 py-2.5 text-[12px] font-medium cursor-pointer transition-colors ${i === 1 ? 'border-[#18b5d8] bg-[#18b5d8] text-white' : 'border-[#e5e5ea] bg-white text-[#1d1d1f]'}`}>
                      {t}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-[#18b5d8] text-white text-[13px] font-semibold rounded-full py-2.5">Confirm Appointment</button>
              </div>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp delay={0}>
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Overnight Lead Capture</p>
                {[
                  { time: '11:42 PM', name: 'Sarah K.', msg: 'Needs kitchen quote — Tampa', status: 'Booked' },
                  { time: '1:17 AM',  name: 'Mike R.',  msg: 'Roofing inspection — Clearwater', status: 'Qualified' },
                  { time: '6:03 AM',  name: 'Denise P.',msg: 'Bathroom remodel inquiry', status: 'Booked' },
                ].map(lead => (
                  <div key={lead.name} className="flex items-center gap-3 py-3 border-b border-[#e5e5ea] last:border-0">
                    <div className="w-8 h-8 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[12px] font-bold shrink-0">{lead.name[0]}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#1d1d1f] font-semibold text-[12px]">{lead.name} <span className="text-[#86868b] font-normal">· {lead.time}</span></p>
                      <p className="text-[#86868b] text-[11px] truncate">{lead.msg}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${lead.status === 'Booked' ? 'bg-green-100 text-green-700' : 'bg-[#18b5d8]/10 text-[#18b5d8]'}`}>{lead.status}</span>
                  </div>
                ))}
                <p className="text-[11px] text-[#86868b] text-center mt-4 font-medium">3 new leads captured while you slept</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Never miss a lead — not even at 2 AM.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Most leads contact you outside business hours. Gemma never clocks out. She captures, qualifies, and books overnight — so your morning starts with a full calendar.
              </p>
              <ul className="space-y-2">
                {['24/7 availability — no exceptions', 'Full conversation transcript saved', 'Instant notification to your team', 'Overnight leads in your CRM by 8 AM'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── VOICE RECEPTIONIST ────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="voice" className="bg-[#f5f5f7] py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold uppercase tracking-wide mb-4">Call Handler</span>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Voice Receptionist</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Every inbound call gets answered in your voice — instantly. No hold music. No missed calls. No voicemail purgatory. Callers get answers, get qualified, and get booked without a human on the line.
            </p>
          </FadeUp>

          {/* Feature 01 — Answers every call */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0}>
              <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm demo-card ai-float">
                {/* Incoming call UI */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#f0f0f0]">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[18px]">📞</div>
                  <div className="flex-1">
                    <p className="text-[#1d1d1f] font-bold text-[14px]">Inbound Call</p>
                    <p className="text-[#86868b] text-[12px]">(813) 555-0142 · Tampa, FL</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-green-600">
                    <span className="w-2 h-2 rounded-full bg-green-500 ai-pulse-dot" />
                    Live
                  </span>
                </div>
                {/* Transcript */}
                <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Live Transcript</p>
                <div className="space-y-2.5">
                  {[
                    { speaker: 'AI', text: 'Thanks for calling Clearwater Plumbing. This is Aria — how can I help you today?' },
                    { speaker: 'Caller', text: 'Hi, my water heater stopped working this morning.' },
                    { speaker: 'AI', text: 'I can get someone out to you. Is it a gas or electric unit, and what city are you in?' },
                    { speaker: 'Caller', text: 'Electric. I\'m in St. Pete, zip 33701.' },
                  ].map((line, i) => (
                    <div key={i} className={`flex gap-2 ${line.speaker === 'AI' ? 'justify-start' : 'justify-end'}`}>
                      <div className={`text-[11px] leading-relaxed px-3 py-2 rounded-[10px] max-w-[85%] ${
                        line.speaker === 'AI'
                          ? 'bg-[#f5f5f7] text-[#1d1d1f]'
                          : 'bg-[#18b5d8]/10 text-[#1d1d1f]'
                      }`}>
                        <span className={`text-[9px] font-bold uppercase tracking-wide block mb-0.5 ${line.speaker === 'AI' ? 'text-purple-500' : 'text-[#18b5d8]'}`}>{line.speaker}</span>
                        {line.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 bg-[#f5f5f7] rounded-[10px] px-3 py-2.5">
                  <span className="text-[11px] text-[#86868b]">Call duration: 1:23</span>
                  <span className="ml-auto text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Qualifying</span>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Every call answered. Every time.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your Voice Receptionist answers in your business name, in your tone, the moment the phone rings. No hold music. No "press 1 for service." A real conversation from the first second.
              </p>
              <ul className="space-y-2">
                {['Answers in your brand voice', 'Zero hold time — immediate response', 'Handles multiple simultaneous calls', 'Full transcript saved after every call'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 02 — FAQ handling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0} className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Handles your most common calls without you.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Hours, pricing, service area, availability — your Voice Receptionist knows the answers. It handles the calls your team answers 10 times a day so they can focus on the work that actually moves revenue.
              </p>
              <ul className="space-y-2">
                {['Custom FAQ knowledge base', 'Service area and hours verification', 'Price range and estimate questions', 'Routes to a human when needed'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
            <FadeUp delay={120} className="order-1 lg:order-2">
              <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm demo-card">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Call Routing Logic</p>
                <div className="space-y-3">
                  {[
                    { q: 'What are your hours?', action: 'Auto-answered', color: 'bg-green-100 text-green-700' },
                    { q: 'Do you service Bradenton?', action: 'Auto-answered', color: 'bg-green-100 text-green-700' },
                    { q: 'How much does an inspection cost?', action: 'Auto-answered', color: 'bg-green-100 text-green-700' },
                    { q: 'I need to speak to the owner', action: 'Transferred', color: 'bg-orange-100 text-orange-700' },
                    { q: 'Emergency — water is flooding', action: 'Priority route', color: 'bg-red-100 text-red-700' },
                  ].map(row => (
                    <div key={row.q} className="flex items-center gap-3 py-2.5 border-b border-[#f5f5f7] last:border-0">
                      <p className="text-[12px] text-[#1d1d1f] flex-1">{row.q}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${row.color}`}>{row.action}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] text-[#86868b] text-center">94% of calls resolved without human intervention</p>
              </div>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 03 — Books without a human */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp delay={0}>
              <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm demo-card">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[20px]">✅</div>
                  <div>
                    <p className="text-[#1d1d1f] font-bold text-[14px]">Appointment Confirmed</p>
                    <p className="text-[#86868b] text-[12px]">Booked via Voice — no human needed</p>
                  </div>
                </div>
                <div className="bg-[#f5f5f7] rounded-[14px] p-4 space-y-2.5">
                  {[
                    { label: 'Customer', val: 'Rachel T. · (727) 555-0198' },
                    { label: 'Service', val: 'Water heater replacement' },
                    { label: 'Address', val: '4421 Central Ave, St. Pete 33701' },
                    { label: 'Date', val: 'Thursday, June 12 · 9:00 AM' },
                    { label: 'Assigned to', val: 'Tech Team A' },
                  ].map(row => (
                    <div key={row.label} className="flex gap-3">
                      <p className="text-[#86868b] text-[12px] w-20 shrink-0">{row.label}</p>
                      <p className="text-[#1d1d1f] font-semibold text-[12px]">{row.val}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-green-50 rounded-[10px] px-3 py-2 text-center">
                    <p className="text-[10px] text-[#86868b]">SMS sent</p>
                    <p className="text-[12px] font-bold text-green-700">Confirmed</p>
                  </div>
                  <div className="bg-[#18b5d8]/5 rounded-[10px] px-3 py-2 text-center">
                    <p className="text-[10px] text-[#86868b]">CRM updated</p>
                    <p className="text-[12px] font-bold text-[#18b5d8]">Logged</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Callers hang up with a confirmed appointment.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                After qualifying a caller, your Voice Receptionist pulls up your calendar, offers available slots, confirms the booking, and texts a confirmation — end to end, no human involved.
              </p>
              <ul className="space-y-2">
                {['Live calendar booking during the call', 'SMS and email confirmation sent instantly', 'Job details logged in your CRM', 'Sends reminder 24 hours before'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── REPUTATION SPECIALIST ─────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="reputation" className="py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[11px] font-bold uppercase tracking-wide mb-4">Review Manager</span>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Reputation Specialist</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Your Reputation Specialist monitors, responds to, and analyzes every Google and Facebook review — automatically — so your brand always looks its best without touching your team's workload.
            </p>
          </FadeUp>

          <FadeUp className="flex justify-center mb-20">
            <img
              src="/Reputation-Management-specialist-hero-img.webp"
              alt="AI Reputation Specialist — automated review response and sentiment analysis"
              className="w-full max-w-2xl rounded-[20px] shadow-md"
            />
          </FadeUp>

          {/* Feature 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0}>
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
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
                <p className="text-[#1d1d1f] text-[13px] mb-5 leading-relaxed">"Amazing experience start to finish. Professional, responsive, and went above and beyond. Highly recommend!"</p>
                <div className="bg-white rounded-[12px] border border-[#e5e5ea] p-4">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] uppercase tracking-wide">AI Response — Draft Ready</span>
                  <p className="text-[#1d1d1f] text-[12px] leading-relaxed mt-2">"Thank you so much for the kind words! We love hearing when clients feel taken care of — we'll pass this along to the whole team!"</p>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-[#18b5d8] text-white text-[11px] font-semibold rounded-full py-1.5 text-center">Post Reply</button>
                    <button className="flex-1 border border-[#e5e5ea] text-[#1d1d1f] text-[11px] font-semibold rounded-full py-1.5 text-center">Edit</button>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Reputation-safe responses, on autopilot.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI crafts personalized replies for every review — matching your voice for 5-star praise and handling negative feedback with care and professionalism.
              </p>
              <ul className="space-y-2">
                {['Responds to positive and negative reviews', 'Brand-safe tone on every reply', 'Multi-platform: Google and Facebook', 'Multilingual response support'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0} className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Your rules. Your standards.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Configure star-rating thresholds, response timing, platform preferences, and tone guidelines — so every reply reflects exactly how you want to show up.
              </p>
              <ul className="space-y-2">
                {['Star-rating response thresholds', 'Auto-post or draft-for-review mode', 'Response timing controls', 'Per-platform tone settings'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
            <FadeUp delay={120} className="order-1 lg:order-2">
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Response Rules</p>
                {[
                  { label: 'Auto-respond to 4–5 star reviews', active: true },
                  { label: 'Draft responses for 1–3 star reviews', active: true },
                  { label: 'Respond within 2 hours of posting', active: true },
                  { label: 'Use formal tone on all platforms', active: false },
                ].map(rule => (
                  <div key={rule.label} className="flex items-center justify-between py-3 border-b border-[#e5e5ea] last:border-0">
                    <span className="text-[13px] text-[#1d1d1f]">{rule.label}</span>
                    <div className={`w-9 h-5 rounded-full ${rule.active ? 'bg-[#18b5d8]' : 'bg-[#d1d1d6]'} relative shrink-0`}>
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
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp delay={0}>
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Review Insights Chat</p>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">What are customers saying most this month?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                      Top themes: <span className="font-semibold text-[#18b5d8]">response time</span> (18×), <span className="font-semibold text-[#18b5d8]">professionalism</span> (14×). Sentiment up 12% vs last month.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">Any recurring complaints I should act on?</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                      3 reviews mention <span className="font-semibold">wait times on Fridays</span>. Consider proactive messaging for Friday bookings.
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Ask your reviews anything.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Chat directly with your review data to surface sentiment shifts, keyword trends, and actionable recommendations — in plain English, in seconds.
              </p>
              <ul className="space-y-2">
                {['Sentiment trend analysis', 'Top keyword and topic patterns', 'NPS and rating breakdowns', 'Actionable improvement suggestions'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── AI CRM ────────────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="aicrm" className="bg-[#f5f5f7] py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-wide mb-4">Lead Qualifier</span>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">AI CRM</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Your AI CRM logs every interaction, runs automated multi-touch follow-up across email, SMS, and phone, and enriches your pipeline — without anyone on your team lifting a finger.
            </p>
          </FadeUp>

          <FadeUp className="flex justify-center mb-20">
            <img
              src="/AI-Sales-Assistant-hero-img.webp"
              alt="AI CRM — automated lead follow-up and pipeline management"
              className="w-full max-w-2xl rounded-[20px] shadow-md"
            />
          </FadeUp>

          {/* Feature 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0}>
              <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm demo-card ai-float">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Follow-Up Sequence — Lead: Dave M.</p>
                {[
                  { day: 'Day 1',  channel: 'Email', msg: "Thanks for reaching out — here's your quote", sent: true },
                  { day: 'Day 2',  channel: 'SMS',   msg: 'Hey Dave, just checking in on that quote…', sent: true },
                  { day: 'Day 5',  channel: 'Phone', msg: 'Outbound call attempt', sent: true },
                  { day: 'Day 10', channel: 'Email', msg: 'Still interested? We have an opening this week', sent: false },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-[#f0f0f0] last:border-0">
                    <div className="w-12 text-[11px] text-[#86868b] shrink-0">{step.day}</div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      step.channel === 'Email' ? 'bg-blue-100 text-blue-700' :
                      step.channel === 'SMS'   ? 'bg-green-100 text-green-700' :
                                                  'bg-orange-100 text-orange-700'
                    }`}>{step.channel}</span>
                    <p className="text-[#1d1d1f] text-[12px] flex-1 truncate">{step.msg}</p>
                    <span className={`w-2 h-2 rounded-full shrink-0 ${step.sent ? 'bg-green-400' : 'bg-[#d1d1d6]'}`} />
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Multi-touch follow-up that actually converts.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Most leads need 5 to 8 touchpoints before they buy. Your AI runs the full sequence — email, SMS, and outbound calls — so your team only talks to people who are ready.
              </p>
              <ul className="space-y-2">
                {['Email, SMS, and phone in one sequence', 'Customizable timing and messaging', 'Stops automatically on reply or booking', 'Cold lead re-engagement campaigns'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0} className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Automate CRM updates so you focus on selling.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Every call, email, and meeting gets logged automatically. No more manual data entry — your pipeline stays accurate without your team touching it.
              </p>
              <ul className="space-y-2">
                {['Auto-logs every call and email', 'Meeting notes captured instantly', 'Pipeline stages updated in real time', 'Zero manual CRM work'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
            <FadeUp delay={120} className="order-1 lg:order-2">
              <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm demo-card">
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
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] uppercase">Auto</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp delay={0}>
              <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm demo-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] font-bold text-[14px]">AC</div>
                  <div>
                    <p className="text-[#1d1d1f] font-bold text-[14px]">Acme Plumbing Co.</p>
                    <p className="text-[#86868b] text-[12px]">Tampa, FL · Enriched just now</p>
                  </div>
                  <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">Enriched</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Employees', val: '12–20' },
                    { label: 'Est. Revenue', val: '$2M–$5M' },
                    { label: 'Google Rating', val: '4.6 ★' },
                    { label: 'Owner', val: 'Jim Acosta' },
                  ].map(d => (
                    <div key={d.label} className="bg-[#f5f5f7] rounded-[10px] p-3">
                      <p className="text-[#86868b] text-[10px] mb-0.5">{d.label}</p>
                      <p className="text-[#1d1d1f] font-bold text-[13px]">{d.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Walk into every call fully prepared.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI automatically finds company size, revenue, ownership, and review data before your first call. No research, no manual lookup, no surprises.
              </p>
              <ul className="space-y-2">
                {['Company size and revenue data', 'Owner and direct contact info', 'Online reputation snapshot', 'Enrichment runs automatically on new leads'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── AI SALES ASSISTANT ────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="sales-assistant" className="py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold uppercase tracking-wide mb-4">Revenue AI</span>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">AI Sales Coach</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              After every sales call, your AI scores the lead, fills the CRM, and delivers coaching notes to your rep — so every conversation gets better than the last one.
            </p>
          </FadeUp>

          {/* Feature 01 — BANT scorecard */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0}>
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card ai-float">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b]">BANT Scorecard</p>
                  <span className="text-[12px] font-extrabold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">87 / 100</span>
                </div>
                {[
                  { label: 'Budget', detail: 'Confirmed $8–12k range', score: 90, color: 'bg-emerald-500' },
                  { label: 'Authority', detail: 'Owner on the call', score: 100, color: 'bg-emerald-500' },
                  { label: 'Need', detail: 'Replacing system by Q3', score: 85, color: 'bg-[#18b5d8]' },
                  { label: 'Timeline', detail: 'Decision within 2 weeks', score: 75, color: 'bg-[#18b5d8]' },
                ].map(item => (
                  <div key={item.label} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[12px] font-semibold text-[#1d1d1f]">{item.label}</p>
                      <p className="text-[11px] text-[#86868b]">{item.detail}</p>
                    </div>
                    <div className="h-2 bg-[#e5e5ea] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.score}%`, transition: 'width 1.2s ease' }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-5 bg-white rounded-[12px] border border-[#e5e5ea] px-4 py-3 flex items-center gap-3">
                  <span className="text-[20px]">🎯</span>
                  <div>
                    <p className="text-[12px] font-bold text-[#1d1d1f]">High-priority lead</p>
                    <p className="text-[11px] text-[#86868b]">Follow up within 24 hours</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Every call scored the moment it ends.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI listens to the call, scores every BANT factor, and flags your hottest leads before your rep has finished hanging up. No gut instinct required.
              </p>
              <ul className="space-y-2">
                {['BANT scoring on every call', 'Sandler methodology compliance check', 'Lead priority ranking after every call', 'Flags weak spots before next conversation'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 02 — Transcript + CRM auto-fill */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <FadeUp delay={0} className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Full transcript. CRM filled. Zero admin.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Every word of every call is transcribed, tagged, and pushed into your CRM fields. Your reps spend zero time writing notes after calls — that time goes back into selling.
              </p>
              <ul className="space-y-2">
                {['Word-for-word transcript saved', 'Key moments tagged automatically', 'CRM fields auto-populated', 'Objections and commitments extracted'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
            <FadeUp delay={120} className="order-1 lg:order-2">
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
                <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Post-Call Summary — Marcus T.</p>
                <div className="space-y-2 mb-5">
                  {[
                    { tag: 'Budget mentioned', quote: '"We have about $10k set aside for this"', color: 'bg-emerald-100 text-emerald-700' },
                    { tag: 'Objection', quote: '"Still comparing a couple options"', color: 'bg-orange-100 text-orange-700' },
                    { tag: 'Commitment', quote: '"Send me a proposal by Friday"', color: 'bg-[#18b5d8]/10 text-[#18b5d8]' },
                  ].map(item => (
                    <div key={item.tag} className="bg-white rounded-[10px] border border-[#e5e5ea] p-3">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${item.color}`}>{item.tag}</span>
                      <p className="text-[#1d1d1f] text-[12px] mt-1.5 italic">{item.quote}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-[12px] border border-[#e5e5ea] p-4">
                  <p className="text-[11px] font-bold text-[#1d1d1f] mb-2">CRM — Auto-filled fields</p>
                  <div className="space-y-2">
                    {[
                      { field: 'Budget', val: '$10,000' },
                      { field: 'Stage', val: 'Proposal Sent' },
                      { field: 'Next step', val: 'Follow up Monday' },
                    ].map(f => (
                      <div key={f.field} className="flex gap-3">
                        <p className="text-[#86868b] text-[11px] w-16 shrink-0">{f.field}</p>
                        <p className="text-[#1d1d1f] font-semibold text-[11px]">{f.val}</p>
                        <span className="ml-auto text-[9px] text-[#18b5d8] font-bold">Auto</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <Connector />

          {/* Feature 03 — Coaching notes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp delay={0}>
              <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea] demo-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-[18px]">🏋️</div>
                  <div>
                    <p className="text-[#1d1d1f] font-bold text-[13px]">Coaching Notes — Tyler R.</p>
                    <p className="text-[#86868b] text-[11px]">3 insights from today's call</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      type: 'Missed opportunity',
                      note: 'Marcus said "still comparing" — next time, ask who he\'s comparing and address it directly before sending a proposal.',
                      icon: '⚠️',
                      color: 'border-orange-200 bg-orange-50',
                    },
                    {
                      type: 'Strong move',
                      note: 'You confirmed the decision-maker early. That saved 20 minutes of back-and-forth. Keep doing this.',
                      icon: '✅',
                      color: 'border-emerald-200 bg-emerald-50',
                    },
                    {
                      type: 'Prep for next call',
                      note: 'He mentioned the Q3 deadline twice. Lead with urgency — his install window closes in 6 weeks.',
                      icon: '🎯',
                      color: 'border-[#18b5d8]/30 bg-[#18b5d8]/5',
                    },
                  ].map(c => (
                    <div key={c.type} className={`rounded-[12px] border p-3.5 ${c.color}`}>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#86868b] mb-1">{c.icon} {c.type}</p>
                      <p className="text-[12px] text-[#1d1d1f] leading-relaxed">{c.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Reps get better without a manager listening to every call.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                After every call, your AI delivers specific, actionable coaching notes — what went well, what to fix, and exactly how to approach the next conversation. Your team gets better by default.
              </p>
              <ul className="space-y-2">
                {['Specific coaching per call — not generic tips', 'Sandler methodology compliance scoring', 'Objection handling recommendations', 'Prep notes delivered before the next call'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── FULL SUITE PRICING ────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="suite" className="bg-[#07141a] py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/20 text-[#18b5d8] text-[11px] font-bold uppercase tracking-widest mb-5">Pricing</span>
            <h2 className="text-[40px] sm:text-[52px] font-extrabold text-white leading-tight tracking-tight mb-5">
              Your whole AI team.<br className="hidden sm:block" /> One monthly investment.
            </h2>
            <p className="text-[#8a9ba8] text-[18px] leading-relaxed max-w-2xl mx-auto">
              Five AI employees working around the clock. Most clients see the full investment covered within the first two closed jobs.
            </p>
          </FadeUp>

          {/* Value stack */}
          <FadeUp className="mb-12">
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-6 sm:p-8 mb-6">
              <p className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-6">What's included in the Full Suite</p>
              <div className="space-y-3">
                {[
                  { name: 'Gemma',               role: 'Chat Receptionist', desc: 'Captures and books every website visitor 24/7' },
                  { name: 'Voice Receptionist',  role: 'Call Handler',      desc: 'Answers every call, qualifies leads, books appointments' },
                  { name: 'Reputation Specialist', role: 'Review Manager',  desc: 'Auto-responds to every review, analyzes sentiment' },
                  { name: 'AI CRM',              role: 'Lead Qualifier',    desc: 'Multi-touch follow-up and full CRM automation' },
                  { name: 'AI Sales Coach',      role: 'Revenue AI',        desc: 'BANT scoring, transcripts, and coaching on every call' },
                ].map((emp, i) => (
                  <div key={emp.name} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-[#18b5d8]/20 flex items-center justify-center text-[#18b5d8] font-extrabold text-[13px] shrink-0">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-[14px]">{emp.name} <span className="text-[#8a9ba8] font-normal text-[13px]">· {emp.role}</span></p>
                      <p className="text-[#8a9ba8] text-[12px]">{emp.desc}</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#18b5d8] bg-[#18b5d8]/10 px-2.5 py-1 rounded-full shrink-0">Included</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price card */}
            <div className="bg-[#18b5d8] rounded-[20px] p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
              <p className="text-white/80 text-[13px] font-semibold uppercase tracking-widest mb-2 relative">Full AI Suite</p>
              <p className="text-white text-[58px] font-extrabold leading-none mb-1 relative">$5,000</p>
              <p className="text-white/80 text-[15px] mb-6 relative">per month · starting price</p>
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-8 relative">
                {[
                  { label: 'Setup time', val: '< 1 week' },
                  { label: 'Contracts', val: 'None' },
                  { label: 'Team needed', val: '0 hires' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/15 rounded-[12px] py-3">
                    <p className="text-white font-extrabold text-[16px]">{stat.val}</p>
                    <p className="text-white/70 text-[10px] mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="inline-block bg-white text-[#18b5d8] font-extrabold text-[15px] px-10 py-4 rounded-full hover:bg-[#f0fbfd] transition-colors relative"
              >
                Book a strategy call
              </a>
            </div>
          </FadeUp>

          {/* ROI framing */}
          <FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { stat: '94%', label: 'of calls resolved without a human', sub: 'Voice Receptionist avg' },
                { stat: '3×', label: 'more follow-up touchpoints vs manual', sub: 'AI CRM sequences' },
                { stat: '< 7 days', label: 'to go live', sub: 'Full suite deployment' },
              ].map(item => (
                <div key={item.stat} className="bg-white/5 border border-white/10 rounded-[16px] p-6 text-center">
                  <p className="text-[#18b5d8] text-[36px] font-extrabold leading-none mb-2">{item.stat}</p>
                  <p className="text-white text-[13px] font-semibold mb-1">{item.label}</p>
                  <p className="text-[#8a9ba8] text-[11px]">{item.sub}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Objection FAQ */}
          <FadeUp>
            <div className="space-y-3">
              {[
                {
                  q: 'Is $5,000/mo the right investment for a small business?',
                  a: 'If your average job or contract is worth $2,000 or more, you need to close three additional jobs per month to cover this entirely. Most clients close that in week two. The real question is what it costs to keep missing leads, losing reviews, and working with uncoached reps.',
                },
                {
                  q: 'How long does setup take?',
                  a: 'Most clients are fully live within 5 to 7 business days. We handle all the setup, training, and integration. You review and approve, we launch.',
                },
                {
                  q: 'What if I only want one or two AI employees?',
                  a: 'Individual AI employees are available. Reach out and we\'ll build a custom package based on where you have the biggest gap. Most clients start with Gemma or the Voice Receptionist and expand from there.',
                },
              ].map((item, i) => (
                <details key={i} className="group bg-white/5 border border-white/10 rounded-[16px] px-6 py-5 cursor-pointer">
                  <summary className="text-white font-semibold text-[15px] list-none flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-[#18b5d8] text-[20px] font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[#8a9ba8] text-[14px] leading-relaxed mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── CUSTOM EMPLOYEE ───────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section id="custom" className="bg-[#f5f5f7] py-16 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <FadeUp className="mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-wide mb-4">Built for You</span>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">
              Don't see what you need? We'll build it.
            </h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Every business is different. If none of our standard AI employees fits your exact workflow, we design and build a custom one from scratch — trained on your process, your voice, and your goals.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeUp delay={0}>
              <p className="text-[13px] font-bold text-[#1d1d1f] mb-5">What we've built for clients:</p>
              <div className="space-y-3">
                {[
                  { title: 'Estimate Follow-Up Bot', desc: 'Follows up on every unsold estimate with personalized timing until it gets a response.' },
                  { title: 'New Client Onboarding AI', desc: 'Sends welcome sequences, collects intake info, and schedules kickoff calls automatically.' },
                  { title: 'Referral Outreach Agent', desc: 'Identifies your happiest customers and sends personalized referral requests at the right moment.' },
                  { title: 'Job Completion Surveyor', desc: 'Reaches out after every completed job to collect feedback, trigger review requests, and flag issues.' },
                ].map(item => (
                  <div key={item.title} className="bg-white rounded-[16px] border border-[#e5e5ea] p-5">
                    <p className="text-[#1d1d1f] font-bold text-[14px] mb-1">{item.title}</p>
                    <p className="text-[#6e6e73] text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <p className="text-[13px] font-bold text-[#1d1d1f] mb-5">How the custom build works:</p>
              <div className="space-y-4">
                {[
                  { n: '01', title: 'Discovery call', desc: 'We map your workflow — where leads fall through, what your team does manually, and what the ideal AI outcome looks like.' },
                  { n: '02', title: 'AI design and spec', desc: 'We design the AI employee: what it does, what tools it uses, what it says, and how it integrates with your existing systems.' },
                  { n: '03', title: 'Build and train', desc: 'We build it on your stack, train it on your voice and offer, and test every scenario before anything goes live.' },
                  { n: '04', title: 'Live and optimize', desc: 'We launch, monitor the first 30 days, and tune based on real performance data.' },
                ].map(step => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#18b5d8]/10 border border-[#18b5d8]/20 flex items-center justify-center text-[#18b5d8] font-extrabold text-[13px] shrink-0">{step.n}</div>
                    <div className="pt-1">
                      <p className="text-[#1d1d1f] font-bold text-[14px] mb-1">{step.title}</p>
                      <p className="text-[#6e6e73] text-[13px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-[16px] border border-[#e5e5ea] p-5">
                <p className="text-[#1d1d1f] font-bold text-[14px] mb-2">Interested in a custom AI employee?</p>
                <p className="text-[#6e6e73] text-[13px] leading-relaxed mb-4">Tell us what you're trying to automate. No commitment required.</p>
                <a href="/contact" className="inline-block bg-[#18b5d8] text-white font-bold text-[13px] px-6 py-3 rounded-full hover:bg-[#14a0c0] transition-colors">
                  Talk to us about a custom build
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── INDUSTRY PAGES ───────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-3">Built for Your Industry</p>
            <h2 className="text-[32px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">
              See how AI employees work in your field.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed max-w-xl mx-auto">
              Every deployment is configured for your industry's workflows, lead types, and customer expectations.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { href: '/aiemployees/hvac',          label: 'HVAC',          desc: '24/7 emergency lead capture' },
                { href: '/aiemployees/home-services',  label: 'Home Services', desc: 'After-hours booking + follow-up' },
                { href: '/aiemployees/real-estate',    label: 'Real Estate',   desc: 'Buyer & seller lead qualification' },
                { href: '/aiemployees/contractors',    label: 'Contractors',   desc: 'Estimate follow-up + reviews' },
                { href: '/aiemployees/healthcare',     label: 'Healthcare',    desc: 'Patient intake + appointment reminders' },
                { href: '/aiemployees/legal',          label: 'Legal',         desc: 'Lead intake + consultation booking' },
              ].map(ind => (
                <a
                  key={ind.href}
                  href={ind.href}
                  className="bg-[#f5f5f7] rounded-[16px] p-5 border border-[#e5e5ea] hover:border-[#18b5d8] hover:bg-white motion-safe:transition-colors duration-150 group"
                >
                  <p className="text-[#1d1d1f] font-bold text-[15px] mb-1 group-hover:text-[#18b5d8] motion-safe:transition-colors">{ind.label}</p>
                  <p className="text-[#86868b] text-[13px]">{ind.desc}</p>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider />

      {/* ── BOTTOM CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#07141a] py-14 sm:py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">Ready to hire your team?</p>
            <h2 className="text-[36px] sm:text-[44px] font-extrabold text-white leading-tight tracking-tight mb-5">
              Your first AI employee can be live within the week.
            </h2>
            <p className="text-[#8a9ba8] text-[17px] leading-relaxed mb-8">
              Book a free strategy call. We'll map out which AI employees will have the biggest impact on your business — and show you exactly what they'll do.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#18b5d8] text-white font-extrabold text-[16px] px-10 py-4 rounded-full hover:bg-[#14a0c0] transition-colors"
            >
              Book my free strategy call
            </a>
            <p className="text-[#8a9ba8] text-[13px] mt-4">No contracts. Live within 7 days.</p>
          </FadeUp>
        </div>
      </section>

    </div>
  )
}
