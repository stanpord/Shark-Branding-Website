import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export const maxDuration = 60

const anthropic = new Anthropic()

export async function POST(req: NextRequest) {
  const { businessName, websiteUrl, city, industry } = await req.json()

  if (!websiteUrl || typeof websiteUrl !== 'string') {
    return NextResponse.json({ error: 'Website URL is required' }, { status: 400 })
  }

  const normalizedUrl = websiteUrl.startsWith('http') ? websiteUrl : `https://${websiteUrl}`

  let html = ''
  try {
    const res = await fetch(normalizedUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SharkAIAudit/1.0)' },
      signal: AbortSignal.timeout(10000),
      cache: 'no-store',
    })
    html = await res.text()
  } catch {
    return NextResponse.json(
      { error: `Could not reach ${normalizedUrl} — check the URL and try again.` },
      { status: 422 }
    )
  }

  const prompt = `You are an AI visibility auditor. A business wants to know if ChatGPT, Gemini, and Google AI Overviews will recommend them.

Business info:
- Name: ${businessName}
- Website: ${normalizedUrl}
- Location: ${city}
- Industry: ${industry}

Analyze the HTML below for these 6 AI visibility signals:
1. Schema Markup — is there LocalBusiness, FAQ, Review, or AggregateRating schema present?
2. Local Signals — is the business name, address, phone (NAP) consistent and clearly stated? Is the city/service area named in content?
3. FAQ Content — are there question-and-answer sections that directly answer what customers ask AI chatbots?
4. Authority Proof — are there reviews, star ratings, awards, certifications, or press mentions visible?
5. Technical Access — is there a sitemap, proper robots.txt, fast-loading structure, and no AI bot blocking?
6. AI Citation Readiness — is the business described clearly as an entity with a unique name, location, and specialty? Would ChatGPT be able to describe this business accurately?

Return ONLY a valid JSON object in this exact shape, no markdown, no explanation:
{
  "score": <number 0-100>,
  "findings": [
    {
      "signal": "Schema Markup",
      "status": "pass" | "warn" | "fail",
      "summary": "<one sentence: what was found or missing>",
      "fix": "<one sentence: the most impactful thing to fix or improve>"
    },
    {
      "signal": "Local Signals",
      "status": "pass" | "warn" | "fail",
      "summary": "<one sentence>",
      "fix": "<one sentence>"
    },
    {
      "signal": "FAQ Content",
      "status": "pass" | "warn" | "fail",
      "summary": "<one sentence>",
      "fix": "<one sentence>"
    },
    {
      "signal": "Authority Proof",
      "status": "pass" | "warn" | "fail",
      "summary": "<one sentence>",
      "fix": "<one sentence>"
    },
    {
      "signal": "Technical Access",
      "status": "pass" | "warn" | "fail",
      "summary": "<one sentence>",
      "fix": "<one sentence>"
    },
    {
      "signal": "AI Citation Readiness",
      "status": "pass" | "warn" | "fail",
      "summary": "<one sentence>",
      "fix": "<one sentence>"
    }
  ]
}

HTML (first 15,000 chars):
${html.slice(0, 15000)}`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })

    const textBlock = message.content.find((b) => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No result returned — please try again.' }, { status: 500 })
    }

    const match = textBlock.text.match(/\{[\s\S]*\}/)
    if (!match) {
      return NextResponse.json({ error: 'Unexpected result format — please try again.' }, { status: 500 })
    }

    const cleaned = match[0].replace(/,(\s*[}\]])/g, '$1')

    let result
    try {
      result = JSON.parse(cleaned)
    } catch {
      return NextResponse.json({ error: 'Could not parse result — please try again.' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Audit error: ${msg}` }, { status: 500 })
  }
}
