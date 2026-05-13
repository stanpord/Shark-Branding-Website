import type { Metadata } from "next";
import SharkHackathonPage from "@/components/SharkHackathonPage";

export const metadata: Metadata = {
  title: "Shark AI Hackathon - May 26, 2026",
  description:
    "Join the Shark AI Hackathon in Zephyrhills, Florida for live AI demos, CRM automation, AI receptionists, and high-pressure sales and support challenges.",
};

export default function Page() {
  return <SharkHackathonPage />;
}
