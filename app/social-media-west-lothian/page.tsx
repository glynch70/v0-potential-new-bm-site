import { Metadata } from 'next'
import SocialMediaContent from './SocialMediaContent'

export const metadata: Metadata = {
  title: 'Social Media West Lothian | Content Creation & Management | Bear Media',
  description: 'Professional social media management and content creation in West Lothian. We help businesses in Livingston, Bathgate, and Broxburn turn attention into enquiries.',
}

export default function SocialMediaWestLothianPage() {
  return <SocialMediaContent />
}
