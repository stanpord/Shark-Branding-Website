"use client";

import { useEffect, useState } from "react";
import SnapshotWidget from "@/components/SnapshotWidget";

const CHECKS = [
  "Google Business Profile",
  "Listings & directories",
  "Reviews & reputation",
  "Website & SEO",
];

export default function ScanCard() {
  // Number of checks ticked on; loops so the card reads as "scanning"
  const [on, setOn] = useState(0);

  useEffect(() => {
    // Reduced motion: no loop; CSS shows every check ticked
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setOn((n) => (n >= CHECKS.length ? 0 : n + 1));
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="scan-card rounded-[22px] border border-[#e8e8ed] bg-white overflow-hidden text-left">
      <div className="scan-head relative px-[22px] pt-5 pb-[18px] text-white overflow-hidden">
        <span className="scan-beam" aria-hidden="true" />
        <h2 className="text-[18px] font-semibold tracking-[-0.01em]">Scan your business</h2>
        <p className="mt-1 text-[13px] text-white/60">What search engines and AI see when they check you</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2" aria-hidden="true">
          {CHECKS.map((label, i) => (
            <span key={label} className={`scan-chk${i < on ? " on" : ""}`}>
              <i>✓</i>
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="px-2.5 pt-1.5 pb-2 min-h-[260px]">
        <SnapshotWidget />
      </div>
      <div className="px-[22px] pt-3 pb-4 border-t border-[#e8e8ed] text-[12px] text-[#8a8a90]">
        Report ready in <b className="text-[#0a0a0a] font-semibold">48 hours</b>
      </div>
    </div>
  );
}
