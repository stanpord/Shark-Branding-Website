import type { Metadata } from 'next'
import AiEmployeesDeep from './AiEmployeesDeep'

export const metadata: Metadata = {
  title: 'Meet Your AI Team — Shark AI Solutions',
  description: 'Five AI employees for Tampa Bay businesses: Chat Receptionist, Voice Receptionist, Reputation Specialist, AI CRM, and AI Sales Coach. Live within one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Meet Your AI Team — Shark AI Solutions',
    description: 'Five AI employees built for local Tampa Bay businesses. Chat, voice, reviews, CRM, and sales coaching — live within a week.',
    url: 'https://sharkbrandingsolutions.com/aiemployees',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees — Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#service',
      name: 'AI Employees for Tampa Bay Businesses',
      description: 'AI employees that handle lead qualification, automated follow-up, review management, appointment booking, and sales coaching — 24/7, without adding headcount. Built and deployed for Wesley Chapel, Tampa Bay, Lutz, and Land O\'Lakes businesses.',
      url: 'https://sharkbrandingsolutions.com/aiemployees',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
        { '@type': 'City', name: 'New Tampa' },
        { '@type': 'City', name: 'Zephyrhills' },
      ],
      serviceType: 'AI Business Automation',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI employee?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI employee is a software agent trained to perform a specific business function automatically — such as responding to leads, managing reviews, running follow-up sequences, or coaching your sales reps. Each one is configured for your business, your voice, and your specific workflows.' },
        },
        {
          '@type': 'Question',
          name: 'How quickly can an AI employee go live?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most AI employees are built, trained, and live within one week of kickoff.' },
        },
        {
          '@type': 'Question',
          name: 'Which businesses in Wesley Chapel and Tampa Bay benefit most from AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Any local service business that handles leads, bookings, reviews, or customer communication — including home services, HVAC, real estate, healthcare, legal, contractors, and professional services across Wesley Chapel, Tampa, Lutz, and Land O\'Lakes.' },
        },
        {
          '@type': 'Question',
          name: 'Do AI employees replace my staff?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. AI employees handle repetitive, time-consuming tasks so your team can focus on work that requires a human. They work alongside your existing staff.' },
        },
        {
          '@type': 'Question',
          name: 'What does the Full AI Suite cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Full AI Suite starts at $5,000 per month. Individual AI employees are also available. Book a free strategy call to discuss which combination fits your business.' },
        },
      ],
    },
  ],
}

export default function ShowcasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AiEmployeesDeep />
    </>
  )
}
