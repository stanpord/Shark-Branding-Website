"use client";

import type { FormEvent } from "react";
import { useState, useRef } from "react";

const services = [
  "Free Visibility Report",
  "AI Business Consulting",
  "AI Visibility Toolkit — Self-Directed",
  "AI Visibility Toolkit — Fully Managed",
  "Workshop / Training",
  "Not sure yet",
];

const inputClass =
  "w-full border border-[#e0e0e0] rounded-[11px] px-4 py-3 text-[17px] text-[#1d1d1f] placeholder:text-[#cccccc] focus:outline-none focus:border-[#18b5d8] focus:ring-2 focus:ring-[#18b5d8]/20 motion-safe:transition-[border-color,box-shadow] [touch-action:manipulation]";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Replace with actual form submission (e.g. Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-black min-h-[40vh] flex items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[#18b5d8] text-[14px] font-semibold tracking-[0.15em] uppercase mb-5">
            Contact
          </p>
          <h1 className="display-hero text-white mb-5" style={{textWrap:"balance"}}>
            Let&rsquo;s talk about
            <br />
            <span className="text-[#18b5d8]">your visibility.</span>
          </h1>
          <p className="lead-airy text-[#cccccc]">
            Start with the free report, book a call, or just say hello. We
            respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16">
          {/* Form */}
          <div>
            {/* aria-live region announces state changes to screen readers */}
            <div ref={statusRef} aria-live="polite" aria-atomic="true">
              {submitted && (
                <div className="text-center py-20">
                  <p className="text-[56px] mb-4" aria-hidden="true">&#x2713;</p>
                  <h2 className="display-md text-[#1d1d1f] mb-3">
                    Message received!
                  </h2>
                  <p className="lead-airy text-[#333333]">
                    We&rsquo;ll be in touch within one business day. If your
                    request is for the free visibility report, expect it within
                    48 hours.
                  </p>
                </div>
              )}
            </div>

            {!submitted && (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first-name" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Michelle…"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Stanaland…"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                    Business Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    placeholder="you@yourbusiness.com…"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                    Phone <span className="font-normal text-[#7a7a7a]">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(727) 000-0000…"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="business-name" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                    Business Name
                  </label>
                  <input
                    id="business-name"
                    name="business-name"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Your Business LLC…"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                    I&rsquo;m interested in&hellip;
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service&hellip;
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-semibold text-[#1d1d1f] mb-2">
                    Message <span className="font-normal text-[#7a7a7a]">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    autoComplete="off"
                    placeholder="Tell us a bit about your business and what you&apos;re trying to solve…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-press w-full bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full py-[13px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-8">
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
                Free Visibility Report
              </p>
              <p className="text-[17px] text-white mb-1">
                Delivered within 48 hours.
              </p>
              <p className="text-[14px] text-[#cccccc]">
                No commitment. No sales call. Just honest data about where your
                business stands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
