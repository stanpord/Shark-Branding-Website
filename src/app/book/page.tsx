import type { Metadata } from "next";
import BookingEmbed from "./BookingEmbed";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Shark AI Solutions",
  description:
    "Schedule a free 30-minute strategy call with the Shark AI Solutions team. We'll walk through your AI visibility, answer questions, and build your action plan.",
  alternates: {
    canonical: "https://shark-ai-solutions.com/book",
  },
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white text-center px-6 pt-24 pb-12">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[#18b5d8] text-[11px] font-bold tracking-[0.26em] uppercase mb-5">
            Strategy Call
          </p>
          <h1 className="text-[2.75rem] font-semibold text-[#0a0a0a] leading-[1.06] tracking-[-0.04rem] mb-5">
            Let&rsquo;s talk about
            <br />
            your AI visibility.
          </h1>
          <p className="text-[18px] text-[#6e6e73] leading-relaxed">
            Pick a time that works for you. We&rsquo;ll review where you stand across ChatGPT, Google AI, and Perplexity and map out the fastest path to getting recommended.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#f5f5f7] border-y border-[rgba(0,0,0,0.06)] py-5 px-6">
        <div className="max-w-[720px] mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {[
            "30 minutes, no commitment",
            "We come prepared with your AI audit",
            "Walk away with a clear action plan",
          ].map((t) => (
            <span
              key={t}
              className="flex items-center gap-2 text-[14px] font-medium text-[#1d1d1f]"
            >
              <span className="text-[#18b5d8] font-bold">✓</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* Calendar embed */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[860px] mx-auto">
          <BookingEmbed />
        </div>
      </section>

      {/* Footer nudge */}
      <section className="bg-white pb-20 px-6 text-center">
        <p className="text-[14px] text-[#aeaeb2]">
          Prefer to call?&nbsp;
          <a
            href="tel:+17275133955"
            className="text-[#18b5d8] font-semibold hover:text-[#1ec8ee] transition-colors"
          >
            (727) 513-3955
          </a>
        </p>
      </section>
    </>
  );
}
