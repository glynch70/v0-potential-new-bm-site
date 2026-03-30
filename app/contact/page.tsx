import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Bear Media | Start Your Project',
  description: 'Ready to transform your digital presence? Contact Garry at Bear Media for a no-nonsense chat about web design, drone video, and social media content in Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
