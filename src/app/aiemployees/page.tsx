import type { Metadata } from 'next'
import AiEmployeesDeep from './AiEmployeesDeep'

export const metadata: Metadata = {
  title: 'AI Employees for Service Businesses | Shark AI Solutions',
  description: 'Five AI employees for service businesses: Chat Receptionist, Voice Receptionist, Reputation Specialist, AI CRM, and AI Sales Coach. Live within one week.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Employees for Service Businesses | Shark AI Solutions',
    description: 'Five AI employees built for service businesses. Chat, voice, reviews, CRM, and sales coaching, live within a week.',
    url: 'https://sharkbrandingsolutions.com/aiemployees',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees | Shark AI Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#service',
      name: 'AI Employees for Service Businesses',
      description: 'AI employees that handle lead qualification, automated follow-up, review management, appointment booking, and sales coaching, 24/7, without adding headcount. Built and deployed for service businesses nationwide.',
      url: 'https://sharkbrandingsolutions.com/aiemployees',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United States' },
      serviceType: 'AI Business Automation',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does a Shark Branding AI employee work?',
          acceptedAnswer: { '@type': 'Answer', text: 'A Shark Branding AI employee is a software agent configured to perform a single, specific business function automatically, without human supervision. Each one is trained on your business data: your services, your voice, your pricing, and your workflows. When a lead contacts you, the AI employee greets them, qualifies them using your criteria, and either books an appointment, sends a follow-up sequence, or escalates to a human, depending on what the situation requires. Unlike a chatbot that needs constant prompting, an AI employee has a defined job, a fixed data source, and a built-in escalation path. Every interaction is logged and every transcript is saved. Your team sees only the conversations that need a human. Most AI employees go live within five to seven business days. They run continuously, answering calls, responding to reviews, and following up on leads, whether your office is open or not.' },
        },
        {
          '@type': 'Question',
          name: 'What is an AI employee?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI employee is a software agent trained to perform a specific business function automatically, such as responding to leads, managing reviews, running follow-up sequences, or coaching your sales reps. Each one is configured for your business, your voice, and your specific workflows.' },
        },
        {
          '@type': 'Question',
          name: 'How quickly can an AI employee go live?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most AI employees are built, trained, and live within one week of kickoff.' },
        },
        {
          '@type': 'Question',
          name: 'Which businesses benefit most from AI employees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Any service business that handles leads, bookings, reviews, or customer communication, including home services, HVAC, real estate, healthcare, legal, contractors, and professional services, whether you operate one location or many.' },
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
