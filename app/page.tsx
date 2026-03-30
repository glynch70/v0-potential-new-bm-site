import HomeContent from './home-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://bear-media.com',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
