import Container from '@/components/layout/container'
import Arrivals from '@/components/layout/home/arrivals'
import Header from '@/components/layout/home/header'
import TopSelling from '@/components/layout/home/topSelling'
import Navigation from '@/components/layout/navigation'
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
      <Navigation />
      <Header />
      <main>
        <Container className='min-h-screen'>
          <Arrivals />
          <TopSelling/>
        </Container>
      </main>
    </>
  )
}
