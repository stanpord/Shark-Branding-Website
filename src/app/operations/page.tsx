import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Operations Employees Tampa Bay | Shark Branding Solutions",
  description:
    "AI CRM, AI sales coach, and custom operations employees for Tampa Bay businesses. Stop losing leads. Stop repeating tasks. Deploy in 30 days — no new staff required.",
};

const bots = [
  {
    n: "01", id: "ai-crm", eyebrow: "Customer Relationships", dark: true, href: "/contact", cta: "Get a Custom Quote",
    title: "AI CRM",
    description: "Stop losing leads in spreadsheets. Your AI CRM tracks every contact, logs every interaction, sends follow-up sequences automatically, and surfaces the leads most likely to close — without you lifting a finger.",
    bullets: [
      "Automatic lead capture and contact enrichment",
      "Intelligent follow-up sequences triggered by behavior",
      "Pipeline stage updates without manual data entry",
      "Weekly summaries of hot leads and at-risk accounts",
      "Integrates with your existing tools",
    ],
    bestFor: "B2B businesses, service companies quoting multiple jobs, real estate, legal, insurance — any business where follow-up speed wins deals.",
    roi: "Avg business loses 35–50% of leads from slow follow-up. This fixes that.",
  },
  {
    n: "02", id: "sales-coach", eyebrow: "Sales Performance", dark: false, href: "/contact", cta: "Get a Custom Quote",
    title: "AI Sales Coach",
    description: "Every sales rep on your team gets a tireless AI coach available 24/7. Your AI Sales Coach reviews calls, scores objection handling, suggests talk tracks, and delivers personalized coaching — turning average reps into closers.",
    bullets: [
      "Call analysis and scoring after every conversation",
      "Real-time objection handling suggestions",
      "Custom playbooks built around your product and market",
      "Performance tracking across the team",
      "New rep onboarding acceleration",
    ],
    bestFor: "Businesses with sales reps who make calls. Multi-rep teams with inconsistent close rates or high turnover in new hires.",
    roi: "New reps close at senior rep rates in half the time.",
  },
  {
    n: "03", id: "ops-bots", eyebrow: "Business Automation", dark: true, href: "/contact", cta: "Get a Custom Quote",
    title: "Custom AI Employees",
    description: "Every business has repetitive workflows eating hours every week. We identify your highest-leverage automation opportunities and build custom AI employees to handle them — scheduling, reporting, intake, client onboarding, and more.",
    bullets: [
      "Workflow audit to find your top automation opportunities",
      "Custom AI employee built around your specific process",
      "Integration with your current software stack",
      "Staff training and handoff documentation",
      "Ongoing support and iteration",
    ],
    bestFor: "Medical/dental intake, field service scheduling, contractor job management, franchise operations — admin-heavy businesses burning staff hours on manual work.",
    roi: "Most clients reclaim 10–20 hours per week within 30 days of deployment.",
  },
];

const useCases = [
  {
    industry: "HVAC & Field Service",
    problem: "Dispatchers manually scheduling, rescheduling, and following up on quotes",
    solution: "Automated scheduling + quote follow-up sequence",
  },
  {
    industry: "Medical & Dental",
    problem: "Front desk handling all intake, insurance verification, and appointment reminders",
    solution: "AI intake employee frees your staff for in-person patient care",
  },
  {
    industry: "Real Estate",
    problem: "Leads going cold because agents are too busy to follow up within the hour",
    solution: "AI CRM sends personalized follow-up within 5 minutes — every time",
  },
  {
    industry: "Contractors",
    problem: "Quoting jobs, chasing signatures, and following up on unpaid invoices manually",
    solution: "End-to-end automation from estimate to payment",
  },
];

