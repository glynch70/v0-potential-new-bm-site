import Script from 'next/script';
import { Metadata } from 'next'
import SocialMediaContent from './SocialMediaContent'

export const metadata: Metadata = {
  title: 'Social Media West Lothian | Content & Management',
  description: 'Social media management and content creation in West Lothian. We help local businesses turn attention into enquiries.',
  alternates: {
    canonical: 'https://bear-media.com/social-media-west-lothian',
  },
  openGraph: {
    url: 'https://bear-media.com/social-media-west-lothian',
    title: 'Social Media West Lothian | Content & Management',
    description: 'Social media management and content creation in West Lothian. We help local businesses turn attention into enquiries.',
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


const breadcrumbSchema_social_media_west_lothian = {
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
      "name": "Social Media West Lothian",
      "item": "https://bear-media.com/social-media-west-lothian"
    }
  ]
};

export default function SocialMediaWestLothianPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-social-media-west-lothian"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_social_media_west_lothian) }}
      />
      <SocialMediaContent />
    </>
  );
}
