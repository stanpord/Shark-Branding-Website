import type { Metadata } from "next";
import BookingWidget from "./BookingWidget";

export const metadata: Metadata = {
  title: "Free 15-Minute AI Assessment | Shark AI Solutions",
  description:
    "Book your complimentary 15-minute AI assessment. Find out which AI employee or automation could start working in your business today.",
};

export default function AiAssessmentPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-[#07141a] pt-32 pb-24 px-6 text-center">
        <div className="max-w-[760px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#18b5d8]/10 border border-[#18b5d8]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#18b5d8]" />
            <span className="text-[#18b5d8] text-[12px] font-semibold tracking-wide">Complimentary · No obligation</span>
          </div>

          <h1 className="text-[40px] sm:text-[58px] font-extrabold text-white leading-[1.05] tracking-tight mb-6" style={{ textWrap: "balance" }}>
            Find out what AI can do<br className="hidden sm:block" />
            <span className="text-[#18b5d8]"> for your business today.</span>
          </h1>

          <p className="text-white/60 text-[18px] sm:text-[20px] leading-relaxed max-w-[580px] mx-auto mb-10" style={{ textWrap: "balance" }}>
            A free 15-minute phone call to map out exactly which AI employee or automation would have the biggest impact on your business right now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/40 font-medium">
            {[
              "15 minutes · Phone call",
              "No pitch. Just answers.",
              "Walks away with a clear next step",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="text-[#18b5d8]">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ── What we cover ── */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-b border-[#e5e5ea]">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-3 text-center">What happens on the call</p>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight text-center mb-14" style={{ textWrap: "balance" }}>
            15 minutes. Specific answers. No fluff.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Where you're losing time",
                body: "We look at your current workflow, lead follow-up, review management, content, bookings, and spot exactly where time is being wasted or leads are falling through.",
              },
              {
                num: "02",
                title: "Which AI fits your business",
                body: "Not every business needs the same AI. We match you to the right employee or automation based on your industry, team size, and biggest bottleneck.",
              },
              {
                num: "03",
                title: "What it looks like in practice",
                body: "You leave knowing what the AI would actually do in your business, what the setup involves, and whether the numbers make sense for you.",
              },
            ].map((c) => (
              <div key={c.num} className="bg-white rounded-[20px] p-7 border border-[#e5e5ea] shadow-sm">
                <p className="text-[11px] font-bold text-[#18b5d8] tracking-[2px] uppercase mb-4">{c.num}</p>
                <p className="text-[17px] font-bold text-[#1d1d1f] mb-3 leading-snug">{c.title}</p>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Booking widget ── */}
      <section id="booking" className="bg-white px-6 py-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-[#18b5d8] mb-3 text-center">Book your spot</p>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight text-center mb-3" style={{ textWrap: "balance" }}>
            Get your complimentary 15-minute AI Assessment
          </h2>
          <p className="text-[15px] text-[#6e6e73] text-center mb-10">
            Fill out the short form below and we&rsquo;ll reach out to confirm your call.
          </p>

          {/* Widget renders here */}
          <div className="rounded-[20px] overflow-hidden shadow-[0_2px_40px_rgba(0,0,0,0.08)] border border-[#e5e5ea]">
            <BookingWidget />
          </div>
        </div>
      </section>



      {/* ── FAQ ── */}
      <section className="bg-[#f5f5f7] px-6 py-20 border-t border-[#e5e5ea]">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[28px] font-extrabold text-[#1d1d1f] tracking-tight mb-10 text-center">Common questions</h3>
          <div className="space-y-5">
            {[
              {
                q: "Is the 15-minute call really free?",
                a: "Yes. No credit card, no obligation. It's a quick conversation to find out if AI makes sense for your business right now. If it doesn't, we'll tell you honestly.",
              },
              {
                q: "What kind of businesses is this for?",
                a: "Any local or service business that handles leads, bookings, reviews, or customer communication. HVAC, real estate, wellness, home services, professional services, if you have a sales or operations process, there's likely an AI that fits.",
              },
              {
                q: "What if I'm not ready to sign up for anything?",
                a: "That's fine. The assessment has value on its own. You'll walk away knowing exactly where AI could help and what it would take to get started.",
              },
              {
                q: "How fast can we get started after the assessment?",
                a: "If you decide to move forward with the Do It With You plan, we can typically schedule your first session within the same week.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-[16px] px-7 py-6 border border-[#e5e5ea] shadow-sm">
                <p className="text-[16px] font-bold text-[#1d1d1f] mb-2">{item.q}</p>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Final CTA ── */}
      <section className="bg-white px-6 py-20 text-center border-t border-[#e5e5ea]">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] leading-tight tracking-tight mb-4" style={{ textWrap: "balance" }}>
            15 minutes could change how your business runs.
          </h2>
          <p className="text-[15px] text-[#6e6e73] mb-8">
            Book your complimentary AI assessment and find out what&rsquo;s possible.
          </p>
          <a
            href="#booking"
            className="inline-block bg-[#18b5d8] text-white text-[16px] font-bold rounded-full px-9 py-4 hover:bg-[#14a0c0] motion-safe:transition-colors shadow-[0_4px_20px_rgba(24,181,216,0.3)]"
          >
            Book My Free AI Assessment
          </a>
        </div>
      </section>

    </div>
  );
}
