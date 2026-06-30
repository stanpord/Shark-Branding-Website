import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is an AI Sales Manager? | Shark AI Solutions',
  description: 'An AI Sales Manager routes leads, runs follow-up sequences, scores pipeline, and surfaces what needs attention, automatically. Here is what it actually does and when your business needs one.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-manager' },
  openGraph: {
    title: 'What Is an AI Sales Manager? What It Does All Day',
    description: 'An AI Sales Manager is the layer between lead capture and your human closers. It routes, scores, follows up, and reports without anyone managing it.',
    url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-manager',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is an AI Sales Manager? What It Does All Day',
  description: 'A plain-English explanation of what an AI Sales Manager does, how it works alongside your human team, and when a service business in Tampa Bay actually needs one.',
  url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-manager',
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  author: {
    '@type': 'Person',
    '@id': 'https://sharkbrandingsolutions.com/about#michelle',
    name: 'Michelle Stanaland',
    url: 'https://sharkbrandingsolutions.com/about#michelle',
    jobTitle: 'Managing Partner and Founder, Shark AI Solutions',
  },
  publisher: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-manager' },
  keywords: ['AI sales manager', 'AI sales automation', 'AI lead routing', 'automated sales pipeline', 'AI sales Tampa Bay'],
  articleSection: 'AI Employees',
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sharkbrandingsolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'What Is an AI Sales Manager?', item: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-sales-manager' },
  ],
}

const faqs = [
  {
    q: 'What is an AI Sales Manager?',
    a: 'An AI Sales Manager is the layer between lead capture and your human closers. It receives every new lead from your AI voice receptionist or chat widget, scores it based on conversation content, routes it to the right person or sequence, runs the initial follow-up automatically, and surfaces pipeline health without anyone pulling a report. It does what a sales manager does, minus the salary and the 9-to-5 schedule.',
  },
  {
    q: 'Does the AI Sales Manager replace my human sales team?',
    a: 'No. It handles the parts of sales management that nobody loves doing: lead routing, follow-up sequencing, pipeline reporting, and flagging stalled deals. Your human closers still handle the conversations that require judgment, relationship, and trust. The AI Sales Manager ensures those conversations only happen with qualified leads who have already been nurtured, so your team is spending time where it counts.',
  },
  {
    q: 'How does the AI Sales Manager route leads?',
    a: 'Routing rules are configured based on your business. Common setups include routing by lead type (emergency service vs. scheduled estimate), by geography (which technician or rep covers which area), by lead value (high-value leads go to senior team members first), or by time of day (after-hours leads enter a nurture sequence instead of going to a voicemail nobody checks until morning). You define the logic; the AI applies it to every lead automatically.',
  },
  {
    q: 'What does the AI Sales Manager do with leads that are not ready to buy?',
    a: 'It runs a nurture sequence. Leads that came in but did not book, or leads that went cold after an initial conversation, enter an automated follow-up flow. The AI sends timed messages, checks in, and re-qualifies when the lead re-engages. When a nurtured lead is ready, it surfaces back to your team with full context on every prior interaction.',
  },
  {
    q: 'How is this different from a CRM with automation?',
    a: 'A CRM with automation (like HubSpot workflows) requires someone to build the automation, maintain it, and update it when your business changes. It also depends on your team entering data for the automation to trigger correctly. An AI Sales Manager is configured for your specific business from the start, captures data automatically from every interaction, and adjusts routing and scoring based on what is actually happening in your pipeline, not what someone configured two years ago.',
  },
]

const comparison = [
  { factor: 'Lead routing', human: 'Done manually or assigned by whoever picks up first.', ai: 'Automatic. Every lead routed based on type, value, territory, and time of day.', winner: 'ai' },
  { factor: 'Follow-up speed', human: 'Depends on when your team gets around to it. Average is 2-3 hours.', ai: 'Within minutes of the lead coming in, every time.', winner: 'ai' },
  { factor: 'Pipeline visibility', human: 'Whoever pulls the report knows. Everyone else guesses.', ai: 'Real-time. Hot leads, stalled deals, and total pipeline value visible at any moment.', winner: 'ai' },
  { factor: 'Nurture sequences', human: 'Handled inconsistently, if at all. Cold leads usually just go cold.', ai: 'Every unbooked lead enters an automated sequence. Nothing falls through.', winner: 'ai' },
  { factor: 'Coaching and judgment', human: 'A human sales manager can coach team members through difficult deals.', ai: 'Not applicable. Coaching and relationship management still belong to humans.', winner: 'human' },
  { factor: 'Cost', human: '$60,000-$100,000/year for an experienced sales manager.', ai: 'Included in the Full AI Suite monthly rate.', winner: 'ai' },
  { factor: 'Hours of operation', human: '9 AM to 5 PM, Monday through Friday, plus some email at night.', ai: '24/7. Leads that come in at midnight get routed and followed up the same as a Monday morning lead.', winner: 'ai' },
]

