'use client'

import { usePathname } from 'next/navigation'
import { Undo } from 'lucide-react'
import Link from 'next/link'

export default function UndoButton() {
  const pathname = usePathname()

  return (
    <div className="flex flex-auto items-center">
      <Link href="/">
        {pathname !== '/' ? (
          <Undo className="inline-block h-6 w-6 transition hover:-translate-x-0.5 hover:-rotate-3" />
        ) : (
          <div className="h-6">
            <p className="text-xl font-semibold">
              <span className="hidden lg:block">Maja Grębska</span>
              <span className="lg:hidden">MG</span>
            </p>
          </div>
        )}
      </Link>
    </div>
  )
}
