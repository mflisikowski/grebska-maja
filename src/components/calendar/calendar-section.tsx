import { CalendarData } from '@/types'
import { Container } from '../container'
import { CalendarLink } from './calendar-link'
import { fetchCalendarData } from '@/service/calendar'

export default async function CalendarSection() {
  const { data } = await fetchCalendarData()

  return (
    <Container>
      <div className="flex flex-col items-center space-y-24">
        <div className="w-full rounded-lg px-4 py-6 lg:max-w-xl lg:flex-auto">
          <h2 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Wsparcie Psychologiczne dla Ciebie i Twojej Rodziny
          </h2>
        </div>

        <div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {data.map((data: CalendarData, index: number) => {
              const isEven = index % 2 === 0

              return (
                <div
                  className={`flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:px-10 ${
                    isEven ? 'text-right' : 'text-left'
                  }`}
                  key={data.id}
                >
                  <div className="group relative flex flex-col justify-between gap-6">
                    <h3 className="flex flex-col text-balance text-2xl leading-8 tracking-tight text-gray-900 underline-offset-8">
                      {data.name}
                    </h3>

                    <p className="flex flex-col text-xl leading-8 tracking-tight text-gray-900">
                      <span className="line-clamp-3">{data.description}</span>
                    </p>

                    <div
                      className={`flex items-center gap-x-6 ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div className="text-base">
                        <CalendarLink index={index} href={data.href}>
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
