import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './testimonials-client'

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Bear Media',
  description: 'Read real reviews and client success stories from trades, vets, and local businesses in West Lothian, Edinburgh, and Fife.',
  alternates: {
    canonical: 'https://bear-media.com/testimonials',
  },
  openGraph: {
    url: 'https://bear-media.com/testimonials',
    title: 'Client Reviews & Testimonials | Bear Media',
    description: 'Read real reviews and client success stories from trades, vets, and local businesses in West Lothian, Edinburgh, and Fife.',
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


const breadcrumbSchema_testimonials = {
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
      "name": "Client Reviews & Testimonials",
      "item": "https://bear-media.com/testimonials"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-testimonials"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_testimonials) }}
      />
      <ClientPage />
    </>
  );
}
