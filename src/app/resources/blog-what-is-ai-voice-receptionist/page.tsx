import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is an AI Voice Receptionist? | Shark AI Solutions',
  description: 'An AI voice receptionist answers every inbound call 24/7, qualifies callers, and books appointments automatically. How it works and how it compares to answering services.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-voice-receptionist' },
  openGraph: {
    title: 'What Is an AI Voice Receptionist (And Is It Better Than an Answering Service)?',
    description: 'AI voice receptionists answer every call, qualify every caller, and book appointments automatically. No per-call billing, no scripts that go stale, no missed leads.',
    url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-voice-receptionist',
    type: 'article',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is an AI Voice Receptionist (And Is It Better Than an Answering Service)?',
  description: 'A plain-English explanation of what an AI voice receptionist does, how it compares to a traditional answering service, and when it makes sense for small service businesses in Tampa Bay.',
  url: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-voice-receptionist',
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
  author: {
    '@type': 'Person',
    '@id': 'https://sharkbrandingsolutions.com/about#michelle',
    name: 'Michelle Stanaland',
    url: 'https://sharkbrandingsolutions.com/about#michelle',
    jobTitle: 'Managing Partner and Founder, Shark AI Solutions',
  },
  publisher: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-voice-receptionist' },
  keywords: ['AI voice receptionist', 'AI answering service', 'AI phone receptionist', 'automated receptionist Tampa Bay', 'AI call answering small business'],
  articleSection: 'AI Employees',
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://sharkbrandingsolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'What Is an AI Voice Receptionist?', item: 'https://sharkbrandingsolutions.com/resources/blog-what-is-ai-voice-receptionist' },
  ],
}

const faqs = [
  {
    q: 'What is an AI voice receptionist?',
    a: 'An AI voice receptionist is software that answers your inbound phone calls using a natural-sounding AI voice. It greets the caller, asks qualifying questions specific to your business, captures contact information, books appointments directly into your calendar, and transfers the call to a human when needed. It runs 24/7 with no per-call billing and no days off.',
  },
  {
    q: 'How is an AI voice receptionist different from an answering service?',
    a: 'A traditional answering service uses human operators working on rotation, usually across dozens of client accounts at once. They take messages and sometimes book appointments from a script. An AI voice receptionist is specific to your business, never puts a caller on hold waiting for an operator, asks qualifying questions dynamically based on caller responses, and feeds every interaction directly into your CRM. The AI also costs significantly less per interaction and does not charge per call.',
  },
  {
    q: 'Can an AI voice receptionist transfer calls to a real person?',
    a: 'Yes. Live call transfer is a standard feature. When a caller needs to speak with someone on your team, the AI can transfer the call in real time. You can also configure it to transfer certain caller types, such as existing clients or urgent service requests, directly to a designated team member without going through the full qualifying flow.',
  },
  {
    q: 'What happens when the AI does not know how to answer something?',
    a: 'The AI is configured with your specific business information: your services, your service area, your pricing structure, your team, and your common questions. For anything outside that scope, it captures the caller\'s contact information, lets them know a team member will follow up, and logs the inquiry in your CRM. It does not make up answers.',
  },
  {
    q: 'Does an AI voice receptionist work after hours?',
    a: 'Yes, and this is one of its highest-value use cases. The AI answers calls on evenings, weekends, and holidays with the same quality as a business-hours call. For service businesses where leads often come in at night or on weekends, after-hours coverage means every lead gets a response before your competitors wake up the next morning.',
  },
]

const comparison = [
  { factor: 'Availability', answering: '24/7 if you pay for it, but quality varies by shift and operator', ai: '24/7, identical quality every call regardless of time or volume', winner: 'ai' },
  { factor: 'Per-call cost', answering: '$0.75 to $1.50 per minute, adds up fast at volume', ai: 'Flat monthly rate, no per-call or per-minute billing', winner: 'ai' },
  { factor: 'Business-specific knowledge', answering: 'Operators work from a script you provide. Knowledge is static.', ai: 'Trained on your specific services, pricing, and workflows. Responds dynamically to what the caller says.', winner: 'ai' },
  { factor: 'CRM integration', answering: 'Messages delivered by email or text. Manual data entry required.', ai: 'Every call is automatically logged in your CRM with caller info, call summary, and qualification notes.', winner: 'ai' },
  { factor: 'Call transfer', answering: 'Most answering services can transfer calls to a designated number', ai: 'Live transfer with configurable routing rules by call type or caller status', winner: 'tie' },
  { factor: 'Appointment booking', answering: 'Some answering services offer this as an add-on at extra cost', ai: 'Books directly into your calendar during the call. No callback required.', winner: 'ai' },
  { factor: 'Complex complaints', answering: 'Human operators can handle tone and emotion better in difficult situations', ai: 'Escalates complex or sensitive calls to a human immediately', winner: 'answering' },
]

