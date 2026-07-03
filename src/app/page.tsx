import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import AuditModalTrigger from '@/components/AuditModalTrigger'
import EmployeeCarousel from '@/components/EmployeeCarousel'
import HomepageAnimations from '@/components/HomepageAnimations'

export const metadata: Metadata = {
  title: 'AI Visibility + Automation | Shark AI Solutions',
  description: 'Shark AI Solutions helps regional and multi-location businesses get found by ChatGPT, Google AI Overviews, Perplexity, and Gemini. Results in 30 days.',
}

const pressLogos = [
  { name: 'INC.', src: '/press-logos/inc.webp', width: 80, height: 30, href: 'https://www.inc.com/', imgClass: 'invert' },
  { name: 'WFLA News Channel 8', src: '/press-logos/wfla.png', width: 110, height: 55, href: 'https://www.wfla.com' },
  { name: 'Tampa Bay Times', src: '/press-logos/tampabay-times.png', width: 220, height: 80, href: 'https://www.tampabay.com', imgClass: 'min-w-[170px]' },
  { name: 'TechNewsWorld', src: '/press-logos/technewsworld.png', width: 130, height: 42, href: 'https://www.technewsworld.com/story/study-finds-most-restaurants-missing-from-ai-recommendations-180396.html' },
]

const homepageFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI visibility for local businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI visibility is how well your business appears when AI platforms like ChatGPT, Google AI Overviews, Perplexity, and Gemini answer questions your customers are asking. Instead of showing ten results, these platforms recommend one to three businesses. If your business is not in that shortlist, you are invisible to buyers who never reach the traditional search results at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast do businesses see results from AI visibility work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Shark AI Solutions clients see measurable movement in AI visibility within 30 days. One HVAC client moved from position #32 to #2 across four high-intent keywords in 30 days without paid ads. Results vary based on how many visibility gaps exist at the start and how quickly corrected signals propagate across platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the AI visibility process include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The process covers four steps: an AI Audit to find exactly where your business is invisible, inconsistent, or outranked; a Visibility Fix to correct listings, structured data, and trust signals; an Authority Build to develop reviews, citations, and AI-readable content; and ongoing Monitor and Maintain work to adapt as AI algorithms change. Most clients are fully in motion within 30 days of kickoff.',
      },
    },
  ],
}

const stats = [
  { v: '$1M+', label: 'weekend revenue', body: 'Driven for a multi-state retail client through full-funnel campaigns on streaming, CTV, and live sports.' },
  { v: '1–3',  label: 'businesses', body: 'is all AI recommends. If you\'re not in that shortlist, you don\'t exist to that buyer.' },
  { v: '30',   label: 'days', body: 'is how fast our clients see measurable movement in AI visibility across platforms.' },
]

const steps = [
  { n: '01', title: 'AI Audit', body: 'We run your business through every major AI platform to find exactly where you\'re invisible, inconsistent, or outranked.' },
  { n: '02', title: 'Visibility Fix', body: 'We correct your signals: listings, structured data, trust indicators, and content. Everything AI needs to recognize and recommend you.' },
  { n: '03', title: 'Authority Build', body: 'We build the reputation layer: reviews, citations, and AI-readable content that makes you the obvious answer to your customers\' questions.' },
  { n: '04', title: 'Monitor & Maintain', body: 'AI algorithms change constantly. We watch, adapt, and keep your visibility growing every month.' },
]

const results = [
  { result: '$1M+ Weekend Revenue', detail: 'Multi-state jewelry retailer. Full campaign management across Spotify, Amazon, Hulu, Pandora, and Monday Night Football — conception to completion.', tag: 'Retail Media' },
  { result: '#4 → #1 Realtor', detail: 'Ranked #1 in a market of 2,000+ agents. 20% increase in AI-driven recommendations.', tag: 'Real Estate' },
  { result: '96% member gap closed', detail: 'Chamber of commerce members went from invisible to cited across ChatGPT, Gemini, and Perplexity.', tag: 'Association' },
]

