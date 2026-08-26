"use client";

import { useEffect, useRef } from "react";
import { BOOK_INLINE_WIDGET, BOOK_WIDGET_JS } from "@/lib/ep";

export default function BookingEmbed() {
  const scriptRef = useRef(false);

  useEffect(() => {
    if (scriptRef.current || document.getElementById("__bmn_widget_js")) return;
    scriptRef.current = true;
    const s = document.createElement("script");
    s.id = "__bmn_widget_js";
    s.src = BOOK_WIDGET_JS;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className="bookmenow-inline-widget w-full"
      data-url={BOOK_INLINE_WIDGET}
      style={{ minWidth: "320px", height: "710px" }}
    />
  );
}
