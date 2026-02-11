import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";

import { LenisScrollProvider } from "@/components/LenisScrollProvider";
import "./globals.css";

export { reportWebVitals } from "@/lib/metrics";

export const metadata: Metadata = {
  title: "Bear Media | Websites & Social Media Content",
  description:
    "Professional websites and social media content for small businesses in Edinburgh, West Lothian, Fife & Central Scotland. Get seen, build trust, get contacted.",
  keywords: [
    "web design",
    "social media content",
    "Edinburgh",
    "West Lothian",
    "Scotland",
    "Bear Media",
  ],
  openGraph: {
    title: "Bear Media | Websites & Social Media Content",
    description:
      "Helping small businesses get seen, trusted, and contacted.",
    type: "website",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-RG6BZ50XZY";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
      <body className="font-sans antialiased grain-overlay">
        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
