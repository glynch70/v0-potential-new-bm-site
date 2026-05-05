import { Metadata } from 'next'
import VideographyContent from './VideographyContent'

export const metadata: Metadata = {
  title: 'Videography West Lothian | Cinematic Business Video | Bear Media',
  description: 'Professional videography and drone services in West Lothian. We capture on-site projects in Livingston, Bathgate, and Broxburn to build your local authority.',
}

export default function VideographyWestLothianPage() {
  return <VideographyContent />
}
