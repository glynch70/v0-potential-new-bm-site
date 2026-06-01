import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './web-design-client'

export const metadata: Metadata = {
  title: 'High-Performance Website Design | Bear Media',
  description: 'Custom website design and development for trades, construction companies, and local service businesses in Edinburgh and West Lothian.',
  alternates: {
    canonical: 'https://bear-media.com/web-design',
  },
  openGraph: {
    url: 'https://bear-media.com/web-design',
    title: 'High-Performance Website Design | Bear Media',
    description: 'Custom website design and development for trades, construction companies, and local service businesses in Edinburgh and West Lothian.',
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


const breadcrumbSchema_web_design = {
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
      "name": "High-Performance Website Design",
      "item": "https://bear-media.com/web-design"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-web-design"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_web_design) }}
      />
      <ClientPage />
    </>
  );
}
