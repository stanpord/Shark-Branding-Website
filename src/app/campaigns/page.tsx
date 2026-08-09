import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Email & SMS Campaigns | Shark AI Solutions",
  description:
    "AI-powered email and SMS marketing campaigns that nurture leads, re-engage past customers, and drive repeat business, all running automatically in the background.",
  alternates: {
    canonical: "https://shark-ai-solutions.com/campaigns",
  },
  openGraph: {
    title: "AI Email & SMS Campaigns | Shark AI Solutions",
    description:
      "Automated email and SMS campaigns that keep your business top of mind and drive repeat business without extra work.",
    url: "https://shark-ai-solutions.com/campaigns",
  },
};

/* ── Campaign hero mockup ── */
function CampaignHeroMockup() {
  const rows = [
    { label: "Welcome sequence", sent: "1,204", open: "71%", click: "28%", status: "active" },
    { label: "90-day re-engagement", sent: "387", open: "58%", click: "19%", status: "active" },
    { label: "Review request", sent: "2,891", open: "84%", click: "41%", status: "active" },
    { label: "Seasonal promotion", sent: "—", open: "—", click: "—", status: "scheduled" },
  ]
  return (
    <div className="rounded-2xl bg-[#0a1a22] border border-white/10 overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[11px] text-white/30 font-mono">campaigns · shark-ai-solutions.com</span>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {rows.map((r) => (
          <div key={r.label} className="px-5 py-3.5 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-white truncate">{r.label}</p>
            </div>
            <div className="hidden sm:flex items-center gap-5 shrink-0">
              <div className="text-right">
                <p className="text-[10px] text-white/30">Sent</p>
                <p className="text-[11px] font-semibold text-white/60">{r.sent}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/30">Open</p>
                <p className="text-[11px] font-semibold text-[#18b5d8]">{r.open}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-white/30">Click</p>
                <p className="text-[11px] font-semibold text-[#18b5d8]">{r.click}</p>
              </div>
            </div>
            <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0 ${r.status === "active" ? "bg-[#18b5d8]/15 text-[#18b5d8]" : "bg-white/[0.06] text-white/30"}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 border-t border-white/[0.06] grid grid-cols-3 gap-4">
        {[
          { label: "Total contacts", v: "4,482" },
          { label: "Emails sent this month", v: "6,204" },
          { label: "Revenue attributed", v: "$8,340" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-[13px] font-bold text-white">{m.v}</p>
            <p className="text-[9px] text-white/30 mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Feature row mockups ── */
function AiCampaignMockup() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#86868b] mb-4">AI send-time optimization</p>
        <div className="grid grid-cols-7 gap-1 mb-3">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className="text-center">
              <p className="text-[9px] text-[#86868b] mb-1">{d}</p>
              {[...Array(4)].map((_, h) => {
                const active = (i === 1 && h === 1) || (i === 2 && h === 2) || (i === 4 && h === 1) || (i === 4 && h === 3)
                return <div key={h} className={`w-full rounded-sm mb-0.5 ${active ? "bg-[#18b5d8]" : "bg-[#e5e5ea]"}`} style={{ height: 10 }} />
              })}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#6e6e73]">Best send window: Tuesday 10 AM · Thursday 2 PM</p>
      </div>
      <div className="rounded-2xl bg-white border border-[#e5e5ea] p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#e8f7fb] flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[#18b5d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] mb-0.5">AI suggestion ready</p>
            <p className="text-[11px] text-[#6e6e73]">Switch your re-engagement subject line. Variant B outperformed by 34% open rate lift.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmailMockup() {
  return (
    <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] overflow-hidden">
      <div className="bg-white border-b border-[#e5e5ea] px-5 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#e5e5ea]" />
          <span className="w-2 h-2 rounded-full bg-[#e5e5ea]" />
          <span className="w-2 h-2 rounded-full bg-[#e5e5ea]" />
        </div>
        <span className="text-[10px] text-[#6e6e73] font-mono flex-1 text-center">Email preview</span>
      </div>
      <div className="p-5 bg-white">
        <div className="border-b border-[#f0f0f0] pb-3 mb-3">
          <p className="text-[10px] text-[#86868b]">From: [Your Business] &lt;hello@yourbusiness.com&gt;</p>
          <p className="text-[10px] text-[#86868b] mt-0.5">Subject: We miss you! Here&apos;s 20% off to come back</p>
        </div>
        <div className="bg-[#07141a] rounded-lg p-4 mb-3 text-center">
          <p className="text-[10px] font-bold text-white mb-1">[YOUR LOGO]</p>
        </div>
        <p className="text-[11px] font-semibold text-[#1d1d1f] mb-1">Hi Sarah,</p>
        <p className="text-[11px] text-[#6e6e73] leading-relaxed mb-3">It&apos;s been a while and we&apos;d love to see you again. As a thank-you for being a loyal customer, here&apos;s an exclusive offer just for you...</p>
        <div className="bg-[#18b5d8] rounded-lg py-2 text-center">
          <p className="text-[11px] font-bold text-white">Claim Your 20% Discount</p>
        </div>
      </div>
    </div>
  )
}

function SmsMockup() {
  return (
    <div className="rounded-2xl bg-[#1d1d1f] p-4 max-w-[260px] mx-auto">
      <div className="text-center mb-4">
        <div className="w-10 h-10 rounded-full bg-white/10 mx-auto mb-1 flex items-center justify-center">
          <svg className="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM14 9a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1z" />
          </svg>
        </div>
        <p className="text-[10px] text-white/30">Wesley HVAC</p>
      </div>
      <div className="space-y-2">
        <div className="bg-white/[0.08] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
          <p className="text-[11px] text-white leading-snug">Hi John! Your AC tune-up is scheduled for tomorrow at 2pm. Reply C to confirm or call us at 813-555-0192.</p>
          <p className="text-[9px] text-white/25 mt-1">10:14 AM</p>
        </div>
        <div className="bg-[#18b5d8] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%] ml-auto">
          <p className="text-[11px] text-white leading-snug">C</p>
          <p className="text-[9px] text-white/50 mt-1 text-right">10:16 AM ✓✓</p>
        </div>
        <div className="bg-white/[0.08] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
          <p className="text-[11px] text-white leading-snug">Confirmed! See you tomorrow. Leave a quick review after: g.co/r/wes...</p>
          <p className="text-[9px] text-white/25 mt-1">10:16 AM</p>
        </div>
      </div>
    </div>
  )
}

function AutomationMockup() {
  const steps = [
    { label: "Lead fills out form", icon: "form", next: true },
    { label: "Welcome email sent (instant)", icon: "email", next: true },
    { label: "Follow-up SMS (Day 2)", icon: "sms", next: true },
    { label: "Proposal email (Day 5)", icon: "email", next: true },
    { label: "No reply? Breakup email (Day 10)", icon: "email", next: false },
  ]
  return (
    <div className="space-y-2">
      {steps.map((s, i) => (
        <div key={s.label}>
          <div className="flex items-center gap-3 bg-[#f5f5f7] border border-[#e5e5ea] rounded-xl px-4 py-3">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${s.icon === "form" ? "bg-[#e8f7fb]" : s.icon === "email" ? "bg-[#18b5d8]/10" : "bg-[#1d1d1f]/5"}`}>
              {s.icon === "form" && (
                <svg className="w-3.5 h-3.5 text-[#18b5d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              )}
              {s.icon === "email" && (
                <svg className="w-3.5 h-3.5 text-[#18b5d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              )}
              {s.icon === "sms" && (
                <svg className="w-3.5 h-3.5 text-[#1d1d1f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-[#1d1d1f] leading-snug">{s.label}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#18b5d8] flex-shrink-0" />
          </div>
          {s.next && <div className="w-px h-3 bg-[#e5e5ea] ml-[21px]" />}
        </div>
      ))}
    </div>
  )
}

function ReportingMockup() {
  const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"]
  const values = [38, 52, 61, 58, 74, 88]
  const max = 100
  return (
    <div className="rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] p-5">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[13px] font-bold text-[#1d1d1f]">Campaign revenue attributed</p>
        <span className="text-[12px] font-bold text-[#18b5d8]">+132%</span>
      </div>
      <div className="flex items-end gap-2 h-28 mb-3">
        {months.map((m, i) => (
          <div key={m} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-lg" style={{ height: `${(values[i] / max) * 100}%`, background: i === months.length - 1 ? "#18b5d8" : "#d1e8ee" }} />
            <p className="text-[9px] text-[#86868b]">{m}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 border-t border-[#e5e5ea] pt-4">
        {[
          { v: "71%", l: "Avg open rate" },
          { v: "28%", l: "Avg click rate" },
          { v: "4.2x", l: "Return on spend" },
        ].map((m) => (
          <div key={m.l} className="text-center">
            <p className="text-[14px] font-bold text-[#1d1d1f]">{m.v}</p>
            <p className="text-[9px] text-[#6e6e73] mt-0.5">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialConnectMockup() {
  const channels = [
    { name: "Email", icon: "✉", v: "6,204 sent", up: true },
    { name: "SMS", icon: "💬", v: "1,891 sent", up: true },
    { name: "Facebook", icon: "f", v: "14.2k reached", up: true },
    { name: "Google Ads", icon: "G", v: "$340 spend", up: false },
  ]
  return (
    <div className="rounded-2xl bg-[#0a1a22] border border-white/10 p-5">
      <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-4">This month · all channels</p>
      <div className="space-y-3">
        {channels.map((c) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.08] flex items-center justify-center text-[11px] font-bold text-white/60 shrink-0">
              {c.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-white">{c.name}</p>
              <p className="text-[10px] text-white/30">{c.v}</p>
            </div>
            <div className={`h-1.5 rounded-full ${c.up ? "bg-[#18b5d8]" : "bg-white/20"}`} style={{ width: c.up ? 60 : 30 }} />
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/[0.06] text-center">
        <p className="text-[11px] text-white/30">Total estimated revenue this month</p>
        <p className="text-[20px] font-extrabold text-white mt-1">$8,340</p>
      </div>
    </div>
  )
}

const features = [
  {
    id: "ai",
    h2: "AI-powered campaigns that write, send, and optimize themselves",
    body: "Our AI campaign engine analyzes your customer data, picks the right message, sends it at the right time, and adjusts based on results. You approve the strategy once. The system handles execution.\n\nNo more manually writing emails or guessing the best time to send. AI handles the heavy lifting while you focus on running your business.",
    cta: { label: "See how AI campaigns work", href: "/aiemployees" },
    mockup: "ai",
    imgLeft: false,
  },
  {
    id: "email",
    h2: "Professional email campaigns without the agency price tag",
    body: "From welcome sequences to re-engagement flows, our platform provides ready-made email templates built for local businesses. Customized to your brand, your offers, and your customer journey.\n\nDesign once, run forever. Automated drip sequences keep your business top of mind for every lead in your database without any ongoing manual work.",
    cta: { label: "Explore email marketing", href: "/services" },
    mockup: "email",
    imgLeft: true,
  },
  {
    id: "sms",
    h2: "SMS campaigns with open rates email can't match",
    body: "98% of text messages are read within 3 minutes. Our SMS campaign tools let you send appointment reminders, promotional offers, and follow-ups directly to your customers' phones.\n\nAutomate texts based on triggers, send targeted broadcasts to specific customer segments, or run coordinated email and SMS sequences together for maximum impact.",
    cta: { label: "Learn about SMS marketing", href: "/services" },
    mockup: "sms",
    imgLeft: false,
  },
  {
    id: "automation",
    h2: "Set it once. Run it forever.",
    body: "Automation sequences trigger based on customer behavior. New lead fills out your form? They get a welcome sequence. Customer hasn't visited in 60 days? A re-engagement campaign starts automatically.\n\nEvery touchpoint in your customer lifecycle can be automated with campaigns built specifically for local service businesses.",
    cta: { label: "See automation examples", href: "/contact" },
    mockup: "automation",
    imgLeft: true,
  },
  {
    id: "reporting",
    h2: "Know exactly what's working with real-time reporting",
    body: "Track open rates, click rates, conversions, and revenue generated by every campaign. Our reporting dashboard shows you which messages resonate, which segments convert best, and where to focus next.\n\nMonth-end reports delivered automatically show your campaign performance over time, so you can see the return on every dollar spent.",
    cta: { label: "See reporting features", href: "/contact" },
    mockup: "reporting",
    imgLeft: false,
  },
  {
    id: "social",
    h2: "Connect campaigns to your social presence",
    body: "Coordinate your email campaigns with your social media posts for a consistent message across every channel. Our platform links campaign performance to social engagement so you can see the full picture.\n\nWhen a campaign drives website traffic, you see it. When social posts generate leads that enter a campaign, you see that too. One dashboard, full visibility.",
    cta: { label: "Explore social media tools", href: "/services" },
    mockup: "social",
    imgLeft: true,
  },
];

const channelCards = [
  {
    icon: "email",
    title: "Email & SMS",
    body: "Automated sequences and one-time broadcasts across email and text.",
  },
  {
    icon: "social",
    title: "Social media",
    body: "Scheduled posts and paid campaign coordination across all major platforms.",
  },
  {
    icon: "ads",
    title: "Digital advertising",
    body: "Google, Meta, and display ads managed and reported alongside your organic campaigns.",
  },
  {
    icon: "listing",
    title: "Listing updates",
    body: "Campaign offers and promotions automatically pushed to your business listings.",
  },
];

const stats = [
  { value: "98%", label: "Average SMS open rate within 3 minutes of sending" },
  { value: "4x", label: "More revenue from automated campaigns vs one-time sends" },
  { value: "60%", label: "Of customers say they want to hear from local businesses via text" },
];

const testimonials = [
  {
    quote: "We set up a re-engagement campaign for customers who hadn't booked in 90 days. Within the first month it brought back 18 customers we thought we'd lost.",
    name: "Owner",
    company: "Auto service shop, Tampa FL",
  },
  {
    quote: "The welcome sequence alone pays for the platform. Every new lead gets a professional follow-up within minutes, not days. Our close rate went up immediately.",
    name: "Operations Manager",
    company: "Home services company, Wesley Chapel FL",
  },
  {
    quote: "I used to spend every Monday morning writing marketing emails. Now the system does it. I just check the report to see how they performed.",
    name: "Owner",
    company: "Med spa, Florida",
  },
];

function ChannelIcon({ type }: { type: string }) {
  const cls = "w-6 h-6 text-[#18b5d8]"
  if (type === "email") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
  if (type === "social") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  )
  if (type === "ads") return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  )
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

export default function CampaignsPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-[-0.02em] mb-6" style={{ textWrap: "balance" }}>
              Email and SMS campaigns that run themselves
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              AI-powered marketing campaigns that nurture leads, re-engage past customers, and drive repeat business, all running automatically while you focus on the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Book a strategy call
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                View pricing
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-0 w-full lg:max-w-[560px]">
            <CampaignHeroMockup />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1000px] mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-[48px] font-extrabold text-[#18b5d8] leading-none mb-2">{s.value}</p>
              <p className="text-[15px] text-[#6e6e73] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHANNELS, 4 cards */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] text-center mb-4">
            One platform. Every channel.
          </h2>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[520px] mx-auto mb-14">
            Manage all your marketing campaigns from a single dashboard. Email, SMS, social, ads, and listings, all coordinated and reported together.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channelCards.map((c) => (
              <div key={c.title} className="bg-[#f5f5f7] rounded-2xl border border-[#e5e5ea] p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f7fb] flex items-center justify-center">
                  <ChannelIcon type={c.icon} />
                </div>
                <h3 className="text-[17px] font-extrabold text-[#1d1d1f]">{c.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE ROWS */}
      <section className="py-4 border-b border-[#e5e5ea]">
        {features.map((f, idx) => (
          <div
            key={f.id}
            id={f.id}
            className={`max-w-[1200px] mx-auto px-6 py-16 flex flex-col ${f.imgLeft ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center ${idx < features.length - 1 ? "border-b border-[#e5e5ea]" : ""}`}
          >
            <div className="flex-1 min-w-0">
              <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] mb-5 leading-tight" style={{ textWrap: "balance" }}>
                {f.h2}
              </h2>
              {f.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-[16px] text-[#6e6e73] leading-relaxed mb-4">{para}</p>
              ))}
              <Link
                href={f.cta.href}
                className="inline-flex items-center gap-1 text-[#18b5d8] font-semibold text-[15px] hover:underline mt-2"
              >
                {f.cta.label}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 min-w-0 w-full">
              {f.mockup === "ai" && <AiCampaignMockup />}
              {f.mockup === "email" && <EmailMockup />}
              {f.mockup === "sms" && <SmsMockup />}
              {f.mockup === "automation" && <AutomationMockup />}
              {f.mockup === "reporting" && <ReportingMockup />}
              {f.mockup === "social" && <SocialConnectMockup />}
            </div>
          </div>
        ))}
      </section>

      {/* READY-MADE CAMPAIGNS */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 min-w-0">
            <h2 className="text-[26px] sm:text-[34px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] mb-5 leading-tight" style={{ textWrap: "balance" }}>
              Ready-made campaigns built for local businesses
            </h2>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-4">
              Don't start from scratch. Our campaign library includes pre-built email and SMS sequences for the most common local business use cases: welcome sequences, appointment reminders, review requests, re-engagement flows, seasonal promotions, and more.
            </p>
            <p className="text-[16px] text-[#6e6e73] leading-relaxed mb-6">
              Choose a template, customize the copy and branding, set your triggers, and launch. Most campaigns go live in under an hour.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
            >
              Get started today
            </Link>
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div className="rounded-2xl bg-white border border-[#e5e5ea] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#e5e5ea] flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#1d1d1f] uppercase tracking-wider">Campaign library</span>
                <span className="ml-auto text-[11px] bg-[#18b5d8]/10 text-[#18b5d8] font-semibold px-2 py-0.5 rounded-full">40+ templates</span>
              </div>
              {[
                { name: "New lead welcome sequence", type: "Email + SMS", triggers: "Form submission" },
                { name: "Appointment reminder", type: "SMS", triggers: "24hr before booking" },
                { name: "Post-service review request", type: "Email + SMS", triggers: "Job completed" },
                { name: "90-day re-engagement", type: "Email", triggers: "No activity 90d" },
                { name: "Seasonal promotion", type: "Email + SMS", triggers: "Manual / date" },
              ].map((t) => (
                <div key={t.name} className="px-5 py-3.5 border-b border-[#f0f0f0] last:border-0 flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">{t.name}</p>
                    <p className="text-[11px] text-[#6e6e73] mt-0.5">{t.triggers}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#18b5d8] bg-[#18b5d8]/10 px-2 py-0.5 rounded-full ml-3 shrink-0">{t.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-[-0.02em] text-center mb-14">
            What our clients say about campaign results
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#f5f5f7] rounded-2xl border border-[#e5e5ea] p-8 flex flex-col gap-5">
                <svg viewBox="0 0 32 24" className="w-8 h-6 text-[#18b5d8] flex-shrink-0" fill="currentColor">
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6 6.4 9.6H12V24H0zm20 0V14.4C20 6.4 24.8 1.6 34.4 0L36 2.4C30.4 3.6 27.6 6 26.4 9.6H32V24H20z" />
                </svg>
                <p className="text-[15px] text-[#1d1d1f] leading-relaxed flex-1 italic">{t.quote}</p>
                <div>
                  <p className="text-[14px] font-bold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-[13px] text-[#86868b]">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07141a] py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 65% 45%, #18b5d8 0%, transparent 55%)" }}
        />
        <div className="max-w-[760px] mx-auto text-center relative">
          <h2
            className="text-[32px] sm:text-[46px] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-5"
            style={{ textWrap: "balance" }}
          >
            Start turning your customer list into revenue
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            Most local businesses are sitting on a goldmine of past customers and unconverted leads. A 30-minute call is enough to map out a campaign strategy for your specific business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              Book a free strategy call
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
