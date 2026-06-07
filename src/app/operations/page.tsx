import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Operations Employees — Shark AI Solutions",
  description:
    "AI-powered operations employees for Tampa Bay businesses. AI CRM, sales coach employees, and custom automation that runs your back office around the clock.",
};

const bots = [
  {
    n: "01", id: "ai-crm", eyebrow: "Customer Relationships", dark: true,
    title: "AI CRM Employee",
    description: "Stop losing leads in spreadsheets. Our AI CRM employee tracks every contact, logs every interaction, sends follow-up sequences automatically, and surfaces the leads most likely to close, without you lifting a finger.",
    bullets: [
      "Automatic lead capture and contact enrichment",
      "Intelligent follow-up sequences triggered by behavior",
      "Pipeline stage updates without manual data entry",
      "Weekly summaries of hot leads and at-risk accounts",
      "Integrates with your existing tools",
    ],
  },
  {
    n: "02", id: "sales-coach", eyebrow: "Sales Performance", dark: false,
    title: "Sales Coach Employee",
    description: "Every sales rep on your team gets a tireless AI coach available 24/7. The Sales Coach Employee reviews calls, scores objection handling, suggests talk tracks, and delivers personalized coaching, turning average reps into closers.",
    bullets: [
      "Call analysis and scoring after every conversation",
      "Real-time objection handling suggestions",
      "Custom playbooks built around your product and market",
      "Performance tracking across the team",
      "New rep onboarding acceleration",
    ],
  },
  {
    n: "03", id: "ops-bots", eyebrow: "Business Automation", dark: true,
    title: "Custom Operations Employees",
    description: "Every business has repetitive workflows eating hours every week. We identify your highest-leverage automation opportunities and build custom employees to handle them: scheduling, reporting, intake, client onboarding, and more.",
    bullets: [
      "Workflow audit to find your top automation opportunities",
      "Custom employee built around your specific process",
      "Integration with your current software stack",
      "Staff training and handoff documentation",
      "Ongoing support and iteration",
    ],
  },
];

export default function OperationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[50vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-3">
            Shark AI Solutions: Operations
          </p>
          <p className="text-[13px] text-[#7a7a7a] mb-8">A Shark Branding Solutions company</p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            AI employees that run your
            <br />
            <span className="text-[#18b5d8]">back office for you.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[520px] mx-auto mb-14" style={{ textWrap: "balance" }}>
            CRM, sales coaching, and custom automation, deployed in days, not months. Your team does the work only humans can do.
          </p>
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
              <p className={`body-copy leading-relaxed ${b.dark ? "text-white/60" : "text-[#333333]"}`}>
                {b.description}
              </p>
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
                href="/contact"
                className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 md:py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Let's build it</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Ready to automate your operations?
          </h2>
          <p className="lead-airy text-white/50 mb-12" style={{ textWrap: "balance" }}>
            Tell us where your team is losing the most time. We'll show you exactly what an employee can handle.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
