import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { CalendarData, CalendarType } from './app/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSearchParams = (
  requestURL: string,
  {
    key,
    slice,
  }: {
    key: string
    slice?: number
  },
) => {
  const searchParams = new URL(requestURL).searchParams
  const param = searchParams.get(key)

  if (!param) return null

  return slice ? param.slice(0, slice) : param
}

export async function getCalendarData(
  type?: CalendarType,
): Promise<CalendarData | CalendarData[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/data/calendar`
  const response = await fetch(url)
  const result = (await response.json()) as { data: CalendarData[] }

  if (type) {
    return result.data.filter((d) => d.id === type)[0] as CalendarData
  }

  return result.data as CalendarData[]
}

export const createFormattedDateString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }

  return new Intl.DateTimeFormat('pl-PL', options).format(date)
}
