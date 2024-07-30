import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CheckIcon } from 'lucide-react'

export default function FaqSection() {
  return (
    <div className="space-y-36">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Często Zadawane Pytania
        </h2>
        <p className="mt-6 text-balance text-lg leading-8 text-gray-600">
          Dowiedz się więcej o istotnych kwestiach, które mogą Cię interesować.
          Jeśli nie znajdziesz tutaj odpowiedzi na swoje pytanie, zawsze możesz
          skontaktować się bezpośrednio.
        </p>
      </div>
      <div>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Czym jest psychoterapia poznawczo-behawioralna?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Psychoterapia poznawczo-behawioralna (CBT) to sprawdzona,
                przebadana i skuteczna metoda leczenia, która koncentruje się na
                zmianie negatywnych wzorców myślenia i zachowania. CBT pomaga
                zrozumieć i przekształcić myśli oraz zachowania, które
                przyczyniają się do problemów emocjonalnych, co prowadzi do
                trwałej poprawy samopoczucia i jakości życia.
              </p>

              <p className="mt-6 text-base leading-7 text-gray-600">
                Psychoterapia poznawczo-behawioralna daje narzędzia do trwałej
                zmiany sposobu myślenia i zachowania, co prowadzi do poprawy
                zdrowia psychicznego i jakości życia.
              </p>

              <p className="mt-6 text-base leading-7 text-gray-600">
                Jest skuteczna w leczeniu szerokiego spektrum problemów, w tym
                między innymi:
              </p>

              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {[
                  'Zaburzeń lękowych (np. lęk paniczny, fobie, lęk społeczny)',
                  'Depresji',
                  'Zaburzeń obsesyjno-kompulsyjnych (OCD)',
                  'Zaburzeń związanych z doświadczeniem traumy (np. PTSD)',
                  'Zaburzeń zachowania i emocji np. tików',
                  'Zaburzeń snu',
                  'Problemów związanych z niską samooceną',
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-blue-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
