import type { Metadata } from "next";
import Link from "next/link";
import ServicesAnimations from "@/components/ServicesAnimations";

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/services",
      url: "https://sharkbrandingsolutions.com/services",
      name: "AI Business Services — Shark AI Solutions",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
    },
    {
      "@type": "ItemList",
      "@id": "https://sharkbrandingsolutions.com/services#list",
      name: "AI Business Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "AI Business Consulting",
            description: "We optimize your business to appear when ChatGPT, Perplexity, Google AI Overviews, and other AI discovery platforms answer questions your customers are asking.",
            url: "https://sharkbrandingsolutions.com/services#ai-visibility",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "AI Visibility Toolkit",
            description: "A structured framework that audits your AI presence, builds the authority signals that get you cited, and tracks your mentions across every major AI platform.",
            url: "https://sharkbrandingsolutions.com/services#toolkit",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "AI Employees",
            description: "Five AI employees — chat receptionist, voice receptionist, reputation specialist, CRM, and sales coach — deployed live within one week.",
            url: "https://sharkbrandingsolutions.com/aiemployees",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Workshops and Training",
            description: "Live regional AI hackathons and training sessions for Tampa Bay business owners and their teams.",
            url: "https://sharkbrandingsolutions.com/services#workshops",
            provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "AI Business Services — Shark AI Solutions",
  description:
    "AI Business Consulting, AI Toolkit, Workshops, and Free AI Audits for Tampa Bay businesses.",
};

