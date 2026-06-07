'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'gemma', label: 'Gemma', role: 'Chat Receptionist' },
  { id: 'blogger', label: 'Blogger', role: 'Content Writer', comingSoon: true },
  { id: 'reputation', label: 'Reputation Specialist', role: 'Review Manager' },
  { id: 'aicrm', label: 'AI CRM', role: 'Sales Assistant' },
  { id: 'social', label: 'Social Media Manager', role: 'Content Publisher', comingSoon: true },
  { id: 'custom', label: 'Custom Employee', role: 'Built for You' },
]

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2.5 text-[14px] text-[#6e6e73]">
      <span className="w-5 h-5 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[10px] font-bold shrink-0">&#10003;</span>
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

      {/* ── PAGE HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] pt-24 pb-16 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-[48px] sm:text-[56px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-3">
            Meet your AI Team.
          </h1>
          <p className="text-[#18b5d8] text-[20px] sm:text-[24px] font-bold mb-3">
            Five AI employees. One unstoppable team.
          </p>
          <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-xl mx-auto">
            Each one is built, trained, and live within a week — handling the work that's costing you leads, reviews, and revenue every single day.
          </p>
        </div>
      </section>

      {/* ── STICKY ANCHOR NAV ─────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[#e5e5ea]">
        <div className="max-w-5xl mx-auto px-6 overflow-x-auto">
          <nav className="flex gap-0 min-w-max">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-1.5 px-5 py-4 text-[13px] font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  active === item.id
                    ? 'border-[#18b5d8] text-[#18b5d8]'
                    : 'border-transparent text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {item.label}
                {item.comingSoon && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#f5f5f7] text-[#86868b] uppercase tracking-wide">Soon</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ── GEMMA — CHAT RECEPTIONIST ─────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="gemma" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Employee header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-wide">Chat Receptionist</span>
            </div>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Gemma</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Gemma sits on your website 24/7, greets every visitor, qualifies them as a lead, and books appointments directly into your calendar — without any effort from your team.
            </p>
          </div>

          {/* Feature 01 — Instant lead capture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            {/* Mock: Chat widget */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#18b5d8] flex items-center justify-center text-white text-[11px] font-bold">G</div>
                <p className="text-[12px] font-semibold text-[#1d1d1f]">Gemma · Online</p>
                <span className="ml-auto w-2 h-2 rounded-full bg-green-400" />
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
                    Great! What's the zip code for the project? And roughly what size is the bathroom?
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
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Respond to every visitor the moment they land.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Most leads decide in seconds whether to reach out. Gemma greets every visitor instantly, asks the right qualifying questions, and collects their contact info — before they bounce to a competitor.
              </p>
              <ul className="space-y-2">
                {['Instant greeting — no wait time', 'Customizable qualifying questions', 'Lead info captured automatically', 'Responds automatically in 40+ languages', 'Hands off to your team when ready'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>

          <Connector />

          {/* Feature 02 — Smart booking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Book appointments without back-and-forth.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Gemma connects directly to your calendar and lets qualified leads pick a time that works for them — no phone tag, no scheduling delays, no dropped balls.
              </p>
              <ul className="space-y-2">
                {['Real-time calendar integration', 'Confirms appointments via SMS/email', 'Sends reminders automatically', 'Reschedule and cancel support', 'Books multiple services in one session'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
            {/* Mock: Booking widget */}
            <div className="order-1 lg:order-2 bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[12px] font-semibold text-[#1d1d1f] mb-4">Choose a time that works for you</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['Mon 6/9', 'Tue 6/10', 'Wed 6/11'].map((d, i) => (
                  <div key={d} className={`rounded-[10px] border p-2 text-center cursor-pointer ${i === 1 ? 'border-[#18b5d8] bg-[#18b5d8]/5' : 'border-[#e5e5ea] bg-white'}`}>
                    <p className={`text-[11px] font-semibold ${i === 1 ? 'text-[#18b5d8]' : 'text-[#1d1d1f]'}`}>{d}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'].map((t, i) => (
                  <div key={t} className={`rounded-[10px] border px-4 py-2.5 text-[12px] font-medium cursor-pointer ${i === 1 ? 'border-[#18b5d8] bg-[#18b5d8] text-white' : 'border-[#e5e5ea] bg-white text-[#1d1d1f]'}`}>
                    {t}
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-[#18b5d8] text-white text-[13px] font-semibold rounded-full py-2.5">Confirm Appointment</button>
            </div>
          </div>

          <Connector />

          {/* Feature 03 — After-hours coverage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mock: After-hours lead log */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Overnight Lead Capture</p>
              {[
                { time: '11:42 PM', name: 'Sarah K.', msg: 'Needs kitchen quote — Tampa', status: 'Booked' },
                { time: '1:17 AM', name: 'Mike R.', msg: 'Roofing inspection — Clearwater', status: 'Qualified' },
                { time: '6:03 AM', name: 'Denise P.', msg: 'Bathroom remodel inquiry', status: 'Booked' },
              ].map(lead => (
                <div key={lead.name} className="flex items-center gap-3 py-3 border-b border-[#e5e5ea] last:border-0">
                  <div className="w-8 h-8 rounded-full bg-[#18b5d8]/10 flex items-center justify-center text-[#18b5d8] text-[12px] font-bold shrink-0">
                    {lead.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1d1d1f] font-semibold text-[12px]">{lead.name} <span className="text-[#86868b] font-normal">· {lead.time}</span></p>
                    <p className="text-[#86868b] text-[11px] truncate">{lead.msg}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${lead.status === 'Booked' ? 'bg-green-100 text-green-700' : 'bg-[#18b5d8]/10 text-[#18b5d8]'}`}>
                    {lead.status}
                  </span>
                </div>
              ))}
              <p className="text-[11px] text-[#86868b] text-center mt-4 font-medium">3 new leads captured while you slept</p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Never miss a lead — not even at 2 AM.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Most leads contact you outside business hours. Gemma never clocks out. She captures, qualifies, and books every visitor overnight and on weekends — so your morning starts with a full pipeline.
              </p>
              <ul className="space-y-2">
                {['24/7 availability — no exceptions', 'Full conversation transcript saved', 'Instant notification to your team', 'Overnight leads ready in your CRM by 8 AM'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>
          {/* Voice Receptionist callout */}
          <div className="mt-16 bg-[#07141a] rounded-[20px] p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-[#18b5d8]/20 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#18b5d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-[16px] mb-1">Gemma also answers your phones.</p>
              <p className="text-[#8a9ba8] text-[14px] leading-relaxed">The Voice Receptionist add-on handles inbound calls, takes messages, and transfers to your team — so no call goes unanswered even when you're on the job.</p>
            </div>
            <a href="/contact" className="shrink-0 bg-[#18b5d8] text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-[#14a0c0] transition-colors whitespace-nowrap">
              Ask about Voice
            </a>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ── BLOGGER — CONTENT WRITER ──────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="blogger" className="bg-[#f5f5f7] py-28 px-6 relative overflow-hidden">
        {/* Coming Soon overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-4">
          <span className="bg-[#1d1d1f] text-white text-[11px] font-bold uppercase tracking-[2px] px-4 py-2 rounded-full">Coming Soon</span>
          <p className="text-[#6e6e73] text-[15px] text-center max-w-xs">Blogger is in development and will be available soon.</p>
        </div>
        <div className="max-w-5xl mx-auto">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#4FD1A0]/15 text-[#1a7a56] text-[11px] font-bold uppercase tracking-wide">Content Writer</span>
            </div>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Blogger</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Blogger publishes SEO-optimized articles every week, builds your domain authority, and positions your business to get cited by Google AI, ChatGPT, and other AI search tools — completely hands-free.
            </p>
          </div>

          {/* Feature 01 — Keyword-targeted articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            {/* Mock: Article card */}
            <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <p className="text-[11px] font-semibold text-green-600 uppercase tracking-wide">Published · Mon 9:00 AM</p>
              </div>
              <p className="text-[#1d1d1f] font-bold text-[15px] mb-1 leading-snug">Best HVAC Companies in Tampa Bay: What to Look for in 2025</p>
              <p className="text-[#86868b] text-[12px] mb-4">1,240 words · Reading time: 5 min</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['hvac companies tampa', 'ac repair near me', 'best hvac tampa bay'].map(kw => (
                  <span key={kw} className="bg-[#18b5d8]/10 text-[#18b5d8] text-[10px] font-medium px-2.5 py-0.5 rounded-full">{kw}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[{ label: 'Target keywords', val: '3' }, { label: 'Internal links', val: '4' }, { label: 'Word count', val: '1,240' }].map(s => (
                  <div key={s.label} className="bg-[#f5f5f7] rounded-[10px] p-2.5">
                    <p className="text-[#1d1d1f] font-bold text-[14px]">{s.val}</p>
                    <p className="text-[#86868b] text-[10px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Weekly articles that rank — written for your market.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Blogger researches what your ideal customers are searching for, writes long-form articles targeting those exact keywords, and publishes them automatically to your website every week.
              </p>
              <ul className="space-y-2">
                {['Keyword research specific to your niche', 'Long-form articles (1,000–2,000+ words)', 'Internal linking to your service pages', 'Automatically published on your site'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>

          <Connector />

          {/* Feature 02 — AI citation optimization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Get cited by ChatGPT, Gemini, and Google AI.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                AI search tools pull answers from authoritative local content. Blogger formats every article to match the structured patterns these tools use — so when someone asks an AI "who's the best [service] in [city]," your business comes up.
              </p>
              <ul className="space-y-2">
                {['Structured for AI Overviews and SGE', 'Schema markup on every article', 'FAQ sections that AI tools cite directly', 'Entity-building for local authority'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
            {/* Mock: AI citation */}
            <div className="order-1 lg:order-2 bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">AI</div>
                <p className="text-[12px] font-semibold text-[#1d1d1f]">AI Overview</p>
              </div>
              <div className="bg-[#f5f5f7] rounded-[12px] p-4 mb-4">
                <p className="text-[12px] text-[#1d1d1f] leading-relaxed">
                  The top-rated HVAC companies in Tampa Bay include <span className="font-semibold text-[#18b5d8]">Shark HVAC Solutions</span>, known for same-day service and transparent pricing. According to their recent guide, the most important factors when choosing an AC repair company are…
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm bg-[#18b5d8]/20 flex items-center justify-center">
                  <span className="text-[8px] text-[#18b5d8] font-bold">S</span>
                </div>
                <p className="text-[11px] text-[#86868b]">sharkbrandingsolutions.com · <span className="text-[#18b5d8]">Source cited</span></p>
              </div>
            </div>
          </div>

          <Connector />

          {/* Feature 03 — Hands-free publishing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mock: Content calendar */}
            <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">June — Content Calendar</p>
              <div className="space-y-2.5">
                {[
                  { date: 'Jun 2', title: '5 Signs Your AC Needs Replacing', status: 'Published' },
                  { date: 'Jun 9', title: 'How to Choose a Tampa Contractor', status: 'Scheduled' },
                  { date: 'Jun 16', title: 'Best Neighborhoods for [Service] in Tampa', status: 'Drafting' },
                  { date: 'Jun 23', title: 'What Does [Service] Cost in 2025?', status: 'Planned' },
                ].map(article => (
                  <div key={article.date} className="flex items-center gap-3 py-2.5 border-b border-[#f0f0f0] last:border-0">
                    <div className="text-[11px] text-[#86868b] w-12 shrink-0">{article.date}</div>
                    <p className="text-[#1d1d1f] text-[12px] font-medium flex-1 truncate">{article.title}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      article.status === 'Published' ? 'bg-green-100 text-green-700' :
                      article.status === 'Scheduled' ? 'bg-[#18b5d8]/10 text-[#18b5d8]' :
                      article.status === 'Drafting' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-[#f5f5f7] text-[#86868b]'
                    }`}>{article.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">A full content calendar — zero effort required.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Blogger plans, writes, schedules, and publishes every article on autopilot. You approve a content plan once, and the pipeline runs itself — consistently, every week.
              </p>
              <ul className="space-y-2">
                {['Monthly content calendar built for you', 'Articles reviewed before publishing', 'CMS integration (WordPress, Webflow, custom)', 'Performance reports included'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ── REPUTATION SPECIALIST ─────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="reputation" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[11px] font-bold uppercase tracking-wide">Review Manager</span>
            </div>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Reputation Specialist</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Your Reputation Specialist monitors, responds to, and analyzes every Google and Facebook review — automatically — so your brand always looks its best without adding to your team's workload.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
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
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] uppercase tracking-wide">AI Response</span>
                </div>
                <p className="text-[#1d1d1f] text-[12px] leading-relaxed">"Thank you so much for the kind words! We love hearing when our clients feel taken care of — we'll pass this along to the whole team!"</p>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-[#18b5d8] text-white text-[11px] font-semibold rounded-full py-1.5 text-center">Post Reply</button>
                  <button className="flex-1 border border-[#e5e5ea] text-[#1d1d1f] text-[11px] font-semibold rounded-full py-1.5 text-center">Edit</button>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Reputation-safe responses, on autopilot.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI crafts personalized, context-aware replies for every review — matching your brand voice for 5-star praise and handling negative feedback with professionalism and care.
              </p>
              <ul className="space-y-2">
                {['Responds to positive and negative reviews', 'Brand-safe tone on every reply', 'Multi-platform: Google & Facebook', 'Multilingual response support'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>

          <Connector />

          {/* Feature 02 — Configurable rules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Your rules. Your standards.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Set exactly when and how your AI responds. Configure star-rating thresholds, response timing, platform preferences, and tone guidelines — so every reply reflects your brand the way you want it.
              </p>
              <ul className="space-y-2">
                {['Star-rating response thresholds', 'Auto-post or draft-for-review mode', 'Response timing controls', 'Per-platform tone settings'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
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

          <Connector />

          {/* Feature 03 — Insights chat */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Review Insights Chat</p>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">What are customers saying most this month?</div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                    Top themes: <span className="font-semibold text-[#18b5d8]">response time</span> (18×), <span className="font-semibold text-[#18b5d8]">professionalism</span> (14×). Sentiment is up 12% vs last month.
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
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Ask your reviews anything.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Chat directly with your review data to surface sentiment shifts, keyword trends, and actionable recommendations — in plain English, in seconds.
              </p>
              <ul className="space-y-2">
                {['Sentiment trend analysis', 'Top keyword and topic patterns', 'NPS and rating breakdowns', 'Actionable improvement suggestions'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ── AI CRM ────────────────────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="aicrm" className="bg-[#f5f5f7] py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-wide">Sales Assistant</span>
            </div>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">AI CRM</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Your AI CRM logs every interaction, runs automated multi-touch follow-up across email, SMS, and phone, and enriches your pipeline — all without anyone on your team lifting a finger.
            </p>
          </div>

          {/* Hero image */}
          <div className="flex justify-center mb-20">
            <img
              src="/AI-Sales-Assistant-hero-img.webp"
              alt="AI Sales Assistant — automate CRM updates and qualify leads automatically"
              className="w-full max-w-2xl rounded-[20px] shadow-md"
            />
          </div>

          {/* Feature 01 — Multi-touch follow-up */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            {/* Mock: Follow-up sequence */}
            <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Follow-Up Sequence — Lead: Dave M.</p>
              {[
                { day: 'Day 1', channel: 'Email', msg: 'Thanks for reaching out — here\'s your quote', sent: true },
                { day: 'Day 2', channel: 'SMS', msg: 'Hey Dave, just checking in on that quote…', sent: true },
                { day: 'Day 5', channel: 'Phone', msg: 'Outbound call attempt', sent: true },
                { day: 'Day 10', channel: 'Email', msg: 'Still interested? We have an opening this week', sent: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-[#f0f0f0] last:border-0">
                  <div className="w-12 text-[11px] text-[#86868b] shrink-0">{step.day}</div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    step.channel === 'Email' ? 'bg-blue-100 text-blue-700' :
                    step.channel === 'SMS' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>{step.channel}</span>
                  <p className="text-[#1d1d1f] text-[12px] flex-1 truncate">{step.msg}</p>
                  <span className={`w-2 h-2 rounded-full shrink-0 ${step.sent ? 'bg-green-400' : 'bg-[#d1d1d6]'}`} />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Multi-touch follow-up that actually converts.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Most leads need 5–8 touchpoints before they buy. Your Lead Qualifier runs the full sequence — email, SMS, and outbound calls — automatically, so your team only talks to people who are ready.
              </p>
              <ul className="space-y-2">
                {['Email, SMS, and phone in one sequence', 'Customizable timing and messaging', 'Stops automatically on reply or booking', 'Cold lead re-engagement campaigns'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>

          <Connector />

          {/* Feature 02 — CRM updates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Automate CRM updates so you focus on selling.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Every call, email, and meeting gets logged automatically. No more manual data entry at the end of the day — your pipeline stays accurate without your team lifting a finger.
              </p>
              <ul className="space-y-2">
                {['Auto-logs every call and email', 'Meeting notes captured instantly', 'Pipeline stages updated in real time', 'Zero manual CRM work'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
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
          </div>

          <Connector />

          {/* Feature 03 — Lead enrichment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mock: Enrichment card */}
            <div className="bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
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
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Walk into every call fully prepared.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your AI automatically finds company size, revenue, ownership, reviews, and contact details — before your first call. No research, no manual lookup, no surprises.
              </p>
              <ul className="space-y-2">
                {['Company size and revenue data', 'Owner and direct contact info', 'Online reputation snapshot', 'Enrichment runs automatically on new leads'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>

          <Connector />

          {/* Feature 04 — Conversational CRM insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 04</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Ask your pipeline anything — in plain English.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Instead of pulling reports or digging through records, just ask. Your AI Sales Assistant answers questions about your pipeline, contact history, and meeting outcomes in seconds.
              </p>
              <ul className="space-y-2">
                {['Natural-language pipeline queries', 'Company and deal history on demand', 'Meeting summaries and action items', 'No reports, no manual searching'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
            {/* Mock: CRM chat */}
            <div className="order-1 lg:order-2 bg-white rounded-[20px] p-6 border border-[#e5e5ea] shadow-sm">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Ask Your CRM</p>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">Which deals haven't moved in 2 weeks?</div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                    <span className="font-semibold text-[#18b5d8]">4 deals</span> stalled: Acme Plumbing ($8k), Rivera HVAC ($5.5k), Sunbelt Roofing ($12k), and TampaBay Electric ($3k). Last activity was 14–18 days ago.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#18b5d8] text-white text-[12px] rounded-[14px] rounded-tr-[4px] px-3.5 py-2.5 max-w-[80%]">What came out of my call with Rivera?</div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#f5f5f7] border border-[#e5e5ea] text-[#1d1d1f] text-[12px] rounded-[14px] rounded-tl-[4px] px-3.5 py-2.5 max-w-[85%] leading-relaxed">
                    Action items: send updated proposal by Friday, loop in their operations manager. They're ready to sign pending pricing review.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ── SOCIAL MEDIA MANAGER ──────────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="social" className="py-28 px-6 relative overflow-hidden">
        {/* Coming Soon overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-4">
          <span className="bg-[#1d1d1f] text-white text-[11px] font-bold uppercase tracking-[2px] px-4 py-2 rounded-full">Coming Soon</span>
          <p className="text-[#6e6e73] text-[15px] text-center max-w-xs">Social Media Manager is in development and will be available soon.</p>
        </div>
        <div className="max-w-5xl mx-auto">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-[11px] font-bold uppercase tracking-wide">Content Publisher</span>
            </div>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">Social Media Manager</h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Your Social Media Manager creates and schedules daily content across every platform — in your brand voice, every day — without any effort from you or your team.
            </p>
          </div>

          {/* Feature 01 — Brand-voice content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            {/* Mock: Social post preview */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#18b5d8] to-[#4FD1A0] shrink-0" />
                <div>
                  <p className="text-[#1d1d1f] font-bold text-[13px]">Shark Branding Solutions</p>
                  <p className="text-[#86868b] text-[11px]">Tampa, FL · Just now</p>
                </div>
              </div>
              <p className="text-[#1d1d1f] text-[13px] leading-relaxed mb-4">
                Most Tampa Bay homeowners don't realize their AC is working 30% harder than it needs to — and paying for it. Here's a quick checklist to see if yours is costing you money 👇
              </p>
              <div className="bg-white rounded-[12px] border border-[#e5e5ea] p-3 mb-4">
                <div className="h-24 bg-gradient-to-br from-[#f5f5f7] to-[#e5e5ea] rounded-[8px] flex items-center justify-center">
                  <p className="text-[#86868b] text-[11px]">AI-generated graphic</p>
                </div>
              </div>
              <div className="flex gap-4 text-[12px] text-[#86868b]">
                <span>❤️ 47</span><span>💬 12</span><span>↗ Share</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 01</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Content that sounds exactly like you.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Your Social Media Manager is trained on your brand voice, service area, and audience. Every post reads like it came from you — not a generic AI.
              </p>
              <ul className="space-y-2">
                {['Brand voice training on your content', 'Service-specific and seasonal topics', 'Local Tampa Bay references and context', 'Images and graphics included'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>

          <Connector />

          {/* Feature 02 — Multi-platform scheduling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-6">
            <div className="order-2 lg:order-1">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 02</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Post every day — on every platform.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Facebook, Instagram, Google Business, LinkedIn — your AI queues and publishes to all of them, optimized for the best times and formats on each platform.
              </p>
              <ul className="space-y-2">
                {['Facebook, Instagram, Google Business', 'LinkedIn and TikTok available', 'Platform-specific formatting', 'Optimal posting time scheduling'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
            {/* Mock: Platform schedule */}
            <div className="order-1 lg:order-2 bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">Today's Publishing Queue</p>
              {[
                { platform: 'Facebook', time: '8:00 AM', title: 'AC efficiency checklist', status: 'Posted' },
                { platform: 'Instagram', time: '11:30 AM', title: 'Before/after project photo', status: 'Posted' },
                { platform: 'Google', time: '2:00 PM', title: 'Summer special offer post', status: 'Scheduled' },
                { platform: 'LinkedIn', time: '5:00 PM', title: 'Industry tip for homeowners', status: 'Scheduled' },
              ].map(post => (
                <div key={post.platform} className="flex items-center gap-3 py-3 border-b border-[#e5e5ea] last:border-0">
                  <div className="w-16 text-[11px] text-[#86868b] shrink-0">{post.time}</div>
                  <div className="w-20 shrink-0">
                    <span className="text-[10px] font-bold text-[#1d1d1f]">{post.platform}</span>
                  </div>
                  <p className="text-[#6e6e73] text-[12px] flex-1 truncate">{post.title}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${post.status === 'Posted' ? 'bg-green-100 text-green-700' : 'bg-[#18b5d8]/10 text-[#18b5d8]'}`}>{post.status}</span>
                </div>
              ))}
            </div>
          </div>

          <Connector />

          {/* Feature 03 — Performance and reporting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Mock: Performance stats */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-6 border border-[#e5e5ea]">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-4">May Performance</p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Posts published', val: '31', delta: '+31' },
                  { label: 'Total reach', val: '4,820', delta: '+18%' },
                  { label: 'Engagements', val: '612', delta: '+24%' },
                  { label: 'Profile visits', val: '287', delta: '+11%' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-[12px] border border-[#e5e5ea] p-3">
                    <p className="text-[#1d1d1f] font-extrabold text-[18px]">{s.val}</p>
                    <p className="text-[#86868b] text-[10px]">{s.label}</p>
                    <p className="text-green-600 text-[10px] font-semibold mt-0.5">{s.delta}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#86868b] text-center font-medium">Monthly report delivered to your inbox</p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#86868b] mb-3">Feature 03</p>
              <h3 className="text-[26px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-4">Know what's working — without doing the analysis.</h3>
              <p className="text-[#6e6e73] text-[16px] leading-relaxed mb-5">
                Get a monthly performance report showing reach, engagement, and follower growth — so you always know your social presence is building, not stalling.
              </p>
              <ul className="space-y-2">
                {['Monthly performance report', 'Best-performing content insights', 'Audience growth tracking', 'Strategy adjustments included'].map(t => <CheckItem key={t} text={t} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CUSTOM EMPLOYEE ───────────────────────────────────────────── */}
      <section id="custom" className="bg-[#f5f5f7] py-28 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold uppercase tracking-wide">Built for You</span>
            </div>
            <h2 className="text-[40px] sm:text-[48px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">
              Don't see what you need?<br className="hidden sm:block" /> We'll build it.
            </h2>
            <p className="text-[#6e6e73] text-[18px] leading-relaxed max-w-2xl">
              Every business is different. If none of our standard AI employees fit your exact workflow, we design and build a custom one from scratch — trained on your process, your voice, and your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* What's possible */}
            <div>
              <p className="text-[13px] font-bold text-[#1d1d1f] mb-5">What we've built for clients:</p>
              <div className="space-y-3">
                {[
                  { title: 'Estimate Follow-Up Employee', desc: 'Follows up on every unsold estimate with personalized timing and messaging until it gets a response.' },
                  { title: 'New Client Onboarding AI', desc: 'Sends welcome sequences, collects intake info, and schedules kickoff calls automatically after a new sale.' },
                  { title: 'Referral Outreach Agent', desc: 'Identifies your happiest customers and sends personalized referral requests at the right moment.' },
                  { title: 'Job Completion Surveyor', desc: 'Reaches out after every completed job to collect feedback, trigger review requests, and flag issues.' },
                ].map(item => (
                  <div key={item.title} className="bg-white rounded-[16px] border border-[#e5e5ea] p-5">
                    <p className="text-[#1d1d1f] font-bold text-[14px] mb-1">{item.title}</p>
                    <p className="text-[#6e6e73] text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div>
              <p className="text-[13px] font-bold text-[#1d1d1f] mb-5">How the custom build works:</p>
              <div className="space-y-4">
                {[
                  { n: '01', title: 'Discovery call', desc: 'We map your workflow — where leads fall through, what your team does manually, and what the ideal AI outcome looks like.' },
                  { n: '02', title: 'AI design + spec', desc: 'We design the AI employee: what it does, what tools it uses, what it says, and how it integrates with your existing systems.' },
                  { n: '03', title: 'Build + train', desc: 'We build it on your stack, train it on your voice and offer, and test every scenario before anything goes live.' },
                  { n: '04', title: 'Live + optimize', desc: 'We launch, monitor the first 30 days, and tune based on real performance data.' },
                ].map(step => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#18b5d8]/10 border border-[#18b5d8]/20 flex items-center justify-center text-[#18b5d8] font-extrabold text-[13px] shrink-0">
                      {step.n}
                    </div>
                    <div className="pt-1">
                      <p className="text-[#1d1d1f] font-bold text-[14px] mb-1">{step.title}</p>
                      <p className="text-[#6e6e73] text-[13px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-[16px] border border-[#e5e5ea] p-5">
                <p className="text-[#1d1d1f] font-bold text-[14px] mb-2">Interested in a custom AI employee?</p>
                <p className="text-[#6e6e73] text-[13px] leading-relaxed mb-4">Tell us what you're trying to automate and we'll let you know what's possible. No commitment required.</p>
                <a
                  href="/contact"
                  className="inline-block bg-[#18b5d8] text-white font-bold text-[13px] px-6 py-3 rounded-full hover:bg-[#14a0c0] transition-colors"
                >
                  Talk to us about a custom build
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── HOW THEY THINK ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">Under the Hood</p>
            <h2 className="text-[36px] sm:text-[40px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4">
              They don't follow a script. They think.
            </h2>
            <p className="text-[#6e6e73] text-[17px] leading-relaxed max-w-xl mx-auto">
              Each AI Employee runs multiple capabilities at once and decides in real time which one to activate based on what the customer actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: 'Contextual activation',
                body: 'A question about hours triggers knowledge base access. A pricing question activates product lookup. An interest in services kicks off lead capture and booking — automatically.',
              },
              {
                label: 'Adaptive behavior',
                body: 'Each capability is configured with specific prompts and parameters. The same capability works differently depending on the employee, the business, and the conversation context.',
              },
              {
                label: 'Multi-capability at once',
                body: 'Each AI Employee can run multiple capabilities simultaneously. They evaluate every message and activate whatever combination serves the customer best.',
              },
            ].map(item => (
              <div key={item.label} className="bg-[#f5f5f7] rounded-[20px] p-7">
                <p className="text-[15px] font-bold text-[#1d1d1f] mb-3">{item.label}</p>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#f5f5f7] rounded-[20px] p-7">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">Prompts</p>
              <p className="text-[15px] font-bold text-[#1d1d1f] mb-3">Written instructions that define behavior</p>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed">When to activate, what info to collect first, how to respond, and how to handle edge cases — all defined per employee, per context.</p>
            </div>
            <div className="bg-[#f5f5f7] rounded-[20px] p-7">
              <p className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#18b5d8] mb-3">Tools</p>
              <p className="text-[15px] font-bold text-[#1d1d1f] mb-3">Live connections to your systems</p>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed">Custom capabilities connect to any API — your CRM, scheduling software, inventory system, or internal tools — so the AI acts on real data, not guesses.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── INDUSTRY VERTICALS ────────────────────────────────────────── */}
      <section className="bg-[#f5f5f7] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">By Industry</p>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-3">
              AI employees built for your specific industry.
            </h2>
            <p className="text-[#6e6e73] text-[16px] max-w-lg mx-auto">
              Each vertical page shows the exact problem, the exact employee, and the exact results for businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Home Services', href: '/aiemployees/home-services', desc: 'HVAC, plumbing, roofing, landscaping, cleaning, and every other home service trade in Wesley Chapel and Tampa Bay.' },
              { label: 'Contractors', href: '/aiemployees/contractors', desc: 'General contractors, remodelers, and specialty trades — AI follow-up on every estimate until it gets a response.' },
              { label: 'Real Estate', href: '/aiemployees/real-estate', desc: 'Buyer agents, listing specialists, brokerages, and investors capturing leads and reviews in the Wesley Chapel market.' },
              { label: 'HVAC', href: '/aiemployees/hvac', desc: 'Emergency AC repair, installations, and maintenance agreements — with after-hours lead capture built for Tampa Bay summers.' },
            ].map((v) => (
              <a key={v.href} href={v.href} className="group bg-white rounded-[20px] p-7 border border-[#e5e5ea] hover:border-[#18b5d8] motion-safe:transition-colors flex flex-col">
                <p className="text-[#1d1d1f] font-bold text-[17px] mb-2 group-hover:text-[#18b5d8] motion-safe:transition-colors">{v.label}</p>
                <p className="text-[#6e6e73] text-[14px] leading-relaxed flex-1 mb-4">{v.desc}</p>
                <span className="text-[13px] font-semibold text-[#18b5d8]">See AI employees for {v.label} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#07141a] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">Ready to hire your team?</p>
          <h2 className="text-[36px] sm:text-[44px] font-extrabold text-white leading-tight tracking-tight mb-5">
            Your first AI employee can be live within the week.
          </h2>
          <p className="text-[#8a9ba8] text-[17px] leading-relaxed mb-8">
            Book a free strategy call. We'll map out which AI employees will have the biggest impact on your business — and show you exactly what they'll do.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#18b5d8] text-white font-bold text-[15px] px-8 py-4 rounded-full hover:bg-[#14a0c0] transition-colors"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </section>

    </div>
  )
}
