import Script from 'next/script';
import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bear Media',
  description: 'Terms and conditions for Bear Media website design, video production, and social media services for businesses in Scotland.',
  alternates: {
    canonical: 'https://bear-media.com/terms-conditions',
  },
  openGraph: {
    url: 'https://bear-media.com/terms-conditions',
    title: 'Terms & Conditions | Bear Media',
    description: 'Terms and conditions for Bear Media website design, video production, and social media services for businesses in Scotland.',
    type: 'website',
    siteName: 'Bear Media',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bear Media — Web Design & Video Scotland',
      },
    ],
  }
};


const breadcrumbSchema_terms_conditions = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://bear-media.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Terms & Conditions",
      "item": "https://bear-media.com/terms-conditions"
    }
  ]
};

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="February 2026">
      <Script
        id="breadcrumb-schema-terms-conditions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema_terms_conditions) }}
      />
      <p>
        These terms and conditions outline the rules and regulations for the use of Bear Media's
        website and services. By accessing this website and engaging our services, you accept these
        terms in full.
      </p>

      <h2>1. Services</h2>
      <p>
        Bear Media provides web design, development, and social media content creation services for
        small businesses. The specific scope of work for each project will be outlined in a separate
        project proposal or agreement.
      </p>

      <h2>2. Quotes & Pricing</h2>
      <p>
        All quotes provided are valid for 30 days from the date of issue unless otherwise stated.
        Prices are quoted in GBP and exclude VAT unless otherwise specified. A deposit may be
        required before work commences.
      </p>

      <h2>3. Payment Terms</h2>
      <p>
        Payment terms will be outlined in your project proposal. Typically, a 50% deposit is
        required upfront with the remaining balance due upon project completion. Late payments may
        incur additional charges.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        Upon full payment, the client receives ownership of the final deliverables. Bear Media
        retains the right to display completed work in our portfolio and marketing materials unless
        otherwise agreed in writing.
      </p>
      <p>
        Third-party assets (stock images, fonts, plugins) remain subject to their respective
        licences.
      </p>

      <h2>5. Client Responsibilities</h2>
      <p>
        Clients are responsible for providing all necessary content (text, images, brand guidelines)
        in a timely manner. Delays in providing content may affect project timelines.
      </p>

      <h2>6. Revisions</h2>
      <p>
        Each project includes a reasonable number of revisions as outlined in the project proposal.
        Additional revisions beyond the agreed scope may incur extra charges.
      </p>

      <h2>7. Cancellation</h2>
      <p>
        Either party may cancel a project with written notice. In the event of cancellation, payment
        is due for all work completed up to the date of cancellation. Deposits are non-refundable.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        Bear Media shall not be liable for any indirect, incidental, or consequential damages
        arising from the use of our services. Our total liability shall not exceed the total fees
        paid for the specific project in question.
      </p>

      <h2>9. Website Hosting & Maintenance</h2>
      <p>
        Unless a separate hosting and maintenance agreement is in place, Bear Media is not
        responsible for the ongoing hosting, security, or maintenance of delivered websites after
        handover.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of Scotland. Any
        disputes shall be subject to the exclusive jurisdiction of the Scottish courts.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about these terms, please contact us at{' '}
        <a href="mailto:info@bear-media.com">info@bear-media.com</a> or call{' '}
        <a href="tel:+447879011860">+44 7879 011860</a>.
      </p>
    </LegalPageLayout>
  );
}
