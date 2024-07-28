import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
