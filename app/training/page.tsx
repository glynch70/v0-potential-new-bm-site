import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './training-client'

export const metadata: Metadata = {
  title: 'Social Media & AI Tools Training | Bear Media',
  description: 'Practical on-site training in Canva, CapCut, and generative AI tools for businesses in West Lothian and Edinburgh. Own your content creation.',
  alternates: {
    canonical: 'https://bear-media.com/training',
  },
  openGraph: {
    url: 'https://bear-media.com/training',
    title: 'Social Media & AI Tools Training | Bear Media',
    description: 'Practical on-site training in Canva, CapCut, and generative AI tools for businesses in West Lothian and Edinburgh. Own your content creation.',
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


const breadcrumbSchema_training = {
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
      "name": "Social Media & AI Tools Training",
      "item": "https://bear-media.com/training"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-training"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_training) }}
      />
      <ClientPage />
    </>
  );
}
