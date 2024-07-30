import { FaqData } from '@/types'

export async function GET(req: Request): Promise<Response> {
  try {
    const data: FaqData[] = [
      {
        question: 'Czym jest psychoterapia poznawczo-behawioralna?',
        answer: `
          Psychoterapia poznawczo-behawioralna (CBT) to sprawdzona, przebadana i skuteczna metoda leczenia, która koncentruje się na zmianie negatywnych wzorców myślenia i zachowania. CBT pomaga zrozumieć i przekształcić myśli oraz zachowania, które przyczyniają się do problemów emocjonalnych, co prowadzi do trwałej poprawy samopoczucia i jakości życia.
          Psychoterapia poznawczo-behawioralna daje narzędzia do trwałej zmiany sposobu myślenia i zachowania, co prowadzi do poprawy zdrowia psychicznego i jakości życia.
        `,
        id: '1',
      },
      {
        question: `W jakiej formie mogę odbyć konsultację lub terapię?`,
        features: [
          'Spotkanie w gabinecie, zapewniające bezpieczną przestrzeń do pracy terapeutycznej.',
          'Spotkanie online za pomocą bezpiecznej i łatwej w użyciu platformy do wideokonferencji. Ta forma terapii jest idealna dla osób, które mają ograniczony czas, cenią sobie wygodę własnego domu lub mieszkają poza miastem.',
        ],
        answer: `
          Aby dostosować się do zróżnicowanych potrzeb i preferencji, oferuję możliwość odbycia zarówno konsultacji psychologicznej, jak i sesji psychoterapii indywidualnej w dwóch formach:
        `,
        id: '2',
      },
      {
        question: `W jakim rodzaju problemów może pomóc terapia poznawcza?`,
        features: [
          'Zaburzeń lękowych (np. lęk paniczny, fobie, lęk społeczny)',
          'Depresji',
          'Zaburzeń obsesyjno-kompulsyjnych (OCD)',
          'Zaburzeń związanych z doświadczeniem traumy (np. PTSD)',
          'Zaburzeń zachowania i emocji np. tików',
          'Zaburzeń snu',
          'Problemów związanych z niską samooceną',
        ],
        answer: `Nurt poznawczo-behawioralny szczyci się udokumentowanymi osiągnięciami w skutecznym leczeniu między innymi:`,
        id: '3',
      },
    ]

    return new Response(JSON.stringify({ data }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
