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
