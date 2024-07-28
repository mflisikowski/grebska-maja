'use client'

import { CalendarData } from '@/app/api/data/calendar/route'
import { cn, getCalendarData } from '@/utils'
import { Container } from '../container'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

export default function CalendarSection({
  showHeadline = true,
  showDetails = true,
}: {
  showHeadline?: boolean
  showDetails?: boolean
}) {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getCalendarData()) as CalendarData[]
      setCalendarData(data)
    }
    fetchData()
  }, [])

  const pathname = usePathname()

  return (
    <Container>
      <div className="flex flex-col items-center space-y-24">
        {showHeadline && (
          <div className="w-full rounded-lg px-4 py-6 lg:max-w-xl lg:flex-auto">
            <h2 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Wsparcie Psychologiczne dla Ciebie i Twojej Rodziny
            </h2>
          </div>
        )}
        <div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {calendarData.map((data, index) => {
              const isCurrentPath = pathname === data.href
              const isEven = index % 2 === 0

              return (
                <div
                  className={`flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:px-10 ${
                    isEven ? 'text-right' : 'text-left'
                  }`}
                  key={data.id}
                >
                  <div
                    className={cn(
                      'group relative flex flex-col justify-between gap-6',
                      isCurrentPath ? 'opacity-80' : 'opacity-100',
                    )}
                  >
                    <h3
                      className={cn(
                        'flex flex-col text-balance text-2xl leading-8 tracking-tight text-gray-900 underline-offset-8',
                        isCurrentPath ? 'opacity-80' : '',
                        !isCurrentPath ? 'font-semibold' : '',
                      )}
                    >
                      {data.name}
                    </h3>

                    {showDetails && (
                      <p className="flex flex-col text-xl leading-8 tracking-tight text-gray-900">
                        <span className="line-clamp-3">{data.description}</span>
                      </p>
                    )}

                    <div
                      className={`flex items-center gap-x-6 ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div className="text-base">
                        <CalendarLink
                          isCurrentPath={isCurrentPath}
                          index={index}
                          href={data.href}
                        >
                          Umów spotkanie
                        </CalendarLink>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

interface CalendarLinkProps {
  isCurrentPath: boolean
  href: string
  index: number
  children: React.ReactNode
}

const CalendarLink = ({
  isCurrentPath,
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
