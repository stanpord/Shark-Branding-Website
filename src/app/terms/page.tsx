import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Shark AI Solutions",
  description: "Terms of Service for Shark AI Solutions. Review the terms governing use of our website and SMS messaging program.",
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen px-6 pt-28 pb-24">
      <div className="max-w-[720px] mx-auto">
        <p className="text-[#18b5d8] text-[13px] font-semibold tracking-[0.2em] uppercase mb-4">
          Legal
        </p>
        <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#0a0a0a] mb-4 leading-tight">
          Terms of Service
        </h1>
        <p className="text-[15px] text-[#7a7a7a] mb-12">
          Last updated: June 1, 2025
        </p>

        <div className="space-y-10 text-[17px] text-[#333333] leading-relaxed">

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Shark AI Solutions website (sharkbrandingsolutions.com) or any of our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">2. About Shark AI Solutions</h2>
            <p>
              Shark AI Solutions is an AI Visibility and Branding firm based in Wesley Chapel, FL. We help local businesses improve how they appear in AI-powered search platforms and traditional search engines. Our services include AI Business Consulting, AI Visibility Audits, and Workshops and Training.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">3. SMS Messaging Program</h2>
            <p className="mb-4">
              Shark AI Solutions operates an SMS messaging program to communicate with customers and prospects who have provided their phone number and consented to receive text messages.
            </p>
            <p className="mb-4">
              <strong>Program description:</strong> By opting in, you may receive text messages from Shark AI Solutions, including appointment reminders, service updates, follow-up communications related to your inquiry or engagement with us, and, where separately and explicitly consented to, promotional messages such as special offers or business updates.
            </p>
            <p className="mb-4">
              <strong>Message and data rates may apply.</strong> Message frequency varies depending on your activity and preferences.
            </p>
            <p className="mb-4">
              <strong>Carriers are not liable for delayed or undelivered messages.</strong>
            </p>
            <p className="mb-4">
              <strong>To opt out:</strong> Reply <strong>STOP</strong> to any SMS message you receive from us. You will receive a one-time confirmation and will not receive further messages unless you opt back in.
            </p>
            <p>
              <strong>To get help:</strong> Reply <strong>HELP</strong> to any SMS message or contact us at{" "}
              <a href="mailto:info@sharkbrandingsolutions.com" className="text-[#18b5d8] underline">
                info@sharkbrandingsolutions.com
              </a>{" "}
              or{" "}
              <a href="tel:+17275133955" className="text-[#18b5d8] underline">
                (727) 513-3955
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">4. Use of Our Website</h2>
            <p className="mb-4">You agree to use our website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the site in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorized access to any part of the site or its related systems.</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Shark AI Solutions or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">6. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. Results described on our website are examples from past clients and are not guarantees of future performance.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Shark AI Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">9. Privacy</h2>
            <p>
              Your use of our website and services is also governed by our{" "}
              <Link href="/privacy" className="text-[#18b5d8] underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">10. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts located in Pasco County, Florida.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">11. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of our website or services after changes are posted constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-[21px] font-semibold text-[#0a0a0a] mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <address className="not-italic mt-4 space-y-1 text-[17px]">
              <p className="font-semibold text-[#0a0a0a]">Shark AI Solutions</p>
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
