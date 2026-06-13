'use client'

import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'gemma', label: 'Gemma', role: 'Chat Receptionist' },
  { id: 'reputation', label: 'Reputation Specialist', role: 'Review Manager' },
  { id: 'aicrm', label: 'AI CRM', role: 'Sales Assistant' },
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
                className={`flex items-center gap-1.5 px-5 py-4 text-[13px] font-semibold border-b-2 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-inset ${
                  active === item.id
                    ? 'border-[#18b5d8] text-[#18b5d8]'
                    : 'border-transparent text-[#6e6e73] hover:text-[#1d1d1f]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ── GEMMA — CHAT RECEPTIONIST ─────────────────────────────── */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="gemma" className="py-28 px-6 scroll-mt-16">
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
            <a href="/contact" className="shrink-0 bg-[#18b5d8] text-white text-[13px] font-bold px-5 py-2.5 rounded-full hover:bg-[#14a0c0] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a]">
              Ask about Voice
            </a>
          </div>

        </div>
      </section>



      <SectionDivider />

      {/* ── CUSTOM EMPLOYEE ───────────────────────────────────────────── */}
      <section id="custom" className="bg-[#f5f5f7] py-28 px-6 scroll-mt-16">
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
                  className="inline-block bg-[#18b5d8] text-white font-bold text-[13px] px-6 py-3 rounded-full hover:bg-[#14a0c0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Home Services', href: '/aiemployees/home-services', desc: 'HVAC, plumbing, roofing, landscaping, cleaning, and every other home service trade in Wesley Chapel and Tampa Bay.' },
              { label: 'Contractors', href: '/aiemployees/contractors', desc: 'General contractors, remodelers, and specialty trades — AI follow-up on every estimate until it gets a response.' },
              { label: 'Real Estate', href: '/aiemployees/real-estate', desc: 'Buyer agents, listing specialists, brokerages, and investors capturing leads and reviews in the Wesley Chapel market.' },
              { label: 'HVAC', href: '/aiemployees/hvac', desc: 'Emergency AC repair, installations, and maintenance agreements — with after-hours lead capture built for Tampa Bay summers.' },
              { label: 'Healthcare', href: '/aiemployees/healthcare', desc: 'Medical practices, dental offices, chiropractic clinics, and specialists cutting no-shows and growing patient reviews.' },
              { label: 'Law Firms', href: '/aiemployees/legal', desc: 'Attorneys and law firms responding to every prospective client inquiry immediately and following up until they book.' },
            ].map((v) => (
              <a key={v.href} href={v.href} className="group bg-white rounded-[20px] p-7 border border-[#e5e5ea] hover:border-[#18b5d8] motion-safe:transition-colors flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2">
                <p className="text-[#1d1d1f] font-bold text-[17px] mb-2 group-hover:text-[#18b5d8] motion-safe:transition-colors">{v.label}</p>
                <p className="text-[#6e6e73] text-[14px] leading-relaxed flex-1 mb-4">{v.desc}</p>
                <span className="text-[13px] font-semibold text-[#18b5d8]">See AI employees for {v.label} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <SectionDivider />

      {/* ── INVESTMENT ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#07141a] rounded-[28px] p-10 sm:p-14">
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-4">What&apos;s the investment?</p>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-white leading-tight tracking-tight mb-6">
              The full AI Employee suite starts at $5,000/month.
            </h2>
            <p className="text-[#8a9ba8] text-[17px] leading-relaxed mb-8">
              That includes Gemma, the AI CRM, and the Reputation Specialist — built, trained, and live within a week. Setup, ongoing management, and monthly optimization are all included. No hidden fees, no per-seat charges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Setup & training', detail: 'Fully done for you — live in under 7 days' },
                { label: 'Ongoing management', detail: 'We monitor, adjust, and optimize every month' },
                { label: 'No long-term contract', detail: 'Month-to-month after the first 90 days' },
              ].map(item => (
                <div key={item.label} className="bg-white/5 rounded-[16px] p-5 border border-white/10">
                  <p className="text-white font-bold text-[14px] mb-1">{item.label}</p>
                  <p className="text-[#8a9ba8] text-[13px] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[#8a9ba8] text-[15px] leading-relaxed">
              If you&apos;re a growing Tampa Bay business ready to automate lead follow-up, appointment booking, and review management — book a strategy call to see if it&apos;s a fit. The call is free and there&apos;s no commitment.
            </p>
          </div>
        </div>
      </section>

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
            className="inline-block bg-[#18b5d8] text-white font-bold text-[15px] px-8 py-4 rounded-full hover:bg-[#14a0c0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a]"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </section>

    </div>
  )
}
