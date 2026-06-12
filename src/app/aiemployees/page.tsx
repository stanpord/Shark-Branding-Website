import type { Metadata } from 'next'
import AiEmployeesDeep from './AiEmployeesDeep'
import Showcase from './Showcase'

export const metadata: Metadata = {
  title: 'AI Employees — Tampa Bay | Shark Branding Solutions',
  description: 'AI employees for lead follow-up, review management, appointment booking, and content — 24/7, on autopilot. Serving Wesley Chapel and Tampa Bay.',
  alternates: { canonical: 'https://sharkbrandingsolutions.com/aiemployees' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'AI Employees — Tampa Bay | Shark Branding Solutions',
    description: 'Gemma, Reputation Specialist, AI CRM, Blogger, and Social Media Manager. AI employees built for local businesses — live within a week.',
    url: 'https://sharkbrandingsolutions.com/aiemployees',
    type: 'website',
    images: [{ url: 'https://sharkbrandingsolutions.com/logo.webp', width: 1200, height: 630, alt: 'AI Employees — Shark Branding Solutions' }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sharkbrandingsolutions.com/aiemployees#service',
      name: 'AI Employees for Tampa Bay Businesses',
      alternateName: 'AI Automation for Local Businesses',
      description: 'AI employees that handle lead qualification, automated follow-up, review management, content publishing, and appointment booking — 24/7, without adding headcount. Built and deployed for Wesley Chapel, Tampa Bay, Lutz, and Land O\'Lakes businesses.',
      url: 'https://sharkbrandingsolutions.com/aiemployees',
      provider: {
        '@id': 'https://sharkbrandingsolutions.com/#organization',
      },
      areaServed: [
        { '@type': 'City', name: 'Wesley Chapel' },
        { '@type': 'City', name: 'Tampa' },
        { '@type': 'City', name: 'Lutz' },
        { '@type': 'City', name: 'Land O Lakes' },
        { '@type': 'City', name: 'New Tampa' },
        { '@type': 'City', name: 'Zephyrhills' },
      ],
      serviceType: 'AI Business Automation',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Employee Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Gemma — AI Chat Receptionist',
              description: 'AI chat receptionist that greets every website visitor, qualifies leads, and books appointments 24/7.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Reputation Specialist',
              description: 'Automatically requests reviews after every job and responds to every Google and Facebook review in your brand voice.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI CRM — Sales Assistant',
              description: 'Runs automated multi-touch follow-up across email, SMS, and phone so no lead goes cold.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Blogger — AI Content Writer',
              description: 'Publishes weekly SEO-optimized articles that build authority and get cited by AI search engines.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Social Media Manager',
              description: 'Creates and schedules daily on-brand social content across Facebook, Instagram, Google Business, and LinkedIn.',
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
          name: 'What is an AI employee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI employee is a software agent trained to perform a specific business function automatically — such as responding to leads, managing reviews, publishing content, or running follow-up sequences. Unlike a chatbot or generic automation tool, each AI employee is configured for your business, your voice, and your specific workflows.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can an AI employee go live?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most AI employees are built, trained, and live within one week of kickoff. The setup process includes a discovery call, configuration to your business, and a review before anything goes live.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which businesses in Wesley Chapel and Tampa Bay benefit most from AI employees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Any local service business that handles leads, bookings, reviews, or customer communication. This includes home services, HVAC, real estate, healthcare, legal, contractors, restaurants, and professional services across Wesley Chapel, Tampa, Lutz, and Land O\'Lakes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do AI employees replace my staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. AI employees handle repetitive, time-consuming tasks so your team can focus on work that requires a human. They work alongside your existing staff — handling after-hours leads, review responses, and follow-up sequences while your team focuses on closing and delivering.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it cost to hire an AI employee?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pricing depends on which AI employees you deploy and the scope of your setup. We offer a free AI audit to identify which employees would have the biggest impact on your business before any commitment.',
          },
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
      <Showcase />
    </>
  )
}
