"use client";

import { BOOK_INLINE_WIDGET } from "@/lib/ep";

export default function BookingEmbed() {
  return (
    <div
      className="bookmenow-inline-widget w-full"
      data-url={BOOK_INLINE_WIDGET}
      style={{ minWidth: "320px", height: "710px" }}
    />
  );
}
