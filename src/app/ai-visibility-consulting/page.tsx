import type { Metadata } from "next";
import Link from "next/link";
import AiVisibilityAnimations from "@/components/AiVisibilityAnimations";

export const metadata: Metadata = {
  title: "AI Visibility Consulting in Tampa Bay | Shark AI Solutions",
  description:
    "AI visibility consulting for Tampa Bay businesses. Get recommended by ChatGPT, Gemini, and Google AI Overviews in 30 days. Free AI audit delivered in 48 hours.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/ai-visibility-consulting",
  },
  openGraph: {
    title: "AI Visibility Consulting in Tampa Bay | Shark AI Solutions",
    description:
      "AI visibility consulting for Tampa Bay businesses. Get recommended by ChatGPT, Gemini, and Google AI Overviews. Free AI audit in 48 hours.",
    url: "https://sharkbrandingsolutions.com/ai-visibility-consulting",
    type: "website",
    images: [{ url: "https://sharkbrandingsolutions.com/logo.webp", width: 1200, height: 630, alt: "AI Visibility Consulting | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sharkbrandingsolutions.com" },
    { "@type": "ListItem", position: 2, name: "AI Visibility Consulting", item: "https://sharkbrandingsolutions.com/ai-visibility-consulting" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Visibility Consulting",
  description:
    "AI visibility consulting for local businesses in Tampa Bay. Shark AI Solutions helps businesses get recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini through citation optimization, schema markup, review management, and authoritative content.",
  url: "https://sharkbrandingsolutions.com/ai-visibility-consulting",
  provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Tampa" },
    { "@type": "City", name: "Wesley Chapel" },
    { "@type": "City", name: "Lutz" },
    { "@type": "City", name: "Land O Lakes" },
  ],
  offers: {
    "@type": "Offer",
    price: "997",
    priceCurrency: "USD",
    description: "AI Visibility Foundation, starting at $997/mo",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why isn't my business showing up in ChatGPT or AI search results?",
      acceptedAnswer: { "@type": "Answer", text: "There are four common reasons a local business is invisible to AI: inconsistent business data across directories (mismatched name, address, or phone number confuses AI models), missing or thin structured data on your website (AI needs machine-readable signals to understand what you do and where you do it), low review volume or recency (ChatGPT and Gemini rely heavily on trust signals like Google reviews to decide who to recommend), and no entity presence in the sources AI models cite most, local news, industry publications, or platforms like Yelp and Google Business Profile. The fix starts with an AI visibility audit. We test your business against 20+ constrained prompts across ChatGPT, Gemini, and Perplexity, find the specific gaps, and tell you exactly what to correct first." },
    },
    {
      "@type": "Question",
      name: "How is AI visibility consulting different from SEO?",
      acceptedAnswer: { "@type": "Answer", text: "Traditional SEO optimizes for Google's page-ranking algorithm. AI visibility consulting optimizes for how language models like ChatGPT and Gemini evaluate and recommend businesses. The signals are different: entity consistency, structured data, trust indicators, and citation authority matter more than backlinks and keyword density." },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results?",
      acceptedAnswer: { "@type": "Answer", text: "Most clients see measurable movement in AI visibility within 7 to 30 days of implementation. Citation corrections propagate quickly. Schema updates are processed within days. Review volume builds over the first 60 to 90 days." },
    },
    {
      "@type": "Question",
      name: "What does AI visibility consulting cost?",
      acceptedAnswer: { "@type": "Answer", text: "Our AI Visibility Foundation program starts at $997 per month and includes monthly citation monitoring, schema maintenance, GBP management, and visibility reporting. A one-time audit is available for $497. We also offer custom engagements for multi-location businesses and franchises." },
    },
    {
      "@type": "Question",
      name: "What is an AI visibility audit?",
      acceptedAnswer: { "@type": "Answer", text: "An AI visibility audit tests how your business appears across ChatGPT, Gemini, Perplexity, and Google AI Overviews using 20 or more constrained prompts that mirror how real buyers search for your type of business in your city. The audit identifies which AI platforms mention you, which mention competitors instead, and the specific gaps in your citation profile, schema, and review signals that are causing the problem." },
    },
  ],
};

