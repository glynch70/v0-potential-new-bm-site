import { Metadata } from 'next'
import ClientPage from './drone-client'

export const metadata: Metadata = {
  title: 'Drone Video & Aerial Photography Scotland | Bear Media',
  description: 'Licensed CAA commercial drone videography in Edinburgh, West Lothian, and Fife. Panoramic 4K aerial footage for construction, events & SMEs.',
  alternates: {
    canonical: 'https://bear-media.com/drone',
  },
  openGraph: {
    url: 'https://bear-media.com/drone',
    title: 'Drone Video & Aerial Photography Scotland | Bear Media',
    description: 'Licensed CAA commercial drone videography in Edinburgh, West Lothian, and Fife. Panoramic 4K aerial footage for construction, events & SMEs.',
  }
}

export default function Page() {
  return <ClientPage />
}
