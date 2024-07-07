import PopUp from '@/components/layout/popUp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop.co | Home page',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <PopUp />
    </>
  )
}
