import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Visibility vs. SEO | Shark AI Solutions",
  description:
    "You already pay for SEO. Here's what it doesn't cover, and why your business is still invisible on ChatGPT, Google AI Overviews, and Gemini.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/vs/seo",
  },
  openGraph: {
    title: "AI Visibility vs. Traditional SEO",
    description:
      "SEO optimizes your website for Google's algorithm. AI visibility optimizes your entire business presence for what AI systems use to recommend you. They're not the same thing.",
    type: "article",
    images: [{ url: "https://sharkbrandingsolutions.com/logo.webp", width: 1200, height: 630, alt: "AI Visibility vs SEO | Shark AI Solutions" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Visibility Consulting vs. Traditional SEO",
  description:
    "A detailed comparison of AI visibility consulting vs traditional SEO for local businesses. SEO and AI visibility solve different problems, here's what each one covers.",
  author: {
    "@type": "Person",
    "@id": "https://sharkbrandingsolutions.com/about#michelle",
    name: "Michelle Stanaland",
    url: "https://sharkbrandingsolutions.com/about#michelle",
    jobTitle: "Managing Partner and Founder",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://sharkbrandingsolutions.com/#organization",
    name: "Shark AI Solutions",
    url: "https://sharkbrandingsolutions.com",
    logo: {
      "@type": "ImageObject",
      url: "https://sharkbrandingsolutions.com/logo.webp",
    },
  },
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I keep my SEO agency and add AI visibility consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is the most common setup for our clients. SEO and AI visibility work on different layers. Your SEO agency handles your website rankings. We handle the signals AI platforms use to recommend your business: citations, entity data, Google Business Profile, review signals, and structured data outside your website. They don't conflict.",
      },
    },
    {
      "@type": "Question",
      name: "Why can't my SEO agency handle AI visibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO agencies are trained to optimize for Google's classic ranking algorithm, keywords, backlinks, page speed, and on-page content. AI search platforms like ChatGPT, Perplexity, and Google AI Overviews pull from a completely different set of signals: citation consistency, entity recognition, review sentiment, structured data, and business authority across the entire web, most of which has nothing to do with your website. Most SEO agencies haven't retooled for this yet.",
      },
    },
    {
      "@type": "Question",
      name: "Does SEO help at all with AI Overviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partially. Google AI Overviews do use the Google index, so strong organic rankings help. But AI Overviews also weight structured data, FAQ schema, entity authority, and citation signals that traditional SEO doesn't specifically target. And for ChatGPT, Perplexity, and Gemini, those pull from Bing, their own crawlers, and blended indices where Google rankings are mostly irrelevant.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need access to my website to do AI visibility work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, and this surprises most clients. The majority of AI visibility work is off-website: Google Business Profile optimization, citation cleanup across directories, review strategy, entity data consistency, and trust signal building. Schema markup is the one area that benefits from website access, but it can also be implemented via Google Tag Manager without touching your CMS. If your SEO agency controls your website, that doesn't block AI visibility work.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI visibility replace my need for SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not entirely, they serve different purposes. SEO builds your organic Google rankings over 6-12 months. AI visibility builds your presence in AI-generated recommendations in 30-60 days. Most established local businesses benefit from both. If you have to choose one based on where your customers are actually looking right now, AI visibility is moving faster, 60% of Google searches now show an AI-generated answer before any website link (Google I/O, 2025).",
      },
    },
  ],
};

