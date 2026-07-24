import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Search Optimization | Tampa Bay | Shark AI Solutions",
  description:
    "AI search optimization for Tampa Bay businesses. Get found when buyers search on ChatGPT, Gemini, Perplexity, and Google AI Overviews. Wesley Chapel AI search agency.",
  alternates: { canonical: "https://shark-ai-solutions.com/ai-search-optimization" },
  openGraph: {
    title: "AI Search Optimization | Tampa Bay | Shark AI Solutions",
    description:
      "AI search optimization for Tampa Bay businesses. Be the business AI recommends when buyers search on ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    url: "https://shark-ai-solutions.com/ai-search-optimization",
    type: "website",
    images: [{ url: "https://shark-ai-solutions.com/logo.webp", width: 1200, height: 630, alt: "AI Search Optimization Tampa Bay | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shark-ai-solutions.com" },
    { "@type": "ListItem", position: 2, name: "AI Search Optimization", item: "https://shark-ai-solutions.com/ai-search-optimization" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Search Optimization",
  description:
    "AI search optimization services for local businesses in Tampa Bay, FL. We optimize your business presence across all AI-powered search platforms including ChatGPT, Google AI Overviews, Gemini, Perplexity, and Microsoft Copilot.",
  url: "https://shark-ai-solutions.com/ai-search-optimization",
  provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Tampa" },
    { "@type": "City", name: "Wesley Chapel" },
    { "@type": "City", name: "Lutz" },
    { "@type": "City", name: "Land O Lakes" },
  ],
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI search optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI search optimization is the practice of making your business visible and citable across AI-powered search platforms: ChatGPT, Google AI Overviews, Gemini, Perplexity, and Microsoft Copilot. It covers content structuring, entity consistency, schema markup, citation building, and AI crawler access, the signals these platforms use to decide which businesses to recommend.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI search platforms should I optimize for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five major AI search platforms are Google AI Overviews (uses Google index), Gemini (uses Google index), ChatGPT Browse (uses Bing index), Microsoft Copilot (uses Bing index), and Perplexity (uses Google, Bing, and Brave). A complete AI search optimization strategy covers all three index families: Google, Bing, and Brave.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI search different from traditional Google search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional Google search returns a ranked list of links. AI search generates a single answer and cites one to three sources. The buyer never sees the rest of the results. This means the stakes are higher: ranking #4 in Google gets traffic; ranking #4 in AI search gets nothing. AI search optimization is about being in that top position, not just ranking somewhere on the page.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if AI search is sending my business traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Overviews show up directly in Google Search Console as a traffic source. For ChatGPT and Perplexity, direct traffic from these platforms appears in your analytics but is often underreported because many AI answers do not result in a click at all. The best measurement is monthly AI visibility testing: running constrained queries across platforms and tracking citation frequency.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is AI search optimization?",
    a: "AI search optimization is the practice of making your business visible and citable across AI-powered search platforms: ChatGPT, Google AI Overviews, Gemini, Perplexity, and Microsoft Copilot. It covers content structuring, entity consistency, schema markup, citation building, and AI crawler access, the signals these platforms use to decide which businesses to recommend.",
  },
  {
    q: "Which AI search platforms should I optimize for?",
    a: "The five major AI search platforms are Google AI Overviews (uses Google index), Gemini (uses Google index), ChatGPT Browse (uses Bing index), Microsoft Copilot (uses Bing index), and Perplexity (uses Google, Bing, and Brave). A complete AI search optimization strategy covers all three index families: Google, Bing, and Brave.",
  },
  {
    q: "How is AI search different from traditional Google search?",
    a: "Traditional Google search returns a ranked list of links. AI search generates a single answer and cites one to three sources. The buyer never sees the rest of the results. This means the stakes are higher: ranking #4 in Google gets traffic; ranking #4 in AI search gets nothing. AI search optimization is about being in that top position, not just ranking somewhere on the page.",
  },
  {
    q: "How do I know if AI search is sending my business traffic?",
    a: "AI Overviews show up directly in Google Search Console as a traffic source. For ChatGPT and Perplexity, direct traffic from these platforms appears in your analytics but is often underreported because many AI answers do not result in a click at all. The best measurement is monthly AI visibility testing: running constrained queries across platforms and tracking citation frequency.",
  },
  {
    q: "Does AI search optimization replace SEO?",
    a: "No. AI search optimization and traditional SEO are complementary. Google's organic index still matters because Google AI Overviews and Gemini both draw from it. Bing's index matters for ChatGPT and Copilot. AI search optimization adds the content structure, entity signals, and citation authority that traditional SEO alone does not cover.",
  },
];

const platforms = [
  {
    name: "Google AI Overviews",
    index: "Google index",
    share: "60%+ of searches",
    note: "Appears above organic results on over 60% of Google searches. Draws from the same index as Google organic, but weights structured data and content extractability more heavily.",
  },
  {
    name: "Gemini",
    index: "Google index",
    share: "200M+ monthly users",
    note: "Google's AI assistant. Uses the Google index and Google Knowledge Graph. A well-optimized Google Business Profile and schema markup directly improve Gemini recommendations.",
  },
  {
    name: "ChatGPT",
    index: "Bing + training data",
    share: "180M+ monthly users",
    note: "Uses Bing for live Browse queries and its own training data for base knowledge. Bing Webmaster Tools verification and Bing index coverage are critical for ChatGPT visibility.",
  },
  {
    name: "Perplexity",
    index: "Google + Bing + Brave",
    share: "15M+ monthly users",
    note: "Pulls from all three major index families simultaneously. A business well-indexed on Google and Bing with a Brave Search submission has the highest Perplexity citation probability.",
  },
  {
    name: "Microsoft Copilot",
    index: "Bing index",
    share: "Built into Windows",
    note: "Integrated across Windows, Edge, and Microsoft 365. Uses the Bing index exclusively. Local businesses well-indexed on Bing with structured Bing Places listings perform best.",
  },
];

