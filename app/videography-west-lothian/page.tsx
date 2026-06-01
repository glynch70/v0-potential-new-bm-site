import Script from 'next/script';
import { Metadata } from 'next'
import VideographyContent from './VideographyContent'

export const metadata: Metadata = {
  title: 'Videography West Lothian | Business Video | Bear Media',
  description: 'Videography and drone services in West Lothian. We capture on-site projects to build your local authority.',
  alternates: {
    canonical: 'https://bear-media.com/videography-west-lothian',
  },
  openGraph: {
    url: 'https://bear-media.com/videography-west-lothian',
    title: 'Videography West Lothian | Business Video | Bear Media',
    description: 'Videography and drone services in West Lothian. We capture on-site projects to build your local authority.',
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


const breadcrumbSchema_videography_west_lothian = {
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
      "name": "Videography West Lothian",
      "item": "https://bear-media.com/videography-west-lothian"
    }
  ]
};

export default function VideographyWestLothianPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-videography-west-lothian"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_videography_west_lothian) }}
      />
      <VideographyContent />
    </>
  );
}
