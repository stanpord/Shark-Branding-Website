import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Employees for HVAC Companies in Wesley Chapel & Tampa Bay — Shark Branding Solutions',
  description: 'AI employees built for HVAC companies in Wesley Chapel and Tampa Bay. 24/7 emergency lead capture, automated follow-up, review requests after every job, and content. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees/hvac' },
  openGraph: {
    title: 'AI Employees for HVAC Companies — Wesley Chapel & Tampa Bay',
    description: 'Stop losing HVAC leads to competitors who respond faster. AI employees handle inbound calls, emergency inquiries, follow-up, and review requests 24/7.',
    url: 'https://sharkbrandingsolutions.com/aiemployees/hvac',
    type: 'website',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees/hvac#service',
      name: 'AI Employees for HVAC Companies',
      description: 'AI employees configured for HVAC companies in Wesley Chapel and Tampa Bay. Includes 24/7 emergency lead capture, automated multi-touch follow-up, post-job review requests, and content publishing.',
      url: 'https://sharkbrandingsolutions.com/aiemployees/hvac',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
        { '@type': 'City', name: 'New Tampa' },
        { '@type': 'City', name: 'Zephyrhills' },
      ],
      serviceType: 'AI Business Automation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do AI employees help HVAC companies in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'HVAC emergencies happen at night, on weekends, and in the middle of summer when every technician is booked. Most inbound calls during those times go to voicemail and the lead calls the next company on the list. Gemma, the AI chat receptionist, captures every emergency inquiry immediately, qualifies the issue type and urgency, and either books a service call or schedules a callback. The AI CRM follows up with every lead that does not book. The Reputation Specialist requests a review after every completed job.' },
        },
        {
          '@type': 'Question',
          name: 'What HVAC services benefit most from AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Emergency AC repair and replacement, routine maintenance agreements, new system installations, duct cleaning, and seasonal tune-ups. Any HVAC service that generates inbound leads, appointment scheduling, or customer reviews can benefit from AI employees.' },
        },
        {
          '@type': 'Question',
          name: 'How fast can an HVAC company go live with AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most HVAC companies are live within one week. The setup includes a discovery call, configuration specific to your service area and job types, and a review period before anything goes live.' },
        },
      ],
    },
  ],
}

const employees = [
  {
    name: 'Gemma',
    role: 'Chat Receptionist',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'In Tampa Bay, AC emergencies peak in summer and do not observe business hours. A homeowner whose system fails at 8 PM on a Friday will call three or four companies and book with whoever answers first. Most HVAC companies have nothing running after 5 PM.',
    solution: 'Gemma greets every visitor to your website 24/7, asks about the issue, urgency, and system type, captures their contact information, and either books a service call or schedules a callback for first thing in the morning. Emergency inquiries are flagged and routed immediately. By the time your team starts the day, every overnight lead is in your dispatch system with full notes.',
    bullets: ['Captures emergency inquiries at any hour', 'Qualifies issue type, urgency, and system age', 'Books service calls to your dispatch calendar', 'Flags true emergencies for immediate response'],
  },
  {
    name: 'AI CRM',
    role: 'Sales Assistant',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'HVAC is a competitive market. A homeowner who requests a quote from three companies and gets called back by one within five minutes — and by the others a day later — will book with the fast one, even if the price is the same.',
    solution: 'Every new lead gets an immediate acknowledgment and a multi-touch follow-up across email and SMS over the next five to ten days. Maintenance agreement prospects and cold leads from 30, 60, or 90 days ago get re-engagement campaigns automatically. The sequence stops the moment a lead books or responds.',
    bullets: ['Immediate response to every new lead', 'Email and SMS follow-up sequences', 'Maintenance agreement upsell sequences', 'Cold lead re-engagement built in'],
  },
  {
    name: 'Reputation Specialist',
    role: 'Review Manager',
    color: '#d4a200',
    colorBg: '#fef9e7',
    problem: 'When a Tampa Bay homeowner searches for HVAC companies, the top results have 100 or more reviews. Most mid-size HVAC companies have 20 to 40. That review gap costs jobs every week because homeowners use review count as a proxy for reliability.',
    solution: 'Within two hours of a completed job, your Reputation Specialist sends a personalized review request by SMS. If there is no response in 48 hours, a second reminder goes out. Every review that comes in gets a brand-voice response within two hours — positive or critical — automatically.',
    bullets: ['Post-job review requests sent automatically', 'Two-message sequence with smart timing', 'Responds to every review within 2 hours', 'Handles Google and Facebook'],
  },
]

