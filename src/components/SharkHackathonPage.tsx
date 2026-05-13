"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const EVENT = {
  title: "Shark AI Hackathon",
  date: new Date("2026-05-26T12:00:00-04:00"),
  label: "May 26, 2026",
  time: "12:00 PM – 2:00 PM EDT",
  venue: "35366 Pure Water Way",
  city: "Zephyrhills, FL 33541",
  venueNote: "Before the Official Opening",
};

const MARQUEE = [
  "Live Calls",
  "Chaotic Chat",
  "Real-Time Tests",
  "Break the Bot",
  "AI Receptionists",
  "Sales Duels",
  "Unreleased Technology",
  "Can You Break the Bot?",
  "Awards Given",
  "45 Seats Only",
];

const EXPERIENCES = [
  {
    code: "01",
    title: "Live Call Chaos",
    body:
      "Overwhelm AI receptionists with simultaneous calls to see how the systems respond under real pressure.",
  },
  {
    code: "02",
    title: "Break the AI Chat",
    body:
      "Challenge AI chat systems with difficult, chaotic, and unpredictable real-world customer scenarios.",
  },
  {
    code: "03",
    title: "Stress-Test AI Tools",
    body:
      "Push AI business tools to their limits in live, high-pressure situations — see what holds and what breaks.",
  },
  {
    code: "04",
    title: "AI Boosts Sales & Revenue",
    body:
      "See firsthand how AI drives sales performance, improves efficiency, and surfaces insights that move revenue.",
  },
  {
    code: "05",
    title: "Compete & Shape the Future",
    body:
      "Compete, collaborate, and actively help shape the technology before it reaches the public. Your feedback matters.",
  },
];

const REASONS = [
  {
    n: "01",
    title: "See unreleased AI technology",
    body:
      "Experience systems before public rollout, directly from the teams building them.",
  },
  {
    n: "02",
    title: "Help shape the future",
    body:
      "Attendees actively test and influence the next round of product decisions in real time.",
  },
  {
    n: "03",
    title: "Watch real business use cases",
    body:
      "Every arena is built around live customer communication, sales pressure, and operational efficiency.",
  },
  {
    n: "04",
    title: "Get the room before the market",
    body:
      "Most businesses will hear about this later. You get to pressure-test it while it is still early.",
  },
  {
    n: "05",
    title: "Win awards for breaking it best",
    body:
      "Awards will be given to participants who push the AI hardest. Come ready to compete.",
  },
];

const ACTION_BULLETS = [
  "Hands-on AI demos",
  "Live CRM & sales duels",
  "Real business scenarios",
  "Fun, fast & interactive",
  "Network with innovators & business leaders",
  "Awards will be given",
];

const WHO = [
  "Business Owners",
  "Sales Teams",
  "Marketing Leaders",
  "Operations Professionals",
  "AI Enthusiasts",
  "Media and Press",
  "Early Adopters",
];

const ACCESS = [
  {
    id: "participate",
    label: "Participate",
    sub: "Hands-on operator",
    tag: "Most popular",
    body:
      "Get hands-on with the AI systems, join the challenges, test the bots, and be part of the live experience.",
    seats: "10 seats",
  },
  {
    id: "vip",
    label: "VIP Access",
    sub: "Observe and influence",
    tag: "Limited",
    body:
      "Watch the event unfold live, experience the technology before public release, and see how businesses are preparing for the future of AI.",
    seats: "25 seats",
  },
  {
    id: "media",
    label: "Media / Press",
    sub: "Coverage credential",
    tag: "By approval",
    body:
      "Attend as media, press, photographer, videographer, blogger, creator, or coverage partner.",
    seats: "10 credentials",
  },
];

const SPONSORS = [
  { name: "Shark Branding Solutions", role: "Presented by" },
  { name: "Worthington Agency", role: "Partner" },
  { name: "North Tampa Bay Chamber", role: "Partner" },
];

