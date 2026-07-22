import type { Metadata } from "next";
import Link from "next/link";
import GovernanceWheel from "./GovernanceWheel";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/executive-advising",
      url: "https://sharkbrandingsolutions.com/executive-advising",
      name: "Executive Advising Services | Shark AI Solutions",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
    },
    {
      "@type": "Service",
      name: "Executive Advising Services",
      description:
        "Executive-level advisory services focused on modernization, digital governance, AI-driven messaging systems, crisis structure, workflow clarity, and operational efficiency. Non-political and strictly operational.",
      url: "https://sharkbrandingsolutions.com/executive-advising",
      provider: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      areaServed: "Tampa Bay, FL",
      audience: {
        "@type": "Audience",
        audienceType: "Executive offices, public-sector leaders, government departments, and organizational teams",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Executive Advising Services | Shark AI Solutions",
  description:
    "Executive-level advisory services for modernization, digital governance, and AI-driven efficiency. Crisis-ready communication systems, workflow modernization, and AI literacy training. Strictly operational and non-political.",
};

const pillars = [
  {
    n: "01",
    title: "Executive Messaging & Digital Governance",
    tag: "AI-Driven",
    description:
      "Public-facing communication is one of the highest-risk areas for any executive office. We build AI-powered messaging systems that ensure clarity, consistency, and professionalism across every channel.",
    includes: [
      "AI-driven messaging frameworks",
      "Tone, clarity, and consistency systems",
      "Crisis-safe phrasing and risk detection",
      "Structured communication workflows",
      "Approval and governance processes",
      "AI visibility strategy",
      "Staff guardrails and communication safety",
    ],
  },
  {
    n: "02",
    title: "Operational Efficiency & Workflow Modernization",
    tag: "Operations",
    description:
      "We modernize internal operations using AI-driven systems that reduce chaos, eliminate bottlenecks, and create predictable workflows.",
    includes: [
      "Workflow clarity and structure",
      "Automation of repetitive tasks",
      "AI-powered efficiency systems",
      "Process mapping and optimization",
      "Executive office modernization",
      "Staff training on AI-assisted workflows",
    ],
  },
  {
    n: "03",
    title: "Crisis Structure & Reputation Protection",
    tag: "Readiness",
    description:
      "Executive offices must be prepared for digital mistakes, misinformation, and rapid-response situations. We build crisis-ready structures that prevent escalation and protect public trust.",
    includes: [
      "Crisis communication frameworks",
      "AI-assisted risk detection",
      "Digital mistake prevention systems",
      "Reputation protection protocols",
      "Rapid-response messaging templates",
      "Staff training for crisis-safe communication",
    ],
  },
  {
    n: "04",
    title: "AI Literacy, Training & Executive Enablement",
    tag: "Training",
    description:
      "We train leadership and staff to use AI safely, effectively, and professionally, without overwhelming them.",
    includes: [
      "AI literacy for executives",
      "Safe prompting practices",
      "AI tools for communication",
      "Efficiency workflows",
      "Modernization strategy sessions",
      "Staff onboarding to AI systems",
    ],
  },
  {
    n: "05",
    title: "Public-Facing Clarity & Information Simplification",
    tag: "Communication",
    description:
      "Executive offices often need to communicate complex information to the public. We use AI to simplify, clarify, and structure messaging so it is easy to understand and professionally presented.",
    includes: [
      "AI-powered content simplification",
      "Public-friendly summaries",
      "Visual explainers",
      "Structured messaging templates",
      "Clarity-focused communication systems",
    ],
  },
];

const audiences = [
  "Executive offices",
  "Public-sector leaders",
  "Government departments",
  "Organizational teams",
  "Agencies needing modernization",
  "Offices requiring communication stability",
];

export default function ExecutiveAdvisingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-white flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Executive Advising Services
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Modernization. Digital governance.
            <br />
            <span className="text-[#18b5d8]">AI-driven efficiency.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[560px] mx-auto mb-8" style={{ textWrap: "balance" }}>
            Shark AI Solutions provides executive-level advisory services designed to modernize operations,
            strengthen digital governance, and improve public-facing communication through AI-driven efficiency.
          </p>
          <p className="text-[15px] text-[#6e6e73] max-w-[520px] mx-auto mb-10">
            Our work is strictly operational and non-political, focused on clarity, structure, modernization,
            and crisis-ready communication systems.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full px-7 py-3.5 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>

      {/* ── Governance framework wheel ── */}
      <section className="bg-[#07141a] px-6 py-16 sm:py-24">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
              The Framework
            </p>
            <h2 className="display-lg text-white mb-5" style={{ textWrap: "balance" }}>
              Governance is the difference between using AI and trusting it.
            </h2>
            <p className="text-[17px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-4">
              Every engagement is built on a complete AI governance framework: clear roles and responsibilities,
              a defined operating model, risk and compliance controls, documented policies and standards,
              model governance, the right tools, and continuous monitoring.
            </p>
            <p className="text-[17px] text-[rgba(255,255,255,0.6)] leading-relaxed">
              Wrapped around all of it: trustworthiness, responsibility, privacy, safety and security,
              fairness, explainability, and accountability. That&rsquo;s what makes AI safe enough for an
              executive office.
            </p>
          </div>
          <div>
            <GovernanceWheel />
          </div>
        </div>
      </section>

      {/* ── Five pillars ── */}
      <section className="bg-[#f5f5f7] px-6 py-16 sm:py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="display-lg text-[#1d1d1f]" style={{ textWrap: "balance" }}>
              Five pillars of executive modernization.
            </h2>
          </div>

          <div className="space-y-6">
            {pillars.map((p) => (
              <div key={p.n} className="bg-white rounded-[20px] p-7 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#18b5d8] text-[14px] font-bold">{p.n}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#86868b] border border-[#e8e8ed] rounded-full px-3 py-1">
                        {p.tag}
                      </span>
                    </div>
                    <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1d1d1f] leading-tight tracking-tight mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[16px] text-[#6e6e73] leading-relaxed">{p.description}</p>
                  </div>
                  <div className="bg-[#f5f5f7] rounded-[16px] p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#86868b] mb-4">
                      What this includes
                    </p>
                    <ul className="space-y-2.5">
                      {p.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#333333]">
                          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 mt-0.5 shrink-0">
                            <path d="M3 8.5l3.2 3L13 4.5" stroke="#18b5d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who this is for ── */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
            Who This Is For
          </p>
          <h2 className="display-lg text-[#1d1d1f] mb-12" style={{ textWrap: "balance" }}>
            Built for offices that need structure, not politics.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div
                key={a}
                className="bg-[#f5f5f7] rounded-[16px] px-6 py-7 text-[16px] font-semibold text-[#1d1d1f]"
              >
                {a}
              </div>
            ))}
          </div>
          <p className="text-[16px] text-[#6e6e73] mt-10 max-w-[560px] mx-auto">
            Anyone who needs structured, professional, AI-driven modernization, without political involvement.
          </p>
        </div>
      </section>

      {/* ── Summary + CTA ── */}
      <section className="bg-[#07141a] px-6 py-16 sm:py-24">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Communicate clearly. Function efficiently. Maintain public trust.
          </h2>
          <p className="text-[17px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-10">
            Shark AI Solutions provides executive-level advisory services focused on modernization, digital
            governance, AI-driven messaging systems, crisis structure, workflow clarity, and operational
            efficiency, non-political, strictly operational.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-block bg-[#18b5d8] text-[#07141a] text-[15px] font-semibold rounded-full px-8 py-4 hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </>
  );
}
