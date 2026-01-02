import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Bear Media',
  description: 'Content for business & websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}
