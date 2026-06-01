import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './website-design-client'

export const metadata: Metadata = {
  title: 'Lead-Generating Web Design Scotland | Bear Media',
  description: 'We build high-performance, mobile-optimised lead generation websites for local businesses and trades in West Lothian and Edinburgh.',
  alternates: {
    canonical: 'https://bear-media.com/services/website-design',
  },
  openGraph: {
    url: 'https://bear-media.com/services/website-design',
    title: 'Lead-Generating Web Design Scotland | Bear Media',
    description: 'We build high-performance, mobile-optimised lead generation websites for local businesses and trades in West Lothian and Edinburgh.',
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


const breadcrumbSchema_services_website_design = {
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
      "name": "Services",
      "item": "https://bear-media.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Lead-Generating Web Design Scotland",
      "item": "https://bear-media.com/services/website-design"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-services-website-design"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_services_website_design) }}
      />
      <ClientPage />
    </>
  );
}
