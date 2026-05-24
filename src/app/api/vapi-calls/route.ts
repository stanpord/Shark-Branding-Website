import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const maxDuration = 30

const VAPI_BASE = 'https://api.vapi.ai'

const SALES_SYSTEM_PROMPT = `You are Aria, a professional AI sales assistant calling on behalf of Shark AI Solutions (also known as Shark Branding Solutions), based in Wesley Chapel, Tampa Bay, FL. Michelle is the founder.

YOUR GOAL: Have a natural 3-5 minute conversation, qualify the prospect, and book a 15-minute follow-up call with Michelle.

OPENING:
1. Confirm you're speaking with the right person
2. Introduce yourself briefly
3. Ask if they have about 90 seconds
4. If yes, proceed. If no, ask when would be a better time.

DISCOVERY — ask naturally in conversation:
- "What's the biggest place leads or time fall through the cracks for you?"
- "Roughly, what's a new client worth to your business?"

VALUE FRAME (after discovery):
Shark AI helps businesses show up when someone asks ChatGPT, Google AI, or Gemini for a local service — without ads. When someone searches for [their service] in [their area], they come up first. At $4,500/month, if one new client is worth $3,000 or more, the math works on day one. Everything is built and managed for them, live within 30 days.

CLOSE: "I'd love to get you 15 minutes with Michelle, our founder. She can actually pull up your current AI presence and show you what competitors are showing up instead of you. Are you free any day this week?"

OBJECTION HANDLERS:
- "Too expensive" → "I hear you. How much is one new client worth? At $4,500 you only need one or two. Does your market have one?"
- "Not interested" → "Totally understand. Quick question — do you know if you come up when someone asks ChatGPT for [their service] in Wesley Chapel right now?"
- "Already have marketing" → "This is actually different — it's not ads or campaigns. It's infrastructure that changes how AI systems find and recommend you."
- "Send me info" → "Happy to. I'll have Michelle send it personally so she can answer your questions directly. What's your best email?"
- "Who are you again?" → "Aria, calling on behalf of Shark AI Solutions — we help local businesses show up in AI search results like ChatGPT and Google AI."

TONE AND PACING:
- Speak conversationally, not like a script
- Pause naturally after asking questions — let them respond fully
- Keep your responses to 1-2 sentences at a time
- Match their energy and pace
- Sound warm and confident, not pushy

END THE CALL when: prospect books a follow-up, declines after two genuine attempts, asks to be removed from the list, or the conversation reaches 7 minutes.`

async function vapiRequest(path: string, options: RequestInit = {}) {
  return fetch(`${VAPI_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.VAPI_API_KEY}`,
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  })
}

export async function POST(req: NextRequest) {
  const store = await cookies()
  if (store.get('shark_secret_auth')?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.VAPI_API_KEY || !process.env.VAPI_PHONE_NUMBER_ID) {
    return NextResponse.json(
      { error: 'VAPI_API_KEY and VAPI_PHONE_NUMBER_ID must be set in environment variables.' },
      { status: 500 }
    )
  }

  const { name, business, phone, industry } = await req.json()

  if (!phone) {
    return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 })
  }

  const industryPhrase = industry ? ` for ${industry} services` : ''
  const firstMessage = `Hi, is this ${name || 'there'}? This is Aria, an AI assistant calling on behalf of Shark AI Solutions here in Wesley Chapel. We help local businesses show up when people search on ChatGPT or Google AI${industryPhrase}. I know this is out of the blue — do you have about 90 seconds?`

  const prospectContext = `\n\nPROSPECT:\n- Name: ${name || 'Unknown'}\n- Business: ${business || 'Unknown'}\n- Industry: ${industry || 'Unknown'}`

  const body = {
    phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID,
    customer: {
      number: phone,
      ...(name ? { name } : {}),
    },
    assistant: {
      name: 'Aria',
      firstMessage,
      model: {
        provider: 'anthropic',
        model: 'claude-3-5-haiku-20241022',
        systemPrompt: SALES_SYSTEM_PROMPT + prospectContext,
        temperature: 0.7,
      },
      voice: {
        provider: 'azure',
        voiceId: 'en-US-JennyNeural',
      },
      transcriber: {
        provider: 'deepgram',
        model: 'nova-2',
        language: 'en',
      },
      endCallFunctionEnabled: true,
      endCallMessage: "Great talking with you! We'll be in touch soon.",
      recordingEnabled: true,
    },
    metadata: { name, business, industry },
  }

  try {
    const res = await vapiRequest('/call/phone', {
      method: 'POST',
      body: JSON.stringify(body),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || `Vapi error ${res.status}` },
        { status: res.status }
      )
    }

    return NextResponse.json(data)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Call failed: ${msg}` }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const store = await cookies()
  if (store.get('shark_secret_auth')?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.VAPI_API_KEY) {
    return NextResponse.json({ error: 'VAPI_API_KEY not configured.' }, { status: 500 })
  }

  const callId = req.nextUrl.searchParams.get('callId')
  if (!callId) {
    return NextResponse.json({ error: 'callId required' }, { status: 400 })
  }

  try {
    const res = await vapiRequest(`/call/${callId}`)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
