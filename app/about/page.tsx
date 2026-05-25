import { Metadata } from 'next'
import ClientPage from './about-client'

export const metadata: Metadata = {
  title: 'About Bear Media | Web Design & Video Scotland',
  description: 'Meet Garry Lynch, founder of Bear Media in West Lothian. We document the grit, scale, and craft of local businesses through video and websites.',
  alternates: {
    canonical: 'https://bear-media.com/about',
  },
  openGraph: {
    url: 'https://bear-media.com/about',
    title: 'About Bear Media | Web Design & Video Scotland',
    description: 'Meet Garry Lynch, founder of Bear Media in West Lothian. We document the grit, scale, and craft of local businesses through video and websites.',
  }
}

export default function Page() {
  return <ClientPage />
}
