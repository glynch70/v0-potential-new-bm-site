"use client";

import Image from "next/image";

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
        <h1 style={{
  fontSize: "52px",
  lineHeight: "1.1",
  maxWidth: "520px",
  marginBottom: "16px"
}}>
  One creator.<br />Real skills.<br />Real results.
</h1>

<p style={{
  fontSize: "20px",
  opacity: 0.75,
  maxWidth: "480px",
  marginBottom: "32px"
}}>
  Websites and content for small businesses. Built properly.
</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            style={{
              padding: "14px 22px",
              background: "#f5c542",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            View work
          </button>

          <button
            style={{
              padding: "14px 22px",
              background: "transparent",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </main>
  );
}
<section style={{
  padding: "120px 64px",
  background: "#0b0b0b",
}}>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto"
  }}>
    <div>Social Content</div>
    <div>Websites</div>
    <div>Photography</div>
  </div>
</section>