const steps = [
  {
    n: "01",
    title: "AI Visibility Audit",
    body: "We test how your business appears across ChatGPT, Gemini, Perplexity, and Google AI Overviews using 20+ constrained prompts. You get a clear score, a gap analysis against your top competitors, and a prioritized action list.",
  },
  {
    n: "02",
    title: "Citation & Data Fix",
    body: "We correct your Name, Address, and Phone number across 50+ directories so every platform that feeds AI models has consistent, accurate data about your business. Inconsistency is invisible to AI.",
  },
  {
    n: "03",
    title: "Schema Implementation",
    body: "We add LocalBusiness, Service, FAQ, and Review schema to your website. Structured data gives ChatGPT and Google AI Overviews a direct machine-readable feed about your business, your services, and your location.",
  },
  {
    n: "04",
    title: "Google Business Profile Optimization",
    body: "Weekly posts, updated photos, complete service descriptions, and review responses keep your GBP active and authoritative. A dormant GBP is invisible to AI.",
  },
  {
    n: "05",
    title: "Review & Trust Signal Building",
    body: "We set up automated post-job review request sequences that build volume and recency consistently. Review language directly influences what AI says about your business.",
  },
  {
    n: "06",
    title: "Ongoing Monitoring & Reporting",
    body: "Every month you get a visibility report showing your AI ranking movement, citation health, and the next set of actions. We adjust as the platforms evolve.",
  },
];

const faqs = [
  {
    q: "Why isn't my business showing up in ChatGPT or AI search results?",
    a: "There are four common reasons a local business is invisible to AI: inconsistent business data across directories (mismatched name, address, or phone number confuses AI models), missing or thin structured data on your website (AI needs machine-readable signals to understand what you do and where you do it), low review volume or recency (ChatGPT and Gemini rely heavily on trust signals like Google reviews to decide who to recommend), and no entity presence in the sources AI models cite most, local news, industry publications, or platforms like Yelp and Google Business Profile. The fix starts with an AI visibility audit. We test your business against 20+ constrained prompts across ChatGPT, Gemini, and Perplexity, find the specific gaps, and tell you exactly what to correct first.",
  },
  {
    q: "How is AI visibility consulting different from SEO?",
    a: "Traditional SEO optimizes for Google's page-ranking algorithm. AI visibility consulting optimizes for how language models like ChatGPT and Gemini evaluate and recommend businesses. The signals are different: entity consistency, structured data, trust indicators, and citation authority matter more than backlinks and keyword density.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable movement in AI visibility within 7 to 30 days of implementation. Citation corrections propagate quickly. Schema updates are processed within days. Review volume builds over the first 60 to 90 days.",
  },
  {
    q: "Do I need to cancel my current marketing?",
    a: "No. AI visibility consulting works alongside existing marketing. It is not a replacement for your current strategy, it is the layer that ensures AI platforms can find, understand, and recommend your business.",
  },
  {
    q: "Do you work with businesses outside Tampa Bay?",
    a: "Our primary focus is Wesley Chapel, Tampa Bay, Lutz, and Land O Lakes. We take a limited number of clients in other markets when it is a strong fit.",
  },
  {
    q: "What does AI visibility consulting cost?",
    a: "Our AI Visibility Foundation program starts at $997 per month and includes monthly citation monitoring, schema maintenance, GBP management, and visibility reporting. A one-time audit is available for $497. We also offer custom engagements for multi-location businesses and franchises.",
  },
  {
    q: "What is an AI visibility audit?",
    a: "An AI visibility audit tests how your business appears across ChatGPT, Gemini, Perplexity, and Google AI Overviews using 20 or more constrained prompts that mirror how real buyers search for your type of business in your city. The audit identifies which AI platforms mention you, which mention competitors instead, and the specific gaps in your citation profile, schema, and review signals that are causing the problem.",
  },
  {
    q: "How is AI visibility different from local SEO?",
    a: "Local SEO focuses on ranking in Google's map pack and organic results. AI visibility focuses on being recommended by ChatGPT, Gemini, and Google AI Overviews when someone asks a question like 'who is the best HVAC company in Wesley Chapel.' The signals that drive AI recommendations are different: entity consistency, structured data, review recency and language, and citation authority in the sources AI models trust.",
  },
];

