import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'py2rs.info - Python to Rust for Developers',
  description: 'Learn Rust coming from Python. Tutorials, guides, and resources for Python developers transitioning to Rust.',
  keywords: 'Python, Rust, programming, tutorial, transition, developers',
  metadataBase: new URL('https://py2rs.info'),
  openGraph: {
    title: 'py2rs.info - Python to Rust for Developers',
    description: 'Learn Rust coming from Python. Tutorials, guides, and resources for Python developers transitioning to Rust.',
    url: 'https://py2rs.info',
    siteName: 'py2rs.info',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'py2rs.info - Python to Rust for Developers',
    description: 'Learn Rust coming from Python. Tutorials, guides, and resources for Python developers transitioning to Rust.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
