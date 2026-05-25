import { Metadata } from 'next'
import ClientPage from './videography-client'

export const metadata: Metadata = {
  title: 'Videography & Drone Video Services | Bear Media',
  description: 'Cinematic brand films, event video, and commercial drone photography in Edinburgh, West Lothian, and Fife. Fully licensed and insured.',
  alternates: {
    canonical: 'https://bear-media.com/services/videography',
  },
  openGraph: {
    url: 'https://bear-media.com/services/videography',
    title: 'Videography & Drone Video Services | Bear Media',
    description: 'Cinematic brand films, event video, and commercial drone photography in Edinburgh, West Lothian, and Fife. Fully licensed and insured.',
  }
}

export default function Page() {
  return <ClientPage />
}
