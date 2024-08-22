'use client'

import Link from 'next/link'
import Container from '@/components/layout/container'
import { cn } from '@/utils/css.ts'
import { X } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { toggleMenu } from '@/lib/redux/features/todos/menusSlice'

export default function PopUp() {
  const isPopUpHidden = useAppSelector(state=>state.menusSlice.popUp.isHidden)
  const dispatch = useAppDispatch()

  return (
    <div className={cn(isPopUpHidden && 'hidden', 'fixed z-50 w-full h-fit bg-black py-2')}>
      <Container
        className={cn(
          // color
          'text-white',
          // display
          'flex items-center'
        )}
      >
        <h6 className="text-body-4 w-full text-center">
          Sign up and get 20% off to your first order.{' '}
          <Link className="underline font-medium" href={'/'}>
            Sign Up Now
          </Link>
        </h6>
        <button onClick={() => dispatch(toggleMenu("popUp"))}>
          <X size={20}/>
        </button>
      </Container>
    </div>
  )
}
