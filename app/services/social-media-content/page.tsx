import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './social-media-content-client'

export const metadata: Metadata = {
  title: 'Social Media Management & Content | Bear Media',
  description: 'Professional social media content, reels, and video management for trades, construction, and local SMEs in West Lothian & Edinburgh.',
  alternates: {
    canonical: 'https://bear-media.com/services/social-media-content',
  },
  openGraph: {
    url: 'https://bear-media.com/services/social-media-content',
    title: 'Social Media Management & Content | Bear Media',
    description: 'Professional social media content, reels, and video management for trades, construction, and local SMEs in West Lothian & Edinburgh.',
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


const breadcrumbSchema_services_social_media_content = {
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
      "name": "Social Media Management & Content",
      "item": "https://bear-media.com/services/social-media-content"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-services-social-media-content"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_services_social_media_content) }}
      />
      <ClientPage />
    </>
  );
}
