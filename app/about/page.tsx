import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './about-client'

export const metadata: Metadata = {
  title: 'About Bear Media | Web Design & Video Scotland',
  description: 'Meet Garry Lynch, founder of Bear Media in West Lothian. We document the grit, scale, and craft of local businesses through video and websites.',
  alternates: {
    canonical: 'https://bear-media.com/about',
  },
  openGraph: {
    url: 'https://bear-media.com/about',
    title: 'About Bear Media | Web Design & Video Scotland',
    description: 'Meet Garry Lynch, founder of Bear Media in West Lothian. We document the grit, scale, and craft of local businesses through video and websites.',
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


const breadcrumbSchema_about = {
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
      "name": "About Bear Media",
      "item": "https://bear-media.com/about"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_about) }}
      />
      <ClientPage />
    </>
  );
}
