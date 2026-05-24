import type { Metadata } from 'next'
import { checkAuth, logoutAction } from '../secret/actions'
import { botsLoginAction } from './actions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Tools — Shark AI Internal',
  robots: { index: false, follow: false },
}

const TOOLS = [
  {
    href: '/bots/advisor',
    label: 'AI Advisor',
    description: 'Enter a prospect and get a prioritized pitch plan — right offer, right angle, right price.',
    tag: 'Strategy',
    tagColor: 'text-[#4FD1A0] bg-[#4FD1A0]/10',
    icon: '🧠',
  },
  {
    href: '/sales-assistant',
    label: 'Sales Assistant',
    description: 'Real-time AI coaching during live calls. Invisible to the prospect. Tells you exactly what to say.',
    tag: 'Live Calls',
    tagColor: 'text-[#18b5d8] bg-[#18b5d8]/10',
    icon: '🎧',
  },
  {
    href: '/call-bot',
    label: 'AI Caller',
    description: 'Outbound AI voice calls that qualify prospects, handle objections, and book follow-ups with Michelle.',
    tag: 'Outbound',
    tagColor: 'text-[#F9DB79] bg-[#F9DB79]/10',
    icon: '📞',
  },
  {
    href: '/bots/showcase',
    label: 'AI Employee Showcase',
    description: 'Screen-share this during demos. 3D carousel of every AI employee — show prospects exactly what they\'re getting.',
    tag: 'Demo',
    tagColor: 'text-[#F7555F] bg-[#F7555F]/10',
    icon: '🤖',
  },
]

export default async function BotsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const isAuthed = await checkAuth()
  const params = await searchParams

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
        <div className="w-full max-w-[380px]">
          <div className="text-center mb-10">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-3">
              Shark AI — Internal
            </p>
            <h1 className="text-[28px] font-bold text-white">AI Tools</h1>
            <p className="text-white/40 text-[14px] mt-2">Enter your password to continue.</p>
          </div>
          <form action={botsLoginAction} className="space-y-4">
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                autoFocus
                className="w-full bg-[#07141a] border border-white/10 rounded-xl px-5 py-4 text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-[#18b5d8]/50 transition-colors"
              />
              {params.error === '1' && (
                <p className="text-[#F7555F] text-[13px] mt-2">Incorrect password.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#18b5d8] text-white font-semibold text-[16px] py-4 rounded-xl hover:bg-[#1ec8ee] transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-14">
      <div className="max-w-[760px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-2">
              Shark AI — Internal
            </p>
            <h1 className="text-[36px] font-bold text-white leading-tight">AI Tools</h1>
            <p className="text-white/35 text-[15px] mt-2">Everything you need to close more deals.</p>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="text-[13px] text-white/30 hover:text-white/60 transition-colors py-2">
              Sign out
            </button>
          </form>
        </div>

        {/* Tool Cards */}
        <div className="space-y-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-[#07141a] border border-white/8 rounded-2xl p-6 hover:border-white/20 hover:bg-[#0a1a24] transition-all group"
            >
              <div className="flex items-start gap-4">
                <span className="text-[28px] shrink-0 mt-0.5">{tool.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h2 className="text-white font-bold text-[18px] group-hover:text-[#18b5d8] transition-colors">
                      {tool.label}
                    </h2>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${tool.tagColor}`}>
                      {tool.tag}
                    </span>
                  </div>
                  <p className="text-white/45 text-[14px] leading-relaxed">{tool.description}</p>
                </div>
                <span className="text-white/20 group-hover:text-white/50 transition-colors text-[20px] shrink-0 mt-1">→</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-white/15 text-[12px] text-center mt-12">
          Shark AI Solutions · Internal use only · Do not share this URL
        </p>
      </div>
    </div>
  )
}
