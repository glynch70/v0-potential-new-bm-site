import { Metadata } from 'next'
import ClientPage from './portfolio-client'

export const metadata: Metadata = {
  title: 'Our Work | Websites, Video & Social Media | Bear Media',
  description: 'Explore our portfolio of web design, drone video, and branding projects for trades and local businesses across Edinburgh and West Lothian.',
  alternates: {
    canonical: 'https://bear-media.com/portfolio',
  },
  openGraph: {
    url: 'https://bear-media.com/portfolio',
    title: 'Our Work | Websites, Video & Social Media | Bear Media',
    description: 'Explore our portfolio of web design, drone video, and branding projects for trades and local businesses across Edinburgh and West Lothian.',
  }
}

export default function Page() {
  return <ClientPage />
}
