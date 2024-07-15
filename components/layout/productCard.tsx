import Image from 'next/image'
import Link from 'next/link'
import halfStar from '@/assets/icons/halfStar.svg'
import star from '@/assets/icons/star.svg'
import { product } from '@/app/types'
import BaseIcon from "@/components/ui/BaseIcon"

interface ProductCardProps {
  product:product
}

export default function ProductCard({product}:ProductCardProps) {
  return (
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
  )
}
