import { FC, SVGProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import calvinKleinLogo from "@/assets/logos/calvin_klein.svg";
import gucciLogo from "@/assets/logos/gucci.svg";
import pradaLogo from "@/assets/logos/prada.svg";
import versaceLogo from "@/assets/logos/versace.svg";
import zaraLogo from "@/assets/logos/zara.svg";
import headerBg from '@/assets/photos/headerBg.jpeg';
import Container from '@/components/layout/container';
import Navigation from '@/components/layout/navigation';
import PopUp from '@/components/layout/popUp';
import BaseIcon from '@/components/ui/BaseIcon';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Shop.co | Home page',
  alternates: {
    canonical: '/',
  },
}

const brandImages: Array<{ name: string; src: FC<SVGProps<SVGElement>> }> = [
  {
    name: 'versace',
    src: versaceLogo,
  },
  {
    name: 'zara',
    src: zaraLogo,
  },
  {
    name: 'gucci',
    src: gucciLogo,
  },
  {
    name: 'prada',
    src: pradaLogo,
  },
  {
    name: 'calvinKlein',
    src: calvinKleinLogo,
  },
]

export default function HomePage() {
  return (
    <>
      <PopUp />
      <Navigation />
      <header className="min-h-screen grid grid-rows-[auto_max-content]">
        <Container className="grid grid-cols-2 h-full pt-32">
          <article className="flex flex-col self-center">
            <h1 className="text-heading-1 font-bold uppercase">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black-06 mb-8">
              Browse through our diverse range of meticulously crafted garments, designed to bring
              out your individuality and cater to your sense of style.
            </p>
            <Link
              href="/"
              className="text-white bg-black px-13.5 py-3.5 w-max rounded-13xl capitalize text-body-3 font-medium mb-12"
            >
              shop now
            </Link>
            <ul className="flex">
              <li className="pr-8">
                <h3 className="text-heading-3 font-bold">200+</h3>
                <h5 className="text-body-3 capitalize text-black-06">International Brands</h5>
              </li>
              <li className="px-8 border-x-1 border-black-01">
                <h3 className="text-heading-3 font-bold">2000+</h3>
                <h5 className="text-body-3 capitalize text-black-06">High-Quality Products</h5>
              </li>
              <li className="pl-8">
                <h3 className="text-heading-3 font-bold">30000+</h3>
                <h5 className="text-body-3 capitalize text-black-06">Happy Customers</h5>
              </li>
            </ul>
          </article>
          <Image src={headerBg} alt="" className="self-end" />
        </Container>
        <section className="bg-black">
          <Container className='flex justify-between py-11'>
            {brandImages.map(({ name, src }) => {
              return <BaseIcon as={src} key={name} className='h-8'/>
            })}
          </Container>
        </section>
      </header>
    </>
  )
}