import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Found on ChatGPT | Tampa Bay Local Business | Shark AI Solutions",
  description:
    "Get your Tampa Bay business found on ChatGPT. Shark AI Solutions helps local businesses appear in ChatGPT recommendations for Wesley Chapel, Tampa, and the greater Tampa Bay area.",
  alternates: { canonical: "https://shark-ai-solutions.com/get-found-on-chatgpt" },
  openGraph: {
    title: "Get Found on ChatGPT | Tampa Bay Local Business | Shark AI Solutions",
    description:
      "Get your Tampa Bay business found on ChatGPT. We help local businesses appear in ChatGPT recommendations for Wesley Chapel, Tampa, and surrounding areas.",
    url: "https://shark-ai-solutions.com/get-found-on-chatgpt",
    type: "website",
    images: [{ url: "https://shark-ai-solutions.com/logo.webp", width: 1200, height: 630, alt: "Get Found on ChatGPT | Tampa Bay | Shark AI Solutions" }],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shark-ai-solutions.com" },
    { "@type": "ListItem", position: 2, name: "Get Found on ChatGPT", item: "https://shark-ai-solutions.com/get-found-on-chatgpt" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Get Found on ChatGPT",
  description:
    "We help Tampa Bay local businesses appear in ChatGPT recommendations. Our process covers Bing index optimization, entity consistency, review signals, and structured data so ChatGPT recommends your business when local buyers ask.",
  url: "https://shark-ai-solutions.com/get-found-on-chatgpt",
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
      name: "How does ChatGPT decide which local businesses to recommend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT uses two sources to recommend local businesses: its training data (which reflects what was indexed and cited before its knowledge cutoff) and live web Browse using the Bing index. For current local queries, ChatGPT pulls from Bing. Businesses with strong Bing index coverage, consistent NAP data, high review volume on Google and Yelp, and structured data on their website are recommended most frequently.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my business not showing up in ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons a Tampa Bay business does not appear in ChatGPT recommendations are: not being indexed on Bing (ChatGPT's live search uses Bing, not Google), inconsistent business name, address, or phone data across directories (which makes AI models uncertain about your identity), low review volume or recency, missing structured data on your website, and no presence in the citation sources ChatGPT trusts most.",
      },
    },
    {
      "@type": "Question",
      name: "Does Google ranking help you get found on ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partially. ChatGPT's Browse mode uses Bing, not Google, so a high Google ranking does not automatically translate to ChatGPT visibility. However, the underlying signals overlap: strong reviews, consistent NAP data, structured data, and authoritative citation profiles all help on both Google and Bing. Businesses need to build index coverage on both to maximize AI visibility.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get found on ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvement in ChatGPT citation frequency within 30 to 60 days of implementation. Bing index improvements can take 2 to 4 weeks to propagate. Citation fixes and structured data updates are processed faster. Review volume builds over 60 to 90 days and has the most sustained long-term impact on ChatGPT recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get my business found on ChatGPT without spending money on ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ChatGPT does not sell ad placements in its recommendations. The businesses that get recommended are the ones with the strongest organic signals: consistent business data, high review volume and recency, structured data on their website, and strong Bing index coverage. This is earned visibility, not paid placement.",
      },
    },
  ],
};

const faqs = [
  {
    q: "How does ChatGPT decide which local businesses to recommend?",
    a: "ChatGPT uses two sources to recommend local businesses: its training data (which reflects what was indexed and cited before its knowledge cutoff) and live web Browse using the Bing index. For current local queries, ChatGPT pulls from Bing. Businesses with strong Bing index coverage, consistent NAP data, high review volume on Google and Yelp, and structured data on their website are recommended most frequently.",
  },
  {
    q: "Why is my business not showing up in ChatGPT?",
    a: "The most common reasons a Tampa Bay business does not appear in ChatGPT recommendations are: not being indexed on Bing (ChatGPT's live search uses Bing, not Google), inconsistent business name, address, or phone data across directories (which makes AI models uncertain about your identity), low review volume or recency, missing structured data on your website, and no presence in the citation sources ChatGPT trusts most.",
  },
  {
    q: "Does Google ranking help you get found on ChatGPT?",
    a: "Partially. ChatGPT's Browse mode uses Bing, not Google, so a high Google ranking does not automatically translate to ChatGPT visibility. However, the underlying signals overlap: strong reviews, consistent NAP data, structured data, and authoritative citation profiles all help on both Google and Bing. Businesses need to build index coverage on both to maximize AI visibility.",
  },
  {
    q: "How long does it take to get found on ChatGPT?",
    a: "Most clients see measurable improvement in ChatGPT citation frequency within 30 to 60 days of implementation. Bing index improvements can take 2 to 4 weeks to propagate. Citation fixes and structured data updates are processed faster. Review volume builds over 60 to 90 days and has the most sustained long-term impact on ChatGPT recommendations.",
  },
  {
    q: "Can I get my business found on ChatGPT without spending money on ads?",
    a: "Yes. ChatGPT does not sell ad placements in its recommendations. The businesses that get recommended are the ones with the strongest organic signals: consistent business data, high review volume and recency, structured data on their website, and strong Bing index coverage. This is earned visibility, not paid placement.",
  },
];

