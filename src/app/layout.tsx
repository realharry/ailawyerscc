import type { Metadata } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'AI Lawyers - Legal AI Agents Showcase',
  description: 'Discover specialized AI agents for legal knowledge and assistance. Our AI lawyers provide expert guidance across various legal domains.',
  keywords: ['AI lawyer', 'legal AI', 'artificial intelligence', 'legal assistant', 'law'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "font-sans antialiased theme-gold-black"
      )}>
        {children}
      </body>
    </html>
  )
}