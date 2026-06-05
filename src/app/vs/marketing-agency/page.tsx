import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Visibility Consulting vs Traditional Marketing Agency | Shark Branding",
  description:
    "Traditional marketing agencies optimize for traffic and ads. AI visibility consulting gets your business recommended by ChatGPT, Gemini, and Google AI Overviews — without paying for ads. See the full comparison.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/vs/marketing-agency",
  },
  openGraph: {
    title: "AI Visibility Consulting vs Traditional Marketing Agency",
    description:
      "See why local businesses are replacing or supplementing their marketing agency with AI visibility consulting — and getting measurable results in 30 days.",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Visibility Consulting vs Traditional Marketing Agency",
  description:
    "A detailed comparison of AI visibility consulting vs traditional marketing agencies for local businesses.",
  author: {
    "@type": "Person",
    "@id": "https://sharkbrandingsolutions.com/#founder",
    name: "Michelle Stanaland",
    url: "https://sharkbrandingsolutions.com/about",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://sharkbrandingsolutions.com/#organization",
    name: "Shark Branding Solutions",
    url: "https://sharkbrandingsolutions.com",
    logo: {
      "@type": "ImageObject",
      url: "https://sharkbrandingsolutions.com/logo.webp",
    },
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I run both AI visibility consulting and a traditional agency at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and most clients do. AI visibility consulting works on a layer that most agencies don't touch at all: the signals AI platforms use to decide who to recommend. It doesn't replace social, email, or ad campaigns. It makes sure you show up when someone asks AI which business to hire.",
      },
    },
    {
      "@type": "Question",
      name: "Why can't my current marketing agency do AI visibility optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most agencies are optimizing for Google's classic search algorithm — backlinks, keywords, page speed. AI search engines pull from different signals: structured citations, entity data, review sentiment, schema markup, and content written in a way AI can parse and repeat. Most agencies haven't retooled for this yet.",
      },
    },
    {
      "@type": "Question",
      name: "What if I already spend a lot on Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid ads and AI visibility solve different problems. Ads buy you clicks on traditional search results. AI visibility earns you a mention when someone asks ChatGPT or triggers a Google AI Overview — and those AI-generated answers don't have ad slots. They're recommendation-based. That's the gap we fill.",
      },
    },
    {
      "@type": "Question",
      name: "How fast do results from AI visibility optimization actually happen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our HVAC client moved from position #32 to #2 across four high-intent keywords in 30 days. That's an outlier in speed, but measurable movement in 30–60 days is typical. Traditional SEO retainers often quote 6–12 months before significant movement.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI visibility consulting only for Tampa Bay businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Done For You and consulting services are currently focused on Tampa Bay area businesses. The Self-Guided Toolkit framework works for any local service business in any market — the AI visibility signals are consistent regardless of location.",
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: "Primary goal",
    ai:   "Get your business recommended by AI platforms (ChatGPT, Gemini, Google AI Overviews)",
    trad: "Drive traffic via ads, social, and traditional SEO",
  },
  {
    feature: "Monthly ad spend required",
    ai:   "None — results are earned, not paid for",
    trad: "Typically $500–$5,000+/mo in ad budget on top of agency fees",
  },
  {
    feature: "Time to first results",
    ai:   "7–30 days for measurable visibility movement",
    trad: "3–6 months for SEO; paid ads faster but stop when billing stops",
  },
  {
    feature: "What gets optimized",
    ai:   "Citations, entity signals, schema, AI-readable content, GBP, trust data",
    trad: "Website pages, keywords, backlinks, social profiles, ad campaigns",
  },
  {
    feature: "Works when AI search grows",
    ai:   "Yes — built specifically for AI-driven discovery",
    trad: "Partially — most agencies are catching up on AI search",
  },
  {
    feature: "Results when you stop paying",
    ai:   "Signals persist — organic authority remains",
    trad: "Ad traffic stops immediately; SEO may persist but decays",
  },
  {
    feature: "Specialization",
    ai:   "AI search, GEO (Generative Engine Optimization), local trust signals",
    trad: "General digital marketing — social, email, PPC, SEO",
  },
  {
    feature: "Reporting",
    ai:   "Monthly AI visibility report: position changes, citation growth, what AI says about you",
    trad: "Impressions, clicks, CPCs, traffic — metrics that don't reflect AI search",
  },
  {
    feature: "Local business fit",
    ai:   "Purpose-built for local businesses competing in AI answers",
    trad: "Varies — many agencies are generalists, not local-specialist",
  },
  {
    feature: "Starting price",
    ai:   "From $497/mo (self-guided) or $2,000/mo (done for you)",
    trad: "Typically $1,500–$5,000+/mo retainer, plus ad spend",
  },
];