const comparisonRows = [
  {
    feature: "Primary goal",
    ai:   "Get recommended by AI platforms (ChatGPT, Gemini, Google AI Overviews, Perplexity)",
    trad: "Rank higher on Google's organic search results",
  },
  {
    feature: "Website access required",
    ai:   "No, most work is off-website (GBP, citations, reviews, entity data)",
    trad: "Yes, requires CMS access to optimize pages, meta tags, and content",
  },
  {
    feature: "Where optimization happens",
    ai:   "Google Business Profile, citation directories, review platforms, structured data, entity signals across the web",
    trad: "Website pages, title tags, content, internal links, backlinks, page speed",
  },
  {
    feature: "Time to first results",
    ai:   "7–30 days for measurable AI visibility movement",
    trad: "3–12 months for meaningful organic ranking changes",
  },
  {
    feature: "Works for ChatGPT & Perplexity",
    ai:   "Yes, built specifically for AI-driven discovery across all major platforms",
    trad: "Partially, Google SEO helps with AI Overviews but not ChatGPT or Perplexity",
  },
  {
    feature: "What signals get fixed",
    ai:   "Citation consistency, review velocity, entity recognition, GBP completeness, schema, trust signals",
    trad: "Keyword targeting, backlink profile, Core Web Vitals, on-page content",
  },
  {
    feature: "Results when you stop paying",
    ai:   "Off-site signals persist, GBP data, citations, and reviews remain",
    trad: "Rankings slowly decay without continued link building and content",
  },
  {
    feature: "Monthly ad spend required",
    ai:   "None",
    trad: "None (but results are slow without it)",
  },
  {
    feature: "Reporting",
    ai:   "AI recommendation position, citation growth, GBP performance, what AI says about you",
    trad: "Keyword rankings, organic traffic, domain authority, click-through rates",
  },
  {
    feature: "Starting price",
    ai:   "From $997/mo (self-guided toolkit) or $2,000/mo (done for you)",
    trad: "Typically $1,000–$3,000+/mo retainer",
  },
];

const verdicts = [
  {
    heading: "Keep your SEO if…",
    dark: false,
    points: [
      "You're actively building organic Google rankings over 12+ months",
      "You have a content strategy and want to grow domain authority",
      "Your business depends heavily on traditional Google search traffic",
      "You're in a market where AI search hasn't yet displaced Google searches",
    ],
  },
  {
    heading: "Add AI visibility if…",
    dark: true,
    points: [
      "Your customers are asking ChatGPT or Gemini who to hire in your industry",
      "You want to show up in AI answers, not just Google's blue links",
      "Your SEO agency can't explain why you're not appearing in AI search results",
      "You don't have access to your website and need results without waiting on your web person",
    ],
  },
];

