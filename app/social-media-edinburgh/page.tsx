import { Metadata } from 'next'
import SocialMediaEdinburghContent from './SocialMediaEdinburghContent'

export const metadata: Metadata = {
  title: 'Social Media Edinburgh | Content Creation & Management | Bear Media',
  description: 'Premium social media management and content creation in Edinburgh. We help high-trust businesses across the Capital turn attention into consistent enquiries.',
}

export default function SocialMediaEdinburghPage() {
  return <SocialMediaEdinburghContent />
}
