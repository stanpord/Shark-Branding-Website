import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Employees for Contractors | Shark AI Solutions',
  description: 'AI employees for contractors in Wesley Chapel and Tampa Bay. Lead follow-up, estimate reminders, review requests, and 24/7 chat booking. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees/contractors' },
  openGraph: {
    title: 'AI Employees for Contractors | Shark AI Solutions',
    description: 'Stop losing contractor leads to slow response times and un-followed estimates. AI employees handle inbound chat, follow-up, and reviews 24/7.',
    url: 'https://sharkbrandingsolutions.com/aiemployees/contractors',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees for Contractors | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees/contractors#service',
      name: 'AI Employees for General Contractors',
      description: 'AI employees configured for general contractors and specialty contractors in Wesley Chapel and Tampa Bay. Includes 24/7 lead capture, automated estimate follow-up, post-job review requests, and multi-touch sales sequences.',
      url: 'https://sharkbrandingsolutions.com/aiemployees/contractors',
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
          name: 'How do AI employees help general contractors in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI employees solve the three biggest revenue leaks for contractors: slow lead response, estimates that go cold, and missed review requests. A chat receptionist responds to every inbound inquiry immediately, even after hours. An AI CRM follows up on every estimate automatically until it gets a response. A Reputation Specialist requests a review after every completed job.' },
        },
        {
          '@type': 'Question',
          name: 'What happens to estimates that do not get a response?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most contractors send an estimate and wait. If the homeowner does not respond within a day or two, the estimate goes cold and they move on. An AI CRM sends a structured follow-up sequence, email, SMS, and phone, at the right intervals, re-engaging every unsold estimate automatically. Contractors using this approach recover 2 to 4 extra closed jobs per month from estimates they would have otherwise abandoned.' },
        },
        {
          '@type': 'Question',
          name: 'How fast can a contractor go live with AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most contractors are live within one week. The setup includes a discovery call, configuration specific to your trade and service area, and a review period before anything goes live to your customers.' },
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
    problem: 'Contractor leads are high-value but impatient. A homeowner shopping for a remodel or roof replacement contacts two or three companies. The first one to respond wins the bid conversation. Most contractors are not the first.',
    solution: 'Gemma sits on your website 24/7 and responds to every visitor within seconds. She asks the right qualifying questions, project type, location, timeline, budget range, captures full contact details, and books a site visit or callback directly to your calendar. Leads that come in at 9 PM are ready in your pipeline by 8 AM.',
    bullets: ['Responds to every visitor within seconds', 'Qualifies by project type, timeline, and budget', 'Books site visits directly to your calendar', 'Handles evenings, weekends, and holidays'],
  },
  {
    name: 'AI CRM',
    role: 'Sales Assistant',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'Contractors send estimates and hope. When a homeowner goes quiet after receiving a quote, most contractors follow up once or twice and then move on. That estimate is dead revenue sitting in a spreadsheet.',
    solution: 'Every new lead gets an immediate acknowledgment and a follow-up SMS within five minutes. Every sent estimate gets its own follow-up sequence, email, SMS, and outbound call, with smart timing designed for a contractor sales cycle. Homeowners who went cold 30, 60, or 90 days ago get re-engagement campaigns automatically. The sequence stops the moment they respond.',
    bullets: ['Immediate response to every new inquiry', 'Estimate follow-up sequence built in', 'Email, SMS, and phone, all automated', 'Cold lead re-engagement at 30, 60, and 90 days'],
  },
  {
    name: 'Reputation Specialist',
    role: 'Review Manager',
    color: '#d4a200',
    colorBg: '#fef9e7',
    problem: 'Contractor reputation is everything in Wesley Chapel. Homeowners check Google before they call. A contractor with 8 reviews loses to one with 80, even if the work is identical. Most contractors never ask for reviews because the job is done and they have already moved on.',
    solution: 'Within two hours of a completed project, your Reputation Specialist sends a personalized review request by SMS, the customer\'s name, the project type, and a direct link to your Google page. If there is no response in 48 hours, a second message goes out. Every review that comes in gets a brand-voice response within two hours. You never have to think about it.',
    bullets: ['Post-job review requests sent automatically', 'Smart two-message sequence', 'Responds to every review within 2 hours', 'Handles Google and Facebook reviews'],
  },
]

