import type { Metadata } from "next";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Support — Ghost Hunting App Help & FAQ",
  description:
    "Get help with Hauntly, the ghost hunting app. Find answers to frequently asked questions, troubleshooting tips, and contact our support team.",
  openGraph: {
    title: "Hauntly Support — Ghost Hunting App Help & FAQ",
    description:
      "Get help with Hauntly. Find answers to frequently asked questions and contact our support team.",
  },
  alternates: {
    canonical: "https://hauntly.me/support",
  },
};

const faqs = [
  {
    question: "How does the EMF detector work?",
    answer:
      "Hauntly uses your phone's built-in magnetometer to measure electromagnetic field fluctuations. The app displays real-time readings, tracks peaks and minimums, and logs them to your ghost hunt feed.",
  },
  {
    question: "What is EVP and how does the recorder capture it?",
    answer:
      "EVP stands for Electronic Voice Phenomena — unexplained voices or sounds captured in audio recordings. Hauntly's EVP recorder uses your phone's microphone to capture audio during ghost hunts. Free users can record sessions up to 30 seconds, while Pro users get up to 15 minutes. You can choose from multiple background sounds including White Noise and Vocal Static to enhance your sessions.",
  },
  {
    question: "What can I do with EVP recordings after capture?",
    answer:
      "Every recording is saved to your ghost hunt feed. With Hauntly Pro, you unlock the full EVP Analyzer — a suite of audio analysis tools including a frequency spectrum visualiser (FFT), spectrogram view, waveform with zoom and pan, 3-band parametric EQ, audio filters (voice enhance, noise reduction, bass/treble boost), reverse playback, A-B loop analysis, and markers to tag interesting moments.",
  },
  {
    question: "What photo features does Hauntly have?",
    answer:
      "Hauntly includes a built-in camera with visual effects and filters like Film Grain, Static, Ectoplasm, and Orbs. You can also enable Night Vision for low-light viewing or SLS to detect body outlines in real time. All photos are saved directly to your ghost hunt feed.",
  },
  {
    question: "Does the app work without an internet connection?",
    answer:
      "Yes! All core features — EMF detection, EVP recording, photo capture, and the ghost hunt journal — work completely offline. Your data is stored locally on your device. You only need an internet connection for app updates or if you're on the free tier (for loading ads).",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free gives you access to all core ghost hunting tools: EVP recording (30 seconds), 2 background sounds (White Noise, Vocal Static), basic waveform view, EMF detection, photo capture, and the ghost hunt journal. Pro unlocks extended recording (up to 15 minutes), all 11 background sounds, the full EVP Analyzer with spectrogram, frequency spectrum, EQ, audio filters, reverse playback, A-B looping, unlimited markers, Night Vision, SLS detection, all camera effects, PDF export, and removes all ads.",
  },
  {
    question: "Does the app drain my battery quickly?",
    answer:
      "We've optimised Hauntly to be as battery-efficient as possible. During a typical ghost hunt, you can expect several hours of continuous use. For longer sessions, we recommend bringing a portable charger.",
  },
  {
    question: "How do I report a bug or suggest a feature?",
    answer:
      "We'd love to hear from you! Send bug reports and feature suggestions to hello@frumpets.co. Please include your device model, OS version, and a description of the issue or idea. You can also reach us through the support button below.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. All your ghost hunt data — recordings, photos, notes, and sensor readings — stays on your device. We never upload your ghost hunt data to our servers. The only third-party services we use are Google AdMob (ads for free users) and Sentry (crash reporting). See our Privacy Policy for full details.",
  },
];

export default function SupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

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
                name: "Support",
                item: "https://hauntly.me/support",
              },
            ],
          }),
        }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Support
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our team.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="rounded-2xl border border-border bg-surface/50 p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Still Need Help?
            </h2>
            <p className="text-text-secondary mb-6">
              Our team is here to help. Reach out and we&apos;ll get back to you
              as soon as possible.
            </p>
            <a
              href="mailto:hello@frumpets.co"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dim transition-all glow-accent hover:glow-accent-strong"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@frumpets.co
            </a>
          </div>

          {/* App Store Links */}
          <div className="mt-12 text-center">
            <p className="text-text-muted text-sm mb-4">
              Make sure you&apos;re running the latest version of Hauntly:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                rel="nofollow"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-all"
              >
                Update on App Store
              </a>
              <a
                href="#"
                rel="nofollow"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-all"
              >
                Update on Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
