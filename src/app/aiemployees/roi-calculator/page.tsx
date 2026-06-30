import type { Metadata } from 'next'
import AiRoiCalculator from './AiRoiCalculator'

export const metadata: Metadata = {
  title: 'AI Employee ROI Calculator | Shark AI Solutions',
  description: 'Calculate your annual revenue lift, time savings, and conversion improvements from adding a 24/7 AI employee to your team.',
  robots: { index: false, follow: false },
}

export default function AiRoiCalculatorPage() {
  return <AiRoiCalculator />
}
