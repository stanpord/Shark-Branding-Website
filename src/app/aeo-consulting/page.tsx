import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO Consulting | Answer Engine Optimization | Tampa Bay | Shark AI Solutions",
  description:
    "Answer Engine Optimization (AEO) consulting for Tampa Bay businesses. Structure your content to be extracted as the direct answer by ChatGPT, Perplexity, and Google AI Overviews. Wesley Chapel AEO agency.",
  alternates: { canonical: "https://shark-ai-solutions.com/aeo-consulting" },
  openGraph: {
    title: "AEO Consulting | Answer Engine Optimization | Tampa Bay | Shark AI Solutions",
    description:
      "AEO consulting for Tampa Bay businesses. Optimize your content to be cited as the direct answer by AI engines. Serving Wesley Chapel, Tampa, and the greater Tampa Bay area.",
    url: "https://shark-ai-solutions.com/aeo-consulting",
    type: "website",
    images: [{ url: "https://shark-ai-solutions.com/logo.webp", width: 1200, height: 630, alt: "AEO Consulting Tampa Bay | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shark-ai-solutions.com" },
    { "@type": "ListItem", position: 2, name: "AEO Consulting", item: "https://shark-ai-solutions.com/aeo-consulting" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO Consulting (Answer Engine Optimization)",
  description:
    "Answer Engine Optimization (AEO) consulting for local businesses in Tampa Bay, FL. We structure your content so AI answer engines extract it as the direct response to buyer queries, increasing citation frequency across ChatGPT, Google AI Overviews, Perplexity, and Gemini.",
  url: "https://shark-ai-solutions.com/aeo-consulting",
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
      name: "What is Answer Engine Optimization (AEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer Engine Optimization (AEO) is the practice of formatting your content so that AI answer engines like ChatGPT, Google AI Overviews, Perplexity, and Gemini extract it as the direct response to a user query. AEO focuses on question-and-answer content structure, definition blocks, concise extractable paragraphs, and FAQ schema markup.",
      },
    },
    {
      "@type": "Question",
      name: "How is AEO different from GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) overlap significantly. AEO is a subset of GEO focused specifically on formatting content as direct answers to questions. GEO is the broader discipline that includes entity optimization, citation authority, structured data, and content extractability. Most businesses need both.",
      },
    },
    {
      "@type": "Question",
      name: "What content formats work best for AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI answer engines extract content that is already formatted as an answer. The highest-performing formats are: definition blocks (a 40-70 word paragraph that directly defines a term), FAQ sections with concise answers under 100 words each, comparison tables with clear header rows, numbered step sequences for processes, and heading-answer pairs where each H2 is followed by a direct answer in the first sentence.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need AEO if I am not a content publisher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Even a local service business needs AEO. When someone asks ChatGPT what an HVAC tune-up costs in Wesley Chapel, or which law firm handles estate planning in Tampa, the AI pulls from whatever structured content it can find. Businesses with AEO-optimized service pages get cited. Businesses without them do not appear.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is Answer Engine Optimization (AEO)?",
    a: "Answer Engine Optimization (AEO) is the practice of formatting your content so that AI answer engines like ChatGPT, Google AI Overviews, Perplexity, and Gemini extract it as the direct response to a user query. AEO focuses on question-and-answer content structure, definition blocks, concise extractable paragraphs, and FAQ schema markup.",
  },
  {
    q: "How is AEO different from GEO?",
    a: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) overlap significantly. AEO is a subset of GEO focused specifically on formatting content as direct answers to questions. GEO is the broader discipline that includes entity optimization, citation authority, structured data, and content extractability. Most businesses need both.",
  },
  {
    q: "What content formats work best for AEO?",
    a: "AI answer engines extract content that is already formatted as an answer. The highest-performing formats are: definition blocks (a 40-70 word paragraph that directly defines a term), FAQ sections with concise answers under 100 words each, comparison tables with clear header rows, numbered step sequences for processes, and heading-answer pairs where each H2 is followed by a direct answer in the first sentence.",
  },
  {
    q: "Do I need AEO if I am not a content publisher?",
    a: "Yes. Even a local service business needs AEO. When someone asks ChatGPT what an HVAC tune-up costs in Wesley Chapel, or which law firm handles estate planning in Tampa, the AI pulls from whatever structured content it can find. Businesses with AEO-optimized service pages get cited. Businesses without them do not appear.",
  },
  {
    q: "How does FAQ schema help with AEO?",
    a: "FAQ schema tells search engines and AI crawlers that a section of your page is structured as questions and answers, making it dramatically easier to extract for AI-generated responses. Pages with FAQ schema are cited in AI Overviews and Perplexity at significantly higher rates than pages with the same content but no schema.",
  },
];

