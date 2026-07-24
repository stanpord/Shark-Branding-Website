import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entity Optimization | Tampa Bay AI Visibility | Shark AI Solutions",
  description:
    "Entity optimization builds a consistent, authoritative digital identity so AI models recognize, trust, and recommend your Tampa Bay business across ChatGPT, Google, and Perplexity.",
  alternates: { canonical: "https://shark-ai-solutions.com/entity-optimization" },
  openGraph: {
    title: "Entity Optimization | Tampa Bay AI Visibility | Shark AI Solutions",
    description:
      "We build and optimize your business entity so AI models recognize, trust, and recommend you. Serving Tampa Bay businesses.",
    url: "https://shark-ai-solutions.com/entity-optimization",
    type: "website",
    images: [{ url: "https://shark-ai-solutions.com/logo.webp", width: 1200, height: 630, alt: "Entity Optimization | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shark-ai-solutions.com" },
    { "@type": "ListItem", position: 2, name: "Entity Optimization", item: "https://shark-ai-solutions.com/entity-optimization" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Entity Optimization",
  description:
    "We build, audit, and optimize business entities so that AI models have a consistent, authoritative understanding of your brand, services, service area, and expertise. Serves Tampa Bay and national clients.",
  url: "https://shark-ai-solutions.com/entity-optimization",
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
      name: "What is entity optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entity optimization is the process of building and maintaining a consistent, authoritative digital identity for a business so that AI models, search engines, and knowledge bases can recognize, understand, and recommend it accurately. In AI search, your entity is how the model understands who you are, what you do, where you operate, and how credible you are, assembled from structured data, directory listings, reviews, citations, and web presence signals. Entity optimization ensures every signal points to the same, accurate picture.",
      },
    },
    {
      "@type": "Question",
      name: "How does entity optimization differ from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO targets keywords: ranking pages for specific search terms. Entity optimization targets identity: making sure AI models and search engines have an accurate, consistent, authoritative understanding of who your business is. The two overlap but are not the same. A business can rank on page one of Google for a keyword and still have a fragmented entity that causes AI models to produce inaccurate descriptions or pass over it in favor of competitors with stronger entity signals.",
      },
    },
    {
      "@type": "Question",
      name: "What makes an entity strong for AI recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A strong entity has four properties. First, consistency: the business name, address, phone, and category match across every directory, review platform, and citation source. Second, completeness: key facts like service area, operating hours, services offered, and credentials are present in structured data on the website and in directory profiles. Third, authority: the entity is cited by trusted sources (publications, industry directories, aggregators) and has a substantial, recent review record. Fourth, clarity: the structured data on the website uses schema markup that explicitly defines what type of business it is, what it does, and who it serves.",
      },
    },
    {
      "@type": "Question",
      name: "What does entity optimization look like in practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entity optimization typically includes: auditing and correcting NAP data across every directory and citation source, implementing LocalBusiness and Service schema on the website, creating or claiming and optimizing profiles on the major citation platforms (Yelp, Google Business Profile, Bing Places, Apple Maps, BBB, industry directories), building a structured review acquisition process, securing coverage in trusted local and industry publications, and creating or optimizing an llms.txt file that gives AI crawlers a structured summary of the business.",
      },
    },
    {
      "@type": "Question",
      name: "Does entity optimization help with Google as well as ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Entity optimization improves visibility across all AI and search platforms simultaneously. Google uses entity signals for Knowledge Panels and AI Overviews. ChatGPT uses entity signals via Bing indexing and citation sources. Perplexity uses them via its own crawler and blended index. Claude uses them via Brave index. A strong, consistent entity lifts performance across all of them because they all rely on the same underlying signals: consistent NAP data, structured data, review authority, and citation presence.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is entity optimization?",
    a: "Entity optimization is the process of building and maintaining a consistent, authoritative digital identity for a business so that AI models, search engines, and knowledge bases can recognize, understand, and recommend it accurately. In AI search, your entity is how the model understands who you are, what you do, where you operate, and how credible you are, assembled from structured data, directory listings, reviews, citations, and web presence signals. Entity optimization ensures every signal points to the same, accurate picture.",
  },
  {
    q: "How does entity optimization differ from SEO?",
    a: "Traditional SEO targets keywords: ranking pages for specific search terms. Entity optimization targets identity: making sure AI models and search engines have an accurate, consistent, authoritative understanding of who your business is. The two overlap but are not the same. A business can rank on page one of Google for a keyword and still have a fragmented entity that causes AI models to produce inaccurate descriptions or pass over it in favor of competitors with stronger entity signals.",
  },
  {
    q: "What makes an entity strong for AI recommendations?",
    a: "A strong entity has four properties. First, consistency: the business name, address, phone, and category match across every directory, review platform, and citation source. Second, completeness: key facts like service area, operating hours, services offered, and credentials are present in structured data on the website and in directory profiles. Third, authority: the entity is cited by trusted sources (publications, industry directories, aggregators) and has a substantial, recent review record. Fourth, clarity: the structured data on the website uses schema markup that explicitly defines what type of business it is, what it does, and who it serves.",
  },
  {
    q: "What does entity optimization look like in practice?",
    a: "Entity optimization typically includes: auditing and correcting NAP data across every directory and citation source, implementing LocalBusiness and Service schema on the website, creating or claiming and optimizing profiles on the major citation platforms (Yelp, Google Business Profile, Bing Places, Apple Maps, BBB, industry directories), building a structured review acquisition process, securing coverage in trusted local and industry publications, and creating or optimizing an llms.txt file that gives AI crawlers a structured summary of the business.",
  },
  {
    q: "Does entity optimization help with Google as well as ChatGPT?",
    a: "Yes. Entity optimization improves visibility across all AI and search platforms simultaneously. Google uses entity signals for Knowledge Panels and AI Overviews. ChatGPT uses entity signals via Bing indexing and citation sources. Perplexity uses them via its own crawler and blended index. Claude uses them via Brave index. A strong, consistent entity lifts performance across all of them because they all rely on the same underlying signals: consistent NAP data, structured data, review authority, and citation presence.",
  },
];

