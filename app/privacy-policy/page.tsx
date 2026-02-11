import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bear Media',
  description: 'How Bear Media collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="February 2026">
      <p>
        Bear Media ("we", "us", "our") is committed to protecting your privacy. This policy explains
        how we collect, use, and safeguard your personal data when you visit our website or use our
        services.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>When you use our contact form or engage our services, we may collect:</p>
      <ul>
        <li>Your name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Project details and requirements</li>
      </ul>

      <h3>Information collected automatically</h3>
      <p>When you visit our website, we automatically collect certain data through:</p>
      <ul>
        <li>
          <strong>Google Analytics (GA4)</strong> — anonymised usage data including pages visited,
          time on site, device type, and approximate location. IP addresses are anonymised.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — performance metrics including page load times and Web
          Vitals scores.
        </li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your enquiries and provide our services</li>
        <li>Send project updates and communications</li>
        <li>Improve our website performance and user experience</li>
        <li>Analyse website traffic and usage patterns</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal data. We may share data with trusted
        third-party service providers who assist in operating our website and services:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — website hosting and analytics
        </li>
        <li>
          <strong>Google</strong> — analytics (GA4)
        </li>
        <li>
          <strong>Resend</strong> — email delivery for contact form submissions
        </li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        Contact form submissions are retained for as long as necessary to respond to your enquiry
        and for our legitimate business purposes. Analytics data is retained according to Google
        Analytics and Vercel's default retention policies.
      </p>

      <h2>5. Your Rights</h2>
      <p>Under UK GDPR, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to or restrict processing of your data</li>
        <li>Data portability</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at{' '}
        <a href="mailto:info@bear-media.com">info@bear-media.com</a>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Our website uses cookies to enable analytics and improve your experience. For full details,
        please see our <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices of these external sites.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this privacy policy from time to time. Any changes will be posted on this
        page with an updated revision date.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy-related questions, contact us at{' '}
        <a href="mailto:info@bear-media.com">info@bear-media.com</a> or call{' '}
        <a href="tel:+447879011860">+44 7879 011860</a>.
      </p>
      <p>Bear Media, Broxburn, West Lothian, EH52 6PH, Scotland.</p>
    </LegalPageLayout>
  );
}
