import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Visibility in Wesley Chapel, FL | Shark AI Solutions',
  description: 'Shark AI Solutions helps Wesley Chapel businesses get found by ChatGPT, Google AI Overviews, Perplexity, and Gemini. Free AI Audit in 48 hours.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/wesley-chapel' },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Shark AI Solutions',
  description: 'AI visibility consulting for Wesley Chapel businesses. We help local companies get found and recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini.',
  url: 'https://sharkbrandingsolutions.com/wesley-chapel',
  telephone: '+17275133955',
  email: 'info@sharkbrandingsolutions.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27251 Wesley Chapel Blvd., Suite B14 #805',
    addressLocality: 'Wesley Chapel',
    addressRegion: 'FL',
    postalCode: '33544',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Wesley Chapel' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI visibility consulting in Wesley Chapel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI visibility consulting helps Wesley Chapel businesses get recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini when local buyers search for services. Shark AI Solutions audits your AI presence, fixes citation and schema issues, and builds the trust signals that AI models use to recommend your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see AI visibility results in Wesley Chapel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Wesley Chapel businesses see measurable movement in AI recommendations within 30 days. A local realtor moved from unranked to the #1 AI result for "Best Realtors in Wesley Chapel" in under 30 days after we corrected their citations, schema, and trust signals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Shark AI Solutions serve businesses outside of Wesley Chapel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shark AI Solutions is headquartered in Wesley Chapel and serves all Tampa Bay area businesses, including Lutz, Land O\' Lakes, Zephyrhills, New Tampa, and the broader Pasco and Hillsborough County region. Virtual consulting is also available for businesses outside Tampa Bay.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with AI visibility for my Wesley Chapel business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first step is a free AI Audit. We run your Wesley Chapel business through ChatGPT, Gemini, Perplexity, Google AI Overviews, and Copilot to identify where you are invisible or inconsistent. The audit is delivered within 48 hours and comes with no commitment. Contact Shark AI Solutions at (727) 513-3955 or info@sharkbrandingsolutions.com.',
      },
    },
  ],
}

const results = [
  { stat: '#1', detail: 'Realtor in Wesley Chapel in a market of 2,000+ agents. 30 days.' },
  { stat: '30', detail: 'Days to measurable AI visibility movement for Wesley Chapel clients.' },
  { stat: '3', detail: 'AI platforms, ChatGPT, Gemini, Perplexity, monitored for every client.' },
]