const services = [
  {
    n: "01", id: "ai-visibility", eyebrow: "Core Service", dark: true,
    title: "AI Business Consulting",
    description: "The way buyers find businesses has fundamentally shifted. Before they ever visit a website, they ask AI. We optimize your business to appear, and appear well, when ChatGPT, Perplexity, Google AI Overviews, and other discovery platforms answer questions your customers are asking right now.",
    bullets: [
      "Full audit of your AI and search presence",
      "Structured optimization of trust signals and listings",
      "Structured data signals that help ChatGPT, Gemini, and Google AI identify your business",
      "Ongoing monitoring across AI discovery channels — we act before you notice a drop",
      "Competitive gap analysis across your local market",
    ],
    cta: "Start Consulting", href: "/contact",
  },
  {
    n: "02", id: "toolkit", eyebrow: "Managed System", dark: false,
    title: "AI Visibility Toolkit",
    description: "A complete, proven framework for businesses ready to stop guessing and start winning. We fix your visibility gaps systematically: search signals, trust indicators, listing accuracy, and AI readiness, with two engagement levels to match where you are.",
    bullets: [
      "Complete AI and search visibility framework",
      "Initial changes visible in 7–14 days",
      "Measurable ranking movement within 30 days",
      "Monthly reporting and strategy calls",
      "Two engagement levels: Self-Guided ($497/mo) or Done For You ($2,000/mo)",
    ],
    cta: "Explore the Toolkit", href: "/contact",
  },
  {
    n: "03", id: "workshops", eyebrow: "Education", dark: true,
    title: "Workshops & Training",
    description: "Modern buyer behavior has changed. Most businesses haven't caught up. Our workshops arm your team and chamber organizations with practical knowledge on how buyers discover, evaluate, and choose businesses in the age of AI. Engaging, actionable, and immediately applicable.",
    bullets: [
      "Tailored for business teams and chamber groups",
      "Half-day and full-day formats available",
      "Covers AI search, local visibility, and trust signals",
      "Includes hands-on exercises and take-home materials",
      "Available in-person (Tampa Bay) and virtually",
    ],
    cta: "Book a Workshop", href: "/contact",
  },
  {
    n: "04", id: "report", eyebrow: "Free, No Strings Attached", dark: false,
    title: "Free AI Audit",
    description: "Before you spend a dollar on marketing, know exactly where you stand. We assess how your business appears across search, maps, reviews, and AI platforms, and deliver a clear, honest report in 48 hours. No sales pressure. Just the truth about your visibility.",
    bullets: [
      "Search and map listing analysis",
      "Review and trust signal audit",
      "AI platform appearance check",
      "Actionable priority list delivered in 48 hours",
      "100% free, forever, no catch",
    ],
    cta: "Get My Free AI Audit", href: "/free-report",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesAnimations />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      {/* ── Hero ── */}
      <section
        data-scene="services-hero"
        className="bg-white sm:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20"
      >
        <div className="max-w-[720px] mx-auto">
          <p data-animate="hero-label" className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-8">
            Services
          </p>
          <h1
            data-animate="hero-title"
            className="display-hero text-[#0a0a0a] mb-6"
            style={{ textWrap: "balance" }}
          >
            Every service built around one outcome.
          </h1>
          <p
            data-animate="hero-sub"
            className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-8 sm:mb-14"
            style={{ textWrap: "balance" }}
          >
            Your business getting found, trusted, and chosen by humans and AI alike.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-animate="hero-pill"
                className="text-[13px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                {s.title}
              </a>
            ))}
          </div>
          <div data-animate="hero-cta">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── Google vs AI ── */}
      <section data-scene="services-shift" className="bg-[#0a0a0a] px-6 py-12 sm:py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Shift That Changed Everything</p>
            <h2
              data-animate="shift-title"
              className="display-lg text-white max-w-[700px] mx-auto"
              style={{ textWrap: "balance" }}
            >
              Google shows options. AI makes the decision faster.
            </h2>
            <p data-animate="shift-sub" className="text-[16px] text-white/50 mt-5 max-w-[560px] mx-auto">
              The way people search is changing. AI is compressing the journey from search to decision, and businesses that show up get chosen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 sm:mb-14">
            <div data-animate="shift-card" className="bg-[#111] rounded-[20px] p-8 border border-white/8">
              <span className="inline-block bg-[#1d1d1f] text-white/60 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6">Google (Then)</span>
              <p className="text-[18px] font-bold text-white/70 mb-3">A list of options to explore.</p>
              <ul className="space-y-2 text-[14px] text-white/40">
                <li>10+ results to compare</li>
                <li>Endless scrolling</li>
                <li>Buyer in comparison mode</li>
              </ul>
            </div>
            <div data-animate="shift-card" className="bg-[#07141a] rounded-[20px] p-8 border border-[#18b5d8]/25">
              <span className="inline-block bg-[#18b5d8] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6">AI (Now)</span>
              <p className="text-[18px] font-bold text-white mb-3">A short list of trusted recommendations.</p>
              <ul className="space-y-2 text-[14px] text-white/70">
                <li className="flex items-center gap-2"><span className="text-[#18b5d8]">✓</span> 1–3 options, pre-filtered</li>
                <li className="flex items-center gap-2"><span className="text-[#18b5d8]">✓</span> Instant trust signals</li>
                <li className="flex items-center gap-2"><span className="text-[#18b5d8]">✓</span> Buyer ready to act immediately</li>
              </ul>
              <p className="text-[13px] text-white/40 mt-5 italic">AI doesn't show everything. It recommends what deserves to be seen.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { v: "44%",  label: "of consumers", body: "now use AI tools to research products, services, and local businesses.", src: "HubSpot, 2024" },
              { v: "4.4×", label: "higher conversion", body: "from AI-driven recommendations compared to traditional search.", src: "BCG, 2024" },
              { v: "70%",  label: "of users", body: "trust AI-generated recommendations when making decisions.", src: "Edelman, 2024" },
            ].map((s) => (
              <div key={s.v} data-animate="shift-stat" className="bg-[#111] px-7 py-8 text-center">
                <p data-count className="text-[clamp(2rem,4vw,3rem)] font-black text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[14px] font-semibold text-white mb-2">{s.label}</p>
                <p className="text-[13px] text-white/45 leading-relaxed">{s.body}</p>
                <p className="text-[11px] text-white/20 mt-3">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buyer Decision Filters ── */}
      <section data-scene="services-filters" className="bg-white px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How Buyers Actually Choose</p>
            <h2
              data-animate="filters-title"
              className="display-lg text-[#0a0a0a]"
              style={{ textWrap: "balance" }}
            >
              Buyers don't read. They filter.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[540px] mx-auto">
              In seconds, buyers run your business through three subconscious filters. Pass them all, or lose the click.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                n: "1",
                heading: "Are they legit?",
                sub: '"Do they look real?"',
                body: "They look for consistent information, a professional presence, and clear business details.",
                stat: "73%",
                statLabel: "more engagement from accurate, consistent listings.",
              },
              {
                n: "2",
                heading: "Can I trust them?",
                sub: '"What are others saying?"',
                body: "They rely on reviews, recency, and reputation to feel confident before reaching out.",
                stat: "88%",
                statLabel: "of consumers trust online reviews as much as personal recommendations.",
              },
              {
                n: "3",
                heading: "Can they help me?",
                sub: '"Do they solve my problem?"',
                body: "They look for clear services, relevant messaging, and proof of expertise.",
                stat: "200%+",
                statLabel: "higher conversion for businesses with strong, recent reviews.",
              },
            ].map((f) => (
              <div key={f.n} data-animate="filter-card" className="bg-[#f5f5f7] rounded-[20px] p-7">
                <div className="size-9 rounded-full bg-[#18b5d8] flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-[13px]">{f.n}</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] mb-1">{f.heading}</h3>
                <p className="text-[13px] text-[#18b5d8] font-semibold mb-4">{f.sub}</p>
                <p className="text-[14px] text-[#555] leading-relaxed mb-5">{f.body}</p>
                <div className="border-t border-[#e8e8ed] pt-4">
                  <p className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-black text-[#18b5d8] leading-none mb-1">{f.stat}</p>
                  <p className="text-[12px] text-[#7a7a7a] leading-relaxed">{f.statLabel}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-animate="filters-bar" className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 text-center">
            <p className="text-[16px] text-white/70">
              Buyers form an opinion in under <strong className="text-white">3 seconds.</strong> If you don't pass all three filters,{" "}
              <strong className="text-white">they move on.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Individual Services ── */}
      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          data-scene={`service-${s.n}`}
          className={s.dark ? "bg-[#0a0a0a] px-6 py-14 sm:py-24 border-t border-white/5" : "bg-white px-6 py-14 sm:py-24 border-t border-[#e8e8ed]"}
        >
          <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div data-animate="service-left">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">{s.n}</span>
                <span className={`w-px h-4 ${s.dark ? "bg-white/20" : "bg-[#1d1d1f]/15"}`} aria-hidden="true" />
                <span className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${s.dark ? "text-white/50" : "text-[#1d1d1f]/50"}`}>{s.eyebrow}</span>
              </div>
              <h2 className={`display-lg mb-6 ${s.dark ? "text-white" : "text-[#0a0a0a]"}`} style={{ textWrap: "balance" }}>
                {s.title}
              </h2>
              <p className={`body-copy leading-relaxed ${s.dark ? "text-white/60" : "text-[#333333]"}`}>
                {s.description}
              </p>
            </div>
            {/* Right */}
            <div data-animate="service-right" className="lg:pt-[72px]">
              <ul className="space-y-4 mb-10">
                {s.bullets.map((b) => (
                  <li key={b} data-animate="service-bullet" className="flex items-start gap-3">
                    <span className="text-[#18b5d8] font-bold leading-none mt-1 shrink-0" aria-hidden="true">✓</span>
                    <span className={`body-copy ${s.dark ? "text-white/70" : "text-[#333333]"}`}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                {s.cta}
              </Link>
              {s.id === 'ai-visibility' && (
                <Link
                  href="/ai-visibility-consulting"
                  className="mt-4 flex items-center gap-1.5 text-[14px] font-semibold text-[#18b5d8] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
                >
                  Deep dive: our full AI visibility consulting approach →
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── 30 Days comparison ── */}
      <section data-scene="services-compare" className="bg-[#f5f5f7] px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Why Our Clients See Results in 30 Days</p>
            <h2
              data-animate="compare-title"
              className="display-lg text-[#0a0a0a]"
              style={{ textWrap: "balance" }}
            >
              Most agencies take months. We compressed it into 30 days.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[560px] mx-auto">
              We built a system for speed, alignment, and results, not slow, manual, disconnected approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-animate="compare-left" className="bg-white rounded-[20px] p-8 border border-[#e8e8ed]">
              <span className="inline-block bg-[#1d1d1f] text-white text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-6">The Traditional Approach</span>
              <p className="text-[17px] font-bold text-[#1d1d1f] mb-5">Slow, manual, and disconnected.</p>
              <ul className="space-y-3">
                {[
                  "3–6 months to see meaningful movement (sometimes longer)",
                  "Manual work across multiple disconnected platforms",
                  "Disconnected systems that don't share data",
                  "Slow implementation with gaps and delays",
                  "Manual approach can take 6–12+ months when done inconsistently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#555] leading-relaxed">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div data-animate="compare-right" className="bg-[#0a0a0a] rounded-[20px] p-8 border border-[#18b5d8]/20">
              <span className="inline-block bg-[#18b5d8] text-white text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mb-6">Our Approach</span>
              <p className="text-[17px] font-bold text-white mb-5">Fast, intelligent, and fully aligned.</p>
              <ul className="space-y-3">
                {[
                  { title: "AI Visibility Toolkit", body: "Our proprietary system that drives faster visibility and trust." },
                  { title: "AI-Powered Code", body: "Helps search engines understand your business instantly." },
                  { title: "Listing & Consistency Manager", body: "Across 50+ platforms to eliminate gaps." },
                  { title: "Review & Trust Signals Strengthened", body: "To build credibility that converts." },
                  { title: "Continuous Updates, Not One-Time Fixes", body: "We adapt as the algorithms change." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-[14px] leading-relaxed">
                    <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                    <span>
                      <strong className="text-white">{item.title}</strong>
                      <span className="text-white/50">: {item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-animate="compare-bar" className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 text-center mt-4">
            <p className="text-[16px] text-white/70">
              This isn't about working harder.{" "}
              <strong className="text-white">It's about using the right system.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── DIY vs Toolkit ── */}
      <section data-scene="services-compare" className="bg-white px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How to Move Forward</p>
            <h2
              data-animate="compare-title"
              className="display-lg text-[#0a0a0a]"
              style={{ textWrap: "balance" }}
            >
              Two ways to get visible. One is harder.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[560px] mx-auto">
              The right path depends on your time, resources, and how fast you want results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div data-animate="compare-left" className="bg-[#f5f5f7] rounded-[20px] p-8 border border-[#e8e8ed]">
              <p className="text-[11px] font-bold text-[#7a7a7a] tracking-[0.18em] uppercase mb-3">The Hard Way</p>
              <p className="text-[18px] font-bold text-[#0a0a0a] mb-2">Build it yourself, platform by platform.</p>
              <p className="text-[14px] text-[#555] mb-6">You can build AI visibility manually — but it requires consistent time across every platform, every month.</p>
              <ul className="space-y-4">
                {[
                  { label: "Manage Listings Manually", body: "Update your business info across dozens of directories — and keep them aligned as things change." },
                  { label: "Build Reviews Consistently", body: "Earn new reviews every month, respond to all of them, and track your reputation manually." },
                  { label: "Optimize Content Yourself", body: "Keep your website and listings clear, accurate, and AI-friendly without guidance on what to prioritize." },
                  { label: "Do It All Again Next Month", body: "AI visibility isn't a one-time task. It requires ongoing updates, monitoring, and adjustments." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <div>
                      <p className="text-[14px] font-semibold text-[#0a0a0a]">{item.label}</p>
                      <p className="text-[13px] text-[#7a7a7a]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-white rounded-[12px] px-5 py-4 border border-[#e8e8ed]">
                <p className="text-[13px] text-[#555]">Most business owners start here. Most eventually stop — because running a business is already a full-time job.</p>
              </div>
            </div>

            <div data-animate="compare-right" className="bg-[#0a0a0a] rounded-[20px] p-8 border border-[#18b5d8]/20">
              <p className="text-[11px] font-bold text-[#18b5d8] tracking-[0.18em] uppercase mb-3">Use the Tools We Use</p>
              <p className="text-[18px] font-bold text-white mb-2">The same system our team uses. Now in your hands.</p>
              <p className="text-[14px] text-white/60 mb-6">Our AI Visibility Toolkit makes it faster, easier, and more effective to stay visible everywhere.</p>
              <ul className="space-y-4">
                {[
                  { label: "Everything in One Place", body: "Listings, reviews, content, social, and AI insights, all managed from a single dashboard." },
                  { label: "Built-in Consistency", body: "We keep your information accurate and aligned across the entire internet." },
                  { label: "Save Time. Get Results Faster.", body: "Automate the tedious work and focus on what moves the needle." },
                  { label: "See What AI Sees", body: "Real-time insights into how AI platforms are interpreting your business, and how to improve it." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-[14px] font-semibold text-white">{item.label}</p>
                      <p className="text-[13px] text-white/50">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-[#07141a] rounded-[12px] px-5 py-4 border border-[#18b5d8]/20">
                <p className="text-[13px] text-[#18b5d8] font-semibold">Same system. Smarter way. Better visibility, faster.</p>
              </div>
            </div>
          </div>

          <div data-animate="compare-bar" className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-1">
              <p className="text-[14px] text-white/60">
                Through our partnership with the Chamber, members have direct access to the AI Visibility Toolkit.{" "}
                <span className="text-white">For any business outside the chamber, this is still something you can implement, either manually or with the same tools.</span>
              </p>
            </div>
            <p className="text-[12px] font-semibold text-[#18b5d8] shrink-0 uppercase tracking-[0.14em]">The difference isn't whether this works. It's how you choose to implement it.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section data-scene="services-faq" className="bg-[#f5f5f7] px-6 py-12 sm:py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Common Questions</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Everything you need to know.
            </h2>
          </div>

          <dl className="space-y-3">
            {[
              {
                q: "What exactly is AI visibility, and why does it matter for my business?",
                a: "AI visibility is how well your business appears when AI platforms like ChatGPT, Google AI Overviews, Perplexity, and Gemini answer questions your customers are asking. Instead of showing a list of ten results, these platforms recommend one to three businesses. If your business isn't in that shortlist, you're invisible to buyers who never see the traditional search results at all.",
              },
              {
                q: "What is GEO, and how is it different from SEO?",
                a: "GEO stands for Generative Engine Optimization. Traditional SEO helps your business rank in a list of Google results. GEO helps AI platforms recognize your business as a credible, trustworthy answer to a specific question. SEO gets you on the list. GEO gets you recommended. Both matter, but GEO is the layer most businesses are missing entirely.",
              },
              {
                q: "Which AI platforms do you optimize for?",
                a: "We optimize for the platforms your customers actually use: Google AI Overviews, ChatGPT, Perplexity, Gemini, and Microsoft Copilot. Each platform uses a different index and ranking logic. Our process covers all three major index families — Google, Bing, and independent crawlers — so you're not invisible on any of them.",
              },
              {
                q: "How fast will I see results?",
                a: "Most clients see initial movement in 7 to 14 days. Measurable ranking changes typically appear within 30 days. Speed depends on how many visibility gaps exist at the start and how quickly we can push corrected signals across platforms. We track progress monthly and share transparent reporting at every stage.",
              },
              {
                q: "Do I need a website to get started?",
                a: "No. A significant portion of AI visibility comes from signals outside your website — Google Business Profile, directory listings, reviews, structured citations, and how consistently your business information appears across the internet. We work with what you have and build from there.",
              },
              {
                q: "What industries do you work with?",
                a: "We work primarily with local service businesses in the Tampa Bay area, including home services, real estate, healthcare, professional services, restaurants, and retail. We also work with chambers of commerce and business associations looking to improve visibility for their members. If your customers use Google or AI to find businesses like yours, we can help.",
              },
              {
                q: "What's included in the Free AI Audit?",
                a: "The Free AI Audit covers how your business appears across search, maps, reviews, and AI platforms. We assess listing accuracy, trust signals, review presence, and AI platform readability, then deliver a prioritized action report within 48 hours. There's no sales pitch attached — just a clear picture of where you stand and what to fix first.",
              },
              {
                q: "What's the difference between the Self-Guided and Done For You Toolkit options?",
                a: "The Self-Guided plan ($497/month) gives you access to our AI Visibility Toolkit dashboard, tools, and framework so your team can execute the work. The Done For You plan ($2,000/month) means our team handles everything — listings, reviews, content updates, monitoring, and monthly strategy calls. Both include the same proven framework. The difference is who does the work.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                data-animate="faq-item"
                className="group bg-white rounded-[16px] border border-[#e8e8ed] overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none select-none">
                  <span className="text-[15px] font-semibold text-[#0a0a0a] leading-snug">{q}</span>
                  <span
                    className="shrink-0 size-6 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#18b5d8] font-bold text-[14px] group-open:rotate-45 motion-safe:transition-transform duration-200"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-7 pb-6 text-[14px] text-[#555] leading-relaxed border-t border-[#e8e8ed] pt-4 mt-0">
                  {a}
                </p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Comparison links ── */}
      <section className="bg-white px-6 py-10 border-t border-[#e8e8ed] text-center">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[13px] text-[#7a7a7a] mb-5">Weighing your options?</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/vs/marketing-agency" className="text-[14px] font-semibold text-[#1d1d1f] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
              AI Visibility vs. Traditional Marketing Agency →
            </Link>
            <Link href="/vs/salesforce" className="text-[14px] font-semibold text-[#1d1d1f] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
              AI Employees vs. Salesforce AI Agents →
            </Link>
            <Link href="/vs/seo" className="text-[14px] font-semibold text-[#1d1d1f] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
              AI Visibility vs. Traditional SEO →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-scene="services-cta" className="bg-[#0a0a0a] py-16 sm:py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p data-animate="cta-label" className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4 sm:mb-6">Not sure where to start?</p>
          <h2 data-animate="cta-title" className="display-lg text-white mb-4 sm:mb-6" style={{ textWrap: "balance" }}>
            Start with a free AI Audit.
          </h2>
          <p data-animate="cta-sub" className="lead-airy text-white/50 mb-8 sm:mb-12">
            Zero commitment. Maximum clarity.
          </p>
          <div data-animate="cta-btn">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
