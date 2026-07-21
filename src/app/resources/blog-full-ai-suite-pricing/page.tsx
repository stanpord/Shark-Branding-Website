import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does the Full AI Suite Cost? | Shark AI Solutions',
  description: 'The Full AI Suite from Shark AI Solutions is one flat monthly rate, custom quoted for your business, month-to-month. Here is exactly what is included and how it compares to building the same stack yourself.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/resources/blog-full-ai-suite-pricing' },
  openGraph: {
    title: 'How Much Does the Full AI Suite Cost? Transparent Pricing Breakdown',
    description: 'One flat monthly rate. One-time setup. Month-to-month. Here is everything included and how it compares to the alternatives.',
    url: 'https://sharkbrandingsolutions.com/resources/blog-full-ai-suite-pricing',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Much Does the Full AI Suite Cost? Transparent Pricing Breakdown',
  description: 'A transparent breakdown of Full AI Suite pricing from Shark AI Solutions: one flat monthly rate, custom quoted, month-to-month. What is included, what competitors charge for the same stack, and how the math works for a small service business.',
  url: 'https://sharkbrandingsolutions.com/resources/blog-full-ai-suite-pricing',
  datePublished: '2026-07-03',
  dateModified: '2026-07-03',
  author: {
    '@type': 'Person',
    '@id': 'https://sharkbrandingsolutions.com/about#michelle',
    name: 'Michelle Stanaland',
    url: 'https://sharkbrandingsolutions.com/about#michelle',
    jobTitle: 'Managing Partner and Founder, Shark AI Solutions',
  },
  publisher: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sharkbrandingsolutions.com/resources/blog-full-ai-suite-pricing' },
  keywords: ['Full AI Suite cost', 'AI suite pricing', 'AI receptionist cost', 'AI CRM pricing', 'AI sales assistant cost Tampa Bay'],
  articleSection: 'AI Employees',
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sharkbrandingsolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'How Much Does the Full AI Suite Cost?', item: 'https://sharkbrandingsolutions.com/resources/blog-full-ai-suite-pricing' },
  ],
}

const faqs = [
  {
    q: 'How much does the Full AI Suite cost?',
    a: 'The Full AI Suite from Shark AI Solutions is one flat monthly rate plus a one-time setup fee, custom quoted based on your business and scope. There are no per-call charges, no per-seat or per-user fees, and no annual contract requirement. You go month-to-month from day one.',
  },
  {
    q: 'What is included in the monthly rate?',
    a: 'The Full AI Suite includes an AI Voice Receptionist (answers every inbound call 24/7), an AI Chat Widget (handles website inquiries), an AI CRM (captures and logs every interaction automatically), an AI Sales Manager (routes leads, runs follow-up sequences, and reports on pipeline health), an AI Sales Assistant (qualifies leads using BANT or Sandler frameworks), and Reputation AI (monitors and responds to reviews). Configuration, ongoing optimization, and support are also included. You are not buying software licenses. You are buying a working system.',
  },
  {
    q: 'Why is the setup fee less than the monthly rate?',
    a: 'Because we do not sell implementations, we hire out a team. Setup is onboarding: one to two weeks configuring your AI employees for your business. The monthly rate is their payroll: six AI employees working 24/7, plus our team managing, optimizing, and improving them every month. Enterprise vendors charge $15,000 or more up front for implementation and then disappear. We put the cost where the work is, which means we only win if you stay. That is also why there is no annual contract. The money is in the monthly, so we have to re-earn the relationship every 30 days.',
  },
  {
    q: 'Why is there a setup fee?',
    a: 'Setup covers the work of configuring each AI employee for your specific business. The voice receptionist is trained on your services, your service area, your pricing, and your qualifying questions. The CRM is integrated with your calendar and communication channels. The follow-up sequences are written and tested. The chat widget is designed and deployed to your site. This takes real time from real people. The setup fee covers that work so you start with a system that actually works, not a generic template you have to figure out yourself.',
  },
  {
    q: 'What does this cost compared to building it yourself?',
    a: 'Building the same stack with separate vendors, at 100 calls per month and 200 chat interactions, typically runs $3,500 to $4,500 per month across four or more platforms. Most of those platforms require annual contracts. None of them are configured for your business out of the box, and none of them include the support and optimization that comes with the Full AI Suite. Year-one cost for the DIY approach is typically $50,000 to $60,000 when you include annual contracts and setup costs across vendors. The Full AI Suite delivers the same stack fully managed, with month-to-month flexibility, for one flat rate quoted to your scope.',
  },
  {
    q: 'Is there a contract or can I cancel anytime?',
    a: 'Month-to-month, no annual contract. We do not lock clients in because a system that is not delivering results should not be something you are stuck with. We also do not need a long contract to retain clients because the results are visible quickly. Most clients see the difference in call coverage and lead response within the first two weeks.',
  },
]

