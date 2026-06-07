import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Visibility Consulting in Wesley Chapel, FL — Shark Branding Solutions',
  description: 'Shark Branding Solutions helps Wesley Chapel businesses get recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini. Free AI Audit delivered in 48 hours.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/wesley-chapel' },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Shark Branding Solutions',
  description: 'AI visibility consulting for Wesley Chapel businesses. We help local companies get found and recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini.',
  url: 'https://sharkbrandingsolutions.com/wesley-chapel',
  telephone: '+17275133955',
  email: 'info@sharkbrandingsolutions.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27251 Wesley Chapel Blvd., Suite B14 #805',
    addressLocality: 'Wesley Chapel',
    addressRegion: 'FL',
    postalCode: '33544',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Wesley Chapel' },
}

const results = [
  { stat: '#1', detail: 'Realtor in Wesley Chapel in a market of 2,000+ agents. 30 days.' },
  { stat: '30', detail: 'Days to measurable AI visibility movement for Wesley Chapel clients.' },
  { stat: '3', detail: 'AI platforms — ChatGPT, Gemini, Perplexity — monitored for every client.' },
]

export default function WesleyChapelPage() {
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
            Wesley Chapel, FL
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Visibility Consulting
            <br />
            <span className="text-[#18b5d8]">for Wesley Chapel Businesses</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            When a Wesley Chapel customer asks ChatGPT, Google AI Overviews, or Perplexity for a local business recommendation, does your name come up? We make sure it does.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/services"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Wesley Chapel Problem</p>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: 'balance' }}>
              Wesley Chapel is one of the fastest-growing markets in Florida. The competition for AI recommendations is growing just as fast.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Buyers in Wesley Chapel, Lutz, and Land O&rsquo; Lakes are increasingly using ChatGPT and Google AI to find local service providers before they ever visit a website. If AI doesn&rsquo;t recognize your business as credible and relevant, you lose that customer before the search even begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {results.map((r) => (
              <div key={r.stat} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(2rem,4vw,3rem)] font-black text-[#18b5d8] leading-none mb-3">{r.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do locally */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How We Help Wesley Chapel Businesses</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Found. Trusted. Chosen.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              Every Wesley Chapel business we work with goes through the same proven three-step framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                step: '01',
                title: 'AI Audit',
                body: 'We run your Wesley Chapel business through ChatGPT, Gemini, Perplexity, Google AI Overviews, and Copilot to find exactly where you\'re invisible, inconsistent, or outranked by local competitors.',
              },
              {
                step: '02',
                title: 'Visibility Fix',
                body: 'We correct your signals across all platforms: listing accuracy, structured data, trust indicators, and content that AI can extract and use to recommend you when local buyers search.',
              },
              {
                step: '03',
                title: 'Ongoing Monitoring',
                body: 'AI algorithms change constantly. We watch your visibility across platforms every month and adapt before you notice a drop — keeping you in the recommendation shortlist.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-[#f5f5f7] rounded-[20px] p-7">
                <p className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-5">{s.step}</p>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 text-center">
            <p className="text-[16px] text-white/70">
              We&rsquo;re based in Wesley Chapel. <strong className="text-white">We know this market.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Who We Work With</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Wesley Chapel businesses across every category.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'Home Services', 'Real Estate', 'Healthcare', 'Legal',
              'Restaurants', 'Retail', 'Professional Services', 'Contractors',
              'Fitness & Wellness', 'Auto Services', 'Financial Services', 'Education',
            ].map((industry) => (
              <div key={industry} className="bg-white rounded-[12px] px-4 py-3 text-center border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#0a0a0a]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Wesley Chapel, FL</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free AI Audit for your Wesley Chapel business.
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
