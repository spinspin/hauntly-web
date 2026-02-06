import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Head back to Hauntly to continue your paranormal investigation.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24">
      <div className="mx-auto max-w-lg px-4 sm:px-6 text-center">
        <p className="text-6xl font-bold text-accent text-glow-accent mb-4">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          Nothing Paranormal Here
        </h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for has vanished into thin air. Even our
          EMF detector can&apos;t find it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dark transition-all glow-accent hover:glow-accent-strong"
          >
            Back to Home
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all"
          >
            Get Support
          </Link>
        </div>
      </div>
    </section>
  );
}
