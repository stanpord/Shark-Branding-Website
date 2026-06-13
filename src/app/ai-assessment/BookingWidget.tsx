"use client";
import { useEffect, useRef } from "react";

const WIDGET_DATA =
  "eyJiYWNrZ3JvdW5kQ29sb3IiOiIjRjRGN0ZBIiwiYmFzZVVSTCI6Imh0dHBzOi8vZm9ybXMtcHJvZC5hcGlnYXRld2F5LmNvIiwiYm9yZGVyQ29sb3IiOiIjMWE3YWRiIiwiYm9yZGVyUmFkaXVzIjoiMTJweCIsImJvcmRlclN0eWxlIjoic29saWQiLCJib3JkZXJXaWR0aCI6IjJweCIsImZvcm1JZCI6IkZvcm1Db25maWdJRC05MGVmYzRmYy0yMDhhLTQyNTAtOTgyYS04NGYxYmVkMzM1ZTIiLCJwYWRkaW5nIjoiMjhweCIsInByaW1hcnlDb2xvciI6IiMxOEI1RDgiLCJwcmltYXJ5Rm9udENvbG9yIjoiIzBEMUYyRCIsIndpZHRoIjoiMTAwJSJ9";

export default function BookingWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.id = "__custom_form_widget";
    script.src =
      "https://www.cdnstyles.com/static/custom_form_widget/v1/custom_form.widget.js";
    script.setAttribute("data", WIDGET_DATA);
    container.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