export default function EntityOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero */}
      <section data-scene="entity-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            Entity Optimization · AI Identity · Tampa Bay
          </p>
          <h1 className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            AI models recommend
            <br />
            <span className="text-[#18b5d8]">what they recognize.</span>
          </h1>
          <p className="lead-airy text-white/65 max-w-[580px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Entity optimization builds a consistent, authoritative digital identity for your business so every AI model and search engine has the same clear, accurate picture of who you are and why you should be recommended.
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

      {/* What is an entity */}
      <section className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
              What AI models mean when they "know" your business.
            </h2>
            <p className="text-[17px] text-[#444] leading-relaxed mb-4">
              When you ask ChatGPT or Perplexity to recommend a business, it does not search your website the way a person would. It assembles a model of your business from dozens of signals: your business name in directories, your schema markup, your review profiles, your citations in publications, your Google Business Profile, and any crawled page content that mentions you.
            </p>
            <p className="text-[17px] text-[#444] leading-relaxed">
              That assembled picture is your entity. If your entity is fragmented (different business names in different places, missing service areas, conflicting addresses, thin structured data), the AI model cannot confidently recommend you. It passes over you in favor of a business with a cleaner, clearer entity.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Identity signals", items: ["Business name consistency", "Address and phone uniformity", "Category and classification"] },
              { label: "Expertise signals", items: ["Structured data / schema markup", "Service descriptions", "Credentials and awards"] },
              { label: "Authority signals", items: ["Review volume and recency", "Citation in trusted sources", "Local press and publication coverage"] },
              { label: "Reach signals", items: ["Geographic service area clarity", "Platform presence breadth", "llms.txt structured summary"] },
            ].map((group) => (
              <div key={group.label} className="border border-[#e8e8ed] rounded-xl p-5">
                <p className="text-[13px] font-bold text-[#18b5d8] tracking-[0.08em] uppercase mb-3">{group.label}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[#555]">
                      <span className="text-[#18b5d8] font-bold mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#07141a] py-12 sm:py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="max-w-[520px] mb-10 sm:mb-14">
            <h2 className="display-lg text-white mb-4" style={{ textWrap: "balance" }}>
              How we build and optimize your entity.
            </h2>
            <p className="text-[17px] text-white/55 leading-relaxed">
              Entity optimization is not a one-time task. It is a systematic process of auditing, correcting, building, and maintaining the signals that define your business across every platform AI models trust.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Entity audit",
                body: "We pull your current entity state: every directory listing, citation, review platform, and structured data block on your site. We map every inconsistency in business name, address, phone, and category. We test what ChatGPT, Perplexity, and Google AI Overviews currently say about your business.",
              },
              {
                step: "2",
                title: "NAP correction and directory cleanup",
                body: "We systematically correct every inconsistency across the directories AI models reference most: Google Business Profile, Yelp, Bing Places, Apple Maps, BBB, and the 40 or more data aggregators that feed the broader citation ecosystem.",
              },
              {
                step: "3",
                title: "Schema markup implementation",
                body: "We add or repair LocalBusiness, Service, FAQPage, and BreadcrumbList schema markup on your website so AI models have machine-readable structured data confirming your identity, category, service area, and contact information.",
              },
              {
                step: "4",
                title: "Citation and authority building",
                body: "We identify which industry-specific directories and local publications carry the most weight for AI recommendations in your market and category, and we pursue placements in them.",
              },
              {
                step: "5",
                title: "llms.txt creation",
                body: "We write and deploy an llms.txt file that gives AI crawlers a clean, structured, AI-optimized summary of your business for platforms that read it directly.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white/5 border border-white/10 rounded-2xl p-7 items-start">
                <span className="text-[28px] font-bold text-[#18b5d8] leading-none mt-1 shrink-0">{item.step}</span>
                <div>
                  <p className="text-[16px] font-semibold text-white mb-2">{item.title}</p>
                  <p className="text-[14px] text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Entity optimization questions.
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
            Find out what AI models say about your business today.
          </h2>
          <p className="lead-airy text-black/65 mb-8 sm:mb-10">
            Free audit. We test your entity across ChatGPT, Perplexity, and Google AI Overviews and show you exactly what they say, what signals are missing, and what to fix first.
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
