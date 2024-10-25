'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import Container from '@/components/layout/container'
import Footer from '@/components/layout/footer'
import Newsletter from '@/components/layout/home/newsletter'
import Navigation from '@/components/layout/navigation'
import PopUp from '@/components/layout/popUp'
import Rating from '@/components/layout/rating'
import products from '@/data/products.json'

export default function Product() {
  const [productId, setProductId] = useState<number>()
  const [imageSelected, setImageSelected] = useState(0)
  const [productNumber, setProductNumber] = useState(1)

  useEffect(() => {
    const pathname = window.location.search
    setProductId(Number(pathname.slice(pathname.indexOf('data=') + 5, pathname.length)))
  }, [])

  return (
    <main>
      <PopUp />
      <Navigation />
      <Container className="border-t-black-01 pt-[calc(8.5rem+5rem)] min-h-screen">
        {productId && (
          <article className="grid lg:grid-cols-[auto_auto] gap-10 h-fit">
            <div className="grid grid-rows-3 grid-cols-4 gap-4 items-stretch justify-stretch w-fit">
              {products[productId - 1].images.map((imageSrc, index) => {
                return (
                  <button
                    onClick={() => setImageSelected(index)}
                    key={`product-${productId}-image-${index + 1}`}
                  >
                    <Image
                      src={imageSrc}
                      alt=""
                      width={152}
                      height={167}
                      className="col-start-1 rounded-2.5xl border-black border"
                    />
                  </button>
                )
              })}
              <Image
                src={products[productId - 1].images[imageSelected]}
                alt=""
                width={444}
                height={530}
                className="row-start-1 col-start-2 row-span-3 col-span-3 rounded-2.5xl border-black border"
              />
            </div>
            <div className="relative">
              <h3 className="mb-3.5 text-heading-3 font-bold">One Life Graphic T-shirt</h3>
              <span className="flex items-top flex-nowrap gap-2.5">
                <Rating rating={products[productId - 1].rating} className="mb-2.5" />
                <h6 className="relative -top-[0.125rem]">{products[productId - 1].rating}/5</h6>
              </span>

              <h4 className="mb-6 text-heading-5 font-bold">${products[productId - 1].price}</h4>
              <p className="text-body-3">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                breathable fabric, it offers superior comfort and style.
              </p>
              <form className="grid grid-cols-10 gap-5 absolute bottom-0 w-full">
                <label className="flex flex-nowrap justify-between bg-snowflake p-4 rounded-13xl col-span-4">
                  <button
                    type="button"
                    onClick={() => setProductNumber((prev) => (prev > 1 ? prev - 1 : prev))}
                  >
                    <Minus />
                  </button>
                  <h6 className="font-medium">{productNumber}</h6>
                  <button type="button" onClick={() => setProductNumber((prev) => prev + 1)}>
                    <Plus />
                  </button>
                </label>
                <button className="bg-black text-white text-body-3 font-medium py-4 rounded-13xl col-span-6">
                  Add to Cart
                </button>
              </form>
            </div>
          </article>
        )}
      </Container>
      <Newsletter />
      <Footer />
    </main>
  )
}