const INTERESTS = [
  "AI for Sales",
  "AI Receptionists",
  "AI Chat and Support",
  "CRM Automation",
  "Operations and Workflow",
  "Investor or Partner",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
};

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const diff = Math.max(0, target.getTime() - now);

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const digits = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1 font-mono text-[1.8rem] font-semibold text-white sm:text-[2.4rem]">
        <span className="min-w-[1.4ch] rounded-md border border-white/12 bg-white/6 px-2 py-1 text-center">
          {digits[0]}
        </span>
        <span className="min-w-[1.4ch] rounded-md border border-white/12 bg-white/6 px-2 py-1 text-center">
          {digits[1]}
        </span>
      </div>
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/40">
        {label}
      </span>
    </div>
  );
}

function WaitlistForm() {
  const [access, setAccess] = useState("participate");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
  });

  const activeAccess = ACCESS.find((item) => item.id === access);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Valid email required";
    }
    if (!form.company.trim()) next.company = "Required";
    if (form.phone && !/^[\d()\s.+-]{7,}$/.test(form.phone)) {
      next.phone = "Check phone";
    }
    if (!form.interest) next.interest = "Pick one";

    return next;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function markTouched(key: keyof FormState) {
    setTouched((current) => ({ ...current, [key]: true }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      interest: true,
    });

    if (!isValid) return;

    setSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted && activeAccess) {
    return (
      <section
        id="waitlist"
        className="bg-white px-6 py-18 sm:py-24"
      >
        <div className="mx-auto max-w-[980px]">
          <div className="mx-auto max-w-[720px] rounded-[28px] border-2 border-black bg-white p-8 text-center shadow-[10px_10px_0_#0a0a0a] sm:p-12">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#18b5d8] text-[#18b5d8]">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                <path
                  d="M5 12.5 9.2 17 19 7.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="display-lg mb-3 text-[#1d1d1f]">You&apos;re on the list.</h2>
            <p className="mx-auto mb-8 max-w-[520px] text-[1rem] leading-7 text-[#333333]">
              We received your <strong>{activeAccess.label}</strong> request. Our
              team will review it and confirm next steps within 48 hours.
            </p>
            <div className="mb-8 grid gap-3 rounded-[20px] border border-[#e0e0e0] bg-[#f5f5f7] p-5 text-left">
              <div className="grid gap-1 sm:grid-cols-[84px_1fr]">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]">
                  Who
                </span>
                <span className="text-[0.98rem] text-[#1d1d1f]">
                  {form.name} · {form.company}
                </span>
              </div>
              <div className="grid gap-1 sm:grid-cols-[84px_1fr]">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]">
                  When
                </span>
                <span className="text-[0.98rem] text-[#1d1d1f]">
                  {EVENT.label} · {EVENT.time}
                </span>
              </div>
              <div className="grid gap-1 sm:grid-cols-[84px_1fr]">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7a7a7a]">
                  Where
                </span>
                <span className="text-[0.98rem] text-[#1d1d1f]">
                  {EVENT.venue}, {EVENT.city}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setTouched({});
                setForm({
                  name: "",
                  email: "",
                  company: "",
                  phone: "",
                  interest: "",
                });
              }}
              className="btn-press rounded-full border border-[#18b5d8] px-6 py-3 text-[0.98rem] font-semibold text-[#18b5d8] transition-colors duration-150 hover:bg-[#18b5d8]/8"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="bg-white px-6 py-18 sm:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 max-w-[700px]">
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#18b5d8]">
            03 - Reserve your access
          </p>
          <h2 className="display-lg mb-5 text-[#1d1d1f]" style={{ textWrap: "balance" }}>
            Join the <span className="text-[#18b5d8]">waitlist.</span>
          </h2>
          <p className="lead-airy max-w-[620px] text-[#333333]">
            Space is limited. Choose how you want to experience the event and
            send us your request.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border-2 border-black">
          <div className="grid border-b-2 border-black lg:grid-cols-3">
            {ACCESS.map((item) => {
              const isActive = access === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setAccess(item.id)}
                  className={`border-b-2 border-black px-6 py-7 text-left transition-colors duration-150 lg:border-b-0 lg:border-r-2 ${
                    item.id === ACCESS[ACCESS.length - 1].id ? "lg:border-r-0" : ""
                  } ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]"
                  }`}
                >
                  <span
                    className={`mb-4 inline-block rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
                      isActive
                        ? "border-[#18b5d8] text-[#18b5d8]"
                        : "border-black text-[#1d1d1f]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <div className="mb-1 text-[1.4rem] font-semibold tracking-[-0.03em]">
                    {item.label}
                  </div>
                  <div className={`mb-4 text-[0.75rem] font-semibold uppercase tracking-[0.18em] ${isActive ? "text-white/45" : "text-[#7a7a7a]"}`}>
                    {item.sub}
                  </div>
                  <p className={`text-[0.96rem] leading-7 ${isActive ? "text-white/72" : "text-[#333333]"}`}>
                    {item.body}
                  </p>
                  <div className={`mt-4 text-[0.76rem] font-semibold uppercase tracking-[0.14em] ${isActive ? "text-[#18b5d8]" : "text-[#7a7a7a]"}`}>
                    {item.seats}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white p-6 sm:p-8">
            <div className="mb-8 flex flex-col gap-4 border-b-2 border-[#e0e0e0] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#18b5d8]">
                  Step 2 of 2
                </div>
                <div className="text-[1.4rem] font-semibold tracking-[-0.02em] text-[#1d1d1f]">
                  Your details
                </div>
              </div>
              <div className="rounded-full border-2 border-black px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#1d1d1f]">
                Applying as{" "}
                <span className="text-[#18b5d8]">
                  {activeAccess?.label}
                </span>
              </div>
            </div>

            <form className="grid gap-5 md:grid-cols-2" onSubmit={onSubmit} noValidate>
              <Field
                label="Full name"
                required
                error={touched.name ? errors.name : undefined}
              >
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  onBlur={() => markTouched("name")}
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="w-full rounded-[14px] border-2 border-black px-4 py-3 text-[0.98rem] text-[#1d1d1f] outline-none transition-shadow duration-150 placeholder:text-[#9ca3af] focus:border-[#18b5d8] focus:shadow-[4px_4px_0_#18b5d8]"
                />
              </Field>

              <Field
                label="Email address"
                required
                error={touched.email ? errors.email : undefined}
              >
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  onBlur={() => markTouched("email")}
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="w-full rounded-[14px] border-2 border-black px-4 py-3 text-[0.98rem] text-[#1d1d1f] outline-none transition-shadow duration-150 placeholder:text-[#9ca3af] focus:border-[#18b5d8] focus:shadow-[4px_4px_0_#18b5d8]"
                />
              </Field>

              <Field
                label="Company / organization"
                required
                error={touched.company ? errors.company : undefined}
              >
                <input
                  value={form.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  onBlur={() => markTouched("company")}
                  autoComplete="organization"
                  placeholder="Your company"
                  className="w-full rounded-[14px] border-2 border-black px-4 py-3 text-[0.98rem] text-[#1d1d1f] outline-none transition-shadow duration-150 placeholder:text-[#9ca3af] focus:border-[#18b5d8] focus:shadow-[4px_4px_0_#18b5d8]"
                />
              </Field>

              <Field
                label="Phone number"
                error={touched.phone ? errors.phone : undefined}
              >
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  onBlur={() => markTouched("phone")}
                  autoComplete="tel"
                  placeholder="(555) 555-5555"
                  className="w-full rounded-[14px] border-2 border-black px-4 py-3 text-[0.98rem] text-[#1d1d1f] outline-none transition-shadow duration-150 placeholder:text-[#9ca3af] focus:border-[#18b5d8] focus:shadow-[4px_4px_0_#18b5d8]"
                />
              </Field>

              <Field
                label="What interests you most?"
                required
                full
                error={touched.interest ? errors.interest : undefined}
              >
                <div className="flex flex-wrap gap-2.5">
                  {INTERESTS.map((interest) => {
                    const active = form.interest === interest;

                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => {
                          updateField("interest", interest);
                          markTouched("interest");
                        }}
                        className={`rounded-full border-2 px-4 py-2 text-[0.9rem] font-semibold transition-colors duration-150 ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-[#e0e0e0] bg-white text-[#333333] hover:border-black hover:text-black"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <div className="flex flex-col gap-4 border-t-2 border-[#e0e0e0] pt-6 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p className="max-w-[420px] text-[0.86rem] leading-6 text-[#7a7a7a]">
                  By submitting, you agree to receive event communications from
                  Shark Branding Solutions. Your information stays with us.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-press rounded-full bg-black px-7 py-3 text-[0.98rem] font-semibold text-white transition-colors duration-150 hover:bg-[#18b5d8] hover:text-black disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Request my invitation ->"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="mb-2 flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#7a7a7a]">
        <span>
          {label}
          {required ? <span className="text-[#18b5d8]"> *</span> : null}
        </span>
        {error ? <span className="ml-auto text-[0.7rem] tracking-normal text-[#dc2626]">{error}</span> : null}
      </label>
      {children}
    </div>
  );
}

export default function SharkHackathonPage() {
  const countdown = useCountdown(EVENT.date);

  return (
    <>
      <section className="relative overflow-hidden bg-white px-6 pb-18 pt-24 sm:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_right,_rgba(24,181,216,0.18),_transparent_42%),linear-gradient(180deg,_#ffffff_0%,_#f5f5f7_100%)]"
        />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-black px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white">
              <span className="h-2 w-2 rounded-full bg-[#18b5d8] shadow-[0_0_14px_#18b5d8]" />
              Invitation · {EVENT.label} · Tampa Bay
            </div>
            <h1 className="mb-4 text-[clamp(3rem,9vw,6.4rem)] font-semibold uppercase leading-[0.92] tracking-[-0.05em] text-[#0a0a0a]">
              Experience
              <br />
              the future
              <br />
              <span className="font-serif text-[#18b5d8] normal-case italic tracking-[-0.03em]">
                before everyone else.
              </span>
            </h1>
            <p className="mb-6 text-[1.15rem] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a]">
              Come <span className="text-[#18b5d8]">Try to Break</span> Our AI Employees
            </p>

            {/* Activity pills */}
            <div className="mb-7 flex flex-wrap gap-2.5">
              {[
                { icon: "📞", label: "Live Calls" },
                { icon: "💬", label: "Chaotic Chat" },
                { icon: "⚡", label: "Real-Time Tests" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="flex items-center gap-2 rounded-full border-2 border-[#0a0a0a] px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]"
                >
                  <span aria-hidden="true">{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>

            <p className="mb-8 max-w-[620px] text-[1.06rem] font-medium leading-8 text-[#333333] sm:text-[1.12rem]">
              Get hands-on with live, unreleased AI technology built to change sales,
              customer communication, operations, and business growth — before the
              official opening.
            </p>
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="btn-press rounded-full bg-black px-7 py-3 text-[0.98rem] font-semibold text-white transition-colors duration-150 hover:bg-[#18b5d8] hover:text-black"
              >
                Reserve my spot {"->"}
              </a>
              <a
                href="#experience"
                className="btn-press rounded-full border-2 border-black px-7 py-3 text-[0.98rem] font-semibold text-[#1d1d1f] transition-colors duration-150 hover:bg-black hover:text-white"
              >
                See the experience
              </a>
            </div>
            <div className="grid overflow-hidden rounded-[24px] border-2 border-black sm:grid-cols-3">
              {[
                { value: "45", label: "Seats total" },
                { value: "5", label: "Live AI arenas" },
                { value: "2hr", label: "High-energy event" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-6 text-center ${index < 2 ? "border-b-2 border-black sm:border-b-0 sm:border-r-2" : ""}`}
                >
                  <div className="font-mono text-[2rem] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7a7a7a]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-2 top-5 z-10 rounded-full border-2 border-black bg-[#18b5d8] px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-black">
              Official Flyer
            </div>
            <div className="overflow-hidden rounded-[30px] border-[3px] border-black bg-[#07141a] shadow-[10px_10px_0_#0a0a0a]">
              <div className="border-b-2 border-white/10 bg-[linear-gradient(135deg,_rgba(24,181,216,0.16),_transparent_54%)] px-7 py-8">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#18b5d8]">
                      Shark Branding Solutions
                    </p>
                    <p className="text-[0.88rem] text-white/65">
                      Invitation-only live event
                    </p>
                  </div>
                  <div className="rounded-full border border-white/14 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/80">
                    45 seats
                  </div>
                </div>
                <div className="text-[clamp(2.2rem,7vw,4.4rem)] font-semibold uppercase leading-[0.92] tracking-[-0.05em] text-white">
                  Shark AI
                  <br />
                  Hackathon
                </div>
                <div className="mt-5 text-[1rem] font-medium text-white/82">
                  May 26, 2026 · 12:00 PM - 2:00 PM EDT
                </div>
              </div>
              <div className="grid gap-6 px-7 py-8 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/12 bg-white/4 p-5">
                  <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#18b5d8]">
                    What happens
                  </div>
                  <ul className="space-y-3 text-[0.96rem] leading-7 text-white/84">
                    <li>Live call chaos under pressure</li>
                    <li>Break the AI chat in real time</li>
                    <li>AI sales evaluation and coaching</li>
                    <li>CRM notes, analysis, and insights live</li>
                  </ul>
                </div>
                <div className="rounded-[22px] border border-white/12 bg-black/20 p-5">
                  <div className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#18b5d8]">
                    Location
                  </div>
                  <div className="text-[1rem] font-medium leading-7 text-white">
                    {EVENT.venue}
                    <br />
                    {EVENT.city}
                  </div>
                  <div className="mt-3 text-[0.72rem] font-semibold text-[#18b5d8]">
                    {EVENT.venueNote}
                  </div>
                  <div className="mt-4 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Observe. Test. Influence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y-2 border-black bg-black py-4">
        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-4 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white"
            >
              <span className="text-[#18b5d8]">◆</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-10 sm:py-14">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 rounded-[28px] bg-[#111111] px-6 py-8 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/35">
              Event starts in
            </div>
            <div className="text-[1.05rem] font-semibold uppercase tracking-[-0.02em] text-white sm:text-[1.35rem]">
              {EVENT.title} · {EVENT.label} · {EVENT.time}
            </div>
          </div>
          <div className="flex flex-wrap items-end gap-3 sm:gap-4">
            <CountdownUnit value={countdown.days} label="Days" />
            <span className="pb-5 font-mono text-[1.6rem] font-semibold text-[#18b5d8]">:</span>
            <CountdownUnit value={countdown.hours} label="Hrs" />
            <span className="pb-5 font-mono text-[1.6rem] font-semibold text-[#18b5d8]">:</span>
            <CountdownUnit value={countdown.minutes} label="Min" />
            <span className="pb-5 font-mono text-[1.6rem] font-semibold text-[#18b5d8]">:</span>
            <CountdownUnit value={countdown.seconds} label="Sec" />
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#07141a] px-6 py-18 sm:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-12 max-w-[760px]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7a7a7a]">
              01 - What you&apos;ll experience
            </p>
            <h2 className="display-lg mb-5 text-white" style={{ textWrap: "balance" }}>
              Five arenas. <span className="font-serif text-[#18b5d8] italic">Live AI</span> under pressure.
            </h2>
            <p className="lead-airy max-w-[620px] text-[#cccccc]">
              No slide deck. No concept theater. Real systems pushed by a room
              full of business operators.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[28px] border border-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((item, index) => (
              <article
                key={item.code}
                className={`relative px-7 py-8 motion-safe:transition-colors motion-safe:duration-150 hover:bg-white/4 border-b border-white/10 last:border-b-0 sm:last:col-span-2 lg:last:col-span-1 ${
                  index % 2 === 0 ? "sm:border-r sm:border-white/10 lg:border-r-0" : ""
                } lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+1)]:border-white/10 lg:[&:nth-child(3n+2)]:border-r lg:[&:nth-child(3n+2)]:border-white/10 lg:[&:nth-child(3)]:border-r-0`}
              >
                <div className="mb-5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/28">
                  {item.code}
                </div>
                <div className="mb-4 inline-flex rounded-full border border-[#18b5d8]/35 bg-[#18b5d8]/10 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#18b5d8]">
                  Live
                </div>
                <h3 className="mb-3 text-[1.28rem] font-semibold uppercase tracking-[0.02em] text-white">
                  {item.title}
                </h3>
                <p className="max-w-[480px] text-[0.98rem] leading-7 text-white/60">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Be Part of the Action ── */}
      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — bullet list */}
          <div>
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7a7a7a]">
              Be part of the action
            </p>
            <h2 className="mb-8 text-[clamp(2rem,5vw,3rem)] font-semibold uppercase leading-[0.94] tracking-[-0.04em] text-white">
              Hands-on.{" "}
              <span className="font-serif normal-case italic tracking-[-0.02em] text-[#18b5d8]">
                High-energy.
              </span>
            </h2>
            <ul className="space-y-4">
              {ACTION_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#18b5d8] text-[#18b5d8]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M5 12.5 9.2 17 19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[1rem] text-white/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — "Can You Break the Bot?" callout */}
          <div className="relative">
            <div className="rounded-[28px] border-2 border-[#18b5d8]/30 bg-[#07141a] p-8 sm:p-10 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-[#18b5d8]/30 bg-[#18b5d8]/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#18b5d8]">
                The Challenge
              </div>
              <h3 className="mb-5 text-[clamp(2rem,6vw,3.4rem)] font-semibold uppercase leading-[0.94] tracking-[-0.04em] text-white">
                Can You
                <br />
                Break
                <br />
                <span className="text-[#18b5d8]">the Bot?</span>
              </h3>
              <p className="mb-8 text-[0.98rem] leading-7 text-white/60">
                You&apos;ll have two hours to try. Our AI employees handle calls, chat, sales, and CRM — put them under maximum pressure and see what happens.
              </p>
              <div className="grid grid-cols-3 divide-x divide-white/8 rounded-[16px] border border-white/8 bg-white/4 mb-5">
                {[
                  { v: "45", l: "Seats" },
                  { v: "5", l: "Arenas" },
                  { v: "2hr", l: "Event" },
                ].map((s) => (
                  <div key={s.l} className="py-4 text-center">
                    <div className="font-mono text-[1.3rem] font-semibold text-white">{s.v}</div>
                    <div className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/35">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 rounded-[14px] border border-[#18b5d8]/25 bg-[#18b5d8]/8 px-5 py-3">
                <span className="text-[1.2rem]" aria-hidden="true">🏆</span>
                <span className="text-[0.85rem] font-semibold text-[#18b5d8]">Awards will be given</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Innovation tagline strip ── */}
      <div className="border-y border-white/8 bg-[#07141a] px-6 py-4">
        <div className="mx-auto max-w-[1180px] flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {["Innovation", "Competition", "Exclusive Access", "VIP Experience"].map((tag, i, arr) => (
            <span key={tag} className="flex items-center gap-8">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/50">{tag}</span>
              {i < arr.length - 1 && <span className="text-white/20 text-[0.5rem]">◆</span>}
            </span>
          ))}
        </div>
      </div>

      <section className="bg-[#f5f5f7] px-6 py-18 sm:py-24" id="why">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 max-w-[760px]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7a7a7a]">
              02 - Why attend
            </p>
            <h2 className="display-lg mb-5 text-[#1d1d1f]" style={{ textWrap: "balance" }}>
              Four reasons this <span className="font-serif italic text-[#18b5d8]">isn&apos;t</span> another tech event.
            </h2>
          </div>

          <div className="border-t-2 border-black">
            {REASONS.map((reason) => (
              <article
                key={reason.n}
                className="grid gap-5 border-b-2 border-black px-1 py-7 transition-colors duration-150 hover:bg-white/60 sm:grid-cols-[72px_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#18b5d8]">
                  {reason.n}
                </span>
                <div>
                  <div className="mb-1 text-[1.1rem] font-semibold tracking-[-0.02em] text-[#1d1d1f] sm:text-[1.35rem]">
                    {reason.title}
                  </div>
                  <div className="max-w-[720px] text-[0.98rem] leading-7 text-[#555555]">
                    {reason.body}
                  </div>
                </div>
                <span className="hidden text-[#9ca3af] sm:block">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M4 12h14m-5-5 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-18 sm:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12 max-w-[760px]">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#7a7a7a]">
              04 - Who should attend
            </p>
            <h2 className="display-lg mb-5 text-[#1d1d1f]" style={{ textWrap: "balance" }}>
              Built for <span className="font-serif italic text-[#18b5d8]">operators</span>, not spectators.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {WHO.map((item) => (
              <div
                key={item}
                className="rounded-full border-2 border-black px-5 py-3 text-[0.96rem] font-semibold tracking-[0.01em] text-[#1d1d1f] transition-colors duration-150 hover:bg-black hover:text-white"
              >
                <span className="mr-2 font-mono text-[#18b5d8]">+</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaitlistForm />

      <section className="border-t-[3px] border-black bg-[#18b5d8] px-6 py-18 text-center sm:py-24">
        <div className="mx-auto max-w-[760px]">
          <h2 className="mb-4 text-[clamp(2.3rem,7vw,5.2rem)] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-black">
            Most people will
            <br />
            read about this AI.
            <span className="mt-2 block font-serif text-[0.66em] normal-case italic tracking-[-0.02em]">
              You&apos;ll be in the room with it.
            </span>
          </h2>
          <p className="mb-8 text-[1rem] font-medium text-black/65">
            {EVENT.label} · {EVENT.time} · {EVENT.venue}, {EVENT.city}
          </p>
          <a
            href="#waitlist"
            className="btn-press inline-flex rounded-full border-2 border-black bg-black px-8 py-4 text-[1rem] font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-white hover:text-black"
          >
            Join the waitlist {"->"}
          </a>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section className="bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-8 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#7a7a7a]">
            Presented &amp; Partnered By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {SPONSORS.map((s) => (
              <div key={s.name} className="text-center">
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#18b5d8] mb-1">
                  {s.role}
                </div>
                <div className="text-[1.05rem] font-semibold text-[#1d1d1f]">
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer bar ── */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 border-t-2 border-black pt-6 text-[0.8rem] text-[#7a7a7a] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span>{EVENT.venue}, {EVENT.city}</span>
            <span className="ml-3 text-[#18b5d8] font-semibold">{EVENT.venueNote}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-[#1d1d1f]">
              Contact
            </Link>
            <a href="#experience" className="hover:text-[#1d1d1f]">
              Experience
            </a>
            <a href="#why" className="hover:text-[#1d1d1f]">
              Why attend
            </a>
            <a href="#waitlist" className="hover:text-[#1d1d1f]">
              Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
