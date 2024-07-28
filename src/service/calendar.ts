export async function fetchCalendarData() {
  const url =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || 'http://localhost:3000'
  const response = await fetch(`${url}/api/data/calendar/`)

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
