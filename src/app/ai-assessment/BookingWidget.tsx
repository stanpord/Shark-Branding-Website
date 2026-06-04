"use client";
import { useEffect, useRef } from "react";

const WIDGET_DATA =
  "eyJhcGlLZXkiOiI5ZmI1NTA1Mi1iZjI5LTQ3YWQtODljZi0xMTY3NGM3ZTVkODgiLCJiYWNrZ3JvdW5kQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyQ29sb3IiOiIjRkZGRkZGIiwiYm9yZGVyUmFkaXVzIjowLCJidXR0b25Db2xvciI6IiMyMjIyMjIiLCJidXR0b25Gb250Q29sb3IiOiIjRkZGRkZGIiwiYnV0dG9uVGV4dCI6IkdldCBNeSBBc3Nlc3NtZW50IiwiY29uZmlybWF0aW9uQm9keVRleHQiOiJUaGFuayB5b3UgZm9yIHNpZ25pbmcgdXAgZm9yIHlvdXIgY29tcGxpbWVudGFyeSBhc3Nlc3NtZW50IHRvIGZpbmQgb3V0IGp1c3QgaG93IEFJIGF1dG9tYXRpb24gY2FuIGhlbHAgaW1wcm92ZSB5b3VyIGJ1c2luZXNzLiBXZSB3aWxsIGJlIGluIHRvdWNoIHNvb24uIiwiY29uZmlybWF0aW9uVGl0bGVUZXh0IjoiSm9zaCB3aWxsIGJlIHJlYWNoaW5nIG91dCB0byB5b3Ugc29vbiEiLCJjb25zZW50SW5mb3JtYXRpb25UZXh0IjoiIiwiZGF0YVByb3RlY3Rpb25Qb2xpY3lUZXh0IjoiIiwiZHJvcFNoYWRvdyI6dHJ1ZSwiZW1haWxOb3RpZmljYXRpb25BZ3JlZW1lbnRUZXh0IjoiIiwicGFydG5lcklkIjoiWjNTMiIsInByaW1hcnlGb250Q29sb3IiOiIjMjIyMjIyIiwic2Vjb25kYXJ5Rm9udENvbG9yIjoiIzlCOUI5QiIsInRpdGxlVGV4dCI6IkdldCBZb3VyIENvbXBsaW1lbnRhcnkgMTUgTWludXRlIEFJIEFzc2Vzc21lbnQiLCJ1cmwiOiJodHRwczovL3NuYXBzaG90LXdpZGdldC1wcm9kLmFwaWdhdGV3YXkuY28vIiwid2lkZ2V0SWQiOiJTTkFQU0hPVC1XSURHRVQtNjJlYmExYzUtNWM3NS00ZjQ5LWEwYTAtMWE1OWNlYWZhMTZmIiwid2lkdGgiOjB9";

export default function BookingWidget() {
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

  return <div ref={ref} />;
}
