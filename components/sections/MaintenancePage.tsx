"use client";

import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

const PHONE_DISPLAY = "+44 7879 011860";
const PHONE_TEL = "+447879011860";
const EMAIL = "info@bear-media.com";
const WHATSAPP = "https://wa.me/447879011860";

const LOGO = "/logos/bear media scotland logo.png";
const PORTRAIT = "/bear-media/PERSONAL BRAND IMAGES/garry bm image june 26.png";

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f0e0c] px-6 py-16">
      {/* Subtle radial glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(241,185,45,0.10),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center text-center">
        {/* Logo */}
        <Image
          src={LOGO || "/placeholder.svg"}
          alt="Bear Media logo"
          width={120}
          height={120}
          priority
          className="h-24 w-24 md:h-28 md:w-28"
        />

        {/* Portrait */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <Image
            src={PORTRAIT || "/placeholder.svg"}
            alt="Garry Lynch, founder of Bear Media, holding a professional camera"
            width={420}
            height={420}
            priority
            className="h-auto w-full max-w-[280px] object-cover"
          />
        </div>

        {/* Status pill */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#F1B92D]/30 bg-[#F1B92D]/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F1B92D] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F1B92D]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F1B92D]">
            Under Construction
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-bebas mt-6 text-4xl uppercase leading-[1.05] tracking-wide text-cream md:text-5xl">
          Website Currently
          <br />
          Being Upgraded
        </h1>

        {/* Body text */}
        <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-brand-sand/80">
          {
            "I'm currently redesigning the Bear Media website to better showcase recent client work, photography, video production and websites. If you'd like to discuss a project, get in touch below."
          }
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex w-full flex-col gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="premium-btn flex w-full items-center justify-center gap-3 rounded-md bg-[#F1B92D] px-6 py-4 text-sm font-black uppercase tracking-widest text-[#0f0e0c]"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Call
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex w-full items-center justify-center gap-3 rounded-md border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-bold uppercase tracking-widest text-cream transition-colors duration-300 hover:border-[#F1B92D]/60 hover:text-[#F1B92D]"
          >
            <Mail className="h-5 w-5" strokeWidth={2.5} />
            Email
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-md border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-bold uppercase tracking-widest text-cream transition-colors duration-300 hover:border-[#F1B92D]/60 hover:text-[#F1B92D]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            WhatsApp
          </a>
        </div>

        {/* Footer detail */}
        <p className="mt-12 text-xs font-light uppercase tracking-[0.25em] text-brand-sand/40">
          Bear Media &middot; Scotland
        </p>
      </div>
    </main>
  );
}
