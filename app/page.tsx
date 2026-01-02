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
        background: "#111",
        color: "white",
        gap: "48px",
      }}
    >
      {/* LEFT */}
      <div style={{ textAlign: "center" }}>
        <Image
          src="/bear-media-logo.png"
          alt="Bear Media"
          width={320}
          height={320}
          priority
        />
      </div>

      {/* RIGHT */}
      <div>
        
