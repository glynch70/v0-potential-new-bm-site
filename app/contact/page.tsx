import Script from 'next/script';
import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Bear Media | Web Design & Video Scotland',
  description: 'Ready to transform your digital presence? Contact Garry at Bear Media for a chat about web design, drone video, and social media in Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/contact',
  },
  openGraph: {
    url: 'https://bear-media.com/contact',
    title: 'Contact Bear Media | Web Design & Video Scotland',
    description: 'Ready to transform your digital presence? Contact Garry at Bear Media for a chat about web design, drone video, and social media in Scotland.',
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


const breadcrumbSchema_contact = {
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
      "name": "Contact Bear Media",
      "item": "https://bear-media.com/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_contact) }}
      />
      <ContactClient />
    </>
  );;
}
