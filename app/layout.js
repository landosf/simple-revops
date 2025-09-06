import './globals.css'

export const metadata = {
  title: 'Simple - Unify Your Revenue Ecosystem',
  description: 'Align your revenue ecosystem and drive measurable growth with our proven infrastructure, analytics, and strategy framework.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}