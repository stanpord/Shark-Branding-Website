import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shark Branding Solutions",
  description: "Privacy Policy for Shark Branding Solutions. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen px-6 pt-28 pb-24">
      <div className="max-w-[720px] mx-auto">
        <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0a0a0a] mb-4 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-[15px] text-[#7a7a7a] mb-12">
          Last updated: June 1, 2025
        </p>

        <div className="prose-section space-y-10 text-[17px] text-[#333333] leading-relaxed">

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">1. Who We Are</h2>
            <p>
              Shark Branding Solutions ("we," "us," or "our") is an AI Visibility and Branding firm based in Wesley Chapel, FL, serving businesses across the Tampa Bay region. Our website is sharkbrandingsolutions.com. You can reach us at{" "}
              <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                info@sharkbrandingsolutions.com
              </a>{" "}
              or by calling{" "}
              <a href="tel:+17275133955" className="text-[#18b5d8] underline">
                (727) 513-3955
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number when you fill out a contact or inquiry form on our website.</li>
              <li>Phone numbers collected for the purpose of sending SMS messages. By providing your phone number and consenting, you may receive transactional messages (such as appointment reminders, service updates, and account notifications) and, if separately consented to, promotional messages (such as special offers and business updates).</li>
              <li>Business information you share when requesting a free visibility report or consulting services.</li>
              <li>Usage data such as pages visited, time on site, and referring URLs, collected automatically via analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide the services you requested.</li>
              <li>To send SMS text messages you have consented to receive, including appointment reminders, service updates, and, where separately consented, promotional messages.</li>
              <li>To improve our website and services.</li>
              <li>To send occasional email updates if you have opted in.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">4. SMS Messaging</h2>
            <p className="mb-4">
              When you provide your phone number and consent to receive text messages, Shark Branding Solutions may send you SMS messages. Message and data rates may apply. Message frequency varies.
            </p>
            <p className="mb-4">
              To opt out of SMS messages at any time, reply <strong>STOP</strong> to any message you receive from us. To request help, reply <strong>HELP</strong> or contact us at{" "}
              <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                info@sharkbrandingsolutions.com
              </a>.
            </p>
            <p>
              We do not sell, rent, share, or otherwise disclose your phone number or SMS messaging data to third parties for their own marketing purposes. Phone numbers and messaging data collected for SMS communication are used solely to send the messages you consented to receive.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">5. How We Share Your Information</h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers:</strong> Trusted third-party vendors who help us operate our website, CRM, and communications tools (e.g., scheduling software, email platforms), who are contractually bound to protect your data.</li>
              <li><strong>Legal compliance:</strong> When required by law or to protect our legal rights.</li>
            </ul>
            <p className="mt-4">
              We do not share phone numbers or SMS messaging data with unrelated third parties or use them for purposes other than the communications you agreed to receive.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">6. Data Protection and Retention</h2>
            <p className="mb-4">
              We take reasonable technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Your data is stored on secure, access-controlled systems.
            </p>
            <p>
              We retain your personal information only as long as necessary to provide services or as required by law. If you would like to request deletion of your data, please contact us at{" "}
              <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                info@sharkbrandingsolutions.com
              </a>{" "}
              and we will process your request promptly.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Opt out of SMS messages at any time by replying STOP.</li>
              <li>Opt out of marketing emails by clicking unsubscribe in any email.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                info@sharkbrandingsolutions.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">8. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings. Analytics data is aggregated and does not personally identify you.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of our website or services after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <address className="not-italic mt-4 space-y-1 text-[17px]">
              <p className="font-semibold text-[#0a0a0a]">Shark Branding Solutions</p>
              <p>Wesley Chapel, FL 33544</p>
              <p>
                <a href="tel:+17275133955" className="text-[#18b5d8] underline">(727) 513-3955</a>
              </p>
              <p>
                <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                  info@sharkbrandingsolutions.com
                </a>
              </p>
            </address>
          </section>

        </div>
      </div>
    </main>
  );
}
