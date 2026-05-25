import { Metadata } from 'next'
import ClientPage from './services-client'

export const metadata: Metadata = {
  title: 'Our Services | Websites, Video & Social | Bear Media',
  description: 'Professional web design, cinematic drone videography, and scroll-stopping social content to grow local businesses in Edinburgh & West Lothian.',
  alternates: {
    canonical: 'https://bear-media.com/services',
  },
  openGraph: {
    url: 'https://bear-media.com/services',
    title: 'Our Services | Websites, Video & Social | Bear Media',
    description: 'Professional web design, cinematic drone videography, and scroll-stopping social content to grow local businesses in Edinburgh & West Lothian.',
  }
}

export default function Page() {
  return <ClientPage />
}