export default function OperationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[50vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            AI Operations Employees &nbsp;&middot;&nbsp; Shark AI Solutions
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI employees that run your
            <br />
            <span className="text-[#18b5d8]">back office for you.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            CRM, sales coaching, and custom automation — deployed in 30 days. Your team focuses on work only humans can do.
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
            {[
              "Live in 30 days",
              "Reclaim 10–20 hrs/week",
              "No new staff required",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[14px] font-semibold text-[#333333]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" stroke="#18b5d8" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {bots.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="text-[13px] font-semibold text-[#1d1d1f] border border-[#e0e0e0] rounded-full px-5 py-2 hover:border-[#18b5d8] hover:text-[#18b5d8] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
              >
                {b.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bots ── */}
      {bots.map((b) => (
        <section
          key={b.id}
          id={b.id}
          className={b.dark ? "bg-[#0a0a0a] px-6 py-14 md:py-24 border-t border-white/5" : "bg-white px-6 py-14 md:py-24 border-t border-[#e8e8ed]"}
        >
          <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">{b.n}</span>
                <span className={`w-px h-4 ${b.dark ? "bg-white/20" : "bg-[#1d1d1f]/15"}`} aria-hidden="true" />
                <span className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${b.dark ? "text-white/50" : "text-[#1d1d1f]/50"}`}>{b.eyebrow}</span>
              </div>
              <h2 className={`display-lg mb-6 ${b.dark ? "text-white" : "text-[#0a0a0a]"}`} style={{ textWrap: "balance" }}>
                {b.title}
              </h2>
              <p className={`body-copy leading-relaxed mb-6 ${b.dark ? "text-white/60" : "text-[#333333]"}`}>
                {b.description}
              </p>
              <div className={`rounded-[12px] px-4 py-3 mb-3 text-[13px] leading-relaxed ${b.dark ? "bg-white/5 border border-white/10 text-white/50" : "bg-[#f5f5f7] border border-[#e8e8ed] text-[#7a7a7a]"}`}>
                <span className={`font-semibold ${b.dark ? "text-white/70" : "text-[#333]"}`}>Best for: </span>{b.bestFor}
              </div>
              <div className={`rounded-[12px] px-4 py-3 text-[13px] leading-relaxed ${b.dark ? "bg-[#18b5d8]/10 border border-[#18b5d8]/20 text-[#18b5d8]" : "bg-[#18b5d8]/5 border border-[#18b5d8]/15 text-[#0d8fa8]"}`}>
                <span className="font-semibold">ROI reality: </span>{b.roi}
              </div>
            </div>
            <div className="lg:pt-[72px]">
              <ul className="space-y-4 mb-10">
                {b.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="text-[#18b5d8] font-bold leading-none mt-1 shrink-0" aria-hidden="true">✓</span>
                    <span className={`body-copy ${b.dark ? "text-white/70" : "text-[#333333]"}`}>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={b.href}
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                {b.cta}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── Use cases ── */}
      <section className="bg-[#f5f5f7] py-12 md:py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Real-World Applications</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              What this looks like for your industry.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {useCases.map((uc) => (
              <div key={uc.industry} className="bg-white rounded-[20px] px-8 py-7 border border-[#e8e8ed]">
                <p className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#18b5d8] mb-3">{uc.industry}</p>
                <p className="text-[15px] text-[#7a7a7a] mb-2"><span className="font-semibold text-[#0a0a0a]">Problem:</span> {uc.problem}</p>
                <p className="text-[15px] text-[#333333]"><span className="font-semibold text-[#0a0a0a]">Solution:</span> {uc.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency ── */}
      <section className="bg-[#07141a] py-16 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <span className="inline-block bg-[#18b5d8]/10 border border-[#18b5d8]/30 text-[#18b5d8] text-[12px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6">
            Limited Availability
          </span>
          <h2 className="display-lg text-white mb-4" style={{ textWrap: "balance" }}>
            Founding client spots — price locked, no setup fee.
          </h2>
          <p className="lead-airy text-white/50 mb-8" style={{ textWrap: "balance" }}>
            We&rsquo;re currently onboarding a limited number of founding clients. Price is locked at the current rate for as long as you stay — no setup fee, live within 30 days.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141a] [touch-action:manipulation]"
          >
            Claim a Founding Spot
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 md:py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Let&rsquo;s build it</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Tell us where your team is losing time.
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            We&rsquo;ll show you exactly what AI can handle — and what it would cost to get your hours back.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Talk to Us
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-12 md:py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-[0.15em] mb-8">Frequently Asked Questions</p>
          <div className="space-y-8">
            {[
              { q: "What is an AI operations employee?", a: "An AI operations employee is a purpose-built AI system that handles a specific business function — lead follow-up, sales coaching, appointment scheduling, client intake — without requiring a human to manage it manually. Unlike general AI tools, these are configured to your specific workflow, your existing software, and your business processes." },
              { q: "How long does it take to deploy?", a: "Most AI operations employees are live within 30 days of kickoff. The first week covers workflow mapping and integration setup. Weeks two and three cover configuration, testing, and staff training. By week four your team is running the system and we are supporting the handoff." },
              { q: "Does this replace my existing staff?", a: "No. AI operations employees handle repetitive, rules-based tasks — follow-up sequences, data entry, scheduling notifications, intake processing. Your staff is freed to do the work that actually requires human judgment. Most clients find their team can take on more without adding headcount." },
              { q: "What industries do AI operations employees work for?", a: "The highest-impact applications are in home services like HVAC, plumbing, and roofing, medical and dental practices, real estate, legal and professional services, and contractors. Any business with high lead volume, manual scheduling, or repetitive intake processes will see immediate impact." },
              { q: "What does it cost?", a: "Pricing is custom based on the complexity of the workflow, the number of integrations, and the systems your business uses. We quote after a brief discovery call where we identify your top automation opportunity. There is no commitment required for the call." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#e5e5e5] pb-8">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-3">{q}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 text-[14px]">
            <Link href="/marketing" className="text-[#18b5d8] font-semibold hover:underline">AI Marketing Employees →</Link>
            <Link href="/plans" className="text-[#18b5d8] font-semibold hover:underline">View Plans &amp; Pricing →</Link>
            <Link href="/free-report" className="text-[#18b5d8] font-semibold hover:underline">Get a Free Visibility Audit →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