const verdicts = [
  {
    heading: "Choose a traditional agency if…",
    dark: false,
    points: [
      "You need brand awareness campaigns across social and display",
      "You have a dedicated ad budget and want paid traffic now",
      "You're building a content/email marketing engine",
      "You need creative production (video, photography, copywriting at scale)",
    ],
  },
  {
    heading: "Choose AI visibility consulting if…",
    dark: true,
    points: [
      "Your customers are asking ChatGPT, Gemini, or Google AI what to buy or who to hire",
      "You want to show up in AI answers without paying for every click",
      "Your current agency can't explain why you're not in AI search results",
      "You want fast, measurable movement — not a 6-month content calendar",
    ],
  },
];

const faqs = [
  {
    q: "Can I run both at the same time?",
    a: "Yes — and most clients do. AI visibility consulting works on a layer that most agencies don't touch at all: the signals AI platforms use to decide who to recommend. It doesn't replace social, email, or ad campaigns. It makes sure you show up when someone asks AI which business to hire.",
  },
  {
    q: "Why can't my current agency do this?",
    a: "Most agencies are optimizing for Google's classic search algorithm — backlinks, keywords, page speed. AI search engines pull from different signals: structured citations, entity data, review sentiment, schema markup, and content written in a way AI can parse and repeat. Most agencies haven't retooled for this yet.",
  },
  {
    q: "What if I already spend a lot on Google Ads?",
    a: "Paid ads and AI visibility solve different problems. Ads buy you clicks on traditional search results. AI visibility earns you a mention when someone asks ChatGPT or triggers a Google AI Overview — and those AI-generated answers don't have ad slots. They're recommendation-based. That's the gap we fill.",
  },
  {
    q: "How fast do results actually happen?",
    a: "Our HVAC client moved from position #32 to #2 across four high-intent keywords in 30 days. That's an outlier in speed, but measurable movement in 30–60 days is typical. Traditional SEO retainers often quote 6–12 months before significant movement.",
  },
  {
    q: "Is this just for Tampa Bay businesses?",
    a: "Our Done For You and consulting services are currently focused on Tampa Bay area businesses. The Self-Guided Toolkit framework works for any local service business in any market — the AI visibility signals are consistent regardless of location.",
  },
];

function CheckMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="rgba(24,181,216,0.15)" />
      <polyline points="8 12 11 15 16 9" stroke="#18b5d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function VsMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-white min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 border-b border-[#e8e8ed]">
        <div className="max-w-[760px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[12px] text-[#aaa] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#18b5d8] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#555]">AI Visibility vs Marketing Agency</span>
          </nav>

          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
            The Honest Comparison
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI Visibility Consulting
            <br />
            <span className="text-[#18b5d8]">vs.</span>
            <br />
            Traditional Marketing Agency
          </h1>
          <p className="lead-airy text-[#333] max-w-[580px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            Traditional agencies optimize for traffic, clicks, and impressions. AI visibility consulting
            gets your business recommended by ChatGPT, Gemini, and Google AI Overviews — the place
            your customers are actually asking their questions now.
          </p>

          {/* Quick verdict pills */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-4">
            {[
              "Results in 30 days, not 6 months",
              "No ad spend required",
              "Works where agencies don't operate",
            ].map((pill) => (
              <span
                key={pill}
                className="flex items-center gap-2 bg-[#f5f5f7] border border-[#e8e8ed] rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#1d1d1f]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {pill}
              </span>
            ))}
          </div>

          <p className="text-[12px] text-[#aaa] mt-4">
            Last updated June 2026 · Shark Branding Solutions is an AI visibility consulting firm.{" "}
            <span className="text-[#ccc]">We're transparent about who we are.</span>
          </p>
        </div>
      </section>

      {/* ── The shift ── */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-5">
              Why this comparison matters now
            </p>
            <h2 className="text-[28px] font-semibold text-white mb-5 leading-snug" style={{ textWrap: "balance" }}>
              Your customers stopped scrolling. They started asking.
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-4">
              60% of Google searches now show an AI-generated answer before any website link. ChatGPT
              handles over 100 million queries per day. Gemini is embedded in Android and Google Workspace.
            </p>
            <p className="text-[15px] text-white/60 leading-relaxed">
              None of those AI answers come from paid ads. They come from trust signals — citations,
              structured data, verified business information, and content AI can read and repeat. That&rsquo;s
              a completely different discipline from what most agencies do.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "60%",  label: "of searches show AI answers first",     src: "Google I/O 2025" },
              { v: "4.4×", label: "higher conversion from AI recommendations", src: "BCG, 2024" },
              { v: "44%",  label: "of consumers use AI to research local businesses", src: "HubSpot, 2024" },
              { v: "70%",  label: "of users trust AI-generated recommendations", src: "Edelman, 2024" },
            ].map((s) => (
              <div key={s.v} className="bg-[#07141a] rounded-[16px] px-5 py-5 border border-white/8 text-center">
                <p className="text-[clamp(1.4rem,2.5vw,2rem)] font-black text-[#18b5d8] leading-none mb-1">{s.v}</p>
                <p className="text-[11px] text-white/50 leading-snug mb-1">{s.label}</p>
                <p className="text-[10px] text-white/20">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-y border-[#e8e8ed]">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">
              Side-by-Side Breakdown
            </p>
            <h2 className="text-[28px] font-semibold text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              What&rsquo;s actually different
            </h2>
          </div>

          <div className="rounded-[20px] overflow-hidden border border-[#e8e8ed] bg-white">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[#e8e8ed] bg-[#f5f5f7]">
              <div className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase text-[#7a7a7a]">
                What we&rsquo;re comparing
              </div>
              <div className="px-5 py-4 text-center border-l border-[#e8e8ed] bg-[#18b5d8]/5">
                <p className="text-[13px] font-bold text-[#18b5d8]">AI Visibility Consulting</p>
                <p className="text-[11px] text-[#555] mt-0.5">e.g. Shark Branding Solutions</p>
              </div>
              <div className="px-5 py-4 text-center border-l border-[#e8e8ed]">
                <p className="text-[13px] font-bold text-[#0a0a0a]">Traditional Marketing Agency</p>
                <p className="text-[11px] text-[#888] mt-0.5">General digital marketing firm</p>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-[#e8e8ed] last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                }`}
              >
                <div className="px-5 py-4 text-[13px] font-semibold text-[#1d1d1f] flex items-start">
                  {row.feature}
                </div>
                <div className="px-5 py-4 text-[13px] text-[#333] leading-relaxed border-l border-[#e8e8ed] bg-[#18b5d8]/[0.03]">
                  {row.ai}
                </div>
                <div className="px-5 py-4 text-[13px] text-[#666] leading-relaxed border-l border-[#e8e8ed]">
                  {row.trad}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-[#aaa] mt-4">
            Pricing and feature data current as of June 2026. Traditional agency ranges based on published industry surveys and public rate cards.
          </p>
        </div>
      </section>

      {/* ── Verdict cards ── */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">
              Our Honest Take
            </p>
            <h2 className="text-[28px] font-semibold text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Which one is right for your business?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verdicts.map((v) => (
              <div
                key={v.heading}
                className={`rounded-[20px] p-8 ${
                  v.dark
                    ? "bg-[#0a0a0a] border border-[#18b5d8]/20"
                    : "bg-[#f5f5f7] border border-[#e8e8ed]"
                }`}
              >
                <h3
                  className={`text-[18px] font-semibold mb-6 leading-snug ${
                    v.dark ? "text-white" : "text-[#0a0a0a]"
                  }`}
                >
                  {v.heading}
                </h3>
                <ul className="space-y-3">
                  {v.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <CheckMark />
                      <span
                        className={`text-[14px] leading-snug ${
                          v.dark ? "text-white/65" : "text-[#444]"
                        }`}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#f5f5f7] border border-[#e8e8ed] rounded-[16px] px-7 py-5">
            <p className="text-[15px] text-[#333] leading-relaxed">
              <strong className="text-[#0a0a0a]">The honest answer:</strong> They solve different
              problems. If your marketing agency is managing your social presence, running ad campaigns,
              and building brand awareness — that&rsquo;s valuable. But if they can&rsquo;t tell you why
              you&rsquo;re not appearing in ChatGPT or Google AI answers when a customer asks who to hire
              in your industry, that&rsquo;s the gap AI visibility consulting fills.
            </p>
          </div>
        </div>
      </section>

      {/* ── Proof strip ── */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-12 text-center">
            What AI visibility results actually look like
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* HVAC result */}
            <div className="bg-[#07141a] rounded-[20px] p-8 border border-white/8">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/30 mb-5">Tampa Bay HVAC Company</p>
              <div className="space-y-2 mb-6">
                {[
                  ["Same day AC repair", "#32", "#2"],
                  ["Air conditioning service near me", "#31", "#2"],
                  ["HVAC near me", "#27", "#2"],
                  ["Emergency AC repair", "#21", "#3"],
                ].map(([kw, before, after]) => (
                  <div key={kw} className="flex items-center justify-between text-[13px]">
                    <span className="text-white/50">{kw}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-white/30 line-through">{before}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#18b5d8" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span className="font-bold text-[#18b5d8]">{after}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-white/30">30 days · No paid ads · Done For You plan</p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-[#18b5d8] hover:underline"
              >
                Read the full case study
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>

            {/* Testimonial */}
            <div className="bg-[#07141a] rounded-[20px] p-8 border border-white/8 flex flex-col justify-between">
              <div>
                <div className="text-[3rem] font-black text-white/10 leading-none mb-4" aria-hidden="true">&ldquo;</div>
                <blockquote className="text-[16px] font-semibold text-white leading-relaxed mb-6" style={{ textWrap: "balance" }}>
                  They completely transformed how our business shows up online. We&rsquo;re now showing
                  up on AI search platforms, where before we were basically invisible.
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#18b5d8]" aria-hidden="true" />
                <div>
                  <p className="text-[14px] font-semibold text-white">Jonathan Tuttle</p>
                  <p className="text-[12px] text-white/40">Drywall Company Owner, Pinellas County, FL</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── What we don't do ── */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-y border-[#e8e8ed]">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">
            Full Transparency
          </p>
          <h2 className="text-[26px] font-semibold text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            What we don&rsquo;t do (and why that&rsquo;s a good thing)
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed mb-8" style={{ textWrap: "balance" }}>
            We don&rsquo;t run Facebook ads. We don&rsquo;t manage your social media calendar. We
            don&rsquo;t produce brand videos or build email sequences. If that&rsquo;s what you need, a
            full-service agency is the right call.
          </p>
          <p className="text-[15px] text-[#555] leading-relaxed" style={{ textWrap: "balance" }}>
            What we do — exclusively — is make your business the one AI platforms recommend when someone
            in your market asks a question your business should answer. That focus is why our clients see
            results in 30 days instead of 6 months.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">FAQ</p>
            <h2 className="display-lg text-[#0a0a0a]">Common questions</h2>
          </div>
          <div className="divide-y divide-[#e8e8ed]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[17px] font-semibold text-[#1d1d1f] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">
                  {faq.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-[#7a7a7a] group-open:rotate-180 motion-safe:transition-transform duration-200"
                  >
                    <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-4 body-copy text-[#333333] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related comparisons ── */}
      <section className="bg-[#f5f5f7] px-6 py-14 border-t border-[#e8e8ed]">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6 text-center">
            Related Reading
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                label: "Why traditional SEO isn't enough anymore",
                href: "/resources/blog-seo-old-school-geo-ai-shift",
              },
              {
                label: "How AI search has changed the buyer journey",
                href: "/resources/blog-ai-funnel-chatgpt-gemini-path-to-purchase",
              },
              {
                label: "See real client results",
                href: "/case-studies",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-[#e8e8ed] rounded-[14px] px-5 py-4 text-[14px] font-semibold text-[#0a0a0a] hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 flex items-start gap-3"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[620px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">
            Find out where you stand
          </p>
          <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
            Is AI already recommending your competitors instead of you?
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            We&rsquo;ll audit your business across ChatGPT, Google AI Overviews, Gemini, and local
            listings — and show you exactly where you&rsquo;re missing. Free, in 48 hours, no commitment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/plans"
              className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
