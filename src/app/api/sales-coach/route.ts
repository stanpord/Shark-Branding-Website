import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Anthropic from '@anthropic-ai/sdk'

export const maxDuration = 30

const anthropic = new Anthropic()

const SALES_CONTEXT = `
COMPANY: Shark AI Solutions (also branded Shark Branding Solutions)
TEAM: Michelle (sales lead), Josh (sales/delivery)
LOCATION: Tampa Bay / Wesley Chapel, FL

FLAGSHIP OFFER — AI Transformation Partner: $4,500/month
- AI Visibility Foundation: business appears in ChatGPT, Google AI, Gemini without ads
- One Custom AI Employee (choose: AI Receptionist, Lead Qualifier Bot, Patient Intake Bot, or Operations Assistant)
- Monthly management of both systems
- Bi-weekly 30-min strategy calls
- Monthly performance report
- Built and live within 30 days
- Currently offering "Founding Client" spots: price locked, no setup fee, AI employee live in 30 days (5 spots only)

ENTRY PACKAGE: $397/month (12-month) or $497/month (3-month) — AI Visibility only, no AI employee

WHAT ONE NUMBER CLOSES THIS DEAL:
"How much is one new client worth to you?" Then: at $4,500/mo you need ONE or TWO new clients to ROI.
- Restoration company (Spaulding): one job = $5,000-$15,000. One job/month = 3x ROI.
- Healthcare/rehab (Ginger): one patient course = $1,500-$4,000. 2-3 patients = ROI.
- Contractor: one project = $8,000-$30,000. One project = covered.

KEY OBJECTION HANDLERS:
- "Too expensive" → "How much is one new client worth? At $4,500 you need one. Does your market have one?"
- "Let me think about it" → "What specifically are you weighing — budget, timing, or the deliverable?"
- "Need to talk to my partner" → "Can we get them on a quick call? Better than translating the whole conversation."
- "Tried marketing before, didn't work" → "What you tried was advertising. This is infrastructure — it changes how AI finds and recommends you. Different mechanism entirely."
- "Can I do a trial?" → "The visibility work compounds — a trial doesn't give you the result. What I can do is show you the gap in your current presence for free right now."
- "Going to do it ourselves" → "Absolutely. When it doesn't move in 90 days, call me. I'll still make it work."

DISCOVERY CALL STRUCTURE:
1. Set agenda: "Two questions, I'll show you one number, if it makes sense we talk about working together"
2. Ask: "What's the biggest place leads or time fall through the cracks?"
3. Ask: "Roughly what's a new client worth to you?"
4. Show the insight: what's broken in their specific world
5. Present the one number: ROI frame
6. Present offer simply: AI employee + visibility, 30 days, $4,500
7. Close: "Does the math work for your business?"

BUYING SIGNALS TO FLAG:
- They ask about price unprompted
- They ask "how fast" or "when could you start"
- They mention a specific problem that matches your solution
- They say "we've been trying to figure this out"
- They ask follow-up questions about the deliverable
- They say "that makes sense"

CLOSE SIGNALS:
- "What does the process look like?"
- "How do we get started?"
- "What do you need from me?"
- Any price question after you've presented the offer
`

export async function POST(req: NextRequest) {
  const store = await cookies()
  if (store.get('shark_secret_auth')?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY is not configured.' }, { status: 500 })
  }

  const { transcript, prospectName, prospectIndustry, callType } = await req.json()

  if (!transcript) {
    return NextResponse.json({ error: 'No transcript provided.' }, { status: 400 })
  }

  const prompt = `You are a real-time sales coach for Shark AI Solutions, feeding live suggestions to the salesperson (Michelle or Josh) during an active sales call. They can see your coaching but the prospect cannot.

${SALES_CONTEXT}

CURRENT CALL CONTEXT:
- Prospect: ${prospectName || 'Unknown'}
- Industry: ${prospectIndustry || 'Unknown'}
- Call type: ${callType || 'Discovery'}

RECENT TRANSCRIPT:
${transcript}

Analyze what just happened and give the salesperson immediate, actionable coaching. Be direct and brief — they are on a live call.

Return ONLY valid JSON, no markdown, no code fences:
{
  "signal": "buying" | "objection" | "neutral" | "close_now",
  "suggested_response": "<exactly what to say next — 1 sentence, max 12 words, natural speech, not scripty>",
  "subtext": "<5 words max — what they really mean>"
}

Rules:
- suggested_response is ONE sentence, 12 words max — they are reading this mid-conversation
- If signal is close_now, ask for the business directly in that one sentence
- Be specific to this prospect and industry
- subtext is optional context, brutally short`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 150,
      messages: [{ role: 'user', content: prompt }],
    })

    const textBlock = message.content.find((b) => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No response from Claude.' }, { status: 500 })
    }

    const match = textBlock.text.match(/\{[\s\S]*\}/)
    if (!match) {
      return NextResponse.json({ error: 'Unexpected response format.' }, { status: 500 })
    }

    let result
    try {
      result = JSON.parse(match[0])
    } catch {
      return NextResponse.json({ error: 'Could not parse coaching response.' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Claude API error: ${msg}` }, { status: 500 })
  }
}
