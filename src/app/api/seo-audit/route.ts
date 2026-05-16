import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

export async function POST(req: NextRequest) {
  // Auth check
  const store = await cookies()
  if (store.get('shark_secret_auth')?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { url } = await req.json()
  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: 'ANTHROPIC_API_KEY is not set. Add it to your Vercel environment variables.' },
      { status: 500 }
    )
  }

  // Fetch the target page
  let html = ''
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SharkSEOAudit/1.0)' },
      signal: AbortSignal.timeout(10000),
    })
    html = await res.text()
  } catch {
    return NextResponse.json({ error: `Could not fetch ${url} — check the URL and try again.` }, { status: 422 })
  }

  const prompt = `You are an expert SEO auditor trained on Google's published ranking systems documentation.

Analyze the HTML below against these specific Google ranking systems:
1. BERT / Neural Matching / RankBrain — does the H1, title, and content clearly express the page's topic and intent?
2. Link Analysis / PageRank — are there broken internal links? Are anchor texts descriptive?
3. Deduplication / Original Content — is there a canonical tag? Does it match the site's primary domain?
4. Reviews System — is there review/testimonial schema (Review, AggregateRating)?
5. Reliable Information — is there FAQPage schema? Are E-E-A-T signals present (author, credentials, citations)?
6. Freshness Systems — is there datePublished/dateModified in schema or meta?
7. Passage Ranking — are key sections long enough (150+ words) to stand alone as useful answers?
8. Local Systems — is there LocalBusiness schema? Is the service area named in content?
9. Spam Detection — any keyword stuffing, thin content, or manipulative signals?
10. Social / OpenGraph — is og:image set? Is twitter:card set to summary_large_image?

Return ONLY a valid JSON object in this exact shape, no markdown, no explanation:
{
  "score": <number 0-100>,
  "url": "<the url>",
  "findings": [
    {
      "system": "<system name>",
      "status": "pass" | "warn" | "fail",
      "issue": "<one sentence describing what was found>",
      "fix": "<one sentence concrete fix>"
    }
  ]
}

URL being audited: ${url}

HTML (first 15,000 chars):
${html.slice(0, 15000)}`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 2048,
      thinking: { type: 'adaptive' },
      messages: [{ role: 'user', content: prompt }],
    })

    const textBlock = message.content.find((b) => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'Claude returned no text output.' }, { status: 500 })
    }

    const match = textBlock.text.match(/\{[\s\S]*\}/)
    if (!match) {
      return NextResponse.json({ error: 'Claude returned an unexpected format.' }, { status: 500 })
    }

    const result = JSON.parse(match[0])
    return NextResponse.json(result)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Claude API error: ${msg}` }, { status: 500 })
  }
}
