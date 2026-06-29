import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lead Follow-Up Automation | Shark AI Solutions',
  description: 'Automated lead follow-up for Wesley Chapel and Tampa Bay businesses. Every lead gets an immediate multi-touch response across email, SMS, and phone. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/automation/lead-follow-up' },
  openGraph: {
    title: 'Lead Follow-Up Automation | Shark AI Solutions',
    description: 'Stop losing leads to slow response times. Automated multi-touch follow-up across email, SMS, and phone, configured for your business and live in one week.',
    url: 'https://sharkbrandingsolutions.com/automation/lead-follow-up',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'Lead Follow-Up Automation | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/automation/lead-follow-up#service',
      name: 'Lead Follow-Up Automation',
      description: 'Automated multi-touch lead follow-up sequences for local businesses in Wesley Chapel and Tampa Bay. Every new lead receives an immediate response and a structured sequence across email, SMS, and phone that stops automatically when they respond or book.',
      url: 'https://sharkbrandingsolutions.com/automation/lead-follow-up',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
      ],
      serviceType: 'Business Process Automation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does lead follow-up automation work for Wesley Chapel businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'When a new lead comes in through your website, phone, or any other channel, the automation triggers immediately. The lead receives an acknowledgment within seconds, an SMS follow-up within five minutes, and a structured sequence over the next five to ten days across email, SMS, and outbound phone. The sequence stops automatically the moment the lead responds or books an appointment.' },
        },
        {
          '@type': 'Question',
          name: 'Why is response speed so important for local businesses in Tampa Bay?',
          acceptedAnswer: { '@type': 'Answer', text: 'Research from the Harvard Business Review found that businesses that respond to a lead within five minutes are 21 times more likely to qualify that lead than those who wait 30 minutes. Most local businesses in Tampa Bay respond in hours. Automation closes that gap permanently, every lead, every time.' },
        },
        {
          '@type': 'Question',
          name: 'What happens to leads that go cold?',
          acceptedAnswer: { '@type': 'Answer', text: 'Leads that do not respond to the initial sequence are enrolled in cold lead re-engagement campaigns at 30, 60, and 90 days. A significant percentage of cold leads eventually convert, they were never gone, they just were not ready yet. Automated re-engagement captures those deals that manual follow-up always misses.' },
        },
      ],
    },
  ],
}

const steps = [
  { time: 'Immediately', channel: 'Email', label: 'Acknowledgment', body: 'The lead receives a personalized email confirming you received their inquiry and setting expectations for next steps.' },
  { time: '5 minutes', channel: 'SMS', label: 'First SMS', body: 'A brief, conversational text that opens a dialogue, not a sales pitch. Something like: "Hey, saw your inquiry, happy to help. What\'s the best time to connect?"' },
  { time: '24 hours', channel: 'Email', label: 'Value follow-up', body: 'A second email that adds something useful, a relevant case study, an answer to a common question, or a specific reason to move forward.' },
  { time: 'Day 3', channel: 'Phone', label: 'Outbound call', body: 'An automated outbound call attempts to reach the lead directly. If voicemail, a brief personalized message is left.' },
  { time: 'Day 5', channel: 'SMS', label: 'Check-in', body: 'A second SMS that acknowledges the lead may be busy and makes it easy to respond with a single word or tap.' },
  { time: 'Day 10', channel: 'Email', label: 'Final touch', body: 'A closing email that assumes they may have moved in a different direction but leaves the door open for future conversations.' },
]

export default function LeadFollowUpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="bg-white min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Automation · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            Lead Follow-Up
            <br />
            <span className="text-[#18b5d8]">Automation</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            Every new lead gets an immediate response and a multi-touch follow-up sequence across email, SMS, and phone. Automatically. The moment they respond, it stops. The moment they go cold, it re-engages them.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/automation"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
            >
              See All Automations
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Problem</p>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: 'balance' }}>
              Most leads are lost in the first five minutes.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Research from the Harvard Business Review found that businesses responding within five minutes are 21 times more likely to qualify a lead than those who wait 30 minutes. Most local service businesses in Wesley Chapel respond in hours, if they respond at all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { stat: '21×', detail: 'more likely to qualify a lead if you respond within 5 minutes vs. 30 minutes.' },
              { stat: '78%', detail: 'of customers buy from the first business that responds to their inquiry.' },
              { stat: '2–4', detail: 'extra closed deals per month recovered from leads that previously went cold.' },
            ].map((s) => (
              <div key={s.stat} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-[#18b5d8] leading-none mb-3">{s.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The sequence */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Sequence</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              What happens after every new lead comes in.
            </h2>
          </div>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#f5f5f7] rounded-[16px] px-7 py-5 border border-[#e8e8ed] grid grid-cols-1 sm:grid-cols-[100px_100px_1fr] gap-3 sm:gap-6 items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#999] mb-1">Timing</p>
                  <p className="text-[14px] font-bold text-[#0a0a0a]">{step.time}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#999] mb-1">Channel</p>
                  <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    step.channel === 'Email' ? 'bg-blue-100 text-blue-700' :
                    step.channel === 'SMS' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>{step.channel}</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#0a0a0a] mb-1">{step.label}</p>
                  <p className="text-[14px] text-[#555] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#0a0a0a] rounded-[16px] px-7 py-5 border border-white/5">
            <p className="text-[14px] font-bold text-[#18b5d8] mb-1">Automatic stop trigger</p>
            <p className="text-[14px] text-white/60 leading-relaxed">The entire sequence stops the moment the lead replies to any message, books an appointment, or is marked as closed in your CRM. No awkward messages to people who already said yes.</p>
          </div>
        </div>
      </section>

      {/* Cold re-engagement */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Cold Lead Re-Engagement</p>
              <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: 'balance' }}>
                Leads that went cold are not gone.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                A lead that did not respond three months ago may be ready now. Their project timeline changed. Their budget came through. They got three quotes and yours was the best. Automated re-engagement sends the right message at 30, 60, and 90 days, so you are there when they are finally ready.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                Most Wesley Chapel service businesses never follow up more than twice. The businesses using automated re-engagement are closing deals their competitors think are dead.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { day: '30 days', msg: 'A check-in message acknowledging time has passed and asking if they are still thinking about the project.' },
                { day: '60 days', msg: 'A value message, a relevant before/after, a case study, or a seasonal hook specific to your service.' },
                { day: '90 days', msg: 'A final re-engagement that makes it easy to restart the conversation with a low-commitment ask.' },
              ].map((r) => (
                <div key={r.day} className="bg-white rounded-[14px] px-6 py-4 border border-[#e8e8ed]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#18b5d8] mb-1">{r.day} after last contact</p>
                  <p className="text-[14px] text-[#555] leading-relaxed">{r.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related automations */}
      <section className="bg-white px-6 py-16 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-5">More Automations</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/automation/review-generation" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Review Generation →</Link>
            <Link href="/automation/appointment-booking" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Appointment Booking →</Link>
            <Link href="/automation" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">All Automations →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start with a free audit and see exactly what you are losing.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Delivered in 48 hours. No commitment. We show you exactly which leads are falling through the cracks before you invest in anything.
          </p>
          <Link
            href="/free-report"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Get My Free AI Audit
          </Link>
        </div>
      </section>
    </>
  )
}
