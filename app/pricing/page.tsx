import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './pricing-client'

export const metadata: Metadata = {
  title: 'Web Design & Social Media Pricing | Bear Media',
  description: 'Clear, transparent pricing guides for custom website design, social media content, drone video, and training packages in Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/pricing',
  },
  openGraph: {
    url: 'https://bear-media.com/pricing',
    title: 'Web Design & Social Media Pricing | Bear Media',
    description: 'Clear, transparent pricing guides for custom website design, social media content, drone video, and training packages in Scotland.',
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


const breadcrumbSchema_pricing = {
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
      "name": "Web Design & Social Media Pricing",
      "item": "https://bear-media.com/pricing"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_pricing) }}
      />
      <ClientPage />
    </>
  );
}
