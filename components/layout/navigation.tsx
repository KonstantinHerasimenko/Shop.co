'use client';

import { ReactNode, useState } from 'react';
import { Route } from 'next';
import Link from 'next/link';
import { ChevronDown, CircleUser, Search, ShoppingCart } from 'lucide-react';
import arrowDownIcon from '@/assets/icons/arrowDown.svg';
import cartIcon from '@/assets/icons/cart.svg';
import LogoFullICon from '@/assets/icons/logoFull.svg';
import profileIcon from '@/assets/icons/profile.svg';
import searchIcon from '@/assets/icons/search.svg';
import Container from '@/components/layout/container';
import BaseIcon from '@/components/ui/BaseIcon';
import { cn } from '@/utils/css';
import { useAppSelector } from '@/lib/redux/hooks';


const pagesList: Array<{ label: string; href: Route }> = [
  {
    label: 'on sale',
    href: '/',
  },
  {
    label: 'new arrivals',
    href: '/',
  },
  {
    label: 'brands',
    href: '/',
  },
]

const shopCategories: Array<{ label: string; href: Route }> = [
  {
    label: 'T-shirts',
    href: '/shop',
  },
  {
    label: 'shorts',
    href: '/shop',
  },
  {
    label: 'shirts',
    href: '/shop',
  },
  {
    label: 'hoodies',
    href: '/shop',
  },
  {
    label: 'jeans',
    href: '/shop',
  },
]

export default function Navigation() {
  const [isDropDownActive, setIsDropDownActive] = useState(false)
  const isPopUpHidden = useAppSelector((state) => state.menusSlice.popUp.isHidden)

  function toggleDropDown() {
    setIsDropDownActive((prev: boolean) => !prev)
  }

  return (
    <nav className={cn("fixed z-50 bg-white w-full",!isPopUpHidden && "top-9")}>
      <Container className="grid grid-cols-[max-content_max-content_auto_max-content] gap-10 items-center py-6">
        <Link href="/">
          <BaseIcon as={LogoFullICon} className="h-6" />
        </Link>

        <ul className="flex items-center gap-6 capitalize h-[100%] w-max">
          <li className="h-full">
            <button
              className="capitalize h-full flex items-center"
              onClick={() => toggleDropDown()}
            >
              <span className="flex items-center gap-1">
                <h3 className="underline-parent text-body-3">shop</h3>
                <ChevronDown className={cn('-mb-1 duration-300 ease-in-out', isDropDownActive && "rotate-180")} size={20}/>
              </span>
            </button>
            {/*
              //?drop-down menu
            */}
            <ul className={cn(!isDropDownActive ? 'hidden' : 'fixed')}>
              {shopCategories.map(({ label, href }, index) => {
                return (
                  <li
                    key={label.replace(/ /g, '')}
                    className={cn(
                      'relative px-8 w-52 right-8 bg-white text-body-3',
                      'py-2',
                      index === 0 && 'pt-6 pb-2',
                      index === shopCategories.length - 1 && 'pb-6 pt-2 rounded-b-2.5xl'
                    )}
                  >
                    <Link href={href} className="underline-parent">
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          {pagesList.map(({ label, href }): ReactNode => {
            return (
              <li key={label.replace(/ /g, '')} className="underline-parent">
                <Link href={href}>{label}</Link>
              </li>
            )
          })}
        </ul>
        
        <form className="bg-snowflake pr-4.5 rounded-13xl grid grid-cols-[max-content_auto]">
          <button className='hover:text-black text-black-04 px-4.5 py-3.5  duration-300'>
            <Search size={24} strokeWidth={1}/>
          </button>
          <input
            name="searchBar"
            className="focus:outline-none bg-transparent placeholder:text-black-04"
            placeholder="Search for products..."
          />
        </form>

        <ul className='flex gap-4.5'>
          <Link href="/">
            <ShoppingCart strokeWidth={2}/>
          </Link>
          <Link href="/">
            <CircleUser strokeWidth={2}/>
          </Link>
        </ul>
      </Container>
    </nav>
  )
}