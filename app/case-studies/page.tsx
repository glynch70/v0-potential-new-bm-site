import { Metadata } from 'next'
import ClientPage from './case-studies-client'

export const metadata: Metadata = {
  title: 'Case Studies | Local Business Success | Bear Media',
  description: 'See how we help businesses in West Lothian and Edinburgh generate more enquiries through high-converting web design, video, and social content.',
  alternates: {
    canonical: 'https://bear-media.com/case-studies',
  },
  openGraph: {
    url: 'https://bear-media.com/case-studies',
    title: 'Case Studies | Local Business Success | Bear Media',
    description: 'See how we help businesses in West Lothian and Edinburgh generate more enquiries through high-converting web design, video, and social content.',
  }
}

export default function Page() {
  return <ClientPage />
}
