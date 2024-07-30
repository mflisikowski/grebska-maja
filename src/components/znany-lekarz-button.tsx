import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/utils'
import Image from 'next/image'

export default function ZnanyLekarzButton() {
  return (
    <Link
      href="https://www.znanylekarz.pl/maja-grebska/psycholog-psychoterapeuta/pruszcz-gdanski"
      className={cn(buttonVariants({ variant: 'znanylekarz' }))}
      target="_blank"
    >
      <Image
        src="/znany-lekarz-logo.svg"
        className="hidden h-4 w-auto lg:block"
        width={210}
        height={34}
        alt=""
      />

      <Image
        src="/znany-lekarz-logo-sygnet.svg"
        className="h-4 w-auto lg:hidden"
        width={210}
        height={34}
        alt=""
      />
    </Link>
  )
}
