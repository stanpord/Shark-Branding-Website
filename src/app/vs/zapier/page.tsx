import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation vs. Zapier and HubSpot | Shark AI Solutions",
  description:
    "Comparing AI automation (Full AI Suite), Zapier, and HubSpot for local service businesses. Features, pricing, and which one actually replaces manual work without a full-time admin.",
  keywords: [
    "AI automation vs Zapier",
    "HubSpot alternative small business",
    "Zapier alternative",
    "AI CRM for local business",
    "small business automation tools",
    "AI employees Tampa Bay",
  ],
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/vs/zapier",
  },
  openGraph: {
    title: "AI Automation vs. Zapier vs. HubSpot for Small Business",
    description:
      "A direct comparison of AI automation, Zapier, and HubSpot for local service businesses. See which one actually eliminates manual work vs. which ones just connect it.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between AI automation and Zapier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier is a workflow automation platform that connects your existing tools, it moves data between apps when a trigger fires. It does not replace staff or handle customer interactions; it automates the handoff between software. AI automation, like the Full AI Suite, replaces entire job functions: answering calls, qualifying leads, booking appointments, responding to reviews, and following up on deals, without a human or a series of configured Zaps. Zapier requires someone to design and maintain workflows. AI employees work autonomously once configured.",
      },
    },
    {
      "@type": "Question",
      name: "Is HubSpot good for local service businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HubSpot's free CRM is a capable contact and deal tracker for small businesses. The problem for local service businesses is that meaningful automation, email sequences, AI chatbots, sales automation, call tracking, requires the paid Marketing Hub ($800/mo+) or Sales Hub ($500/mo+) tiers. At those prices, HubSpot still does not answer your phones, respond to reviews, or run voice AI. You end up paying enterprise software prices for a tool that still needs your team to do the actual customer-facing work.",
      },
    },
    {
      "@type": "Question",
      name: "Can Zapier replace a CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Zapier is not a CRM, it has no contact database, no deal pipeline, and no activity logging. It moves data between tools that already exist. If you want Zapier to log a call to a CRM, you need the CRM separately, and you need to configure a Zap that connects your phone system to it. The Full AI Suite includes the CRM natively, every call, email, and interaction is logged automatically without any Zap configuration.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Full AI Suite do that Zapier and HubSpot cannot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Full AI Suite answers inbound phone calls, qualifies callers in your brand voice, and books appointments, all without a human. Neither Zapier nor HubSpot can do this. HubSpot has a chatbot product but it requires human escalation for anything beyond FAQ responses. Zapier has no customer-facing layer at all. The Full AI Suite also responds to Google and Facebook reviews automatically, runs multi-touch follow-up sequences, and scores every sales call with a BANT scorecard, none of which Zapier or HubSpot include without significant add-ons.",
      },
    },
  ],
};

