import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Employees vs. Salesforce AI Agents | Shark AI Solutions",
  description:
    "Comparing Salesforce Agentforce alternatives for small and mid-size businesses. See how Shark AI Solutions stacks up against Salesforce AI agents on features, pricing, and time to value.",
  keywords: [
    "salesforce ai agents alternatives",
    "salesforce agentforce alternative",
    "salesforce alternative small business",
    "ai crm alternative to salesforce",
    "ai voice receptionist",
    "ai sales assistant Tampa Bay",
  ],
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/vs/salesforce",
  },
  openGraph: {
    title: "Salesforce AI Agents Alternatives for Small Business",
    description:
      "Most small businesses pay for enterprise tools they never fully use. See the full comparison: Salesforce Agentforce vs. Full AI Suite.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a good Salesforce AI agents alternative for small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For small and mid-size businesses, the Shark AI Solutions Full AI Suite is a practical Salesforce Agentforce alternative. It includes AI Voice Receptionist, AI Chat, AI CRM, AI Sales Manager, and Reputation AI for a flat $5,000/month with a one-time $2,000 setup fee and no annual contract, compared to Salesforce's $93k–$140k+ year-one cost for a comparable configuration.",
      },
    },
    {
      "@type": "Question",
      name: "How does Salesforce Agentforce compare to the Full AI Suite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salesforce Agentforce is enterprise software that requires a dedicated admin, a $15k–$75k implementation partner, and charges $2 per AI conversation. The Full AI Suite is designed for small business teams: no internal admin needed, a one-time $2,000 setup fee, no per-conversation billing, and includes AI voice, chat, CRM, sales follow-up, and reputation management for a flat $5,000/month.",
      },
    },
    {
      "@type": "Question",
      name: "Does Salesforce have a built-in AI voice receptionist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Salesforce does not natively answer inbound phone calls. AI voice capability requires a third-party telephony integration like Amazon Connect or Five9, adding cost and complexity. The Shark AI Solutions Full AI Suite includes a built-in AI Voice Receptionist that answers every call, qualifies the caller, and books appointments.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up the Full AI Suite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients are live within a week. The one-time $2,000 setup fee covers full configuration and onboarding. Salesforce deployments typically take 3 to 6 months with a systems integrator costing $15,000–$75,000+.",
      },
    },
  ],
};

