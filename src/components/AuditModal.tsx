"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function AuditModal() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback(() => setOpen(true), []);
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
    </div>
  );
}
