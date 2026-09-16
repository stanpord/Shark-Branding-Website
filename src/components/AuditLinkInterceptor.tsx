"use client";
import { useEffect } from "react";

export default function AuditLinkInterceptor() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a[href="/ai-audit"]');
      if (!anchor) return;
      e.preventDefault();
      e.stopPropagation();
      window.dispatchEvent(new CustomEvent("open-audit-modal"));
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);
  return null;
}
