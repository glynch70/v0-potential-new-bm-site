import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './portfolio-client'

export const metadata: Metadata = {
  title: 'Our Work | Websites, Video & Social Media | Bear Media',
  description: 'Explore our portfolio of web design, drone video, and branding projects for trades and local businesses across Edinburgh and West Lothian.',
  alternates: {
    canonical: 'https://bear-media.com/portfolio',
  },
  openGraph: {
    url: 'https://bear-media.com/portfolio',
    title: 'Our Work | Websites, Video & Social Media | Bear Media',
    description: 'Explore our portfolio of web design, drone video, and branding projects for trades and local businesses across Edinburgh and West Lothian.',
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


const breadcrumbSchema_portfolio = {
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
      "name": "Our Work",
      "item": "https://bear-media.com/portfolio"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_portfolio) }}
      />
      <ClientPage />
    </>
  );
}
