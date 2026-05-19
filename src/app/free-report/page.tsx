import type { Metadata } from "next";
import SnapshotWidget from "@/components/SnapshotWidget";

export const metadata: Metadata = {
  title: "Free Visibility Audit — Shark Branding Solutions",
  description:
    "See exactly how your business appears across search, maps, reviews, and AI platforms. We run your audit and walk you through it together on a quick call.",
};

export default function FreeReportPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[640px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Free Visibility Audit
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Find out where your business
            <br />
            <span className="text-[#18b5d8]">actually stands.</span>
          </h1>
          <p className="lead-airy text-[#333333] mb-12">
            We run your audit and walk you through it together on a quick call. No commitment required.
          </p>
          {/* Proof stats */}
          <div className="flex items-center justify-center gap-0 border border-[#e8e8ed] rounded-[16px] overflow-hidden divide-x divide-[#e8e8ed]">
            {[
              { v: "Free", l: "No credit card" },
              { v: "1 Call", l: "We walk you through it" },
              { v: "Local", l: "Tampa Bay focused" },
            ].map((s) => (
              <div key={s.l} className="flex-1 py-5 px-4 text-center">
                <p className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-[#18b5d8] leading-none mb-1">{s.v}</p>
                <p className="text-[13px] text-[#7a7a7a] font-semibold">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Widget ── */}
      <section className="bg-[#f5f5f7] px-6 py-16">
        <div className="max-w-[680px] mx-auto">
          <SnapshotWidget />
        </div>
      </section>

      {/* ── What we cover ── */}
      <section className="bg-[#0a0a0a] px-6 py-24">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-14">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">What we cover on the call</p>
            <h2 className="display-lg text-white" style={{ textWrap: "balance" }}>
              A complete picture of your online visibility.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                n: "01",
                title: "Search presence",
                body: "How you rank on Google and Bing for the searches your customers are actually making.",
              },
              {
                n: "02",
                title: "Maps & listings",
                body: "Whether your business information is accurate, complete, and consistent across directories.",
              },
              {
                n: "03",
                title: "Reviews & trust",
                body: "Your star rating, review volume, and how your reputation compares to local competitors.",
              },
              {
                n: "04",
                title: "AI readiness",
                body: "Whether ChatGPT, Perplexity, and Google AI Overviews would recommend your business.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#07141a] rounded-[20px] p-7 border border-white/5">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">{item.n}</span>
                <h3 className="text-[19px] font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-[15px] text-white/50 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
