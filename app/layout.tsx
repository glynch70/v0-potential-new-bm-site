import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";

import { LenisScrollProvider } from "@/components/LenisScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
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

export const metadata: Metadata = {
  title: "Bear Media | Websites & Social Media That Actually Work",
  description:
    "We build websites and create social media content that gets small businesses seen, trusted, and contacted. Based in Scotland.",
  keywords: [
    "web design",
    "social media content",
    "Edinburgh",
    "West Lothian",
    "Scotland",
    "Bear Media",
    "marketing agency",
  ],
  openGraph: {
    title: "Bear Media | Websites & Social Media That Actually Work",
    description:
      "We build websites and create social media content that gets small businesses seen, trusted, and contacted.",
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
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <head />
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
        <CustomCursor />
        <ScrollProgress />
        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
