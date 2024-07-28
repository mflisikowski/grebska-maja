import { cn } from '@/utils'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

interface CalendarLinkProps {
  isCurrentPath?: boolean
  href: string
  index: number
  children: React.ReactNode
}

export const CalendarLink = ({
  isCurrentPath = false,
  href,
  index,
  children,
}: CalendarLinkProps) => {
  const linkContent = (
    <>
      {index % 2 === 0 ? (
        <ArrowLeftIcon
          className={`inline-flex h-4 w-4 transition ${
            isCurrentPath ? '' : 'group-hover:-translate-x-0.5'
          }`}
          aria-hidden="true"
        />
      ) : (
        <ArrowRightIcon
          className={`inline-flex h-4 w-4 transition ${
            isCurrentPath ? '' : 'group-hover:translate-x-0.5'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
      <CalendarDaysIcon className="h-4 w-4" />
    </>
  )

  return isCurrentPath ? (
    <div
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'group flex cursor-not-allowed items-center gap-4 text-zinc-900 opacity-50',
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
      )}
    >
      {linkContent}
    </div>
  ) : (
    <Link
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'group flex items-center gap-4 text-zinc-900',
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
      )}
      href={href}
    >
      {linkContent}
    </Link>
  )
}
