import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Shark Branding Solutions",
  description:
    "Book a free discovery call or reach out directly. AI visibility consulting and AI employees for Tampa Bay businesses.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white min-h-[40vh] flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Contact
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
            Let&rsquo;s talk about
            <br />
            <span className="text-[#18b5d8]">your business.</span>
          </h1>
          <p className="lead-airy text-[#333333]" style={{ textWrap: "balance" }}>
            Fill out the form below and we&rsquo;ll follow up within one business day to schedule a call — no commitment required.
          </p>
        </div>
      </section>

      {/* ── Form + sidebar ── */}
      <section className="bg-[#f5f5f7] py-16 px-6">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-start">

          {/* Form */}
          <div>
            <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-[24px] font-semibold text-[#0a0a0a] mb-6">
              Tell us about your business.
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8 md:pt-[72px]">
            <div>
              <p className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-3">
                Phone
              </p>
              <a
                href="tel:+17278556505"
                className="text-[21px] font-semibold text-[#18b5d8] hover:text-[#1ec8ee] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                (727) 855-6505
              </a>
            </div>

            <div>
              <p className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-3">
                Email
              </p>
              <a
                href="mailto:info@sharkbrandingsolutions.com"
                className="text-[17px] text-[#18b5d8] hover:text-[#1ec8ee] motion-safe:transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                info@sharkbrandingsolutions.com
              </a>
            </div>

            <div>
              <p className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-3">
                Location
              </p>
              <p className="text-[17px] text-[#333333] leading-relaxed">
                Wesley Chapel, FL 33544
                <br />
                Serving all of Tampa Bay
              </p>
            </div>

            <div className="bg-[#07141a] rounded-[18px] p-6">
              <p className="text-[#18b5d8] text-[14px] font-semibold uppercase tracking-wide mb-2">
                Response time
              </p>
              <p className="text-[17px] text-white mb-1">Within one business day.</p>
              <p className="text-[14px] text-[#cccccc]">
                We&rsquo;ll reach out to schedule a discovery call at your convenience.
              </p>
            </div>

            <div className="bg-white border border-[#e8e8ed] rounded-[18px] p-6">
              <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7a7a7a] mb-3">What to expect</p>
              <ul className="space-y-2">
                {[
                  "Free 30-min discovery call",
                  "No sales pressure",
                  "We show you exactly where you stand",
                  "You keep what you learn",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[#333333]">
                    <span className="text-[#18b5d8] font-bold shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
