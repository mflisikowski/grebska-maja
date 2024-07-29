import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { cn } from '@/utils'
import { fetchOfferData } from '@/service/offer'
import { OfferData } from '@/types'

export default async function OfferSection() {
  const { data } = await fetchOfferData()

  return (
    <div className="flex flex-col items-center space-y-24">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terapia dostosowana do Twoich potrzeb
        </h2>
        <p className="mt-6 text-balance text-center text-lg leading-8 text-gray-600">
          Bez względu na to, czy potrzebujesz jednorazowej konsultacji, czy
          długoterminowej terapii, moje usługi obejmują pełne wsparcie i
          indywidualne podejście. Oferuje skuteczne i troskliwe rozwiązania dla
          Twojego zdrowia psychicznego.
        </p>
      </div>

      <Tabs defaultValue={data[0].id} className="w-full space-y-10 lg:w-2/3">
        <TabsList className="grid h-auto w-full grid-cols-1 bg-blue-500 lg:grid-cols-3 lg:gap-1">
          {data.map((item: OfferData, index: number) => (
            <TabsTrigger
              dangerouslySetInnerHTML={{ __html: item.name }}
              className="w-full text-wrap rounded-none px-12 py-3 font-semibold text-white lg:px-24"
              value={item.id}
              key={item.id}
            />
          ))}
        </TabsList>

        {data.map((item: OfferData, index: number) => (
          <TabsContent value={item.id} key={item.id + index} className="w-full">
            <Card>
              <CardHeader className="space-y-4">
                <CardTitle
                  dangerouslySetInnerHTML={{ __html: item.name }}
                  className="text-nowrap text-xl font-medium leading-8 text-gray-600"
                />
                <CardDescription
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="text-balance text-base leading-relaxed text-gray-600"
                />
              </CardHeader>

              <CardContent>
                <ul role="list" className="divide-y divide-gray-100">
                  {item.features.map((item, index) => (
                    <li key={index} className="flex gap-x-4 py-2">
                      <div className="flex-auto">
                        <p className="mt-1 line-clamp-3 flex items-center gap-2 text-sm leading-6 text-gray-600">
                          <CheckIcon className="inline-flex h-4 w-4 flex-shrink-0 text-blue-500" />
                          {item}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link
                  className={cn(
                    buttonVariants(),
                    'group mx-auto items-center gap-2',
                  )}
                  href="/#calendar"
                >
                  <span>Umów spotkanie</span>
                  <ArrowRightIcon
                    className="inline-flex h-4 w-4 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
