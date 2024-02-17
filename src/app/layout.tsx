import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guiffre Money',
  description: 'Your personal finance tracker'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">

          <body className={montserrat.className}><Header />{children}</body>
      </html>
    </ClerkProvider>
  )
}
