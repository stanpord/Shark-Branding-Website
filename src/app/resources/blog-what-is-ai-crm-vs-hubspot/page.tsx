import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is an AI CRM (And How Is It Different From HubSpot)? | Shark AI Solutions',
  description: 'An AI CRM does not just store contact data. It captures every call, text, and chat automatically, scores leads in real time, and follows up without anyone on your team touching it.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-crm-vs-hubspot' },
  openGraph: {
    title: 'What Is an AI CRM? How It Differs From HubSpot and Traditional CRMs',
    description: 'Traditional CRMs store data your team enters. An AI CRM captures every interaction automatically and acts on what it finds. Here is what that difference actually looks like.',
    url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-crm-vs-hubspot',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is an AI CRM (And How Is It Different From HubSpot)?',
  description: 'A plain-English breakdown of what an AI CRM actually does, how it compares to traditional platforms like HubSpot, and why the difference matters for service businesses in Tampa Bay.',
  url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-crm-vs-hubspot',
  datePublished: '2026-06-30',
  dateModified: '2026-06-30',
  author: {
    '@type': 'Person',
    '@id': 'https://sharkbrandingsolutions.com/about#michelle',
    name: 'Michelle Stanaland',
    url: 'https://sharkbrandingsolutions.com/about#michelle',
    jobTitle: 'Managing Partner and Founder, Shark AI Solutions',
  },
  publisher: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-crm-vs-hubspot' },
  keywords: ['AI CRM', 'AI CRM vs HubSpot', 'AI customer relationship management', 'automated CRM Tampa Bay', 'AI CRM small business'],
  articleSection: 'AI Employees',
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sharkbrandingsolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'What Is an AI CRM?', item: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-crm-vs-hubspot' },
  ],
}

const faqs = [
  {
    q: 'What is an AI CRM?',
    a: 'An AI CRM is a customer relationship management system that automatically captures data from every interaction, including phone calls, texts, chats, and emails, without manual entry from your team. It scores leads based on conversation content, triggers follow-up sequences automatically, and surfaces which contacts need attention right now. Unlike traditional CRMs, it does not depend on your salespeople remembering to log activity.',
  },
  {
    q: 'How is an AI CRM different from HubSpot or Salesforce?',
    a: 'HubSpot and Salesforce are storage and reporting platforms. They are as accurate as the data your team enters, which is often incomplete or outdated. An AI CRM builds contact records automatically from every conversation. It does not remind your team to follow up. It follows up. It does not show you a lead went cold. It acts before the lead goes cold.',
  },
  {
    q: 'Does the AI CRM replace the tools my team already uses?',
    a: 'That depends on how you have things set up. In most cases, the AI CRM functions as the central hub that connects your AI voice receptionist, your chat widget, and your follow-up sequences. If your team is already inside a specific platform like HubSpot, we can often integrate rather than replace. For businesses without an existing CRM, the AI CRM handles everything from day one.',
  },
  {
    q: 'What data does the AI CRM actually capture?',
    a: 'Every inbound call through the AI voice receptionist is logged with the caller name, number, reason for the call, qualification details from the conversation, and a summary. Chat interactions are captured the same way. Follow-up emails and texts sent by the AI are logged. Appointment bookings are recorded. The result is a complete contact history built automatically, with no manual input required from your team.',
  },
  {
    q: 'Can the AI CRM score and route leads automatically?',
    a: 'Yes. Lead scoring in an AI CRM is based on actual conversation content, not just form fills or page views. A caller who says they need a service this week and owns the property scores differently than someone shopping around for next year. Routing rules can be configured to send high-value leads directly to a senior team member, while lower-priority inquiries go into a nurture sequence until they are ready.',
  },
]

const comparison = [
  { factor: 'Data entry', traditional: 'Manual. Your team logs activity when they remember to.', ai: 'Automatic. Every call, text, chat, and email is captured without anyone touching it.', winner: 'ai' },
  { factor: 'Follow-up', traditional: 'Reminds your team to follow up. Whether they do is another story.', ai: 'Follows up automatically based on lead score, timing rules, and conversation content.', winner: 'ai' },
  { factor: 'Lead scoring', traditional: 'Rule-based scoring you configure once and rarely revisit.', ai: 'Scores dynamically based on what the lead actually said during the conversation.', winner: 'ai' },
  { factor: 'Contact records', traditional: 'As complete as your team makes them. Usually missing half the story.', ai: 'Built from every interaction automatically. Complete by default.', winner: 'ai' },
  { factor: 'Reporting', traditional: 'Shows you what happened last month. Useful for hindsight.', ai: 'Shows what is happening right now. Flags stalled deals and hot leads in real time.', winner: 'ai' },
  { factor: 'Team adoption', traditional: 'Requires training, enforcement, and ongoing management.', ai: 'No data entry means nothing new for your team to learn or maintain.', winner: 'ai' },
  { factor: 'Customization depth', traditional: 'HubSpot and Salesforce offer more configuration options and integrations.', ai: 'Configured for your specific business, but with less flexibility for complex enterprise workflows.', winner: 'traditional' },
]

