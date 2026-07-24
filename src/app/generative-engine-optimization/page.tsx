import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Generative Engine Optimization (GEO) | Tampa Bay | Shark AI Solutions",
  description:
    "Generative Engine Optimization (GEO) for Tampa Bay businesses. Get your content cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews. Wesley Chapel GEO agency.",
  alternates: { canonical: "https://shark-ai-solutions.com/generative-engine-optimization" },
  openGraph: {
    title: "Generative Engine Optimization (GEO) | Tampa Bay | Shark AI Solutions",
    description:
      "GEO services for Tampa Bay businesses. Optimize your content to be cited by AI generative engines including ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    url: "https://shark-ai-solutions.com/generative-engine-optimization",
    type: "website",
    images: [{ url: "https://shark-ai-solutions.com/logo.webp", width: 1200, height: 630, alt: "GEO Agency Tampa Bay | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shark-ai-solutions.com" },
    { "@type": "ListItem", position: 2, name: "Generative Engine Optimization", item: "https://shark-ai-solutions.com/generative-engine-optimization" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generative Engine Optimization (GEO)",
  description:
    "Generative Engine Optimization (GEO) services for businesses in Tampa Bay, FL. We optimize your content, entity signals, and citation authority so AI generative engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews cite your business in their responses.",
  url: "https://shark-ai-solutions.com/generative-engine-optimization",
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
      name: "What is Generative Engine Optimization (GEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization, or GEO, is the practice of structuring your content and business signals so that AI generative engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews cite your business in their responses. GEO focuses on content extractability, entity consistency, citation authority, and structured data rather than traditional keyword ranking signals.",
      },
    },
    {
      "@type": "Question",
      name: "How is GEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO optimizes for ranking positions in a list of blue links. GEO optimizes for being cited in a single AI-generated answer. The signals are different: SEO weights backlinks and keyword density; GEO weights content structure, entity clarity, citation authority in AI-trusted sources, and review trust signals. A business can rank #1 in Google and still be invisible in ChatGPT.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI platforms does GEO affect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO affects all major AI generative engines: ChatGPT (which uses Bing and its own training data), Google AI Overviews and Gemini (which use the Google index), Perplexity (which uses a blend of Google, Bing, and Brave), and Claude (which uses Brave Search for live queries). Each platform has a different index family, so a complete GEO strategy covers all three index families.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see GEO results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvement in AI citation frequency within 30 to 60 days of GEO implementation. Citation corrections propagate quickly. Content structure improvements take effect as soon as AI crawlers re-index the updated pages. Building citation authority in external sources takes 60 to 90 days to fully register.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need GEO if I already do SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SEO and GEO optimize for different surfaces with different signals. Many businesses that rank well in traditional search are completely absent from AI recommendations because their content is not structured for extraction, their entity signals are inconsistent, or they lack presence in the citation sources AI models trust. GEO adds the layer that SEO cannot cover.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "Generative Engine Optimization, or GEO, is the practice of structuring your content and business signals so that AI generative engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews cite your business in their responses. GEO focuses on content extractability, entity consistency, citation authority, and structured data rather than traditional keyword ranking signals.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "Traditional SEO optimizes for ranking positions in a list of blue links. GEO optimizes for being cited in a single AI-generated answer. The signals are different: SEO weights backlinks and keyword density; GEO weights content structure, entity clarity, citation authority in AI-trusted sources, and review trust signals. A business can rank #1 in Google and still be invisible in ChatGPT.",
  },
  {
    q: "Which AI platforms does GEO affect?",
    a: "GEO affects all major AI generative engines: ChatGPT (which uses Bing and its own training data), Google AI Overviews and Gemini (which use the Google index), Perplexity (which uses a blend of Google, Bing, and Brave), and Claude (which uses Brave Search for live queries). Each platform has a different index family, so a complete GEO strategy covers all three index families.",
  },
  {
    q: "How long does it take to see GEO results?",
    a: "Most clients see measurable improvement in AI citation frequency within 30 to 60 days of GEO implementation. Citation corrections propagate quickly. Content structure improvements take effect as soon as AI crawlers re-index the updated pages. Building citation authority in external sources takes 60 to 90 days to fully register.",
  },
  {
    q: "Do I need GEO if I already do SEO?",
    a: "Yes. SEO and GEO optimize for different surfaces with different signals. Many businesses that rank well in traditional search are completely absent from AI recommendations because their content is not structured for extraction, their entity signals are inconsistent, or they lack presence in the citation sources AI models trust. GEO adds the layer that SEO cannot cover.",
  },
];

