import HomeContent from './home-client';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Web Design & Social Media West Lothian | Bear Media',
  description: 'Bear Media helps businesses in West Lothian and Edinburgh generate enquiries through web design, video and social media.',
  alternates: {
    canonical: 'https://bear-media.com',
  },
  openGraph: {
    url: 'https://bear-media.com',
    title: 'Web Design & Social Media West Lothian | Bear Media',
    description: 'Bear Media helps businesses in West Lothian and Edinburgh generate enquiries through web design, video and social media.',
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why isn't my business getting enquiries online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most local businesses fail to get enquiries due to three main reasons: a trust gap (lack of real proof), no clear path to conversion (friction in the user journey), and passive visibility (waiting to be found instead of actively reaching customers)."
      }
    },
    {
      "@type": "Question",
      "name": "How can I fix my website's conversion rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To improve conversion, you should implement frictionless 'Book a Call' triggers, use high-quality on-site video proof instead of stock photos, and ensure your website is optimized for mobile users with a clear lead-generation architecture."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best way to build trust with local customers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Building trust requires showing the real face behind the business and providing authentic proof of your work. High-end cinematic drone tours and consistent social media updates are excellent tools for building authority in your local area."
      }
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
      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
