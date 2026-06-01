import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './insights-client'

export const metadata: Metadata = {
  title: 'Local Marketing & Business Insights | Bear Media',
  description: 'Expert marketing advice, SEO tips, and lead generation guides for trades and small businesses in West Lothian, Edinburgh, and Central Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/insights',
  },
  openGraph: {
    url: 'https://bear-media.com/insights',
    title: 'Local Marketing & Business Insights | Bear Media',
    description: 'Expert marketing advice, SEO tips, and lead generation guides for trades and small businesses in West Lothian, Edinburgh, and Central Scotland.',
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


const breadcrumbSchema_insights = {
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
      "name": "Local Marketing & Business Insights",
      "item": "https://bear-media.com/insights"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-insights"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_insights) }}
      />
      <ClientPage />
    </>
  );
}