export default function GetFoundOnChatgptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      {/* Hero */}
      <section data-scene="chatgpt-hero" className="bg-[#07141a] sm:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-20 sm:pt-24 pb-12 sm:pb-20">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            ChatGPT Visibility · Tampa Bay, FL
          </p>
          <h1 className="display-hero text-white mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            Get your business
            <br />
            <span className="text-[#18b5d8]">found on ChatGPT.</span>
          </h1>
          <p className="lead-airy text-white/65 max-w-[580px] mx-auto mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            When someone in Wesley Chapel asks ChatGPT for the best HVAC company, the best attorney, or the best restaurant, your business should be the answer. We make that happen for Tampa Bay businesses.
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

      {/* How ChatGPT works */}
      <section className="bg-white py-12 sm:py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-5 sm:mb-6" style={{ textWrap: "balance" }}>
            How ChatGPT decides who to recommend.
          </h2>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            ChatGPT recommends local businesses using two data sources. The first is its training data: everything that was indexed and cited on the web before its knowledge cutoff. The second is live web Browse, which uses the Bing index to pull current information when someone asks about a business or service.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed mb-5">
            For local business queries in Tampa Bay, ChatGPT Browse is the active source. That means your Bing index coverage matters as much as your Google presence. Most local businesses have focused entirely on Google. They are invisible on Bing, and therefore invisible on ChatGPT.
          </p>
          <p className="text-[17px] text-[#444] leading-relaxed">
            The other major factor is trust signals. ChatGPT looks at review volume and recency, consistency of your business data across directories, and whether your website has structured data that confirms who you are, what you do, and where you operate. Businesses with thin signals get passed over. Businesses with strong signals get recommended.
          </p>
        </div>
      </section>

      {/* Five factors */}
      <section className="bg-[#07141a] py-12 sm:py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[540px] mb-10 sm:mb-14">
            <h2 className="display-lg text-white mb-4" style={{ textWrap: "balance" }}>
              Five things that control whether ChatGPT recommends you.
            </h2>
            <p className="text-[17px] text-white/60 leading-relaxed">
              These are not theories. They are the signals ChatGPT and its Bing index weight when generating a local business recommendation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                label: "Bing index coverage",
                body: "ChatGPT Browse uses Bing exclusively. If your site is not verified in Bing Webmaster Tools or your pages are not indexed on Bing, ChatGPT cannot find you.",
              },
              {
                num: "02",
                label: "NAP consistency",
                body: "Your business name, address, and phone number must match exactly across every directory. A single inconsistency creates doubt in the model and reduces recommendation probability.",
              },
              {
                num: "03",
                label: "Review volume and recency",
                body: "ChatGPT uses reviews as a proxy for business quality. A business with 12 reviews and a 5-star average loses to one with 90 reviews and a 4.6 average. Volume matters as much as rating.",
              },
              {
                num: "04",
                label: "Structured data on your website",
                body: "LocalBusiness schema tells ChatGPT exactly what your business does, where it is, and who it serves. Without it, the model has to infer, and inferences are often wrong or incomplete.",
              },
              {
                num: "05",
                label: "Citation presence",
                body: "Yelp, Angi, Thumbtack, BBB, and local news sites are among the sources ChatGPT cites most often. Presence and consistency in these directories is a direct input to ChatGPT recommendations.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <p className="text-[11px] font-bold text-[#18b5d8] tracking-[0.12em] mb-3">{item.num}</p>
                <p className="text-[16px] font-semibold text-white mb-3">{item.label}</p>
                <p className="text-[14px] text-white/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
            <div className="bg-[#18b5d8] rounded-2xl p-7 flex flex-col justify-between">
              <p className="text-[16px] font-semibold text-black mb-3">Ready to fix your ChatGPT visibility?</p>
              <Link href="/ai-audit" className="btn-press inline-block bg-black text-white text-[15px] font-semibold rounded-full px-5 py-3 hover:bg-white hover:text-black motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black self-start">
                Free AI Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="bg-white py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-10 sm:mb-14 max-w-[520px]" style={{ textWrap: "balance" }}>
            What we fix to get you found on ChatGPT.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Bing Webmaster Tools setup and verification", body: "We connect your site to Bing Webmaster Tools, submit your sitemap, and request indexing for your key pages so ChatGPT Browse can find you." },
              { label: "NAP consistency audit and correction", body: "We identify every directory where your business name, address, or phone number does not match and correct them, systematically and completely." },
              { label: "Review generation system", body: "We build an automated post-job review request sequence that consistently grows your Google and Yelp review volume, the two most cited review platforms in ChatGPT responses." },
              { label: "LocalBusiness schema implementation", body: "We add structured data to your website that tells ChatGPT your business name, category, service area, hours, and phone number in machine-readable format." },
              { label: "Citation placements in ChatGPT-trusted sources", body: "We identify which directories and publications ChatGPT cites most often for your business category in your market and pursue placements in them." },
              { label: "Monthly ChatGPT visibility testing", body: "We run 20 or more constrained queries targeting your market and category each month and report your citation frequency, your competitors, and the next set of actions." },
            ].map((item) => (
              <div key={item.label} className="border border-[#e8e8ed] rounded-2xl p-6">
                <p className="text-[15px] font-semibold text-[#0a0a0a] mb-2">{item.label}</p>
                <p className="text-[14px] text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] py-12 sm:py-24 px-6 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="display-lg text-[#0a0a0a] mb-8 sm:mb-12" style={{ textWrap: "balance" }}>
            Common questions about ChatGPT visibility.
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
            Find out if ChatGPT knows your business exists.
          </h2>
          <p className="lead-airy text-black/65 mb-8 sm:mb-10">
            Free audit. We run your business through ChatGPT using the queries your customers actually ask and show you exactly what comes back and what needs to change.
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
