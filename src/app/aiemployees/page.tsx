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
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sharkbrandingsolutions.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Employees', item: 'https://sharkbrandingsolutions.com/aiemployees' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#service',
      name: 'AI Employees for Service Businesses',
      description: 'AI employees that handle lead qualification, automated follow-up, review management, appointment booking, and sales coaching, 24/7, without adding headcount. Built and deployed for service businesses nationwide.',
      url: 'https://sharkbrandingsolutions.com/aiemployees',
      provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United States' },
      serviceType: 'AI Business Automation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Employee Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://sharkbrandingsolutions.com/aiemployees#chat-receptionist',
              name: 'AI Chat Receptionist',
              alternateName: 'Gemma',
              description: 'An AI chat receptionist that captures and qualifies every website visitor 24/7. Answers questions about services and pricing, collects lead information, and books appointments, all in your brand voice, before leads can bounce to a competitor.',
              url: 'https://sharkbrandingsolutions.com/aiemployees',
              provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
              serviceType: 'AI Chat Receptionist',
              areaServed: { '@type': 'Country', name: 'United States' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://sharkbrandingsolutions.com/aiemployees#voice-receptionist',
              name: 'AI Voice Receptionist',
              description: 'An AI voice receptionist that answers every inbound call in your brand voice. No hold music. No missed leads. Qualifies callers, answers common questions, and routes urgent calls to a human when needed.',
              url: 'https://sharkbrandingsolutions.com/aiemployees',
              provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
              serviceType: 'AI Voice Receptionist',
              areaServed: { '@type': 'Country', name: 'United States' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://sharkbrandingsolutions.com/aiemployees#reputation-specialist',
              name: 'AI Reputation Specialist',
              description: 'An AI reputation specialist that monitors, responds to, and analyzes every Google and Facebook review automatically. Keeps your review response rate at 100% without adding any manual work.',
              url: 'https://sharkbrandingsolutions.com/aiemployees',
              provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
              serviceType: 'AI Review Management',
              areaServed: { '@type': 'Country', name: 'United States' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://sharkbrandingsolutions.com/aiemployees#ai-crm',
              name: 'AI CRM',
              description: 'An AI CRM that runs multi-touch follow-up sequences across email, SMS, and phone without any manual work. Qualifies leads, scores them by intent, and notifies your team when a prospect is ready to buy.',
              url: 'https://sharkbrandingsolutions.com/aiemployees',
              provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
              serviceType: 'AI CRM and Lead Follow-Up',
              areaServed: { '@type': 'Country', name: 'United States' },
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://sharkbrandingsolutions.com/aiemployees#sales-coach',
              name: 'AI Sales Coach',
              description: 'An AI sales coach that scores every sales call, fills your CRM automatically, and delivers personalized coaching notes after every conversation. Helps your team close more deals without more training time.',
              url: 'https://sharkbrandingsolutions.com/aiemployees',
              provider: { '@id': 'https://sharkbrandingsolutions.com/#organization' },
              serviceType: 'AI Sales Coaching',
              areaServed: { '@type': 'Country', name: 'United States' },
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI chat receptionist?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI chat receptionist is a software agent that handles incoming website chat conversations 24/7 in your brand voice. It answers questions about your services and pricing, collects lead information (name, contact details, what they need), and books appointments, all without any human involvement. Unlike a static chatbot with fixed menus, an AI chat receptionist understands natural language and responds the way a trained front-desk employee would. Leads who might have left your site unanswered at 11pm instead get a professional response in seconds.' },
        },
        {
          '@type': 'Question',
          name: 'How does an AI chat receptionist work?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI chat receptionist is trained on your business data: your services, pricing, service area, FAQs, and your specific booking process. When a visitor starts a chat on your website, the AI greets them, answers their questions using your information, qualifies them based on your criteria, and either books an appointment or sends a follow-up notification to your team. Every conversation is logged and saved. Your team only sees the chats that need a human. Most businesses have their AI chat receptionist live and handling real conversations within five to seven business days of setup.' },
        },
        {
          '@type': 'Question',
          name: 'How much does an AI chat receptionist cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI chat receptionist pricing at Shark AI Solutions is included as part of the Full AI Suite, which is scoped to your business size and needs. Book a free strategy call to get a custom quote based on your specific business and monthly conversation volume.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between an AI chat receptionist and a chatbot?',
          acceptedAnswer: { '@type': 'Answer', text: 'A traditional chatbot uses fixed menus and scripted responses. If a visitor asks something outside the script, the chatbot fails and the lead is lost. An AI chat receptionist uses a language model trained on your specific business data, so it can understand natural questions, handle follow-ups, and respond in a way that sounds like a trained employee, not a button menu. The practical difference is that an AI chat receptionist captures leads that a traditional chatbot would lose.' },
        },
        {
          '@type': 'Question',
          name: 'How does a Shark AI Solutions AI employee work?',
          acceptedAnswer: { '@type': 'Answer', text: 'A Shark AI Solutions AI employee is a software agent configured to perform a single, specific business function automatically, without human supervision. Each one is trained on your business data: your services, your voice, your pricing, and your workflows. When a lead contacts you, the AI employee greets them, qualifies them using your criteria, and either books an appointment, sends a follow-up sequence, or escalates to a human, depending on what the situation requires. Every interaction is logged and every transcript is saved. Your team sees only the conversations that need a human. Most AI employees go live within five to seven business days.' },
        },
        {
          '@type': 'Question',
          name: 'What is an AI employee?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI employee is a software agent trained to perform a specific business function automatically, such as responding to leads via chat or phone, managing reviews, running follow-up sequences, or coaching your sales reps. Each one is configured for your business, your voice, and your specific workflows.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Full AI Suite pricing is scoped to your business. Individual AI employees are also available. Book a free strategy call to discuss which combination fits your business and get a custom quote.' },
        },
        {
          '@type': 'Question',
          name: 'Why is the setup fee less than the monthly rate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Because you are not paying for a software implementation, you are hiring a team. Setup is onboarding: configuring your AI employees for your services, your area, and your process. The monthly is their payroll: six AI employees working 24/7, plus the Shark AI Solutions team managing and improving them every month. The cost sits where the work is, which is why clients are month-to-month with no annual contract.' },
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
