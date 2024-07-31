import { SEODescription, SEOKeywords, SEOTitle } from '@/metadata/seo'
import { creatorFullName, creatorUrl } from '@/metadata/creator'
import { Metadata } from 'next'

const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL!}`,
  ),

  description: SEODescription,
  title: SEOTitle,

  openGraph: {
    description: SEODescription,
    title: SEOTitle,
    url: process.env.VERCEL_PROJECT_PRODUCTION_URL!,
    siteName: SEOTitle,
    locale: 'pl',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    description: SEODescription,
    title: SEOTitle,
  },

  category: 'psychologia',
  keywords: SEOKeywords,

  authors: [
    {
      name: creatorFullName,
      url: creatorUrl,
    },
  ],

  creator: creatorFullName,
}

export default metadata
