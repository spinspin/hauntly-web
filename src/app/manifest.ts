import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hauntly — Ghost Hunting App",
    short_name: "Hauntly",
    description:
      "The ultimate ghost hunting companion. Detect EMF anomalies, record EVP, and document paranormal encounters from your phone.",
    start_url: "/",
    display: "standalone",
    background_color: "#101216",
    theme_color: "#00B386",
    icons: [
      {
        src: "/logo3.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo3.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
