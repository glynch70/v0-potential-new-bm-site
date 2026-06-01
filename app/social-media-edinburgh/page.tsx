import Script from 'next/script';
import { Metadata } from 'next'
import SocialMediaEdinburghContent from './SocialMediaEdinburghContent'

export const metadata: Metadata = {
  title: 'Social Media Edinburgh | Content Creation & Management | ...',
  description: 'Premium social media management and content creation in Edinburgh. We help high-trust businesses across the Capital turn attention into consistent enqui...',
  alternates: {
    canonical: 'https://bear-media.com/social-media-edinburgh',
  },
  openGraph: {
    url: 'https://bear-media.com/social-media-edinburgh',
    title: 'Social Media Edinburgh | Content Creation & Management | ...',
    description: 'Premium social media management and content creation in Edinburgh. We help high-trust businesses across the Capital turn attention into consistent enqui...',
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


const breadcrumbSchema_social_media_edinburgh = {
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
      "name": "Social Media Edinburgh",
      "item": "https://bear-media.com/social-media-edinburgh"
    }
  ]
};

export default function SocialMediaEdinburghPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-social-media-edinburgh"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_social_media_edinburgh) }}
      />
      <SocialMediaEdinburghContent />
    </>
  );
}
