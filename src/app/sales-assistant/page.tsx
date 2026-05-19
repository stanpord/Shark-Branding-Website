import type { Metadata } from 'next'
import { checkAuth } from '../secret/actions'
import { botsLoginAction } from '../bots/actions'
import SalesAssistant from './SalesAssistant'

export const metadata: Metadata = {
  title: 'Sales Assistant — Shark AI Internal',
  robots: { index: false, follow: false },
}

export default async function SalesAssistantPage({
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
            <h1 className="text-[28px] font-bold text-white">Sales Assistant</h1>
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

  return <SalesAssistant />
}
