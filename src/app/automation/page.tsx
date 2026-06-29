import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business Automation for Tampa Bay | Shark AI Solutions',
  description: 'AI-powered automation for Wesley Chapel and Tampa Bay. Automate lead follow-up, review requests, appointment booking, and after-hours chat. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/automation' },
  openGraph: {
    title: 'Business Automation for Tampa Bay | Shark AI Solutions',
    description: 'Stop losing leads, reviews, and revenue to manual processes. AI automation built for local service businesses in Wesley Chapel and Tampa Bay.',
    url: 'https://sharkbrandingsolutions.com/automation',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'Business Automation | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/automation#service',
      name: 'Business Automation for Wesley Chapel & Tampa Bay',
      description: 'AI-powered automation services for local businesses in Wesley Chapel, Tampa Bay, Lutz, and Land O\'Lakes. Automate lead follow-up, review management, appointment booking, and after-hours customer communication.',
      url: 'https://sharkbrandingsolutions.com/automation',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
      ],
      serviceType: 'Business Process Automation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Automation Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Follow-Up Automation', description: 'Automated multi-touch sequences across email, SMS, and phone for every new lead.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Review Request Automation', description: 'Post-job review requests sent automatically after every completed service.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Appointment Booking Automation', description: '24/7 AI chat that qualifies leads and books directly to your calendar.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'After-Hours Customer Communication', description: 'AI receptionist that captures and qualifies leads outside of business hours.' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What business tasks can be automated for local businesses in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'The highest-ROI automations for Wesley Chapel businesses are: missed call text-back, post-job review requests, lead follow-up sequences, appointment reminders, and after-hours chat reception. Each one is configured for your specific business and service area.' },
        },
        {
          '@type': 'Question',
          name: 'How fast can business automation go live in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most automation systems are built, configured, and live within one week. The process includes a discovery call, setup specific to your business, and a review before anything goes live.' },
        },
        {
          '@type': 'Question',
          name: 'Does business automation work for small businesses in Tampa Bay?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI automation is particularly effective for local service businesses in Tampa Bay, home services, HVAC, real estate, healthcare, legal, and contractors, where leads come in at unpredictable times and manual follow-up is inconsistent.' },
        },
      ],
    },
  ],
}

const useCases = [
  {
    title: 'Lead follow-up',
    href: '/automation/lead-follow-up',
    body: 'Every new lead gets an immediate response and a multi-touch follow-up sequence across email, SMS, and phone, automatically, without anyone on your team lifting a finger.',
    stat: '2–4',
    statLabel: 'extra closed deals per month recovered from cold leads',
  },
  {
    title: 'Review generation',
    href: '/automation/review-generation',
    body: 'Post-job review requests go out automatically after every completed service. Responses to every review, positive or negative, are handled in your brand voice within two hours.',
    stat: '35–55%',
    statLabel: 'of satisfied customers leave a review when asked automatically',
  },
  {
    title: 'Appointment booking',
    href: '/automation/appointment-booking',
    body: 'An AI receptionist on your website qualifies visitors and books them directly to your calendar 24/7, no phone tag, no scheduling delays, no dropped leads.',
    stat: '3–7',
    statLabel: 'qualified after-hours leads captured per day on average',
  },
]

export default function AutomationPage() {
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
            Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            Business Automation
            <br />
            <span className="text-[#18b5d8]">for Local Businesses</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            Stop losing leads, reviews, and revenue to slow response times and inconsistent follow-up. AI automation handles the repetitive work, 24/7, on autopilot.
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
              Meet the AI Employees
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Gap</p>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: 'balance' }}>
              Manual processes are costing Wesley Chapel businesses real money.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Every missed call, every lead that waits two hours for a response, every job completed without a review request, these are not minor inconveniences. They are compounding revenue losses that automation eliminates permanently.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { stat: '21×', detail: 'more likely to qualify a lead if you respond within 5 minutes vs. 30 minutes. Source: Harvard Business Review.' },
              { stat: '30–50%', detail: 'of inbound calls to local service businesses in Wesley Chapel go unanswered and are lost to competitors.' },
              { stat: '2.7×', detail: 'higher conversion rate for businesses with 50+ Google reviews vs. those with under 10.' },
            ].map((s) => (
              <div key={s.stat} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-[#18b5d8] leading-none mb-3">{s.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">What We Automate</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              The three automations with the fastest ROI for local businesses.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {useCases.map((u) => (
              <div key={u.title} className="bg-[#f5f5f7] rounded-[20px] p-7 flex flex-col">
                <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-3 capitalize">{u.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed mb-6 flex-1">{u.body}</p>
                <div className="bg-white rounded-[12px] border border-[#e8e8ed] px-4 py-3 mb-5">
                  <p className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-black text-[#18b5d8] leading-none mb-1">{u.stat}</p>
                  <p className="text-[12px] text-[#999]">{u.statLabel}</p>
                </div>
                <Link href={u.href} className="text-[13px] font-semibold text-[#18b5d8] hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Process</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Live in one week. No technical setup required from you.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Free AI Audit', body: 'We assess your current workflow and identify which automations will have the biggest immediate impact on your business.' },
              { n: '02', title: 'Custom setup', body: 'We configure everything to your business, your voice, your service area, your specific workflows. Nothing is a generic template.' },
              { n: '03', title: 'Review and approve', body: 'You see exactly what every automation will do before anything goes live. Nothing deploys without your sign-off.' },
              { n: '04', title: 'Live and running', body: 'Your automations go live and start capturing leads, requesting reviews, and following up, while you focus on the work.' },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-[20px] p-7 border border-[#e8e8ed]">
                <p className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-5">{s.n}</p>
                <h3 className="text-[17px] font-bold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Industries We Serve</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Built for every local service business in Wesley Chapel and Tampa Bay.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {[
              'Home Services', 'HVAC', 'Real Estate', 'Legal',
              'Healthcare', 'Contractors', 'Restaurants', 'Auto Services',
              'Fitness & Wellness', 'Financial Services', 'Professional Services', 'Education',
            ].map((ind) => (
              <div key={ind} className="bg-[#f5f5f7] rounded-[12px] px-4 py-3 text-center border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#0a0a0a]">{ind}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/aiemployees/home-services" className="text-[14px] font-semibold text-[#18b5d8] hover:underline">
              See AI automation for home services →
            </Link>
          </div>
        </div>
      </section>

      {/* Resource link */}
      <section className="bg-[#f5f5f7] px-6 py-16 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[15px] text-[#555] mb-4">Not sure where to start?</p>
          <Link
            href="/resources/blog-5-automations-wesley-chapel-businesses"
            className="text-[17px] font-bold text-[#0a0a0a] hover:text-[#18b5d8] transition-colors"
          >
            Read: 5 Tasks Wesley Chapel Business Owners Should Automate First →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free automation audit for your business.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Delivered in 48 hours. No commitment. No sales pitch.
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
