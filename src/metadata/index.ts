import { SEODescription, SEOKeywords, SEOTitle } from '@/metadata/seo'
import { Metadata } from 'next'
import { authorFullName, authorUrl } from './creator'

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
      name: authorFullName,
      url: authorUrl,
    },
  ],

  creator: authorFullName,
}

export default metadata
