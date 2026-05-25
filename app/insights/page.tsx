import { Metadata } from 'next'
import ClientPage from './insights-client'

export const metadata: Metadata = {
  title: 'Local Marketing & Business Insights | Bear Media',
  description: 'Expert marketing advice, SEO tips, and lead generation guides for trades and small businesses in West Lothian, Edinburgh, and Central Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/insights',
  },
  openGraph: {
    url: 'https://bear-media.com/insights',
    title: 'Local Marketing & Business Insights | Bear Media',
    description: 'Expert marketing advice, SEO tips, and lead generation guides for trades and small businesses in West Lothian, Edinburgh, and Central Scotland.',
  }
}

export default function Page() {
  return <ClientPage />
}
