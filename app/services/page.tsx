import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './services-client'

export const metadata: Metadata = {
  title: 'Our Services | Websites, Video & Social | Bear Media',
  description: 'Professional web design, cinematic drone videography, and scroll-stopping social content to grow local businesses in Edinburgh & West Lothian.',
  alternates: {
    canonical: 'https://bear-media.com/services',
  },
  openGraph: {
    url: 'https://bear-media.com/services',
    title: 'Our Services | Websites, Video & Social | Bear Media',
    description: 'Professional web design, cinematic drone videography, and scroll-stopping social content to grow local businesses in Edinburgh & West Lothian.',
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


const breadcrumbSchema_services = {
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
      "name": "Our Services",
      "item": "https://bear-media.com/services"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_services) }}
      />
      <ClientPage />
    </>
  );
}
