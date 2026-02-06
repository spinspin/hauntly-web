import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient - subtle teal/accent glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,179,134,0.12),transparent_60%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/8 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="inline-block mb-6">
          <Image
            src="/logo3.png"
            alt="Hauntly"
            width={160}
            height={160}
            className="drop-shadow-[0_0_30px_rgba(0,179,134,0.3)]"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-accent text-glow-accent">Hauntly</span>
          <br />
          <span className="text-text-primary">Your Ghost Hunting Companion</span>
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Detect paranormal activity, investigate haunted locations, and document your supernatural encounters — all from your phone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-background font-semibold hover:bg-accent-dark transition-all glow-accent hover:glow-accent-strong"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.7 12.58 5.7C13.38 5.7 14.85 4.63 16.4 4.81C17.04 4.84 18.82 5.08 19.92 6.7C19.84 6.75 17.71 7.97 17.73 10.54C17.76 13.61 20.42 14.58 20.45 14.59C20.43 14.66 20.05 15.99 19.1 17.36L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-accent/30 text-accent font-semibold hover:bg-accent/10 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.18 23.49C2.8 23.29 2.5 22.92 2.5 22.38V1.62C2.5 1.08 2.8.71 3.18.51L13.54 11.5 3.18 23.49ZM14.66 12.62L5.15 22.78 17.58 15.55 14.66 12.62ZM20.23 10.18L17.99 8.88 14.93 11.5 17.99 14.12 20.23 12.82C21.03 12.37 21.03 10.63 20.23 10.18ZM5.15 1.22L17.58 8.45 14.66 11.38 5.15 1.22Z"/>
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