const signals = [
  { label: "Content Extractability", body: "AI engines pull content that is self-contained and directly answers a question. Definition blocks, numbered steps, comparison tables, and FAQ sections are extracted at higher rates than dense paragraphs." },
  { label: "Entity Consistency", body: "Your business name, address, and phone number must match exactly across every directory, social profile, and citation source. Inconsistency signals unreliability to AI models." },
  { label: "Citation Authority", body: "AI models trust content that is cited by other credible sources. Placements in local news, industry directories, and review platforms like Google and Yelp build the citation profile that gets you recommended." },
  { label: "Structured Data", body: "Schema markup gives AI crawlers a machine-readable feed about your business, your services, your location, and your reviews. Without it, AI must guess, and it usually guesses wrong." },
  { label: "Review Trust Signals", body: "ChatGPT and Gemini both use review volume and recency as a proxy for business quality. A business with 5 reviews and a 5-star average loses to one with 80 reviews and a 4.7 average, in AI and in consumer trust." },
  { label: "AI Crawler Access", body: "AI platforms use dedicated crawlers: GPTBot, ClaudeBot, PerplexityBot, and Googlebot for AI Overviews. A robots.txt that blocks any of these makes you invisible on that platform." },
];

export default function GeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero */}
      <section data-scene="geo-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            GEO · Tampa Bay, FL
          </p>
          <h1 className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Generative Engine
            <br />
            <span className="text-[#18b5d8]">Optimization.</span>
          </h1>
          <p className="lead-airy text-white/65 max-w-[560px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            GEO is the practice of structuring your content so AI engines like ChatGPT, Gemini, and Perplexity cite your business in their answers. We do it for Tampa Bay businesses.
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

      {/* Definition */}
      <section className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-start">
          <div>
            <h2 className="display-lg text-[#0a0a0a] mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
              What is Generative Engine Optimization?
            </h2>
            <p className="text-[17px] text-[#444] leading-relaxed mb-5">
              Generative Engine Optimization is the process of making your content extractable by AI. When someone asks ChatGPT "who is the best HVAC company in Wesley Chapel," the model scans its training data and live web results, then generates an answer from sources it judges credible and well-structured. GEO is what puts your business in those sources.
            </p>
            <p className="text-[17px] text-[#444] leading-relaxed mb-5">
              Traditional SEO optimizes for a ranked list of links. GEO optimizes for a single cited answer. The signals are different. Backlinks and keyword density matter less. Content structure, entity clarity, and citation authority matter more.
            </p>
            <p className="text-[17px] text-[#444] leading-relaxed">
              Research from Princeton University found that adding citations to content increases AI citation likelihood by 40%. Adding statistics improves it by 37%. These are not SEO moves. They are GEO moves, and most local businesses in Tampa Bay have not made them yet.
            </p>
          </div>
          <div className="bg-[#f5f5f7] rounded-2xl p-7 border border-[#e8e8ed]">
            <p className="text-[13px] font-semibold text-[#18b5d8] uppercase tracking-[0.1em] mb-4">By the numbers</p>
            <div className="space-y-5">
              {[
                { stat: "60%+", note: "of Google searches now trigger an AI Overview (Google I/O, 2025)" },
                { stat: "40%", note: "lift in AI citation likelihood from adding citations to content (Princeton, 2024)" },
                { stat: "3", note: "businesses is the most AI recommends for any single local query" },
                { stat: "30 days", note: "typical time to first measurable GEO improvement after implementation" },
              ].map((item) => (
                <div key={item.stat} className="border-b border-[#e8e8ed] pb-5 last:border-0 last:pb-0">
                  <p className="text-[28px] font-bold text-[#0a0a0a] leading-none mb-1">{item.stat}</p>
                  <p className="text-[13px] text-[#666] leading-snug">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[560px] mb-10 sm:mb-16">
            <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
              The six signals that control your GEO ranking.
            </h2>
            <p className="text-[17px] text-[#444] leading-relaxed">
              AI engines do not use a single score. They weigh a set of signals about your content, your entity, and your authority. These are the ones that move the needle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e8ed] border border-[#e8e8ed] rounded-2xl overflow-hidden">
            {signals.map((s) => (
              <div key={s.label} className="bg-white p-7">
                <p className="text-[15px] font-semibold text-[#18b5d8] mb-2">{s.label}</p>
                <p className="text-[15px] text-[#444] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[900px] mx-auto">
          <div className="max-w-[520px] mb-10 sm:mb-16">
            <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
              How Shark AI Solutions delivers GEO.
            </h2>
            <p className="text-[17px] text-[#444] leading-relaxed">
              We run a four-part GEO engagement for Tampa Bay businesses. Every step is measurable and reported monthly.
            </p>
          </div>
          <div className="space-y-0 border-l-2 border-[#e8e8ed] ml-4">
            {[
              {
                title: "GEO Audit",
                body: "We test your business across ChatGPT, Gemini, Perplexity, and Google AI Overviews using 20 or more targeted queries. You get a citation score, a gap analysis against your top competitors, and a prioritized fix list.",
              },
              {
                title: "Content and Structure Optimization",
                body: "We restructure your key pages to be AI-extractable: definition blocks, FAQ sections, comparison tables, and numbered steps that AI engines pull at higher rates. We also add statistics with inline citations, a signal that raises citation probability by 37%.",
              },
              {
                title: "Entity and Citation Fixes",
                body: "We correct your Name, Address, and Phone number across 50 or more directories. We add or update schema markup for LocalBusiness, Service, FAQ, and Review. We identify and pursue citation placements in the sources AI models trust most.",
              },
              {
                title: "Monthly Monitoring and Reporting",
                body: "Every month you receive a GEO report showing your citation movement across platforms, your citation health score, and the next set of actions. We adjust as AI platforms evolve their ranking logic.",
              },
            ].map((step, i) => (
              <div key={step.title} className="relative pl-8 pb-10 last:pb-0">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#18b5d8] border-2 border-white" />
                <p className="text-[11px] font-bold text-[#18b5d8] uppercase tracking-[0.12em] mb-2">Step {i + 1}</p>
                <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-3">{step.title}</h3>
                <p className="text-[16px] text-[#444] leading-relaxed max-w-[640px]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#0a0a0a] py-12 sm:py-24 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
              GEO is for businesses that are ready to lead in AI search.
            </h2>
            <p className="text-[17px] text-white/60 leading-relaxed mb-6">
              GEO works best for established local businesses, regional service brands, and franchise operators in competitive markets. HVAC, legal, healthcare, real estate, and professional services in Wesley Chapel and Tampa Bay. Also multi-location brands that need consistent AI visibility across every market.
            </p>
            <Link href="/ai-audit" className="btn-press inline-block bg-[#18b5d8] text-black text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:bg-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]">
              Get My Free AI Audit
            </Link>
          </div>
          <div className="space-y-4">
            {[
              "You rank on Google but AI is not recommending you",
              "A competitor showed up in ChatGPT and you did not",
              "You serve multiple locations and need consistent AI presence across all of them",
              "You want to capture the buyer who goes to AI before they ever reach Google",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                <p className="text-[15px] text-white/80 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Common questions about GEO.
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
            See where you stand in 48 hours.
          </h2>
          <p className="lead-airy text-black/65 mb-8 sm:mb-10">
            Free GEO audit for your business. We check ChatGPT, Gemini, Perplexity, and Google AI Overviews and show you exactly where you appear, where you do not, and what to fix first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ai-audit" className="btn-press inline-block bg-black text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8]">
              Get My Free GEO Audit
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
