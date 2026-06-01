import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './social-media-client'

export const metadata: Metadata = {
  title: 'Social Media Content & Strategy | Bear Media',
  description: 'Increase your local business visibility with custom reels, vertical video, and social media strategy in West Lothian and Edinburgh.',
  alternates: {
    canonical: 'https://bear-media.com/social-media',
  },
  openGraph: {
    url: 'https://bear-media.com/social-media',
    title: 'Social Media Content & Strategy | Bear Media',
    description: 'Increase your local business visibility with custom reels, vertical video, and social media strategy in West Lothian and Edinburgh.',
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


const breadcrumbSchema_social_media = {
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
      "name": "Social Media Content & Strategy",
      "item": "https://bear-media.com/social-media"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-social-media"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_social_media) }}
      />
      <ClientPage />
    </>
  );
}
