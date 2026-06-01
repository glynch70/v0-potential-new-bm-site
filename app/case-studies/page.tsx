import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './case-studies-client'

export const metadata: Metadata = {
  title: 'Case Studies | Local Business Success | Bear Media',
  description: 'See how we help businesses in West Lothian and Edinburgh generate more enquiries through high-converting web design, video, and social content.',
  alternates: {
    canonical: 'https://bear-media.com/case-studies',
  },
  openGraph: {
    url: 'https://bear-media.com/case-studies',
    title: 'Case Studies | Local Business Success | Bear Media',
    description: 'See how we help businesses in West Lothian and Edinburgh generate more enquiries through high-converting web design, video, and social content.',
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


const breadcrumbSchema_case_studies = {
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
      "name": "Case Studies",
      "item": "https://bear-media.com/case-studies"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-case-studies"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_case_studies) }}
      />
      <ClientPage />
    </>
  );
}
