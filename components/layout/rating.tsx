import { ComponentPropsWithoutRef } from 'react'
import uuid from 'react-uuid'
import halfStar from '@/assets/icons/halfStar.svg'
import star from '@/assets/icons/star.svg'
import { cn } from '@/utils/css'
import BaseIcon from '../ui/BaseIcon'

interface RatingProps extends ComponentPropsWithoutRef<'span'> {
  rating: number
}

export default function Rating({ rating, className, ...props }: RatingProps) {
  const ratingKey = uuid()

  return (
    <span className={cn('flex gap-1', className)} {...props}>
      {Array.from(Array(Math.trunc(rating))).map((_, index) => {
        return <BaseIcon as={star} className="h-5 aspect-square" key={ratingKey + index} />
      })}
      {!Number.isInteger(rating) && <BaseIcon as={halfStar} className="h-5 aspect-square" />}
    </span>
  )
}