export default function WhatIsAiSalesManagerPage() {
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
            What Is an AI Sales Manager?
          </h1>
          <p className="lead-airy text-[#555] mb-8" style={{ textWrap: 'balance' }}>
            It is not a robot sales rep. It is the layer between your leads and your human closers, and it handles everything in between automatically.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-[#999]">
            <span>By Michelle Stanaland</span>
            <span>·</span>
            <span>July 1, 2026</span>
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
              Ask any service business owner in Tampa Bay how they manage leads and you get the same answer. Someone catches the call when they can. If they are busy, they get to it later. Maybe one follow-up. If the lead does not respond, it fades. The pipeline lives in someone&apos;s head.
            </p>
            <p>
              That is not a people problem. It is a systems problem. Your team is not lazy. They are doing the work. Sales management is just nobody&apos;s actual job.
            </p>
            <p>
              An AI Sales Manager makes it a job. Just not a human one.
            </p>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">What an AI Sales Manager actually does</h2>
            <p>
              Every lead that comes in through the AI voice receptionist, the chat widget, or a web form hits the AI Sales Manager first. It sits between lead capture and your human team, and it makes decisions automatically.
            </p>
            <p>
              It scores each lead based on what the person actually said. Not just whether a form was filled out. Is this a job for this week or are they shopping for next year? Did they mention a budget? Did they say they own the property? Those signals drive the score, and the score drives what happens next.
            </p>
            <p>
              A high-value lead goes directly to a senior team member with full context on the call. Someone who needs more time goes into a follow-up sequence. Someone who is clearly not ready enters a longer nurture flow. Your team never touches any of this. The rules are set once. The AI runs them on every lead, every time.
            </p>
            <p>
              Follow-up does not wait. The first message goes out within minutes of the lead coming in. The Harvard Business Review tracked this: respond within five minutes instead of 30 and you are 21 times more likely to qualify the lead. The AI Sales Manager responds in under five minutes, every time, including 11 PM on a Sunday.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">What it does with leads that do not convert right away</h2>
            <p>
              Most leads are not ready to buy the day they contact you. They are comparing options, waiting on a spouse to weigh in, or just not in a rush. A human team forgets these people. The AI does not.
            </p>
            <p>
              Unbooked leads enter a nurture sequence. The AI checks in at timed intervals with relevant messages, not generic blasts. When a nurtured lead re-engages, the full history of every prior interaction is already in your CRM. Your team gets a notification with context, not just a name and a phone number.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mb-6">AI Sales Manager vs. human sales manager</h2>
            <div className="rounded-[20px] overflow-hidden border border-[#e8e8ed]">
              <div className="grid grid-cols-3 bg-[#f5f5f7] border-b border-[#e8e8ed] px-6 py-4 gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Factor</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Human Sales Manager</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8]">AI Sales Manager</span>
              </div>
              {comparison.map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-3 gap-4 px-6 py-5 border-b border-[#f0f0f0] last:border-0 ${i % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}>
                  <p className="text-[14px] font-bold text-[#0a0a0a]">{row.factor}</p>
                  <p className={`text-[13px] leading-relaxed ${row.winner === 'human' ? 'text-[#0a0a0a] font-semibold' : 'text-[#777]'}`}>{row.human}</p>
                  <p className={`text-[13px] leading-relaxed ${row.winner === 'ai' ? 'text-[#0a0a0a] font-semibold' : 'text-[#777]'}`}>{row.ai}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">What the AI Sales Manager cannot do</h2>
            <p>
              It cannot close a deal. It cannot read a room. It cannot build a relationship over lunch or handle a client who is upset about a specific job and needs to feel heard. Those things still belong to people.
            </p>
            <p>
              What the AI Sales Manager does is make sure your people are only spending time on those conversations. Not on routing leads, not on chasing cold prospects who have not responded in two weeks, not on building pipeline reports every Friday afternoon.
            </p>
            <p>
              The AI handles the pipeline. Your team handles the people.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">When your business actually needs one</h2>
            <p>
              If you are getting more than 30 inbound leads per month and any of them are falling through, you need a system. A spreadsheet is not a system. A shared inbox where everyone assumes someone else responded is not a system.
            </p>
            <p>
              If your follow-up speed is inconsistent, if leads go cold before your team gets to them, if you have no idea what your pipeline looks like right now without calling someone and asking, an AI Sales Manager solves all three of those problems at once.
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
              <Link href="/resources/blog-what-is-ai-sales-assistant-bant-sandler" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Sales Assistant? BANT, Sandler, and What It Means for Your Team</span>
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
              Find out how many leads your business is losing right now.
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
