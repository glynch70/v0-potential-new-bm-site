'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Phone,
  Mail,
} from 'lucide-react';

type FooterLink = {
  title: string;
  href: string;
};

const socialLinks = [
  { title: 'Facebook', href: 'https://www.facebook.com/bearmediacontentservices', icon: Facebook },
  { title: 'Instagram', href: 'https://www.instagram.com/bearmedia70/', icon: Instagram },
  { title: 'YouTube', href: 'https://www.youtube.com/@bearmedia70', icon: Youtube },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/garrylynch', icon: Linkedin },
] as const;

const footerGroups: { label: string; links: FooterLink[] }[] = [
  {
    label: 'Services',
    links: [
      { title: 'Video Production', href: '/services/videography' },
      { title: 'Website Design', href: '/services/website-design' },
      { title: 'Social Media Content', href: '/services/social-media-content' },
      { title: 'Book Discovery Call', href: '/contact' },
    ],
  },
  {
    label: 'Portfolio',
    links: [
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'C&G Developments', href: '/case-studies/cg-developments' },
      { title: 'Almond Vet Care', href: '/portfolio/almond-vet-care' },
    ],
  },
  {
    label: 'Locations',
    links: [
      { title: 'West Lothian', href: '/west-lothian-content-creation' },
      { title: 'Edinburgh', href: '/edinburgh-content-creation' },
      { title: 'Fife', href: '/fife-content-creation' },
      { title: 'Scotland', href: '/locations/content-creation-scotland' },
    ],
  },
];

export default function Footer() {
  const [openGroup, setOpenGroup] = useState<string | null>(footerGroups[0].label);

  return (
    <footer className="border-t border-white/6 bg-[#0b0b0b] px-6 py-12 text-[#E8E0D5] md:px-10 md:py-14 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr_1fr_1fr] md:gap-8">
          <div className="max-w-sm">
            <p className="text-lg font-bold leading-tight text-white font-inter-tight">Bear Media</p>
            <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.24em] text-white/52 font-inter-tight">
              Video, websites and social content
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/66">
              Premium creative work for Scottish businesses that want to look sharper,
              feel more credible, and generate better enquiries.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="tel:+447879011860"
                className="flex items-center gap-3 text-white/82 transition-colors hover:text-[#F1B92D]"
              >
                <Phone className="h-4 w-4 text-[#F1B92D]" />
                07879 011860
              </a>
              <a
                href="mailto:info@bear-media.com"
                className="flex items-center gap-3 text-white/82 transition-colors hover:text-[#F1B92D]"
              >
                <Mail className="h-4 w-4 text-[#F1B92D]" />
                info@bear-media.com
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all hover:border-[#F1B92D]/40 hover:bg-[#F1B92D] hover:text-[#0f0e0c]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden md:contents">
            {footerGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-[12px] font-bold uppercase tracking-[0.28em] text-white">
                  {group.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/66 transition-colors hover:text-[#F1B92D]"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/8 pt-2 md:hidden">
            {footerGroups.map((group) => {
              const isOpen = openGroup === group.label;
              return (
                <div key={group.label} className="border-b border-white/8">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-[0.28em] text-white">
                      {group.label}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-white/64 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen ? (
                    <ul className="space-y-3 pb-4">
                      {group.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className="text-sm text-white/66 transition-colors hover:text-[#F1B92D]"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.22em] text-white/44 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bear Media</p>
          <p>Broxburn, West Lothian</p>
        </div>
      </div>
    </footer>
  );
}
