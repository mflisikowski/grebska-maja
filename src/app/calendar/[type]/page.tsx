import CalcomEmbed from '@/components/calcom-embed'
import { CalendarLink } from '@/components/calendar/calendar-link'
import FadeIn from '@/components/client/fade-in'
import { Container } from '@/components/container'
import { fetchCalendarData } from '@/service/calendar'
import { CalendarData, calendarValidTypes } from '@/types'
import { cn } from '@/utils'
import { CheckIcon } from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'

export default async function CalendarPage({
  params,
}: {
  params: { type: string }
}) {
  const response = await fetchCalendarData()

  if (!calendarValidTypes.includes(params.type) || !response.data) {
    return notFound()
  }

  const { name, description, features, id, price, duration } =
    response.data.find((item: CalendarData) => item.id === params.type)

  return (
    <div id={`calendar-${id}`} className="lg:space-y-36">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {name ? name : '...'}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description ? description : '...'}
            </p>
          </div>
        </Container>
      </FadeIn>

      <Container>
        <div className="flex flex-col items-center space-y-24">
          <div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {response.data.map((data: CalendarData, index: number) => {
                const isCurrentPath = data.href.includes(params.type)
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
                          isCurrentPath ? 'opacity-80' : 'font-semibold',
                        )}
                      >
                        {data.name}
                      </h3>

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

      <CalcomEmbed type={params.type} />

      <Container>
        <div className="mt-6 text-balance border-t border-gray-100 text-base">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">
                Czas trwania
              </dt>
              <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{duration ? duration : '...'}</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Cena</dt>
              <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex-grow">{price ? price : '...'}</span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Cechy</dt>
              <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex flex-grow flex-col gap-y-4">
                  {features
                    ? features.map((feature: string, index: number) => (
                        <p key={feature} className="flex gap-4">
                          <CheckIcon className="h-4 w-4" />
                          {feature}
                          {index < features.length - 1 ? ', ' : ''}
                        </p>
                      ))
                    : '...'}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  )
}
