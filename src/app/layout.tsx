import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { cn } from '@/utils'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'

const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - ',
    default: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="space-y-16 lg:space-y-36">
          <Header />
          <>{children}</>
          <Footer />
        </div>

        <Toaster />
      </body>
    </html>
  )
}