export default function WesleyChapelPage() {
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

      {/* Hero */}
      <section className="bg-white min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Wesley Chapel, FL
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Visibility Consulting
            <br />
            <span className="text-[#18b5d8]">for Wesley Chapel Businesses</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            When a Wesley Chapel customer asks ChatGPT, Google AI Overviews, or Perplexity for a local business recommendation, does your name come up? We make sure it does.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ai-audit"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/services"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* What is AI visibility */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">AI Visibility Consulting</p>
          <h2 className="display-lg text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            What is AI visibility consulting for Wesley Chapel businesses?
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed mb-5">
            AI visibility consulting is the discipline of making sure your business gets recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity when local buyers ask those platforms for a service like yours. It is not SEO, and it is not advertising. It is a separate set of signals that AI models use when they decide who to put in front of a buyer.
          </p>
          <p className="text-[16px] text-[#444] leading-relaxed mb-5">
            Those signals include citation consistency across directories, the completeness and activity level of your Google Business Profile, the volume and specificity of your reviews, structured schema data on your website, and the depth of authoritative content that establishes your business as the credible choice in your category and location.
          </p>
          <p className="text-[16px] text-[#444] leading-relaxed mb-8">
            For Wesley Chapel businesses, this matters more than it does in most markets. The area has grown faster than most of Florida, which means the competitive set for AI recommendations in categories like HVAC, law, real estate, home services, and healthcare has grown with it. A business that was easy to find two years ago may now be invisible to a buyer who went straight to ChatGPT.{' '}
            <Link href="/ai-visibility-consulting" className="text-[#18b5d8] hover:underline font-medium">
              Learn how our AI visibility consulting works.
            </Link>
          </p>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Wesley Chapel Problem</p>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: 'balance' }}>
              Wesley Chapel is growing fast. The competition for AI recommendations is growing with it.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Buyers in Wesley Chapel, Lutz, and Land O&rsquo; Lakes are increasingly using ChatGPT and Google AI to find local service providers before they ever visit a website. If AI doesn&rsquo;t recognize your business as credible and relevant, you lose that customer before the search even begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {results.map((r) => (
              <div key={r.stat} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(2rem,4vw,3rem)] font-black text-[#18b5d8] leading-none mb-3">{r.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do locally */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">How We Help Wesley Chapel Businesses</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Found. Trusted. Chosen.
            </h2>
            <p className="text-[16px] text-[#555] mt-5 max-w-[520px] mx-auto">
              Every Wesley Chapel business we work with goes through the same three-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              {
                step: '01',
                title: 'AI Audit',
                body: 'We run your Wesley Chapel business through ChatGPT, Gemini, Perplexity, Google AI Overviews, and Copilot to find exactly where you\'re invisible, inconsistent, or outranked. You get a clear picture of the gap before any work begins.',
              },
              {
                step: '02',
                title: 'Visibility Fix',
                body: 'We correct your signals across all platforms: listing accuracy, structured data, trust indicators, and content that AI can extract and use to recommend you when local buyers search.',
              },
              {
                step: '03',
                title: 'Ongoing Monitoring',
                body: 'AI algorithms change constantly. We watch your visibility across platforms every month and adapt before you notice a drop, keeping you in the recommendation shortlist.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-[#f5f5f7] rounded-[20px] p-7">
                <p className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-5">{s.step}</p>
                <h3 className="text-[18px] font-bold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-[14px] text-[#555] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0a0a0a] rounded-[16px] px-8 py-6 text-center">
            <p className="text-[16px] text-white/70">
              We&rsquo;re based in Wesley Chapel. <strong className="text-white">We know this market.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Local SEO bridge section */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">Local SEO in Wesley Chapel</p>
          <h2 className="display-lg text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            Local SEO in Wesley Chapel has changed. Most businesses haven&rsquo;t caught up.
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed mb-5">
            Wesley Chapel is one of the fastest-growing markets in Pasco County. That means more local businesses competing for the same buyers, and buyers using AI to shortcut the search. Traditional local SEO got you onto Google&rsquo;s map pack. AI visibility gets you into the shortlist ChatGPT and Gemini hand to the buyer who has already decided to spend money.
          </p>
          <p className="text-[16px] text-[#444] leading-relaxed mb-5">
            The local SEO fundamentals still matter: citation consistency, Google Business Profile, and review volume. But the ranking criteria have expanded. AI models also weigh schema markup, authoritative local content, and the depth of trust signals across the web. If your local SEO strategy stops at traditional search, you are already behind the businesses that have extended their optimization to the AI layer.
          </p>
          <p className="text-[16px] text-[#444] leading-relaxed">
            Shark AI Solutions is based in Wesley Chapel. We work exclusively in this market and the surrounding communities, Lutz, Land O&rsquo; Lakes, Zephyrhills, and New Tampa. We know the competitors, the buying behavior, and the search patterns specific to this area. Local SEO for Wesley Chapel is not a generic service we run remotely. It is what we do every day.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Who We Work With</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Wesley Chapel businesses across every category.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'Home Services', 'Real Estate', 'Healthcare', 'Legal',
              'Restaurants', 'Retail', 'Professional Services', 'Contractors',
              'Fitness & Wellness', 'Auto Services', 'Financial Services', 'Education',
            ].map((industry) => (
              <div key={industry} className="bg-white rounded-[12px] px-4 py-3 text-center border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#0a0a0a]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employees */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">AI Employees</p>
              <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: 'balance' }}>
                AI employees for Wesley Chapel businesses.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Beyond visibility, we build AI employees that run your business around the clock. From a 24/7 chat receptionist that qualifies and books leads, to automated review management and multi-touch follow-up sequences, Wesley Chapel businesses are cutting manual work and closing more without adding headcount.
              </p>
              <Link
                href="/aiemployees"
                className="inline-block text-[15px] font-semibold text-[#18b5d8] border border-[#18b5d8] rounded-full px-7 py-3 hover:bg-[#18b5d8] hover:text-white motion-safe:transition-colors duration-150"
              >
                Meet the AI Employees →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'Gemma', role: 'Chat Receptionist', desc: 'Greets every visitor and books appointments 24/7.' },
                { name: 'Reputation Specialist', role: 'Review Manager', desc: 'Requests and responds to reviews automatically.' },
                { name: 'AI CRM', role: 'Sales Assistant', desc: 'Runs email, SMS, and phone follow-up so no lead goes cold.' },
              ].map((emp) => (
                <div key={emp.name} className="bg-[#f5f5f7] rounded-[16px] px-5 py-4 border border-[#e8e8ed]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8] mb-0.5">{emp.role}</p>
                  <p className="text-[15px] font-bold text-[#0a0a0a] mb-1">{emp.name}</p>
                  <p className="text-[13px] text-[#555]">{emp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-6">Common Questions</p>
          <h2 className="display-lg text-[#0a0a0a] mb-10" style={{ textWrap: 'balance' }}>
            AI visibility in Wesley Chapel, answered.
          </h2>
          <div className="space-y-8">
            {[
              {
                q: 'What is AI visibility consulting in Wesley Chapel?',
                a: 'AI visibility consulting helps Wesley Chapel businesses get recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini when local buyers search for services. We audit your AI presence, fix citation and schema issues, and build the trust signals that AI models use to recommend your business over local competitors.',
              },
              {
                q: 'How long does it take to see AI visibility results in Wesley Chapel?',
                a: 'Most Wesley Chapel businesses see measurable movement in AI recommendations within 30 days. Citation corrections propagate within days to a few weeks. A local realtor we worked with moved from unranked to the top AI result for Wesley Chapel in under 30 days after we corrected their citations, schema, and trust signals.',
              },
              {
                q: 'Does Shark AI Solutions serve businesses outside of Wesley Chapel?',
                a: "Yes. We are headquartered in Wesley Chapel and serve businesses across all of Tampa Bay, including Lutz, Land O' Lakes, Zephyrhills, New Tampa, and the broader Pasco and Hillsborough County region. Virtual consulting is available for businesses outside Tampa Bay.",
              },
              {
                q: 'How do I get started with AI visibility for my Wesley Chapel business?',
                a: 'Start with a free AI Audit. We run your business through ChatGPT, Gemini, Perplexity, Google AI Overviews, and Copilot to identify exactly where you are invisible or inconsistent. The audit is delivered within 48 hours with no commitment required.',
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-[#e0e0e0] pb-8 last:border-none last:pb-0">
                <h3 className="text-[17px] font-bold text-[#0a0a0a] mb-3">{faq.q}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Wesley Chapel, FL</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free AI Audit for your Wesley Chapel business.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Delivered in 48 hours. No commitment. No sales pitch.
          </p>
          <Link
            href="/ai-audit"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </section>
    </>
  )
}
