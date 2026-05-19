"use client";

import Link from "next/link";
import Image from "next/image";

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

const STATS = [
  { value: "4", label: "Arenas" },
  { value: "45", label: "Seats" },
  { value: "May 26", label: "Date" },
  { value: "5+", label: "Live Demos" },
];

export default function HackathonBanner() {
  return (
    <Link
      href="https://sharkaihackathon2.pages.dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-inset overflow-hidden"
      aria-label="Shark AI Hackathon — May 26, 2026 — Click to learn more and reserve your spot"
    >
      {/* ── Scrolling ticker ── */}
      <div className="overflow-hidden border-b border-white/10 py-2.5">
        <div
          className="flex min-w-max gap-8 whitespace-nowrap motion-safe:animate-[marquee_32s_linear_infinite] motion-safe:group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white"
            >
              <span className="text-[#18b5d8]">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="flex items-stretch">

        {/* Left: content */}
        <div className="flex-1 min-w-0 relative overflow-hidden px-6 py-7 sm:py-9 flex flex-col justify-between gap-6">

          {/* Flyer bleed — very subtle */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/hackathon-flyer.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60" aria-hidden="true" />

          {/* Top: badge + headline */}
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#18b5d8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#18b5d8] motion-safe:animate-pulse" aria-hidden="true" />
              Invitation Only · Tampa Bay
            </div>

            <h2 className="mb-3 text-[clamp(1.5rem,4vw,2.6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
              Shark AI Hackathon
              <br />
              <span className="font-serif normal-case italic tracking-[-0.02em] text-[#18b5d8]" style={{ fontSize: "0.55em" }}>
                Experience the future before everyone else.
              </span>
            </h2>

            <p className="max-w-[540px] text-[0.85rem] leading-6 text-white/50">
              Five pressure-test arenas, live unreleased AI, and only 45 seats. Most people will read about this. You&apos;ll be in the room.
            </p>
          </div>

          {/* Stats row */}
          <div className="relative flex flex-wrap gap-5 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-[1.6rem] sm:text-[2rem] font-bold leading-none tracking-[-0.04em] text-white">
                  {s.value}
                </span>
                <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/35">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Arena pills */}
          <div className="relative flex flex-wrap gap-2">
            {ARENAS.map((a) => (
              <span
                key={a.n}
                className="flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/55 motion-safe:transition-colors motion-safe:duration-150 motion-safe:group-hover:border-[#18b5d8]/30 motion-safe:group-hover:text-[#18b5d8]"
              >
                <span className="font-mono text-[#18b5d8]/50">{a.n}</span>
                {a.title}
              </span>
            ))}
          </div>

          {/* Bottom address + cta */}
          <div className="relative flex items-center justify-between flex-wrap gap-2">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/20">
              35366 Pure Water Way · Zephyrhills, FL
            </span>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#18b5d8] motion-safe:group-hover:underline">
              Reserve your spot →
            </span>
          </div>
        </div>

        {/* Right: large readable flyer */}
        <div className="shrink-0 w-[180px] sm:w-[240px] lg:w-[300px]">
          <div className="border-l border-white/10 motion-safe:transition-[border-color,box-shadow] motion-safe:duration-300 motion-safe:group-hover:border-[#18b5d8]/50 motion-safe:group-hover:shadow-[-8px_0_32px_rgba(24,181,216,0.15)]">
            <Image
              src="/hackathon-flyer.png"
              alt="Shark AI Hackathon flyer — May 26, 2026"
              width={620}
              height={877}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </Link>
  );
}
