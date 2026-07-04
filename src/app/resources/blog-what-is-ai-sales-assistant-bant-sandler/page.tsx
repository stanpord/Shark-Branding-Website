import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is an AI Sales Assistant? BANT, Sandler, and Your Team | Shark AI Solutions',
  description: 'An AI Sales Assistant qualifies leads using proven frameworks like BANT and Sandler automatically. Here is what that means for your team and why it matters for service businesses in Tampa Bay.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-assistant-bant-sandler' },
  openGraph: {
    title: 'What Is an AI Sales Assistant? BANT, Sandler, and What It Means for Your Team',
    description: 'BANT and Sandler are proven sales qualification frameworks. An AI Sales Assistant runs them automatically on every inbound lead so your closers only talk to people who are ready.',
    url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-assistant-bant-sandler',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is an AI Sales Assistant? BANT, Sandler, and What It Means for Your Team',
  description: 'A plain-English explanation of what an AI Sales Assistant does, what BANT and Sandler qualification frameworks mean in practice, and how it changes what your human closers spend their time on.',
  url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-assistant-bant-sandler',
  datePublished: '2026-07-02',
  dateModified: '2026-07-02',
  author: {
    '@type': 'Person',
    '@id': 'https://sharkbrandingsolutions.com/about#michelle',
    name: 'Michelle Stanaland',
    url: 'https://sharkbrandingsolutions.com/about#michelle',
    jobTitle: 'Managing Partner and Founder, Shark AI Solutions',
  },
  publisher: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-assistant-bant-sandler' },
  keywords: ['AI sales assistant', 'BANT qualification AI', 'Sandler sales AI', 'AI lead qualification', 'AI sales automation Tampa Bay'],
  articleSection: 'AI Employees',
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sharkbrandingsolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'What Is an AI Sales Assistant?', item: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-assistant-bant-sandler' },
  ],
}

const faqs = [
  {
    q: 'What is an AI Sales Assistant?',
    a: 'An AI Sales Assistant is software that handles the early stages of your sales process automatically. It responds to inbound leads within seconds, asks qualifying questions based on proven frameworks like BANT or Sandler, scores the lead, and routes it to a human closer when the timing is right. Your salespeople only get involved with leads that have already been through a qualification process.',
  },
  {
    q: 'What is BANT and how does the AI use it?',
    a: 'BANT stands for Budget, Authority, Need, and Timeline. It is one of the most widely used lead qualification frameworks in B2B and service sales. The AI Sales Assistant surfaces these four signals during follow-up conversations: Does this person have budget? Are they the decision maker? Do they have a genuine need for your service? And when are they looking to move? Leads that clear all four signals are flagged as high-priority for immediate human follow-up.',
  },
  {
    q: 'What is the Sandler methodology and does the AI use it?',
    a: 'The Sandler Selling System is built around pain-first discovery. Instead of leading with your pitch, you lead with questions designed to surface the emotional and business pain the prospect is experiencing. The AI Sales Assistant can be configured to use Sandler-style discovery questions in its follow-up sequences, warming leads by getting them to articulate their own pain before your human closer ever gets on the phone.',
  },
  {
    q: 'Does the AI Sales Assistant work for service businesses, not just SaaS?',
    a: 'Yes, and service businesses are often where it adds the most value. A plumbing company, HVAC contractor, law firm, or healthcare practice gets a high volume of inbound inquiries where the qualification questions are consistent: What is the issue? Where are you located? When do you need service? Who makes the decision? The AI handles those questions automatically and routes the qualified lead to your team with a full summary.',
  },
  {
    q: 'What happens when a lead is not qualified?',
    a: 'Unqualified leads do not disappear. They go into a nurture sequence based on where they fell short in the qualification process. A lead that has the need but no budget right now gets checked back in 30 days. A lead that is clearly shopping for next year goes into a longer nurture. When circumstances change and the lead re-engages, the AI surfaces them back to your team with full history.',
  },
]

const bantFramework = [
  { letter: 'B', word: 'Budget', question: 'Do they have money allocated for this?', aiAction: 'Asks about budget range early in follow-up. Flags leads with budget as higher priority.', example: '"What kind of investment range are you working with for this project?"' },
  { letter: 'A', word: 'Authority', question: 'Are they the decision maker?', aiAction: 'Identifies whether the contact can say yes, or needs to involve someone else.', example: '"Is this something you decide on directly, or does it involve your partner or team?"' },
  { letter: 'N', word: 'Need', question: 'Do they actually need what you offer?', aiAction: 'Qualifies based on the specific problem they described in the initial call or form.', example: 'Pulled from the AI voice receptionist intake conversation automatically.' },
  { letter: 'T', word: 'Timeline', question: 'When are they looking to move?', aiAction: 'Separates immediate opportunities from longer-term nurture candidates.', example: '"Are you looking to get started in the next few weeks, or is this more of a longer-term plan?"' },
]

