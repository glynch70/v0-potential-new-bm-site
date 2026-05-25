import { Metadata } from 'next'
import ClientPage from './website-design-client'

export const metadata: Metadata = {
  title: 'Lead-Generating Web Design Scotland | Bear Media',
  description: 'We build high-performance, mobile-optimised lead generation websites for local businesses and trades in West Lothian and Edinburgh.',
  alternates: {
    canonical: 'https://bear-media.com/services/website-design',
  },
  openGraph: {
    url: 'https://bear-media.com/services/website-design',
    title: 'Lead-Generating Web Design Scotland | Bear Media',
    description: 'We build high-performance, mobile-optimised lead generation websites for local businesses and trades in West Lothian and Edinburgh.',
  }
}

export default function Page() {
  return <ClientPage />
}
