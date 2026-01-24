import Script from "next/script"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { LenisScrollProvider } from "@/components/LenisScrollProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bear Media",
  description: "Websites & Social Media Content",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RG6BZ50XZY"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RG6BZ50XZY', {
            anonymize_ip: true
          });
        `}
      </Script>
      <body className="font-sans antialiased">
        <LenisScrollProvider>
          {children}
          <Analytics />
        </LenisScrollProvider>
      </body>
    </html>
  )
}