export default function SalesforceVsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style>{`
        :root {
          --shark-blue: #18b5d8;
          --deep-teal: #1297b8;
          --ink: #1d1d1f;
          --ink-2: #3d3d3f;
          --ink-3: #6e6e73;
          --paper: #ffffff;
          --paper-2: #f5f5f7;
          --paper-3: #e8e8ed;
          --hairline: #d2d2d7;
          --green: #1e9e5a;
          --red: #c0392b;
          --orange: #d97706;
          --sf-blue: #0070d2;
        }
        .vs-body { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif; background: var(--paper-2); color: var(--ink); line-height: 1.5; }
        .vs-hero { background: linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 50%, #0d2d3a 100%); color: white; text-align: center; padding: 80px 40px 64px; }
        .vs-hero-eyebrow { font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--shark-blue); margin-bottom: 16px; }
        .vs-hero h1 { font-size: clamp(28px, 4vw, 48px); font-weight: 700; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 20px; }
        .vs-hero h1 span { color: var(--shark-blue); }
        .vs-hero p { font-size: 17px; color: rgba(255,255,255,0.65); max-width: 640px; margin: 0 auto 24px; line-height: 1.6; }
        .vs-hero-note { font-size: 13px; color: rgba(255,255,255,0.4); max-width: 540px; margin: 0 auto; }
        .vs-verdict-strip { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--hairline); }
        .vs-verdict-cell { padding: 28px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .vs-verdict-cell.sf { background: #f0f4ff; border-right: 1px solid var(--hairline); }
        .vs-verdict-cell.sbs { background: #edfaf5; }
        .vs-verdict-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--ink-3); }
        .vs-verdict-name { font-size: 17px; font-weight: 700; line-height: 1.2; }
        .vs-verdict-name.sf { color: var(--sf-blue); }
        .vs-verdict-name.sbs { color: var(--deep-teal); }
        .vs-verdict-price { font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
        .vs-verdict-price.sf { color: var(--sf-blue); }
        .vs-verdict-price.sbs { color: var(--shark-blue); }
        .vs-verdict-sub { font-size: 12px; color: var(--ink-3); }
        .vs-verdict-setup { font-size: 12px; font-weight: 600; }
        .vs-verdict-setup.sf { color: var(--red); }
        .vs-verdict-setup.sbs { color: var(--green); }
        .vs-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .vs-section-header { padding: 56px 0 24px; text-align: center; }
        .vs-section-header h2 { font-size: 28px; font-weight: 700; letter-spacing: -0.8px; margin-bottom: 8px; }
        .vs-section-header p { font-size: 16px; color: var(--ink-3); }
        .vs-comp-table { width: 100%; border-collapse: collapse; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 48px; }
        .vs-comp-table thead tr { background: var(--paper-3); }
        .vs-comp-table th { padding: 14px 16px; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: var(--ink-2); text-align: left; }
        .vs-comp-table th.col-sf { color: var(--sf-blue); text-align: center; }
        .vs-comp-table th.col-sbs { color: var(--deep-teal); text-align: center; }
        .vs-comp-table td { padding: 16px; border-top: 1px solid var(--hairline); font-size: 14px; vertical-align: top; }
        .vs-comp-table td.col-feature { font-weight: 600; color: var(--ink); min-width: 220px; }
        .vs-comp-table td.col-sf, .vs-comp-table td.col-sbs { text-align: center; color: var(--ink-2); font-size: 13px; }
        .vs-comp-table tr:nth-child(even) td { background: #fafafa; }
        .vs-comp-table tr:hover td { background: #f0fafd; transition: background 0.15s; }
        .vs-check { color: var(--green); font-weight: 700; font-size: 18px; }
        .vs-x { color: var(--red); font-weight: 700; font-size: 18px; }
        .vs-partial { color: var(--orange); font-weight: 700; font-size: 18px; }
        .vs-note { display: block; font-size: 11px; color: var(--ink-3); margin-top: 3px; font-weight: 400; line-height: 1.4; }
        .vs-tag { display: inline-block; background: var(--paper-2); border: 1px solid var(--hairline); border-radius: 6px; padding: 2px 7px; font-size: 11px; font-weight: 600; color: var(--ink); margin-top: 4px; }
        .vs-tag.red { background: #fff0ef; border-color: #ffd0cd; color: var(--red); }
        .vs-tag.green { background: #edfaf5; border-color: #a8e6c8; color: var(--green); }
        .vs-tag.blue { background: #e8f8fc; border-color: #a0dded; color: var(--deep-teal); }
        .vs-tag.orange { background: #fff8ed; border-color: #fdd9a0; color: var(--orange); }
        .vs-cat-row td { background: linear-gradient(90deg, #f5f5f7, #fafafa) !important; font-size: 10px !important; font-weight: 800 !important; letter-spacing: 2px !important; text-transform: uppercase !important; color: var(--ink-3) !important; padding: 9px 16px !important; }
        .vs-cost-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 48px; max-width: 900px; margin-left: auto; margin-right: auto; }
        .vs-cost-card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
        .vs-cost-card-header { padding: 18px 20px 14px; display: flex; align-items: center; gap: 10px; }
        .vs-cost-card-header.sf { background: #f0f4ff; border-bottom: 2px solid var(--sf-blue); }
        .vs-cost-card-header.sbs { background: #edfaf5; border-bottom: 2px solid var(--shark-blue); }
        .vs-cost-logo { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; }
        .vs-cost-logo.sf { background: var(--sf-blue); color: white; }
        .vs-cost-logo.sbs { background: var(--shark-blue); color: white; }
        .vs-cost-card-title { font-size: 14px; font-weight: 700; color: var(--ink); }
        .vs-cost-card-sub { font-size: 11px; color: var(--ink-3); }
        .vs-cost-line { display: flex; justify-content: space-between; align-items: baseline; padding: 12px 20px; border-bottom: 1px solid var(--hairline); gap: 12px; }
        .vs-cost-line:last-child { border-bottom: none; }
        .vs-cost-line-label { font-size: 13px; color: var(--ink-2); flex: 1; }
        .vs-cost-line-label small { display: block; font-size: 10px; color: var(--ink-3); margin-top: 2px; }
        .vs-cost-line-value { font-size: 13px; font-weight: 700; white-space: nowrap; }
        .vs-cost-line-value.red { color: var(--red); }
        .vs-cost-line-value.green { color: var(--green); }
        .vs-cost-line-value.blue { color: var(--shark-blue); }
        .vs-cost-line-value.orange { color: var(--orange); }
        .vs-cost-total { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; font-weight: 700; }
        .vs-cost-total.sf { background: #f0f4ff; }
        .vs-cost-total.sbs { background: #edfaf5; }
        .vs-cost-total-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--ink-3); }
        .vs-cost-total-value { font-size: 22px; letter-spacing: -0.5px; }
        .vs-cost-total-value.sf { color: var(--sf-blue); }
        .vs-cost-total-value.sbs { color: var(--shark-blue); }
        .vs-bottom-line { background: var(--ink); color: white; border-radius: 20px; padding: 48px 40px; margin-bottom: 64px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .vs-bl-left h2 { font-size: 26px; font-weight: 700; letter-spacing: -0.8px; margin-bottom: 16px; line-height: 1.2; }
        .vs-bl-left h2 span { color: var(--shark-blue); }
        .vs-bl-left p { font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 14px; }
        .vs-bl-right { display: flex; flex-direction: column; gap: 14px; }
        .vs-bl-point { display: flex; align-items: flex-start; gap: 12px; background: rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; border-left: 3px solid var(--shark-blue); }
        .vs-bl-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
        .vs-bl-text { font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5; }
        .vs-bl-text strong { color: white; display: block; margin-bottom: 2px; font-size: 14px; }
        .vs-faq { background: white; border-radius: 16px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 64px; }
        .vs-faq h2 { font-size: 24px; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 28px; }
        .vs-faq-item { border-bottom: 1px solid var(--hairline); padding: 20px 0; }
        .vs-faq-item:last-child { border-bottom: none; padding-bottom: 0; }
        .vs-faq-item h3 { font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 10px; line-height: 1.4; }
        .vs-faq-item p { font-size: 14px; color: var(--ink-3); line-height: 1.6; }
        .vs-cta { background: var(--shark-blue); color: white; text-align: center; border-radius: 20px; padding: 56px 40px; margin-bottom: 64px; }
        .vs-cta h2 { font-size: 28px; font-weight: 700; letter-spacing: -0.8px; margin-bottom: 12px; }
        .vs-cta p { font-size: 17px; color: rgba(255,255,255,0.85); max-width: 480px; margin: 0 auto 28px; line-height: 1.6; }
        .vs-cta a { display: inline-block; background: white; color: var(--shark-blue); font-weight: 700; font-size: 15px; padding: 14px 32px; border-radius: 999px; text-decoration: none; }
        .vs-cta a:hover { opacity: 0.92; }
        @media (max-width: 800px) {
          .vs-verdict-strip { grid-template-columns: 1fr; }
          .vs-verdict-cell.sf { border-right: none; border-bottom: 1px solid var(--hairline); }
          .vs-cost-grid { grid-template-columns: 1fr; }
          .vs-bottom-line { grid-template-columns: 1fr; }
          .vs-hero { padding: 60px 20px 48px; }
          .vs-comp-table td, .vs-comp-table th { padding: 10px 10px; font-size: 12px; }
        }
      `}</style>

      <div className="vs-body">
        {/* ── HERO ── */}
        <div className="vs-hero">
          <div className="vs-hero-eyebrow">Head-to-Head Comparison</div>
          <h1>
            Salesforce AI Agents<br />
            vs.&nbsp;<span>Full AI Suite</span>
          </h1>
          <p>
            A direct comparison of capabilities, pricing, and setup costs for small to mid-size businesses looking for a Salesforce Agentforce alternative that actually fits their budget and team size.
          </p>
          <p className="vs-hero-note">
            Pricing sourced from published list rates and industry estimates as of 2025-2026. Actual quotes may vary.
          </p>
        </div>

        {/* ── VERDICT STRIP ── */}
        <div className="vs-verdict-strip">
          <div className="vs-verdict-cell sf">
            <div className="vs-verdict-label">Salesforce</div>
            <div className="vs-verdict-name sf">Agentforce + Sales Cloud</div>
            <div className="vs-verdict-price sf">$3,000–$8,000<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}>/mo</span></div>
            <div className="vs-verdict-sub">3-user deployment with AI add-ons</div>
            <div className="vs-verdict-setup sf">+ $15,000–$75,000 setup</div>
          </div>
          <div className="vs-verdict-cell sbs">
            <div className="vs-verdict-label">Shark AI Solutions</div>
            <div className="vs-verdict-name sbs">Full AI Suite</div>
            <div className="vs-verdict-price sbs">$5,000<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}>/mo</span></div>
            <div className="vs-verdict-sub">All five AI employees, no seat pricing</div>
            <div className="vs-verdict-setup sbs">$2,000 setup, month-to-month</div>
          </div>
        </div>

        <div className="vs-container">

          {/* ── FEATURE TABLE ── */}
          <div className="vs-section-header">
            <h2>Feature-by-Feature Breakdown</h2>
            <p>What you actually get from each platform</p>
          </div>

          <table className="vs-comp-table">
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Feature</th>
                <th className="col-sf" style={{ width: '30%' }}>Salesforce Agentforce</th>
                <th className="col-sbs" style={{ width: '30%' }}>Full AI Suite</th>
              </tr>
            </thead>
            <tbody>

              <tr className="vs-cat-row"><td colSpan={3}>AI Voice Receptionist</td></tr>
              <tr>
                <td className="col-feature">Answers inbound calls 24/7</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Not native. Requires 3rd-party telephony (Amazon Connect, Five9) at additional cost.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Answers every call, qualifies callers, captures contact info.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Live call transfer to human</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Possible with telephony partner. Custom build required.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included.</span></td>
              </tr>
              <tr>
                <td className="col-feature">After-hours call coverage</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Requires telephony middleware. Separate vendor contract.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Never misses a call.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={3}>AI Chat Receptionist (Website)</td></tr>
              <tr>
                <td className="col-feature">Embedded chat widget on website</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Requires Service Cloud license (~$165–$330/user/mo).</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. One script, works on any website.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Captures leads and books appointments</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Requires Agentforce SDR add-on and Scheduler configuration.</span><span className="vs-tag red">+ Add-on required</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Books directly into your calendar.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Conversational AI (not just a bot)</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Agentforce is LLM-powered but billed at $2 per conversation on top of base license.</span><span className="vs-tag red">+ $2 / conversation</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. No per-conversation billing.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Responds 24/7 without human oversight</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Requires careful configuration and guardrails to run autonomously.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={3}>AI CRM</td></tr>
              <tr>
                <td className="col-feature">CRM platform included</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Sales Cloud is a full CRM. AI features require Unlimited tier.</span><span className="vs-tag red">$165–$330 / user / mo for AI</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">CRM included. No per-seat pricing.</span><span className="vs-tag green">Included</span></td>
              </tr>
              <tr>
                <td className="col-feature">Auto-logs calls and conversations</td>
                <td className="col-sf"><span className="vs-check">✓</span><span className="vs-note">Einstein Conversation Insights. Requires $50/user/mo add-on or Unlimited edition.</span><span className="vs-tag red">+ $50 / user / mo</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Pipeline visibility and deal tracking</td>
                <td className="col-sf"><span className="vs-check">✓</span><span className="vs-note">Best-in-class. Full capability on Professional tier and above.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Visual pipeline, deal stages, contact history.</span></td>
              </tr>
              <tr>
                <td className="col-feature">BANT scoring and Sandler scorecards</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Einstein Lead Scoring available. BANT/Sandler requires custom configuration.</span><span className="vs-tag red">Unlimited tier required</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included in AI Sales Assistant. Post-call BANT and Sandler scorecard delivered automatically.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={3}>AI Sales Manager and Follow-Up</td></tr>
              <tr>
                <td className="col-feature">Follows up with leads automatically</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Agentforce SDR agent. Billed at $2/conversation on top of Sales Cloud.</span><span className="vs-tag red">+ $2 / conversation</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Follows up within minutes of a new lead arriving.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Runs multi-step outreach sequences</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Requires Sales Engagement add-on at ~$75/user/mo.</span><span className="vs-tag red">+ $75 / user / mo</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Re-engages cold and gone-quiet leads</td>
                <td className="col-sf"><span className="vs-partial">~</span><span className="vs-note">Possible with SDR agent and custom prompt configuration.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Flags and re-engages automatically.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={3}>Reputation and Review Management</td></tr>
              <tr>
                <td className="col-feature">Review monitoring across platforms</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Not a native feature. Requires 3rd-party integration.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included via Reputation AI, part of the Full AI Suite.</span></td>
              </tr>
              <tr>
                <td className="col-feature">AI-generated review response suggestions</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Not offered.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Reputation AI drafts on-brand responses automatically.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Business listing sync (NAP)</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Not offered natively.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included via Reputation AI.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={3}>Setup, Support, and Ongoing Costs</td></tr>
              <tr>
                <td className="col-feature">Implementation / setup cost</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">SI partner engagement typically $15,000–$75,000+.</span><span className="vs-tag red">$15k–$75k+ one-time</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-tag green">$2,000 one-time</span></td>
              </tr>
              <tr>
                <td className="col-feature">Time to go live</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">3–6 months for a properly configured deployment.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Days, not months.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Annual contract required</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Annual contract mandatory. Early termination typically not allowed.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Month-to-month. No lock-in.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Built for SMB without an internal admin</td>
                <td className="col-sf"><span className="vs-x">✗</span><span className="vs-note">Requires a dedicated Salesforce admin to run effectively.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Designed for small teams. No internal admin needed.</span></td>
              </tr>

            </tbody>
          </table>

          {/* ── COST BREAKDOWN ── */}
          <div className="vs-section-header">
            <h2>Real Cost Comparison</h2>
            <p>Year 1 total cost of ownership, full capabilities enabled</p>
          </div>

          <div className="vs-cost-grid">
            {/* SALESFORCE */}
            <div className="vs-cost-card">
              <div className="vs-cost-card-header sf">
                <div className="vs-cost-logo sf">SF</div>
                <div>
                  <div className="vs-cost-card-title">Salesforce Agentforce</div>
                  <div className="vs-cost-card-sub">Sales Cloud Unlimited + AI add-ons, 3 users</div>
                </div>
              </div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Sales Cloud Unlimited (3 seats)<small>$330/user/mo, required for Einstein AI</small></div><div className="vs-cost-line-value red">$990/mo</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Agentforce SDR Agent<small>$2/conv, est. 500/mo</small></div><div className="vs-cost-line-value red">$1,000/mo</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Sales Engagement Add-on<small>$75/user/mo</small></div><div className="vs-cost-line-value red">$225/mo</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Einstein Conversation Insights<small>$50/user/mo</small></div><div className="vs-cost-line-value red">$150/mo</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Telephony / AI Voice (3rd-party)</div><div className="vs-cost-line-value red">$400–$800/mo</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">AI Chat (Agentforce for Service)</div><div className="vs-cost-line-value red">$300–$600/mo</div></div>
              <div className="vs-cost-line" style={{ borderTop: '2px solid var(--hairline)' }}><div className="vs-cost-line-label"><strong>Est. Monthly Recurring</strong></div><div className="vs-cost-line-value red"><strong>$3,065–$3,765/mo</strong></div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Implementation (SI partner, one-time)</div><div className="vs-cost-line-value red">$25k–$50k</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Internal admin cost<small>Part-time Salesforce admin</small></div><div className="vs-cost-line-value red">$1,500–$3,000/mo</div></div>
              <div className="vs-cost-total sf"><div className="vs-cost-total-label">Year 1 Total</div><div className="vs-cost-total-value sf">$93k–$140k+</div></div>
            </div>

            {/* FULL AI SUITE */}
            <div className="vs-cost-card">
              <div className="vs-cost-card-header sbs">
                <div className="vs-cost-logo sbs">SAS</div>
                <div>
                  <div className="vs-cost-card-title">Full AI Suite</div>
                  <div className="vs-cost-card-sub">All five AI employees, flat monthly rate</div>
                </div>
              </div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">AI Voice Receptionist<small>24/7 call answering, qualify, transfer</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">AI Chat Receptionist<small>Lead capture, booking, 24/7</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">AI CRM<small>Pipeline, contacts, auto-logging, lead scoring</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">AI Sales Manager<small>Follow-up, sequences, re-engagement</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">AI Sales Assistant<small>BANT scoring, Sandler scorecard, call transcription, CRM auto-fill</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">All conversations, unlimited seats<small>No per-conversation billing</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Reputation AI<small>Review monitoring, AI responses, listing sync</small></div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Shark AI Solutions account support and optimization</div><div className="vs-cost-line-value blue">Included</div></div>
              <div className="vs-cost-line" style={{ borderTop: '2px solid var(--hairline)' }}><div className="vs-cost-line-label"><strong>Monthly Recurring</strong></div><div className="vs-cost-line-value green"><strong>$5,000/mo</strong></div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Implementation / setup (one-time)</div><div className="vs-cost-line-value blue">$2,000</div></div>
              <div className="vs-cost-line"><div className="vs-cost-line-label">Internal admin cost required</div><div className="vs-cost-line-value green">$0</div></div>
              <div className="vs-cost-total sbs"><div className="vs-cost-total-label">Year 1 Total</div><div className="vs-cost-total-value sbs">$62,000</div></div>
            </div>
          </div>

          {/* ── BOTTOM LINE ── */}
          <div className="vs-bottom-line">
            <div className="vs-bl-left">
              <h2>The <span>honest</span> takeaway.</h2>
              <p>Salesforce is enterprise software built for companies with dedicated admins and six-figure implementation budgets. For most small businesses, it is overkill at every level.</p>
              <p>The Full AI Suite includes AI Voice, AI Chat, AI CRM, AI Sales Manager, AI Sales Assistant, and Reputation AI for a flat $5,000/month with a one-time $2,000 setup fee. You are operational within days, not months, and you are not locked into an annual contract.</p>
            </div>
            <div className="vs-bl-right">
              <div className="vs-bl-point">
                <div className="vs-bl-icon">📞</div>
                <div className="vs-bl-text"><strong>Salesforce does not answer your phones.</strong>AI voice capability requires a third-party telephony build. The Full AI Suite includes a built-in AI Voice Receptionist from day one.</div>
              </div>
              <div className="vs-bl-point">
                <div className="vs-bl-icon">💬</div>
                <div className="vs-bl-text"><strong>Salesforce charges $2 per conversation.</strong>500 monthly interactions adds $1,000 to your bill before anything else. The Full AI Suite has no per-conversation billing.</div>
              </div>
              <div className="vs-bl-point">
                <div className="vs-bl-icon">⭐</div>
                <div className="vs-bl-text"><strong>Reputation management is built in.</strong>Review monitoring, AI-generated responses, and listing sync are all included. No separate platform or additional subscription needed.</div>
              </div>
              <div className="vs-bl-point">
                <div className="vs-bl-icon">🔒</div>
                <div className="vs-bl-text"><strong>Salesforce locks you into annual contracts.</strong>The Full AI Suite is month-to-month. You stay because it works, not because you signed a contract.</div>
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="vs-faq">
            <h2>Common questions about Salesforce AI agents alternatives</h2>
            <div className="vs-faq-item">
              <h3>What is a good Salesforce AI agents alternative for small business?</h3>
              <p>For small and mid-size businesses, the Shark AI Solutions Full AI Suite is a practical Salesforce Agentforce alternative. It includes AI Voice Receptionist, AI Chat, AI CRM, AI Sales Manager, and Reputation AI for a flat $5,000/month with a one-time $2,000 setup fee and no annual contract, compared to Salesforce&apos;s $93k to $140k+ year-one cost for a comparable configuration.</p>
            </div>
            <div className="vs-faq-item">
              <h3>How does Salesforce Agentforce compare to the Full AI Suite?</h3>
              <p>Salesforce Agentforce is enterprise software that requires a dedicated admin, a $15k to $75k implementation partner, and charges $2 per AI conversation. The Full AI Suite is designed for small business teams: no internal admin needed, a one-time $2,000 setup fee, no per-conversation billing, and includes AI voice, chat, CRM, sales follow-up, and reputation management for a flat $5,000/month.</p>
            </div>
            <div className="vs-faq-item">
              <h3>Does Salesforce have a built-in AI voice receptionist?</h3>
              <p>No. Salesforce does not natively answer inbound phone calls. AI voice capability requires a third-party telephony integration like Amazon Connect or Five9, adding cost and complexity. The Shark AI Solutions Full AI Suite includes a built-in AI Voice Receptionist that answers every call, qualifies the caller, and books appointments.</p>
            </div>
            <div className="vs-faq-item">
              <h3>How long does it take to set up the Full AI Suite?</h3>
              <p>Most clients are live within a week. The one-time $2,000 setup fee covers full configuration and onboarding. Salesforce deployments typically take 3 to 6 months with a systems integrator costing $15,000 to $75,000+. There is no lengthy configuration requirement and no annual contract.</p>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="vs-cta">
            <h2>See the Full AI Suite in action.</h2>
            <p>Book a free 30-minute audit. We&apos;ll show you exactly what the suite would do for your business and what to expect in the first 90 days.</p>
            <a href="/free-report">Book My Free AI Audit</a>
          </div>

        </div>
      </div>
    </>
  );
}
