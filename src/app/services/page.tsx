import type { Metadata } from "next";
import Link from "next/link";

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
      {/* ── Hero ── */}
      <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Services
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Every service built around
            <br />
            <span className="text-[#18b5d8]">one outcome.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-14" style={{ textWrap: "balance" }}>
            Your business getting found, trusted, and chosen by humans and AI alike.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[13px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                {s.title}
              </a>
            ))}
          </div>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </section>

      {/* ── Google vs AI — decision context ── */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Shift That Changed Everything</p>
            <h2 className="display-lg text-white max-w-[700px] mx-auto" style={{ textWrap: "balance" }}>
              Google shows options. AI makes the decision faster.
            </h2>
            <p className="text-[16px] text-white/50 mt-5 max-w-[560px] mx-auto">
              The way people search is changing. AI is compressing the journey from search to decision, and businesses that show up get chosen.
            </p>
          </div>

          {/* Google vs AI comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            <div className="bg-[#111] rounded-[20px] p-8 border border-white/8">
              <span className="inline-block bg-[#1d1d1f] text-white/60 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6">Google (Then)</span>
              <p className="text-[18px] font-bold text-white/70 mb-3">A list of options to explore.</p>
              <ul className="space-y-2 text-[14px] text-white/40">
                <li>10+ results to compare</li>
                <li>Endless scrolling</li>
                <li>Buyer in comparison mode</li>
              </ul>
            </div>
            <div className="bg-[#07141a] rounded-[20px] p-8 border border-[#18b5d8]/25">
              <span className="inline-block bg-[#18b5d8] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full mb-6">AI (Now)</span>
              <p className="text-[18px] font-bold text-white mb-3">A short list of trusted recommendations.</p>
              <ul className="space-y-2 text-[14px] text-white/70">
                <li className="flex items-center gap-2"><span className="text-[#18b5d8]">✓</span> 1–3 options, pre-filtered</li>
                <li className="flex items-center gap-2"><span className="text-[#18b5d8]">✓</span> Instant trust signals</li>
                <li className="flex items-center gap-2"><span className="text-[#18b5d8]">✓</span> Buyer ready to act immediately</li>
              </ul>
              <p className="text-[13px] text-white/40 mt-5 italic">AI doesn&rsquo;t show everything. It recommends what deserves to be seen.</p>
            </div>
          </div>

          {/* 3 stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { v: "44%",  label: "of consumers", body: "now use AI tools to research products, services, and local businesses.", src: "HubSpot, 2024" },
              { v: "4.4×", label: "higher conversion", body: "from AI-driven recommendations compared to traditional search.", src: "BCG, 2024" },
              { v: "70%",  label: "of users", body: "trust AI-generated recommendations when making decisions.", src: "Edelman, 2024" },
            ].map((s) => (
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

      {/* ── Buyers Don't Read — 3 Decision Filters ── */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How Buyers Actually Choose</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Buyers don&rsquo;t read. They filter.
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
              <div key={f.n} className="bg-[#f5f5f7] rounded-[20px] p-7">
                <div className="w-9 h-9 rounded-full bg-[#18b5d8] flex items-center justify-center mb-5">
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

          <div className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 text-center">
            <p className="text-[16px] text-white/70">
              Buyers form an opinion in under <strong className="text-white">3 seconds.</strong> If you don&rsquo;t pass all three filters,{" "}
              <strong className="text-white">they move on.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={s.dark ? "bg-[#0a0a0a] px-6 py-24 border-t border-white/5" : "bg-white px-6 py-24 border-t border-[#e8e8ed]"}
        >
          <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-8">
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
            <div className="lg:pt-[72px]">
              <ul className="space-y-4 mb-10">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
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
            </div>
          </div>
        </section>
      ))}

      {/* ── How This Was Possible in 30 Days ── */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Why Our Clients See Results in 30 Days</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Most agencies take months. We compressed it into 30 days.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[560px] mx-auto">
              We built a system for speed, alignment, and results, not slow, manual, disconnected approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Traditional */}
            <div className="bg-white rounded-[20px] p-8 border border-[#e8e8ed]">
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

            {/* Our approach */}
            <div className="bg-[#0a0a0a] rounded-[20px] p-8 border border-[#18b5d8]/20">
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

          <div className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 text-center mt-4">
            <p className="text-[16px] text-white/70">
              This isn&rsquo;t about working harder.{" "}
              <strong className="text-white">It&rsquo;s about using the right system.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── DIY vs AI Visibility Toolkit ── */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How to Move Forward</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Two ways to get visible. One is harder.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[560px] mx-auto">
              The right path depends on your time, resources, and how fast you want results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* DIY — reframed as The Hard Way */}
            <div className="bg-[#f5f5f7] rounded-[20px] p-8 border border-[#e8e8ed]">
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

            {/* Toolkit */}
            <div className="bg-[#0a0a0a] rounded-[20px] p-8 border border-[#18b5d8]/20">
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

          {/* Chamber note */}
          <div className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex-1">
              <p className="text-[14px] text-white/60">
                Through our partnership with the Chamber, members have direct access to the AI Visibility Toolkit.{" "}
                <span className="text-white">For any business outside the chamber, this is still something you can implement, either manually or with the same tools.</span>
              </p>
            </div>
            <p className="text-[12px] font-semibold text-[#18b5d8] shrink-0 uppercase tracking-[0.14em]">The difference isn&rsquo;t whether this works. It&rsquo;s how you choose to implement it.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Not sure where to start?</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Start with a free AI Audit.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Zero commitment. Maximum clarity.
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
  );
}
