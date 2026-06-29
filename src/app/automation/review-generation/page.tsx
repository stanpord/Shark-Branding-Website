import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Review Generation Automation | Shark AI Solutions',
  description: 'Automated review requests for Wesley Chapel and Tampa Bay. Post-job SMS requests, smart follow-up, and brand-voice responses to every review. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/automation/review-generation' },
  openGraph: {
    title: 'Review Generation Automation | Shark AI Solutions',
    description: 'Stop leaving review opportunities uncollected after every completed job. Automated review requests and responses configured for your business.',
    url: 'https://sharkbrandingsolutions.com/automation/review-generation',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'Review Generation Automation | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/automation/review-generation#service',
      name: 'Review Generation Automation',
      description: 'Automated review request sequences for local businesses in Wesley Chapel and Tampa Bay. Post-job SMS requests with smart follow-up timing and automated brand-voice responses to every incoming review.',
      url: 'https://sharkbrandingsolutions.com/automation/review-generation',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
      ],
      serviceType: 'Business Process Automation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does automated review generation work for Wesley Chapel businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'After every completed job or transaction, the automation sends a personalized SMS to the customer requesting a Google review. If there is no response within 48 hours, a second message goes out. Every review that comes in, positive or critical, receives a brand-voice response within two hours, automatically. The entire process runs without any input from your team.' },
        },
        {
          '@type': 'Question',
          name: 'How many reviews can automated review requests generate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Response rates for automated post-job review requests run 35 to 55 percent for satisfied customers. A service business completing 20 jobs per week could realistically add 7 to 11 new reviews per week. At that pace, a business with 15 reviews today would have 100+ reviews within three months.' },
        },
        {
          '@type': 'Question',
          name: 'Why do Google reviews matter so much for local businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Businesses with more than 50 Google reviews convert at 2.7 times the rate of businesses with fewer than 10. Review count and recency are primary signals in local search rankings and in the AI-generated responses that now appear at the top of Google. More reviews means more visibility, more trust, and more conversions.' },
        },
      ],
    },
  ],
}

export default function ReviewGenerationPage() {
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
            Automation · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            Review Generation
            <br />
            <span className="text-[#18b5d8]">Automation</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            After every completed job, your Reputation Specialist sends a personalized review request. No one on your team has to ask. Every review that comes in gets a response within two hours. Automatically.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/automation"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
            >
              See All Automations
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[600px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Why Reviews Matter</p>
            <h2 className="display-lg text-white" style={{ textWrap: 'balance' }}>
              Review count is a primary ranking signal. Most local businesses are leaving it uncollected.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { stat: '2.7×', detail: 'Higher conversion rate for businesses with 50+ Google reviews vs. those with under 10.' },
              { stat: '35–55%', detail: 'Of satisfied customers leave a review when asked via automated post-job SMS.' },
              { stat: '21', detail: 'Five-star reviews generated in 30 days by a service business using automated review requests.' },
            ].map((s) => (
              <div key={s.stat} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-[#18b5d8] leading-none mb-3">{s.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How It Works</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              The full review cycle, on autopilot.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Job completed',
                body: 'When a job is marked complete in your system, the review sequence triggers automatically. No one on your team has to remember to ask.',
              },
              {
                step: '02',
                title: 'First review request',
                body: 'Within two hours of job completion, your customer receives a personalized SMS: their name, the service completed, and a direct link to your Google review page. One tap to leave a review.',
              },
              {
                step: '03',
                title: 'Smart follow-up',
                body: 'If there is no response after 48 hours, a second message goes out. After that, the sequence ends, no aggressive spam, no harassing satisfied customers.',
              },
              {
                step: '04',
                title: 'Automatic response',
                body: 'Every review that comes in, five stars or one star, gets a brand-voice response within two hours. Positive reviews are acknowledged warmly. Critical reviews are handled professionally and constructively.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-[#f5f5f7] rounded-[20px] p-7 border border-[#e8e8ed]">
                <p className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-4">{s.step}</p>
                <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The compound effect */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Compound Effect</p>
          <h2 className="display-lg text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            One new review per week is 52 reviews per year.
          </h2>
          <p className="text-[17px] text-[#555] leading-relaxed mb-8">
            A service business completing 10 to 15 jobs per week, with a 35 percent review response rate, collects 3 to 5 new reviews every week. At that pace, a business with 20 reviews today has over 150 in a year, putting them in the top tier of their category for review count in Wesley Chapel and Tampa Bay.
          </p>
          <p className="text-[17px] text-[#555] leading-relaxed">
            That is not just a vanity metric. More reviews means higher local search rankings, more trust from prospective customers, and more citations from AI search tools that use review count as a credibility signal.
          </p>
        </div>
      </section>

      {/* Related automations */}
      <section className="bg-white px-6 py-16 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-5">More Automations</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/automation/lead-follow-up" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Lead Follow-Up →</Link>
            <Link href="/automation/appointment-booking" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Appointment Booking →</Link>
            <Link href="/automation" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">All Automations →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start generating reviews after every completed job.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Free AI Audit delivered in 48 hours. We show you exactly how many reviews you are leaving on the table before you commit to anything.
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
