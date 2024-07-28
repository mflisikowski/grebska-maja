import { Container } from '@/components/container'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function CalendarNotFound() {
  return (
    <Container className="flex flex-col items-center">
      <div className="mx-auto flex max-w-2xl flex-col gap-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Podany kalendarz nie istnieje
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Spróbuj ponownie lub wybierz inny w celu umówienia spotkania.
        </p>

        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'group flex items-center gap-2 text-zinc-900',
          )}
          href="/#calendar"
        >
          <span>Umów spotkanie</span>
          <ArrowRightIcon
            className="inline-flex h-4 w-4 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </Container>
  )
}
