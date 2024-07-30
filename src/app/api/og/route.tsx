/* eslint-disable @next/next/no-img-element */

import { getSearchParams } from '@/utils'
import { ImageResponse } from 'next/og'

import { SEOTitle, SEODescription } from '@/metadata/seo'

export async function GET(request: Request) {
  const title =
    getSearchParams(request.url, { key: 'title', slice: 100 }) || SEOTitle

  const description =
    getSearchParams(request.url, { key: 'description', slice: 100 }) ||
    SEODescription

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 1200,
            height: 630,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexShrink: 0,
              height: '100%',
              width: '400px',
            }}
          >
            <img
              alt={title}
              src={process.env.NEXT_PUBLIC_OG_IMAGE_URL!}
              style={{
                display: 'flex',
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                flexShrink: 0,
              }}
            />
          </div>

          <div
            style={{
              flexDirection: 'column',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              maxWidth: 600,
            }}
          >
            <h1
              style={{
                fontSize: '3.35rem',
                fontWeight: 900,
                color: '#1f2937',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <span>
                <>{title}</>
              </span>
            </h1>

            <p
              style={{
                color: '#1f2937',
                fontSize: '1.25rem',
                lineHeight: 1.8,
              }}
            >
              <>{description}</>
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.error(e.message)

    return new Response('Nie udalo sie wygenerowac obrazka', {
      status: 500,
    })
  }
}
