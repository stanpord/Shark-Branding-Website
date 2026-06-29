import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://sharkbrandingsolutions.com/contact",
      url: "https://sharkbrandingsolutions.com/contact",
      name: "Contact Shark AI Solutions",
      description: "Get in touch with Shark AI Solutions. Start with a free AI visibility audit or book a strategy call. We respond within one business day.",
      isPartOf: { "@id": "https://sharkbrandingsolutions.com/#website" },
      about: { "@id": "https://sharkbrandingsolutions.com/#organization" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://sharkbrandingsolutions.com/#organization",
      name: "Shark AI Solutions",
      url: "https://sharkbrandingsolutions.com",
      telephone: "+17275133955",
      email: "info@sharkbrandingsolutions.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27251 Wesley Chapel Blvd., Suite B14 #805",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        postalCode: "33544",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Contact Shark AI Solutions | Tampa Bay AI Consulting",
  description:
    "Get in touch with Shark AI Solutions. Start with a free AI visibility report or book a call, we respond within one business day.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactForm />
    </>
  );
}
