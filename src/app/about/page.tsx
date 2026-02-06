import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Hauntly — Ghost Hunting App by Frumpets Ltd",
  description:
    "Learn about Hauntly, the ghost hunting app built by Frumpets Ltd. Our mission is to make paranormal investigation accessible to everyone with professional-grade tools on your phone.",
  openGraph: {
    title: "About Hauntly — Ghost Hunting App by Frumpets Ltd",
    description:
      "Learn about Hauntly, the ghost hunting app built by Frumpets Ltd. Professional paranormal investigation tools for everyone.",
  },
  alternates: {
    canonical: "https://hauntly.me/about",
  },
};

export default function AboutPage() {
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
                name: "About",
                item: "https://hauntly.me/about",
              },
            ],
          }),
        }}
      />

      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Hauntly",
            description:
              "Learn about Hauntly, the ghost hunting app built by Frumpets Ltd.",
            url: "https://hauntly.me/about",
            mainEntity: {
              "@type": "Organization",
              name: "Frumpets Ltd",
              url: "https://hauntly.me",
              description:
                "Frumpets Ltd is a UK-based app development studio specialising in mobile applications for entertainment and hobbyist communities.",
              foundingDate: "2025",
              email: "hello@frumpets.co",
            },
          }),
        }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              About Hauntly
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The story behind the ghost hunting app that puts professional
              paranormal investigation tools in your pocket.
            </p>
          </div>

          <div className="prose-hauntly space-y-8">
            <div>
              <h2>Our Mission</h2>
              <p>
                Hauntly was created with a simple goal: make paranormal
                investigation accessible to everyone. Whether you&apos;re a
                seasoned ghost hunter or picking up your first EMF detector,
                Hauntly gives you the tools to detect, investigate, and document
                supernatural encounters — all from your smartphone.
              </p>
              <p>
                We believe the best investigations happen when you have the
                right equipment. Hauntly combines multiple detection methods
                into a single, intuitive app so you can focus on what matters:
                the hunt.
              </p>
            </div>

            <div>
              <h2>What We Built</h2>
              <p>
                Hauntly isn&apos;t just another novelty app. We&apos;ve built a
                genuine investigation toolkit that uses your phone&apos;s
                hardware sensors:
              </p>
              <ul>
                <li>
                  <strong>EMF Detection</strong> — Uses your phone&apos;s
                  magnetometer to measure electromagnetic field fluctuations in
                  real time, logging readings directly to your ghost hunt
                  timeline.
                </li>
                <li>
                  <strong>EVP Recorder & Analyzer</strong> — Record electronic
                  voice phenomena with multiple background sounds. Pro users get
                  a full analysis suite with spectrogram, frequency spectrum,
                  3-band EQ, audio filters, reverse playback, and A-B looping.
                </li>
                <li>
                  <strong>Photo & Video Capture</strong> — Document
                  investigations with a built-in camera featuring
                  paranormal-themed visual effects and an annotation editor for
                  highlighting anomalies.
                </li>
                <li>
                  <strong>Ghost Hunt Journal</strong> — Every investigation is
                  automatically organised into a searchable timeline with notes,
                  timestamps, sensor readings, and captured media.
                </li>
              </ul>
            </div>

            <div>
              <h2>Built by Frumpets Ltd</h2>
              <p>
                Hauntly is developed by{" "}
                <strong>Frumpets Ltd</strong>, a UK-based app development
                studio. We specialise in crafting high-quality mobile
                applications for entertainment and hobbyist communities.
              </p>
              <p>
                Our team combines expertise in mobile development, audio
                engineering, and sensor technology to build tools that are both
                fun to use and genuinely useful for paranormal enthusiasts.
              </p>
            </div>

            <div>
              <h2>Privacy First</h2>
              <p>
                We take your privacy seriously. All your ghost hunt data —
                recordings, photos, notes, and sensor readings — stays on your
                device. We never upload your investigation data to our servers.
                Read our full{" "}
                <Link href="/privacy" className="text-accent hover:text-accent-dark">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </div>

            <div>
              <h2>Free & Pro</h2>
              <p>
                Hauntly is free to download and use. All core ghost hunting
                features are available at no cost. For investigators who want
                more, Hauntly Pro unlocks extended EVP recording (up to 15
                minutes), all 8 background sounds, the full EVP Analyzer suite,
                PDF export, and an ad-free experience.
              </p>
            </div>

            <div>
              <h2>Available On</h2>
              <p>
                Hauntly is available on both <strong>iOS</strong> and{" "}
                <strong>Android</strong>. Download it for free from the App
                Store or Google Play.
              </p>
            </div>

            <div>
              <h2>Get in Touch</h2>
              <p>
                We love hearing from our community. Whether you have a feature
                request, a bug report, or just want to share your latest ghost
                hunting experience:
              </p>
              <ul>
                <li>
                  <strong>General enquiries:</strong>{" "}
                  <a href="mailto:hello@frumpets.co">hello@frumpets.co</a>
                </li>
                <li>
                  <strong>Support:</strong>{" "}
                  <a href="mailto:support@hauntly.me">support@hauntly.me</a>
                </li>
                <li>
                  <strong>Privacy:</strong>{" "}
                  <a href="mailto:privacy@hauntly.me">privacy@hauntly.me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
