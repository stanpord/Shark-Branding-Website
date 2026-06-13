import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Shark AI Solutions",
  description:
    "Get in touch with Shark AI Solutions. Start with a free AI visibility report or book a call — we respond within one business day.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
