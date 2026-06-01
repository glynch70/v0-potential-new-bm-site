import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './video-production-client'

export const metadata: Metadata = {
  title: 'Video Production & Cinematic Films | Bear Media',
  description: 'Professional corporate videos, event reels, and commercial drone videography for local brands in West Lothian, Edinburgh, and Central Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/video-production',
  },
  openGraph: {
    url: 'https://bear-media.com/video-production',
    title: 'Video Production & Cinematic Films | Bear Media',
    description: 'Professional corporate videos, event reels, and commercial drone videography for local brands in West Lothian, Edinburgh, and Central Scotland.',
    type: 'website',
    siteName: 'Bear Media',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media — Web Design & Video Scotland',
      },
    ],
  }
};


const breadcrumbSchema_video_production = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bear-media.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Video Production & Cinematic Films",
      "item": "https://bear-media.com/video-production"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-video-production"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_video_production) }}
      />
      <ClientPage />
    </>
  );
}
