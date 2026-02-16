export interface AnimeResponse {
  id: number
  name: string
  aired_on: string
  score: number
  image: {
    original: string
    preview: string
  }
  description: string
  kind: string
}