import { Metadata } from 'next'
import ClientPage from './training-client'

export const metadata: Metadata = {
  title: 'Social Media & AI Tools Training | Bear Media',
  description: 'Practical on-site training in Canva, CapCut, and generative AI tools for businesses in West Lothian and Edinburgh. Own your content creation.',
  alternates: {
    canonical: 'https://bear-media.com/training',
  },
  openGraph: {
    url: 'https://bear-media.com/training',
    title: 'Social Media & AI Tools Training | Bear Media',
    description: 'Practical on-site training in Canva, CapCut, and generative AI tools for businesses in West Lothian and Edinburgh. Own your content creation.',
  }
}

export default function Page() {
  return <ClientPage />
}
