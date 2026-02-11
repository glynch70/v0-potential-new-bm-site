import { Metadata } from 'next';
import { LegalPageLayout } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy | Bear Media',
  description: 'How Bear Media uses cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="February 2026">
      <p>
        This policy explains how Bear Media uses cookies and similar technologies on our website at
        bear-media.com.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help the
        website remember your preferences and understand how you interact with the site.
      </p>

      <h2>2. Cookies We Use</h2>

      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function and cannot be switched off. They
        are usually set in response to actions you take, such as submitting the contact form.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        We use analytics cookies to understand how visitors interact with our website. This helps
        us improve the site experience.
      </p>

      <ul>
        <li>
          <strong>Google Analytics (GA4)</strong> — We use Google Analytics to collect anonymised
          data about page views, session duration, device type, and approximate geographic location.
          IP anonymisation is enabled. Cookies set: <code>_ga</code>, <code>_ga_*</code>. Retention:
          up to 14 months.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — Vercel collects performance data (Web Vitals, page
          load times) to help us monitor and improve site speed. Vercel Analytics is
          privacy-friendly and does not use cookies for tracking individual users.
        </li>
      </ul>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers allow you
        to:
      </p>
      <ul>
        <li>View what cookies are stored and delete them individually</li>
        <li>Block third-party cookies</li>
        <li>Block cookies from specific sites</li>
        <li>Block all cookies</li>
        <li>Delete all cookies when you close the browser</li>
      </ul>
      <p>
        Please note that blocking or deleting cookies may affect website functionality.
      </p>

      <h2>4. Google Analytics Opt-Out</h2>
      <p>
        You can opt out of Google Analytics by installing the{' '}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this cookie policy from time to time. Changes will be posted on this page
        with an updated revision date.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about our use of cookies, contact us at{' '}
        <a href="mailto:info@bear-media.com">info@bear-media.com</a> or call{' '}
        <a href="tel:+447879011860">+44 7879 011860</a>.
      </p>
    </LegalPageLayout>
  );
}
