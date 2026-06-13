import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Employees for Real Estate | Shark Branding Solutions',
  description: 'AI employees for real estate agents in Wesley Chapel and Tampa Bay. 24/7 lead capture, automated follow-up, review generation, and content — live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees/real-estate' },
  openGraph: {
    title: 'AI Employees for Real Estate | Shark Branding Solutions',
    description: 'Stop losing real estate leads to slow response times. AI employees handle inbound buyer and seller inquiries, follow-up, reviews, and booking 24/7.',
    url: 'https://sharkbrandingsolutions.com/aiemployees/real-estate',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees for Real Estate — Shark Branding Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees/real-estate#service',
      name: 'AI Employees for Real Estate Businesses',
      description: 'AI employees configured for real estate agents and brokerages in Wesley Chapel and Tampa Bay. Includes 24/7 buyer and seller lead capture, automated multi-touch follow-up, post-transaction review requests, and content publishing.',
      url: 'https://sharkbrandingsolutions.com/aiemployees/real-estate',
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
          name: 'How do AI employees help real estate agents in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'Real estate leads are time-sensitive. A buyer who submits an inquiry at 9 PM and does not hear back until morning has already moved on to the next agent. Gemma, the AI chat receptionist, responds to every inbound lead within seconds — qualifying buyer readiness, seller timeline, price range, and property type before a human agent ever gets involved. The AI CRM runs follow-up across email and SMS for every lead that does not book immediately. The Reputation Specialist requests a review after every closed transaction.' },
        },
        {
          '@type': 'Question',
          name: 'What types of real estate businesses use AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Independent agents, buyer specialist teams, listing specialists, brokerages, property managers, real estate investors, and new construction sales teams. Any real estate professional who handles inbound buyer or seller leads, appointment scheduling, or client reviews can benefit from AI employees.' },
        },
        {
          '@type': 'Question',
          name: 'How fast can a real estate agent go live with AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most real estate professionals are live within one week. The setup includes a discovery call, configuration specific to your market and buyer/seller focus, and a review period before anything goes live.' },
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
    problem: 'Real estate leads shop multiple agents simultaneously. Whoever responds first wins. Most agents respond in hours — if at all — because they are showing properties, in appointments, or simply off the clock.',
    solution: 'Gemma greets every visitor to your website 24/7, qualifies their buyer or seller intent with targeted questions — timeline, budget, property type, neighborhood — and either books a consultation directly to your calendar or schedules a callback. Every lead is in your pipeline with full notes before you start your morning.',
    bullets: ['Responds within seconds at any hour', 'Qualifies buyer or seller intent automatically', 'Books consultations to your calendar', 'Captures leads while you are showing properties'],
  },
  {
    name: 'AI CRM',
    role: 'Sales Assistant',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'A buyer who requested a showing last month and went quiet is not necessarily gone — they may still be in the market. Most agents never follow up past the first or second attempt. Cold lead re-engagement is left on the table.',
    solution: 'Every new lead gets an immediate acknowledgment and a multi-touch follow-up sequence across email and SMS over the following 10 days. Leads that go cold at 30, 60, or 90 days get automated re-engagement messages. The sequence stops automatically the moment a lead responds or books.',
    bullets: ['Immediate response to every new inquiry', 'Email and SMS follow-up sequences', 'Stops automatically when lead engages', '30/60/90-day cold lead re-engagement'],
  },
  {
    name: 'Reputation Specialist',
    role: 'Review Manager',
    color: '#d4a200',
    colorBg: '#fef9e7',
    problem: 'In real estate, reviews are a primary trust signal. Buyers and sellers research agents on Google and Zillow before making contact. Most agents have fewer than 15 reviews because asking feels awkward after a transaction and the moment passes.',
    solution: 'Within 24 hours of a closed transaction, your Reputation Specialist sends a personalized review request by SMS. If there is no response in 48 hours, a second reminder goes out. Every review that comes in gets a brand-voice response within two hours — positive or critical — automatically.',
    bullets: ['Post-transaction review requests sent automatically', 'Two-message sequence with smart timing', 'Responds to every review within 2 hours', 'Handles Google, Zillow, and Facebook'],
  },
]

const results = [
  { stat: '#4 → #1', detail: 'Wesley Chapel real estate agent moved to #1 in local rankings among 2,000+ agents. 30 days.', tag: 'Rankings' },
  { stat: '$30,000', detail: 'Commission from a single lead captured at 11 PM. The agent was off the clock. Gemma was not.', tag: 'After-Hours' },
  { stat: '21', detail: 'Five-star reviews generated in 30 days by a Reputation Specialist after each closed transaction.', tag: 'Reviews' },
]

export default function RealEstatePage() {
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
            Real Estate · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Employees for
            <br />
            <span className="text-[#18b5d8]">Real Estate Professionals</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            Real estate leads do not wait. The agent who responds first wins. Your AI team responds instantly, follows up consistently, and requests reviews after every closed deal — so you capture more clients without adding overhead.
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
              What real estate professionals see in the first 30 days.
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
              Three AI employees built for real estate professionals.
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

      {/* Real estate types served */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Who We Work With</p>
            <h2 className="display-lg text-[#0a0a0a]">Every type of real estate professional in Wesley Chapel and Tampa Bay.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['Buyer Agents', 'Listing Specialists', 'Independent Agents', 'Brokerages', 'Property Managers', 'Real Estate Investors', 'New Construction Sales', 'Commercial Agents', 'Luxury Agents', 'Relocation Specialists', 'Mortgage Brokers', 'Real Estate Teams'].map((t) => (
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
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Real Estate · Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free AI Audit for your real estate business.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Delivered in 48 hours. We identify exactly which AI employee has the biggest impact on your pipeline before you commit to anything.
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
