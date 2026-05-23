"use client";

import Script from "next/script";

const WIDGET_ID = "b9dd1fd7-88ec-11f0-91f4-3228900e0384";

export default function ChatWidget() {
  function handleLoad() {
    try {
      // @ts-expect-error — Vendasta webchatAPI injected by SDK
      webchatAPI.sendMessage("", WIDGET_ID);
    } catch {
      // SDK not ready yet — safe to ignore
    }
  }

  return (
    <>
      {/* Vendasta chat widget — cyan brand color override */}
      <style>{`
        [data-widget-id="${WIDGET_ID}"] iframe,
        #webchat-launcher-button,
        .webchat-launcher,
        [class*="webchat"][class*="launcher"],
        [class*="webchat"][class*="button"],
        [id*="webchat"][id*="launcher"] {
          background-color: #18b5d8 !important;
          border-color: #18b5d8 !important;
        }
      `}</style>

      <Script
        src="https://cdn.apigateway.co/webchat-client..prod/sdk.js"
        data-widget-id={WIDGET_ID}
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
    </>
  );
}
