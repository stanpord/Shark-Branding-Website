"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const BOOKING_URL =
  "https://bookmenow.info/book/ai-report-visibility-review/Ai-Visitbility-Report-Review";

export default function AuditModal() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback(() => { setOpen(true); setSubmitted(false); }, []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    window.addEventListener("open-audit-modal", openModal);
    return () => window.removeEventListener("open-audit-modal", openModal);
  }, [openModal]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open || loaded || !containerRef.current) return;
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-crm-form-widget", "");
    script.src = "https://www.cdnstyles.com/static/custom_form_widget/v1/custom_form.widget.js";
    script.setAttribute(
      "data",
      "eyJiYWNrZ3JvdW5kQ29sb3IiOiIjZmZmZmZmIiwiYmFzZVVSTCI6Imh0dHBzOi8vZm9ybXMtcHJvZC5hcGlnYXRld2F5LmNvIiwiYm9yZGVyQ29sb3IiOiIjMDAwMDAwIiwiYm9yZGVyUmFkaXVzIjoiNXB4IiwiYm9yZGVyU3R5bGUiOiJzb2xpZCIsImJvcmRlcldpZHRoIjoiMXB4IiwiZm9ybUlkIjoiRm9ybUNvbmZpZ0lELTBmMmQ4NDQ2LWU0OTQtNDJlOC1iYTBkLTMzYjhlMzY5ZDI0OSIsInBhZGRpbmciOiIyMHB4IiwicHJpbWFyeUNvbG9yIjoiIzE4NzZEMiIsInByaW1hcnlGb250Q29sb3IiOiIjMDAwMDAwIiwid2lkdGgiOiIxMDAlIn0="
    );
    containerRef.current.appendChild(script);
    setLoaded(true);

    // Watch for success state from the Vendasta widget
    const observer = new MutationObserver(() => {
      const container = containerRef.current;
      if (!container) return;
      const text = container.innerText.toLowerCase();
      if (
        text.includes("thank you") ||
        text.includes("submitted") ||
        text.includes("success") ||
        text.includes("received")
      ) {
        setSubmitted(true);
        observer.disconnect();
      }
    });
    observer.observe(containerRef.current, { childList: true, subtree: true, characterData: true });

    const onMessage = (e: MessageEvent) => {
      if (typeof e.data === "string" && (e.data.includes("form_submitted") || e.data.includes("success"))) {
        setSubmitted(true);
      }
      if (typeof e.data === "object" && e.data?.type === "form_submitted") {
        setSubmitted(true);
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", onMessage);
    };
  }, [open, loaded]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free AI Audit"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {submitted ? (
        <div className="relative z-10 bg-[#07141a] rounded-[24px] p-10 max-w-[480px] w-full text-center shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white motion-safe:transition-colors"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#18b5d8]/20 mb-6">
            <svg className="w-7 h-7 text-[#18b5d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[28px] font-bold text-white mb-3">Report request received!</h2>
          <p className="text-[#aaaaaa] text-[16px] mb-8 leading-relaxed">
            Your free AI Visibility Report is on its way. Book a call now so we can walk you through your results personally.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-[#18b5d8] hover:bg-[#1ec8ee] text-white font-semibold text-[17px] py-4 px-8 rounded-[12px] motion-safe:transition-colors mb-4"
          >
            Book your free review call
          </a>
          <button
            onClick={closeModal}
            className="text-[14px] text-[#666] hover:text-[#999] motion-safe:transition-colors"
          >
            No thanks, I&rsquo;ll wait for the report
          </button>
        </div>
      ) : (
        <div className="relative bg-white rounded-[20px] w-full max-w-[540px] max-h-[90vh] overflow-y-auto shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] motion-safe:transition-colors duration-150"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="px-8 pt-8 pb-2 text-center">
            <p className="text-[#18b5d8] text-[12px] font-semibold tracking-[0.2em] uppercase mb-2">
              Free AI Audit
            </p>
            <h2 className="text-[22px] font-bold text-[#0a0a0a] leading-tight mb-1">
              See where your business stands.
            </h2>
            <p className="text-[14px] text-[#6e6e73] mb-2">
              Takes 60 seconds. Reviewed with you personally. No commitment.
            </p>
          </div>

          <div ref={containerRef} className="px-4 pb-8" />
        </div>
      )}
    </div>
  );
}