export default function WhatIsAiCrmPage() {
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
            What Is an AI CRM?
          </h1>
          <p className="lead-airy text-[#555] mb-8" style={{ textWrap: 'balance' }}>
            And how is it different from HubSpot? A plain-English breakdown of what an AI CRM actually does, what traditional CRMs cannot do, and which one your business actually needs.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-[#999]">
            <span>By Michelle Stanaland</span>
            <span>·</span>
            <span>June 30, 2026</span>
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
              Most small businesses in Tampa Bay have one of two CRM situations. Either they are paying for HubSpot or Salesforce and nobody is using it consistently. Or they are running everything out of a shared spreadsheet and calling it a system.
            </p>
            <p>
              Neither one is working.
            </p>
            <p>
              The reason is not the software. It is the model. Traditional CRMs are built around the assumption that your team will log activity. That they will update contact records after every call. That they will mark leads as qualified or disqualified in real time. That assumption has never been realistic for a small service business where the same people answering phones are also doing the work.
            </p>
            <p>
              An AI CRM works from a different assumption. It builds the record itself.
            </p>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">What a traditional CRM actually does</h2>
            <p>
              HubSpot, Salesforce, Zoho, and most CRMs on the market are databases with a sales workflow layered on top. They store contact information, log communications, and send reminders to follow up. The data inside them is exactly as good as what your team puts in.
            </p>
            <p>
              For a sales team of 20 with a dedicated sales ops person, that model works. For a five-person HVAC company or a three-person law firm, it does not. Nobody has time to log every call. Nobody is updating lead statuses after a busy Tuesday. The CRM becomes an expensive address book that sends your sales manager daily reminders nobody responds to.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">What an AI CRM does differently</h2>
            <p>
              An AI CRM captures data from the source instead of asking your team to enter it later. When the AI voice receptionist takes a call, the caller&apos;s name, number, reason for the call, and every qualifying detail from the conversation lands in the CRM automatically. No one has to type anything. No one has to remember.
            </p>
            <p>
              The same happens with chat interactions, inbound texts, and follow-up emails sent by the AI. Every touchpoint builds the contact record without a person in the middle.
            </p>
            <p>
              Lead scoring works the same way. Instead of rules based on form fills and page views, the AI scores based on what the contact actually said. A caller who mentions they need service this week and owns the property scores differently than someone who is comparing prices for next year. That difference drives who gets an immediate callback and who goes into a nurture sequence.
            </p>
            <p>
              Follow-up does not wait for a reminder to appear on someone&apos;s calendar. It runs automatically based on lead score, timing, and where the contact is in the pipeline.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mb-6">Side-by-side comparison</h2>
            <div className="rounded-[20px] overflow-hidden border border-[#e8e8ed]">
              <div className="grid grid-cols-3 bg-[#f5f5f7] border-b border-[#e8e8ed] px-6 py-4 gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Factor</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Traditional CRM</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8]">AI CRM</span>
              </div>
              {comparison.map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-3 gap-4 px-6 py-5 border-b border-[#f0f0f0] last:border-0 ${i % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}>
                  <p className="text-[14px] font-bold text-[#0a0a0a]">{row.factor}</p>
                  <p className={`text-[13px] leading-relaxed ${row.winner === 'traditional' ? 'text-[#0a0a0a] font-semibold' : 'text-[#777]'}`}>{row.traditional}</p>
                  <p className={`text-[13px] leading-relaxed ${row.winner === 'ai' ? 'text-[#0a0a0a] font-semibold' : 'text-[#777]'}`}>{row.ai}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">Where HubSpot still wins</h2>
            <p>
              Enterprise workflows. If your business has a complex multi-stage sales process, a large sales team with assigned territories, deep integration requirements across fifteen platforms, and a dedicated admin to manage it all, HubSpot or Salesforce is probably the right call.
            </p>
            <p>
              For a service business in Wesley Chapel or Tampa Bay with fewer than 20 employees, the depth of those platforms is not an advantage. It is a liability. You are paying for features nobody uses, managed by nobody whose job it is to manage them.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">The real question</h2>
            <p>
              It is not &ldquo;HubSpot or AI CRM.&rdquo; It is: does your current system actually know what happened on the calls you got last week? Does it know which leads followed up and which ones went cold? Does it know who your best leads are right now, not at the end of the month when someone pulls a report?
            </p>
            <p>
              If the answer is no, the problem is not which CRM you picked. The problem is that your CRM depends on your team to work, and your team has other things to do.
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
              <Link href="/resources/blog-what-is-ai-sales-manager" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Sales Manager? What It Does After the Call Ends</span>
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
              Find out what your business is missing right now.
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
