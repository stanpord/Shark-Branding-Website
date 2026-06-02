import type { Metadata } from "next";
import Link from "next/link";
import SnapshotWidget from "@/components/SnapshotWidget";

export const metadata: Metadata = {
  title: "Free AI Visibility Audit Tampa Bay | Shark Branding Solutions",
  description:
    "Get a free AI visibility audit for your Tampa Bay business. See exactly how ChatGPT, Google AI Overviews, and Gemini see you — reviewed together on a call. No obligation.",
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

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[11px] font-semibold text-[#1d1d1f] uppercase tracking-[0.15em] mb-8">Frequently Asked Questions</p>
          <div className="space-y-8">
            {[
              { q: "What is included in the free visibility audit?", a: "The audit covers how your business appears across Google Search, Google Maps, AI platforms (ChatGPT, Perplexity, Google AI Overviews), review sites, and business directories. We check listing consistency, review signals, AI readiness, and schema markup — then walk through everything together on a 20-minute call." },
              { q: "Is there any cost or commitment?", a: "No. The audit is completely free with no commitment required. We review your results together on a call and only discuss next steps if it makes sense for your business." },
              { q: "How long does the audit take?", a: "The call takes about 20 minutes. We do the analysis beforehand so you arrive to a complete picture — no waiting, no homework on your end." },
              { q: "What kinds of businesses is this for?", a: "The audit is built for local and regional businesses in the Tampa Bay area — Wesley Chapel, Lutz, Land O' Lakes, Tampa, and St. Petersburg. It's most useful for owner-operated businesses that want to be found by customers using AI search tools." },
              { q: "What happens after the audit?", a: "You'll know exactly where your visibility gaps are. If you want help fixing them, we'll explain what that looks like. If not, you leave with a clear picture of where you stand — still useful either way." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#e5e5e5] pb-8">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-3">{q}</h3>
                <p className="text-[15px] text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 text-[14px]">
            <Link href="/services" className="text-[#18b5d8] font-semibold hover:underline">What We Do →</Link>
            <Link href="/plans" className="text-[#18b5d8] font-semibold hover:underline">View Plans &amp; Pricing →</Link>
            <Link href="/case-studies" className="text-[#18b5d8] font-semibold hover:underline">See Client Results →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
