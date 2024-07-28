export interface CalendarData {
  name: string
  duration: string
  price: string
  id: string
  href: string
  description: string
  features: string[]
}

export enum CalendarType {
  PsychologicalConsultation = 'psychological-consultation',
  IndividualPsychotherapy = 'individual-psychotherapy',
}

export const validTypes: CalendarType[] = Object.values(CalendarType)

/**
 * Retrieves calendar data including psychological consultation and individual psychotherapy.
 *
 * @return {Promise<Response>} The response containing the calendar data.
 */
export async function GET(): Promise<Response> {
  try {
    const data: CalendarData[] = [
      {
        name: 'Konsultacja psychologiczna',
        duration: '50 min',
        price: '180 PLN',
        id: 'psychological-consultation',
        href: '/calendar/psychological-consultation',
        description:
          'Konsultacje psychologiczne to pierwsze spotkania, podczas których psychoterapeuta przeprowadza szczegółowy wywiad, aby zrozumieć Twoje problemy i potrzeby. Jest to także okazja, aby omówić cele terapii i zdecydować o dalszych krokach.',
        features: [
          'Szczegółowy wywiad, który umożliwi Ci jak zaczań zrozumiec rozwiązania',
          'Pomoc w identyfikacji i poprawie negatywnych wzorców',
          'Omówienie celu terapii i zdecydowanie o dalszych krokach',
        ],
      },
      {
        name: 'Psychoterapia indywidualna',
        duration: '50 min',
        price: '180 PLN',
        id: 'individual-psychotherapy',
        href: '/calendar/individual-psychotherapy',
        description:
          'Psychoterapia indywidualna obejmuje regularne sesje z psychoterapeutą, które są dostosowane do indywidualnych potrzeb pacjenta.',
        features: [
          'Praca nad identyfikacją i zmianą negatywnych wzorców myślenia i zachowania',
          'Poprawa samopoczucia',
          'Dostosowywanie strategii terapeutycznej',
        ],
      },
    ]

    return new Response(JSON.stringify({ data }))
  } catch (error) {
    console.error(error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
