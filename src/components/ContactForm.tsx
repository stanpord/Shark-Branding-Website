"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "b39a5035-1b41-4927-a7d2-cb4db1eb804e");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#0a3d2e] border border-[#18b5d8]/30 rounded-[20px] px-8 py-10 text-center">
        <div className="text-[32px] mb-4">✓</div>
        <h3 className="text-[20px] font-semibold text-white mb-2">We got it.</h3>
        <p className="text-white/60 text-[15px]">
          You&rsquo;ll hear from us within one business day to schedule your call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="subject" value="New inquiry — Shark Branding Solutions" />
      <input type="hidden" name="from_name" value="Shark Website" />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-1.5">Your Name *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Michelle"
            className="w-full bg-white border border-[#d2d2d7] rounded-[12px] px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#aaa] outline-none focus:border-[#18b5d8] focus:ring-1 focus:ring-[#18b5d8] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-1.5">Business Name *</label>
          <input
            name="business"
            type="text"
            required
            placeholder="Acme HVAC"
            className="w-full bg-white border border-[#d2d2d7] rounded-[12px] px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#aaa] outline-none focus:border-[#18b5d8] focus:ring-1 focus:ring-[#18b5d8] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-1.5">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@yourbiz.com"
            className="w-full bg-white border border-[#d2d2d7] rounded-[12px] px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#aaa] outline-none focus:border-[#18b5d8] focus:ring-1 focus:ring-[#18b5d8] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-1.5">Phone</label>
          <input
            name="phone"
            type="tel"
            placeholder="(727) 555-0100"
            className="w-full bg-white border border-[#d2d2d7] rounded-[12px] px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#aaa] outline-none focus:border-[#18b5d8] focus:ring-1 focus:ring-[#18b5d8] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-1.5">What are you interested in? *</label>
        <select
          name="interest"
          required
          className="w-full bg-white border border-[#d2d2d7] rounded-[12px] px-4 py-3 text-[15px] text-[#1d1d1f] outline-none focus:border-[#18b5d8] focus:ring-1 focus:ring-[#18b5d8] transition-colors"
        >
          <option value="">Select one…</option>
          <option value="Free Visibility Audit">Free Visibility Audit</option>
          <option value="AI Visibility Toolkit — Done For You ($2,000/mo)">AI Visibility Toolkit — Done For You ($2,000/mo)</option>
          <option value="AI Visibility Toolkit — Self-Guided ($997/mo)">AI Visibility Toolkit — Self-Guided ($997/mo)</option>
          <option value="North Tampa Bay Chamber Member — Member Pricing">North Tampa Bay Chamber Member — Member Pricing</option>
          <option value="AI Marketing Employees">AI Marketing Employees</option>
          <option value="AI Operations Employees">AI Operations Employees</option>
          <option value="Custom AI Consulting">Custom AI Consulting</option>
          <option value="Workshop or Training">Workshop or Training</option>
          <option value="Just exploring">Just exploring</option>
        </select>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-1.5">Anything else we should know?</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your business, biggest challenge, or just say hi."
          className="w-full bg-white border border-[#d2d2d7] rounded-[12px] px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#aaa] outline-none focus:border-[#18b5d8] focus:ring-1 focus:ring-[#18b5d8] transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-[13px]">Something went wrong — try emailing us directly at info@sharkbrandingsolutions.com.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-press w-full bg-[#0a0a0a] text-white text-[16px] font-semibold rounded-full py-4 hover:bg-[#18b5d8] disabled:opacity-50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 [touch-action:manipulation]"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p className="text-center text-[12px] text-[#7a7a7a]">We respond within one business day. No spam, ever.</p>
    </form>
  );
}
