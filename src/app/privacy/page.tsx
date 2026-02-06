import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Hauntly Privacy Policy — Learn how we collect, use, and protect your data when you use the Hauntly ghost hunting app.",
  alternates: {
    canonical: "https://hauntly.me/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://hauntly.me",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://hauntly.me/privacy",
              },
            ],
          }),
        }}
      />

    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-text-muted mb-12">Last updated: February 2026</p>

        <div className="prose-hauntly space-y-8">
          <div>
            <h2>1. Introduction</h2>
            <p>
              Hauntly (&ldquo;the App&rdquo;) is developed by Frumpets Ltd
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). This
              Privacy Policy explains how we collect, use, and protect your
              information when you use the Hauntly mobile application and our
              website at hauntly.me.
            </p>
            <p>
              <strong>Contact:</strong>{" "}
              <a href="mailto:hello@frumpets.co">hello@frumpets.co</a>
            </p>
          </div>

          <div>
            <h2>2. Information We Collect</h2>

            <h3>Data Stored on Your Device Only (Not Transmitted)</h3>
            <p>
              The following data is created and stored locally on your device. It
              is never sent to our servers or any third party unless you
              explicitly choose to share it:
            </p>
            <ul>
              <li>Audio recordings (EVP sessions)</li>
              <li>Photos and videos</li>
              <li>EMF sensor readings</li>
              <li>Ghost hunt notes, markers, and journal entries</li>
            </ul>

            <h3>Data Collected by Third-Party Services</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">Service</th>
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">Data Collected</th>
                    <th className="text-left py-3 text-text-primary font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Google AdMob</td>
                    <td className="py-3 pr-4">Device ID, IP address, ad interactions</td>
                    <td className="py-3">Advertising (free tier only)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Sentry</td>
                    <td className="py-3 pr-4">Crash logs, device info, app performance</td>
                    <td className="py-3">Bug fixing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2>3. Advertising (Google AdMob)</h2>
            <p>
              We display ads to free-tier users using Google AdMob. Premium
              subscribers do not see any ads. AdMob may collect:
            </p>
            <ul>
              <li>IP address (for approximate location)</li>
              <li>Device advertising identifier</li>
              <li>App usage and ad interaction data</li>
            </ul>
            <p>
              This data may be used to show personalised ads based on your
              interests. You can opt out of personalised ads at:{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                adssettings.google.com
              </a>
            </p>
            <p>
              For more information, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s partner policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2>4. Crash Reporting (Sentry)</h2>
            <p>
              We use Sentry to identify and fix bugs. Sentry collects:
            </p>
            <ul>
              <li>Crash logs and error reports</li>
              <li>Device type and OS version</li>
              <li>App state at time of error</li>
            </ul>
            <p>
              This data does not include personal information and cannot be used
              to track you across apps.
            </p>
          </div>

          <div>
            <h2>5. Device Permissions</h2>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">Permission</th>
                    <th className="text-left py-3 text-text-primary font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Microphone</td>
                    <td className="py-3">Record EVP audio sessions</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Camera</td>
                    <td className="py-3">Capture photos and video</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Sensors</td>
                    <td className="py-3">Detect electromagnetic fields</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              All recordings and media remain on your device unless you
              explicitly choose to share them.
            </p>
          </div>

          <div>
            <h2>6. Children&apos;s Privacy</h2>
            <p>
              Hauntly is not directed at children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If you believe we have inadvertently collected such information,
              please contact us immediately.
            </p>
          </div>

          <div>
            <h2>7. Your Rights</h2>
            <p>
              We do not collect or store any personal data on our servers. All
              your ghost hunt data stays on your device and is fully under your
              control — you can delete it at any time by removing recordings,
              clearing app data, or uninstalling the App.
            </p>
            <p>
              For data collected by third-party services (Google AdMob and
              Sentry), you can exercise your rights directly:
            </p>
            <ul>
              <li>
                <strong>Personalised ads (AdMob):</strong> Opt out via your
                device&apos;s ad settings or at{" "}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  adssettings.google.com
                </a>
              </li>
              <li>
                <strong>Crash data (Sentry):</strong> Automatically deleted after
                90 days. This data is anonymous and cannot identify you.
              </li>
            </ul>
            <p>
              If you have any questions or concerns, contact us at{" "}
              <a href="mailto:hello@frumpets.co">hello@frumpets.co</a>.
            </p>
          </div>

          <div>
            <h2>8. Data Retention</h2>
            <ul>
              <li>
                <strong>Local app data:</strong> Stored until you delete it or
                uninstall the App
              </li>
              <li>
                <strong>Crash reports:</strong> Retained by Sentry for 90 days
              </li>
              <li>
                <strong>Ad data:</strong> Subject to Google&apos;s retention
                policies
              </li>
            </ul>
          </div>

          <div>
            <h2>9. Security</h2>
            <p>
              All data transmitted to third-party services uses TLS encryption.
              Your ghost hunt data (recordings, photos, notes) stays on your
              device and is never transmitted to our servers.
            </p>
          </div>

          <div>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any material changes by posting the new Privacy Policy in
              the App and on this page. Your continued use of the App after
              changes are posted constitutes your acceptance of the revised
              policy.
            </p>
          </div>

          <div>
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a href="mailto:hello@frumpets.co">hello@frumpets.co</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