const services = [
  { title: 'AI Business Consulting', body: 'Full-service AI visibility strategy for businesses ready to own their category.', href: '/services#ai-visibility' },
  { title: 'AI Visibility Toolkit', body: 'The complete managed system: listings, reviews, content, and AI readiness in one place.', href: '/services#toolkit' },
  { title: 'AI Employees', body: 'Automate lead follow-up, review requests, content, and social — 24/7, on autopilot.', href: '/aiemployees' },
  { title: 'Free AI Audit', body: 'See exactly where your business stands across AI platforms. Reviewed with you personally. No catch.', href: '/free-report' },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }}
      />
      <Script src="https://cdn.apigateway.co/review-widget-client..prod/sdk.js" strategy="lazyOnload" />
      <HomepageAnimations />

      {/* ── Hero ── */}
      <section
        data-scene="hero"
        className="bg-white sm:min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20"
      >
        <div className="hero-dot hero-dot-1" aria-hidden="true" />
        <div className="hero-dot hero-dot-2" aria-hidden="true" />
        <div className="hero-dot hero-dot-3" aria-hidden="true" />
        <div className="hero-dot hero-dot-4" aria-hidden="true" />
        <div className="hero-dot hero-dot-5" aria-hidden="true" />

        <div className="max-w-[760px] mx-auto relative z-10">
          <p
            data-animate="hero-label"
            className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-8"
          >
            AI Visibility + Automation
          </p>
          <h1
            data-animate="hero-title"
            className="display-hero text-[#0a0a0a] mb-6"
            style={{ textWrap: 'balance' }}
          >
            When customers ask AI, does it recommend you?
          </h1>
          <p
            data-animate="hero-sub"
            className="lead-airy text-[#333333] max-w-[560px] mx-auto mb-8 sm:mb-12"
            style={{ textWrap: 'balance' }}
          >
            ChatGPT, Google AI Overviews, Perplexity, and Gemini are the new front door for buyers — from local searches to enterprise category decisions. Most businesses aren't showing up. We fix that.
          </p>
          <div data-animate="hero-cta" className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <AuditModalTrigger
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              label="Get My Free AI Audit"
            />
            <Link
              href="/services"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              See How It Works
            </Link>
          </div>
          <p className="text-[13px] text-[#999] tracking-wide">
            Wesley Chapel · Lutz · Land O' Lakes · St. Petersburg · Tampa
          </p>
        </div>
      </section>

      {/* ── As Seen In Press Strip ── */}
      <section className="bg-white border-b border-[#e8e8ed] py-8 px-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-[#b0b0b0] mb-7">As Seen In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {pressLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`object-contain max-h-12 w-auto opacity-40 grayscale hover:opacity-70 hover:grayscale-0 motion-safe:transition-all duration-150${logo.imgClass ? ` ${logo.imgClass}` : ''}`}
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Is AI Visibility ── */}
      <section data-scene="shift" className="bg-[#0a0a0a] px-6 py-12 sm:py-20">
        <div className="max-w-[980px] mx-auto relative z-10">
          <div className="max-w-[700px] mx-auto">
            <h2
              data-animate="shift-title"
              className="display-lg text-white mb-5"
              style={{ textWrap: 'balance' }}
            >
              Search has changed. Most businesses haven't.
            </h2>
            <p data-animate="shift-sub" className="text-[16px] text-white/60 leading-relaxed mb-10" style={{ textWrap: 'pretty' }}>
              AI visibility is how well your business appears when AI platforms answer questions your customers are asking. Instead of showing ten results, these platforms recommend one to three businesses. If you're not in that shortlist, you're invisible to buyers who never reach the traditional search results at all.
            </p>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.v} data-animate="stat-card" className="flex items-baseline gap-6 sm:gap-8 py-5">
                  <p className="text-[1.5rem] sm:text-[1.75rem] font-bold text-[#18b5d8] tabular-nums shrink-0 w-14 sm:w-16">{s.v}</p>
                  <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed">
                    <span className="text-white font-semibold">{s.label} </span>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Found Trusted Chosen ── */}
      <section data-scene="framework" className="bg-white px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <h2 data-animate="framework-title" className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Found. Trusted. Chosen.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto" style={{ textWrap: 'pretty' }}>
              Every service we offer maps to one of three outcomes. All three have to work together for AI to recommend you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Found',
                labelClass: 'bg-[#18b5d8] text-white',
                body: 'AI can locate, identify, and understand your business. Your name, address, services, and location are consistent across every platform it crawls.',
                items: ['Listing accuracy across 50+ platforms', 'Structured data and schema markup', 'AI crawler access confirmed'],
              },
              {
                label: 'Trusted',
                labelClass: 'bg-[#0a0a0a] text-white',
                body: 'AI sees active social proof that your business is credible. Reviews, responses, and reputation signals tell the algorithm you\'re worth recommending.',
                items: ['Review volume and recency', '24-hour response cadence', 'Reputation signals strengthened'],
              },
              {
                label: 'Chosen',
                labelClass: 'border border-[#18b5d8] text-[#18b5d8]',
                body: 'Your content directly answers what customers are asking. AI can extract clear, specific answers about your services, location, and results.',
                items: ['Answer-ready content structure', 'FAQ and entity definitions', 'Competitive gap analysis'],
              },
            ].map((c) => (
              <div key={c.label} data-animate="framework-card" className="bg-[#f5f5f7] rounded-[20px] p-7">
                <span className={`inline-block text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-5 ${c.labelClass}`}>
                  {c.label}
                </span>
                <p className="text-[14px] text-[#555] leading-relaxed mb-5">{c.body}</p>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[#333]">
                      <span className="text-[#18b5d8] font-bold shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section data-scene="steps" className="bg-[#0a0a0a] px-6 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <h2 data-animate="steps-title" className="display-lg text-white" style={{ textWrap: 'balance' }}>
              Up and running in 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} data-animate="step-card" className="bg-[#111] rounded-[20px] p-7 border border-white/5">
                <p className="text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-5">{s.n}</p>
                <h3 className="text-[17px] font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section data-scene="results" className="bg-white px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <h2 data-animate="results-title" className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Measured results. Real clients.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              Every number is documented. No projections, no composites.
            </p>
          </div>

          {/* Featured result */}
          <div data-animate="result-card" className="bg-[#0a0a0a] rounded-[20px] p-8 sm:p-10 mb-4">
            <span className="inline-block bg-[#18b5d8]/15 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-5">
              Home Services
            </span>
            <p className="text-[26px] sm:text-[32px] font-bold text-white leading-tight mb-3" style={{ textWrap: 'balance' }}>
              Page 3 → #2 on Google in 30 days.
            </p>
            <p className="text-[15px] text-white/55 leading-relaxed max-w-[540px]">
              HVAC company. 6 keywords moved into top 3 positions. Tracked and documented from day one of engagement.
            </p>
          </div>

          {/* Supporting results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {results.map((r) => (
              <div key={r.result} data-animate="result-card" className="bg-[#f5f5f7] rounded-[20px] p-7 flex flex-col gap-3">
                <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full self-start">{r.tag}</span>
                <p className="text-[18px] font-bold text-[#0a0a0a]">{r.result}</p>
                <p className="text-[13px] text-[#555] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f5f7] rounded-[16px] px-6 py-5 border border-[#e8e8ed] mb-6">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b0b0b0] mb-3 text-center">Campaigns executed on</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Spotify', 'Amazon', 'Hulu', 'Pandora', 'Monday Night Football'].map((platform) => (
                <span key={platform} className="text-[13px] font-semibold text-[#555] bg-white border border-[#e8e8ed] rounded-full px-4 py-1.5">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="text-[14px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded-sm"
            >
              Read the full case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="bg-[#f5f5f7] px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Real businesses. Real reviews.
            </h2>
          </div>
          {/* @ts-ignore */}
          <review-widget widget-id="widget-973a3aee-1eaa-41ad-b5f9-d7ef1bd85c85"></review-widget>
        </div>
      </section>

      {/* ── Services ── */}
      <section data-scene="services" className="bg-white px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Every service, one outcome.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[500px] mx-auto" style={{ textWrap: 'pretty' }}>
              Whether you run one location or a hundred, the outcome is the same: AI recommends you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                data-animate="service-card"
                className="group bg-white rounded-[20px] p-7 border border-[#e8e8ed] hover:border-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                <h3 className="text-[17px] font-bold text-[#0a0a0a] mb-2 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150">{s.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Employees ── */}
      <section data-scene="employees" className="bg-[#f5f5f7] px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 data-animate="employees-title" className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Your business runs 24/7. Your team shouldn't have to.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              AI employees handle lead follow-up, review management, content, and bookings — automatically, while you focus on the work that actually requires you.
            </p>
          </div>

          <EmployeeCarousel />

          <div className="text-center mt-10">
            <Link
              href="/aiemployees"
              className="text-[14px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded-sm"
            >
              Meet the full AI team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-scene="cta" className="bg-[#0a0a0a] py-16 sm:py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto relative z-10">
          <h2 data-animate="cta-title" className="display-lg text-white mb-4 sm:mb-6" style={{ textWrap: 'balance' }}>
            AI platforms are setting their recommendation lists now.
          </h2>
          <p data-animate="cta-sub" className="lead-airy text-white/50 mb-8 sm:mb-12" style={{ textWrap: 'pretty' }}>
            Free AI Audit. Find out where you stand before your competitor does. Reviewed with you personally, no commitment required.
          </p>
          <div data-animate="cta-btn">
            <AuditModalTrigger
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              label="Get My Free AI Audit"
            />
          </div>
        </div>
      </section>
    </>
  )
}
