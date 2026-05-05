import HomeContent from './home-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Social Media West Lothian | Bear Media',
  description: 'Bear Media helps businesses in West Lothian and Edinburgh generate enquiries through web design, video and social media.',
  alternates: {
    canonical: 'https://bear-media.com',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
