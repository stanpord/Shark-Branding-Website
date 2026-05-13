"use client";

import Link from "next/link";

const TICKER = [
  "Live AI Demos",
  "Break the Bot",
  "AI Receptionists",
  "Real-Time CRM",
  "Live Call Chaos",
  "Sales Evaluation",
  "Unreleased Technology",
  "45 Seats Only",
  "May 26, 2026",
  "Zephyrhills, FL",
];

const ARENAS = [
  { n: "01", title: "Live Call Chaos" },
  { n: "02", title: "Break the AI Chat" },
  { n: "03", title: "AI Sales Evaluation" },
  { n: "04", title: "Real-Time CRM" },
];

export default function HackathonBanner() {
  return (
    <Link
      href="/Hackathon"
      className="group block bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-inset"
      aria-label="Shark AI Hackathon — May 26, 2026 — Come Try to Break Our AI Employees. Click to learn more and reserve your spot"
    >
      {/* ── Scrolling ticker ── */}
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div
          className="flex min-w-max gap-8 whitespace-nowrap motion-safe:animate-[marquee_32s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white"
            >
              <span className="text-[#18b5d8]">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main banner body ── */}
      <div className="px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10">

          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#18b5d8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#18b5d8] motion-safe:animate-pulse" aria-hidden="true" />
              Invitation Only · May 26, 2026 · Tampa Bay
            </div>

            {/* Headline */}
            <h2 className="mb-5 text-[clamp(2rem,5.5vw,3.6rem)] font-semibold uppercase leading-[0.92] tracking-[-0.05em] text-white">
              Shark AI Hackathon
              <br />
              <span className="font-serif normal-case italic tracking-[-0.02em] text-[#18b5d8]" style={{ fontSize: "0.58em" }}>
                Experience the future before everyone else.
              </span>
            </h2>

            {/* Sub-copy */}
            <p className="mb-7 max-w-[680px] text-[1rem] leading-7 text-white/55">
              Get hands-on with live, unreleased AI — five pressure-test arenas, real business use cases, and only 45 seats. Most people will read about this technology. You&apos;ll be in the room with it.
            </p>

            {/* Arena pills */}
            <div className="flex flex-wrap gap-2" aria-hidden="true">
              {ARENAS.map((a) => (
                <span
                  key={a.n}
                  className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/60 motion-safe:transition-colors motion-safe:duration-150 motion-safe:group-hover:border-[#18b5d8]/30 motion-safe:group-hover:text-[#18b5d8]"
                >
                  <span className="font-mono text-[#18b5d8]/50">{a.n}</span>
                  {a.title}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — mini flyer card */}
          <div className="shrink-0 w-full lg:w-[310px]">
            <div className="rounded-[22px] border-2 border-white/10 bg-[#07141a] p-6 motion-safe:transition-[border-color,box-shadow] motion-safe:duration-300 motion-safe:group-hover:border-[#18b5d8]/50 motion-safe:group-hover:shadow-[0_0_40px_rgba(24,181,216,0.12)]">
              {/* Card header */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#18b5d8]">
                  Shark Branding Solutions
                </span>
                <span className="rounded-full border border-white/12 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                  52 seats
                </span>
              </div>

              {/* Card title */}
              <div className="mb-1 text-[1.7rem] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
                Shark AI
                <br />
                Hackathon
              </div>
              <div className="mb-5 text-[0.8rem] text-white/45">
                May 26, 2026 · 12–2 PM EDT
              </div>

              {/* Stats row */}
              <div className="mb-5 grid grid-cols-3 divide-x divide-white/8 rounded-[14px] border border-white/8 bg-white/4">
                {[
                  { v: "45", l: "Seats" },
                  { v: "4", l: "Arenas" },
                  { v: "2hr", l: "Event" },
                ].map((s) => (
                  <div key={s.l} className="py-3 text-center">
                    <div className="font-mono text-[1.1rem] font-semibold text-white">{s.v}</div>
                    <div className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/35">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTA arrow */}
              <div className="flex items-center justify-between">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Reserve my spot
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#18b5d8]/40 text-[#18b5d8] motion-safe:transition-colors motion-safe:duration-150 motion-safe:group-hover:bg-[#18b5d8] motion-safe:group-hover:text-black motion-safe:group-hover:border-[#18b5d8]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom accent bar ── */}
      <div className="border-t border-white/6 px-6 py-3">
        <div className="mx-auto max-w-[1240px] flex items-center justify-between">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/30">
            35366 Pure Water Way, Zephyrhills, FL 33541
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#18b5d8] motion-safe:group-hover:underline">
            Learn more &amp; join waitlist →
          </span>
        </div>
      </div>
    </Link>
  );
}
