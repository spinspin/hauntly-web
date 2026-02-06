import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsPost, getAllNewsSlugs } from "@/lib/news";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: ["Hauntly Team"],
    },
    alternates: {
      canonical: `https://hauntly.me/news/${slug}`,
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) notFound();

  return (
    <>
      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            author: {
              "@type": "Organization",
              name: "Hauntly Team",
              url: "https://hauntly.me",
            },
            publisher: {
              "@type": "Organization",
              name: "Hauntly",
              url: "https://hauntly.me",
              logo: {
                "@type": "ImageObject",
                url: "https://hauntly.me/logo3.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://hauntly.me/news/${slug}`,
            },
            image: "https://hauntly.me/logo3.png",
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
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://hauntly.me/news/${slug}`,
              },
            ],
          }),
        }}
      />

      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          <header className="mb-10">
            <time className="text-sm text-accent font-medium uppercase tracking-wider">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3">
              {post.title}
            </h1>
            <p className="text-sm text-text-muted mt-2">By the Hauntly Team</p>
          </header>

          <div
            className="prose-hauntly"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
