import Image from 'next/image';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const PHONE_DISPLAY = '07879 011860';
const PHONE_TEL = '+447879011860';
const EMAIL = 'info@bear-media.com';
const WHATSAPP = 'https://wa.me/447879011860';

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f0e0c] px-6 py-16">
      {/* Subtle radial vignette for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]"
      />

      <div
        className="relative z-10 flex w-full max-w-xl flex-col items-center text-center"
        style={{ width: '100%', maxWidth: '36rem' }}
      >
        {/* Logo */}
        <Image
          src="/maintenance/bear-media-logo.png"
          alt="Bear Media"
          width={140}
          height={140}
          priority
          style={{ width: 120, height: 120 }}
          className="object-contain"
        />

        {/* Portrait */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <Image
            src="/maintenance/garry-lynch.png"
            alt="Garry Lynch, founder of Bear Media"
            width={640}
            height={640}
            priority
            style={{ width: 280, height: 'auto' }}
            className="object-cover"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-10 font-[var(--font-display)] text-4xl uppercase leading-[1.05] tracking-wide text-white text-balance md:text-5xl">
          Website Currently Being Upgraded
        </h1>

        {/* Body copy */}
        <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/70 text-pretty md:text-lg">
          {
            "I\u2019m currently redesigning the Bear Media website to better showcase recent client work, photography, video production and websites. If you\u2019d like to discuss a project, get in touch below."
          }
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#F1B92D] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#0f0e0c] shadow-[0_4px_16px_rgba(241,185,45,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Call
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-[#F1B92D] hover:text-[#F1B92D]"
          >
            <Mail className="h-5 w-5" strokeWidth={2.5} />
            Email
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:border-[#F1B92D] hover:text-[#F1B92D]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            WhatsApp
          </a>
        </div>

        {/* Contact detail line */}
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/40">
          {PHONE_DISPLAY} &middot; {EMAIL}
        </p>
      </div>
    </main>
  );
}
