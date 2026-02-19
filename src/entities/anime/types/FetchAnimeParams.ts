export interface FetchAnimeParams {
  page: number
  order: string
  status?: string | null
  format?: string | null
  genre?: string | null
  airing?: string | null
  studio?: string | null
  season?: string | null
}