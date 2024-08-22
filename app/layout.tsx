import type { Metadata } from 'next'
import '../styles/globals.css'
import { cn } from '@/utils/css'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  title: 'Shop.co',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={cn('min-h-screen min-w-full')}>{children}</body>
      </html>
    </StoreProvider>
  )
}