export default function AiVisibilityConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <AiVisibilityAnimations />

      {/* Hero */}
      <section data-scene="avc-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p data-animate="hero-label" className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            AI Visibility Consulting · Tampa Bay
          </p>
          <h1 data-animate="hero-title" className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Get your business recommended
            <br />
            <span className="text-[#18b5d8]">by ChatGPT and Gemini.</span>
          </h1>
          <p data-animate="hero-sub" className="lead-airy text-white/65 max-w-[560px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Buyers in Wesley Chapel and Tampa Bay are asking AI before they ask Google. AI
            visibility consulting makes sure your business is the one they hear about.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              data-animate="hero-cta"
              href="/ai-audit"
              className="btn-press inline-block bg-[#18b5d8] text-black text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:bg-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              data-animate="hero-cta"
              href="/plans"
              className="btn-press inline-block border border-white/30 text-white text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:border-white/70 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section data-scene="avc-what" className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">
            What is AI Visibility?
          </p>
          <h2 data-animate="what-title" className="display-lg text-[#0a0a0a] mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            AI is the new front door for local businesses.
          </h2>
          <p data-animate="what-para" className="lead-airy text-[#444] mb-5 sm:mb-6">
            When someone types &ldquo;best plumber in Wesley Chapel&rdquo; into ChatGPT, they
            get a short list of two or three businesses. If yours is not on that list, you do
            not exist to that buyer.
          </p>
          <p data-animate="what-para" className="lead-airy text-[#444] mb-5 sm:mb-6">
            AI Overviews now appear on more than 60% of Google searches (Google I/O, 2025). Perplexity and
            ChatGPT handle tens of millions of local business queries every month. The buyers
            most likely to convert, those who have already decided to buy and are just
            choosing who, are going to AI first.
          </p>
          <p data-animate="what-para" className="lead-airy text-[#444] mb-5 sm:mb-6">
            AI visibility consulting is the process of making sure your business appears, and
            appears well, when AI answers the questions your customers are asking right now.
          </p>
          <p data-animate="what-para" className="lead-airy text-[#444]">
            In markets like Wesley Chapel, Lutz, Land O&rsquo; Lakes, and the broader Tampa Bay area, the competitive window is still open. Most local businesses have not started optimizing for AI recommendations yet. The businesses that act in 2025 and 2026 will own those AI recommendations for years. The ones that wait will spend twice as much catching up.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section data-scene="avc-how" className="bg-[#f5f5f7] py-12 sm:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
              What We Do
            </p>
            <h2 data-animate="how-title" className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Six-part framework. Measurable results in 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                data-animate="how-card"
                className="bg-white rounded-[18px] p-8 border border-[#e8e8ed]"
              >
                <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.15em] mb-3">
                  {s.n}
                </p>
                <h3 className="text-[20px] font-bold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-[16px] text-[#444] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Client Results
            </p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              What AI visibility consulting looks like in practice.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#f5f5f7] rounded-[18px] p-8 border border-[#e8e8ed]">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">HVAC · Wesley Chapel</p>
              <p className="text-[17px] font-semibold text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
                Invisible in local AI search to ranking in the top 3 for HVAC queries in Wesley Chapel and Tampa Bay.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Moved from unranked to position 2 in Google Maps",
                  "Now cited by ChatGPT for 'HVAC Wesley Chapel' queries",
                  "Citation accuracy fixed across 50+ directories",
                  "GBP reviews increased 3× in 90 days",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-[14px] text-[#444]">
                    <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
              <Link href="/case-studies" className="text-[13px] font-semibold text-[#18b5d8] hover:underline">
                Read the case study →
              </Link>
            </div>
            <div className="bg-[#f5f5f7] rounded-[18px] p-8 border border-[#e8e8ed]">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Chamber of Commerce · North Tampa Bay</p>
              <p className="text-[17px] font-semibold text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
                North Tampa Bay Chamber of Commerce went from no AI presence to being cited as a regional business resource.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Now cited by Perplexity and Google AI Overviews",
                  "Structured data added for events, membership, and services",
                  "Entity presence established in local news and business directories",
                  "Visibility measurable across 4 AI platforms within 30 days",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-[14px] text-[#444]">
                    <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
              <Link href="/case-studies" className="text-[13px] font-semibold text-[#18b5d8] hover:underline">
                Read the case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#f5f5f7] py-12 sm:py-20 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
            Investment
          </p>
          <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
            What AI visibility consulting costs in Tampa Bay.
          </h2>
          <p className="text-[17px] text-[#444] leading-relaxed mb-8">
            Most local businesses in Wesley Chapel and Tampa Bay start with the AI Visibility Foundation at $997 per month. That covers your initial audit, citation fixes across 50+ directories, schema implementation, GBP management, and monthly visibility reporting. A one-time audit without ongoing management is $497. Franchise operators and multi-location brands are handled on custom engagements.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: "AI Visibility Audit", price: "$497", detail: "One-time. Results in 48 hours. No commitment." },
              { label: "AI Visibility Foundation", price: "$997/mo", detail: "Ongoing management. Cancel anytime after 3 months." },
            ].map((p) => (
              <div key={p.label} className="bg-white rounded-[14px] p-6 border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#18b5d8] uppercase tracking-[0.1em] mb-2">{p.label}</p>
                <p className="text-[28px] font-black text-[#0a0a0a] mb-2">{p.price}</p>
                <p className="text-[14px] text-[#666]">{p.detail}</p>
              </div>
            ))}
          </div>
          <Link
            href="/plans"
            className="text-[14px] font-semibold text-[#18b5d8] hover:underline"
          >
            See full pricing and plan details →
          </Link>
        </div>
      </section>

      {/* Who it's for */}
      <section data-scene="avc-who" className="bg-[#0a0a0a] py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Who It's For
          </p>
          <h2 data-animate="who-title" className="display-lg text-white mb-4 sm:mb-6" style={{ textWrap: "balance" }}>
            Built for local businesses that want to lead, not chase.
          </h2>
          <p data-animate="who-sub" className="lead-airy text-white/65 mb-8 sm:mb-12">
            AI visibility consulting works best for established local businesses, regional service brands, and franchise operators in competitive markets. HVAC, legal, real estate, healthcare, home services, and professional services in Wesley Chapel and Tampa Bay, as well as multi-location brands entering or expanding in the region.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8 sm:mb-12">
            {[
              { label: "You rank on Google", body: "but want to capture the buyers who go to AI first before they ever reach organic results." },
              { label: "You run multiple locations", body: "and need consistent AI visibility across every market, not just your flagship." },
              { label: "You have reviews", body: "but ChatGPT and Gemini are not recommending you yet, and your competitors are starting to show up." },
            ].map((item) => (
              <div key={item.label} data-animate="who-card" className="bg-white/5 border border-white/10 rounded-[14px] p-6">
                <p className="text-[16px] font-semibold text-white mb-2">{item.label}</p>
                <p className="text-[15px] text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
          <div data-animate="who-cta">
            <Link
              href="/ai-audit"
              className="btn-press inline-block bg-[#18b5d8] text-black text-[17px] font-semibold rounded-full px-[28px] py-[13px] hover:bg-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8]"
            >
              Get My Free AI Audit
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-scene="avc-faq" className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Common Questions
          </p>
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            What you need to know before starting.
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} data-animate="faq-item" className="border-b border-[#e8e8ed] pb-8 last:border-0">
                <h3 className="text-[18px] font-bold text-[#0a0a0a] mb-3">{faq.q}</h3>
                <p className="text-[16px] text-[#444] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-scene="avc-cta" className="bg-[#18b5d8] py-14 sm:py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 data-animate="cta-title" className="display-lg text-black mb-4 sm:mb-5" style={{ textWrap: "balance" }}>
            Find out where you stand in 48 hours.
          </h2>
          <p data-animate="cta-sub" className="lead-airy text-black/65 mb-8 sm:mb-10">
            Get a free AI visibility report for your business. We check ChatGPT, Gemini,
            Perplexity, and Google AI Overviews and show you exactly where you appear, where
            you don't, and what to fix first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              data-animate="cta-btn"
              href="/ai-audit"
              className="btn-press inline-block bg-black text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              data-animate="cta-btn"
              href="/contact"
              className="btn-press inline-block border-2 border-black text-black text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-black hover:text-white motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#18b5d8]"
            >
              Speak with the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
