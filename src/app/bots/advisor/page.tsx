import type { Metadata } from 'next'
import { checkAuth } from '../../secret/actions'
import { botsLoginAction } from '../actions'
import { logoutAction } from '../../secret/actions'
import BotAdvisor from '../BotAdvisor'

export const metadata: Metadata = {
  title: 'AI Advisor — Shark AI Internal',
  robots: { index: false, follow: false },
}

export default async function BotAdvisorPage({
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
              Shark AI — Internal Tool
            </p>
            <h1 className="text-[28px] font-bold text-white">Bot Advisor</h1>
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
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-[860px] mx-auto">
        <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
          <div>
            <a href="/bots" className="text-[#18b5d8] text-[13px] hover:text-[#1ec8ee] transition-colors">
              ← All Tools
            </a>
            <h1 className="text-[32px] font-bold text-white mt-2">AI Advisor</h1>
            <p className="text-white/40 text-[14px] mt-1">Enter a prospect and get a prioritized pitch plan.</p>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="text-[13px] text-white/30 hover:text-white/60 transition-colors py-2">
              Sign out
            </button>
          </form>
        </div>
        <BotAdvisor />
      </div>
    </div>
  )
}
