import { CalendarData } from '@/app/types'

/**
 * Retrieves calendar data including psychological consultation and individual psychotherapy.
 *
 * @param {Request} req - The request object.
 * @return {Promise<Response>} A promise that resolves to a response containing the calendar data in JSON format.
 */
export async function GET(req: Request): Promise<Response> {
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

    return new Response(JSON.stringify({ data }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
