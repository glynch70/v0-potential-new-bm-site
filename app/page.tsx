"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "64px",
          background: "linear-gradient(180deg, #000 0%, #0b0b0b 100%)",
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
          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.1,
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
            Websites, video, and content for local businesses that want to look
            established and get enquiries.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="mailto:hello@bearmedia.co.uk"
              style={{
                padding: "14px 22px",
                background: "#f5c542",
                color: "#000",
                borderRadius: "8px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Get in touch
            </a>

            <a
              href="#services"
              style={{
                padding: "14px 22px",
                background: "transparent",
                color: "#fff",
                border: "1px solid #444",
                borderRadius: "8px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              View work
            </a>
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
          padding: "64px",
          background: "#0f0f0f",
          color: "#fff",
        }}
      >
        <div>
          <h3>Social Content</h3>
          <p style={{ opacity: 0.8 }}>
            Short-form video and reels designed to get attention and drive
            action.
          </p>
        </div>

        <div>
          <h3>Websites</h3>
          <p style={{ opacity: 0.8 }}>
            Fast, clean websites built to convert visitors into enquiries.
          </p>
        </div>

        <div>
          <h3>Photography</h3>
          <p style={{ opacity: 0.8 }}>
            High-quality visuals for brands, people, and property.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "96px 64px",
          textAlign: "center",
          background: "#000",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>
          Want to work together?
        </h2>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.85,
            marginBottom: "32px",
          }}
        >
          Drop me a message and I’ll come back to you personally.
        </p>

        <a
          href="mailto:hello@bearmedia.co.uk"
          style={{
            padding: "16px 28px",
            background: "#f5c542",
            color: "#000",
            borderRadius: "10px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Start a conversation
        </a>
      </section>
    </>
  );
}
