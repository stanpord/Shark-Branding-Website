import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Integrations | Shark AI Solutions",
  description:
    "Connect the tools you already use. Shark AI Solutions integrates with your CRM, scheduling software, social platforms, and business management tools to keep everything in sync.",
  alternates: {
    canonical: "https://sharkbrandingsolutions.com/integrations",
  },
  openGraph: {
    title: "Integrations | Shark AI Solutions",
    description:
      "Connect your CRM, scheduling software, social platforms, and business tools to our AI platform. 50+ integrations available.",
    url: "https://sharkbrandingsolutions.com/integrations",
  },
};

const CDN = "https://cdn-bjmjf.nitrocdn.com/gsSJVsHgkwexdOuGJbPveYehDehaVtlN/assets/images/optimized/rev-9db17f0/www.vendasta.com/wp-content/uploads/";

type Category = "All" | "Auto Shop" | "CRM & Sales" | "Home Services" | "Pet Care" | "Social" | "Analytics" | "Payments" | "Medical";

interface Integration {
  name: string;
  img: string;
  category: Category;
  description: string;
}

const integrations: Integration[] = [
  /* Auto Shop */
  { name: "CCC ONE", img: CDN + "2026/02/CCC-ONE-integration-img-305x.webp", category: "Auto Shop", description: "Leading estimating and shop management software for collision repair." },
  { name: "Mitchell1", img: CDN + "2026/03/Mitchell1-integration-img-305x.webp", category: "Auto Shop", description: "Auto repair shop management software used by thousands of independent shops." },
  { name: "Napa Tracs", img: CDN + "2026/03/Napa-Tracs-integration-img-305x.webp", category: "Auto Shop", description: "Shop management system built for NAPA AutoCare Centers." },
  { name: "Napa Tracs Enterprise", img: CDN + "2026/03/Napa-Tracs-integration-img-1-305x.webp", category: "Auto Shop", description: "Enterprise-level shop management for larger NAPA operations." },
  { name: "Protractor", img: CDN + "2026/03/Protractor-integration-img-305x.webp", category: "Auto Shop", description: "Automotive shop management and DMS platform." },
  { name: "RO Writer", img: CDN + "2026/03/RO-writer-integration-img-305x.webp", category: "Auto Shop", description: "Repair order management software for auto service businesses." },
  { name: "Shop Boss", img: CDN + "2026/03/Shop-Boss-integration-img-305x.webp", category: "Auto Shop", description: "Cloud-based auto repair shop management software." },
  { name: "Shopmonkey", img: CDN + "2026/03/Shopmonkey-integration-img-305x.webp", category: "Auto Shop", description: "Modern auto shop management platform built for efficiency." },
  { name: "Shop-Ware", img: CDN + "2026/03/Shopware-integration-img-305x.webp", category: "Auto Shop", description: "Digital vehicle inspection and shop management software." },
  { name: "Tekmetric", img: CDN + "2026/03/Tekmetric-integration-img-305x.webp", category: "Auto Shop", description: "Auto repair software with real-time shop metrics and reporting." },

  /* CRM & Sales */
  { name: "Salesforce", img: CDN + "2026/03/Salesforce-integration-img-305x.webp", category: "CRM & Sales", description: "The world's leading CRM platform for managing customer relationships." },
  { name: "Autotask", img: CDN + "2026/02/Autotask-integration-img-305x.webp", category: "CRM & Sales", description: "Professional services automation PSA tool for IT businesses." },
  { name: "Clio", img: CDN + "2026/02/Clio-integration-img-305x.webp", category: "CRM & Sales", description: "Legal practice management software for law firms." },
  { name: "JobNimbus", img: CDN + "2026/03/Job-Nimbus-305x.webp", category: "CRM & Sales", description: "CRM and project management for contractors and roofers." },
  { name: "Kixie", img: CDN + "2026/03/Kixie-integration-img-305x.webp", category: "CRM & Sales", description: "Sales engagement platform with power dialer and SMS." },
  { name: "ServiceMonster", img: CDN + "2026/03/Sales-Monster-integration-img-305x.webp", category: "CRM & Sales", description: "Business management software for cleaning and field service companies." },
  { name: "RB Control Systems", img: CDN + "2026/03/RB-control-systems-integration-img-305x.webp", category: "CRM & Sales", description: "Management software for fitness and wellness studios." },

  /* Home Services */
  { name: "Housecall Pro", img: CDN + "2026/02/Housecall-pro-integration-img-305x.webp", category: "Home Services", description: "Field service management software for home service professionals." },
  { name: "FieldEdge", img: CDN + "2026/02/Field-Edge-integration-img-2-305x.webp", category: "Home Services", description: "Service management software for HVAC, plumbing, and electrical businesses." },
  { name: "Jobber", img: CDN + "2026/03/Jobber-integration-img-305x.webp", category: "Home Services", description: "Business management platform for home service companies." },
  { name: "Service Fusion", img: CDN + "2026/03/Service-Fusion-integration-img-305x.webp", category: "Home Services", description: "Field service management software for home service contractors." },
  { name: "ServiceTitan", img: CDN + "2026/03/Service-Titan-integration-img-305x.webp", category: "Home Services", description: "Business management platform for trades and home services." },
  { name: "Neighborly", img: CDN + "2026/03/Neighborly-integration-img-305x.webp", category: "Home Services", description: "Franchise system for home service brands." },

  /* Pet Care */
  { name: "Gingr", img: CDN + "2026/02/Gingr-integration-img-305x.webp", category: "Pet Care", description: "Dog daycare and kennel management software." },
  { name: "Paw Loyalty", img: CDN + "2026/03/Paw-Loyalty-integration-img-305x.webp", category: "Pet Care", description: "Loyalty and rewards platform for pet businesses." },
  { name: "Paw Partner", img: CDN + "2026/03/Paw-Partner-integration-img-305x.webp", category: "Pet Care", description: "Pet boarding and grooming management software." },
  { name: "PetExec", img: CDN + "2026/03/Pet-Exec-integration-img-305x.webp", category: "Pet Care", description: "Web-based management software for pet care facilities." },
  { name: "Pet Resort Pro", img: CDN + "2026/03/Pet-Resort-Pro-integration-img-305x.webp", category: "Pet Care", description: "Management software for pet hotels and boarding facilities." },

  /* Social */
  { name: "Facebook", img: CDN + "2026/02/Facebook-integration-img-305x.webp", category: "Social", description: "Sync reviews, messages, and social activity from Facebook Pages." },
  { name: "Instagram", img: CDN + "2026/03/Instagram-integration-img-305x.webp", category: "Social", description: "Manage Instagram presence and engagement from one dashboard." },
  { name: "LinkedIn Ads", img: CDN + "2026/03/Linkedin-Ads-integration-img-305x.webp", category: "Social", description: "Track and manage LinkedIn advertising performance." },
  { name: "Google Meet", img: CDN + "2026/02/Google-Meet-integration-img-305x.webp", category: "Social", description: "Video meeting integration for seamless client communication." },
  { name: "Microsoft Outlook", img: CDN + "2026/03/Microsoft-outlook-integration-img-305x.webp", category: "Social", description: "Sync email and calendar with your business communications." },
  { name: "Zoom", img: CDN + "2026/03/Zoom-integration-img-305x.webp", category: "Social", description: "Connect Zoom meetings to your client workflow." },
  { name: "Gmail", img: CDN + "2023/07/Gmail-integration-img.webp", category: "Social", description: "Sync Gmail for two-way client messaging and follow-up automation." },
  { name: "Microsoft Teams", img: CDN + "2023/07/Microsoft-teams-integration-img.webp", category: "Social", description: "Bring team collaboration into your marketing workflow." },

  /* Analytics */
  { name: "Google Business Profile", img: CDN + "2026/02/Google-Business-Profile-integration-img-305x.webp", category: "Analytics", description: "Manage your GBP listings, reviews, and Q&A from one place." },
  { name: "Google Search Console", img: CDN + "2026/02/Google-Search-Console-integration-img-305x.webp", category: "Analytics", description: "Connect GSC data to monitor search performance alongside local SEO." },
  { name: "GA4", img: CDN + "2026/02/GA4-integration-img-305x.webp", category: "Analytics", description: "Pull Google Analytics 4 data into your reporting dashboard." },
  { name: "Apple Business Connect", img: CDN + "2026/02/Apple-Business-Connect-integration-img-305x.webp", category: "Analytics", description: "Manage your business presence across Apple Maps and services." },

  /* Payments */
  { name: "QuickBooks Desktop", img: CDN + "2026/03/Quickbooks-Desktop-integration-img-305x.webp", category: "Payments", description: "Sync billing and invoicing with QuickBooks Desktop." },
  { name: "QuickBooks Online", img: CDN + "2026/03/Quickbooks-Online-Personal-integration-img-1-305x.webp", category: "Payments", description: "Connect QuickBooks Online for automated billing and reconciliation." },
  { name: "Shopify", img: CDN + "2026/03/Shopify-integration-img-305x.webp", category: "Payments", description: "Sync Shopify store data and customer reviews." },
  { name: "Lightspeed", img: CDN + "2026/03/Lightspeed-integration-img-305x.webp", category: "Payments", description: "POS and retail management platform integration." },
  { name: "CSV Upload via FTP", img: CDN + "2026/02/CSV-Upload-via-FTP-integration-img-1-305x.webp", category: "Payments", description: "Import customer and transaction data via secure FTP file transfers." },

  /* Medical */
  { name: "Dentrix", img: CDN + "2026/02/Dentrix-integration-img-305x.webp", category: "Medical", description: "Practice management software for dental offices." },
  { name: "Mindbody", img: CDN + "2026/03/Mindbody-integration-img-305x.webp", category: "Medical", description: "Business management software for fitness, wellness, and beauty studios." },
  { name: "Broadly", img: CDN + "2026/02/Broadly-integration-img-305x.webp", category: "Medical", description: "Patient communication and review management for healthcare practices." },
];

