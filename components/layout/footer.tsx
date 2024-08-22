import { Route } from 'next'
import Link from 'next/link'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import applePay from '@/assets/logos/applePay.svg'
import googlePay from '@/assets/logos/googlePay.svg'
import mastercard from '@/assets/logos/mastercard.svg'
import paypal from '@/assets/logos/paypal.svg'
import visa from '@/assets/logos/visa.svg'
import BaseIcon from '@/components/ui/BaseIcon'

export default function Footer() {
  function LinkSection(props: { links: { text: string; href: Route<string> }[]; heading: string }) {
    return (
      <section className="justify-self-center">
        <h5 className="tracking-[3px] font-medium text-body-3 uppercase mb-6">{props.heading}</h5>
        <ul className="capitalize flex flex-col gap-4 text-black-06">
          {props.links.map((link) => {
            return (
              <li key={link.text}>
                <Link href={link.href} className='text-body-3 hover:text-black duration-300'>{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

  return (
    <footer className="bg-snowflake pt-36 pb-20 px-27">
      <article className="grid grid-cols-5 pb-10 mb-5 border-b-2 border-black-01">
        <section className=" justify-self-center">
          <h3 className="uppercase font-bold text-heading-3 mb-6">shop.co</h3>
          <p className="text-body-4 text-black-06 mb-9">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <ul className="flex gap-3">
            <li className="p-2 bg-white rounded-full border-2 border-black-01">
              <Twitter />
            </li>
            <li className="p-2 bg-white rounded-full border-2 border-black-01">
              <Facebook />
            </li>
            <li className="p-2 bg-white rounded-full border-2 border-black-01">
              <Instagram />
            </li>
            <li className="p-2 bg-white rounded-full border-2 border-black-01">
              <Github />
            </li>
          </ul>
        </section>
        <LinkSection
          links={[
            { text: 'about', href: '/' },
            { text: 'features', href: '/' },
            { text: 'works', href: '/' },
            { text: 'career', href: '/' },
          ]}
          heading="company"
        />
        <LinkSection
          links={[
            { text: 'Customer Support', href: '/' },
            { text: 'Delivery Details', href: '/' },
            { text: 'Terms & Conditions', href: '/' },
            { text: 'Privacy Policy', href: '/' },
          ]}
          heading="help"
        />
        <LinkSection
          links={[
            { text: 'Account', href: '/' },
            { text: 'Manage Deliveries', href: '/' },
            { text: 'Orders', href: '/' },
            { text: 'Payments', href: '/' },
          ]}
          heading="faq"
        />
        <LinkSection
          links={[
            { text: 'Free eBooks', href: '/' },
            { text: 'Development Tutorial', href: '/' },
            { text: 'How to - Blog', href: '/' },
            { text: 'Youtube Playlist', href: '/' },
          ]}
          heading="resources"
        />
      </article>
      <div className="flex justify-between items-end">
        <h6 className="text-black-06 text-body-4">
          © 2024 Shop.co by Konstantin Herasimenko. Design template by Hamza Naeem
        </h6>
        <ul className="grid grid-cols-5 gap-3">
          <li className="bg-white py-[0.625rem] px-2 rounded-md">
            <BaseIcon as={visa} className="h-4" />
          </li>
          <li className="bg-white py-[0.625rem] px-2 rounded-md">
            <BaseIcon as={mastercard} className="h-4" />
          </li>
          <li className="bg-white py-[0.625rem] px-2 rounded-md">
            <BaseIcon as={paypal} className="h-4" />
          </li>
          <li className="bg-white py-[0.625rem] px-2 rounded-md">
            <BaseIcon as={applePay} className="h-4" />
          </li>
          <li className="bg-white py-[0.625rem] px-2 rounded-md">
            <BaseIcon as={googlePay} className="h-4" />
          </li>
        </ul>
      </div>
    </footer>
  )
}
