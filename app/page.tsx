import type { Metadata } from 'next';
import MaintenancePage from './maintenance-page';

export const metadata: Metadata = {
  title: 'Bear Media | Website Currently Being Upgraded',
  description:
    'The Bear Media website is being redesigned to better showcase recent client work, photography, video production and websites. Get in touch to discuss a project.',
  alternates: {
    canonical: 'https://bear-media.com',
  },
  openGraph: {
    url: 'https://bear-media.com',
    title: 'Bear Media | Website Currently Being Upgraded',
    description:
      'The Bear Media website is being redesigned to better showcase recent client work, photography, video production and websites. Get in touch to discuss a project.',
    type: 'website',
    siteName: 'Bear Media',
    locale: 'en_GB',
  },
};

export default function HomePage() {
  return <MaintenancePage />;
}
