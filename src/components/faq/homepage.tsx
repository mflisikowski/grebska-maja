import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { fetchFaqData } from '@/service/faq'
import { FaqData } from '@/types'
import { CheckIcon } from 'lucide-react'

export default async function FaqSection() {
  const { data } = await fetchFaqData()

  return (
    <div className="space-y-24">
      <div className="mx-auto max-w-xs sm:text-center lg:max-w-2xl">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Często Zadawane Pytania
        </h2>
        <p className="mt-6 text-balance text-center text-lg leading-8 text-gray-600">
          Dowiedz się więcej o istotnych kwestiach, które mogą Cię interesować.
          Jeśli nie znajdziesz tutaj odpowiedzi na swoje pytanie, zawsze możesz
          skontaktować się bezpośrednio.
        </p>
      </div>
      <div>
        <Accordion type="single" collapsible>
          {data.map((item: FaqData) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>
                <p className="text-balance text-lg leading-8">
                  {item.question}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                {item.answer
                  .split('\n')
                  .map((paragraph: string, index: number) => (
                    <p
                      className="mt-6 text-base leading-7 text-gray-600"
                      key={index}
                    >
                      {paragraph}
                    </p>
                  ))}

                {item.features && (
                  <ul
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    role="list"
                  >
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="h-6 w-5 flex-none text-blue-600"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
