import Script from 'next/script';
import { Metadata } from 'next'
import ClientPage from './videography-client'

export const metadata: Metadata = {
  title: 'Videography & Drone Video Services | Bear Media',
  description: 'Cinematic brand films, event video, and commercial drone photography in Edinburgh, West Lothian, and Fife. Fully licensed and insured.',
  alternates: {
    canonical: 'https://bear-media.com/services/videography',
  },
  openGraph: {
    url: 'https://bear-media.com/services/videography',
    title: 'Videography & Drone Video Services | Bear Media',
    description: 'Cinematic brand films, event video, and commercial drone photography in Edinburgh, West Lothian, and Fife. Fully licensed and insured.',
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


const breadcrumbSchema_services_videography = {
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
      "name": "Videography & Drone Video Services",
      "item": "https://bear-media.com/services/videography"
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema-services-videography"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_services_videography) }}
      />
      <ClientPage />
    </>
  );
}
