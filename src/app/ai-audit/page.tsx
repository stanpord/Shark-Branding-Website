import type { Metadata } from 'next'
import AuditForm from './AuditForm'

export const metadata: Metadata = {
  title: 'Free AI Visibility Audit | Shark AI Solutions',
  description:
    'Find out if ChatGPT, Gemini, and Google AI are recommending your competitors instead of you. Run a free AI visibility audit in 60 seconds.',
  alternates: {
    canonical: 'https://sharkbrandingsolutions.com/ai-audit',
  },
}

export default function AiAuditPage() {
  return (
    <div className="min-h-screen" style={{ background: '#07141a' }}>
      {/* Hero */}
      <div
        className="pt-20 pb-14 px-4 text-center"
        style={{ background: 'linear-gradient(180deg, #051015 0%, #07141a 100%)' }}
      >
        <span
          className="inline-block text-xs font-semibold rounded-full px-3 py-1 mb-6"
          style={{
            background: 'rgba(24,181,216,0.12)',
            color: '#18b5d8',
            border: '1px solid rgba(24,181,216,0.25)',
            letterSpacing: '0.06em',
          }}
        >
          FREE AI VISIBILITY AUDIT
        </span>
        <h1
          className="display-lg text-white mb-4 max-w-2xl mx-auto"
          style={{ textWrap: 'balance' } as React.CSSProperties}
        >
          Find out if AI is recommending your competitors instead of you
        </h1>
        <p className="max-w-lg mx-auto text-base" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
          ChatGPT, Gemini, and Google AI Overviews are already recommending local businesses in your
          market. Run your free audit in 60 seconds to see where you stand.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-4 pb-20">
        <AuditForm />
      </div>
    </div>
  )
}
