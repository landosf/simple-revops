import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple - Revenue Operations Excellence | Drive Predictable Growth',
  description: 'Transform your revenue operations with our proven 90-day recovery system. Stop revenue chaos, eliminate $400K+ annual waste, and drive predictable growth.',
  keywords: 'revenue operations, sales alignment, revenue growth, B2B consulting, revenue recovery',
  authors: [{ name: 'Simple Revenue' }],
  openGraph: {
    title: 'Simple - Turn Revenue Chaos into $2M+ Growth in 90 Days',
    description: 'Proven system that helps B2B companies recover $400K+ annually in revenue waste and build predictable growth engines.',
    url: 'https://simple-revenue.com',
    siteName: 'Simple Revenue',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple - Revenue Operations Excellence',
    description: 'Transform revenue chaos into predictable growth with our 90-day recovery system.',
  }
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}