import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Operations Bots — Shark AI Solutions",
  description:
    "AI-powered operations bots for Tampa Bay businesses. AI CRM, sales coach bots, and custom automation that runs your back office around the clock.",
};

const bots = [
  {
    id: "ai-crm",
    eyebrow: "Customer Relationships",
    title: "AI CRM Bot",
    description:
      "Stop losing leads in spreadsheets. Our AI CRM bot tracks every contact, logs every interaction, sends follow-up sequences automatically, and surfaces the leads most likely to close — without you lifting a finger.",
    bullets: [
      "Automatic lead capture and contact enrichment",
      "Intelligent follow-up sequences triggered by behavior",
      "Pipeline stage updates without manual data entry",
      "Weekly summaries of hot leads and at-risk accounts",
      "Integrates with your existing tools",
    ],
    dark: true,
  },
  {
    id: "sales-coach",
    eyebrow: "Sales Performance",
    title: "Sales Coach Bot",
    description:
      "Every sales rep on your team gets a tireless AI coach available 24/7. The Sales Coach Bot reviews calls, scores objection handling, suggests talk tracks, and delivers personalized coaching — turning average reps into closers.",
    bullets: [
      "Call analysis and scoring after every conversation",
      "Real-time objection handling suggestions",
      "Custom playbooks built around your product and market",
      "Performance tracking across the team",
      "New rep onboarding acceleration",
    ],
    dark: false,
  },
  {
    id: "ops-bots",
    eyebrow: "Business Automation",
    title: "Custom Operations Bots",
    description:
      "Every business has repetitive workflows eating hours every week. We identify your highest-leverage automation opportunities and build custom bots to handle them — scheduling, reporting, intake, client onboarding, and more.",
    bullets: [
      "Workflow audit to find your top automation opportunities",
      "Custom bot built around your specific process",
      "Integration with your current software stack",
      "Staff training and handoff documentation",
      "Ongoing support and iteration",
    ],
    dark: true,
  },
];

export default function OperationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black min-h-[50vh] flex items-center justify-center text-center px-6 pt-24 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-3">
            Shark AI Solutions &mdash; Operations
          </p>
          <p className="text-[13px] text-[#7a7a7a] mb-5">A Shark Branding Solutions company</p>
          <h1 className="display-hero text-white mb-5" style={{ textWrap: "balance" }}>
            AI bots that run your
            <br />
            <span className="text-[#18b5d8]">back office for you.</span>
          </h1>
          <p className="lead-airy text-[#cccccc]">
            CRM, sales coaching, and custom automation — deployed in days, not
            months. Your team does the work only humans can do.
          </p>
        </div>
      </section>

      {/* Bots — alternating tiles */}
      {bots.map((b) => (
        <section
          key={b.id}
          id={b.id}
          className={`py-20 px-6 ${b.dark ? "bg-[#07141a]" : "bg-white"}`}
        >
          <div className="max-w-[760px] mx-auto">
            <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-4">
              {b.eyebrow}
            </p>
            <h2 className={`display-lg mb-6 ${b.dark ? "text-white" : "text-[#1d1d1f]"}`}>
              {b.title}
            </h2>
            <p className={`lead-airy mb-8 ${b.dark ? "text-[#cccccc]" : "text-[#333333]"}`}>
              {b.description}
            </p>
            <ul className="space-y-3 mb-10">
              {b.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="text-[#18b5d8] text-[18px] font-semibold leading-none mt-0.5">
                    &#x2713;
                  </span>
                  <span className={`body-copy ${b.dark ? "text-[#cccccc]" : "text-[#333333]"}`}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[22px] py-[11px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
            >
              Learn More
            </Link>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#f5f5f7] py-24 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="display-lg text-[#1d1d1f] mb-5" style={{ textWrap: "balance" }}>
            Ready to automate your operations?
          </h2>
          <p className="lead-airy text-[#333333] mb-10">
            Tell us where your team is losing the most time. We&rsquo;ll show
            you exactly what a bot can handle.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[28px] py-[14px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f5f7] [touch-action:manipulation]"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
