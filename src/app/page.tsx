import type { Metadata } from 'next'
import Showcase from './aiemployees/Showcase'

export const metadata: Metadata = {
  title: 'AI Employees for Tampa Bay Businesses — Shark Branding Solutions',
  description: 'Hire your first AI employee in 30 days. AI chat, follow-up, reviews, content, and social — built, trained, and live within the week. Serving Tampa Bay.',
}

export default function Home() {
  return <Showcase />
}
