import Link from "next/link";

interface NewsCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function NewsCard({ slug, title, date, excerpt }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group block">
      <article className="p-6 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:glow-accent h-full">
        <time className="text-xs text-accent font-medium uppercase tracking-wider">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="text-lg font-semibold text-text-primary mt-2 mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">{excerpt}</p>
        <span className="inline-block mt-4 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          Read more &rarr;
        </span>
      </article>
    </Link>
  );
}
