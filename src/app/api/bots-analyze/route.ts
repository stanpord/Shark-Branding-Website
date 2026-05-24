import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Anthropic from '@anthropic-ai/sdk'

export const maxDuration = 60

const anthropic = new Anthropic()

const BOTS_CONTEXT = `
VISIBILITY (Primary Product — leads every pitch when applicable):
- AI Visibility Toolkit ($497/mo self-directed or $2,000/mo managed): Makes businesses appear in ChatGPT, Google AI Overviews, and Gemini. Fixes citations, listings, NAP consistency, review signals, and entity optimization. Initial changes visible in 7–14 days. BEST FOR: any local service business that relies on customers finding them online — HVAC, real estate, legal, medical, restaurants, retail, contractors, vending, gyms, salons, etc.

MARKETING BOTS (custom pricing, contact for quote):
- CMO Bot: Weekly market and competitor analysis, campaign strategy briefs, budget allocation, brand voice consistency, monthly performance reviews. BEST FOR: businesses spending money on marketing without a strategy or dedicated marketing director. Growing businesses needing direction without CMO salary.
- Reputation & Review AI: Automated review requests triggered by job completion, AI-written responses in brand voice, multi-platform monitoring (Google, Yelp, Facebook), negative review alerts. BEST FOR: businesses where reputation drives decisions — restaurants, contractors, home services, medical, legal, salons, auto repair, any business where reviews are a dealbreaker.
- Custom Marketing Bots: Social content generation and scheduling, email nurture sequences, lead scoring, automated reporting dashboards. BEST FOR: businesses repeating marketing tasks manually every week — posting, emailing, updating reports.

OPERATIONS BOTS (custom pricing, contact for quote):
- AI CRM Bot: Automatic lead capture and enrichment, intelligent follow-up sequences triggered by behavior, pipeline updates without manual data entry, weekly hot lead summaries. BEST FOR: B2B businesses, any business that follows up with leads, service businesses quoting multiple jobs, real estate, legal, insurance, any high-ticket B2C service.
- Sales Coach Bot: Call analysis and scoring, real-time objection handling suggestions, custom playbooks, team performance tracking, new rep onboarding acceleration. BEST FOR: businesses with sales reps who make calls, multi-rep teams, businesses with inconsistent close rates or high churn in new hires.
- Custom Operations Bots: Workflow audit, custom bot for highest-leverage process (scheduling, intake, client onboarding, reporting, invoicing). BEST FOR: businesses with admin-heavy processes eating staff hours — medical/dental intake, field service scheduling, contractor job management, franchise operations.
`

export async function POST(req: NextRequest) {
  const store = await cookies()
  if (store.get('shark_secret_auth')?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: 'ANTHROPIC_API_KEY is not configured.' },
      { status: 500 }
    )
  }

  const { name, industry, description, teamSize, challenge } = await req.json()

  if (!name || !industry) {
    return NextResponse.json({ error: 'Business name and industry are required.' }, { status: 400 })
  }

  const prompt = `You are a bot sales advisor for Shark Branding Solutions, a Tampa Bay AI consulting firm. Your job is to analyze a prospect business and recommend which AI products to pitch first, with specific reasoning and a conversation opener for each.

Available products:
${BOTS_CONTEXT}

Prospect business:
- Name: ${name}
- Industry: ${industry}
- Description: ${description || 'Not provided'}
- Team size: ${teamSize || 'Not provided'}
- Main challenge: ${challenge || 'Not provided'}

Return ONLY a valid JSON object in this exact shape, no markdown, no code fences:
{
  "business_summary": "<2-3 sentences summarizing what you understand about this business and why they need help>",
  "recommendations": [
    {
      "bot": "<exact bot name from the list>",
      "category": "Visibility" | "Marketing" | "Operations",
      "priority": <integer starting at 1, 1 = most important>,
      "why": "<2-3 sentences specifically about why this bot fits THIS business — reference their industry and situation>",
      "pitch": "<1-2 sentences Miche can say out loud to open the conversation about this specific bot with this specific prospect>",
      "urgency": "high" | "medium" | "low"
    }
  ],
  "notes": "<cross-sell opportunities, red flags, or anything else Miche should know going into this conversation>"
}

Rules:
- Only recommend bots that are a genuine fit. Typically 3-5 recommendations.
- Always evaluate the AI Visibility Toolkit first — it is the flagship product.
- Be specific. Generic advice is useless. Reference the actual business, industry, and situation.
- The pitch field should sound like something a human would actually say — not a sales script.`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2048,
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

    const cleaned = match[0].replace(/,(\s*[}\]])/g, '$1')

    let result
    try {
      result = JSON.parse(cleaned)
    } catch {
      return NextResponse.json({ error: 'Could not parse recommendations — try again.' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Claude API error: ${msg}` }, { status: 500 })
  }
}
