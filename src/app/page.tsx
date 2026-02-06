import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import NewsCard from "@/components/NewsCard";
import { getAllNewsPosts } from "@/lib/news";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "EVP Recorder & Analyzer",
    description:
      "Record electronic voice phenomena with multiple background sounds. Pro unlocks a full analysis suite — spectrogram, frequency spectrum, EQ, filters, reverse playback, and A-B looping.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "EMF Detection",
    description:
      "Use your phone's magnetometer to detect electromagnetic field anomalies. Real-time readings are logged directly to your ghost hunt timeline.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Photo & Video Capture",
    description:
      "Capture photos and video with paranormal-themed visual effects and filters. Annotate and highlight anomalies with the built-in editor.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Ghost Hunt Journal",
    description:
      "Document every ghost hunt with notes, timestamps, and environmental data. All your captured media is organised into a searchable timeline.",
  },
];


export default function HomePage() {
  const latestPosts = getAllNewsPosts().slice(0, 3);

  return (
    <>
      {/* SoftwareApplication Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Hauntly",
            url: "https://hauntly.me",
            image: "https://hauntly.me/logo3.png",
            applicationCategory: "EntertainmentApplication",
            operatingSystem: "iOS, Android",
            description:
              "Ghost hunting companion app. Record and analyse EVP, detect EMF anomalies, capture photos with paranormal effects, and document your ghost hunts.",
            author: {
              "@type": "Organization",
              name: "Frumpets Ltd",
              url: "https://hauntly.me",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            applicationSubCategory: "Paranormal Investigation",
            featureList:
              "EVP Recording & Analysis, EMF Detection, Photo & Video Capture, Ghost Hunt Journal, Night Vision Camera, Spirit Radar",
          }),
        }}
      />

      {/* WebSite Structured Data with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Hauntly",
            url: "https://hauntly.me",
            description:
              "Hauntly is the ultimate ghost hunting app for paranormal investigation.",
            publisher: {
              "@type": "Organization",
              name: "Frumpets Ltd",
              url: "https://hauntly.me",
            },
          }),
        }}
      />

      {/* BreadcrumbList - Home */}
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
            ],
          }),
        }}
      />

      <Hero />

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Everything You Need for a Ghost Hunt
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Professional paranormal detection tools packed into one app. Record, detect, capture, and document — all from your phone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {latestPosts.length > 0 && (
        <section className="py-20 sm:py-28 border-t border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Latest News
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Stay updated with the latest Hauntly news and ghost hunting tips.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <NewsCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 sm:py-28 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Ready to Start Hunting?
          </h2>
          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Download Hauntly for free and start your first ghost hunt today. Available on iOS and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dark transition-all glow-accent hover:glow-accent-strong"
            >
              Download for iOS
            </a>
            <a
              href="#"
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-accent/30 text-accent font-semibold hover:bg-accent/10 transition-all"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
