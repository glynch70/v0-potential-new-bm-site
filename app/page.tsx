"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "64px",
        background: "#0e0e0e",
        color: "#ffffff",
        gap: "48px",
      }}
    >
      {/* LEFT */}
      <div style={{ textAlign: "center" }}>
        <Image
          src="/bear-media-logo.png"
          alt="Bear Media"
          width={260}
          height={260}
          priority
        />
      </div>

      {/* RIGHT */}
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          One creator. Real skills. Real results.
        </h1>

        <p style={{ fontSize: "20px", opacity: 0.85, marginBottom: "32px" }}>
          Websites and content for small businesses. Built properly.
        </p>

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              padding: "14px 22px",
              background: "#d4af37",
              color: "#000",
              borderRadius: "999px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Book a call
          </button>

          <button
            style={{
              padding: "14px 22px",
              background: "transparent",
              color: "#fff",
              borderRadius: "999px",
              border: "1px solid #444",
              cursor: "pointer",
            }}
          >
            View work
          </button>
        </div>
      </div>
    </main>
  )
}
