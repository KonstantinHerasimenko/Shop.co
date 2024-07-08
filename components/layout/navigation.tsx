'use client'

import { ReactNode, useState } from 'react'
import { Route } from 'next'
import Link from 'next/link'
import arrowDown from '@/assets/icons/arrowDown.svg'
import LogoFull from '@/assets/icons/logoFull.svg'
import Container from '@/components/layout/container'
import { cn } from '@/utils/css'
import BaseIcon from '../ui/BaseIcon'

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

  function toggleDropDown() {
    setIsDropDownActive((prev: boolean) => !prev)
  }

  return (
    <nav className="fixed top-9 bg-white w-full">
      <Container className="flex justify-between items-center h-18">
        <Link href="/">
          <BaseIcon as={LogoFull} className="h-6" />
        </Link>

        <ul className="flex items-center gap-6 capitalize h-[100%]">
          <li className="h-full">
            <button
              className="capitalize h-full flex items-center"
              onClick={() => toggleDropDown()}
            >
              <span className="flex items-center gap-1">
                <h3 className="underline-parent text-body-3">shop</h3>
                <BaseIcon
                  as={arrowDown}
                  className={cn(
                    'h-5 -mb-1 duration-300 ease-in-out',
                    isDropDownActive && 'rotate-180'
                  )}
                />
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
                      index === shopCategories.length - 1 && 'pb-6 pt-2'
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
      </Container>
    </nav>
  )
}
