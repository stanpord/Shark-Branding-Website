import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Employees for Law Firms | Shark Branding Solutions',
  description: 'AI employees for law firms in Wesley Chapel and Tampa Bay. Lead follow-up, client intake, review requests, and 24/7 chat response. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees/legal' },
  openGraph: {
    title: 'AI Employees for Law Firms | Shark Branding Solutions',
    description: 'Stop losing prospective clients to slow intake response. AI employees handle inbound inquiries, follow-up, and reviews 24/7 for law firms in Tampa Bay.',
    url: 'https://sharkbrandingsolutions.com/aiemployees/legal',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees for Law Firms — Shark Branding Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees/legal#service',
      name: 'AI Employees for Law Firms',
      description: 'AI employees configured for law firms and attorneys in Wesley Chapel and Tampa Bay. Includes 24/7 prospective client inquiry handling, automated intake follow-up, post-engagement review requests, and multi-touch contact sequences for unresponsive leads.',
      url: 'https://sharkbrandingsolutions.com/aiemployees/legal',
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
          name: 'How do AI employees help law firms in Wesley Chapel and Tampa Bay?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI employees handle the intake pipeline that law firms consistently lose leads in: slow response to initial inquiries, prospective clients who submit a contact form and never hear back, and missed opportunities to collect Google reviews after successful cases. A chat receptionist responds to every inquiry immediately, answers basic questions about practice areas, and collects intake information. An AI CRM follows up with prospective clients through a structured multi-touch sequence until they schedule a consultation. A Reputation Specialist requests a review after every resolved matter.' },
        },
        {
          '@type': 'Question',
          name: 'Is it ethical for law firms to use AI for client communications?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, when used appropriately. AI employees handle non-legal, administrative tasks: answering basic questions about practice areas, collecting contact information for intake, scheduling consultations, and sending appointment reminders. They do not provide legal advice and are configured to route any substantive legal questions to an attorney. The AI is disclosed as an automated system when appropriate, consistent with professional responsibility guidelines.' },
        },
        {
          '@type': 'Question',
          name: 'How important are Google reviews for law firm visibility in Tampa Bay?',
          acceptedAnswer: { '@type': 'Answer', text: 'Extremely important. When someone in Wesley Chapel or Tampa searches for "personal injury attorney" or "family lawyer near me," Google ranks firms in part on review count and recency. AI systems like ChatGPT and Google AI Overviews use the same signals. A firm with 80 reviews outranks one with 15, even with equivalent credentials. Most law firms never ask for reviews systematically. An automated request after every successfully resolved matter compounds dramatically over time.' },
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
    problem: 'Someone searching for an attorney in Wesley Chapel is usually in a time-sensitive situation. They contact two or three firms online. The first one that responds with something useful — not an autoresponder, not a voicemail — earns the consultation. Most firms don\'t respond until the next business day.',
    solution: 'Gemma responds to every website inquiry immediately — day or night. She answers basic questions about your practice areas, fee arrangements, and process, collects the prospective client\'s name, contact information, and a brief description of their matter, and either books a consultation directly or routes the inquiry to your intake team with full notes. After-hours contacts receive an immediate acknowledgment and a first-business-day follow-up.',
    bullets: ['Responds to every inquiry immediately', 'Answers FAQs about practice areas and process', 'Collects intake information before your team touches it', 'After-hours coverage every night and weekend'],
  },
  {
    name: 'AI CRM',
    role: 'Sales Assistant',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'Law firms lose a significant share of prospective clients not because they lost the case evaluation, but because the intake follow-up was inconsistent. A potential client submits a contact form, gets a call two days later, doesn\'t answer, and moves on. Nobody called again. That case went to another firm.',
    solution: 'Every new prospective client gets an immediate acknowledgment and a structured follow-up sequence across email, SMS, and phone at the right intervals for a legal intake timeline. The sequence stops the moment they respond or schedule a consultation. Prospective clients who went cold at 30 or 60 days get a re-engagement message — some are still looking and just got busy.',
    bullets: ['Immediate response to every new inquiry', 'Multi-touch follow-up across email, SMS, and phone', 'Timing designed for legal intake cycles', 'Cold lead re-engagement at 30 and 60 days'],
  },
  {
    name: 'Reputation Specialist',
    role: 'Review Manager',
    color: '#d4a200',
    colorBg: '#fef9e7',
    problem: 'Law firms have a persistent review problem. Clients whose matters resolved well often don\'t think to leave a review unless asked — and asking feels awkward after a legal matter. Most firms collect reviews sporadically. Firms with 10 reviews lose visibility to firms with 100, regardless of quality.',
    solution: 'After every successfully resolved matter — a closed case, a completed estate plan, a finalized transaction — your Reputation Specialist sends a brief, warm message thanking the client and including a direct link to your Google review page. The timing and tone are configured to feel appropriate for a post-legal-matter context. Every review that comes in gets a professional, brand-voice response within two hours.',
    bullets: ['Post-matter review requests timed appropriately', 'Professional tone configured for legal context', 'Responds to every review within 2 hours', 'Compounds visibility over 6 to 12 months'],
  },
]

const results = [
  { stat: '21×', detail: 'More likely to convert a prospective client when you respond within 5 minutes vs. 30 minutes.', tag: 'Response Speed' },
  { stat: '78%', detail: 'Of prospective legal clients retain the first firm that responds substantively to their inquiry.', tag: 'First Mover' },
  { stat: '2.7×', detail: 'Higher conversion rate for law firms with 50+ Google reviews compared to those with under 10.', tag: 'Reviews' },
]

const practiceAreas = [
  'Personal Injury', 'Family Law', 'Estate Planning', 'Real Estate Law',
  'Criminal Defense', 'Immigration', 'Business Law', 'Employment Law',
  'Bankruptcy', 'Civil Litigation', 'Elder Law', 'Workers Compensation',
]

export default function LegalPage() {
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
            Law Firms · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Employees for
            <br />
            <span className="text-[#18b5d8]">Law Firms & Attorneys</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            Prospective clients contact two or three firms and hire the first one that responds usefully. Your AI team responds immediately, follows up consistently, and collects reviews after every resolved matter — so your firm wins more of the work it deserves.
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
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Numbers</p>
            <h2 className="display-lg text-white" style={{ textWrap: 'balance' }}>
              The intake gap is costing your firm cases.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.map((r) => (
              <div key={r.stat} className="bg-[#111] rounded-[20px] p-7 border border-white/5">
                <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">{r.tag}</span>
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-[#18b5d8] leading-none mb-3">{r.stat}</p>
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
              Three AI employees built for law firms.
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

      {/* Practice areas */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Practice Areas We Serve</p>
            <h2 className="display-lg text-[#0a0a0a]">Every practice area in Wesley Chapel and Tampa Bay.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {practiceAreas.map((t) => (
              <div key={t} className="bg-white rounded-[12px] px-4 py-3 text-center border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#0a0a0a]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related verticals */}
      <section className="bg-white px-6 py-16 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-5">More Industries</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/aiemployees/healthcare" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Healthcare →</Link>
            <Link href="/aiemployees/real-estate" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Real Estate →</Link>
            <Link href="/aiemployees/contractors" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Contractors →</Link>
            <Link href="/aiemployees" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">All AI Employees →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Law Firms · Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Stop losing cases to firms that respond faster.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Free AI Audit delivered in 48 hours. We identify exactly how many prospective clients your intake process is losing before you invest in anything.
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