export default function WhatIsAiVoiceReceptionistPage() {
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
            What Is an AI Voice Receptionist?
          </h1>
          <p className="lead-airy text-[#555] mb-8" style={{ textWrap: 'balance' }}>
            And is it actually better than an answering service? Here is what an AI voice receptionist does, what it cannot do, and how to know if it is right for your business.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-[#999]">
            <span>By Michelle Stanaland</span>
            <span>·</span>
            <span>June 29, 2026</span>
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
              Most service businesses in Tampa Bay are losing leads they never know they lost. Not because of bad marketing or a weak offer. Because nobody answered the phone.
            </p>
            <p>
              A caller who reaches voicemail at 7 PM on a weekday does not leave a message and wait. They call the next business on the list. By morning, that lead belongs to someone else.
            </p>
            <p>
              An AI voice receptionist solves this specific problem. Here is how it actually works, and what it cannot do.
            </p>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">What an AI voice receptionist actually does on a call</h2>
            <p>
              When a caller dials your business number, the AI answers immediately. No hold time, no ringing through to voicemail. It greets them by your business name and asks how it can help.
            </p>
            <p>
              What happens next depends on what the caller says. If a homeowner calls about a broken AC unit, the AI asks about the system type, the symptoms, and the home address. It captures their name and contact number, checks your calendar for the next available slot, and books the service call before the conversation ends. No callback needed. No one on your team has to be awake.
            </p>
            <p>
              If the caller is an existing client who wants to speak with someone directly, the AI transfers the call in real time. If a question falls outside what the AI knows, it takes their information, lets them know a team member will follow up, and logs the inquiry in your CRM.
            </p>
            <p>
              Every call leaves a record. Caller name, number, reason for the call, qualifying details, and a conversation summary land in your CRM automatically. Your morning starts with context on every lead that came in overnight, not a stack of voicemails from people who have already called someone else.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">How it compares to a traditional answering service</h2>
            <p>
              <Link href="/resources/blog-ai-answering-service-vs-live-answering-service" className="text-[#18b5d8] hover:underline">A traditional answering service bills by the minute.</Link> A busy service business fielding 200 calls per month, with average calls running five minutes at a dollar per minute, is spending $1,000 per month just for someone to take a message.
            </p>
            <p>
              That same operator is working across a dozen other accounts at the same time. Your caller may wait. The script they follow is whatever you gave them when you signed up. If your services changed, the script probably did not.
            </p>
            <p>
              <Link href="/aiemployees" className="text-[#18b5d8] hover:underline">An AI voice receptionist</Link> runs on a flat monthly rate. Two hundred calls or two thousand calls, the number does not change. And the &ldquo;script&rdquo; updates whenever your business does, because it is trained on your specific services, not a document someone filed away three years ago.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mb-6">Side-by-side comparison</h2>
            <div className="rounded-[20px] overflow-hidden border border-[#e8e8ed]">
              <div className="grid grid-cols-3 bg-[#f5f5f7] border-b border-[#e8e8ed] px-6 py-4 gap-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Factor</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#999]">Answering Service</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#18b5d8]">AI Voice Receptionist</span>
              </div>
              {comparison.map((row, i) => (
                <div key={row.factor} className={`grid grid-cols-3 gap-4 px-6 py-5 border-b border-[#f0f0f0] last:border-0 ${i % 2 === 1 ? 'bg-[#fafafa]' : 'bg-white'}`}>
                  <p className="text-[14px] font-bold text-[#0a0a0a]">{row.factor}</p>
                  <p className={`text-[13px] leading-relaxed ${row.winner === 'answering' ? 'text-[#0a0a0a] font-semibold' : 'text-[#777]'}`}>{row.answering}</p>
                  <p className={`text-[13px] leading-relaxed ${row.winner === 'ai' ? 'text-[#0a0a0a] font-semibold' : 'text-[#777]'}`}>{row.ai}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[17px] leading-[1.75] text-[#333] space-y-6 mb-16">
            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-2 mb-4">The one thing answering services still do better</h2>
            <p>
              Difficult calls. A caller who is frustrated, a situation that needs judgment, a conversation that goes somewhere nobody planned for. Human operators handle these better. That is just true.
            </p>
            <p>
              But this is exactly where a well-configured AI voice receptionist hands off. The moment the tone shifts or a caller asks something outside the scope of the intake flow, the AI offers a live transfer. The hard conversation goes to a person. The routine volume stays with the AI.
            </p>
            <p>
              That split is exactly what you want.
            </p>

            <h2 className="text-[26px] font-bold text-[#0a0a0a] mt-8 mb-4">When an AI voice receptionist makes sense</h2>
            <p>
              If you are sending any calls to voicemail, an AI voice receptionist will pay for itself. One booked job per month from a lead that would have gone to voicemail covers the cost for most service businesses in this area. That is not a stretch. It is just math.
            </p>
            <p>
              The use case most business owners underestimate is after-hours. The calls that come in at 8 PM on a Thursday, or Saturday morning, or during the holidays. Those callers are not leaving messages. They are moving down the list. The AI answers every one of them the same way it answers a Tuesday afternoon call. This is <Link href="/resources/blog-why-tampa-bay-businesses-switching-ai-employees" className="text-[#18b5d8] hover:underline">why so many Tampa Bay businesses are making the switch</Link>.
            </p>
            <p>
              If your business handles sensitive intake, a medical practice or a legal firm with confidential information, the AI still handles the intake portion well. It just hands off to a human earlier. The caller gets a fast, professional response. Your team handles the details. <Link href="/free-report" className="text-[#18b5d8] hover:underline">Get our free AI visibility report</Link> to see exactly what coverage gaps exist in your current setup.
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
              <Link href="/resources/blog-ai-answering-service-vs-live-answering-service" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">AI Answering Service vs. Live Answering Service: The Full Breakdown</span>
              </Link>
              <Link href="/resources/blog-ai-receptionist-vs-human-receptionist" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">AI Receptionist vs. Human Receptionist: What Tampa Bay Businesses Need to Know</span>
              </Link>
              <Link href="/resources/blog-what-is-ai-sales-manager" className="flex items-center gap-3 group">
                <span className="text-[#18b5d8] font-bold shrink-0">→</span>
                <span className="text-[15px] text-[#333] group-hover:text-[#18b5d8] transition-colors">What Is an AI Sales Manager? What It Does After the Call Ends</span>
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
              Find out how many calls your business is missing right now.
            </h3>
            <p className="text-white/50 text-[15px] mb-8">Delivered in 48 hours. Specific to your business. No commitment.</p>
            <Link href="/ai-audit" className="inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150">
              Get My Free AI Audit
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