const included = [
  { employee: 'AI Voice Receptionist', what: 'Answers every inbound call 24/7. Greets callers by your business name, qualifies them, books appointments, and transfers calls when needed.', value: '$1,000-$1,500/mo to replicate with answering service at equivalent volume' },
  { employee: 'AI Chat Widget', what: 'Handles website inquiries in real time, captures lead info, answers FAQs specific to your business, and routes conversations to your CRM.', value: '$200-$400/mo for a comparable chat tool without AI qualification' },
  { employee: 'AI CRM', what: 'Captures every call, chat, and text automatically. Scores leads, logs full conversation summaries, and keeps your pipeline current without manual entry.', value: '$50-$200/user/month for traditional CRM, plus data entry your team will not do' },
  { employee: 'AI Sales Manager', what: 'Routes every lead based on your configured rules. Runs nurture sequences for unbooked leads. Surfaces hot leads and stalled deals in real time.', value: '$60,000-$100,000/year for a human doing this job part-time' },
  { employee: 'AI Sales Assistant', what: 'Qualifies leads using BANT or Sandler frameworks in follow-up sequences. Warms prospects so your human closers only handle ready conversations.', value: '$800-$2,000/mo for a dedicated SDR doing this manually' },
  { employee: 'Reputation AI', what: 'Monitors reviews across platforms, generates response drafts, and flags negative reviews for your team to review before responding.', value: '$300-$500/mo for a standalone reputation management platform' },
]

