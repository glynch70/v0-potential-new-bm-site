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
// SEO METADATA — Updated 22 Feb 2026
// Fixes: Title too long, meta desc too long, OG incomplete
// ═══════════════════════════════════════════════════════
export const metadata: Metadata = {
  metadataBase: new URL("https://bear-media.com"),

  title: {
    default: "Bear Media | Websites & Content Creation | Edinburgh Scotland",
    template: "%s | Bear Media Edinburgh",
  },

  description:
    "Websites, social media content, video production & drone services for small businesses across Edinburgh, West Lothian, Fife & Scotland. Book a free call.",

  keywords: [
    "website design Edinburgh",
    "social media content creation Scotland",
    "video production Edinburgh",
    "drone videography Scotland",
    "content creator West Lothian",
    "small business websites Scotland",
    "Bear Media",
    "web design Broxburn",
    "digital marketing Edinburgh",
    "photography Edinburgh",
  ],

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bear-media.com",
    siteName: "Bear Media",
    title: "Bear Media | Websites & Content Creation | Edinburgh",
    description:
      "Helping small businesses get seen, trusted, and contacted. Websites, social media, video & drone content across Scotland.",
    images: [
      {
        url: "https://bear-media.com/bear-media-hero-logo.png",
        width: 1200,
        height: 630,
        alt: "Bear Media - Websites and Content Creation Edinburgh Scotland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bear Media | Websites & Content Creation | Edinburgh",
    description:
      "Helping small businesses get seen, trusted, and contacted across Scotland.",
    images: ["https://bear-media.com/bear-media-hero-logo.png"],
  },

  alternates: {
    canonical: "https://bear-media.com",
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
  name: "Bear Media",
  image: "https://bear-media.com/bear-media-hero-logo.png",
  url: "https://bear-media.com",
  telephone: "+447879011860",
  email: "info@bear-media.com",
  description:
    "Websites, social media content, video production and drone services for small businesses across Edinburgh, West Lothian, Fife and Scotland.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Broxburn",
    addressRegion: "West Lothian",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9347,
    longitude: -3.4714,
  },
  areaServed: [
    { "@type": "City", name: "Edinburgh" },
    { "@type": "AdministrativeArea", name: "West Lothian" },
    { "@type": "AdministrativeArea", name: "Fife" },
    { "@type": "Country", name: "Scotland" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:30",
  },
  sameAs: [
    "https://www.instagram.com/bearmediascotland",
    "https://www.tiktok.com/@bearmediascotland",
    "https://www.facebook.com/bearmediascotland",
  ],
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RG6BZ50XZY";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Local Business Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      {GA_ID ? (
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
      ) : null}
      <body className="font-sans antialiased">
        <ScrollProgress />
        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
