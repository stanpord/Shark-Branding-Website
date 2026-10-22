"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import { BOOK_AUDIT_REVIEW, FORM_WIDGET } from "@/lib/ep";
const BOOKING_URL = BOOK_AUDIT_REVIEW;

// Funnel events for GA4 (gtag is loaded in layout.tsx). No-op if blocked.
function track(event: string, params: Record<string, string>) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", event, params);
}

const SUCCESS_WORDS = ["thank you", "submitted", "success", "received"];

export default function AuditModal() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef("other");
  const submitTrackedRef = useRef(false);

  const openModal = useCallback((e: Event) => {
    const detail = (e as CustomEvent<{ source?: string }>).detail;
    // ?auto=1 links (e.g. the networking QR code) open the modal without a click source.
    const auto = new URLSearchParams(window.location.search).get("auto") === "1";
    sourceRef.current = detail?.source || (auto ? "auto_link" : "other");
    submitTrackedRef.current = false;
    setOpen(true);
    setSubmitted(false);
    track("audit_open", { source: sourceRef.current, page_path: window.location.pathname });
  }, []);
  const closeModal = useCallback(() => { setOpen(false); setLoaded(false); }, []);

  useEffect(() => {
    if (!submitted || submitTrackedRef.current) return;
    submitTrackedRef.current = true;
    track("audit_submit", { source: sourceRef.current, page_path: window.location.pathname });
  }, [submitted]);

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
    script.src = FORM_WIDGET;
    script.setAttribute(
      "data",
      "eyJiYWNrZ3JvdW5kQ29sb3IiOiIjZmZmZmZmIiwiYmFzZVVSTCI6Imh0dHBzOi8vZm9ybXMtcHJvZC5hcGlnYXRld2F5LmNvIiwiYm9yZGVyQ29sb3IiOiIjZThlOGVkIiwiYm9yZGVyUmFkaXVzIjoiMTJweCIsImJvcmRlclN0eWxlIjoic29saWQiLCJib3JkZXJXaWR0aCI6IjFweCIsImZvcm1JZCI6IkZvcm1Db25maWdJRC0wZjJkODQ0Ni1lNDk0LTQyZTgtYmEwZC0zM2I4ZTM2OWQyNDkiLCJwYWRkaW5nIjoiMjBweCIsInByaW1hcnlDb2xvciI6IiMxOEI1RDgiLCJwcmltYXJ5Rm9udENvbG9yIjoiIzFkMWQxZiIsIndpZHRoIjoiMTAwJSJ9"
    );
    containerRef.current.appendChild(script);
    setLoaded(true);

    // The CRM widget renders the form (and its thank-you message) inside an open
    // shadow root, which container.innerText can't see, so watch the shadow root too.
    const shadowObserver = new MutationObserver(() => {
      const host = containerRef.current?.querySelector(".crm-form-host");
      const formEl = host?.shadowRoot?.querySelector("form");
      const text = (host?.shadowRoot?.textContent || "").toLowerCase();
      // Success copy replaces the form, so require the form to be gone or hidden.
      if ((!formEl || formEl.getClientRects().length === 0) && SUCCESS_WORDS.some((w) => text.includes(w))) {
        setSubmitted(true);
        shadowObserver.disconnect();
      }
    });
    let watchedRoot: ShadowRoot | null = null;
    const observer = new MutationObserver(() => {
      const container = containerRef.current;
      if (!container) return;
      const root = container.querySelector(".crm-form-host")?.shadowRoot ?? null;
      if (root && root !== watchedRoot) {
        watchedRoot = root;
        shadowObserver.observe(root, { childList: true, subtree: true, characterData: true, attributes: true });
      }
      const text = container.innerText.toLowerCase();
      if (SUCCESS_WORDS.some((w) => text.includes(w))) {
        setSubmitted(true);
        observer.disconnect();
      }
    });
    observer.observe(containerRef.current, { childList: true, subtree: true, characterData: true });

    const onMessage = (e: MessageEvent) => {
      // Only the explicit form event: a bare "success" also comes from other widgets (chat).
      if (typeof e.data === "string" && e.data.includes("form_submitted")) {
        setSubmitted(true);
      }
      if (typeof e.data === "object" && e.data?.type === "form_submitted") {
        setSubmitted(true);
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      observer.disconnect();
      shadowObserver.disconnect();
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
          <h2 className="text-[28px] font-bold text-white mb-3">Audit submitted!</h2>
          <p className="text-[#aaaaaa] text-[16px] mb-8 leading-relaxed">
            Your AI Visibility Report is running now. You&rsquo;ll receive your findings within 48 hours. Once they land, book your walkthrough below and we&rsquo;ll go through every finding together.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("audit_book_walkthrough", { source: sourceRef.current })}
            className="inline-block w-full bg-[#18b5d8] hover:bg-[#1ec8ee] text-white font-semibold text-[17px] py-4 px-8 rounded-[12px] motion-safe:transition-colors mb-4"
          >
            Schedule my results walkthrough
          </a>
          <button
            onClick={closeModal}
            className="text-[14px] text-[#666] hover:text-[#999] motion-safe:transition-colors"
          >
            I&rsquo;ll book after I receive my audit
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
          </div>

          <div ref={containerRef} className="px-4 pb-8" />
        </div>
      )}
    </div>
  );
}
