import type { Metadata } from 'next'
import '../styles/globals.css'
import { cn } from '@/utils/css'

export const metadata: Metadata = {
  title: 'Shop.co',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen min-w-full bg-[#F2F0F1]')}>{children}</body>
    </html>
  )
}
