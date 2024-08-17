import { ComponentPropsWithRef, ReactNode } from 'react'
import { cn } from '@/utils/css.ts'

export default function Container({className,children,...props}:ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        //size
        'max-w-[77.5rem]',
        //position
        'mx-auto px-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
