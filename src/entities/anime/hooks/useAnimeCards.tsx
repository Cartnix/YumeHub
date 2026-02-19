import type { AnimeCardI } from "../types/AnimeCardI"
import type { AnimeResponse } from "../types/AnimeResponseI"
import type { FetchAnimeParams } from "../types/FetchAnimeParams"

export const fetchAnimeCards = async ({
  page,
  order,
  format,
  genre,
  studio,
  season
}: FetchAnimeParams): Promise<AnimeCardI[]> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: '50',
    order: order,
    ...(order !== 'id' && { order_by: 'id' })
  })

  if (format) params.append('kind', format)
  if (genre) params.append('genre', genre)
  if (studio) params.append('studio', studio)
  if (season) params.append('season', season)

  const res = await fetch(
    `https://shikimori.one/api/animes?${params.toString()}`
  )

  if (!res.ok) throw new Error("Failed to fetch anime")

  const json: AnimeResponse[] = await res.json()

  return json
    .filter((item) => {
      return !item.image?.original.includes("missing_original") &&
        !item.image?.preview.includes("missing_preview")
    })
    .map((item): AnimeCardI => ({
      id: item.id,
      title: item.name,
      year: item.aired_on ? new Date(item.aired_on).getFullYear() : 0,
      score: item.score,
      background: item.image?.original
        ? `https://shikimori.one${item.image.original}`
        : `https://shikimori.one${item.image?.preview || ''}`,
      kind: item.kind,
    }))
}