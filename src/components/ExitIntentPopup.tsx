"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const enabled = useRef(false);
  const triggered = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("exit_popup_dismissed")) return;

    // Enable exit detection after 30 seconds
    const readyTimer = setTimeout(() => {
      enabled.current = true;
    }, 30000);

    // Fallback for mobile: show after 50 seconds if not yet triggered
    const mobileTimer = setTimeout(() => {
      if (!triggered.current && enabled.current) {
        triggered.current = true;
        setVisible(true);
      }
    }, 50000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!enabled.current || triggered.current) return;
      if (e.clientY <= 5) {
        triggered.current = true;
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(readyTimer);
      clearTimeout(mobileTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("exit_popup_dismissed", "1");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dismiss();
    router.push("/ai-audit");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="bg-white rounded-[24px] p-8 max-w-[480px] w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-popup-title"
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full text-[#aaa] hover:text-[#333] hover:bg-[#f5f5f5] transition-colors text-[20px] leading-none [touch-action:manipulation]"
          aria-label="Close"
        >
          ×
        </button>

        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#18b5d8] mb-4">
          Before You Go
        </p>
        <h2
          id="exit-popup-title"
          className="text-[24px] font-bold text-[#0a0a0a] mb-3 leading-snug"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Find Out If AI Can See Your Business
        </h2>
        <p className="text-[14px] text-[#555] mb-6 leading-relaxed">
          Enter your business name and we&rsquo;ll send you a free snapshot of how ChatGPT and Google AI Overview describe you today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your business name"
            required
            className="w-full px-4 py-3 rounded-full border border-[#d2d2d7] text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:border-[#18b5d8] transition-shadow"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-3 rounded-full border border-[#d2d2d7] text-[15px] outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:border-[#18b5d8] transition-shadow"
          />
          <button
            type="submit"
            className="w-full bg-[#18b5d8] text-white text-[15px] font-semibold rounded-full py-3.5 hover:bg-[#1ec8ee] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2"
          >
            Send My AI Visibility Snapshot
          </button>
        </form>

        <p className="text-center mt-4">
          <button
            onClick={dismiss}
            className="text-[13px] text-[#aaa] hover:text-[#555] hover:underline transition-colors min-h-[44px] px-4 [touch-action:manipulation]"
          >
            I already show up in AI search
          </button>
        </p>
      </div>
    </div>
  );
}
