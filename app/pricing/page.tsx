import { Metadata } from 'next'
import ClientPage from './pricing-client'

export const metadata: Metadata = {
  title: 'Web Design & Social Media Pricing | Bear Media',
  description: 'Clear, transparent pricing guides for custom website design, social media content, drone video, and training packages in Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/pricing',
  },
  openGraph: {
    url: 'https://bear-media.com/pricing',
    title: 'Web Design & Social Media Pricing | Bear Media',
    description: 'Clear, transparent pricing guides for custom website design, social media content, drone video, and training packages in Scotland.',
  }
}

export default function Page() {
  return <ClientPage />
}
