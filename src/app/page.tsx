import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { BOOK_M_30, REVIEW_SDK } from '@/lib/ep'
const HomepageAnimations = dynamic(() => import('@/components/HomepageAnimations'))

/* ── CSS Mockup: Multi-platform AI Recommendation Panel ── */
function AiRecommendMockup() {
  const panels = [
    {
      platform: 'ChatGPT',
      dot: '#10a37f',
      url: 'chatgpt.com',
      query: '"best AI visibility agency Wesley Chapel FL"',
      items: [
        { n: 1, name: 'Shark AI Solutions', sub: 'shark-ai-solutions.com · Wesley Chapel, FL', highlight: true },
        { n: 2, name: 'Digital Marketing Agency', highlight: false },
        { n: 3, name: 'SEO Firm Tampa', highlight: false },
      ],
    },
    {
      platform: 'Claude',
      dot: '#d97341',
      url: 'claude.ai',
      query: '"best AI visibility agency near me Tampa Bay"',
      items: [
        { n: 1, name: 'Shark AI Solutions', sub: 'AI Visibility + Automation · shark-ai-solutions.com', highlight: true },
        { n: 2, name: 'Regional Agency B', highlight: false },
        { n: 3, name: 'National Vendor C', highlight: false },
      ],
    },
    {
      platform: 'Gemini',
      dot: '#7c3aed',
      url: 'gemini.google.com',
      query: '"AI marketing agency Wesley Chapel near me"',
      items: [
        { n: 1, name: 'Shark AI Solutions', sub: 'Recommended · shark-ai-solutions.com', highlight: true },
        { n: 2, name: 'Competitor D', highlight: false },
        { n: 3, name: 'Competitor E', highlight: false },
      ],
    },
    {
      platform: 'Google AI Overview',
      dot: '#4285f4',
      url: 'google.com',
      query: '"AI company that ranks businesses on ChatGPT"',
      items: [
        { n: 1, name: 'Shark AI Solutions', sub: 'Cited source · shark-ai-solutions.com', highlight: true },
        { n: 2, name: 'Competitor F', highlight: false },
      ],
    },
  ]

  return (
    <div className="rounded-3xl bg-[#0a1a22] border border-white/10 p-4 sm:p-5 overflow-hidden space-y-3">
      {panels.map((p) => (
        <div key={p.platform} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.04]">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.dot }} />
            <span className="text-[10px] font-mono text-white/20 flex-1 truncate">{p.url}</span>
            <span className="text-[9px] font-bold uppercase tracking-wider shrink-0" style={{ color: p.dot }}>{p.platform}</span>
          </div>
          <div className="px-3 py-1.5 border-b border-white/[0.04]">
            <p className="text-[10px] text-white/35 font-mono truncate">{p.query}</p>
          </div>
          <div className="px-2.5 py-2 space-y-1">
            {p.items.map((item) => (
              <div
                key={item.n}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 ${
                  item.highlight
                    ? 'bg-[#18b5d8]/10 border border-[#18b5d8]/20'
                    : 'opacity-20'
                }`}
              >
                <span className={`text-[10px] font-bold w-3 shrink-0 ${item.highlight ? 'text-[#18b5d8]' : 'text-white/30'}`}>{item.n}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-[11px] leading-none ${item.highlight ? 'text-white font-semibold' : 'text-white/30'}`}>{item.name}</p>
                  {item.highlight && item.sub && (
                    <p className="text-[9px] text-white/25 mt-0.5 truncate">{item.sub}</p>
                  )}
                </div>
                {item.highlight && (
                  <span className="text-[8px] font-bold bg-[#18b5d8]/15 text-[#18b5d8] px-1.5 py-0.5 rounded-full shrink-0">#1</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-[10px] text-white/15 text-center pt-0.5">Shark AI Solutions · Live AI platform rankings</p>
    </div>
  )
}


/* ── CSS Mockup: Results Metrics Dashboard ── */
function MetricsDashboardMockup() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {[
          { v: '7M+', label: 'Impressions', sub: 'mold remediation client · Social AI' },
          { v: '225K', label: 'Engagements', sub: 'comments, shares, and reaches' },
        ].map((m) => (
          <div key={m.label} className="bg-white rounded-2xl p-6 border border-[#e8e8ed] shadow-sm">
            <p className="text-[2rem] font-bold text-[#0a0a0a] leading-none mb-2">{m.v}</p>
            <p className="text-[13px] font-semibold text-[#333] mb-1">{m.label}</p>
            <p className="text-[12px] text-[#767676]">{m.sub}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-6 border border-[#e8e8ed] shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[13px] font-semibold text-[#333]">Google Reviews</p>
          <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
            {[1,2,3,4,5].map(s => <span key={s} className="text-[#f59e0b] text-[13px]" aria-hidden="true">★</span>)}
          </div>
        </div>
        <div className="flex items-end gap-4 mb-4">
          <div>
            <p className="text-[2.25rem] font-bold text-[#0a0a0a] leading-none">89</p>
            <p className="text-[12px] text-[#767676] mt-1">reviews now</p>
          </div>
          <p className="text-[#22c55e] text-[14px] font-bold mb-1.5">↑ from 7</p>
        </div>
        <div className="h-2 bg-[#f5f5f7] rounded-full overflow-hidden">
          <div className="h-full bg-[#18b5d8] rounded-full" style={{ width: '89%' }} />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-[#e8e8ed] shadow-sm">
        <p className="text-[13px] font-semibold text-[#333] mb-4">AI Platform Visibility</p>
        <div className="space-y-3">
          {[
            { platform: 'ChatGPT', status: 'Recommended' },
            { platform: 'Google AI Overviews', status: 'Cited' },
            { platform: 'Perplexity', status: 'Listed' },
          ].map((p) => (
            <div key={p.platform} className="flex items-center justify-between">
              <p className="text-[13px] text-[#555]">{p.platform}</p>
              <span className="text-[11px] font-bold bg-[#dcfce7] text-[#16a34a] px-2.5 py-1 rounded-full">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


/* ── CSS Mockup: HVAC AI Ranking Before/After ── */
function HvacAiMockup() {
  return (
    <div className="h-full flex flex-col gap-4 p-5 sm:p-7">
      <div>
        <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#18b5d8]/50 mb-0.5">Case Study · HVAC · Wesley Chapel, FL</p>
        <p className="text-[13px] font-semibold text-white/60">ChatGPT AI ranking · 30 days · no paid ads</p>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
        {/* BEFORE */}
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col overflow-hidden">
          <div className="px-3 py-2 border-b border-white/[0.05] flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-red-400/50">Before</span>
          </div>
          <div className="px-3 py-1.5 border-b border-white/[0.04]">
            <p className="text-[9px] text-white/25 font-mono truncate">"same day AC repair Wesley Chapel"</p>
          </div>
          <div className="px-2.5 py-2 space-y-1 flex-1">
            {['Competitor 1', 'Competitor 2', 'Competitor 3'].map((name, i) => (
              <div key={name} className="flex items-center gap-1.5 rounded-md px-2 py-1 bg-white/[0.03]">
                <span className="text-[8px] text-white/20 w-2.5 shrink-0">{i + 1}</span>
                <span className="text-[9px] text-white/25 truncate">{name}</span>
              </div>
            ))}
            <div className="flex items-center gap-1.5 px-2 py-1">
              <span className="text-[8px] text-white/15">·····</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md px-2 py-1 opacity-25">
              <span className="text-[8px] text-red-400 w-2.5 shrink-0">32</span>
              <span className="text-[9px] text-white/40 truncate">Our client</span>
            </div>
          </div>
        </div>

        {/* AFTER */}
        <div className="rounded-xl bg-white/[0.04] border border-[#18b5d8]/20 flex flex-col overflow-hidden">
          <div className="px-3 py-2 border-b border-[#18b5d8]/10 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#18b5d8]" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#18b5d8]">After · Day 30</span>
          </div>
          <div className="px-3 py-1.5 border-b border-white/[0.04]">
            <p className="text-[9px] text-white/25 font-mono truncate">"same day AC repair Wesley Chapel"</p>
          </div>
          <div className="px-2.5 py-2 space-y-1 flex-1">
            <div className="flex items-center gap-1.5 rounded-md px-2 py-1 bg-white/[0.03] opacity-35">
              <span className="text-[8px] text-white/30 w-2.5 shrink-0">1</span>
              <span className="text-[9px] text-white/30 truncate">Competitor 1</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md px-2 py-1.5 bg-[#18b5d8]/10 border border-[#18b5d8]/25">
              <span className="text-[8px] text-[#18b5d8] font-bold w-2.5 shrink-0">2</span>
              <span className="text-[9px] text-white font-semibold flex-1 truncate">Our Client</span>
              <span className="text-[7px] font-bold bg-[#18b5d8]/15 text-[#18b5d8] px-1.5 py-0.5 rounded-full shrink-0">#2</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md px-2 py-1 bg-white/[0.03] opacity-35">
              <span className="text-[8px] text-white/30 w-2.5 shrink-0">3</span>
              <span className="text-[9px] text-white/30 truncate">Competitor 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { v: '#32→#2', label: 'Same Day AC Repair' },
          { v: '#31→#2', label: 'Air Conditioning' },
          { v: '30 days', label: 'No paid ads' },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.04] rounded-xl p-2.5 text-center">
            <p className="text-[12px] font-bold text-[#18b5d8] leading-none mb-1">{s.v}</p>
            <p className="text-[8px] text-white/30 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'AI Visibility + Automation | Shark AI Solutions',
  description: 'Shark AI Solutions helps regional and multi-location businesses get found by ChatGPT, Google AI Overviews, Perplexity, and Gemini. Results in 30 days.',
}

const pressLogos = [
  { name: 'INC.', src: '/press-logos/inc.webp', width: 120, height: 45, href: '/media', external: false, imgClass: 'invert' },
  { name: 'WFLA News Channel 8', src: '/press-logos/wfla.png', width: 160, height: 80, href: '/media', external: false },
  { name: 'Tampa Bay Times', src: '/press-logos/tampabay-times.png', width: 300, height: 110, href: '/media', external: false, imgClass: 'min-w-[220px]' },
  { name: 'TechNewsWorld', src: '/press-logos/technewsworld.png', width: 190, height: 62, href: 'https://www.technewsworld.com/story/study-finds-most-restaurants-missing-from-ai-recommendations-180396.html', external: true },
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
  { result: '$1M+ Weekend Revenue', detail: 'Multi-state jewelry retailer. Full campaign management across Spotify, Amazon, Hulu, Pandora, and Monday Night Football.', tag: 'Retail Media' },
  { result: '#4 → #1 Realtor', detail: 'Ranked #1 in a market of 2,000+ agents. 20% increase in AI-driven recommendations.', tag: 'Real Estate' },
  { result: '96% member gap closed', detail: 'Chamber of commerce members went from invisible to cited across ChatGPT, Gemini, and Perplexity.', tag: 'Association' },
]

const services = [
  { title: 'AI Business Consulting', body: 'Full-service AI visibility strategy for businesses ready to own their category.', href: '/services#ai-visibility' },
  { title: 'AI Visibility Toolkit', body: 'Listings, reviews, content, and AI readiness, managed monthly so you don\'t have to think about it.', href: '/services#toolkit' },
  { title: 'AI Employees', body: 'Lead follow-up, review requests, content, and social, handled automatically while you\'re running your business.', href: '/aiemployees' },
  { title: 'Website Design & Development', body: 'Built for AI optimization, SEO, AEO, and GEO. Structured from day one to rank in search and get recommended by AI.', href: '/websites' },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }}
      />
      <Script src={REVIEW_SDK} strategy="lazyOnload" />
      <HomepageAnimations />

      {/* ── HERO ── */}
      <section
        data-scene="hero"
        className="bg-white overflow-hidden"
      >
        <div className="hero-dot hero-dot-1" aria-hidden="true" />
        <div className="hero-dot hero-dot-2" aria-hidden="true" />
        <div className="hero-dot hero-dot-3" aria-hidden="true" />
        <div className="hero-dot hero-dot-4" aria-hidden="true" />
        <div className="hero-dot hero-dot-5" aria-hidden="true" />

        {/* Text block */}
        <div className="max-w-[800px] mx-auto px-6 pt-28 sm:pt-36 pb-14 sm:pb-20 text-center relative z-10">
          <p
            data-animate="hero-label"
            className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.22em] uppercase mb-6 sm:mb-8"
          >
            AI Visibility + Automation
          </p>
          <h1
            data-animate="hero-title"
            className="text-[#0a0a0a] mb-7 sm:mb-8 font-semibold tracking-tight leading-[1.04]"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            When customers ask AI,<br className="hidden sm:block" /> does it recommend you?
          </h1>
          <p
            data-animate="hero-sub"
            className="text-[#555] max-w-[560px] mx-auto mb-10 sm:mb-12 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
          >
            ChatGPT, Google AI Overviews, Perplexity, and Gemini now recommend one to three businesses, not a list you scroll through. If you're not in that shortlist, most buyers never know you exist.
          </p>
          <div data-animate="hero-cta" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Link
              href="/ai-audit"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[16px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/book"
              className="text-[15px] font-semibold text-[#555] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
            >
              Book a Call →
            </Link>
          </div>
          <p className="text-[13px] text-[#aaa] tracking-wide">
            Serving regional and multi-location businesses nationwide
          </p>
        </div>

        {/* Hero image, full bleed below text */}
        <div className="px-4 sm:px-8 pb-0">
          <div className="max-w-[1280px] mx-auto relative rounded-3xl overflow-hidden bg-[#e2e8ed]" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/ai-visibility-hero.webp"
              alt="AI Visibility Platform showing business rankings across ChatGPT, Google AI Overviews, and Perplexity"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* ── AS SEEN IN ── */}
      <section className="bg-white border-b border-[#e8e8ed] py-10 px-6">
        <div className="max-w-[980px] mx-auto">
          <p className="text-center text-[11px] font-bold tracking-[0.22em] uppercase text-[#c0c0c0] mb-8">As Seen In</p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {pressLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                {...(logo.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={logo.name}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`object-contain max-h-16 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-0 motion-safe:transition-all duration-200${logo.imgClass ? ` ${logo.imgClass}` : ''}`}

                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERIFY US, "Try asking AI about us" ── */}
      <section className="bg-[#f5f5f7] px-6 py-10 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-center text-[13px] font-semibold text-[#888] mb-5 tracking-wide">
            We say we help businesses get recommended by AI. Verify it yourself.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'Ask ChatGPT', href: 'https://chatgpt.com/?q=Who+is+Shark+AI+Solutions+in+Wesley+Chapel+FL', icon: '✦' },
              { label: 'Ask Perplexity', href: 'https://www.perplexity.ai/search?q=Shark+AI+Solutions+Wesley+Chapel+Florida', icon: '✦' },
              { label: 'Ask Gemini', href: 'https://gemini.google.com/app?q=Shark+AI+Solutions+Wesley+Chapel', icon: '✦' },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#555] bg-white border border-[#e0e0e0] rounded-full px-5 py-2.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                <span className="text-[#18b5d8] text-[10px]">{p.icon}</span>
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE SHIFT, split layout with infographic ── */}
      <section data-scene="shift" className="bg-[#0a0a0a] px-6 py-24 sm:py-36 lg:py-44">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: text + stats */}
            <div>
              <h2
                data-animate="shift-title"
                className="text-white mb-6 font-semibold leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Search has changed.<br />Most businesses haven't.
              </h2>
              <p data-animate="shift-sub" className="text-white/55 text-[17px] leading-relaxed mb-12 max-w-[480px]">
                AI visibility is how well your business appears when AI platforms answer your customers' questions. Instead of ten results, they recommend one to three businesses. If you're not in that shortlist, you're invisible.
              </p>
              <div className="divide-y divide-white/10 border-t border-white/10">
                {stats.map((s) => (
                  <div key={s.v} data-animate="stat-card" className="flex items-baseline gap-7 py-6">
                    <p className="text-[2rem] sm:text-[2.25rem] font-bold text-[#18b5d8] tabular-nums shrink-0 w-16 sm:w-20">{s.v}</p>
                    <p className="text-[15px] text-white/55 leading-relaxed">
                      <span className="text-white font-semibold">{s.label} </span>
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI recommendation mockup */}
            <AiRecommendMockup />

          </div>
        </div>
      </section>

      {/* ── FOUND. TRUSTED. CHOSEN. ── */}
      <section data-scene="framework" className="bg-white px-6 py-24 sm:py-36 lg:py-44 border-t border-[#e8e8ed]">
        <div className="max-w-[1100px] mx-auto">

          <div className="text-center max-w-[640px] mx-auto mb-16 sm:mb-24">
            <h2
              data-animate="framework-title"
              className="text-[#0a0a0a] mb-5 font-semibold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Found. Trusted. Chosen.
            </h2>
            <p className="text-[#555] text-[18px] leading-relaxed">
              Every service we offer maps to one of three outcomes. All three have to work together for AI to recommend you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Found',
                labelClass: 'bg-[#18b5d8] text-white',
                body: 'AI knows exactly who you are and where you operate. Your name, address, services, and service area tell the same story on every platform it reads.',
                items: ['Listing accuracy across 50+ platforms', 'Structured data and schema markup', 'AI crawler access confirmed'],
                outcome: '96% of a chamber\'s member businesses went from invisible to cited across ChatGPT, Gemini, and Perplexity.',
              },
              {
                label: 'Trusted',
                labelClass: 'bg-[#0a0a0a] text-white',
                body: 'AI sees a business people trust. Reviews, responses, and reputation signals give the model the confidence to put your name in front of a buyer.',
                items: ['Review volume and recency', '24-hour response cadence', 'Reputation signals strengthened'],
                outcome: 'A franchise pilot location: 7 Google reviews to 89 in 90 days. 5.0 rating. Every review responded to within 24 hours.',
              },
              {
                label: 'Chosen',
                labelClass: 'border-2 border-[#18b5d8] text-[#18b5d8]',
                body: 'When a customer asks AI a specific question, your business has the answer. Not buried in marketing copy, front and center.',
                items: ['Answer-ready content structure', 'FAQ and entity definitions', 'Competitive gap analysis'],
                outcome: 'An HVAC company ranked #2 for "same day AC repair Wesley Chapel" on ChatGPT in 30 days. No paid ads.',
              },
            ].map((c) => (
              <div
                key={c.label}
                data-animate="framework-card"
                className="bg-[#f5f5f7] rounded-[22px] p-9 flex flex-col gap-6"
              >
                <span className={`inline-block text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full self-start ${c.labelClass}`}>
                  {c.label}
                </span>
                <p className="text-[#555] text-[16px] leading-relaxed flex-1">{c.body}</p>
                <ul className="space-y-3">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-[#333]">
                      <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] text-[#888] leading-relaxed border-t border-[#e8e8ed] pt-5 italic">{c.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS, split with infographic ── */}
      <section data-scene="steps" className="bg-[#0a0a0a] px-6 py-24 sm:py-36 lg:py-44 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: HVAC AI ranking before/after mockup */}
            <div className="order-last lg:order-first rounded-3xl overflow-hidden shadow-xl bg-[#0d1b2a]" style={{ aspectRatio: '3/2' }}>
              <HvacAiMockup />
            </div>

            {/* Right: steps */}
            <div>
              <h2
                data-animate="steps-title"
                className="text-white mb-12 font-semibold tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Up and running in days.
              </h2>
              <div className="space-y-8">
                {steps.map((s) => (
                  <div key={s.n} data-animate="step-card" className="flex gap-6 items-start">
                    <span className="text-[#18b5d8] text-[12px] font-bold tracking-[0.2em] uppercase shrink-0 mt-1.5 w-8">{s.n}</span>
                    <div>
                      <h3 className="text-[18px] font-semibold text-white mb-2">{s.title}</h3>
                      <p className="text-[15px] text-white/50 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESULTS, split with ranking image ── */}
      <section data-scene="results" className="bg-white px-6 py-24 sm:py-36 lg:py-44 border-t border-[#e8e8ed]">
        <div className="max-w-[1100px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: text */}
            <div>
              <h2
                data-animate="results-title"
                className="text-[#0a0a0a] mb-8 font-semibold tracking-tight leading-tight"
                style={{ fontSize: 'clamp(1.875rem, 3vw, 2.75rem)', textWrap: 'balance' } as React.CSSProperties}
              >
                Measured results.<br />Real clients.
              </h2>

              {/* Featured */}
              <div data-animate="result-card" className="bg-[#0a0a0a] rounded-[20px] p-8 mb-5">
                <span className="inline-block bg-[#18b5d8]/15 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">
                  Home Services
                </span>
                <p className="text-[24px] font-bold text-white leading-tight mb-3">
                  7M impressions. 225K engagements. One location. Mold remediation franchise pilot.
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Social AI + GBP management for a single pilot location before a full franchise rollout. Results tracked from day one.
                </p>
              </div>

              {/* Supporting */}
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r.result} data-animate="result-card" className="bg-[#f5f5f7] rounded-[16px] p-6 flex gap-4 items-start">
                    <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full shrink-0 mt-0.5">{r.tag}</span>
                    <div>
                      <p className="text-[16px] font-bold text-[#0a0a0a] mb-1">{r.result}</p>
                      <p className="text-[13px] text-[#555] leading-relaxed">{r.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/case-studies"
                  className="text-[14px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded-sm"
                >
                  Read the full case studies →
                </Link>
              </div>
            </div>

            {/* Right: metrics dashboard mockup */}
            <div className="sticky top-28">
              <MetricsDashboardMockup />
            </div>

          </div>
        </div>
      </section>

      {/* ── AI EMPLOYEES, centered with large agent image ── */}
      <section data-scene="employees" className="bg-[#f5f5f7] px-6 py-24 sm:py-36 lg:py-44 border-t border-[#e8e8ed]">
        <div className="max-w-[1100px] mx-auto">

          <div className="text-center max-w-[680px] mx-auto mb-14 sm:mb-20">
            <h2
              data-animate="employees-title"
              className="text-[#0a0a0a] mb-6 font-semibold tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Your business runs 24/7.<br />Your team shouldn't have to.
            </h2>
            <p className="text-[#555] text-[18px] leading-relaxed">
              Five AI employees handling lead capture, follow-up, reviews, CRM, and sales coaching, using your data, starting within the week.
            </p>
          </div>

          {/* Static 5-employee grid, Gemma centered */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Voice Receptionist', role: 'Call Handler',     initial: 'VR',  color: '#a855f7', tagline: 'Answers every call in your brand voice. No hold music. No missed leads.',             href: '/aiemployees#voice' },
              { name: 'Reputation Specialist', role: 'Review Manager', initial: 'RS',  color: '#d4a200', tagline: 'Monitors and responds to every Google and Facebook review automatically.',            href: '/aiemployees#reputation' },
              { name: 'Gemma',              role: 'Chat Receptionist', initial: 'G',   color: '#18b5d8', tagline: 'Captures and books every website visitor before they bounce to a competitor.',        href: '/aiemployees#gemma', featured: true },
              { name: 'AI CRM',             role: 'Lead Qualifier',    initial: 'CRM', color: '#0ea5e9', tagline: 'Runs multi-touch follow-up across email, SMS, and phone without any manual work.',   href: '/aiemployees#aicrm' },
              { name: 'AI Sales Coach',     role: 'Revenue AI',        initial: 'SC',  color: '#22c55e', tagline: 'Scores every call, fills your CRM, and delivers coaching notes automatically.',      href: '/aiemployees#sales-assistant' },
            ].map((emp) => (
              <Link
                key={emp.name}
                href={emp.href}
                className={`group rounded-[22px] p-6 flex flex-col gap-4 border motion-safe:transition-all duration-200 ${
                  emp.featured
                    ? 'bg-[#0a0a0a] border-transparent col-span-2 lg:col-span-1'
                    : 'bg-white border-[#e8e8ed] hover:border-[#18b5d8]'
                }`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-[13px] font-extrabold shrink-0"
                  style={{ backgroundColor: emp.color }}
                >
                  {emp.initial}
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: emp.color }}>
                    {emp.role}
                  </p>
                  <h3 className={`text-[16px] font-bold mb-2 leading-snug ${emp.featured ? 'text-white' : 'text-[#0a0a0a] group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150'}`}>
                    {emp.name}
                  </h3>
                  <p className={`text-[13px] leading-relaxed ${emp.featured ? 'text-white/55' : 'text-[#666]'}`}>
                    {emp.tagline}
                  </p>
                </div>
                <p className="text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: emp.color }}>
                  See how it works →
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/aiemployees"
              className="btn-press inline-block bg-[#0a0a0a] text-white text-[16px] font-semibold rounded-full px-8 py-4 hover:bg-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a0a0a] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Meet the full AI team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-white px-6 py-24 sm:py-36 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto text-center">
          <h2
            className="text-[#0a0a0a] mb-6 font-semibold tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            Built by people who have done the work.
          </h2>
          <p className="text-[#555] text-[18px] leading-relaxed mb-5">
            Shark AI Solutions is a Wesley Chapel–based AI visibility and automation firm. Our team has driven $1M+ revenue campaigns, ranked businesses #1 in competitive markets, and built AI infrastructure for regional operators from HVAC to legal to real estate.
          </p>
          <p className="text-[#555] text-[18px] leading-relaxed mb-12">
            We don't sell software. We build and manage the AI systems that get your business recommended, and we measure every outcome from day one.
          </p>

          {/* Team credential strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
            {[
              { name: 'Michelle', title: 'CEO & Managing Partner', credential: 'Client strategy, franchise partnerships, and business development. Leads every client relationship from kickoff through results.' },
              { name: 'Josh', title: 'CTO', credential: 'AI infrastructure, automation systems, and platform integrations. Builds the technical layer that makes AI visibility measurable.' },
              { name: 'Tiffany', title: 'COO', credential: 'Operations, delivery, and client success. Makes sure results are tracked and reported from day one.' },
            ].map((m) => (
              <div key={m.name} className="bg-[#f5f5f7] rounded-[16px] p-6">
                <div className="w-10 h-10 rounded-full bg-[#18b5d8]/15 flex items-center justify-center mb-4">
                  <span className="text-[13px] font-bold text-[#18b5d8]">{m.name[0]}</span>
                </div>
                <p className="text-[15px] font-semibold text-[#0a0a0a] mb-0.5">{m.name}</p>
                <p className="text-[12px] text-[#18b5d8] font-semibold mb-3">{m.title}</p>
                <p className="text-[13px] text-[#666] leading-relaxed">{m.credential}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="text-[15px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded-sm"
          >
            Meet the full team →
          </Link>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-[#f5f5f7] px-6 py-24 sm:py-36 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-[#0a0a0a] font-semibold tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 3vw, 2.5rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Real businesses. Real reviews.
            </h2>
          </div>
          {/* Static testimonials — always visible; widget augments when loaded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                quote: 'We went from being completely invisible on ChatGPT to showing up as a recommended contractor in our area within a month. The results speak for themselves.',
                name: 'Mark T.',
                role: 'Owner, Home Services',
                stars: 5,
              },
              {
                quote: 'Shark AI Solutions handled everything — our listings, reviews, and content. We didn\'t have to think about it. Our Google ranking and AI visibility both improved.',
                name: 'Sandra R.',
                role: 'Multi-location Franchise Owner',
                stars: 5,
              },
              {
                quote: 'The free audit showed us exactly where we were invisible across AI platforms. The fix was fast. Within 30 days we were being recommended by name on Perplexity.',
                name: 'James L.',
                role: 'Regional HVAC Operator',
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-[18px] p-7 border border-[#e8e8ed]">
                <div className="flex gap-0.5 mb-4" role="img" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#f59e0b] text-[13px]" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-[15px] text-[#333] leading-relaxed mb-5 overflow-wrap-anywhere">{t.quote}</p>
                <div>
                  <p className="text-[13px] font-semibold text-[#0a0a0a]">{t.name}</p>
                  <p className="text-[12px] text-[#888]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* @ts-ignore — verify CDN URL: cdn.apigateway.co/review-widget-client.[prod]/sdk.js (double-dot may be a typo) */}
          <div role="region" aria-label="Live customer reviews">
            <review-widget widget-id="widget-973a3aee-1eaa-41ad-b5f9-d7ef1bd85c85"></review-widget>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section data-scene="services" className="bg-white px-6 py-24 sm:py-36 border-t border-[#e8e8ed]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center max-w-[580px] mx-auto mb-14 sm:mb-20">
            <h2
              className="text-[#0a0a0a] mb-5 font-semibold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', textWrap: 'balance' } as React.CSSProperties}
            >
              Every service. One outcome.
            </h2>
            <p className="text-[#555] text-[18px] leading-relaxed">
              Whether you run one location or a hundred, the outcome is the same: AI recommends you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                data-animate="service-card"
                className="group bg-[#f5f5f7] rounded-[20px] p-8 border border-transparent hover:border-[#18b5d8] hover:bg-white motion-safe:transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                <h3 className="text-[18px] font-semibold text-[#0a0a0a] mb-3 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150">{s.title}</h3>
                <p className="text-[14px] text-[#666] leading-relaxed">{s.body}</p>
                <p className="mt-5 text-[13px] font-semibold text-[#18b5d8] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>

          {/* Free AI Audit — standalone callout */}
          <Link
            href="/ai-audit"
            data-animate="service-card"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#0a0a0a] rounded-[20px] p-8 border border-transparent hover:border-[#18b5d8] motion-safe:transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
          >
            <div className="flex-1">
              <span className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase bg-[#18b5d8]/15 text-[#18b5d8] px-3 py-1 rounded-full mb-3">
                No cost · No sales call
              </span>
              <h3 className="text-[20px] font-semibold text-white mb-2 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
                Free AI Audit
              </h3>
              <p className="text-[14px] text-white/55 leading-relaxed max-w-[560px]">
                Run your business through every major AI platform and see exactly where you appear, where you're invisible, and what's holding you back. Results in 24 hours.
              </p>
            </div>
            <span className="shrink-0 inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 group-hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 whitespace-nowrap">
              Get my free audit →
            </span>
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-scene="cta" className="bg-[#0a0a0a] py-28 sm:py-44 px-6 text-center border-t border-white/5">
        <div className="max-w-[600px] mx-auto relative z-10">
          <h2
            data-animate="cta-title"
            className="text-white mb-5 font-semibold tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', textWrap: 'balance' } as React.CSSProperties}
          >
            AI platforms are setting their recommendation lists now.
          </h2>
          <p data-animate="cta-sub" className="text-white/50 text-[18px] leading-relaxed mb-12 max-w-[480px] mx-auto">
            Find out where you stand before your competitor does. We run your business through every major AI platform and walk through what we find with you personally.
          </p>
          <div data-animate="cta-btn">
            <Link
              href="/ai-audit"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[18px] font-semibold rounded-full px-10 py-5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
