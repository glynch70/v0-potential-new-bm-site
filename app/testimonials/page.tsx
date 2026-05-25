import { Metadata } from 'next'
import ClientPage from './testimonials-client'

export const metadata: Metadata = {
  title: 'Client Reviews & Testimonials | Bear Media',
  description: 'Read real reviews and client success stories from trades, vets, and local businesses in West Lothian, Edinburgh, and Fife.',
  alternates: {
    canonical: 'https://bear-media.com/testimonials',
  },
  openGraph: {
    url: 'https://bear-media.com/testimonials',
    title: 'Client Reviews & Testimonials | Bear Media',
    description: 'Read real reviews and client success stories from trades, vets, and local businesses in West Lothian, Edinburgh, and Fife.',
  }
}

export default function Page() {
  return <ClientPage />
}
