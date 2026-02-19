import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  app: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/support", label: "Support" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  download: [
    { href: "#", label: "App Store — Coming Soon" },
    { href: "https://play.google.com/store/apps/details?id=com.frumpets.hauntly", label: "Google Play" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo3.png"
                alt="Hauntly ghost hunting app logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-accent text-glow-accent">
                Hauntly
              </span>
            </Link>
            <p className="text-sm text-text-muted">
              The ultimate ghost hunting companion. Detect, investigate, and document paranormal activity.
            </p>
          </div>

          {/* App links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.app.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
              Download
            </h3>
            <ul className="space-y-2">
              {footerLinks.download.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Frumpets Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
