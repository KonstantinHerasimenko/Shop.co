import halfStar from '@/assets/icons/halfStar.svg'
import star from '@/assets/icons/star.svg'
import BaseIcon from '../ui/BaseIcon'
import { ComponentPropsWithoutRef } from "react";
import { cn } from '@/utils/css';


interface RatingProps extends ComponentPropsWithoutRef<"span"> {
  rating: number
}

export default function Rating({ rating,className, ...props }:RatingProps) {
  return (
    <span className={cn("flex gap-1",className)} {...props}>
      {Array(Math.trunc(rating)).fill(<BaseIcon as={star} className="h-5 aspect-square" />)}
      {!Number.isInteger(rating) && (
        <BaseIcon as={halfStar} className="h-5 aspect-square" />
      )}
    </span>
  )
}