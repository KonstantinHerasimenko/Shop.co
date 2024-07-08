import { ReactNode } from 'react'
import { cn } from '@/utils/css.ts'

interface containerProps {
  className?: string
  children?: ReactNode
}

export default function Container({className,children}:containerProps) {
  return (
    <div
      className={cn(
        //size
        'max-w-[77.5rem]',
        //position
        'mx-auto px-4',
        className
      )}
    >
      {children}
    </div>
  )
}