const formats = [
  {
    name: "Definition blocks",
    what: "A 40-70 word paragraph that directly defines the topic in the first sentence.",
    why: "AI engines are trained to extract the first clear definition they find. A definition block at the top of a section is the highest-probability extraction target on any page.",
  },
  {
    name: "FAQ sections",
    what: "Question-and-answer pairs with answers under 100 words, using FAQ schema markup.",
    why: "FAQ pages are the most commonly cited content type across all AI answer engines. FAQ schema signals to crawlers exactly which text is a question and which is the answer.",
  },
  {
    name: "Comparison tables",
    what: "Side-by-side tables comparing options, features, or competitors with clear header rows.",
    why: "Tables are self-contained, machine-readable, and directly answer comparison queries. AI models extract table rows at a higher rate than equivalent paragraph content.",
  },
  {
    name: "Heading-answer pairs",
    what: "Each H2 or H3 contains a direct answer in the very first sentence beneath it.",
    why: "AI engines scan heading-to-first-paragraph pairs as the primary extraction unit on a page. Copy that takes a paragraph to reach the point gets skipped.",
  },
];

export default function AeoConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero */}
      <section data-scene="aeo-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            AEO Consulting · Tampa Bay, FL
          </p>
          <h1 className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Answer Engine
            <br />
            <span className="text-[#18b5d8]">Optimization.</span>
          </h1>
          <p className="lead-airy text-white/65 max-w-[560px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            AEO is the discipline of formatting your content so AI engines extract it as the direct answer to a buyer query. We consult Tampa Bay businesses on exactly how to do it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ai-audit" className="btn-press inline-block bg-[#18b5d8] text-black text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:bg-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]">
              Get My Free AI Audit
            </Link>
            <Link href="/contact" className="btn-press inline-block border border-white/30 text-white text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:border-white/70 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Talk to the Team
            </Link>
          </div>
        </div>
      </section>

      {/* What is AEO */}
      <section className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            What is Answer Engine Optimization?
          </h2>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            An answer engine is any AI system that generates a direct response to a query rather than returning a list of links. ChatGPT, Google AI Overviews, Perplexity, and Gemini are all answer engines. Together they handle hundreds of millions of queries every day.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            AEO is the practice of structuring your website content so these engines extract it as the answer. The key insight is that AI systems do not rank pages the way Google does. They extract content. A page that ranks #1 in Google can still be completely ignored by ChatGPT if its content is not formatted in a way that AI can cleanly pull.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed">
            For local businesses in Wesley Chapel and Tampa Bay, AEO is the difference between being the answer and not existing in the conversation at all.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[520px] mb-10 sm:mb-14">
            <h2 className="display-lg text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
              The four content formats AI engines extract most.
            </h2>
            <p className="text-[17px] text-[#444] leading-relaxed">
              AEO is not about writing more. It is about formatting what you have so AI can pull it cleanly. These four formats drive the majority of AI citations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.map((f) => (
              <div key={f.name} className="bg-white rounded-2xl p-8 border border-[#e8e8ed]">
                <p className="text-[15px] font-semibold text-[#18b5d8] mb-3">{f.name}</p>
                <p className="text-[15px] text-[#0a0a0a] font-medium mb-3 leading-snug">{f.what}</p>
                <p className="text-[14px] text-[#666] leading-relaxed">{f.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-10 sm:mb-14 max-w-[520px]" style={{ textWrap: "balance" }}>
            What AEO looks like before and after.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#e8e8ed] rounded-2xl overflow-hidden">
              <div className="bg-[#f5f5f7] px-6 py-4 border-b border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#666] uppercase tracking-[0.08em]">Before AEO</p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  "Service page with dense paragraphs and no clear answer structure",
                  "No FAQ section or FAQ schema markup",
                  "Headings do not contain direct answers in the first sentence",
                  "No statistics with inline source citations",
                  "Not appearing in ChatGPT or AI Overviews",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#e8e8ed] font-bold shrink-0 mt-0.5 text-[18px] leading-none">✕</span>
                    <p className="text-[14px] text-[#666] leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#18b5d8]/40 rounded-2xl overflow-hidden">
              <div className="bg-[#18b5d8]/8 px-6 py-4 border-b border-[#18b5d8]/20">
                <p className="text-[13px] font-semibold text-[#18b5d8] uppercase tracking-[0.08em]">After AEO</p>
              </div>
              <div className="p-6 space-y-3">
                {[
                  "Service pages restructured with definition blocks and heading-answer pairs",
                  "FAQ section with FAQ schema on every key page",
                  "Statistics with inline citations added throughout",
                  "Comparison tables where relevant",
                  "Cited by ChatGPT, Perplexity, and Google AI Overviews within 30 to 60 days",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                    <p className="text-[14px] text-[#444] leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Common questions about AEO consulting.
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
            Find out if your content is answer-ready.
          </h2>
          <p className="lead-airy text-black/65 mb-8 sm:mb-10">
            We audit your content against the AEO signals that matter and tell you exactly which pages need restructuring and why.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/ai-audit" className="btn-press inline-block bg-black text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8]">
              Get My Free AEO Audit
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
