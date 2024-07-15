'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import halfStar from '@/assets/icons/halfStar.svg'
import star from '@/assets/icons/star.svg'
import BaseIcon from '@/components/ui/BaseIcon'
import catalog from '@/data/products.json'
import { cn } from '@/utils/css'

export default function Arrivals() {
  const [productNumber, setProductNumber] = useState(4)

  return (
    <article className="flex flex-col items-center min-h-1/2">
      <h2 className="text-heading-2 font-bold uppercase text-center mb-14">new arrivals</h2>
      <ul
        className={cn(
          'grid items-stretch grid-cols-4 w-full justify-between gap-5 mb-10 h-max',
          `grid-rows-${productNumber % 4}`
        )}
      >
        {catalog &&
          catalog.slice(-productNumber, catalog.length).map((product: product) => {
            return (
              <li key={product.title}>
                <Link
                  href={'/'}
                  className="font-bold grid grid-rows-[max-content_auto_max-content_max-content] h-full"
                >
                  <Image
                    src={product.images[0]}
                    alt=""
                    width={256}
                    height={256}
                    className="mb-4 rounded-2.5xl aspect-square w-full"
                  />
                  <h4 className="text-body-2 mb-2 pr-4">{product.title}</h4>
                  <div className="flex gap-2 w-full mb-2">
                    <span className="flex gap-1">
                      {Array(Math.trunc(product.rating)).fill(
                        <BaseIcon as={star} className="h-5 aspect-square" />
                      )}
                      {!Number.isInteger(product.rating) && (
                        <BaseIcon as={halfStar} className="h-5 aspect-square" />
                      )}
                    </span>
                    <h4 className="text-body-4 text-black-06">{product.rating}/5</h4>
                  </div>
                  <h3 className="text-body-1 self-end">${product.price}</h3>
                </Link>
              </li>
            )
          })}
      </ul>
      <button
        className={cn(
          'capitalize py-4 px-16 rounded-13xl duration-500 ease-in-out border-1',
          productNumber === 4
            ? 'hover:bg-black hover:border-black hover:text-white border-black-01'
            : 'hover:border-black-01 hover:bg-transparent hover:text-black bg-black border-black text-white'
        )}
        onClick={() => setProductNumber((prev) => (prev === 4 ? 8 : 4))}
      >
        {productNumber === 4 ? 'view' : 'hide'} all
      </button>
    </article>
  )
}
