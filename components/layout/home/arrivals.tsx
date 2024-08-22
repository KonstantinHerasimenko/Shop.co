'use client'

import { useEffect, useState } from 'react'
import { product } from '@/app/types'
import catalog from '@/data/products.json'
import { cn } from '@/utils/css'
import ProductCard from '../productCard'
import ShowBtn from '../showBtn'

export default function Arrivals() {
  const [productNumber, setProductNumber] = useState(4)

  useEffect(()=>{
    console.log(productNumber)
  })

  return (
    <article className="flex flex-col items-center min-h-1/2 pb-16 border-b-1 border-black-01">
      <h2 className="text-heading-2 font-bold uppercase text-center mb-14">new arrivals</h2>
      <ul
        className={cn(
          'grid items-stretch grid-cols-4 w-full justify-between gap-5 mb-9 h-max',
          `grid-rows-${productNumber % 4}`
        )}
      >
        {catalog.slice(-productNumber, catalog.length).reverse().map((product: product) => {
          return (
            <li key={product.title}>
              <ProductCard product={product} />
            </li>
          )
        })}
      </ul>
      <ShowBtn
        isToggled={productNumber === 4}
        onClick={() => setProductNumber((prev) => (prev === 4 ? 8 : 4))}
      />
    </article>
  )
}
