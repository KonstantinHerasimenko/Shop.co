'use client'

import { useState } from 'react'
import Link from 'next/link'
import CloseIcon from '@/assets/icons/close.svg'
import Container from '@/components/layout/container'
import BaseIcon from '@/components/ui/BaseIcon'
import { cn } from '@/utils/css.ts'

export default function PopUp() {
  const [isClosed, setIsClosed] = useState(false)

  return (
    <div className={cn(isClosed && 'hidden', 'fixed w-full h-fit bg-black py-2')}>
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
        <button onClick={() => setIsClosed(true)}>
          <BaseIcon as={CloseIcon} className="w-5 aspect-square" />
        </button>
      </Container>
    </div>
  )
}
