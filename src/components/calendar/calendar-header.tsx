import { CalendarData } from '@/app/api/data/calendar/route'
import { Container } from '@/components/container'
import FadeIn from '../client/fade-in'
import { Button } from '../ui/button'

export default function CalendarHeader({ data }: { data: CalendarData }) {
  return (
    <FadeIn>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {data.name ? data.name : '...'}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {data.description ? data.description : '...'}
          </p>
        </div>
      </Container>
    </FadeIn>
  )
}
