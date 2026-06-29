import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Employees for Home Services | Shark AI Solutions',
  description: 'AI employees for home service businesses in Wesley Chapel and Tampa Bay. Lead follow-up, review requests, 24/7 chat booking, and content, live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees/home-services' },
  openGraph: {
    title: 'AI Employees for Home Services | Shark AI Solutions',
    description: 'Stop losing home service leads to slow response times. AI employees handle inbound chat, follow-up, reviews, and booking 24/7.',
    url: 'https://sharkbrandingsolutions.com/aiemployees/home-services',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees for Home Services | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees/home-services#service',
      name: 'AI Employees for Home Service Businesses',
      description: 'AI employees configured for home service companies in Wesley Chapel and Tampa Bay. Includes 24/7 lead capture, automated multi-touch follow-up, post-job review requests, and content publishing.',
      url: 'https://sharkbrandingsolutions.com/aiemployees/home-services',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
      ],
      serviceType: 'AI Business Automation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do AI employees help home service businesses in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI employees handle the tasks that cause home service businesses to lose leads: slow response times, inconsistent follow-up, and missed review requests. A chat receptionist responds to every inbound lead immediately, including after hours. An AI CRM runs follow-up sequences across email, SMS, and phone. A Reputation Specialist requests a review after every completed job.' },
        },
        {
          '@type': 'Question',
          name: 'What types of home service businesses use AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'HVAC, plumbing, electrical, roofing, landscaping, cleaning services, pest control, painting, remodeling, and pool services. Any home service business that handles inbound leads, appointment scheduling, or customer reviews can benefit from AI employees.' },
        },
        {
          '@type': 'Question',
          name: 'How fast can a home service company go live with AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most home service businesses are live within one week. The setup includes a discovery call, configuration specific to your trade and service area, and a review period before anything goes live.' },
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
    problem: 'Home service leads come in at all hours, evenings, weekends, late nights. Most go unanswered until the next business day, and by then the lead has called someone else.',
    solution: 'Gemma greets every visitor to your website 24/7, asks two to three qualifying questions specific to your trade, captures their contact info, and either books them directly to your calendar or schedules a callback. By morning, every overnight lead is in your pipeline with full notes.',
    bullets: ['Responds within seconds, not hours', 'Qualifies by trade, location, and job type', 'Books to your calendar automatically', 'Handles after-hours leads every night'],
  },
  {
    name: 'AI CRM',
    role: 'Sales Assistant',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'Home service jobs are competitive. If a prospect gets a quote from three companies and yours is the slowest to follow up, you lose, even if you\'re the best option.',
    solution: 'Every new lead gets an immediate acknowledgment, a follow-up SMS within five minutes, and a multi-touch email and phone sequence over the next five to ten days. The sequence stops the moment they reply or book. Cold leads from 30, 60, or 90 days ago get re-engagement campaigns automatically.',
    bullets: ['Immediate response to every new lead', 'Email, SMS, and phone follow-up sequences', 'Stops automatically when lead responds', 'Cold lead re-engagement built in'],
  },
  {
    name: 'Reputation Specialist',
    role: 'Review Manager',
    color: '#d4a200',
    colorBg: '#fef9e7',
    problem: 'Every home service job is a review opportunity. Most businesses leave them uncollected because asking feels awkward, they forget, or the crew is already on to the next job.',
    solution: 'Within two hours of a completed job, your Reputation Specialist sends a personalized review request by SMS. If there\'s no response in 48 hours, a second reminder goes out. Every review that comes in, positive or critical, gets a brand-voice response within two hours, automatically.',
    bullets: ['Post-job review requests sent automatically', 'Two-message sequence with smart timing', 'Responds to every review within 2 hours', 'Handles Google and Facebook'],
  },
]

const results = [
  { stat: 'Page 3 → #2', detail: 'HVAC company moved 6 keywords into top 3 on Google. 30 days.', tag: 'HVAC' },
  { stat: '3–7', detail: 'Qualified after-hours leads captured per day by home service clients using Gemma.', tag: 'Lead Capture' },
  { stat: '60–75%', detail: 'Reduction in no-show rates after implementing appointment reminder automation.', tag: 'Appointments' },
]

export default function HomeServicesPage() {
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
            Home Services · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Employees for
            <br />
            <span className="text-[#18b5d8]">Home Service Businesses</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            Home service leads don&rsquo;t wait. Your AI team responds instantly, follows up consistently, and requests reviews after every job, so you close more work without adding headcount.
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
              What home service businesses see in the first 30 days.
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
              Three AI employees built for home service businesses.
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

      {/* Trades served */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Trades We Serve</p>
            <h2 className="display-lg text-[#0a0a0a]">Every home service trade in Wesley Chapel and Tampa Bay.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Landscaping', 'Cleaning Services', 'Pest Control', 'Painting', 'Remodeling', 'Pool Services', 'Garage Doors', 'Flooring'].map((t) => (
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
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Home Services · Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free AI Audit for your home service business.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Delivered in 48 hours. We identify exactly which AI employee has the biggest impact on your business before you commit to anything.
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
