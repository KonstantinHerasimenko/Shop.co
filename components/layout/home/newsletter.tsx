"use client"

import { Mail } from 'lucide-react'
import Container from '@/components/layout/container'
import { useState } from 'react'

export default function Newsletter() {
  const [emailLength,setEmailLength] = useState(0)

  return (
    <div className=" translate-y-1/2">
      <Container>
        <div className="px-16 py-9 rounded-2.5xl bg-black text-white w-full flex justify-between items-center">
          <h3 className="uppercase font-bold text-heading-3">
            STAY UPTO DATE ABOUT
            <br /> OUR LATEST OFFERS
          </h3>
          <form className="grid grid-rows-2 h-max gap-4">
            <label className="p-4 rounded-13xl bg-white grid grid-cols-[1fr_auto] items-center gap-4">
              <button>
                <Mail color="rgba(0,0,0,0.4)" />
              </button>
              <input
                className="text-black placeholder:text-black-04"
                placeholder="enter your email address"
                type='email'
                onInput={(event)=>{
                  setEmailLength(event.currentTarget.value.length)
                }}
                style={{
                  width: Math.max(emailLength,24) +"ch"
                }}
              />
            </label>

            <button className="bg-white p-4 rounded-13xl">
              <h5 className="first-letter:uppercase text-black font-medium">
                subscribe to newsletter
              </h5>
            </button>
          </form>
        </div>
      </Container>
    </div>
  )
}
