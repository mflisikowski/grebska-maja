/* eslint-disable @next/next/no-img-element */

import { getSearchParams } from '@/utils'
import { ImageResponse } from 'next/og'

import {
  metadata_og_image_dimensions,
  metadata_og_description,
  metadata_og_image_url,
  metadata_og_image_alt,
  metadata_og_title,
} from '@/metadata/og'

export async function GET(request: Request) {
  const title =
    getSearchParams(request.url, { key: 'title', slice: 100 }) ||
    metadata_og_title

  const description =
    getSearchParams(request.url, { key: 'description', slice: 100 }) ||
    metadata_og_description

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
              // marginTop: 0,
              // marginRight: '40px',
              // marginBottom: 0,
              flexShrink: 0,
              height: '100%',
              width: '400px',
            }}
          >
            <img
              alt={metadata_og_image_alt}
              src={metadata_og_image_url}
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
      { ...metadata_og_image_dimensions },
    )
  } catch (e: any) {
    console.error(e.message)

    return new Response('Nie udalo sie wygenerowac obrazka', {
      status: 500,
    })
  }
}
