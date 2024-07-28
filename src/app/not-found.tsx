import Link from 'next/link'

import { cn } from '@/utils'
import { buttonVariants } from '@/components/ui/button'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Nie znaleziono strony
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Przepraszamy, nie znaleziono strony, której szukasz.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            className={cn(
              buttonVariants({ variant: 'link' }),
              'group flex items-center gap-2 text-zinc-900',
            )}
            href="/"
          >
            <ArrowLeftIcon
              className="inline-flex h-4 w-4 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            wróc do strony głównej
          </Link>
        </div>
      </div>
    </main>
  )
}
