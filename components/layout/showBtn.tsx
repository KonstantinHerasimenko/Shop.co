import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/css'

interface ShowBtnProps extends ComponentPropsWithoutRef<'button'> {
  isToggled: boolean
}

export default function ShowBtn({isToggled,className, ...props}: ShowBtnProps) {
  return (
    <button
      className={cn(
        'capitalize py-4 px-16 rounded-13xl duration-500 ease-in-out border-1',
        isToggled
          ? 'hover:bg-black hover:border-black hover:text-white border-black-01'
          : 'hover:border-black-01 hover:bg-transparent hover:text-black bg-black border-black text-white',
        className
      )}
      {...props}
    >
      {isToggled ? 'view' : 'hide'} all
    </button>
  )
}
