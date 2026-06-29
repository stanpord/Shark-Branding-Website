import type { Metadata } from 'next'
import Showcase from './Showcase'

export const metadata: Metadata = {
  title: 'AI Employees, Shark AI',
  robots: { index: true, follow: true },
}

export default function ShowcasePage() {
  return <Showcase />
}
