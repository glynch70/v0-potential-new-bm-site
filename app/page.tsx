"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0b0b0b",
        color: "#ffffff",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "48px",
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
          <h1
            style={{
              fontSize: "52px",
              lineHeight: "1.05",
              marginBottom: "16px",
            }}
          >
            One creator.
            <br />
            Real skills.
            <br />
            Real results.
          </h1>

          <p
            style={{
              fontSize: "20px",
              opacity: 0.85,
              marginBottom: "32px",
              maxWidth: "520px",
            }}
          >
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
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "96px 48px",
          background: "#111",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Social Content
            </h3>
            <p style={{ opacity: 0.8 }}>
              Short-form video, reels, and content that actually gets seen.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Websites
            </h3>
            <p style={{ opacity: 0.8 }}>
              Fast, clean websites built to convert and rank.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
              Photography
            </h3>
            <p style={{ opacity: 0.8 }}>
              High-quality visuals for brands, people, and properties.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
