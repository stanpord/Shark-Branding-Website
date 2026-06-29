"use client";

import { useEffect, useRef } from "react";

export default function ContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formContainerRef.current) return;
    const existing = document.getElementById("__custom_form_widget");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "__custom_form_widget";
    script.src = "https://www.cdnstyles.com/static/custom_form_widget/v1/custom_form.widget.js";
    script.setAttribute(
      "data",
      "eyJiYWNrZ3JvdW5kQ29sb3IiOiIjRjRGN0ZBIiwiYmFzZVVSTCI6Imh0dHBzOi8vZm9ybXMtcHJvZC5hcGlnYXRld2F5LmNvIiwiYm9yZGVyQ29sb3IiOiIjMWE3YWRiIiwiYm9yZGVyUmFkaXVzIjoiMTJweCIsImJvcmRlclN0eWxlIjoic29saWQiLCJib3JkZXJXaWR0aCI6IjJweCIsImZvcm1JZCI6IkZvcm1Db25maWdJRC05MGVmYzRmYy0yMDhhLTQyNTAtOTgyYS04NGYxYmVkMzM1ZTIiLCJwYWRkaW5nIjoiMjhweCIsInByaW1hcnlDb2xvciI6IiMxOEI1RDgiLCJwcmltYXJ5Rm9udENvbG9yIjoiIzBEMUYyRCIsIndpZHRoIjoiMTAwJSJ9"
    );
    formContainerRef.current.appendChild(script);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-white min-h-[40vh] flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Contact
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-5" style={{ textWrap: "balance" }}>
            Let&rsquo;s talk about
            <br />
            <span className="text-[#18b5d8]">your visibility.</span>
          </h1>
          <p className="lead-airy text-[#333333]">
            Start with a free AI Audit, book a call, or just say hello. We
            respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16">
          <div className="space-y-6">
            {/* Widget mounts here */}
            <div ref={formContainerRef} />

            {/* SMS consent, static HTML so approval crawlers can read it */}
            <div className="border border-[#e8e8ed] rounded-[16px] px-6 py-6 space-y-5 bg-[#f5f5f7]">
              <p className="text-[13px] font-semibold text-[#1d1d1f] uppercase tracking-wide">
                Text Message Consent
              </p>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="sms_transactional_consent"
                  className="mt-1 w-4 h-4 shrink-0 accent-[#18b5d8] cursor-pointer"
                />
                <span className="text-[14px] text-[#333333] leading-relaxed">
                  <span className="font-semibold text-[#1d1d1f]">Service messages (required to receive SMS).</span>{" "}
                  By checking this box, I consent to receive SMS text messages from Shark AI Solutions regarding appointments, service updates, and follow-up communications. Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to unsubscribe at any time.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="sms_marketing_consent"
                  className="mt-1 w-4 h-4 shrink-0 accent-[#18b5d8] cursor-pointer"
                />
                <span className="text-[14px] text-[#333333] leading-relaxed">
                  <span className="font-semibold text-[#1d1d1f]">Promotional messages (optional).</span>{" "}
                  By checking this box, I consent to receive SMS messages from Shark AI Solutions about special offers and service announcements. This is not required to submit this form. Message and data rates may apply. Message frequency varies. Reply <strong>STOP</strong> to unsubscribe at any time.
                </span>
              </label>

              <p className="text-[12px] text-[#86868b]">
                Reply <strong>HELP</strong> for assistance or contact us at{" "}
                <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                  info@sharkbrandingsolutions.com
                </a>. View our{" "}
                <a href="/privacy" className="text-[#18b5d8] underline">Privacy Policy</a>{" "}
                and{" "}
                <a href="/terms" className="text-[#18b5d8] underline">Terms of Service</a>.
              </p>
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-8">
            <div>
              <p className="text-[14px] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-3">
                Phone
              </p>
              <a
                href="tel:+17275133955"
                className="text-[21px] font-semibold text-[#18b5d8] hover:text-[#1ec8ee] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 rounded"
              >
                (727) 513-3955
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
                27251 Wesley Chapel Blvd.
                <br />
                Suite B14 #805
                <br />
                Wesley Chapel, FL 33544
                <br />
                Serving all of Tampa Bay
              </p>
            </div>

            <div className="bg-[#07141a] rounded-[18px] p-6">
              <p className="text-[#18b5d8] text-[14px] font-semibold uppercase tracking-wide mb-2">
                Free AI Audit
              </p>
              <p className="text-[17px] text-white mb-1">
                Reviewed with you personally.
              </p>
              <p className="text-[14px] text-[#cccccc]">
                No commitment. 1-hour session included.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
