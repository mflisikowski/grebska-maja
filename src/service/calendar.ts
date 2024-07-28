import { API_URL } from '@/constants'

export async function fetchCalendarData() {
  const response = await fetch(`https://${API_URL}/api/data/calendar/`)

  if (!response) {
    throw new Error('Failed to fetch response')
  }

  if (!response.ok) {
    throw new Error('Failed to fetch calendar data')
  }

  const data = await response.json()

  if (!data) {
    throw new Error('Failed to parse response data')
  }

  return data
}
