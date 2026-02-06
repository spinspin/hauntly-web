import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hauntly.me"),
  title: {
    default: "Hauntly — Ghost Hunting App | Paranormal Investigation Tool",
    template: "%s | Hauntly",
  },
  description:
    "Hauntly is the ultimate ghost hunting app for paranormal investigation. Detect EMF anomalies, record EVP, scan for spirits, and document supernatural encounters from your phone.",
  keywords: [
    "ghost hunting app",
    "paranormal investigation",
    "EMF detector app",
    "EVP recorder",
    "spirit detector",
    "ghost radar",
    "paranormal detector",
    "ghost hunting tool",
    "spirit communication",
    "supernatural investigation",
  ],
  authors: [{ name: "Frumpets Ltd", url: "https://hauntly.me" }],
  creator: "Frumpets Ltd",
  publisher: "Frumpets Ltd",
  icons: {
    icon: "/logo3.png",
    shortcut: "/logo3.png",
    apple: "/logo3.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hauntly.me",
    siteName: "Hauntly",
    title: "Hauntly — Ghost Hunting App | Paranormal Investigation Tool",
    description:
      "The ultimate ghost hunting companion. Detect, investigate, and document paranormal activity right from your phone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hauntly — Ghost Hunting App",
    description:
      "The ultimate ghost hunting companion. Detect, investigate, and document paranormal activity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hauntly.me",
    types: {
      "application/rss+xml": "https://hauntly.me/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {/* Organization Schema - site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hauntly",
              legalName: "Frumpets Ltd",
              url: "https://hauntly.me",
              logo: "https://hauntly.me/logo3.png",
              description:
                "Hauntly is the ultimate ghost hunting companion app for paranormal investigation. Detect EMF anomalies, record EVP, and document supernatural encounters.",
              foundingDate: "2025",
              email: "hello@frumpets.co",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@frumpets.co",
                contactType: "customer support",
                availableLanguage: "English",
              },
            }),
          }}
        />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
