import Script from 'next/script';
import { Metadata } from 'next'
import WebDesignEdinburghContent from './WebDesignEdinburghContent'

export const metadata: Metadata = {
  title: 'Web Design Edinburgh | High-Performance Sites | Bear Media',
  description: 'Premium web design services in Edinburgh. We build high-trust, lead-generation websites for professional businesses across the Capital.',
  alternates: {
    canonical: 'https://bear-media.com/web-design-edinburgh',
  },
  openGraph: {
    url: 'https://bear-media.com/web-design-edinburgh',
    title: 'Web Design Edinburgh | High-Performance Sites | Bear Media',
    description: 'Premium web design services in Edinburgh. We build high-trust, lead-generation websites for professional businesses across the Capital.',
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


const breadcrumbSchema_web_design_edinburgh = {
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
      "name": "Web Design Edinburgh",
      "item": "https://bear-media.com/web-design-edinburgh"
    }
  ]
};

export default function WebDesignEdinburghPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-web-design-edinburgh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_web_design_edinburgh) }}
      />
      <WebDesignEdinburghContent />
    </>
  );
}
