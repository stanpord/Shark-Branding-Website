import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "llms.txt Optimization | Tampa Bay AI Visibility | Shark AI Solutions",
  description:
    "We create and optimize llms.txt files for Tampa Bay businesses so AI models like ChatGPT, Claude, and Perplexity can accurately understand and cite your business.",
  alternates: { canonical: "https://shark-ai-solutions.com/llms-txt-optimization" },
  openGraph: {
    title: "llms.txt Optimization | Tampa Bay AI Visibility | Shark AI Solutions",
    description:
      "We create and optimize llms.txt files for Tampa Bay businesses so AI models can accurately understand and cite your business.",
    url: "https://shark-ai-solutions.com/llms-txt-optimization",
    type: "website",
    images: [{ url: "https://shark-ai-solutions.com/logo.webp", width: 1200, height: 630, alt: "llms.txt Optimization | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shark-ai-solutions.com" },
    { "@type": "ListItem", position: 2, name: "llms.txt Optimization", item: "https://shark-ai-solutions.com/llms-txt-optimization" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "llms.txt Optimization",
  description:
    "We write, structure, and optimize llms.txt files for businesses that want AI models to accurately understand their brand, services, service area, and expertise. Serves Tampa Bay and national clients.",
  url: "https://shark-ai-solutions.com/llms-txt-optimization",
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
      name: "What is llms.txt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "llms.txt is a plain-text file placed at the root of a website (e.g., yourdomain.com/llms.txt) that provides concise, structured information about a business or website for AI language models. It follows a proposed convention introduced in 2024 to help AI models quickly identify what a site is about, who operates it, what services it offers, and where it operates, without having to parse and interpret the full HTML of every page.",
      },
    },
    {
      "@type": "Question",
      name: "Does llms.txt actually get used by ChatGPT and Perplexity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adoption by AI crawlers is growing but not universal. Perplexity has confirmed that it reads llms.txt files. ChatGPT and Claude primarily use index coverage and structured data, but are increasingly crawling llms.txt as the standard gains traction. Even where not yet universally adopted, the file provides a clean, AI-optimized summary of your business that helps any AI system that does crawl it construct a more accurate understanding of your brand than it would from parsing page-by-page.",
      },
    },
    {
      "@type": "Question",
      name: "What should be in an llms.txt file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-structured llms.txt file includes: business name and a one-paragraph description optimized for AI extraction, the primary services offered with brief descriptions, the geographic service area (especially important for local businesses), key credentials and trust signals (certifications, awards, years in operation), the main contact method, and links to the most important pages on the site. The goal is to give an AI model everything it needs to accurately describe your business in a recommendation without reading your full website.",
      },
    },
    {
      "@type": "Question",
      name: "How is llms.txt different from robots.txt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "robots.txt tells crawlers which pages they are and are not allowed to access. llms.txt tells AI models what your website is about and how to represent your business accurately. They serve opposite purposes: robots.txt controls access, llms.txt provides context. Both should be present and consistent with each other.",
      },
    },
    {
      "@type": "Question",
      name: "Who should have an llms.txt file?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any business that wants AI models to accurately represent them in recommendations should have an llms.txt file. It is especially valuable for local businesses (where geographic service area needs to be crystal-clear), professional service firms (where credentials and specializations matter to AI citation), and businesses with multiple service lines (where an AI model might otherwise default to a generic category description).",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is llms.txt?",
    a: "llms.txt is a plain-text file placed at the root of a website (e.g., yourdomain.com/llms.txt) that provides concise, structured information about a business or website for AI language models. It follows a proposed convention introduced in 2024 to help AI models quickly identify what a site is about, who operates it, what services it offers, and where it operates, without having to parse and interpret the full HTML of every page.",
  },
  {
    q: "Does llms.txt actually get used by ChatGPT and Perplexity?",
    a: "Adoption by AI crawlers is growing but not universal. Perplexity has confirmed that it reads llms.txt files. ChatGPT and Claude primarily use index coverage and structured data, but are increasingly crawling llms.txt as the standard gains traction. Even where not yet universally adopted, the file provides a clean, AI-optimized summary of your business that helps any AI system that does crawl it construct a more accurate understanding of your brand than it would from parsing page-by-page.",
  },
  {
    q: "What should be in an llms.txt file?",
    a: "A well-structured llms.txt file includes: business name and a one-paragraph description optimized for AI extraction, the primary services offered with brief descriptions, the geographic service area (especially important for local businesses), key credentials and trust signals (certifications, awards, years in operation), the main contact method, and links to the most important pages on the site. The goal is to give an AI model everything it needs to accurately describe your business in a recommendation without reading your full website.",
  },
  {
    q: "How is llms.txt different from robots.txt?",
    a: "robots.txt tells crawlers which pages they are and are not allowed to access. llms.txt tells AI models what your website is about and how to represent your business accurately. They serve opposite purposes: robots.txt controls access, llms.txt provides context. Both should be present and consistent with each other.",
  },
  {
    q: "Who should have an llms.txt file?",
    a: "Any business that wants AI models to accurately represent them in recommendations should have an llms.txt file. It is especially valuable for local businesses (where geographic service area needs to be crystal-clear), professional service firms (where credentials and specializations matter to AI citation), and businesses with multiple service lines (where an AI model might otherwise default to a generic category description).",
  },
];

