import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Employees for Healthcare Practices in Wesley Chapel & Tampa Bay — Shark Branding Solutions',
  description: 'AI employees built for medical practices, dental offices, and clinics in Wesley Chapel and Tampa Bay. Automated patient follow-up, appointment reminders, review requests, and 24/7 chat booking. Live in one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees/healthcare' },
  openGraph: {
    title: 'AI Employees for Healthcare Practices — Wesley Chapel & Tampa Bay',
    description: 'Stop losing patients to slow response times and manual scheduling. AI employees handle inbound inquiries, appointment reminders, and reviews 24/7.',
    url: 'https://sharkbrandingsolutions.com/aiemployees/healthcare',
    type: 'website',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees/healthcare#service',
      name: 'AI Employees for Healthcare Practices',
      description: 'AI employees configured for medical practices, dental offices, chiropractic clinics, and specialty providers in Wesley Chapel and Tampa Bay. Includes 24/7 patient inquiry handling, automated appointment reminders, post-visit review requests, and new patient follow-up.',
      url: 'https://sharkbrandingsolutions.com/aiemployees/healthcare',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
        { '@type': 'City', name: 'Zephyrhills' },
        { '@type': 'City', name: 'New Tampa' },
      ],
      serviceType: 'AI Business Automation',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do AI employees help healthcare practices in Wesley Chapel?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI employees solve the three biggest patient experience gaps for healthcare practices: slow response to new patient inquiries, no-shows from missed appointment reminders, and inconsistent review collection. A chat receptionist responds to every inbound inquiry immediately, answers common questions, and books appointments around the clock. An AI CRM sends appointment reminders and follows up with new patients who inquired but never booked. A Reputation Specialist requests a review after every completed visit.' },
        },
        {
          '@type': 'Question',
          name: 'Are AI employees HIPAA-compliant for healthcare practices?',
          acceptedAnswer: { '@type': 'Answer', text: 'The AI employees we configure for healthcare practices handle non-clinical front-desk tasks: scheduling inquiries, appointment reminders, and review requests. These systems are configured to avoid collecting or transmitting protected health information. We review the specific workflow with each practice before configuration to ensure appropriate handling of patient-facing communications.' },
        },
        {
          '@type': 'Question',
          name: 'How much can appointment reminders reduce no-shows for medical practices?',
          acceptedAnswer: { '@type': 'Answer', text: 'Healthcare practices typically see no-show rates of 18 to 23 percent without automated reminders. With automated SMS reminders sent 24 hours and 2 hours before an appointment, most practices reduce no-shows by 60 to 75 percent within the first month. Recovering four to six appointments per week at typical rates represents significant monthly revenue.' },
        },
      ],
    },
  ],
}

const employees = [
  {
    name: 'Gemma',
    role: 'Chat Receptionist',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'New patients shopping for a provider in Wesley Chapel check two or three practices online before calling anyone. The practice that responds first — to a website inquiry, a contact form, or a chat message — wins the new patient. Most practices respond during business hours, which means after-hours inquiries sit until morning.',
    solution: 'Gemma greets every website visitor immediately, answers common questions about services, accepted insurance, and office hours, and collects contact details for scheduling follow-up. For straightforward appointment types, she books directly to your calendar. After-hours inquiries receive an immediate acknowledgment and a callback or booking confirmation by the start of the next business day.',
    bullets: ['Responds to every inquiry immediately', 'Answers FAQs about services and insurance', 'Books new patient appointments 24/7', 'After-hours coverage every night and weekend'],
  },
  {
    name: 'AI CRM',
    role: 'Sales Assistant',
    color: '#18b5d8',
    colorBg: '#e8f8fc',
    problem: 'Healthcare practices lose new patients in two places: inquiries that never convert to appointments, and no-shows that were never reminded. Both are expensive. A missed new patient slot costs the practice that appointment\'s revenue. A no-show costs the slot entirely.',
    solution: 'Every new patient inquiry gets an immediate acknowledgment and a structured follow-up sequence until they book. Every scheduled appointment gets a reminder SMS 24 hours before and again 2 hours before — with a one-tap option to confirm or reschedule. Patients who cancel can be offered the next available slot automatically, keeping the schedule full.',
    bullets: ['New patient follow-up until they book', '24-hour and 2-hour appointment reminders', 'One-tap confirm or reschedule option', 'Cancellation recovery with next-slot offer'],
  },
  {
    name: 'Reputation Specialist',
    role: 'Review Manager',
    color: '#d4a200',
    colorBg: '#fef9e7',
    problem: 'Patients choosing a new healthcare provider check Google reviews before calling. A practice with 15 reviews loses new patients to one with 150, even if the care is identical. Most practices never ask for reviews because it feels awkward in a clinical setting and staff are too busy at checkout to remember.',
    solution: 'Within a few hours of a completed visit, your Reputation Specialist sends a brief, warm SMS thanking the patient for their visit and including a direct link to your Google review page. The message is configured to match your practice\'s tone — professional, warm, and never pushy. Every review that comes in gets a brand-voice response within two hours.',
    bullets: ['Post-visit review requests via SMS', 'Warm, professional tone configured for your practice', 'Responds to every review within 2 hours', 'Google and Healthgrades coverage'],
  },
]

const results = [
  { stat: '60–75%', detail: 'Reduction in no-show rates for healthcare appointments after implementing automated SMS reminders.', tag: 'No-Shows' },
  { stat: '2.7×', detail: 'Higher conversion rate for practices with 50+ Google reviews compared to those with under 10.', tag: 'Reviews' },
  { stat: '4–6 hrs', detail: 'Of billable appointment time recovered per week when no-show rates drop from 20% to 5–8%.', tag: 'Revenue' },
]