export default function AiSearchOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero */}
      <section data-scene="aiso-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            AI Search Optimization · Tampa Bay, FL
          </p>
          <h1 className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Be the business
            <br />
            <span className="text-[#18b5d8]">AI recommends.</span>
          </h1>
          <p className="lead-airy text-white/65 max-w-[560px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            AI search has changed how buyers in Wesley Chapel and Tampa Bay find businesses. ChatGPT, Gemini, Perplexity, and Google AI Overviews are the new first call. We make sure your business answers it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ai-audit" className="btn-press inline-block bg-[#18b5d8] text-black text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:bg-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]">
              Get My Free AI Audit
            </Link>
            <Link href="/plans" className="btn-press inline-block border border-white/30 text-white text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:border-white/70 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* The shift */}
      <section className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Search changed. The playbook did not.
          </h2>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            Traditional SEO was built for a world where Google returned a list of ten blue links and buyers clicked through to find what they needed. That world still exists, but it is shrinking fast. AI Overviews now appear on over 60% of Google searches. ChatGPT handles hundreds of millions of local queries every month. Buyers in Wesley Chapel are asking AI who to call before they ever open a browser tab.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            The critical difference: AI search does not return a ranked list. It returns one answer. One business. If that is not you, you are invisible to that buyer at the moment they were most ready to purchase.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed">
            AI search optimization is the discipline of making your business the one that gets recommended. It requires different signals than traditional SEO: content structure, entity consistency, schema markup, citation authority, and AI crawler access. Businesses that move on this now will own those recommendations. The ones that wait will spend more catching up.
          </p>
        </div>
      </section>

      {/* Platform breakdown */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[520px] mb-10 sm:mb-14">
            <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
              Five platforms. Three index families.
            </h2>
            <p className="text-[17px] text-[#444] leading-relaxed">
              Each AI search platform uses a different data source. A strategy that only optimizes for one leaves you invisible on the others.
            </p>
          </div>
          <div className="space-y-3">
            {platforms.map((p) => (
              <div key={p.name} className="bg-white border border-[#e8e8ed] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-[180px_140px_1fr] gap-4 sm:gap-6 items-start">
                <div>
                  <p className="text-[16px] font-semibold text-[#0a0a0a]">{p.name}</p>
                  <p className="text-[12px] text-[#18b5d8] font-medium mt-1">{p.share}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-[0.08em] mb-1">Index</p>
                  <p className="text-[13px] text-[#444] font-medium">{p.index}</p>
                </div>
                <p className="text-[14px] text-[#666] leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
                What AI search optimization covers.
              </h2>
              <p className="text-[17px] text-[#444] leading-relaxed">
                We run a full-stack AI search optimization engagement that covers every layer: technical access, content structure, entity signals, and citation authority across all three index families.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "AI crawler access audit", body: "Verify GPTBot, ClaudeBot, PerplexityBot, and Googlebot are not blocked in your robots.txt or via X-Robots-Tag headers." },
                { label: "Content extractability", body: "Restructure key pages with definition blocks, FAQ sections, and heading-answer pairs that AI engines extract at higher rates." },
                { label: "Schema and structured data", body: "Implement LocalBusiness, Service, FAQ, and Review schema across your site. Gives AI a direct machine-readable feed about your business." },
                { label: "Entity and citation fixes", body: "Correct your NAP data across 50 or more directories. Build citation placements in the sources AI models cite most." },
                { label: "Bing and Brave index coverage", body: "Submit your site to Bing Webmaster Tools and Brave Search to cover the ChatGPT, Copilot, and Perplexity index families." },
                { label: "Monthly AI visibility reporting", body: "Track citation frequency across all five platforms and show you exactly which queries you are winning and which still need work." },
              ].map((item) => (
                <div key={item.label} className="border-b border-[#e8e8ed] pb-4 last:border-0">
                  <p className="text-[15px] font-semibold text-[#0a0a0a] mb-1">{item.label}</p>
                  <p className="text-[14px] text-[#666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Common questions about AI search optimization.
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#e8e8ed] pb-8 last:border-0">
                <h3 className="text-[18px] font-semibold text-[#0a0a0a] mb-3">{faq.q}</h3>
                <p className="text-[16px] text-[#444] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#18b5d8] py-14 sm:py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-black mb-4 sm:mb-5" style={{ textWrap: "balance" }}>
            Find out where you stand across all five platforms.
          </h2>
          <p className="lead-airy text-black/65 mb-8 sm:mb-10">
            Free AI search audit. We test ChatGPT, Gemini, Perplexity, Google AI Overviews, and Copilot and show you exactly where your business appears and what is blocking you on each.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ai-audit" className="btn-press inline-block bg-black text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8]">
              Get My Free AI Audit
            </Link>
            <Link href="/contact" className="btn-press inline-block border-2 border-black text-black text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-black hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8]">
              Speak with the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