const faqs = [
  {
    q: "Can I keep my SEO agency and add AI visibility?",
    a: "Yes, and this is the most common setup for our clients. SEO and AI visibility work on different layers. Your SEO agency handles your website rankings. We handle the signals AI platforms use to recommend your business: citations, entity data, Google Business Profile, review signals, and structured data outside your website. They don't conflict.",
  },
  {
    q: "Why can't my SEO agency handle this?",
    a: "SEO agencies are trained to optimize for Google's classic ranking algorithm, keywords, backlinks, page speed, and on-page content. AI search platforms pull from a completely different set of signals: citation consistency, entity recognition, review sentiment, and business authority across the entire web, most of which has nothing to do with your website. Most SEO agencies haven't retooled for this yet.",
  },
  {
    q: "Does SEO help at all with AI search?",
    a: "Partially. Google AI Overviews do use the Google index, so strong rankings help. But for ChatGPT, Perplexity, and Gemini, those pull from Bing, their own crawlers, and blended indices where Google rankings are mostly irrelevant. AI visibility optimization covers all of them.",
  },
  {
    q: "Do you need access to my website?",
    a: "No, and this surprises most clients. The majority of AI visibility work is off-website: Google Business Profile, citation cleanup, review strategy, entity data, and trust signals. Schema markup benefits from site access, but can be added via Google Tag Manager without touching your CMS. If your SEO agency controls your website, that doesn't block this work.",
  },
  {
    q: "Will this replace SEO?",
    a: "Not entirely, they serve different purposes. SEO builds your Google rankings over 6-12 months. AI visibility builds your presence in AI recommendations in 30-60 days. Most established local businesses benefit from both. If you have to choose based on where customers are looking right now: 60% of Google searches now show an AI-generated answer before any website link (Google I/O, 2025).",
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

export default function VsSeoPage() {
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
          <nav className="flex items-center justify-center gap-2 text-[12px] text-[#aaa] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#18b5d8] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#555]">AI Visibility vs SEO</span>
          </nav>

          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">
            The Honest Comparison
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI Visibility Consulting
            <br />
            <span className="text-[#18b5d8]">vs.</span>
            <br />
            Traditional SEO
          </h1>
          <p className="lead-airy text-[#333] max-w-[580px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            SEO optimizes your website for Google&rsquo;s ranking algorithm. AI visibility optimizes your entire
            business presence for what AI systems use to recommend you. They&rsquo;re not the same thing , 
            and your SEO agency almost certainly isn&rsquo;t covering both.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-4">
            {[
              "No website access required",
              "Results in 30 days, not 12 months",
              "Works where SEO doesn't reach",
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
            Last updated June 2026 · Shark AI Solutions is an AI visibility consulting firm.{" "}
            <span className="text-[#ccc]">We&rsquo;re transparent about who we are.</span>
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
              Your SEO is working. Your AI visibility probably isn&rsquo;t.
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-4">
              You can rank #1 on Google and still be completely invisible when someone asks ChatGPT, Perplexity, or Gemini who to hire in your industry. Those AI systems don&rsquo;t read your page rankings. They read your citations, your reviews, your entity data, and dozens of signals your SEO agency isn&rsquo;t touching.
            </p>
            <p className="text-[15px] text-white/60 leading-relaxed">
              60% of Google searches now show an AI-generated answer before any website link (Google I/O, 2025). That answer didn&rsquo;t come from your SEO. It came from trust signals built across the entire web, most of which have nothing to do with your website.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "60%",  label: "of searches show AI answers first",         src: "Google I/O, 2025" },
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
            <div className="grid grid-cols-3 border-b border-[#e8e8ed] bg-[#f5f5f7]">
              <div className="px-5 py-4 text-[11px] font-bold tracking-[0.15em] uppercase text-[#7a7a7a]">
                What we&rsquo;re comparing
              </div>
              <div className="px-5 py-4 text-center border-l border-[#e8e8ed] bg-[#18b5d8]/5">
                <p className="text-[13px] font-bold text-[#18b5d8]">AI Visibility Consulting</p>
                <p className="text-[11px] text-[#555] mt-0.5">e.g. Shark AI Solutions</p>
              </div>
              <div className="px-5 py-4 text-center border-l border-[#e8e8ed]">
                <p className="text-[13px] font-bold text-[#0a0a0a]">Traditional SEO Agency</p>
                <p className="text-[11px] text-[#888] mt-0.5">Standard SEO retainer</p>
              </div>
            </div>

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
            Pricing and feature data current as of June 2026. SEO agency ranges based on published industry surveys and public rate cards.
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
              <strong className="text-[#0a0a0a]">The honest answer:</strong> You probably need both, but they do different things. SEO builds your Google rankings over time. AI visibility builds your presence in AI-generated recommendations now. The mistake most businesses make is assuming one covers the other. It doesn&rsquo;t. Your SEO agency is optimizing for a search algorithm that&rsquo;s no longer the only game in town.
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
            We don&rsquo;t do SEO. That&rsquo;s intentional.
          </h2>
          <p className="text-[15px] text-[#555] leading-relaxed mb-6" style={{ textWrap: "balance" }}>
            We don&rsquo;t build backlinks, optimize title tags, or run keyword campaigns. If that&rsquo;s what your business needs, keep your SEO agency, they&rsquo;re the right tool for that job.
          </p>
          <p className="text-[15px] text-[#555] leading-relaxed" style={{ textWrap: "balance" }}>
            What we do, exclusively, is make your business the one AI platforms recommend when someone in your market asks a question your business should answer. That focus is why our clients see results in 30 days. SEO and AI visibility can run in parallel. Most of our clients do exactly that.
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

      {/* ── Related ── */}
      <section className="bg-[#f5f5f7] px-6 py-14 border-t border-[#e8e8ed]">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6 text-center">
            Related Reading
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Why traditional SEO isn't enough anymore", href: "/resources/blog-seo-old-school-geo-ai-shift" },
              { label: "Most of your AI visibility isn't on your website", href: "/resources/blog-ai-visibility-not-your-website" },
              { label: "AI Visibility vs. Traditional Marketing Agency", href: "/vs/marketing-agency" },
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
            listings, and show you exactly where you&rsquo;re missing. Free, in 48 hours, no commitment.
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
