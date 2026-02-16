'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/bear-media-logo.png"
              alt="Bear Media"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-sm font-semibold tracking-wider uppercase">Bear Media</span>
          </Link>
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-white/50 hover:text-[#D4A830] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#D4A830]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4A830]">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-[0.9]">
              {title}
            </h1>
            <p className="mt-4 text-sm text-white/40">Last updated: {lastUpdated}</p>
          </div>

          {/* Body */}
          <div className="space-y-8 text-sm text-white leading-relaxed [&_h2]:text-white [&_h2]:text-lg [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-white [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#D4A830] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#E4BF4A]">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white">
          <p>&copy; {new Date().getFullYear()} Bear Media. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-conditions" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white/60 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
