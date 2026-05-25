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
  }
}

export default function Page() {
  return <ClientPage />
}
