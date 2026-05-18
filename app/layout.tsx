import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Poppins, Figtree, Bebas_Neue, Inter_Tight } from "next/font/google";
import { LenisScrollProvider } from "@/components/LenisScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import StickyCTA from "@/components/StickyCTA";
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

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export { reportWebVitals } from "@/lib/metrics";

// ═══════════════════════════════════════════════════════
// SEO METADATA — Redesign March 2026
// ═══════════════════════════════════════════════════════
export const viewport: Viewport = {
  themeColor: "#FFD700",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bear-media.com"),

  title: "Bear Media | Visibility & Leads System | Get Seen. Get Leads. Grow Your Business.",

  description:
    "Bear Media helps local businesses across the Scottish Central Belt get visible online and turn that visibility into real leads. Premium websites, drone video, and social content.",

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
    description: "Solo creative agency. Websites. Drone. Video. Social Media. Built for construction companies, trades businesses and local SMEs.",
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
    description: "Solo creative agency. Websites. Drone. Video. Social Media. Built for construction companies, trades businesses and local SMEs.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

// ═══════════════════════════════════════════════════════
// STRUCTURED DATA (JSON-LD) — Enhanced March 2026
// ═══════════════════════════════════════════════════════
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bear Media",
    "description": "Solo creative agency providing websites, drone video, and social media content for Scottish small businesses.",
    "url": "https://bear-media.com",
    "logo": "https://bear-media.com/bear-media-logo-horizontal-white.png",
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
      "Edinburgh", "West Lothian", "Fife", "Glasgow", "Falkirk", "Central Scotland", "Broxburn", "Livingston", "Linlithgow", "Bathgate"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bear Media Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design",
            "description": "Fast, clean websites built to turn people into customers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Content",
            "description": "Vertical video and social strategy that stops the scroll."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Production",
            "description": "Cinematic drone footage and professional video production."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Training",
            "description": "Learn Canva, CapCut, and AI tools to own your content."
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bear Media",
    "url": "https://bear-media.com",
    "logo": "https://bear-media.com/bear-media-logo-horizontal-white.png",
    "sameAs": [
      "https://www.facebook.com/bearmediacontentservices",
      "https://www.instagram.com/bearmedia70/",
      "https://www.linkedin.com/in/garrylynch",
      "https://www.youtube.com/@bearmedia70"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Bear Media"
    },
    "author": {
      "@type": "Person",
      "name": "Kris Lewis"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "I have worked with Garry for a few years now. From being a client myself, he's helped me grow my business online and with social media. From website design to drone videos, Garry delivers it all."
  },
  {
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
        "name": "Web Design",
        "item": "https://bear-media.com/web-design"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Social Media",
        "item": "https://bear-media.com/social-media"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Video Production",
        "item": "https://bear-media.com/video-production"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Training",
        "item": "https://bear-media.com/training"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why isn't my business getting enquiries online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most local businesses fail to get enquiries due to three main reasons: a trust gap (lack of real proof), no clear path to conversion (friction in the user journey), and passive visibility (waiting to be found instead of actively reaching customers)."
        }
      },
      {
        "@type": "Question",
        "name": "How can I fix my website's conversion rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To improve conversion, you should implement frictionless 'Book a Call' triggers, use high-quality on-site video proof instead of stock photos, and ensure your website is optimized for mobile users with a clear lead-generation architecture."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best way to build trust with local customers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Building trust requires showing the real face behind the business and providing authentic proof of your work. High-end cinematic drone tours and consistent social media updates are excellent tools for building authority in your local area."
        }
      }
    ]
  }
];

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RG6BZ50XZY";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${figtree.variable} ${bebasNeue.variable} ${interTight.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
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
      <body className="antialiased selection:bg-brand-yellow selection:text-neutral-950" suppressHydrationWarning>
        <ScrollProgress />
        <LenisScrollProvider>
          {children}
          <StickyCTA />
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  );
}

