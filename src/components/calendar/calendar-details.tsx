import { CalendarData } from '@/app/api/data/calendar/route'
import { Container } from '@/components/container'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function CalendarDetails({ data }: { data: CalendarData }) {
  return (
    <Container>
      <div className="mt-6 text-balance border-t border-gray-100 text-base">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">
              Czas trwania
            </dt>
            <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                {data.duration ? data.duration : '...'}
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Cena</dt>
            <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                {data.price ? data.price : '...'}
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="font-medium leading-6 text-gray-900">Cechy</dt>
            <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex flex-grow flex-col gap-y-4">
                {data.features
                  ? data.features.map((feature, index) => (
                      <p key={feature} className="flex gap-4">
                        <CheckIcon className="h-4 w-4" />
                        {feature}
                        {index < data.features.length - 1 ? ', ' : ''}
                      </p>
                    ))
                  : '...'}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  )
}
