const VERCEL_PROJECT_PRODUCTION_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
const LOCALHOST = 'localhost:3000'

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const API_URL = IS_PRODUCTION
  ? `https://${VERCEL_PROJECT_PRODUCTION_URL}`
  : `http://${LOCALHOST}`