const practiceTypes = [
  'Family Medicine', 'Dental Offices', 'Chiropractic', 'Physical Therapy',
  'Dermatology', 'Optometry', 'Mental Health', 'Urgent Care',
  'Pediatrics', 'OB/GYN', 'Orthopedics', 'Med Spas',
]

export default function HealthcarePage() {
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
            Healthcare · Wesley Chapel & Tampa Bay
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: 'balance' }}>
            AI Employees for
            <br />
            <span className="text-[#18b5d8]">Healthcare Practices</span>
          </h1>
          <p className="lead-airy text-[#333] max-w-[520px] mx-auto mb-12" style={{ textWrap: 'balance' }}>
            New patients decide in seconds whether to call. Your AI team responds instantly, eliminates no-shows with automated reminders, and collects reviews after every visit — without adding to your front desk workload.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <Link
              href="/aiemployees"
              className="inline-block text-[15px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-7 py-3.5 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150"
            >
              See All AI Employees
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="max-w-[600px] mx-auto text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Real Results</p>
            <h2 className="display-lg text-white" style={{ textWrap: 'balance' }}>
              What healthcare practices see in the first 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {results.map((r) => (
              <div key={r.stat} className="bg-[#111] rounded-[20px] p-7 border border-white/5">
                <span className="inline-block bg-[#18b5d8]/10 text-[#18b5d8] text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-4">{r.tag}</span>
                <p className="text-[clamp(1.4rem,3vw,2rem)] font-black text-[#18b5d8] leading-none mb-3">{r.stat}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No-show problem */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">The No-Show Problem</p>
              <h2 className="display-lg text-[#0a0a0a] mb-5" style={{ textWrap: 'balance' }}>
                Every missed appointment is revenue that never comes back.
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Healthcare practices in Tampa Bay see no-show rates between 18 and 23 percent without automated reminders. At a typical appointment value, that is four to six missed appointments per week — revenue your practice will never recover from those slots.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                Automated reminders sent 24 hours and 2 hours before every appointment reduce no-shows by 60 to 75 percent within the first month. Patients who need to cancel are offered a reschedule option immediately, keeping the schedule full instead of leaving an open slot.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { time: '24 hrs before', msg: 'Hi [Name], this is a reminder for your appointment tomorrow at 10:30 AM with Dr. Patel. Reply C to confirm or R to reschedule.', status: 'Confirmed' },
                { time: '2 hrs before', msg: 'Reminder: your appointment is at 10:30 AM today. We look forward to seeing you! Reply R if you need to reschedule.', status: 'Confirmed' },
                { time: 'Reschedule trigger', msg: 'No problem at all — here are the next available times. Tap to choose one and we\'ll get you booked right away.', status: 'Rebooked' },
              ].map((r) => (
                <div key={r.time} className="bg-white rounded-[14px] px-5 py-4 border border-[#e8e8ed]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] font-bold text-[#999] uppercase tracking-[0.1em]">{r.time}</p>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${r.status === 'Rebooked' ? 'bg-[#18b5d8]/10 text-[#18b5d8]' : 'bg-green-100 text-green-700'}`}>{r.status}</span>
                  </div>
                  <p className="text-[13px] text-[#555] leading-relaxed">{r.msg}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI employees deep dive */}
      <section className="bg-white px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Your AI Team</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: 'balance' }}>
              Three AI employees built for healthcare practices.
            </h2>
          </div>
          <div className="space-y-6">
            {employees.map((emp) => (
              <div key={emp.name} className="bg-[#f5f5f7] rounded-[20px] p-8 border border-[#e8e8ed]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-[15px]"
                        style={{ background: emp.colorBg, color: emp.color }}>
                        {emp.name[0]}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: emp.color }}>{emp.role}</p>
                        <p className="text-[17px] font-bold text-[#0a0a0a]">{emp.name}</p>
                      </div>
                    </div>
                    <p className="text-[13px] font-bold text-[#999] uppercase tracking-[0.1em] mb-2">The problem</p>
                    <p className="text-[15px] text-[#555] leading-relaxed mb-5">{emp.problem}</p>
                    <p className="text-[13px] font-bold text-[#999] uppercase tracking-[0.1em] mb-2">What {emp.name} does</p>
                    <p className="text-[15px] text-[#555] leading-relaxed">{emp.solution}</p>
                  </div>
                  <div className="space-y-2.5">
                    {emp.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 bg-white rounded-[12px] px-4 py-3 border border-[#e8e8ed]">
                        <span className="text-[#18b5d8] font-bold shrink-0 mt-0.5">✓</span>
                        <p className="text-[14px] text-[#333]">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice types */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-5">Practice Types We Serve</p>
            <h2 className="display-lg text-[#0a0a0a]">Every type of healthcare practice in Wesley Chapel and Tampa Bay.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {practiceTypes.map((t) => (
              <div key={t} className="bg-white rounded-[12px] px-4 py-3 text-center border border-[#e8e8ed]">
                <p className="text-[13px] font-semibold text-[#0a0a0a]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related verticals */}
      <section className="bg-white px-6 py-16 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-5">More Industries</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/aiemployees/legal" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Law Firms →</Link>
            <Link href="/aiemployees/contractors" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Contractors →</Link>
            <Link href="/aiemployees/real-estate" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">Real Estate →</Link>
            <Link href="/aiemployees" className="inline-block text-[14px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-6 py-3 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150">All AI Employees →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Healthcare · Wesley Chapel & Tampa Bay</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: 'balance' }}>
            Fill your schedule and cut no-shows — without adding front desk staff.
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Free AI Audit delivered in 48 hours. We identify exactly how many patients your current process is losing before you invest in anything.
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
