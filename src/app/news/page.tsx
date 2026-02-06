import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import { getAllNewsPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News — Ghost Hunting Tips & Paranormal Updates",
  description:
    "Stay updated with the latest Hauntly news, app updates, ghost hunting tips, and paranormal investigation guides.",
  openGraph: {
    title: "Hauntly News — Ghost Hunting Tips & Paranormal Updates",
    description:
      "Stay updated with the latest Hauntly news, app updates, ghost hunting tips, and paranormal investigation guides.",
  },
  alternates: {
    canonical: "https://hauntly.me/news",
  },
};

export default function NewsPage() {
  const posts = getAllNewsPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Hauntly News",
            description: "Ghost hunting tips, app updates, and paranormal investigation guides.",
            url: "https://hauntly.me/news",
            publisher: {
              "@type": "Organization",
              name: "Hauntly",
              url: "https://hauntly.me",
              logo: {
                "@type": "ImageObject",
                url: "https://hauntly.me/logo3.png",
              },
            },
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
                name: "News",
                item: "https://hauntly.me/news",
              },
            ],
          }),
        }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              News & Updates
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The latest from Hauntly — app updates, ghost hunting tips, and paranormal investigation guides.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <NewsCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-text-muted">No news posts yet. Check back soon!</p>
          )}
        </div>
      </section>
    </>
  );
}