const categories: Category[] = ["All", "Auto Shop", "CRM & Sales", "Home Services", "Pet Care", "Social", "Analytics", "Payments", "Medical"];

const categoryColors: Record<Category, string> = {
  "All": "#18b5d8",
  "Auto Shop": "#f59e0b",
  "CRM & Sales": "#6366f1",
  "Home Services": "#10b981",
  "Pet Care": "#f472b6",
  "Social": "#3b82f6",
  "Analytics": "#18b5d8",
  "Payments": "#8b5cf6",
  "Medical": "#ef4444",
};

const benefits = [
  {
    icon: "⚡",
    title: "Real-time data sync",
    body: "Customer records, review triggers, and billing data flow automatically between your existing tools and our platform. No double entry.",
  },
  {
    icon: "🔒",
    title: "Secure connections",
    body: "All integrations use OAuth 2.0 or API key authentication with encrypted data transfer. Your data stays yours.",
  },
  {
    icon: "🔧",
    title: "Set up in minutes",
    body: "Most integrations connect with a single click or login. Our onboarding team handles anything more complex.",
  },
  {
    icon: "📊",
    title: "Unified reporting",
    body: "Data from all your connected tools flows into one reporting dashboard. See the full picture without switching apps.",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#07141a] py-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-8">
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[#18b5d8] text-[13px] font-bold tracking-[2px] uppercase mb-5">
              Integrations
            </span>
            <h1 className="text-[38px] sm:text-[50px] lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textWrap: "balance" }}>
              Connect the tools your business already runs on
            </h1>
            <p className="text-[#8d9aab] text-[18px] leading-relaxed mb-8 max-w-[520px]">
              Our platform connects with your CRM, scheduling software, POS system, and more. Pull customer data in, push results out, and keep everything in sync without manual work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Book a strategy call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-colors duration-150"
              >
                Explore the platform
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-0 w-full lg:max-w-[560px]">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src={CDN + "2026/02/Integration-homepage-hero-img-480x.webp"}
                alt="Platform integrations dashboard showing connected business tools"
                width={480}
                height={360}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-[#f5f5f7] border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#1d1d1f] tracking-tight text-center mb-4">
            Why integrations matter
          </h2>
          <p className="text-[17px] text-[#6e6e73] text-center max-w-[520px] mx-auto mb-14">
            Disconnected tools mean missed opportunities. Our integrations close the loop between your business data and your marketing results.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-[20px] border border-[#e5e5ea] p-7 flex flex-col gap-4">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="text-[17px] font-extrabold text-[#1d1d1f]">{b.title}</h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY PILLS */}
      <section className="py-12 px-6 border-b border-[#e5e5ea]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold border"
                style={{
                  borderColor: categoryColors[cat],
                  color: categoryColors[cat],
                  backgroundColor: categoryColors[cat] + "14",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#86868b] mt-4">
            {integrations.length}+ integrations available
          </p>
        </div>
      </section>

      {/* INTEGRATION GRID, grouped by category */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {(categories.filter(c => c !== "All") as Exclude<Category, "All">[]).map((cat) => {
            const items = integrations.filter(i => i.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-8">
                  <h2 className="text-[22px] font-extrabold text-[#1d1d1f]">{cat}</h2>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: categoryColors[cat] + "18", color: categoryColors[cat] }}
                  >
                    {items.length} integrations
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {items.map((integration) => (
                    <div
                      key={integration.name}
                      className="bg-white rounded-[16px] border border-[#e5e5ea] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                    >
                      <div className="relative aspect-[305/200]">
                        <Image
                          src={integration.img}
                          alt={`${integration.name} integration`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col gap-1">
                        <p className="text-[14px] font-bold text-[#1d1d1f] leading-snug">{integration.name}</p>
                        <p className="text-[12px] text-[#86868b] leading-snug">{integration.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#07141a] py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle at 65% 45%, #18b5d8 0%, transparent 55%)" }}
        />
        <div className="max-w-[760px] mx-auto text-center relative">
          <h2
            className="text-[32px] sm:text-[46px] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            style={{ textWrap: "balance" }}
          >
            Don't see your tool? We'll build the connection.
          </h2>
          <p className="text-[#8d9aab] text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
            We regularly add new integrations based on client needs. Tell us what you use and we'll tell you how we can connect it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#18b5d8] hover:bg-[#14a2c2] text-white font-bold text-[16px] px-10 py-5 rounded-full transition-colors duration-150"
          >
            Request an integration
          </Link>
        </div>
      </section>

    </div>
  );
}
