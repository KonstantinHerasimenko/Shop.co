import Container from '@/components/layout/container'
import Arrivals from '@/components/layout/home/arrivals'
import CategoryBrowse from '@/components/layout/home/categories'
import Header from '@/components/layout/home/header'
import Newsletter from '@/components/layout/home/newsletter'
import Reviews from '@/components/layout/home/reviews'
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
      <main className='mb-20'>
        <Container>
          <Arrivals />
          <TopSelling/>
          <CategoryBrowse/>
        </Container>
      </main>
      <Reviews/>
      <Newsletter/>
    </>
  )
}
