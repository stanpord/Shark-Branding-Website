import Link from "next/link";
import HackathonBanner from "@/components/HackathonBanner";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — split layout, dark left / visual right
      ══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] min-h-[100svh] flex items-center px-6 pt-20 pb-16">
        <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 xl:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#18b5d8] animate-pulse" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#18b5d8]">AI Business Consulting · Tampa Bay</span>
            </div>

            <h1 className="display-hero text-white mb-6 leading-[0.95]" style={{ textWrap: "balance" }}>
              Your customers
              <br />
              <span className="text-[#18b5d8]">ask AI first.</span>
              <br />
              Does AI send them to you?
            </h1>

            <p className="lead-airy text-white/50 max-w-[500px] mb-10" style={{ textWrap: "balance" }}>
              We make your business the one AI recommends — on ChatGPT, Google AI Overviews, Gemini, and Perplexity. No ads. Real results in 30 days.
            </p>

            {/* Quick proof */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {[
                "HVAC: #32 → #2 in 30 days",
                "Real Estate: #4 → #1",
                "Vending: #1 on ChatGPT",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] font-semibold text-white/70">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-report"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                Get Free Visibility Report
              </Link>
              <Link
                href="/case-studies"
                className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
              >
                See Real Results
              </Link>
            </div>
          </div>

          {/* Right — AI recommendation mockup */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 -m-8 rounded-[40px] bg-[#18b5d8]/8 blur-3xl" aria-hidden="true" />

              {/* Phone frame */}
              <div className="relative bg-[#07141a] border border-white/10 rounded-[24px] p-5 space-y-3">

                {/* Search bar */}
                <div className="bg-black/40 rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" stroke="#18b5d8" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="#18b5d8" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[13px] text-white/50">best HVAC company near me</span>
                </div>

                {/* AI response card */}
                <div className="bg-black/30 rounded-xl p-4 border border-[#18b5d8]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-[#18b5d8] flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <span className="text-[11px] font-bold text-[#18b5d8] uppercase tracking-widest">AI Overview</span>
                  </div>
                  <p className="text-[13px] text-white/70 leading-relaxed mb-3">
                    Based on verified reviews and local authority signals, <strong className="text-white">Tampa Bay HVAC Pro</strong> is consistently ranked as the top emergency AC repair service in the Wesley Chapel area&hellip;
                  </p>
                  <div className="bg-[#18b5d8]/10 border border-[#18b5d8]/20 rounded-lg px-3 py-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-semibold text-white">Tampa Bay HVAC Pro</p>
                      <p className="text-[11px] text-white/40">Same-day AC repair · Wesley Chapel</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[12px] text-[#18b5d8] font-bold">★ 4.9</p>
                      <p className="text-[10px] text-white/30">AI recommended</p>
                    </div>
                  </div>
                </div>

                {/* Second result faded */}
                <div className="bg-black/20 rounded-xl p-4 opacity-30">
                  <p className="text-[12px] text-white/50 leading-relaxed">Cool Air Solutions · Tampa, FL · ★ 4.2</p>
                </div>

                {/* Third faded */}
                <div className="bg-black/10 rounded-xl p-3 opacity-15">
                  <p className="text-[12px] text-white/40">Sunshine HVAC Services · ★ 3.8</p>
                </div>

                {/* Label */}
                <div className="pt-2 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#18b5d8]/50">This is what your customers see</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Stats ribbon ── */}
      <div className="bg-[#18b5d8] px-6 py-5">
        <div className="max-w-[980px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { v: "60%+",  label: "of searches show AI answers" },
            { v: "30d",   label: "average time to top results" },
            { v: "4",     label: "industries, all #1 or #2" },
            { v: "$0",    label: "in ads — purely organic" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-black leading-none mb-1">{s.v}</p>
              <p className="text-[11px] font-semibold text-black/60 uppercase tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Seen In — scrolling media logos ── */}
      <div className="bg-[#111111] py-8 overflow-hidden border-y border-white/5">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25 mb-6">Our Clients Seen In</p>
        <div
          className="flex min-w-max gap-14 whitespace-nowrap motion-safe:animate-[marquee_38s_linear_infinite]"
          aria-hidden="true"
        >
          {[
            { name: "NBC", style: "font-black" },
            { name: "ABC", style: "font-black" },
            { name: "CBS", style: "font-black" },
            { name: "FOX", style: "font-black" },
            { name: "The CW", style: "font-bold" },
            { name: "Telemundo", style: "font-bold italic" },
            { name: "The Morning Blend", style: "font-semibold" },
            { name: "Tampa Home Talk", style: "font-semibold" },
            { name: "102.5 The Bone", style: "font-bold" },
            { name: "The Business Journals", style: "font-semibold" },
            { name: "Creative Loafing Tampa Bay", style: "font-semibold" },
            { name: "Yahoo! News", style: "font-bold" },
            { name: "NBC", style: "font-black" },
            { name: "ABC", style: "font-black" },
            { name: "CBS", style: "font-black" },
            { name: "FOX", style: "font-black" },
            { name: "The CW", style: "font-bold" },
            { name: "Telemundo", style: "font-bold italic" },
            { name: "The Morning Blend", style: "font-semibold" },
            { name: "Tampa Home Talk", style: "font-semibold" },
            { name: "102.5 The Bone", style: "font-bold" },
            { name: "The Business Journals", style: "font-semibold" },
            { name: "Creative Loafing Tampa Bay", style: "font-semibold" },
            { name: "Yahoo! News", style: "font-bold" },
          ].map((logo, i) => (
            <span
              key={i}
              className={`text-[15px] tracking-wide text-white/40 uppercase ${logo.style}`}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hackathon banner ── */}
      <HackathonBanner />

      {/* ══════════════════════════════════════════
          THE SHIFT — problem statement
      ══════════════════════════════════════════ */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left — big stat */}
          <div>
            <p className="text-[clamp(5rem,14vw,9rem)] font-black leading-none tracking-tight text-[#0a0a0a]">60<span className="text-[#18b5d8]">%</span></p>
            <p className="text-[18px] font-semibold text-[#1d1d1f] mt-2 mb-4">
              of Google searches now show an AI-generated answer before any website link.
            </p>
            <p className="text-[14px] text-[#888] leading-relaxed">
              Source: Google I/O 2025 · AI Overviews deployed globally
            </p>
          </div>

          {/* Right — copy */}
          <div>
            <p className="text-[13px] font-semibold text-[#18b5d8] tracking-[0.2em] uppercase mb-5">The AI Shift</p>
            <p className="text-[20px] font-semibold text-[#0a0a0a] leading-snug mb-5" style={{ textWrap: "balance" }}>
              Your customers aren&rsquo;t scrolling Google anymore. They&rsquo;re asking AI — and AI is deciding who to recommend.
            </p>
            <p className="text-[16px] text-[#555] leading-relaxed mb-5">
              If AI can&rsquo;t find you, verify you, or trust you — it skips you entirely. It doesn&rsquo;t matter how good your website is, how long you&rsquo;ve been in business, or how many five-star reviews you have. If the signals aren&rsquo;t there, you don&rsquo;t exist in the conversation.
            </p>
            <p className="text-[16px] text-[#555] leading-relaxed">
              That&rsquo;s the gap we close. And we close it in under 30 days.
            </p>
            <div className="mt-8">
              <Link href="/resources/blog-seo-old-school-geo-ai-shift" className="text-[14px] font-semibold text-[#18b5d8] hover:underline">
                Why traditional SEO is no longer enough &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISIBILITY VS SELECTION — competing for a decision
      ══════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-center text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-5">The New Reality</p>
          <h2 className="display-lg text-[#0a0a0a] text-center mb-14 max-w-[700px] mx-auto" style={{ textWrap: "balance" }}>
            You&rsquo;re not competing for traffic. You&rsquo;re competing for <span className="text-[#18b5d8]">a decision.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Old game */}
            <div className="bg-white rounded-[20px] p-8 border border-[#e8e8ed]">
              <p className="text-[11px] font-bold text-[#7a7a7a] tracking-[0.18em] uppercase mb-4">Visibility — The old game</p>
              <ul className="space-y-3 mb-6">
                {["10+ options shown", "Endless scrolling", "Buyer in comparison mode"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-[#555]">
                    <span className="text-red-400 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-[#aaa] italic">If you&rsquo;re not in the top choices, you&rsquo;re not in the decision.</p>
            </div>

            {/* New reality */}
            <div className="bg-[#0a0a0a] rounded-[20px] p-8 border border-[#18b5d8]/20">
              <p className="text-[11px] font-bold text-[#18b5d8] tracking-[0.18em] uppercase mb-4">Selection — The new reality</p>
              <ul className="space-y-3 mb-6">
                {["1–3 options, pre-filtered by AI", "Instant trust established", "Buyer ready to act immediately"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-white/70">
                    <span className="text-[#18b5d8] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-[#18b5d8]/60 italic">Be the business AI chooses.</p>
            </div>
          </div>

          {/* 3 AI stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e8e8ed] rounded-[20px] overflow-hidden">
            {[
              { v: "44%",  label: "of consumers use AI to research local businesses", src: "HubSpot, 2024" },
              { v: "4.4×", label: "higher conversion from AI-driven recommendations vs. search", src: "BCG, 2024" },
              { v: "70%",  label: "of users trust AI-generated recommendations when deciding", src: "Edelman, 2024" },
            ].map((s) => (
              <div key={s.v} className="bg-white px-6 py-7 text-center">
                <p className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-[#18b5d8] leading-none mb-2">{s.v}</p>
                <p className="text-[13px] text-[#333] leading-relaxed mb-2">{s.label}</p>
                <p className="text-[11px] text-[#aaa]">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLIENT RESULTS — horizontal proof strip
      ══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-12 text-center">Documented Client Results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { industry: "HVAC",          stat: "#32→#2",  detail: "Same day AC repair", time: "30 days", color: "#18b5d8" },
              { industry: "Real Estate",   stat: "#4→#1",   detail: "Best realtor, Wesley Chapel", time: "30 days", color: "#4FD1A0" },
              { industry: "Smart Vending", stat: "#1",      detail: "ChatGPT, Gemini & Perplexity", time: "30 days", color: "#F9DB79" },
              { industry: "Chamber",       stat: "10×",     detail: "More AI citations", time: "30 days", color: "#F7555F" },
            ].map((r) => (
              <div key={r.industry} className="bg-[#07141a] px-6 py-8 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-4">{r.industry}</p>
                <p className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-none tracking-tight mb-2" style={{ color: r.color }}>{r.stat}</p>
                <p className="text-[13px] font-semibold text-white mb-1">{r.detail}</p>
                <p className="text-[11px] text-white/25 mt-auto pt-4">Result in {r.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies" className="text-[14px] font-semibold text-[#18b5d8] hover:underline">
              Read the full case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS — 3 steps
      ══════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] px-6 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">The Process</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              From invisible to recommended — in three steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px bg-gradient-to-r from-transparent via-[#18b5d8]/40 to-transparent" aria-hidden="true" />

            {[
              {
                n: "01",
                title: "We Audit Your AI Presence",
                body: "We run your business through every AI platform and search system to find every gap — citations, schema, listings, entity signals, and trust data.",
              },
              {
                n: "02",
                title: "We Fix Every Gap",
                body: "We correct, build, and configure exactly what AI needs to recognize your business as the most credible option in your market.",
              },
              {
                n: "03",
                title: "AI Starts Recommending You",
                body: "Your business appears in AI-generated answers organically — no ad spend. Clients typically see measurable movement within 7–14 days.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-[20px] px-7 py-8 relative">
                <div className="w-10 h-10 rounded-full bg-[#18b5d8]/10 border border-[#18b5d8]/30 flex items-center justify-center mb-6">
                  <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] font-bold">{step.n}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-[#0a0a0a] mb-3">{step.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#0a0a0a] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#18b5d8] motion-safe:transition-colors duration-150"
            >
              Start With a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — editorial layout, not a uniform grid
      ══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="mb-14">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">What We Build</p>
            <h2 className="display-lg text-white max-w-[560px]" style={{ textWrap: "balance" }}>
              AI solutions for every part of your business.
            </h2>
          </div>

          {/* Featured service — large */}
          <Link
            href="/services#ai-visibility"
            className="group block bg-[#07141a] rounded-[24px] p-10 border border-white/5 hover:border-[#18b5d8]/40 motion-safe:transition-colors duration-200 mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">01</span>
                  <span className="bg-[#18b5d8]/10 text-[#18b5d8] text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full border border-[#18b5d8]/20">Most Popular</span>
                </div>
                <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-white mb-4 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150" style={{ textWrap: "balance" }}>
                  AI Business Consulting &amp; Visibility
                </h3>
                <p className="text-[16px] text-white/50 max-w-[600px] leading-relaxed mb-6">
                  We make your business appear — and appear well — when ChatGPT, Perplexity, Google AI Overviews, and every major AI discovery platform answers questions your customers are asking right now.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Citation optimization", "Entity recognition", "Schema markup", "Review signals", "AI-ready content"].map((tag) => (
                    <span key={tag} className="text-[12px] text-white/40 border border-white/10 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="hidden lg:flex items-center gap-2 text-[#18b5d8] text-[14px] font-semibold shrink-0 mt-1">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Three smaller services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                n: "02",
                title: "AI Visibility Toolkit",
                body: "A complete, structured framework that fixes every visibility gap systematically.",
                href: "/services#toolkit",
              },
              {
                n: "03",
                title: "Workshops & Training",
                body: "Equip your team with the modern buyer discovery knowledge that changes how you compete.",
                href: "/services#workshops",
              },
              {
                n: "04",
                title: "Free Visibility Report",
                body: "Know exactly where you stand in 48 hours. No commitment, no sales pressure.",
                href: "/free-report",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-[#07141a] rounded-[20px] px-6 py-7 border border-white/5 hover:border-[#18b5d8]/30 motion-safe:transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-4">{s.n}</span>
                <h3 className="text-[17px] font-semibold text-white mb-2 group-hover:text-[#18b5d8] motion-safe:transition-colors duration-150">{s.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">{s.body}</p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-[#18b5d8] text-[12px] font-semibold">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIAL — full-width, dramatic
      ══════════════════════════════════════════ */}
      <section className="bg-white px-6 py-24 overflow-hidden relative">
        {/* Decorative quotemark */}
        <div className="absolute top-8 left-8 text-[14rem] font-black text-[#f0f0f5] leading-none select-none pointer-events-none" aria-hidden="true">&ldquo;</div>

        <div className="max-w-[800px] mx-auto relative">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-8">Client Story</p>
          <blockquote className="text-[clamp(1.3rem,2.8vw,2rem)] font-semibold text-[#0a0a0a] leading-relaxed mb-10" style={{ textWrap: "balance" }}>
            &ldquo;They completely transformed how our business shows up online. We&rsquo;re now showing up on AI search platforms, where before we were basically invisible.&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-[#18b5d8]" aria-hidden="true" />
            <div>
              <p className="text-[16px] font-semibold text-[#1d1d1f]">Jonathan Tuttle</p>
              <p className="text-[13px] text-[#7a7a7a]">Drywall Company Owner &mdash; Pinellas County, FL</p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/case-studies" className="text-[14px] font-semibold text-[#18b5d8] hover:underline">
              See documented client results &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          URGENCY — first-mover section
      ══════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              heading: "The window is open now",
              body: "Most local businesses haven't touched AI visibility at all. Right now, being found in AI answers is a genuine competitive advantage — not table stakes.",
            },
            {
              heading: "Results in days, not months",
              body: "Every client on this page saw measurable movement in under 30 days. This isn't a long game — it's a systematic fix with a fast feedback loop.",
            },
            {
              heading: "Zero ad spend required",
              body: "AI recommendations are earned through authority, not bought through ads. Once you're in, you're in — without a monthly ad budget keeping you there.",
            },
          ].map((c) => (
            <div key={c.heading} className="bg-white rounded-[16px] px-7 py-7 shadow-sm">
              <div className="w-8 h-[3px] bg-[#18b5d8] mb-5 rounded-full" />
              <p className="text-[16px] font-bold text-[#0a0a0a] mb-3">{c.heading}</p>
              <p className="text-[14px] text-[#555] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[620px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Find out now — free</p>
          <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
            Is your business invisible to AI?
          </h2>
          <p className="lead-airy text-white/50 mb-4" style={{ textWrap: "balance" }}>
            We&rsquo;ll audit your business across every AI platform and show you exactly where you&rsquo;re missing. Delivered in 48 hours. No commitment, no sales pressure.
          </p>
          <p className="text-[13px] text-white/25 mb-12">Free for Tampa Bay businesses. Always.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[18px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free Visibility Report
            </Link>
            <Link
              href="/contact"
              className="btn-press inline-block text-white text-[18px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
