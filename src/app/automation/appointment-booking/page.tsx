import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Appointment Booking Automation | Shark AI Solutions',
  description: 'AI appointment booking for Wesley Chapel and Tampa Bay. 24/7 lead qualification and calendar booking without phone tag or scheduling delays. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/automation/appointment-booking' },
  openGraph: {
    title: 'Appointment Booking Automation | Shark AI Solutions',
    description: 'Stop losing leads to phone tag and scheduling delays. AI chat books qualified appointments to your calendar 24/7 without any effort from your team.',
    url: 'https://sharkbrandingsolutions.com/automation/appointment-booking',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'Appointment Booking Automation | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/automation/appointment-booking#service',
      name: 'Appointment Booking Automation',
      description: 'AI-powered appointment booking for local businesses in Wesley Chapel and Tampa Bay. 24/7 lead qualification and direct calendar booking through an AI chat receptionist, with automated reminders that reduce no-shows by 60 to 75 percent.',
      url: 'https://sharkbrandingsolutions.com/automation/appointment-booking',
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
          name: 'How does automated appointment booking work for local businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI chat receptionist on your website greets every visitor, asks 2 to 3 qualifying questions specific to your service, and books them directly to your calendar. This happens 24/7 without any input from your team. Reminders go out automatically 24 hours and 2 hours before each appointment, with a one-tap reschedule option.' },
        },
        {
          '@type': 'Question',
          name: 'How much can appointment reminders reduce no-shows?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most businesses see no-show rates drop by 60 to 75 percent within the first month of implementing automated appointment reminders. No-show rates in Tampa Bay service businesses typically run 18 to 22 percent. Reducing that to 5 to 8 percent can recover four to six hours of billable time per week.' },
        },
        {
          '@type': 'Question',
          name: 'Can the AI book appointments after business hours?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. This is the primary value of AI appointment booking. In Wesley Chapel and Tampa Bay, a significant share of service leads come in between 7 PM and midnight. An AI receptionist handles those inquiries and books them directly to your calendar while you sleep. By morning, your schedule is filled with leads you would have missed.' },
        },
      ],
    },
  ],
}

export default function AppointmentBookingPage() {
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
            Appointment Booking
            <br />
            <span className="text-[#18b5d8]">Automation</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            An AI receptionist on your website qualifies every visitor and books them directly to your calendar, 24/7, no phone tag, no scheduling delays. Reminders go out automatically before every appointment, cutting no-shows by 60 to 75 percent.
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

      {/* Stats */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[600px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The Numbers</p>
            <h2 className="display-lg text-white" style={{ textWrap: 'balance' }}>
              Phone tag and no-shows are costing you real revenue.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-[20px] overflow-hidden">
            {[
              { stat: '3–7', detail: 'Qualified after-hours leads booked per day on average by businesses using AI appointment booking.' },
              { stat: '60–75%', detail: 'Reduction in no-show rates after implementing automated appointment reminders.' },
              { stat: '18–22%', detail: 'Average no-show rate for service appointments in Tampa Bay before automated reminders.' },
            ].map((s) => (
              <div key={s.stat} className="bg-[#111] px-7 py-8 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black text-[#18b5d8] leading-none mb-3">{s.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">What It Does</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              From first visit to confirmed appointment. No humans required.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                n: '01',
                title: 'Qualify',
                body: 'Every website visitor is greeted by Gemma, the AI receptionist. She asks 2 to 3 qualifying questions specific to your service, location, job type, timeline, and determines whether they are a good fit.',
              },
              {
                n: '02',
                title: 'Book',
                body: 'Qualified leads are shown your available calendar slots in real time and book directly. No phone tag. No back-and-forth emails. The appointment is confirmed in the conversation.',
              },
              {
                n: '03',
                title: 'Remind',
                body: 'Automated reminders go out 24 hours before and again 2 hours before the appointment. Each reminder includes the time, address, and a one-tap option to reschedule if needed.',
              },
            ].map((s) => (
              <div key={s.n} className="bg-[#f5f5f7] rounded-[20px] p-7 border border-[#e8e8ed]">
                <p className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase mb-4">{s.n}</p>
                <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-3">{s.title}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After-hours */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">After-Hours Booking</p>
              <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: 'balance' }}>
                Your calendar fills while you sleep.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                In Wesley Chapel and Tampa Bay, a significant share of service leads come in between 7 PM and midnight, after work, after dinner, when homeowners and business owners finally have time to take care of things. Most businesses have nothing running during those hours.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                An AI receptionist runs 24/7. Every after-hours visitor gets the same response as a 10 AM visitor. By the time you start your day, three to seven qualified appointments are already on the calendar.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { time: '8:47 PM', name: 'Marcus T.', detail: 'AC repair quote needed, booked for Thursday 9 AM' },
                { time: '10:12 PM', name: 'Sara K.', detail: 'Kitchen remodel consultation, booked for Friday 2 PM' },
                { time: '11:55 PM', name: 'David R.', detail: 'Roof inspection after storm, booked for Wednesday 8 AM' },
                { time: '6:03 AM', name: 'Leila M.', detail: 'Plumbing estimate, booked for Thursday 11 AM' },
              ].map((lead) => (
                <div key={lead.name} className="bg-white rounded-[14px] px-5 py-4 border border-[#e8e8ed] flex items-start gap-4">
                  <div className="text-[11px] text-[#999] font-semibold w-16 shrink-0 mt-0.5">{lead.time}</div>
                  <div>
                    <p className="text-[14px] font-bold text-[#0a0a0a]">{lead.name}</p>
                    <p className="text-[13px] text-[#555]">{lead.detail}</p>
                  </div>
                  <span className="ml-auto shrink-0 text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">Booked</span>
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
            <Link href="/automation/lead-follow-up" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Lead Follow-Up →</Link>
            <Link href="/automation/review-generation" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Review Generation →</Link>
            <Link href="/automation" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">All Automations →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Start booking appointments 24/7 without lifting a finger.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Free AI Audit delivered in 48 hours. We identify exactly how many leads your current booking process is losing before you invest in anything.
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
