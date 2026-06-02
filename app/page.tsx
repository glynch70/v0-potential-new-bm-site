import HomeContent from './home-client';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Bear Media | Premium Video, Websites & Social Content',
  description: 'Bear Media creates premium video production, website design and social media content that turns attention into enquiries for ambitious Scottish businesses.',
  alternates: {
    canonical: 'https://bear-media.com',
  },
  openGraph: {
    url: 'https://bear-media.com',
    title: 'Bear Media | Premium Video, Websites & Social Content',
    description: 'Bear Media creates premium video production, website design and social media content that turns attention into enquiries for ambitious Scottish businesses.',
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

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://bear-media.com/#service",
  "name": "Bear Media",
  "url": "https://bear-media.com",
  "logo": "https://bear-media.com/bear-media-logo-horizontal-white.png",
  "image": "https://bear-media.com/og-image.jpg",
  "telephone": "+447879011860",
  "email": "info@bear-media.com",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Broxburn",
    "addressLocality": "West Lothian",
    "addressRegion": "Scotland",
    "postalCode": "EH52 6PH",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.934,
    "longitude": -3.471
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "West Lothian" },
    { "@type": "AdministrativeArea", "name": "Edinburgh" },
    { "@type": "AdministrativeArea", "name": "Fife" },
    { "@type": "AdministrativeArea", "name": "Central Scotland" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/bearmediacontentservices",
    "https://www.instagram.com/bearmedia70/",
    "https://www.linkedin.com/in/garrylynch",
    "https://www.youtube.com/@bearmedia70"
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Kris Lewis"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I have worked with Garry for a few years now. From being a client myself, he's helped me grow my business online and with social media. From website design to drone videos, Garry delivers it all."
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <Script
        id="home-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <HomeContent />
    </>
  );
}
