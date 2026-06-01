import type { Metadata } from 'next';

export const SITE_URL = 'https://bear-media.com';
export const SITE_NAME = 'Bear Media';
export const DEFAULT_OG_IMAGE = '/og-image.jpg';

export type PageMetadataInput = {
  /** Route without leading slash, e.g. `web-design-edinburgh` */
  path?: string;
  title: string;
  description: string;
  ogImage?: string;
};

/** Trim description for SERP; keep complete sentences when possible */
export function trimDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  const cut = normalized.slice(0, max - 3);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}...`;
}

export function buildPageMetadata({
  path,
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const canonical = path ? `${SITE_URL}/${path}` : SITE_URL;
  const desc = trimDescription(description);

  return {
    title,
    description: desc,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: canonical,
      siteName: SITE_NAME,
      title,
      description: desc,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImage],
    },
  };
}
