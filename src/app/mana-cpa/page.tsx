import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MANA CPA Services | Delaware & Florida",
  description:
    "A CPA firm that partners with you for your success. Individual, small business, and corporate accounting and tax services in Delaware and Florida.",
};

const NAV = "#0c1829";
const NAVY = "#0c1829";
const INK = "#1a2b3c";
const CRIMSON = "#b21118";
const CREAM = "#f4ede3";
const MUTED = "rgba(244,237,227,0.55)";
const MUTED_STRONG = "rgba(244,237,227,0.75)";

export default function ManaCpaPage() {
  return (
    <div
      className={playfair.variable}
      style={{ background: NAVY, fontFamily: "system-ui, -apple-system, sans-serif" }}
    >
      {/* Announcement bar */}
      <div
        style={{
          background: CRIMSON,
          padding: "10px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
          AICPA Member &nbsp;·&nbsp; Delaware &amp; Florida
        </span>
        <a
          href="tel:3023103719"
          style={{ color: "white", fontWeight: 700, textDecoration: "none" }}
        >
          (302) 310-3719
        </a>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "92vh",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Left — headline */}
        <div
          style={{
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              color: CRIMSON,
              fontSize: "15px",
              marginBottom: "36px",
              letterSpacing: "0.02em",
            }}
          >
            MANA CPA Services
          </p>

          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(38px, 4.5vw, 68px)",
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "40px",
              maxWidth: "560px",
            }}
          >
            Financial clarity is the foundation of success.
          </h1>

          <div
            style={{
              width: "48px",
              height: "2px",
              background: CRIMSON,
              marginBottom: "44px",
            }}
          />

          <a
            href="https://calendly.com/bbhattcpa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: CRIMSON,
              color: "white",
              padding: "15px 40px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Right — tagline + stats */}
        <div
          style={{
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.2vw, 32px)",
                color: MUTED_STRONG,
                lineHeight: 1.55,
                marginBottom: "36px",
              }}
            >
              &ldquo;A CPA firm that Partners with you for your Success.&rdquo;
            </p>
            <p
              style={{
                fontSize: "15px",
                color: MUTED,
                lineHeight: 1.85,
                maxWidth: "400px",
              }}
            >
              Whether you&rsquo;re an individual navigating personal taxes, a
              small business owner seeking sustainable growth, or a corporation
              managing complex operations — our team guides you with precision,
              integrity, and genuine insight.
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.09)",
              paddingTop: "32px",
              display: "flex",
              gap: "48px",
            }}
          >
            {[
              { value: "DE + FL", label: "Service Areas" },
              { value: "AICPA", label: "Credential" },
              { value: "3 Tiers", label: "Client Types" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: CRIMSON,
                    marginBottom: "5px",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(244,237,227,0.38)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr 1.6fr",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Individual & Small Business */}
        <div
          style={{
            background: INK,
            padding: "64px 56px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "28px",
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.25,
              marginBottom: "6px",
            }}
          >
            Individual &amp; Small Business
          </h2>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(244,237,227,0.38)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "44px",
            }}
          >
            Tax Strategy · Accounting · Advisory
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "44px" }}>
            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: CRIMSON,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                Tax Strategy
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "14px",
                  color: MUTED,
                  lineHeight: 2.1,
                }}
              >
                <li>Entity selection &amp; registration</li>
                <li>Strategic tax planning</li>
                <li>Tax preparation &amp; compliance</li>
                <li>Estimated quarterly taxes</li>
                <li>Retirement planning</li>
                <li>Personal finance strategy</li>
              </ul>
            </div>
            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: CRIMSON,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                Accounting
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "14px",
                  color: MUTED,
                  lineHeight: 2.1,
                }}
              >
                <li>Bookkeeping</li>
                <li>Payroll management</li>
                <li>Financial statements</li>
                <li>Cash &amp; accrual reporting</li>
                <li>Lender &amp; stakeholder reports</li>
                <li>Financial reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corporate */}
        <div
          style={{
            background: NAVY,
            padding: "64px 44px",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "28px",
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.25,
              marginBottom: "6px",
            }}
          >
            Corporate
          </h2>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(244,237,227,0.38)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "44px",
            }}
          >
            Controllership · Consulting · Reporting
          </p>

          {[
            {
              label: "Controllership",
              items: [
                "Interim controller roles",
                "Close process management",
                "Budgeting & forecasting",
                "Group reporting",
                "Accounting policies",
              ],
            },
            {
              label: "Consulting",
              items: [
                "Technical accounting analysis",
                "Audit readiness",
                "M&A transaction support",
                "On-call advisory",
              ],
            },
            {
              label: "Reporting",
              items: ["Internal & external reporting", "Financial statements"],
            },
          ].map((group, i) => (
            <div key={group.label} style={{ marginBottom: i < 2 ? "36px" : 0 }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: CRIMSON,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                {group.label}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "13px",
                  color: MUTED,
                  lineHeight: 2.0,
                }}
              >
                {group.items.map((item) => (
                  <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA tile */}
        <div
          style={{
            background: CRIMSON,
            padding: "64px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "24px",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              Ready to get started?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                marginBottom: "36px",
              }}
            >
              Schedule a consultation or reach us directly. We respond within
              one business day.
            </p>
            <a
              href="https://calendly.com/bbhattcpa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "white",
                color: CRIMSON,
                padding: "14px 20px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
                marginBottom: "14px",
              }}
            >
              Book an Appointment
            </a>
            <a
              href="mailto:accounting@manacpaservices.com"
              style={{
                display: "block",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                padding: "13px 20px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Send a Message
            </a>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.22)",
              paddingTop: "28px",
            }}
          >
            <a
              href="tel:3023103719"
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
                fontFamily: "var(--font-playfair)",
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "6px",
              }}
            >
              (302) 310-3719
            </a>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px" }}>
              accounting@manacpaservices.com
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST + TESTIMONIALS ──────────────────────────────────── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 3fr",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          minHeight: "420px",
        }}
      >
        {/* Left — commitment */}
        <div
          style={{
            background: CRIMSON,
            padding: "64px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <div style={{ marginBottom: "40px" }}>
              {["Precision.", "Integrity.", "Insight."].map((word) => (
                <p
                  key={word}
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(32px, 3.5vw, 48px)",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {word}
                </p>
              ))}
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                maxWidth: "300px",
              }}
            >
              We build long-term relationships. Your success is the only metric
              that matters.
            </p>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.22)",
              paddingTop: "28px",
            }}
          >
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "8px",
              }}
            >
              Member
            </p>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "22px",
                fontWeight: 700,
                color: "white",
                marginBottom: "4px",
              }}
            >
              AICPA
            </p>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
              American Institute of Certified Public Accountants
            </p>
          </div>
        </div>

        {/* Right — testimonials */}
        <div
          style={{
            background: CREAM,
            padding: "64px 60px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: CRIMSON,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "44px",
            }}
          >
            What Our Clients Say
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "40px",
            }}
          >
            {[
              {
                quote:
                  "Tax preparation was a pleasure, not a nightmare. Meg is competent, friendly, and incredibly easy to work with.",
                name: "Alain Gros",
              },
              {
                quote:
                  "Exceptional, professional, and knowledgeable tax advice for my small business and personal filing — for years.",
                name: "Ryan Leh",
              },
              {
                quote:
                  "Solved a complex multi-year problem with great diligence. Collaborative, responsive, and genuinely educating.",
                name: "Pawan Trivedi",
              },
            ].map((t) => (
              <div key={t.name}>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "52px",
                    color: CRIMSON,
                    lineHeight: 1,
                    marginBottom: "8px",
                    opacity: 0.35,
                  }}
                >
                  &ldquo;
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontSize: "15px",
                    color: "#1e2d40",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {t.quote}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: CRIMSON,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  &mdash; {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER BAR ────────────────────────────────────────────── */}
      <footer
        style={{
          background: NAVY,
          padding: "36px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "18px",
              fontWeight: 700,
              color: CREAM,
              marginBottom: "4px",
            }}
          >
            MANA CPA Services
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(244,237,227,0.38)",
              letterSpacing: "0.08em",
            }}
          >
            Delaware &middot; Florida
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "48px",
            fontSize: "13px",
            color: "rgba(244,237,227,0.55)",
          }}
        >
          <a
            href="tel:3023103719"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            (302) 310-3719
          </a>
          <span>accounting@manacpaservices.com</span>
          <a
            href="https://calendly.com/bbhattcpa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: CRIMSON,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Book a Consultation &rarr;
          </a>
        </div>

        <p
          style={{
            fontSize: "11px",
            color: "rgba(244,237,227,0.22)",
          }}
        >
          &copy; {new Date().getFullYear()} MANA CPA Services
        </p>
      </footer>
    </div>
  );
}