const results = [
  { stat: '#32 → #2', detail: 'Wesley Chapel HVAC company moved to #2 on Google for "same day AC repair" in 30 days.', tag: 'Rankings' },
  { stat: '6', detail: 'High-intent HVAC keywords moved into the top 3 positions on Google in the same 30-day window.', tag: 'Keywords' },
  { stat: '3–7', detail: 'Qualified after-hours emergency leads captured per day by HVAC clients using Gemma.', tag: 'Lead Capture' },
]

export default function HvacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="bg-white min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            HVAC · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Employees for
            <br />
            <span className="text-[#18b5d8]">HVAC Companies</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            In Tampa Bay, AC emergencies do not wait for business hours. Your AI team responds to every inbound inquiry instantly, follows up consistently, and builds your review count after every job — so you win more calls without missing a single one.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/aiemployees"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
            >
              See All AI Employees
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[600px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Real Results</p>
            <h2 className="display-lg text-white" style={{ textWrap: 'balance' }}>
              What HVAC companies see in the first 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.map((r) => (
              <div key={r.stat} className="bg-[#111] rounded-[20px] p-7 border border-white/5">
                <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">{r.tag}</span>
                <p className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[#18b5d8] leading-none mb-3">{r.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI employees deep dive */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Your AI Team</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Three AI employees built for HVAC companies.
            </h2>
          </div>
          <div className="space-y-6">
            {employees.map((emp) => (
              <div key={emp.name} className="bg-[#f5f5f7] rounded-[20px] p-8 border border-[#e8e8ed]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[15px]"
                        style={{ background: emp.colorBg, color: emp.color }}>
                        {emp.name[0]}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: emp.color }}>{emp.role}</p>
                        <p className="text-[17px] font-bold text-[#0a0a0a]">{emp.name}</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-[#999] uppercase tracking-[0.1em] mb-2">The problem</p>
                    <p className="text-[15px] text-[#555] leading-relaxed mb-5">{emp.problem}</p>
                    <p className="text-[13px] font-bold text-[#999] uppercase tracking-[0.1em] mb-2">What {emp.name} does</p>
                    <p className="text-[15px] text-[#555] leading-relaxed">{emp.solution}</p>
                  </div>
                  <div className="space-y-2.5">
                    {emp.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 bg-white rounded-[12px] px-4 py-3 border border-[#e8e8ed]">
                        <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                        <p className="text-[14px] text-[#333]">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC services */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Services We Cover</p>
            <h2 className="display-lg text-[#0a0a0a]">Every HVAC service type in Wesley Chapel and Tampa Bay.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['AC Repair', 'AC Replacement', 'Emergency HVAC', 'New Installations', 'Maintenance Agreements', 'Duct Cleaning', 'Air Quality', 'Heat Pump Service', 'Commercial HVAC', 'Mini-Split Systems', 'Seasonal Tune-Ups', 'Thermostat Installation'].map((t) => (
              <div key={t} className="bg-white rounded-[12px] px-4 py-3 text-center border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#0a0a0a]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">HVAC · Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free AI Audit for your HVAC company.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Delivered in 48 hours. We identify exactly which AI employee has the biggest immediate impact on your call volume before you commit to anything.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </section>
    </>
  )
}