export default function LlmsTxtOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero */}
      <section data-scene="llmstxt-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            llms.txt · AI Crawler Optimization · Tampa Bay
          </p>
          <h1 className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Tell AI models exactly
            <br />
            <span className="text-[#18b5d8]">who you are.</span>
          </h1>
          <p className="lead-airy text-white/65 max-w-[580px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            llms.txt is the emerging standard for giving AI models a clear, structured summary of your business. We write and optimize yours so ChatGPT, Perplexity, and Claude represent your brand accurately, not generically.
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

      {/* What is llms.txt */}
      <section className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            What llms.txt is and why it matters now.
          </h2>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            When an AI model like ChatGPT or Perplexity crawls your website to answer a question about your business, it has to read and interpret your full page content to figure out what you do, where you operate, and whether you are trustworthy. That process is slow, error-prone, and frequently produces generic or inaccurate descriptions.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            llms.txt solves this. It is a plain-text file at the root of your website that gives AI crawlers a concise, accurate, machine-optimized summary of your business before they read a single page. Think of it as a handshake with the AI that says: here is what we are, here is what we do, here is where we operate, here is why we are credible.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed">
            The standard was proposed in 2024 and is gaining adoption across the major AI platforms. Perplexity reads it today. ChatGPT and Claude are increasingly incorporating it. For businesses that depend on being recommended by AI, setting up and optimizing llms.txt now puts you ahead of competitors who have not.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-4 max-w-[480px]" style={{ textWrap: "balance" }}>
            What AI models say without llms.txt vs. with it.
          </h2>
          <p className="text-[17px] text-[#555] mb-10 sm:mb-14 max-w-[540px]">
            The difference between an AI model scraping your site cold and reading a well-written llms.txt file is the difference between a generic category description and a specific, accurate recommendation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#e8e8ed] rounded-2xl p-8">
              <p className="text-[12px] font-bold text-[#999] tracking-[0.1em] uppercase mb-5">Without llms.txt</p>
              <blockquote className="text-[16px] text-[#555] leading-relaxed italic mb-6 border-l-4 border-[#e8e8ed] pl-4">
                "Shark Branding Solutions is a marketing agency based in Florida that offers various marketing services including SEO, social media, and website design."
              </blockquote>
              <ul className="space-y-2">
                {["Wrong company name", "Wrong service category", "No city or service area", "No AI visibility specialization", "No differentiators"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-[#888]">
                    <span className="text-red-400 font-bold">x</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#18b5d8]/40 bg-[#18b5d8]/5 rounded-2xl p-8">
              <p className="text-[12px] font-bold text-[#18b5d8] tracking-[0.1em] uppercase mb-5">With optimized llms.txt</p>
              <blockquote className="text-[16px] text-[#333] leading-relaxed italic mb-6 border-l-4 border-[#18b5d8]/40 pl-4">
                "Shark AI Solutions is a Wesley Chapel, FL AI visibility and GEO agency that specializes in helping Tampa Bay businesses get recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity."
              </blockquote>
              <ul className="space-y-2">
                {["Correct brand name", "AI visibility positioning", "Wesley Chapel + Tampa Bay", "Names actual AI platforms", "Clear, specific recommendation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-[#333]">
                    <span className="text-[#18b5d8] font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we include */}
      <section className="bg-[#07141a] py-12 sm:py-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="max-w-[520px] mb-10 sm:mb-14">
            <h2 className="display-lg text-white mb-4" style={{ textWrap: "balance" }}>
              What goes into an optimized llms.txt.
            </h2>
            <p className="text-[17px] text-white/55 leading-relaxed">
              We do not hand you a template. We write your llms.txt from scratch based on your brand, services, market, and the specific queries you want to be recommended for.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { label: "Brand identity block", body: "Correct legal name, doing-business-as name, founding year, and a 60-80 word AI-optimized description of what you do and who you serve." },
              { label: "Service definitions", body: "Each primary service listed with a 1-2 sentence description written for AI extraction, not for human browsing. Structured so AI models can quote them directly." },
              { label: "Geographic service area", body: "Explicit list of cities, counties, and regions you serve. This is the most common gap in AI model recommendations for local businesses." },
              { label: "Credentials and trust signals", body: "Certifications, awards, years in operation, notable clients or partnerships. The signals AI models weight when choosing whether to recommend a business." },
              { label: "Key page links", body: "Direct links to your most important pages: service pages, contact page, reviews page, and your team or about page. Gives AI crawlers clear navigation paths." },
              { label: "Contact and booking information", body: "Phone, email, and scheduling link presented in a format AI models can extract and include in a recommendation or response." },
            ].map((item) => (
              <div key={item.label} className="bg-[#07141a] p-7">
                <p className="text-[15px] font-semibold text-white mb-2">{item.label}</p>
                <p className="text-[14px] text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            llms.txt explained.
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
            Let AI models see your business clearly.
          </h2>
          <p className="lead-airy text-black/65 mb-8 sm:mb-10">
            Free AI audit included. We check your current llms.txt (or the absence of one), your AI crawler access, and your structured data in a single report.
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
