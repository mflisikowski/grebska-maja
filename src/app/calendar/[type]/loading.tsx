import { Container } from '@/components/container'

export const dynamic = 'force-dynamic'

export default function Loading() {
  return (
    <div className="lg:space-y-36">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto h-10 w-3/4 animate-pulse rounded bg-gray-300"></div>
          <div className="mx-auto mt-6 h-6 w-full animate-pulse rounded bg-gray-300"></div>
          <div className="mx-auto mt-4 h-6 w-5/6 animate-pulse rounded bg-gray-300"></div>
        </div>
      </Container>

      <div className="relative overflow-hidden pt-36 lg:py-16">
        <Container className="relative">
          <div className="relative z-10">
            <div className="flex flex-col items-center space-y-24">
              <div className="w-full space-y-2 rounded-lg px-4 py-6 lg:max-w-xl lg:flex-auto">
                <div className="mx-auto h-5 w-1/4 animate-pulse rounded bg-gray-300"></div>
                <div className="mx-auto h-5 w-4/5 animate-pulse rounded bg-gray-300"></div>
                <div className="mx-auto h-5 w-2/4 animate-pulse rounded bg-gray-300"></div>
              </div>
              <div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  {[1, 2].map((_, index) => (
                    <div
                      className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:px-10"
                      key={index}
                    >
                      <div className="group relative flex flex-col justify-between gap-6">
                        <div className="h-6 animate-pulse rounded bg-gray-300"></div>
                        <div className="flex flex-col gap-y-4">
                          <div className="h-4 animate-pulse rounded bg-gray-300"></div>
                        </div>
                        <div className="flex items-center gap-x-6">
                          <div className="h-8 w-32 animate-pulse rounded bg-gray-300"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mb-24 mt-24 lg:min-h-[650px] 2xl:-ml-44 2xl:-mr-44">
          <div className="animate-pulse bg-gray-200">
            <div className="h-[650px] w-full bg-gray-300"></div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-6 text-balance border-t border-gray-100 text-base">
          <dl className="animate-pulse divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">
                Czas trwania
              </dt>
              <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="h-4 flex-grow rounded bg-gray-200"></span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Cena</dt>
              <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="h-4 flex-grow rounded bg-gray-200"></span>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="font-medium leading-6 text-gray-900">Cechy</dt>
              <dd className="mt-1 flex leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <span className="flex flex-grow flex-col gap-y-4">
                  <span className="flex gap-4">
                    <span className="h-4 w-4 rounded-full bg-gray-200"></span>
                    <span className="h-4 flex-grow rounded bg-gray-200"></span>
                  </span>
                  <span className="flex gap-4">
                    <span className="h-4 w-4 rounded-full bg-gray-200"></span>
                    <span className="h-4 flex-grow rounded bg-gray-200"></span>
                  </span>
                  <span className="flex gap-4">
                    <span className="h-4 w-4 rounded-full bg-gray-200"></span>
                    <span className="h-4 flex-grow rounded bg-gray-200"></span>
                  </span>
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  )
}