export default function WhatIsAiSalesAssistantPage() {
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
            What Is an AI Sales Assistant?
          </h1>
          <p className="lead-airy text-[#555] mb-8" style={{ textWrap: 'balance' }}>
            BANT, Sandler, lead qualification. Here is what those terms actually mean and how an AI Sales Assistant applies them automatically so your human closers only talk to people who are ready.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-[#999]">
            <span>By Michelle Stanaland</span>
            <span>·</span>
            <span>July 2, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-[720px] mx-auto">

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <p>
              You spend 45 minutes on the phone with someone who seems genuinely interested. You follow up twice. Then they disappear. Or you find out they were never the decision maker. Or their budget was half of what your service costs.
            </p>
            <p>
              That time is gone. There is no recovering it.
            </p>
            <p>
              BANT and Sandler are two frameworks sales teams have used for decades to stop that from happening. An AI Sales Assistant applies both automatically before your team spends a single minute on a prospect.
            </p>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">What BANT actually means</h2>
            <p>
              BANT stands for Budget, Authority, Need, and Timeline. IBM developed it in the 1950s and sales organizations have been using it ever since because it works. Before your closer gets on the phone, you want to know four things.
            </p>
          </div>

          {/* BANT table */}
          <div className="mb-16">
            <div className="rounded-[20px] overflow-hidden border border-[#e8e8ed]">
              <div className="grid grid-cols-4 bg-[#f5f5f7] border-b border-[#e8e8ed] px-6 py-4 gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8]">Letter</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Stands For</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">What It Asks</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">How AI Surfaces It</span>
              </div>
              {bantFramework.map((row, i) => (
                <div key={row.letter} className={`grid grid-cols-4 gap-3 px-6 py-5 border-b border-[#f0f0f0] last:border-0 ${i % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#18b5d8] text-white font-bold text-[16px] shrink-0">{row.letter}</div>
                  <p className="text-[14px] font-bold text-[#0a0a0a] self-center">{row.word}</p>
                  <p className="text-[13px] text-[#555] leading-relaxed self-center">{row.question}</p>
                  <p className="text-[13px] text-[#555] leading-relaxed self-center">{row.aiAction}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <p>
              When a lead clears all four, it gets flagged as high-priority and routed to your team with a summary. When a lead clears two or three, it goes into a nurture sequence until the missing signals show up. When it is clear the lead does not qualify at all, it gets logged and set aside so your team never sees it.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">What Sandler is and why it matters</h2>
            <p>
              The Sandler Selling System flips the traditional sales script. Instead of leading with your pitch, you lead with questions. The goal is to get the prospect to articulate their own pain, on their own terms, before you say anything about your solution.
            </p>
            <p>
              Why does this work? Because people convince themselves more readily than they are convinced by others. When a prospect describes the problem in their own words, they own it. By the time your closer gets on the phone, the prospect has already sold themselves on why the problem needs solving.
            </p>
            <p>
              The AI Sales Assistant uses Sandler-style discovery in its follow-up sequences. Instead of sending &ldquo;Just checking in, are you still interested?&rdquo;, it asks questions like: &ldquo;What has this been costing you in time or missed revenue?&rdquo; or &ldquo;What happens if this does not get fixed before summer?&rdquo; The answers warm the lead and give your closer a roadmap before they ever pick up the phone.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">What your human team actually does</h2>
            <p>
              They close. That is it. You can see the full picture of how <Link href="/aiemployees" className="text-[#18b5d8] hover:underline">our AI employees</Link> work together across the entire sales pipeline.
            </p>
            <p>
              Every lead your closer gets has already been through intake, qualification, and at least one or two nurture touchpoints. They know what the prospect needs, what their budget is, whether they are the decision maker, and what their timeline looks like. The conversation your closer has is not an exploratory call. It is a closing call.
            </p>
            <p>
              That is a different conversation entirely. Your closer is not starting from zero. They are picking up where the AI left off with full context and a warm lead.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">What this looks like for a service business in Tampa Bay</h2>
            <p>
              A homeowner calls about a kitchen renovation. The <Link href="/resources/blog-what-is-ai-voice-receptionist" className="text-[#18b5d8] hover:underline">AI voice receptionist</Link> takes the call, gets their contact info, and asks the basic intake questions. The lead hits the <Link href="/resources/blog-what-is-ai-sales-manager" className="text-[#18b5d8] hover:underline">AI Sales Manager</Link>, which scores it and routes it. The AI Sales Assistant sends a follow-up that evening with two Sandler-style questions about what the project delay has cost them.
            </p>
            <p>
              The prospect responds. The AI follows up again. By the time your estimator calls to book a site visit, the prospect has already described their timeline, confirmed they own the home, mentioned their budget range, and said they have been putting this off for two years.
            </p>
            <p>
              Your estimator did not do any of that work. The AI did. Want to see how this maps to your business? <Link href="/free-report" className="text-[#18b5d8] hover:underline">Our free AI visibility report</Link> shows you exactly where leads are slipping through right now.
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
              <Link href="/resources/blog-what-is-ai-sales-manager" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Sales Manager? What It Does After the Call Ends</span>
              </Link>
              <Link href="/resources/blog-what-is-ai-voice-receptionist" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Voice Receptionist? How It Works and What It Cannot Do</span>
              </Link>
              <Link href="/resources/blog-full-ai-suite-pricing" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">How Much Does the Full AI Suite Cost?</span>
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
              Find out how many qualified leads your business is losing right now.
            </h3>
            <p className="text-white/50 text-[15px] mb-8">Delivered in 48 hours. Specific to your business. No commitment.</p>
            <Link href="/free-report" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150">
              Get My Free AI Audit
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
