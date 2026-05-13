import type { Metadata } from "next";
import SnapshotWidget from "@/components/SnapshotWidget";

export const metadata: Metadata = {
  title: "Free Visibility Report — Shark Branding Solutions",
  description:
    "See exactly how your business appears across search, maps, reviews, and AI platforms. Delivered in 48 hours, no strings attached.",
};

export default function FreeReportPage() {
  return (
    <>
      {/* Compact hero */}
      <section className="bg-white pt-20 pb-10 px-6 text-center">
        <div className="max-w-[640px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-4">
            Free Visibility Report
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-4" style={{ textWrap: "balance" }}>
            Find out where your business
            <br />
            <span className="text-[#18b5d8]">actually stands.</span>
          </h1>
          <p className="lead-airy text-[#333333]">
            Delivered in 48 hours. No commitment. No sales call.
          </p>
        </div>
      </section>

      {/* Widget — immediately below hero, no scroll needed */}
      <section className="bg-white pt-10 pb-16 px-6">
        <div className="max-w-[680px] mx-auto">
          <SnapshotWidget />
          <div className="mt-10 flex justify-center gap-12 text-center">
            <div>
              <p className="text-[21px] font-semibold text-[#18b5d8] mb-1">48h</p>
              <p className="text-[13px] text-[#7a7a7a]">Turnaround</p>
            </div>
            <div>
              <p className="text-[21px] font-semibold text-[#18b5d8] mb-1">Free</p>
              <p className="text-[13px] text-[#7a7a7a]">No credit card</p>
            </div>
            <div>
              <p className="text-[21px] font-semibold text-[#18b5d8] mb-1">Local</p>
              <p className="text-[13px] text-[#7a7a7a]">Tampa Bay focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's in the report */}
      <section className="bg-[#07141a] py-20 px-6">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-4">
            What you get
          </p>
          <h2 className="display-lg text-white mb-12" style={{ textWrap: "balance" }}>
            A complete picture of your online visibility.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Search presence",
                body: "How you rank on Google and Bing for the searches your customers are actually making.",
              },
              {
                title: "Maps & listings",
                body: "Whether your business information is accurate, complete, and consistent across directories.",
              },
              {
                title: "Reviews & trust",
                body: "Your star rating, review volume, and how your reputation compares to local competitors.",
              },
              {
                title: "AI readiness",
                body: "Whether ChatGPT, Perplexity, and Google AI Overviews would recommend your business.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#091c24] rounded-[18px] p-6 border border-white/5"
              >
                <h3 className="text-[17px] font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#cccccc] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

