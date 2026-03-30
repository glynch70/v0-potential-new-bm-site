import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Figtree } from "next/font/google";
import { LenisScrollProvider } from "@/components/LenisScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export { reportWebVitals } from "@/lib/metrics";

// ═══════════════════════════════════════════════════════
// SEO METADATA — Redesign March 2026
// ═══════════════════════════════════════════════════════
export const metadata: Metadata = {
  metadataBase: new URL("https://bear-media.com"),

  title: "Bear Media | Websites, Drone Video & Social Media | Edinburgh, Fife & Central Scotland",

  description:
    "Bear Media is a solo creative agency in West Lothian. Websites, drone video & social media for Scottish SMEs. No monthly fees — you own 100% of the code.",

  keywords: [
    "web design Scotland",
    "drone videography Edinburgh",
    "social media management Fife",
    "Bear Media",
    "Broxburn",
    "West Lothian",
    "Glasgow content creator",
    "website design Edinburgh",
    "digital marketing Scotland",
  ],

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bear-media.com",
    siteName: "Bear Media",
    title: "Bear Media | Websites, Drone Video & Social Media",
    description:
      "Solo creative agency. Websites. Drone. Video. Social Media. Built for businesses that mean business.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bear Media - Websites, Drone & Social Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bear Media | Websites, Drone Video & Social Media",
    description:
      "Solo creative agency. Websites. Drone. Video. Social Media. Built for businesses that mean business.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ═══════════════════════════════════════════════════════
// LOCAL BUSINESS SCHEMA — Updated March 2026
// ═══════════════════════════════════════════════════════
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bear Media",
  "description": "Solo creative agency providing websites, drone video, and social media content for Scottish small businesses.",
  "url": "https://bear-media.com",
  "logo": "https://bear-media.com/bear-media-logo.png",
  "image": "https://bear-media.com/og-image.jpg",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bear Media Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drone Videography"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Implementation"
        }
      }
    ]
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/bearmediacontentservices",
    "https://www.instagram.com/bear.media",
    "https://www.linkedin.com/in/garrylynch",
    "https://www.youtube.com/@bearmedia70"
  ]
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RG6BZ50XZY";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
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
      <body className="font-poppins antialiased text-[#333]" suppressHydrationWarning>
        <ScrollProgress />
        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  );
}

