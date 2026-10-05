"use client";

import { useEffect, useRef, useState } from "react";
import { REVIEW_SDK } from "@/lib/ep";

export default function LazyReviewWidget({ widgetId }: { widgetId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    if (document.querySelector(`script[src="${REVIEW_SDK}"]`)) return;
    const script = document.createElement("script");
    script.src = REVIEW_SDK;
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} role="region" aria-label="Live customer reviews">
      {shouldLoad && (
        // @ts-ignore — verify CDN URL: cdn.apigateway.co/review-widget-client.[prod]/sdk.js (double-dot may be a typo)
        <review-widget widget-id={widgetId}></review-widget>
      )}
    </div>
  );
}
