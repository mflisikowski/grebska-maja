'use client'

import { Container } from '@/components/container'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export interface CalcomEmbedProps {
  type: string
}

export default function CalcomEmbed({ type }: CalcomEmbedProps) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({})
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'column_view',
      })
    })()
  }, [])

  return (
    <Container>
      <div className="mb-24 mt-24 lg:min-h-[650px] 2xl:-ml-44 2xl:-mr-44">
        <Cal
          calLink={`majagrebska/${type}`}
          style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          config={{ layout: 'week_view' }}
          lang="pl"
        />
      </div>
    </Container>
  )
}
