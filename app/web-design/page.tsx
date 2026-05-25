import { Metadata } from 'next'
import ClientPage from './web-design-client'

export const metadata: Metadata = {
  title: 'High-Performance Website Design | Bear Media',
  description: 'Custom website design and development for trades, construction companies, and local service businesses in Edinburgh and West Lothian.',
  alternates: {
    canonical: 'https://bear-media.com/web-design',
  },
  openGraph: {
    url: 'https://bear-media.com/web-design',
    title: 'High-Performance Website Design | Bear Media',
    description: 'Custom website design and development for trades, construction companies, and local service businesses in Edinburgh and West Lothian.',
  }
}

export default function Page() {
  return <ClientPage />
}
