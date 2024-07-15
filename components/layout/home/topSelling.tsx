"use client"

import { useState } from "react"
import catalog from "@/data/products.json"
import { product } from "@/app/types"
import ProductCard from "../productCard"
import ShowBtn from "../showBtn"

export default function TopSelling(){
  const [cardNumber,setCardNumber] = useState(4)

  return(
    <article className="flex flex-col items-center pt-16">
      <h2 className="font-bold text-heading-2 mb-10">top selling</h2>
      <ul className="grid grid-cols-4 gap-5 mb-9">
        {
          catalog.slice(0,cardNumber).map((product:product)=>{
            return(
              <ProductCard key={product.title} product={product}/>
            )
          })
        }
      </ul>
      <ShowBtn isToggled={cardNumber===4} onClick={()=>setCardNumber((prev)=> prev === 4?12:4)} className="mb-20"/>
    </article>
  )
}