export default function FullAiSuitePricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }),
      }} />

      {/* Hero */}
      <section className="bg-white pt-24 pb-16 px-6 border-b border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/resources" className="text-[13px] text-[#18b5d8] font-semibold hover:underline">← Resources</Link>
            <span className="text-[#e0e0e0]">/</span>
            <span className="text-[13px] text-[#999]">AI Employees</span>
          </div>
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Guide · AI Employees</p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            How Much Does the Full AI Suite Cost?
          </h1>
          <p className="lead-airy text-[#555] mb-8" style={{ textWrap: 'balance' }}>
            The answer is one flat monthly rate plus a one-time setup fee, quoted to your business, month-to-month. Here is exactly what that gets you, what the alternatives cost, and how to think about the ROI.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-[#999]">
            <span>By Michelle Stanaland</span>
            <span>·</span>
            <span>July 3, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-[720px] mx-auto">

          {/* Price callout */}
          <div className="bg-[#f5f5f7] rounded-[20px] border border-[#e8e8ed] px-8 py-8 mb-12 text-center">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Full AI Suite Pricing</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div>
                <p className="text-[36px] font-bold text-[#0a0a0a] leading-none">One-time</p>
                <p className="text-[14px] text-[#777] mt-1">Setup fee</p>
              </div>
              <div className="text-[32px] text-[#ccc] font-light">+</div>
              <div>
                <p className="text-[36px] font-bold text-[#18b5d8] leading-none">Flat monthly rate</p>
                <p className="text-[14px] text-[#777] mt-1">Custom quoted to your scope</p>
              </div>
            </div>
            <p className="text-[13px] text-[#999] mt-6">Month-to-month. No annual contract. No per-call, per-user, or per-seat charging.</p>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <p>
              We get this question constantly, and we get why. AI sales and automation tools have a reputation for hiding the real number behind per-call pricing, per-user fees, or a base rate that only includes a fraction of what you actually need.
            </p>
            <p>
              So let us be direct. The Full AI Suite is a one-time setup fee and one flat monthly rate, quoted to your business on a strategy call. That number does not go up because you get more calls. It does not go up because you hire another person. It does not change because you need support or a configuration update.
            </p>
            <p>
              More calls, more team members, more growth. The price stays the same.
            </p>
          </div>

          {/* What's included */}
          <div className="mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mb-6">What is included</h2>
            <div className="space-y-4">
              {included.map((item, i) => (
                <div key={item.employee} className={`rounded-[16px] border border-[#e8e8ed] px-6 py-5 ${i % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#18b5d8] mt-2.5 shrink-0" />
                    <div>
                      <p className="text-[15px] font-bold text-[#0a0a0a] mb-1">{item.employee}</p>
                      <p className="text-[14px] text-[#555] leading-relaxed mb-2">{item.what}</p>
                      <p className="text-[12px] text-[#999] font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">What the DIY stack costs</h2>
            <p>
              The closest competitors to the Full AI Suite are not single products. They are four or five separate platforms stitched together. A voice answering service. A chat tool. A CRM. A follow-up automation tool. A reputation management platform. At the usage level of a typical Tampa Bay service business, that stack runs $3,500 to $4,500 per month before annual contracts and implementation.
            </p>
            <p>
              Most of those platforms require annual contracts. None of them talk to each other by default. And none of them are configured for your business. You get software. We give you a working system. See <Link href="/case-studies" className="text-[#18b5d8] hover:underline">our client results</Link> to understand what that difference looks like in practice.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">How to think about the ROI</h2>
            <p>
              One booked job per month from a lead that would have gone to voicemail covers a significant portion of the monthly cost. For an HVAC company or a law firm in Tampa Bay, a single after-hours call that gets answered and converts instead of disappearing can represent $500 to $5,000 in revenue.
            </p>
            <p>
              The <Link href="/resources/blog-what-is-ai-voice-receptionist" className="text-[#18b5d8] hover:underline">AI voice receptionist</Link> answers every call. The <Link href="/resources/blog-what-is-ai-sales-manager" className="text-[#18b5d8] hover:underline">AI Sales Manager</Link> follows up with every lead. The <Link href="/resources/blog-what-is-ai-sales-assistant-bant-sandler" className="text-[#18b5d8] hover:underline">AI Sales Assistant</Link> warms every prospect before your closer gets involved. None of those things require anyone on your team to be awake.
            </p>
            <p>
              The question is not whether the suite is expensive. It is whether you are currently leaving more revenue on the table every month than it costs, because your phones are not answered, your follow-up is inconsistent, and your pipeline is running out of someone&apos;s memory.
            </p>
            <p>
              For most businesses that call us, the answer is yes. <Link href="/free-report" className="text-[#18b5d8] hover:underline">Our free AI visibility report</Link> makes that calculation specific to your business within 48 hours.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-4 border-t border-[#e8e8ed] pt-12">
            <h2 className="text-[22px] font-bold text-[#0a0a0a] mb-8">Frequently asked questions</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
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

          {/* Internal links */}
          <div className="mt-12 border-t border-[#e8e8ed] pt-10">
            <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#999] mb-4">Related reading</p>
            <div className="space-y-3">
              <Link href="/resources/blog-what-is-ai-voice-receptionist" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Voice Receptionist? How It Works and What It Cannot Do</span>
              </Link>
              <Link href="/resources/blog-what-is-ai-crm-vs-hubspot" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI CRM (And How Is It Different From Traditional CRMs)?</span>
              </Link>
              <Link href="/resources/blog-what-is-ai-sales-manager" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Sales Manager? What It Does After the Call Ends</span>
              </Link>
              <Link href="/vs/salesforce" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">Salesforce vs. Full AI Suite: Side-by-Side Comparison</span>
              </Link>
              <Link href="/aiemployees" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">Meet the full AI employee team</span>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#0a0a0a] rounded-[20px] px-8 py-10 text-center">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Free AI Audit</p>
            <h3 className="text-[24px] font-bold text-white mb-4" style={{ textWrap: 'balance' }}>
              See what your business is missing before you spend a dollar.
            </h3>
            <p className="text-white/50 text-[15px] mb-8">Specific to your business. No commitment.</p>
            <Link href="/ai-audit" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150">
              Get My Free AI Audit
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
