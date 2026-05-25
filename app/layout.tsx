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

  title: "Bear Media | Web Design & Social Media Scotland",

  description:
    "Web design, video production, and social media management in West Lothian, Edinburgh & Fife. We build systems that generate local enquiries.",

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
    title: "Bear Media | Web Design & Social Media Scotland",
    description: "Web design, video production, and social media management in West Lothian, Edinburgh & Fife. We build systems that generate local enquiries.",
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
    title: "Bear Media | Web Design & Social Media Scotland",
    description: "Web design, video production, and social media management in West Lothian, Edinburgh & Fife. We build systems that generate local enquiries.",
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
    "@type": "Organization",
    "@id": "https://bear-media.com/#organization",
    "name": "Bear Media",
    "url": "https://bear-media.com",
    "logo": "https://bear-media.com/bear-media-logo-horizontal-white.png",
    "image": "https://bear-media.com/og-image.jpg",
    "email": "info@bear-media.com",
    "telephone": "+447879011860",
    "sameAs": [
      "https://www.facebook.com/bearmediacontentservices",
      "https://www.instagram.com/bearmedia70/",
      "https://www.linkedin.com/in/garrylynch",
      "https://www.youtube.com/@bearmedia70"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Broxburn",
      "addressLocality": "West Lothian",
      "addressRegion": "Scotland",
      "postalCode": "EH52 6PH",
      "addressCountry": "GB"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bear-media.com/#website",
    "name": "Bear Media",
    "url": "https://bear-media.com",
    "publisher": {
      "@id": "https://bear-media.com/#organization"
    }
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wt02mqo6ya");
          `}
        </Script>
      </head>
      <body className="antialiased selection:bg-gold selection:text-neutral-950" suppressHydrationWarning>
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

