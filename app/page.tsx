"use client"

import Image from "next/image"

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0b",
        color: "white",
      }}
    >
      {/* Split layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          maxWidth: "1100px",
          width: "100%",
          padding: "48px",
          alignItems: "center",
        }}
      >
        {/* LEFT: Logo */}
        <div style={{ textAlign: "center" }}>
          <Image
            src="/bear-media-logo.png"
            alt="Bear Media Logo"
            width={320}
            height={320}
            priority
          />
        </div>

        {/* RIGHT: Text */}
        <div>
          <h1 style={{ fontSize: "48px", lineHeight: 1.1, marginBottom: "16px" }}>
            This page is rendering
          </h1>
          <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "24px" }}>
            Logo on the left. Text on the right.
          </p>
          <p style={{ fontSize: "16px", opacity: 0.6 }}>
            If you can see this, <strong>page.tsx is live</strong> and Vercel is
            deploying correctly.
          </p>
        </div>
      </div>
    </main>
  )
}