export default function ZapierVsPage() {
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
          --zap-orange: #ff4a00;
          --hub-orange: #ff7a59;
        }
        .vs-body { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif; background: var(--paper-2); color: var(--ink); line-height: 1.5; }
        .vs-hero { background: linear-gradient(160deg, #0a0a0a 0%, #1a1a2e 50%, #0d2d3a 100%); color: white; text-align: center; padding: 80px 40px 64px; }
        .vs-hero-eyebrow { font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--shark-blue); margin-bottom: 16px; }
        .vs-hero h1 { font-size: clamp(28px, 4vw, 48px); font-weight: 700; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 20px; }
        .vs-hero h1 span { color: var(--shark-blue); }
        .vs-hero p { font-size: 17px; color: rgba(255,255,255,0.65); max-width: 640px; margin: 0 auto 24px; line-height: 1.6; }
        .vs-verdict-strip { display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid var(--hairline); }
        .vs-verdict-cell { padding: 28px 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .vs-verdict-cell.zap { background: #fff4f0; border-right: 1px solid var(--hairline); }
        .vs-verdict-cell.hub { background: #fff8f5; border-right: 1px solid var(--hairline); }
        .vs-verdict-cell.sbs { background: #edfaf5; }
        .vs-verdict-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--ink-3); }
        .vs-verdict-name { font-size: 17px; font-weight: 700; line-height: 1.2; }
        .vs-verdict-name.zap { color: var(--zap-orange); }
        .vs-verdict-name.hub { color: var(--hub-orange); }
        .vs-verdict-name.sbs { color: var(--deep-teal); }
        .vs-verdict-price { font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
        .vs-verdict-price.zap { color: var(--zap-orange); }
        .vs-verdict-price.hub { color: var(--hub-orange); }
        .vs-verdict-price.sbs { color: var(--shark-blue); }
        .vs-verdict-sub { font-size: 12px; color: var(--ink-3); }
        .vs-verdict-note { font-size: 12px; font-weight: 600; }
        .vs-verdict-note.zap { color: var(--orange); }
        .vs-verdict-note.hub { color: var(--orange); }
        .vs-verdict-note.sbs { color: var(--green); }
        .vs-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .vs-section-header { padding: 56px 0 24px; text-align: center; }
        .vs-section-header h2 { font-size: 28px; font-weight: 700; letter-spacing: -0.8px; margin-bottom: 8px; }
        .vs-section-header p { font-size: 16px; color: var(--ink-3); }
        .vs-comp-table { width: 100%; border-collapse: collapse; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 48px; }
        .vs-comp-table thead tr { background: var(--paper-3); }
        .vs-comp-table th { padding: 14px 16px; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: var(--ink-2); text-align: left; }
        .vs-comp-table th.col-zap { color: var(--zap-orange); text-align: center; }
        .vs-comp-table th.col-hub { color: var(--hub-orange); text-align: center; }
        .vs-comp-table th.col-sbs { color: var(--deep-teal); text-align: center; }
        .vs-comp-table td { padding: 16px; border-top: 1px solid var(--hairline); font-size: 14px; vertical-align: top; }
        .vs-comp-table td.col-feature { font-weight: 600; color: var(--ink); min-width: 180px; }
        .vs-comp-table td.col-zap, .vs-comp-table td.col-hub, .vs-comp-table td.col-sbs { text-align: center; color: var(--ink-2); font-size: 13px; }
        .vs-comp-table tr:nth-child(even) td { background: #fafafa; }
        .vs-comp-table tr:hover td { background: #f0fafd; transition: background 0.15s; }
        .vs-check { color: var(--green); font-weight: 700; font-size: 18px; }
        .vs-x { color: var(--red); font-weight: 700; font-size: 18px; }
        .vs-partial { color: var(--orange); font-weight: 700; font-size: 18px; }
        .vs-note { display: block; font-size: 11px; color: var(--ink-3); margin-top: 3px; font-weight: 400; line-height: 1.4; }
        .vs-tag { display: inline-block; background: var(--paper-2); border: 1px solid var(--hairline); border-radius: 6px; padding: 2px 7px; font-size: 11px; font-weight: 600; color: var(--ink); margin-top: 4px; }
        .vs-tag.red { background: #fff0ef; border-color: #ffd0cd; color: var(--red); }
        .vs-tag.green { background: #edfaf5; border-color: #a8e6c8; color: var(--green); }
        .vs-tag.orange { background: #fff8ed; border-color: #fdd9a0; color: var(--orange); }
        .vs-cat-row td { background: linear-gradient(90deg, #f5f5f7, #fafafa) !important; font-size: 10px !important; font-weight: 800 !important; letter-spacing: 2px !important; text-transform: uppercase !important; color: var(--ink-3) !important; padding: 9px 16px !important; }
        .vs-insight { background: white; border-radius: 20px; padding: 40px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); margin-bottom: 32px; border-left: 4px solid var(--shark-blue); }
        .vs-insight h3 { font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
        .vs-insight p { font-size: 15px; color: var(--ink-3); line-height: 1.65; }
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
          .vs-verdict-cell.zap, .vs-verdict-cell.hub { border-right: none; border-bottom: 1px solid var(--hairline); }
          .vs-bottom-line { grid-template-columns: 1fr; }
          .vs-hero { padding: 60px 20px 48px; }
          .vs-comp-table td, .vs-comp-table th { padding: 10px 10px; font-size: 12px; }
        }
      `}</style>

      <div className="vs-body">

        {/* ── HERO ── */}
        <div className="vs-hero">
          <div className="vs-hero-eyebrow">Three-Way Head-to-Head</div>
          <h1>
            AI Automation vs. Zapier<br />
            vs.&nbsp;<span>HubSpot</span>
          </h1>
          <p>
            Which tool actually eliminates manual work for a local service business, and which ones just connect it differently? A direct comparison of capabilities, pricing, and what each one can and cannot do without a human in the loop.
          </p>
        </div>

        {/* ── VERDICT STRIP ── */}
        <div className="vs-verdict-strip">
          <div className="vs-verdict-cell zap">
            <div className="vs-verdict-label">Zapier</div>
            <div className="vs-verdict-name zap">Zapier Professional</div>
            <div className="vs-verdict-price zap">$49–$799<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}>/mo</span></div>
            <div className="vs-verdict-sub">Based on task volume. High-volume plans scale quickly.</div>
            <div className="vs-verdict-note zap">Workflow connector, no CRM, no AI employees</div>
          </div>
          <div className="vs-verdict-cell hub">
            <div className="vs-verdict-label">HubSpot</div>
            <div className="vs-verdict-name hub">Marketing + Sales Hub Pro</div>
            <div className="vs-verdict-price hub">$1,300+<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}>/mo</span></div>
            <div className="vs-verdict-sub">Marketing Hub Pro ($800) + Sales Hub Pro ($500). AI features require higher tiers.</div>
            <div className="vs-verdict-note hub">No AI voice, no review management</div>
          </div>
          <div className="vs-verdict-cell sbs">
            <div className="vs-verdict-label">Shark AI Solutions</div>
            <div className="vs-verdict-name sbs">Full AI Suite</div>
            <div className="vs-verdict-price sbs">Starting at $5,000<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-3)' }}>/mo</span></div>
            <div className="vs-verdict-sub">All five AI employees. No per-task pricing. No seat limits.</div>
            <div className="vs-verdict-note sbs">$0 setup · Month-to-month</div>
          </div>
        </div>

        <div className="vs-container">

          {/* ── KEY INSIGHT ── */}
          <div style={{ padding: '48px 0 0' }}>
            <div className="vs-insight">
              <h3>The question most businesses get wrong</h3>
              <p>
                Zapier and HubSpot are tools your team has to manage. They automate handoffs between software and send emails on a schedule, but they do not answer your phones, qualify leads, respond to reviews, or coach your sales reps. The Full AI Suite replaces staff functions. Zapier and HubSpot augment them. If you are comparing all three, the real question is whether you want to automate tasks or eliminate entire job categories.
              </p>
            </div>
          </div>

          {/* ── FEATURE TABLE ── */}
          <div className="vs-section-header">
            <h2>Feature-by-Feature Breakdown</h2>
            <p>What each platform actually does for a local service business</p>
          </div>

          <table className="vs-comp-table">
            <thead>
              <tr>
                <th style={{ width: '28%' }}>Capability</th>
                <th className="col-zap" style={{ width: '24%' }}>Zapier</th>
                <th className="col-hub" style={{ width: '24%' }}>HubSpot</th>
                <th className="col-sbs" style={{ width: '24%' }}>Full AI Suite</th>
              </tr>
            </thead>
            <tbody>

              <tr className="vs-cat-row"><td colSpan={4}>Customer-Facing AI</td></tr>
              <tr>
                <td className="col-feature">Answers inbound phone calls 24/7</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">Not offered. Zapier has no customer-facing layer.</span></td>
                <td className="col-hub"><span className="vs-x">✗</span><span className="vs-note">No native voice AI. Requires integration with a third-party telephony tool.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Voice Receptionist answers, qualifies, and books every call.</span></td>
              </tr>
              <tr>
                <td className="col-feature">AI website chat that captures leads</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">Not offered.</span></td>
                <td className="col-hub"><span className="vs-partial">~</span><span className="vs-note">HubSpot chatbot available but requires human escalation for most lead qualification tasks.</span><span className="vs-tag orange">Rule-based, not AI</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Gemma included. Qualifies and books appointments without human involvement.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Books appointments during the conversation</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">Not offered.</span></td>
                <td className="col-hub"><span className="vs-partial">~</span><span className="vs-note">HubSpot Meetings tool allows self-scheduling via link. Not conversational booking.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Books directly into your calendar during the call or chat, with SMS confirmation.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={4}>CRM and Pipeline Management</td></tr>
              <tr>
                <td className="col-feature">CRM included</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">No native CRM. Zapier connects to external CRMs but does not provide one.</span></td>
                <td className="col-hub"><span className="vs-check">✓</span><span className="vs-note">Free CRM included. Full pipeline, contact, and deal tracking. Best-in-class for this category.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">AI CRM included. Contact history, pipeline, and deal stages with AI enrichment.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Auto-logs calls and interactions</td>
                <td className="col-zap"><span className="vs-partial">~</span><span className="vs-note">Can be configured to log data between tools via Zaps. Requires manual setup and maintenance.</span></td>
                <td className="col-hub"><span className="vs-check">✓</span><span className="vs-note">HubSpot logs emails and meetings automatically. Call logging requires the Calling Add-on.</span><span className="vs-tag orange">+ Add-on for calls</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Every call, chat, and email logged automatically. No configuration required.</span></td>
              </tr>
              <tr>
                <td className="col-feature">BANT scoring on every sales call</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">Not offered.</span></td>
                <td className="col-hub"><span className="vs-x">✗</span><span className="vs-note">HubSpot has lead scoring but does not do post-call BANT analysis natively.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">AI Sales Coach scores every call automatically with BANT and Sandler scorecards.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={4}>Automation and Follow-Up</td></tr>
              <tr>
                <td className="col-feature">Multi-step workflow automation</td>
                <td className="col-zap"><span className="vs-check">✓</span><span className="vs-note">Core capability. Connects 6,000+ apps with trigger-action workflows. Best in class for this.</span></td>
                <td className="col-hub"><span className="vs-check">✓</span><span className="vs-note">HubSpot Workflows automate email, task creation, and pipeline updates. Requires Pro tier.</span><span className="vs-tag orange">Pro tier required</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Follow-up sequences run automatically across email, SMS, and phone.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Follows up with new leads automatically</td>
                <td className="col-zap"><span className="vs-partial">~</span><span className="vs-note">Can trigger an email via a connected tool when a new contact is created. Requires setup.</span></td>
                <td className="col-hub"><span className="vs-check">✓</span><span className="vs-note">Email sequences available in Sales Hub. Requires Pro tier ($500/mo).</span><span className="vs-tag orange">Sales Hub Pro required</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Follows up within minutes of a new lead via email, SMS, and outbound call.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Re-engages cold leads automatically</td>
                <td className="col-zap"><span className="vs-partial">~</span><span className="vs-note">Possible with complex multi-step Zap and connected email tool. Non-trivial to configure.</span></td>
                <td className="col-hub"><span className="vs-partial">~</span><span className="vs-note">Requires Workflow automation to re-enroll cold contacts. Pro tier required.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Identifies and re-engages gone-quiet leads without manual intervention.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={4}>Review and Reputation Management</td></tr>
              <tr>
                <td className="col-feature">Monitors and responds to Google reviews</td>
                <td className="col-zap"><span className="vs-partial">~</span><span className="vs-note">Can trigger a notification when a new review appears via Google Business Profile integration. No AI response drafting.</span></td>
                <td className="col-hub"><span className="vs-x">✗</span><span className="vs-note">Not offered natively. Requires a third-party integration.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Reputation Specialist monitors and drafts on-brand responses automatically.</span></td>
              </tr>
              <tr>
                <td className="col-feature">AI-generated review responses</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">Not offered.</span></td>
                <td className="col-hub"><span className="vs-x">✗</span><span className="vs-note">Not offered.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Included. Drafts responses matching your brand voice for every review.</span></td>
              </tr>

              <tr className="vs-cat-row"><td colSpan={4}>Setup, Admin, and Ongoing Cost</td></tr>
              <tr>
                <td className="col-feature">Requires an internal admin to manage</td>
                <td className="col-zap"><span className="vs-x">✗</span><span className="vs-note">Zaps break when connected tools change their APIs. Someone on your team must maintain them.</span><span className="vs-tag red">Ongoing admin required</span></td>
                <td className="col-hub"><span className="vs-partial">~</span><span className="vs-note">More self-service than Salesforce, but complex workflows still require someone who knows the platform.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">No internal admin needed. We configure, maintain, and optimize.</span></td>
              </tr>
              <tr>
                <td className="col-feature">Setup cost</td>
                <td className="col-zap"><span className="vs-check">✓</span><span className="vs-note">No setup fee. Zaps can be built quickly for simple workflows.</span></td>
                <td className="col-hub"><span className="vs-partial">~</span><span className="vs-note">No setup fee but onboarding a full HubSpot implementation for a service business typically costs $2,000–$10,000 with a partner.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">$0 setup.</span><span className="vs-tag green">$0</span></td>
              </tr>
              <tr>
                <td className="col-feature">Annual contract required</td>
                <td className="col-zap"><span className="vs-check">✓</span><span className="vs-note">Month-to-month available. Annual saves ~20%.</span></td>
                <td className="col-hub"><span className="vs-x">✗</span><span className="vs-note">Annual contracts standard for Pro tiers. Month-to-month available at a significant premium.</span></td>
                <td className="col-sbs"><span className="vs-check">✓</span><span className="vs-note">Month-to-month. No lock-in.</span></td>
              </tr>

            </tbody>
          </table>

          {/* ── INSIGHTS ── */}
          <div className="vs-section-header">
            <h2>What the comparison actually means</h2>
            <p>Three tools solving three different problems</p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <div className="vs-insight">
              <h3>Zapier is a connector, not a replacement</h3>
              <p>
                Zapier excels at one thing: moving data between apps when something happens. A new lead fills out a form, Zapier fires a Zap that adds them to your CRM, sends a Slack notification, and creates a task. That is genuinely useful and Zapier does it better than anyone. What it cannot do is answer a phone call, have a conversation, qualify a lead, or respond to a review. If you are trying to eliminate manual work in customer-facing workflows, Zapier still requires humans to do those things, it just handles the paperwork afterward.
              </p>
            </div>
            <div className="vs-insight">
              <h3>HubSpot is enterprise software priced for growth companies</h3>
              <p>
                HubSpot&apos;s free CRM is excellent for contact tracking. The problem is that meaningful automation, email sequences, AI-assisted sales, pipeline automation, requires the paid Pro tiers. Marketing Hub Pro is $800 per month. Sales Hub Pro is $500 per month. At $1,300 or more per month, you are still buying a platform that needs your team to pick up the phone, respond to reviews, and manage the tool itself. HubSpot is a strong choice for marketing-led growth companies with a dedicated team managing it. It is less clearly the right fit for a local service business with 5 to 20 employees that wants manual work off their plate.
              </p>
            </div>
            <div className="vs-insight">
              <h3>The Full AI Suite replaces job functions, not just tasks</h3>
              <p>
                The Full AI Suite is built for local service businesses that want the work done, not just connected. The Voice Receptionist answers every call at any hour without a human on the line. Gemma captures leads from your website and books appointments. The Reputation Specialist responds to reviews. The AI CRM logs every interaction and runs follow-up sequences. The AI Sales Coach scores every call. None of that requires your team to log in, configure workflows, or manage a platform. The trade-off is price, at $5,000 per month, it is the highest starting cost of the three. But for a service business where the average job is $2,000 or more, closing two or three additional jobs a month from better lead capture and after-hours coverage more than covers the difference.
              </p>
            </div>
          </div>

          {/* ── BOTTOM LINE ── */}
          <div className="vs-bottom-line">
            <div className="vs-bl-left">
              <h2>The <span>honest</span> answer.</h2>
              <p>If you need to connect your existing tools and trigger email notifications, Zapier is the right choice. It is inexpensive, fast to configure, and excellent at what it does.</p>
              <p>If you need a CRM and marketing automation and have a team to run it, HubSpot is worth evaluating, especially if email marketing and contact tracking are your primary needs.</p>
              <p>If you need inbound calls answered, leads qualified, appointments booked, reviews responded to, and follow-up running without your team doing it manually, that is the Full AI Suite. It costs more. It does more. And the time your team gets back from the work it replaces is the real ROI.</p>
            </div>
            <div className="vs-bl-right">
              <div className="vs-bl-point">
                <div className="vs-bl-icon">📞</div>
                <div className="vs-bl-text"><strong>Neither Zapier nor HubSpot answers your phones.</strong>This is the most common missed lead source for local service businesses, after-hours calls that go unanswered.</div>
              </div>
              <div className="vs-bl-point">
                <div className="vs-bl-icon">⚙️</div>
                <div className="vs-bl-text"><strong>Zapier requires maintenance.</strong>When your connected apps update their APIs, Zaps break. Someone on your team owns that.</div>
              </div>
              <div className="vs-bl-point">
                <div className="vs-bl-icon">💰</div>
                <div className="vs-bl-text"><strong>HubSpot Pro costs $1,300+/mo without voice or review management.</strong>You still need to buy those capabilities separately.</div>
              </div>
              <div className="vs-bl-point">
                <div className="vs-bl-icon">⭐</div>
                <div className="vs-bl-text"><strong>No competitor responds to reviews automatically.</strong>Review response rate directly influences AI search recommendations for local businesses.</div>
              </div>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="vs-faq">
            <h2>Common questions about AI automation vs. Zapier vs. HubSpot</h2>
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="vs-faq-item">
                <h3>{item.name}</h3>
                <p>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="vs-cta">
            <h2>See what the Full AI Suite would replace for your business.</h2>
            <p>Book a free 30-minute strategy call. We will show you exactly which AI employees apply to your workflows and what you can expect in the first 90 days.</p>
            <Link href="/free-report">Get My Free AI Audit</Link>
          </div>

        </div>
      </div>
    </>
  );
}
