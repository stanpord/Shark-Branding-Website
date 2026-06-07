import type { Metadata } from 'next'
import AiEmployeesDeep from './AiEmployeesDeep'
import Showcase from './Showcase'

export const metadata: Metadata = {
  title: 'Meet Your AI Team — Shark AI Solutions',
  description: 'A deep dive into every AI employee — Gemma, Blogger, Reputation Specialist, Lead Qualifier, and Social Media Manager. Built for Tampa Bay businesses.',
  robots: { index: true, follow: true },
}

export default function ShowcasePage() {
  return (
    <>
      <AiEmployeesDeep />
      <Showcase />
    </>
  )
}
