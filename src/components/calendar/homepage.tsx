import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { fetchCalendarData } from '@/repositories/fetch-calendar-data'
import { CalendarData } from '@/types'
import { Container } from '../container'
import { CalendarLink } from './calendar-link'
import { cn } from '@/utils'

export default async function CalendarSection() {
  const data = await fetchCalendarData()

  return (
    <Container>
      <div className="flex flex-col items-center space-y-24">
        <div className="w-full rounded-lg px-4 py-6 lg:max-w-xl lg:flex-auto">
          <h2 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Wsparcie Psychoterapeutyczne dla Ciebie i Twojej Rodziny
          </h2>
        </div>

        <div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {data.map((data: CalendarData, index: number) => {
              const isEven = index % 2 === 0

              return (
                <div
                  className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:px-10"
                  key={data.id}
                >
                  <div className="group relative flex flex-col justify-between gap-6">
                    <h3
                      className={cn(
                        'flex flex-col text-balance text-center text-2xl leading-8 tracking-tight text-gray-900 underline-offset-8',
                        isEven ? 'lg:text-right' : 'lg:text-left',
                      )}
                    >
                      {data.name}
                    </h3>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <p
                            className={cn(
                              'flex flex-col text-center text-xl leading-8 tracking-tight text-gray-900',
                              isEven ? 'lg:text-right' : 'lg:text-left',
                            )}
                          >
                            <span className="lg:line-clamp-3">
                              {data.description}
                            </span>
                          </p>
                        </TooltipTrigger>

                        <TooltipContent className="max-w-xl text-balance text-center text-xl">
                          <>{data.description}</>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <div
                      className={`flex items-center justify-center gap-x-6 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
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
