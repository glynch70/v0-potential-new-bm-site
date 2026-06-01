import Script from 'next/script';
import { Metadata } from 'next'
import WebDesignContent from './WebDesignContent'

export const metadata: Metadata = {
  title: 'Web Design West Lothian | Lead Generation Websites | Bear...',
  description: 'High-performance web design in West Lothian. We build conversion-focused websites for construction companies, trades businesses and local SMEs in Living...',
  alternates: {
    canonical: 'https://bear-media.com/web-design-west-lothian',
  },
  openGraph: {
    url: 'https://bear-media.com/web-design-west-lothian',
    title: 'Web Design West Lothian | Lead Generation Websites | Bear...',
    description: 'High-performance web design in West Lothian. We build conversion-focused websites for construction companies, trades businesses and local SMEs in Living...',
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


const breadcrumbSchema_web_design_west_lothian = {
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
      "name": "Web Design West Lothian",
      "item": "https://bear-media.com/web-design-west-lothian"
    }
  ]
};

export default function WebDesignWestLothianPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-web-design-west-lothian"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_web_design_west_lothian) }}
      />
      <WebDesignContent />
    </>
  );
}
