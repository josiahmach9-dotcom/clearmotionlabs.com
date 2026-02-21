import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clyde-1',
  description: 'A motion-enhanced living-room game console.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
