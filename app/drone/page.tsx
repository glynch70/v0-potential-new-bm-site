import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './drone-client'

export const metadata: Metadata = {
  title: 'Drone Video & Aerial Photography Scotland | Bear Media',
  description: 'Licensed CAA commercial drone videography in Edinburgh, West Lothian, and Fife. Panoramic 4K aerial footage for construction, events & SMEs.',
  alternates: {
    canonical: 'https://bear-media.com/drone',
  },
  openGraph: {
    url: 'https://bear-media.com/drone',
    title: 'Drone Video & Aerial Photography Scotland | Bear Media',
    description: 'Licensed CAA commercial drone videography in Edinburgh, West Lothian, and Fife. Panoramic 4K aerial footage for construction, events & SMEs.',
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


const breadcrumbSchema_drone = {
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
      "name": "Drone Video & Aerial Photography Scotland",
      "item": "https://bear-media.com/drone"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-drone"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_drone) }}
      />
      <ClientPage />
    </>
  );
}
