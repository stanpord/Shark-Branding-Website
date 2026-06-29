import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "AI Visibility Isn't About Your Website | Shark AI Solutions",
  description: 'You don\'t need website access to fix your AI visibility. Most of what AI uses to recommend a business lives completely off your website. Here\'s where it actually comes from.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/resources/blog-ai-visibility-not-your-website' },
  openGraph: {
    title: 'Most of Your AI Visibility Has Nothing to Do With Your Website',
    description: 'AI doesn\'t recommend businesses based on their website rankings. It recommends based on trust signals that live completely off your site, and most business owners don\'t know this.',
    url: 'https://sharkbrandingsolutions.com/resources/blog-ai-visibility-not-your-website',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Most of Your AI Visibility Has Nothing to Do With Your Website',
  description: 'A breakdown of where AI systems actually get their information about local businesses, and why most of it has nothing to do with your website.',
  url: 'https://sharkbrandingsolutions.com/resources/blog-ai-visibility-not-your-website',
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  author: {
    '@type': 'Person',
    '@id': 'https://sharkbrandingsolutions.com/about#michelle',
    name: 'Michelle Stanaland',
    url: 'https://sharkbrandingsolutions.com/about#michelle',
    jobTitle: 'Managing Partner and Founder, Shark AI Solutions',
  },
  publisher: {
    '@id': 'https://sharkbrandingsolutions.com/#organization',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sharkbrandingsolutions.com/resources/blog-ai-visibility-not-your-website',
  },
  keywords: ['AI visibility', 'AI search optimization', 'Google AI Overviews', 'ChatGPT local business', 'GEO', 'generative engine optimization'],
  articleSection: 'AI Visibility',
}
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sharkbrandingsolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: structuredData.headline, item: 'https://sharkbrandingsolutions.com/resources/blog-ai-visibility-not-your-website' },
  ],
}


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does AI use your website to decide whether to recommend your business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Partially, but it\'s a small part of the picture. AI systems like ChatGPT, Perplexity, and Google AI Overviews pull from dozens of sources to build their understanding of a business: Google Business Profile, citation directories, review platforms, social profiles, press mentions, and structured entity data from across the web. Your website is one input, not the primary one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important factor for AI visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citation consistency is the most foundational factor. AI systems cross-reference your business information across dozens of sources. If your name, address, phone number, and category are inconsistent, even slightly, it creates data conflicts that reduce AI confidence in recommending you. After citation consistency, Google Business Profile completeness and review velocity are the next highest-impact factors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you improve AI visibility without touching someone\'s website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and this is one of the most common situations we work in. Most local business owners don\'t have access to their own website because their web designer or SEO agency controls it. That\'s not a blocker for AI visibility work. Google Business Profile, citations, review platforms, and entity data are all managed outside the website entirely. Schema markup is the one area that benefits from site access, but it can be added via Google Tag Manager without touching the CMS.',
      },
    },
  ],
}

const signals = [
  {
    n: '01',
    title: 'Google Business Profile',
    body: 'This is the single most important AI signal for local businesses. AI systems treat your GBP as the authoritative source for your business name, category, hours, location, phone number, and reviews. An incomplete or inconsistent GBP is the fastest way to disappear from AI recommendations, and fixing it requires no website access at all.',
  },
  {
    n: '02',
    title: 'Citation directories',
    body: 'Yelp, BBB, Apple Maps, Bing Places, Angi, HomeAdvisor, industry-specific directories, AI systems cross-reference your business information across all of them. When your name, address, and phone number match everywhere, AI confidence in recommending you goes up. When they conflict (and most local businesses have inconsistencies they don\'t know about), AI treats you as unreliable.',
  },
  {
    n: '03',
    title: 'Review platforms and review sentiment',
    body: 'AI doesn\'t just count your stars. It reads your reviews. Google AI Overviews, ChatGPT, and Perplexity all extract themes from what customers say about you, response time, quality, pricing, staff, specific services. Businesses with consistent positive review sentiment get cited. Businesses with sparse or negative reviews get skipped, regardless of their website.',
  },
  {
    n: '04',
    title: 'Social profiles',
    body: 'LinkedIn, Facebook, Instagram, AI systems use your social profiles to confirm your business is real, active, and consistent with what you claim elsewhere. The content matters less than the consistency: your business name, contact info, and category should match across all platforms. A dormant or incomplete social presence is a trust signal against you.',
  },
  {
    n: '05',
    title: 'Press mentions and third-party references',
    body: 'Has your business been featured in local news, industry publications, chamber directories, or partner sites? AI systems treat third-party mentions as credibility signals. A Tampa Bay Business Journal feature or a chamber of commerce listing carries more AI weight than a well-designed homepage. This is why PR and community involvement have a direct ROI in AI search.',
  },
  {
    n: '06',
    title: 'Entity data and structured knowledge',
    body: 'AI systems build a knowledge graph of every business they know about. Your entity, your business as a known, recognized thing, is built from all the signals above. When your entity is clear and consistent, AI can confidently name you as an answer. When it\'s fragmented or conflicting, AI hedges or skips you entirely.',
  },
]

export default function BlogAiVisibilityNotYourWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pt-24 pb-16 px-6 border-b border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-[13px] text-[#18b5d8] font-semibold hover:underline">
              ← Resources
            </Link>
            <span className="text-[#e0e0e0]">/</span>
            <span className="text-[13px] text-[#999]">AI Visibility</span>
          </div>
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Guide</p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            Most of Your AI Visibility Has Nothing to Do With Your Website
          </h1>
          <p className="lead-airy text-[#555] mb-8" style={{ textWrap: 'balance' }}>
            The assumption most business owners make is that AI works like Google, crawl the website, read the content, rank accordingly. It doesn&rsquo;t. Here&rsquo;s where AI actually gets its information, and why your website is a smaller piece of the picture than you think.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-[#999]">
            <span>By Michelle Stanaland</span>
            <span>·</span>
            <span>June 13, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-[720px] mx-auto">

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <p>
              One of the first things we hear when a business owner realizes they&rsquo;re invisible on ChatGPT is: &ldquo;I&rsquo;ll need to talk to my web person.&rdquo;
            </p>
            <p>
              They won&rsquo;t. Not for most of this.
            </p>
            <p>
              AI search systems, ChatGPT, Google AI Overviews, Perplexity, Gemini, don&rsquo;t decide who to recommend by reading your website the way a Google bot crawls a page. They build a picture of your business from dozens of sources across the entire internet. Your website is one of those sources. It is not the most important one.
            </p>
            <p>
              This matters practically. Most local business owners in Tampa Bay don&rsquo;t have login access to their own website. Their web designer or SEO agency controls it. If AI visibility required website access, that would be a real blocker. It doesn&rsquo;t.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-12 mb-4">Where AI actually looks</h2>
            <p>
              When someone asks ChatGPT &ldquo;who is the best HVAC company in Wesley Chapel,&rdquo; the AI doesn&rsquo;t load your website and read your homepage. It queries its training data and live search index for everything it knows about HVAC businesses in Wesley Chapel, pulling from Google Business Profile, review sites, citation directories, local news, social profiles, chamber listings, and structured data signals from across the web.
            </p>
            <p>
              Your website factors in, particularly if it has good content and schema markup. But it&rsquo;s one input among many. And it&rsquo;s often not the deciding one.
            </p>
          </div>

          {/* Signals */}
          <div className="space-y-12 mb-16">
            {signals.map((s) => (
              <div key={s.n} className="border-t border-[#e8e8ed] pt-10">
                <div className="flex items-start gap-5 mb-4">
                  <span className="font-mono text-[#18b5d8] text-[13px] tracking-[0.2em] uppercase shrink-0 pt-1">{s.n}</span>
                  <h2 className="text-[22px] font-bold text-[#0a0a0a] leading-tight">{s.title}</h2>
                </div>
                <p className="text-[17px] leading-[1.75] text-[#333] pl-10">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-4 mb-4">So what does require website access?</h2>
            <p>
              Schema markup, the structured data code that tells AI systems what type of business you are, what services you offer, and how to contact you, is ideally placed in your website&rsquo;s HTML. If your SEO agency controls your site, this is where they can help.
            </p>
            <p>
              But schema can also be added via Google Tag Manager without touching your CMS. If your website is locked, that&rsquo;s the workaround, and it works.
            </p>
            <p>
              Everything else, Google Business Profile, citations, reviews, social profiles, entity data, is managed completely outside your website. Your web person doesn&rsquo;t need to be involved, and you don&rsquo;t need their permission.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-12 mb-4">What this means for your business</h2>
            <p>
              If you&rsquo;ve been waiting for your SEO agency to &ldquo;get to it&rdquo; or assuming that building a new website will fix your AI visibility, it won&rsquo;t. The most common AI visibility gaps we see in Tampa Bay businesses have nothing to do with their website.
            </p>
            <p>
              They have conflicting business information across directories. Their Google Business Profile is incomplete or has the wrong category. They have fewer than 10 reviews and no strategy for getting more. AI has never seen a consistent, credible picture of who they are.
            </p>
            <p>
              Fix those signals, no website access required, and AI starts recommending you.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t border-[#e8e8ed] pt-12">
            <h2 className="text-[22px] font-bold text-[#0a0a0a] mb-8">Frequently asked questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: 'Does AI use your website to decide whether to recommend your business?',
                  a: 'Partially, but it\'s a small part of the picture. AI systems pull from dozens of sources to build their understanding of a business: Google Business Profile, citation directories, review platforms, social profiles, press mentions, and structured entity data from across the web. Your website is one input, not the primary one.',
                },
                {
                  q: 'What is the most important factor for AI visibility?',
                  a: 'Citation consistency is the most foundational factor. AI systems cross-reference your business information across dozens of sources. If your name, address, phone number, and category are inconsistent, even slightly, it creates data conflicts that reduce AI confidence in recommending you. After citation consistency, Google Business Profile completeness and review velocity are the next highest-impact factors.',
                },
                {
                  q: 'Can you improve AI visibility without touching someone\'s website?',
                  a: 'Yes, and this is one of the most common situations we work in. Most local business owners don\'t have access to their own website because their web designer or SEO agency controls it. That\'s not a blocker. Google Business Profile, citations, review platforms, and entity data are all managed outside the website entirely. Schema markup is the one area that benefits from site access, but it can be added via Google Tag Manager without touching the CMS.',
                },
              ].map((f) => (
                <details key={f.q} className="group bg-[#f5f5f7] rounded-[16px] border border-[#e8e8ed]">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                    <span className="text-[15px] font-semibold text-[#0a0a0a] pr-4">{f.q}</span>
                    <span className="text-[#18b5d8] font-bold text-[18px] shrink-0 group-open:rotate-45 transition-transform duration-150">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-[14px] text-[#555] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Related reading */}
          <div className="mt-12 border-t border-[#e8e8ed] pt-10">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#999] mb-4">Related reading</p>
            <div className="space-y-3">
              <Link href="/vs/seo" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">AI Visibility vs. Traditional SEO: What's Actually Different</span>
              </Link>
              <Link href="/resources/blog-seo-old-school-geo-ai-shift" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">Why Traditional SEO Isn't Enough Anymore</span>
              </Link>
              <Link href="/resources/blog-end-of-local-seo-ai-visibility" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">The End of Local SEO As You Knew It</span>
              </Link>
              <Link href="/ai-visibility-consulting" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">How our AI Visibility Consulting works</span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#0a0a0a] rounded-[20px] px-8 py-10 text-center">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Free AI Audit</p>
            <h3 className="text-[24px] font-bold text-white mb-4" style={{ textWrap: 'balance' }}>
              Find out where your business stands in AI search, no website access needed.
            </h3>
            <p className="text-white/50 text-[15px] mb-8">
              Delivered in 48 hours. Specific to your business. No commitment.
            </p>
            <Link
              href="/free-report"
              className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150"
            >
              Get My Free AI Audit
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
