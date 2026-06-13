"use client";

import { useEffect, useRef } from "react";

const WIDGET_DATA =
  "eyJhcGlLZXkiOiJkNDAzNzliNS01ODAxLTRkNmEtYmQ5Ny04ODg5MzgzMTU3ZjMiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyUmFkaXVzIjowLCJidXR0b25Db2xvciI6IiMyMjIyMjIiLCJidXR0b25Gb250Q29sb3IiOiIjRkZGRkZGIiwiYnV0dG9uVGV4dCI6IkdldCBNeSBGcmVlIFJlcG9ydCEiLCJjb25maXJtYXRpb25Cb2R5VGV4dCI6Ik9uY2UgaXQncyByZWFkeSwgd2UnbGwgc2VuZCB5b3VyIHJlcG9ydCB0byB0aGUgZW1haWwgYWRkcmVzcyB5b3UgaGF2ZSBwcm92aWRlZC4iLCJjb25maXJtYXRpb25UaXRsZVRleHQiOiJXZSdyZSBnZW5lcmF0aW5nIHlvdXIgcmVwb3J0ISIsImNvbnNlbnRJbmZvcm1hdGlvblRleHQiOiIiLCJkYXRhUHJvdGVjdGlvblBvbGljeVRleHQiOiIiLCJkcm9wU2hhZG93Ijp0cnVlLCJlbWFpbE5vdGlmaWNhdGlvbkFncmVlbWVudFRleHQiOiIiLCJwYXJ0bmVySWQiOiJaM1MyIiwicHJpbWFyeUZvbnRDb2xvciI6IiMyMjIyMjIiLCJzZWNvbmRhcnlGb250Q29sb3IiOiIjOUI5QjlCIiwidGl0bGVUZXh0IjoiSG93IGlzIG15IGJ1c2luZXNzIHBlcmZvcm1pbmcgb25saW5lPyIsInVybCI6Imh0dHBzOi8vc25hcHNob3Qtd2lkZ2V0LXByb2QuYXBpZ2F0ZXdheS5jby8iLCJ3aWRnZXRJZCI6IlNOQVBTSE9ULVdJREdFVC1hY2I4MjA5MC1hZjZkLTQxNzQtYTEwNC05YzdiMDViZjJkMmYiLCJ3aWR0aCI6MH0=";

export default function SnapshotWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.id = "__v_snapshot_widget";
    script.src =
      "https://www.cdnstyles.com/static/snapshot_widget/v1/snapshot.widget.js";
    script.setAttribute("data", WIDGET_DATA);
    container.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        .__ssw_submit_button {
          background-color: #18b5d8 !important;
          border-color: #18b5d8 !important;
        }
      `}</style>
      <div ref={ref} />
    </>
  );
}
