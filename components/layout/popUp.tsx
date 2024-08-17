'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from '@/components/layout/container'
import { cn } from '@/utils/css.ts'
import { X } from 'lucide-react'

export default function PopUp() {
  const [isClosed, setIsClosed] = useState(false)

  return (
    <div className={cn(isClosed && 'hidden', 'fixed z-50 w-full h-fit bg-black py-2')}>
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
          <X size={20}/>
        </button>
      </Container>
    </div>
  )
}
