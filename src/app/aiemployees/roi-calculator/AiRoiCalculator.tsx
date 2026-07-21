'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ── Types ───────────────────────────────────────────────────────────────── */
type ResponseTime = 'instant' | 'under5min' | 'under1hr' | 'under24hr' | 'nextday'

interface CalcInputs {
  monthlyLeads: number
  dealValue: number
  closeRate: number
  responseTime: ResponseTime
  afterHoursPct: number
  adminHoursPerWeek: number
  hourlyCost: number
}

const DEFAULTS: CalcInputs = {
  monthlyLeads: 50,
  dealValue: 1000,
  closeRate: 25,
  responseTime: 'under1hr',
  afterHoursPct: 30,
  adminHoursPerWeek: 10,
  hourlyCost: 25,
}

const RESPONSE_OPTIONS: { value: ResponseTime; label: string; note: string }[] = [
  { value: 'instant',   label: 'Instantly (< 1 min)',    note: 'AI already handles this' },
  { value: 'under5min', label: 'Under 5 minutes',        note: 'Strong, small gap to close' },
  { value: 'under1hr',  label: 'Under 1 hour',           note: 'Leads cooling off' },
  { value: 'under24hr', label: 'Under 24 hours',         note: 'Significant drop-off risk' },
  { value: 'nextday',   label: 'Next day or longer',     note: 'High loss rate' },
]

/* ── ROI Logic ───────────────────────────────────────────────────────────── */
function calcROI(i: CalcInputs) {
  // After-hours capture: ~70% of after-hours leads go unanswered; AI captures ~45% of those
  const afterHoursCapture =
    i.monthlyLeads * (i.afterHoursPct / 100) * 0.70 * 0.45 * (i.closeRate / 100) * i.dealValue * 12

  // Speed-to-lead lift: close rate improvement from instant vs. delayed response
  const rMultiplier: Record<ResponseTime, number> = {
    instant: 0.03, under5min: 0.06, under1hr: 0.13, under24hr: 0.21, nextday: 0.30,
  }
  const speedLift = i.monthlyLeads * rMultiplier[i.responseTime] * i.dealValue * 12

  // Time savings: AI handles ~60% of routine admin volume
  const hoursSaved = Math.round(i.adminHoursPerWeek * 0.60 * 52)
  const timeSavingsValue = hoursSaved * i.hourlyCost

  const currentRevenue = i.monthlyLeads * (i.closeRate / 100) * i.dealValue * 12
  const totalLift = afterHoursCapture + speedLift + timeSavingsValue

  return {
    afterHoursCapture,
    speedLift,
    timeSavingsValue,
    hoursSaved,
    totalLift,
    currentRevenue,
    projectedRevenue: currentRevenue + afterHoursCapture + speedLift,
  }
}

/* ── Formatters ──────────────────────────────────────────────────────────── */
const usd = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
const commas = (n: number) => new Intl.NumberFormat('en-US').format(Math.round(n))

