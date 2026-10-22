"use client";
import { useEffect } from "react";

export default function AuditLinkInterceptor() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a[href="/ai-audit"]');
      if (!anchor) return;
      e.preventDefault();
      e.stopPropagation();
      // Where the click came from, for funnel analytics: explicit data-audit-source,
      // else the homepage section (data-scene), else nav/footer.
      const source =
        (anchor as HTMLElement).dataset.auditSource ||
        (anchor.closest("[data-scene]") as HTMLElement | null)?.dataset.scene ||
        (anchor.closest("footer") ? "footer" : anchor.closest("nav, header") ? "nav" : "other");
      window.dispatchEvent(new CustomEvent("open-audit-modal", { detail: { source } }));
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);
  return null;
}
