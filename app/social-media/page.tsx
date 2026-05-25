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
  }
}

export default function Page() {
  return <ClientPage />
}