/* ── Slider ──────────────────────────────────────────────────────────────── */
function Slider({ label, value, min, max, step = 1, onChange, display }: {
  label: string; value: number; min: number; max: number
  step?: number; onChange: (v: number) => void; display: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[14px] font-medium text-[#1d1d1f]">{label}</span>
        <span className="text-[13px] font-bold text-[#18b5d8] bg-[#f0fbfd] border border-[#b8edf7] px-3 py-0.5 rounded-full shrink-0">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-[6px] rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-[20px]
          [&::-webkit-slider-thumb]:w-[20px]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[#18b5d8]
          [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(24,181,216,0.5)]
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:h-[20px]
          [&::-moz-range-thumb]:w-[20px]
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-[#18b5d8]
          [&::-moz-range-thumb]:border-none
          [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, #18b5d8 ${pct}%, #e8e8ed ${pct}%)`,
        }}
      />
    </div>
  )
}

/* ── Results Panel ───────────────────────────────────────────────────────── */
function ResultsPanel({ roi }: { roi: ReturnType<typeof calcROI> }) {
  const breakdown = [
    {
      label: 'After-Hours Capture',
      desc: 'Converting missed nights and weekends',
      value: roi.afterHoursCapture,
    },
    {
      label: 'Speed-to-Lead Lift',
      desc: 'Revenue impact of instant response',
      value: roi.speedLift,
    },
    {
      label: 'Time Savings Value',
      desc: `${commas(roi.hoursSaved)} hrs/yr freed from admin tasks`,
      value: roi.timeSavingsValue,
    },
  ]

  const barMax = Math.max(roi.projectedRevenue, 1)

  return (
    <div className="bg-[#07141a] rounded-[20px] p-6 lg:p-8 flex flex-col gap-6">
      {/* Big number */}
      <div>
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#18b5d8] mb-2">
          Projected Annual Impact
        </p>
        <p className="text-[48px] lg:text-[56px] font-bold text-white leading-none tracking-tight">
          {usd(roi.totalLift)}
        </p>
        <p className="text-[13px] text-[#8a9ba8] mt-1.5">revenue lift + time savings</p>
      </div>

      <div className="border-t border-white/10" />

      {/* Breakdown */}
      <div className="space-y-5">
        {breakdown.map(item => (
          <div key={item.label} className="flex items-start gap-3">
            <div className="w-1 h-12 rounded-full bg-[#18b5d8] shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-[#8a9ba8] mb-0.5">{item.desc}</p>
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[13px] font-semibold text-white leading-snug">{item.label}</p>
                <p className="text-[15px] font-bold text-[#18b5d8] shrink-0">{usd(item.value)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10" />

      {/* Revenue comparison */}
      <div className="space-y-4">
        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#8a9ba8]">
          Annual Revenue from Leads
        </p>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[12px] mb-1.5">
              <span className="text-[#8a9ba8]">Current</span>
              <span className="text-white font-semibold">{usd(roi.currentRevenue)}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/25 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min((roi.currentRevenue / barMax) * 100, 100)}%` }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[12px] mb-1.5">
              <span className="text-[#18b5d8] font-medium">With AI Employee</span>
              <span className="text-[#18b5d8] font-bold">{usd(roi.projectedRevenue)}</span>
            </div>
            <div className="h-2 bg-[#18b5d8]/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#18b5d8] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.min((roi.projectedRevenue / barMax) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hours saved */}
      <div className="bg-white/5 border border-white/10 rounded-[12px] px-4 py-3.5">
        <p className="text-[22px] font-bold text-white leading-none">{commas(roi.hoursSaved)}</p>
        <p className="text-[12px] text-[#8a9ba8] mt-0.5">staff hours freed per year</p>
      </div>

      <Link
        href="/aiemployees"
        className="flex items-center justify-center gap-2 bg-[#18b5d8] text-white text-[14px] font-bold rounded-[12px] px-6 py-3.5 hover:bg-[#14a3c4] transition-colors text-center"
      >
        See the Full AI Employee Suite
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <p className="text-[11px] text-[#4a5a66] text-center -mt-2">
        Estimates based on industry benchmarks. Results vary by business.
      </p>
    </div>
  )
}

/* ── Step Labels ─────────────────────────────────────────────────────────── */
const STEPS = ['Your Business', 'Your Process', 'Your Team']

/* ── Main ────────────────────────────────────────────────────────────────── */
export default function AiRoiCalculator() {
  const [step, setStep] = useState(0)
  const [inputs, setInputs] = useState<CalcInputs>(DEFAULTS)

  const roi = calcROI(inputs)
  const set = <K extends keyof CalcInputs>(key: K) => (v: CalcInputs[K]) =>
    setInputs(prev => ({ ...prev, [key]: v }))

  return (
    <div className="min-h-screen bg-[#f5f5f7]">

      {/* Header */}
      <div className="bg-[#07141a] px-6 py-16 text-center">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#18b5d8] mb-3">
          Interactive Tool
        </p>
        <h1 className="text-[30px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-tight max-w-2xl mx-auto">
          AI Employee ROI Calculator
        </h1>
        <p className="text-[16px] text-[#8a9ba8] mt-3 max-w-xl mx-auto leading-relaxed">
          Quantify how much revenue your business leaves on the table without a 24/7 AI employee.
          Adjust the inputs to match your business, and see your number update live.
        </p>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid lg:grid-cols-[1fr_400px] gap-6 items-start">

        {/* Form */}
        <div className="bg-white rounded-[20px] shadow-sm border border-[#e8e8ed]">

          {/* Step indicator */}
          <div className="px-6 pt-6 pb-5 border-b border-[#f0f0f5]">
            <div className="flex items-center gap-1">
              {STEPS.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setStep(i)}
                  className="flex items-center gap-2 group"
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors shrink-0 ${
                    i === step
                      ? 'bg-[#18b5d8] text-white'
                      : i < step
                      ? 'bg-[#18b5d8]/15 text-[#18b5d8]'
                      : 'bg-[#f0f0f5] text-[#b0b0b0]'
                  }`}>
                    {i < step ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : i + 1}
                  </div>
                  <span className={`text-[12px] font-medium hidden sm:block transition-colors ${
                    i === step ? 'text-[#1d1d1f]' : 'text-[#b0b0b0] group-hover:text-[#6e6e73]'
                  }`}>
                    {s}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div className="w-4 sm:w-8 h-px bg-[#e8e8ed] mx-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step content */}
          <div className="p-6 lg:p-8 space-y-8 min-h-[360px]">
            {step === 0 && (
              <>
                <div>
                  <h2 className="text-[20px] font-bold text-[#1d1d1f] mb-1">Tell us about your business</h2>
                  <p className="text-[14px] text-[#6e6e73]">
                    These two numbers drive the biggest part of your revenue estimate.
                  </p>
                </div>
                <Slider
                  label="Monthly leads or inquiries"
                  value={inputs.monthlyLeads}
                  min={5}
                  max={500}
                  step={5}
                  onChange={v => set('monthlyLeads')(v)}
                  display={`${inputs.monthlyLeads} leads/mo`}
                />
                <Slider
                  label="Average customer value"
                  value={inputs.dealValue}
                  min={100}
                  max={10000}
                  step={100}
                  onChange={v => set('dealValue')(v)}
                  display={usd(inputs.dealValue)}
                />
              </>
            )}

            {step === 1 && (
              <>
                <div>
                  <h2 className="text-[20px] font-bold text-[#1d1d1f] mb-1">Your current process</h2>
                  <p className="text-[14px] text-[#6e6e73]">
                    Honest inputs here produce the most accurate results.
                  </p>
                </div>
                <Slider
                  label="Current close rate"
                  value={inputs.closeRate}
                  min={5}
                  max={80}
                  step={1}
                  onChange={v => set('closeRate')(v)}
                  display={`${inputs.closeRate}%`}
                />
                <div className="space-y-2.5">
                  <span className="text-[14px] font-medium text-[#1d1d1f]">
                    How fast do you respond to new leads?
                  </span>
                  <div className="space-y-2 mt-1">
                    {RESPONSE_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => set('responseTime')(opt.value)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-[10px] border text-left transition-colors ${
                          inputs.responseTime === opt.value
                            ? 'border-[#18b5d8] bg-[#f0fbfd]'
                            : 'border-[#e8e8ed] hover:border-[#18b5d8]/40 bg-white'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          inputs.responseTime === opt.value ? 'border-[#18b5d8]' : 'border-[#d0d0d7]'
                        }`}>
                          {inputs.responseTime === opt.value && (
                            <div className="w-2 h-2 rounded-full bg-[#18b5d8]" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[14px] font-medium text-[#1d1d1f]">{opt.label}</span>
                          <span className="text-[12px] text-[#b0b0b0] ml-2">{opt.note}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                <Slider
                  label="After-hours inquiries (estimate)"
                  value={inputs.afterHoursPct}
                  min={0}
                  max={70}
                  step={5}
                  onChange={v => set('afterHoursPct')(v)}
                  display={`${inputs.afterHoursPct}%`}
                />
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <h2 className="text-[20px] font-bold text-[#1d1d1f] mb-1">Your team's time</h2>
                  <p className="text-[14px] text-[#6e6e73]">
                    We'll calculate the staff hours an AI employee can recover.
                  </p>
                </div>
                <Slider
                  label="Hours/week on calls, chats and follow-ups"
                  value={inputs.adminHoursPerWeek}
                  min={0}
                  max={40}
                  step={1}
                  onChange={v => set('adminHoursPerWeek')(v)}
                  display={`${inputs.adminHoursPerWeek} hrs/wk`}
                />
                <Slider
                  label="Average hourly staff cost"
                  value={inputs.hourlyCost}
                  min={10}
                  max={100}
                  step={5}
                  onChange={v => set('hourlyCost')(v)}
                  display={`${usd(inputs.hourlyCost)}/hr`}
                />
                <div className="bg-[#f5f5f7] rounded-[12px] px-4 py-4 border border-[#e8e8ed]">
                  <p className="text-[13px] font-semibold text-[#1d1d1f] mb-1">How it works</p>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                    Industry data shows AI employees handle approximately 60% of routine
                    inbound volume, including first-touch calls, chat responses, and
                    appointment follow-ups. The time savings value is calculated at your
                    hourly staff cost.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Step navigation */}
          <div className="px-6 lg:px-8 pb-6 flex items-center justify-between">
            <button
              onClick={() => setStep(s => Math.max(0, s - 1))}
              disabled={step === 0}
              className="text-[14px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                className="bg-[#18b5d8] text-white text-[14px] font-bold px-6 py-2.5 rounded-[10px] hover:bg-[#14a3c4] transition-colors flex items-center gap-1.5"
              >
                Next Step
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ) : (
              <Link
                href="/aiemployees"
                className="bg-[#07141a] text-white text-[14px] font-bold px-6 py-2.5 rounded-[10px] hover:bg-[#0d2030] transition-colors flex items-center gap-1.5"
              >
                See AI Employees
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Results panel, sticky on desktop */}
        <div className="lg:sticky lg:top-6">
          <ResultsPanel roi={roi} />
        </div>
      </div>

      {/* Methodology note */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-[16px] border border-[#e8e8ed] px-6 py-5">
          <p className="text-[12px] font-bold text-[#1d1d1f] mb-2">About these estimates</p>
          <p className="text-[12px] text-[#8a9ba8] leading-relaxed">
            After-hours capture assumes 70% of after-hours inquiries currently go unanswered, and that an AI employee
            converts approximately 45% of those previously missed contacts. Speed-to-lead lift is modeled on
            published data showing lead qualification rates drop sharply after the first few minutes.
            Time savings assume AI handles 60% of routine inbound volume. All figures are directional estimates
            intended to illustrate potential, not guaranteed outcomes.
          </p>
        </div>
      </div>
    </div>
  )
}
