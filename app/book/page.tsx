import { Metadata } from 'next';
import Script from 'next/script';
import BearMedia from '@/components/BearMedia';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call | Bear Media',
  description: 'Book a free 15-minute discovery call with Bear Media. We audit your web presence and map a clear plan for more local enquiries in Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/book',
  },
  openGraph: {
    url: 'https://bear-media.com/book',
    title: 'Book a Free Discovery Call | Bear Media',
    description: 'Book a free 15-minute discovery call with Bear Media. We audit your web presence and map a clear plan for more local enquiries in Scotland.',
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


const breadcrumbSchema_book = {
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
      "name": "Book a Free Discovery Call",
      "item": "https://bear-media.com/book"
    }
  ]
};

export default function BookPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema-book"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_book) }}
      />
      <BearMedia />
    </>
  );;
}
