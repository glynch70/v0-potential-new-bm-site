import { Metadata } from 'next'
import ClientPage from './video-production-client'

export const metadata: Metadata = {
  title: 'Video Production & Cinematic Films | Bear Media',
  description: 'Professional corporate videos, event reels, and commercial drone videography for local brands in West Lothian, Edinburgh, and Central Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/video-production',
  },
  openGraph: {
    url: 'https://bear-media.com/video-production',
    title: 'Video Production & Cinematic Films | Bear Media',
    description: 'Professional corporate videos, event reels, and commercial drone videography for local brands in West Lothian, Edinburgh, and Central Scotland.',
  }
}

export default function Page() {
  return <ClientPage />
}
