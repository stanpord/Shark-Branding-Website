import type { Metadata } from 'next'
import AiEmployeesDeep from './AiEmployeesDeep'

export const metadata: Metadata = {
  title: 'Meet Your AI Team — Shark AI Solutions',
  description: 'Five AI employees for Tampa Bay businesses: Chat Receptionist, Voice Receptionist, Reputation Specialist, AI CRM, and AI Sales Coach. Live within one week.',
  robots: { index: true, follow: true },
}

export default function ShowcasePage() {
  return <AiEmployeesDeep />
}
