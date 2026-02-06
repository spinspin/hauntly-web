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
  metadataBase: new URL("https://hauntly.app"),
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
  authors: [{ name: "Frumpets Ltd" }],
  creator: "Frumpets Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hauntly.app",
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
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
