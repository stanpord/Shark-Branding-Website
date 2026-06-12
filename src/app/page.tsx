import type { Metadata } from 'next'
import Link from 'next/link'
import EmployeeCarousel from '@/components/EmployeeCarousel'

export const metadata: Metadata = {
  title: 'AI Visibility for Tampa Bay — Shark Branding Solutions',
  description: 'Shark Branding Solutions helps Tampa Bay businesses get found by ChatGPT, Google AI Overviews, Perplexity, and Gemini. No ad spend. Results in 30 days.',
}

const stats = [
  { v: '44%',  label: 'of consumers', body: 'now use AI tools to research products and local businesses before making a decision.', src: 'HubSpot, 2024' },
  { v: '1–3',  label: 'businesses', body: 'is all AI recommends. If you\'re not in that shortlist, you don\'t exist to that buyer.', src: 'Google AI Overviews data' },
  { v: '30',   label: 'days', body: 'is how fast our clients see measurable movement in AI visibility across platforms.', src: 'Shark Branding client results' },
]

const steps = [
  { n: '01', title: 'AI Audit', body: 'We run your business through every major AI platform to find exactly where you\'re invisible, inconsistent, or outranked.' },
  { n: '02', title: 'Visibility Fix', body: 'We correct your signals: listings, structured data, trust indicators, and content — everything AI needs to recognize and recommend you.' },
  { n: '03', title: 'Authority Build', body: 'We build the reputation layer: reviews, citations, and AI-readable content that makes you the obvious answer to your customers\' questions.' },
  { n: '04', title: 'Monitor & Maintain', body: 'AI algorithms change constantly. We watch, adapt, and keep your visibility growing every month.' },
]

const services = [
  { title: 'AI Business Consulting', body: 'Full-service AI visibility strategy for businesses ready to own their category.', href: '/services#ai-visibility' },
  { title: 'AI Visibility Toolkit', body: 'The complete managed system: listings, reviews, content, and AI readiness in one place.', href: '/services#toolkit' },
  { title: 'AI Employees', body: 'Automate lead follow-up, review requests, content, and social — 24/7, on autopilot.', href: '/aiemployees' },
  { title: 'Free AI Audit', body: 'See exactly where your business stands across AI platforms. Delivered in 48 hours. No catch.', href: '/free-report' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[92vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            AI Visibility · Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            When customers ask AI,
            <br />
            <span className="text-[#18b5d8]">does it recommend you?</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[540px] mx-auto mb-5" style={{ textWrap: 'balance' }}>
            ChatGPT, Google AI Overviews, Perplexity, and Gemini are now the first stop for buyers searching for local businesses. Most businesses aren&rsquo;t showing up. We fix that.
          </p>
          <p className="text-[14px] text-[#18b5d8] font-semibold mb-2">
            AI Visibility Consulting for Tampa Bay Businesses
          </p>
          <p className="text-[14px] text-[#7a7a7a] mb-12">
            Serving Wesley Chapel, Lutz, Land O&rsquo; Lakes, St. Petersburg &amp; Tampa
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
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── What Is AI Visibility ── */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Shift</p>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: 'balance' }}>
              Search has changed. Most businesses haven&rsquo;t.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              AI visibility is how well your business appears when AI platforms answer questions your customers are asking. Instead of showing ten results, these platforms recommend one to three businesses. If you&rsquo;re not in that shortlist, you&rsquo;re invisible to buyers who never reach the traditional search results at all.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {stats.map((s) => (
              <div key={s.v} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(2rem,4vw,3rem)] font-black text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[14px] font-semibold text-white mb-2">{s.label}</p>
                <p className="text-[13px] text-white/45 leading-relaxed">{s.body}</p>
                <p className="text-[11px] text-white/20 mt-3">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Found Trusted Chosen ── */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Our Framework</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Found. Trusted. Chosen.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              Every service we offer maps to one of three outcomes. All three have to work together for AI to recommend you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Found',
                color: 'bg-[#18b5d8]',
                body: 'AI can locate, identify, and understand your business. Your name, address, services, and location are consistent across every platform it crawls.',
                items: ['Listing accuracy across 50+ platforms', 'Structured data and schema markup', 'AI crawler access confirmed'],
              },
              {
                label: 'Trusted',
                color: 'bg-[#4FD1A0]',
                body: 'AI sees active social proof that your business is credible. Reviews, responses, and reputation signals tell the algorithm you\'re worth recommending.',
                items: ['Review volume and recency', '24-hour response cadence', 'Reputation signals strengthened'],
              },
              {
                label: 'Chosen',
                color: 'bg-[#F7555F]',
                body: 'Your content directly answers what customers are asking. AI can extract clear, specific answers about your services, location, and results.',
                items: ['Answer-ready content structure', 'FAQ and entity definitions', 'Competitive gap analysis'],
              },
            ].map((c) => (
              <div key={c.label} className="bg-[#f5f5f7] rounded-[20px] p-7">
                <span className={`inline-block ${c.color} text-white text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-5`}>
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
      <section className="bg-[#0a0a0a] px-6 py-20 border-t border-white/5">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Process</p>
            <h2 className="display-lg text-white" style={{ textWrap: 'balance' }}>
              Up and running in 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#111] rounded-[20px] p-7 border border-white/5">
                <p className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-5">{s.n}</p>
                <h3 className="text-[17px] font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Real Results</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Tampa Bay businesses. 30 days.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              Every number is documented from a real client. No projections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { result: 'Page 3 → #2 on Google', detail: 'HVAC company. 6 keywords moved into top 3. 30 days.', tag: 'Home Services' },
              { result: '#4 → #1 Realtor', detail: 'Ranked #1 in a market of 2,000+ agents. 20% increase in AI-driven recommendations.', tag: 'Real Estate' },
              { result: 'Invisible → #1 AI Result', detail: 'Smart vending company went from zero AI presence to top recommendation in their category.', tag: 'Technology' },
              { result: '96% member gap closed', detail: 'Chamber of commerce members went from invisible to cited across ChatGPT, Gemini, and Perplexity.', tag: 'Association' },
            ].map((r) => (
              <div key={r.result} className="bg-[#f5f5f7] rounded-[20px] p-7 flex flex-col gap-3">
                <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full self-start">{r.tag}</span>
                <p className="text-[20px] font-bold text-[#0a0a0a]">{r.result}</p>
                <p className="text-[14px] text-[#555] leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/case-studies" className="text-[14px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded-sm">
              Read the full case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">What We Do</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Every service, one outcome.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
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
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">AI Employees</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Your business runs 24/7. Your team shouldn&rsquo;t have to.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              AI employees handle lead follow-up, review management, content, and bookings — automatically, while you focus on the work that actually requires you.
            </p>
          </div>

          <EmployeeCarousel />

          <div className="text-center mt-10">
            <Link href="/aiemployees" className="text-[14px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded-sm">
              Meet the full AI team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Ready to get visible?</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Find out where you stand in 48 hours.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Free AI Audit. No commitment. Delivered in 48 hours.
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
