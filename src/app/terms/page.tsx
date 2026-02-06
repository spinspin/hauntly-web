import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Hauntly Terms of Service — Read the terms and conditions for using the Hauntly ghost hunting app.",
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-text-muted mb-12">Last updated: February 2026</p>

        <div className="prose-hauntly space-y-8">
          <div>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Hauntly mobile application
              (the &ldquo;App&rdquo;) or accessing our website at hauntly.app
              (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms,
              do not use the App or Site.
            </p>
          </div>

          <div>
            <h2>2. Description of Service</h2>
            <p>
              Hauntly is a mobile application developed by Frumpets Ltd,
              designed for entertainment and hobbyist paranormal investigation
              purposes. The App provides tools including EVP recording and
              analysis, EMF detection, photo and video capture with visual
              effects, and ghost hunt documentation features.
            </p>
            <p>
              <strong>Important Disclaimer:</strong> Hauntly is intended for
              entertainment purposes. The App&apos;s readings, detections, and
              analyses are not scientifically validated methods of detecting
              paranormal activity. Results should not be interpreted as
              conclusive evidence of supernatural phenomena.
            </p>
          </div>

          <div>
            <h2>3. User Data</h2>
            <p>
              Hauntly does not require an account to use. All ghost hunt data —
              recordings, photos, notes, and sensor readings — is stored locally
              on your device. We do not operate user accounts or cloud storage.
              For details on what data third-party services may collect, see our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the App for any unlawful purpose or in violation of any
                local, state, national, or international law
              </li>
              <li>
                Trespass on private property or restricted areas while using the
                App
              </li>
              <li>
                Use the App to spread misinformation or cause panic
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or disassemble the App
              </li>
              <li>
                Interfere with or disrupt the App&apos;s services
              </li>
            </ul>
          </div>

          <div>
            <h2>5. User Content</h2>
            <p>
              You retain full ownership of all content you create using the App,
              including ghost hunt notes, photos, recordings, and other captured
              media. Since all data is stored locally on your device, you are
              responsible for backing up your own content.
            </p>
          </div>

          <div>
            <h2>6. Subscriptions and Payments</h2>
            <p>
              Some features require a Hauntly Pro subscription. Subscription
              options and pricing are presented within the App at the time of
              purchase. Subscriptions are processed through the Apple App Store
              or Google Play Store. Recurring subscriptions automatically renew
              unless cancelled at least 24 hours before the end of the current
              billing period. Refunds are handled according to the policies of
              the respective app store.
            </p>
          </div>

          <div>
            <h2>7. Safety and Responsibility</h2>
            <p>
              When using Hauntly for ghost hunts, you are solely responsible for
              your personal safety. Always:
            </p>
            <ul>
              <li>
                Obtain proper permission before investigating any location
              </li>
              <li>Follow all local laws and regulations</li>
              <li>
                Never investigate alone in potentially dangerous locations
              </li>
              <li>Be aware of your physical surroundings at all times</li>
              <li>
                Do not enter abandoned or structurally unsound buildings
              </li>
            </ul>
            <p>
              Frumpets Ltd is not responsible for any injuries, damages, or legal
              consequences resulting from your use of the App during ghost hunts.
            </p>
          </div>

          <div>
            <h2>8. Intellectual Property</h2>
            <p>
              The App, including its design, features, code, and content, is
              owned by Frumpets Ltd and protected by copyright, trademark, and
              other intellectual property laws. You may not copy, modify,
              distribute, or create derivative works based on the App without our
              written permission.
            </p>
          </div>

          <div>
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Frumpets Ltd shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the App. Our total
              liability shall not exceed the amount you paid for the App or
              subscription in the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2>10. Termination</h2>
            <p>
              We may suspend or terminate your access to the App at any time for
              violation of these Terms. You may stop using the App at any time by
              uninstalling it from your device. Cancellation of a Pro subscription
              can be done through your app store account settings.
            </p>
          </div>

          <div>
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes through the App or on the Site. Your
              continued use of the App after changes are posted constitutes your
              acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2>12. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:hello@frumpets.co">hello@frumpets.co</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
