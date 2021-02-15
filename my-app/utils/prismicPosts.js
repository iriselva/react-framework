import Prismic from 'prismic-javascript'

/* Fetching data from Prismic database */
/* token and repository variables in .env file */
export const API_URL = `https://${process.env.PRISMIC_REPOSITORY}.cdn.prismic.io/api/v2`
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN })