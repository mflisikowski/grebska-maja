import { CalendarData } from '@/types'

export async function fetchCalendarData() {
  const data: CalendarData[] = [
    {
      name: 'Konsultacja psychologiczna',
      duration: '50 min',
      price: '200 PLN',
      id: 'psychological-consultation',
      href: '/calendar/psychological-consultation',
      description:
        'Konsultacje psychologiczne to pierwsze spotkania, podczas których psychoterapeuta przeprowadza szczegółowy wywiad, aby zrozumieć Twoje problemy i potrzeby. Jest to także okazja, aby omówić cele terapii i zdecydować o dalszych krokach.',
      features: [
        'Szczegółowy wywiad, który umożliwi Mi zrozumieć Twoje problemy i potrzeby',
        'Omówienie celu terapii i zdecydowanie o dalszych krokach',
        'Dostosowywanie strategii terapeutycznej',
      ],
    },
    {
      name: 'Psychoterapia indywidualna',
      duration: '50 min',
      price: '200 PLN',
      id: 'individual-psychotherapy',
      href: '/calendar/individual-psychotherapy',
      description:
        'Psychoterapia indywidualna obejmuje regularne sesje z psychoterapeutą, które są dostosowane do indywidualnych potrzeb pacjenta.',
      features: [
        'Praca nad identyfikacją i zmianą negatywnych wzorców myślenia i zachowania',
        'Poprawa samopoczucia',
        'Rozwijanie umiejętności radzenia sobie',
      ],
    },
  ]

  return data
}
