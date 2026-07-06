import type { Metadata } from "next";
import Link from "next/link";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sharkbrandingsolutions.com/#organization",
      name: "Shark AI Solutions",
      legalName: "Shark Branding Solutions LLC",
      url: "https://sharkbrandingsolutions.com",
      logo: "https://sharkbrandingsolutions.com/logo.webp",
      description: "Shark AI Solutions helps regional and multi-location businesses get found and recommended by ChatGPT, Google AI Overviews, Perplexity, and Gemini. AI visibility and automation at scale.",
      foundingDate: "2022",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27251 Wesley Chapel Blvd., Suite B14 #805",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        postalCode: "33544",
        addressCountry: "US",
      },
      telephone: "+17275133955",
      email: "info@sharkbrandingsolutions.com",
      areaServed: [
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "City", name: "Tampa" },
        { "@type": "City", name: "Lutz" },
        { "@type": "City", name: "Land O Lakes" },
        { "@type": "City", name: "St. Petersburg" },
        { "@type": "City", name: "New Tampa" },
      ],
      sameAs: [
        "https://www.facebook.com/sharkbranding",
        "https://www.instagram.com/sharkbranding",
        "https://www.linkedin.com/company/sharkbranding",
        "https://www.youtube.com/@sharkbranding",
        "https://www.tiktok.com/@sharkbranding",
      ],
      member: [
        { "@id": "https://sharkbrandingsolutions.com/about#michelle" },
        { "@id": "https://sharkbrandingsolutions.com/about#josh" },
        { "@id": "https://sharkbrandingsolutions.com/about#tiffany" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://sharkbrandingsolutions.com/about#michelle",
      name: "Michelle Stanaland",
      givenName: "Michelle",
      familyName: "Stanaland",
      jobTitle: "Managing Partner and Founder",
      description: "Recognized marketing strategist and AI visibility expert serving businesses across Tampa Bay. Named one of the Top 15 Marketing Experts in Tampa Bay by Influence Digest in 2025.",
      worksFor: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      url: "https://sharkbrandingsolutions.com/about#michelle",
      knowsAbout: ["AI Visibility", "Local SEO", "GEO", "Marketing Strategy", "AI Employees", "Tampa Bay"],
      award: "Top 15 Marketing Experts in Tampa Bay, Influence Digest 2025",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      "@id": "https://sharkbrandingsolutions.com/about#josh",
      name: "Josh Stanaland",
      givenName: "Josh",
      familyName: "Stanaland",
      jobTitle: "Partner and Chief Technology Officer",
      description: "Digital growth strategist and technologist. Primary technical architect behind Shark AI Solutions' proprietary software and AI automation frameworks. Designs the backend systems powering the AI Visibility Toolkit and 24/7 AI employee receptionists for service businesses.",
      worksFor: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      url: "https://sharkbrandingsolutions.com/about#josh",
      knowsAbout: ["AI Automation", "Software Architecture", "Conversational AI", "Growth Strategy", "Conversion Analytics", "AI Employees"],
      hasCredential: "Former therapist with professional athletic organizations including the Jacksonville Jaguars",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "Person",
      "@id": "https://sharkbrandingsolutions.com/about#tiffany",
      name: "Tiffany Fancher",
      givenName: "Tiffany",
      familyName: "Fancher",
      jobTitle: "Chief Operating Officer",
      worksFor: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      url: "https://sharkbrandingsolutions.com/about#tiffany",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wesley Chapel",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://sharkbrandingsolutions.com/about",
      url: "https://sharkbrandingsolutions.com/about",
      name: "About Shark AI Solutions | AI Consulting in Tampa Bay",
      description: "Meet the team behind Shark AI Solutions. Michelle Stanaland, Managing Partner and Founder. Josh Stanaland, CTO. Tiffany Fancher, COO.",
      about: { "@id": "https://sharkbrandingsolutions.com/#organization" },
      mentions: [
        { "@id": "https://sharkbrandingsolutions.com/about#michelle" },
        { "@id": "https://sharkbrandingsolutions.com/about#josh" },
        { "@id": "https://sharkbrandingsolutions.com/about#tiffany" },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "About Shark AI Solutions | AI Consulting in Tampa Bay",
  description:
    "Meet the team behind Shark AI Solutions. Michelle Stanaland, Managing Partner and Founder, and the leadership driving AI strategy for Tampa Bay businesses.",
};

const values = [
  {
    n: "01",
    title: "Clarity over complexity",
    body: "We translate AI and marketing into plain strategy. No jargon. No fluff. Just what moves the needle.",
  },
  {
    n: "02",
    title: "Results, not reports",
    body: "We measure success by your ranking movement, visibility score, and the calls you receive, not activity metrics.",
  },
  {
    n: "03",
    title: "Local first",
    body: "We're based in Wesley Chapel. We know Tampa Bay. We understand what local buyers want and how they search.",
  },
  {
    n: "04",
    title: "Honest before anything",
    body: "Our free visibility report tells the truth, even if the truth is uncomfortable. That's where real progress starts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* ── Hero ── */}
      <section className="bg-white min-h-[50vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            About Us
          </p>
          <h1 className="display-hero text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            We make businesses
            <br />
            <span className="text-[#18b5d8]">impossible to ignore.</span>
          </h1>
          <p className="lead-airy text-[#333333] max-w-[540px] mx-auto" style={{ textWrap: "balance" }}>
            Shark AI Solutions was built on a simple belief: every great business deserves to be found by the right people, at the right moment, on every platform.
          </p>
        </div>
      </section>

      {/* ── Seen In, scrolling media strip ── */}
      <div className="bg-[#111] py-8 overflow-hidden border-y border-white/5">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/25 mb-6">As Seen In</p>
        <div
          className="flex min-w-max gap-14 whitespace-nowrap motion-safe:animate-[marquee_38s_linear_infinite]"
          aria-hidden="true"
        >
          {[
            { name: "NBC", style: "font-black" },
            { name: "ABC", style: "font-black" },
            { name: "CBS", style: "font-black" },
            { name: "FOX", style: "font-black" },
            { name: "The CW", style: "font-bold" },
            { name: "Telemundo", style: "font-bold italic" },
            { name: "The Morning Blend", style: "font-semibold" },
            { name: "Tampa Home Talk", style: "font-semibold" },
            { name: "102.5 The Bone", style: "font-bold" },
            { name: "The Business Journals", style: "font-semibold" },
            { name: "Creative Loafing Tampa Bay", style: "font-semibold" },
            { name: "Yahoo! News", style: "font-bold" },
            { name: "NBC", style: "font-black" },
            { name: "ABC", style: "font-black" },
            { name: "CBS", style: "font-black" },
            { name: "FOX", style: "font-black" },
            { name: "The CW", style: "font-bold" },
            { name: "Telemundo", style: "font-bold italic" },
            { name: "The Morning Blend", style: "font-semibold" },
            { name: "Tampa Home Talk", style: "font-semibold" },
            { name: "102.5 The Bone", style: "font-bold" },
            { name: "The Business Journals", style: "font-semibold" },
            { name: "Creative Loafing Tampa Bay", style: "font-semibold" },
            { name: "Yahoo! News", style: "font-bold" },
          ].map((logo, i) => (
            <span key={i} className={`text-[15px] tracking-wide text-white/40 uppercase ${logo.style}`}>
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Michelle ── */}
      <section id="michelle" className="bg-[#0a0a0a] px-6 py-14 md:py-24">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">Founder</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-white/50">Leadership</span>
            </div>
            <h2 className="display-lg text-white mb-3">Michelle Stanaland</h2>
            <p className="text-[17px] text-white/40 mb-8">Managing Partner &amp; Founder</p>
            <div className="inline-flex items-center gap-3 bg-white/6 border border-white/10 rounded-[12px] px-5 py-3">
              <span className="text-[#18b5d8] text-[18px]" aria-hidden="true">★</span>
              <span className="text-[14px] font-semibold text-white">Top 15 Marketing Expert in Tampa Bay</span>
              <span className="text-[12px] text-white/35">Influence Digest, 2025</span>
            </div>
          </div>
          <div className="space-y-6">
            <p className="body-copy text-white/60 leading-relaxed">
              Michelle Stanaland is a recognized marketing strategist and AI visibility expert serving businesses across Tampa Bay. In 2025, she was named one of the{" "}
              <strong className="font-semibold text-white">Top 15 Marketing Experts in Tampa Bay</strong>{" "}
              by Influence Digest, a recognition of her commitment to results over rhetoric.
            </p>
            <p className="body-copy text-white/60 leading-relaxed">
              Before founding Shark AI Solutions, Michelle observed a consistent pattern: talented, hardworking business owners were losing customers not because of their product or service, but because they couldn&rsquo;t be found. As AI search platforms changed how buyers discover businesses, the gap between visible and invisible grew wider, and she built a firm to close it.
            </p>
            <p className="body-copy text-white/60 leading-relaxed">
              Based in Wesley Chapel, Michelle works with regional and multi-location businesses across the country, bringing enterprise-level AI visibility strategy to organizations ready to own their market.
            </p>
          </div>
        </div>
      </section>

      {/* ── Josh ── */}
      <section id="josh" className="bg-[#0a0a0a] px-6 py-14 md:py-24 border-t border-white/5">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">Technology</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-white/50">Leadership</span>
            </div>
            <h2 className="display-lg text-white mb-3">Josh Stanaland</h2>
            <p className="text-[17px] text-white/40 mb-8">Partner &amp; CTO</p>
            <div className="space-y-3">
              {[
                { label: 'Technical Architecture', desc: 'AI Visibility Toolkit and automation frameworks' },
                { label: 'Growth Strategy', desc: 'Conversion analytics and lead infrastructure' },
                { label: 'Community', desc: 'North Tampa Bay Chamber of Commerce' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18b5d8] mt-2 shrink-0" />
                  <div>
                    <span className="text-[13px] font-semibold text-white">{item.label}</span>
                    <span className="text-[13px] text-white/40">: {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <p className="body-copy text-white/60 leading-relaxed">
              Josh Stanaland is a digital growth strategist, technologist, and the primary technical architect behind Shark AI Solutions&rsquo; proprietary software and AI automation frameworks. As CTO, he designs the backend systems powering the firm&rsquo;s AI Visibility Toolkit, building tailored AI employees that act as fully automated, 24/7 digital receptionists for service businesses, not off-the-shelf chatbot templates.
            </p>
            <p className="body-copy text-white/60 leading-relaxed">
              At the firm&rsquo;s live regional hackathons, Josh creates real-time simulated versions of attendees&rsquo; existing business websites, embedding custom AI employees to demonstrate live, without prior setup, how automated systems handle real customer inquiries from the first interaction.
            </p>
            <p className="body-copy text-white/60 leading-relaxed">
              Outside of engineering, he works directly with clients as an enterprise account manager, bridging code and execution to track conversion analytics, eliminate marketing waste, and sharpen lead-generation infrastructure. Before building AI frameworks, Josh spent nearly a decade in high-performance wellness and sports, including work with the Jacksonville Jaguars, before transitioning into sales, operations, and corporate marketing strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tiffany ── */}
      <section id="tiffany" className="bg-[#0a0a0a] px-6 py-14 md:py-24 border-t border-white/5">
        <div className="max-w-[980px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase">Operations</span>
              <span className="w-px h-4 bg-white/20" aria-hidden="true" />
              <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-white/50">Leadership</span>
            </div>
            <h2 className="display-lg text-white mb-3">Tiffany Fancher</h2>
            <p className="text-[17px] text-white/40 mb-8">Chief Operating Officer</p>
          </div>
          <div className="space-y-6">
            <p className="body-copy text-white/60 leading-relaxed">
              Bio and credentials coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white px-6 py-14 md:py-24 border-t border-[#e8e8ed]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">How We Work</p>
            <h2 className="display-lg text-[#0a0a0a]" style={{ textWrap: "balance" }}>
              Principles we never compromise.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v.n} className="bg-white rounded-[20px] p-8">
                <span className="font-mono text-[#18b5d8] text-[11px] tracking-[0.22em] uppercase block mb-5">{v.n}</span>
                <h3 className="text-[21px] font-semibold text-[#0a0a0a] mb-3">{v.title}</h3>
                <p className="body-copy text-[#333333]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service area ── */}
      <section className="bg-white px-6 py-14 md:py-24 border-t border-[#e8e8ed]">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-4">Where We Serve</p>
          <h2 className="display-lg text-[#0a0a0a] mb-6" style={{ textWrap: "balance" }}>
            Rooted in Tampa Bay.
          </h2>
          <p className="lead-airy text-[#333333] mb-10" style={{ textWrap: "balance" }}>
            We serve businesses across Wesley Chapel, Lutz, Land O&rsquo; Lakes, St. Petersburg, and the broader Tampa Bay region, in person and virtually.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Wesley Chapel", "Lutz", "Land O\u2019 Lakes", "St. Petersburg", "Tampa", "Virtual"].map((city) => (
              <span
                key={city}
                className="bg-[#f5f5f7] border border-[#e0e0e0] rounded-full px-5 py-2 text-[14px] text-[#333333] font-semibold"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 md:py-28 px-6 text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#18b5d8] mb-6">Work with us</p>
          <h2 className="display-lg text-white mb-6" style={{ textWrap: "balance" }}>
            Ready to work together?
          </h2>
          <p className="lead-airy text-white/50 mb-12">
            Start with a free visibility report or reach out directly. We&rsquo;ll make it simple.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-report"
              className="btn-press inline-block bg-[#18b5d8] text-white text-[17px] font-semibold rounded-full px-[32px] py-[15px] hover:bg-[#1ec8ee] motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18b5d8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              Get My Free AI Audit
            </Link>
            <a
              href="tel:+17275133955"
              className="btn-press inline-block text-white text-[17px] border border-white/20 rounded-full px-[28px] py-[14px] hover:border-white/50 motion-safe:transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] [touch-action:manipulation]"
            >
              (727) 513-3955
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
