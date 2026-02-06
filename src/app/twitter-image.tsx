import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hauntly - Ghost Hunting App for Paranormal Investigation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #101216 0%, #1A1D23 50%, #101216 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,179,134,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #00B386, #00D4A0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(0,179,134,0.4)",
            }}
          >
            <div style={{ fontSize: 40, color: "#101216", fontWeight: 900 }}>H</div>
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#00B386",
              letterSpacing: "-1px",
            }}
          >
            Hauntly
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#F4F5F7",
            marginBottom: 16,
          }}
        >
          Your Ghost Hunting Companion
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9CA3AF",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Detect EMF anomalies, record EVP, and document paranormal encounters from your phone
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid rgba(0,179,134,0.3)",
              color: "#00B386",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            iOS
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "1px solid rgba(0,179,134,0.3)",
              color: "#00B386",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Android
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
