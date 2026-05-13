"use client";

import Script from "next/script";
import { useRef } from "react";

const WIDGET_DATA =
  "eyJhcGlLZXkiOiJkNDAzNzliNS01ODAxLTRkNmEtYmQ5Ny04ODg5MzgzMTU3ZjMiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyUmFkaXVzIjowLCJidXR0b25Db2xvciI6IiMyMjIyMjIiLCJidXR0b25Gb250Q29sb3IiOiIjRkZGRkZGIiwiYnV0dG9uVGV4dCI6IkdldCBNeSBGcmVlIFJlcG9ydCEiLCJjb25maXJtYXRpb25Cb2R5VGV4dCI6Ik9uY2UgaXQncyByZWFkeSwgd2UnbGwgc2VuZCB5b3VyIHJlcG9ydCB0byB0aGUgZW1haWwgYWRkcmVzcyB5b3UgaGF2ZSBwcm92aWRlZC4iLCJjb25maXJtYXRpb25UaXRsZVRleHQiOiJXZSdyZSBnZW5lcmF0aW5nIHlvdXIgcmVwb3J0ISIsImNvbnNlbnRJbmZvcm1hdGlvblRleHQiOiIiLCJkYXRhUHJvdGVjdGlvblBvbGljeVRleHQiOiIiLCJkcm9wU2hhZG93Ijp0cnVlLCJlbWFpbE5vdGlmaWNhdGlvbkFncmVlbWVudFRleHQiOiIiLCJwYXJ0bmVySWQiOiJaM1MyIiwicHJpbWFyeUZvbnRDb2xvciI6IiMyMjIyMjIiLCJzZWNvbmRhcnlGb250Q29sb3IiOiIjOUI5QjlCIiwidGl0bGVUZXh0IjoiSG93IGlzIG15IGJ1c2luZXNzIHBlcmZvcm1pbmcgb25saW5lPyIsInVybCI6Imh0dHBzOi8vc25hcHNob3Qtd2lkZ2V0LXByb2QuYXBpZ2F0ZXdheS5jby8iLCJ3aWRnZXRJZCI6IlNOQVBTSE9ULVdJREdFVC1hY2I4MjA5MC1hZjZkLTQxNzQtYTEwNC05YzdiMDViZjJkMmYiLCJ3aWR0aCI6MH0=";

function relocate(mount: HTMLDivElement) {
  const widget = document.getElementById("pm-widget-context-side-bar");
  if (!widget || mount.contains(widget)) return;
  mount.appendChild(widget);
  widget.style.position = "relative";
  widget.style.right = "auto";
  widget.style.bottom = "auto";
  widget.style.width = "100%";
  // Auto-open the widget panel
  const btn = widget.querySelector<HTMLElement>("[data-testid='widget-button']");
  if (btn) btn.click();
}

export default function SnapshotWidget() {
  const mountRef = useRef<HTMLDivElement>(null);

  function handleLoad() {
    const mount = mountRef.current;
    if (!mount) return;
    // Give Vendasta's script a tick to append its DOM
    setTimeout(() => relocate(mount), 100);
    // Retry once more in case it's slow
    setTimeout(() => relocate(mount), 1500);
  }

  return (
    <>
      <style>{`
        #pm-widget-context-side-bar {
          position: relative !important;
          right: auto !important;
          bottom: auto !important;
          width: 100% !important;
        }
        #pm-widget-context-side-bar [data-testid="widget-iframe"] {
          max-width: 100% !important;
          width: 100% !important;
          height: 460px !important;
        }
        #pm-widget-context-side-bar button {
          background-color: #18b5d8 !important;
          border-color: #18b5d8 !important;
        }
      `}</style>

      <div ref={mountRef} />

      <Script
        id="__v_snapshot_widget"
        src="https://www.cdnstyles.com/static/snapshot_widget/v1/snapshot.widget.js"
        // @ts-expect-error — Vendasta non-standard attribute
        data={WIDGET_DATA}
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
    </>
  );
}
