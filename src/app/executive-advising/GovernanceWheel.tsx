const CX = 300
const CY = 300
const R_INNER = 122
const R_OUTER = 222
const R_MID = (R_INNER + R_OUTER) / 2
const PAD = 2.4
const SEG = 360 / 7

interface Segment {
  lines: string[]
  outer: string
  fill: string
  text: string
}

const SEGMENTS: Segment[] = [
  { lines: ['Organization –', 'Roles and', 'Responsibilities'], outer: 'Trustworthiness', fill: '#18b5d8', text: '#07141a' },
  { lines: ['Operating', 'Model'], outer: 'Responsibility', fill: '#0f7c99', text: '#ffffff' },
  { lines: ['Risk &', 'Compliance'], outer: 'Privacy', fill: '#0a4a5c', text: '#ffffff' },
  { lines: ['Policies/', 'Procedures/', 'Standards'], outer: 'Safety & Security', fill: '#16a5c6', text: '#07141a' },
  { lines: ['Model', 'Governance'], outer: 'Fairness & Bias Detection', fill: '#0d637c', text: '#ffffff' },
  { lines: ['Tools &', 'Technologies'], outer: 'Explainability & Transparency', fill: '#48cbe8', text: '#07141a' },
  { lines: ['Monitoring'], outer: 'Accountability', fill: '#0b3947', text: '#ffffff' },
]

function pt(r: number, angleDeg: number): [number, number] {
  const a = ((angleDeg - 90) * Math.PI) / 180
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)]
}

const f = (n: number) => n.toFixed(2)

function sectorPath(a0: number, a1: number): string {
  const [x0, y0] = pt(R_OUTER, a0)
  const [x1, y1] = pt(R_OUTER, a1)
  const [x2, y2] = pt(R_INNER, a1)
  const [x3, y3] = pt(R_INNER, a0)
  return `M ${f(x0)} ${f(y0)} A ${R_OUTER} ${R_OUTER} 0 0 1 ${f(x1)} ${f(y1)} L ${f(x2)} ${f(y2)} A ${R_INNER} ${R_INNER} 0 0 0 ${f(x3)} ${f(y3)} Z`
}

// Bottom-half labels run counterclockwise so the text stays upright.
function labelArc(a0: number, a1: number, flip: boolean): string {
  const r = flip ? 264 : 242
  const [x0, y0] = pt(r, flip ? a1 : a0)
  const [x1, y1] = pt(r, flip ? a0 : a1)
  return `M ${f(x0)} ${f(y0)} A ${r} ${r} 0 0 ${flip ? 0 : 1} ${f(x1)} ${f(y1)}`
}

export default function GovernanceWheel() {
  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-label="AI Governance framework wheel: Organization roles and responsibilities, operating model, risk and compliance, policies procedures and standards, model governance, tools and technologies, and monitoring, surrounded by the principles of trustworthiness, responsibility, privacy, safety and security, fairness and bias detection, explainability and transparency, and accountability."
      className="w-full h-auto max-w-[560px] mx-auto"
    >
      <circle cx={CX} cy={CY} r={286} fill="rgba(24,181,216,0.05)" />
      <circle cx={CX} cy={CY} r={252} fill="none" stroke="rgba(24,181,216,0.12)" strokeWidth={1} />

      {SEGMENTS.map((s, i) => {
        // Segment 0 is centered at 12 o'clock, matching the reference layout.
        const mid = i * SEG
        const start = mid - SEG / 2 + PAD
        const end = mid + SEG / 2 - PAD
        const flip = mid > 95 && mid < 265
        const [tx, ty] = pt(R_MID, mid)
        const lineH = 19
        const firstDy = -((s.lines.length - 1) / 2) * lineH

        return (
          <g key={i}>
            <path d={sectorPath(start, end)} fill={s.fill} />
            <text
              x={tx}
              y={ty}
              textAnchor="middle"
              fontSize={15}
              fontWeight={600}
              fill={s.text}
              fontFamily="inherit"
            >
              {s.lines.map((line, j) => (
                <tspan key={j} x={tx} dy={j === 0 ? firstDy + 5 : lineH}>
                  {line}
                </tspan>
              ))}
            </text>
            <path id={`gw-arc-${i}`} d={labelArc(start - 6, end + 6, flip)} fill="none" />
            <text fontSize={13.5} fontWeight={600} fill="#5ad4ee" letterSpacing="0.02em" fontFamily="inherit">
              <textPath href={`#gw-arc-${i}`} startOffset="50%" textAnchor="middle">
                {s.outer}
              </textPath>
            </text>
          </g>
        )
      })}

      <circle cx={CX} cy={CY} r={112} fill="#091c24" stroke="rgba(24,181,216,0.4)" strokeWidth={2} />
      <text
        x={CX}
        y={CY + 9}
        textAnchor="middle"
        fontSize={27}
        fontWeight={700}
        fill="#ffffff"
        fontFamily="inherit"
      >
        AI Governance
      </text>
    </svg>
  )
}
