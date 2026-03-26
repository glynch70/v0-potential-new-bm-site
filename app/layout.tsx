import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import { LenisScrollProvider } from "@/components/LenisScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export { reportWebVitals } from "@/lib/metrics";

// ═══════════════════════════════════════════════════════
// SEO METADATA — Updated March 2026
// ═══════════════════════════════════════════════════════
export const metadata: Metadata = {
  metadataBase: new URL("https://www.bear-media.com"),

  title: "Bear Media | Websites & Social Media Content | Central Scotland",

  description:
    "Bear Media builds fast websites and scroll-stopping social media content for local businesses across Edinburgh, West Lothian, Fife, Glasgow, Falkirk and Central Scotland. No agency fees. Real results.",

  keywords: [
    "website design Edinburgh",
    "website design West Lothian",
    "social media management Edinburgh",
    "digital marketing Central Scotland",
    "website design Falkirk",
    "website design Glasgow",
    "SEO West Lothian",
    "Bear Media Broxburn",
  ],

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.bear-media.com",
    siteName: "Bear Media",
    title: "Bear Media | Websites & Social Media Content",
    description:
      "Helping businesses across Central Scotland get seen, trusted, and contacted online.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bear Media - Websites & Social Media Content",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bear Media | Websites & Social Media Content",
    description:
      "Helping businesses across Central Scotland get seen, trusted, and contacted online.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.bear-media.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ═══════════════════════════════════════════════════════
// LOCAL BUSINESS SCHEMA — Tells Google you're a real
// business in Broxburn (helps with map pack rankings)
// ═══════════════════════════════════════════════════════
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bear Media",
  "description": "Websites and social media content for local businesses across Central Scotland",
  "url": "https://www.bear-media.com",
  "logo": "https://www.bear-media.com/bear-media-logo.png",
  "image": "https://www.bear-media.com/og-image.jpg",
  "telephone": "+447879011860",
  "email": "info@bear-media.com",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Broxburn",
    "addressLocality": "West Lothian",
    "addressRegion": "Scotland",
    "postalCode": "EH52 6PH",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.934,
    "longitude": -3.471
  },
  "areaServed": [
    "Edinburgh", "West Lothian", "Fife", "Glasgow", "Falkirk", "Central Scotland", "Broxburn", "Livingston", "Linlithgow"
  ],
  "serviceType": ["Website Design", "Social Media Management", "SEO", "Drone Photography", "Google Business Management"],
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://www.facebook.com/bearmediacontentservices",
    "https://www.instagram.com/bear.media",
    "https://www.linkedin.com/company/bear-media",
    "https://www.tiktok.com/@bear.media"
  ]
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RG6BZ50XZY";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Local Business Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Google Analytics - moved to head to prevent hydration mismatch */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  anonymize_ip: true,
                  page_path: window.location.pathname
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ScrollProgress />
        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
