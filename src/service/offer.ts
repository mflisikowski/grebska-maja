import { API_URL } from '@/constants'
import { OfferData } from '@/types'

export async function fetchOfferData() {
  const response = await fetch(`${API_URL}/api/data/offer/`, {
    cache: 'no-store',
  })

  if (!response) {
    throw new Error('Failed to fetch response')
  }

  if (!response.ok) {
    throw new Error('Failed to fetch offer data')
  }

  const data = await response.json()

  if (!data) {
    throw new Error('Failed to parse response data')
  }

  return data
}