const results = [
  { stat: '15% → 50%', detail: 'Home services close rate improvement after adding AI lead follow-up and estimate tracking.', tag: 'Close Rate' },
  { stat: '2–4', detail: 'Extra closed jobs per month recovered from estimates that previously went cold.', tag: 'Recovered Revenue' },
  { stat: '60–75%', detail: 'Reduction in no-show rates for site visits and consultations after implementing automated reminders.', tag: 'Appointments' },
]

const contractorTypes = [
  'General Contractors', 'Kitchen Remodeling', 'Bathroom Remodeling', 'Room Additions',
  'Roofing', 'Siding & Exteriors', 'Windows & Doors', 'Flooring',
  'Painting', 'Tile & Stone', 'Decks & Patios', 'Garage Conversions',
]

export default function ContractorsPage() {
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
            Contractors · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Employees for
            <br />
            <span className="text-[#18b5d8]">General Contractors</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            Contractor leads are won by the first company to respond. Your AI team responds instantly, follows up on every estimate, and collects reviews after every job, without adding a single person to your payroll.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ai-audit"
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
              What contractors see in the first 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.map((r) => (
              <div key={r.stat} className="bg-[#111] rounded-[20px] p-7 border border-white/5">
                <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">{r.tag}</span>
                <p className="text-[clamp(1.4rem,2.8vw,2rem)] font-black text-[#18b5d8] leading-none mb-3">{r.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The estimate problem */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Estimate Problem</p>
              <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: 'balance' }}>
                Most contractors leave 20 to 30 percent of their revenue on the table.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                The average contractor sends an estimate and waits. If the homeowner doesn&rsquo;t respond in 48 hours, the estimate goes cold. No follow-up. No re-engagement. That job goes to whoever followed up twice more than you did.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                An AI CRM follows up on every estimate automatically, at the right time, through the right channel, until it gets a response. Most contractors using this recover two to four extra closed jobs per month from estimates they would have written off.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { day: 'Day 1', channel: 'Email', msg: 'Estimate sent, thanks for the opportunity, here\'s your quote' },
                { day: 'Day 2', channel: 'SMS', msg: 'Hey, just checking in on that estimate, any questions?' },
                { day: 'Day 5', channel: 'Phone', msg: 'Outbound call attempt, voicemail with brief message' },
                { day: 'Day 10', channel: 'Email', msg: 'Still considering? We have an opening on your schedule this week' },
              ].map((step) => (
                <div key={step.day} className="bg-white rounded-[14px] px-5 py-4 border border-[#e8e8ed] flex items-center gap-4">
                  <div className="text-[11px] font-bold text-[#999] w-12 shrink-0">{step.day}</div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                    step.channel === 'Email' ? 'bg-blue-100 text-blue-700' :
                    step.channel === 'SMS' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>{step.channel}</span>
                  <p className="text-[13px] text-[#555] leading-relaxed flex-1">{step.msg}</p>
                </div>
              ))}
              <div className="bg-[#0a0a0a] rounded-[14px] px-5 py-4">
                <p className="text-[13px] font-semibold text-[#18b5d8]">Stops automatically when they reply or book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI employees deep dive */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Your AI Team</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Three AI employees built for contractors.
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

      {/* Contractor types */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Contractor Types We Serve</p>
            <h2 className="display-lg text-[#0a0a0a]">Every type of contractor in Wesley Chapel and Tampa Bay.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {contractorTypes.map((t) => (
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
            <Link href="/aiemployees/home-services" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Home Services →</Link>
            <Link href="/aiemployees/hvac" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">HVAC →</Link>
            <Link href="/aiemployees/real-estate" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Real Estate →</Link>
            <Link href="/aiemployees" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">All AI Employees →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Contractors · Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Stop losing estimates to contractors who follow up twice more than you.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Free AI Audit delivered in 48 hours. We identify exactly how many leads and estimates your current process is losing before you invest in anything.
          </p>
          <Link
            href="/ai-audit"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </section>
    </>
  )
}
