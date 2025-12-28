import { useEffect, useState } from "react"
import type { AnimePageI } from "../pages/AnimePage/model/AnimePageI"

export default function useFetchAnimeById(id: string) {
  const [anime, setAnime] = useState<AnimePageI | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    setLoading(true)

    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.json())
      .then(json => {
        const data = json.data

        setAnime({
          id: parseInt(id),
          title: data.title,
          year: data.aired?.prop?.from?.year || 0,
          background: data.images?.jpg?.image_url || "",
          type: data.type || "Unknown",
          episodes: data.episodes || 0,
          genre: data.genres?.map((g: any) => g.name).join(", ") || "Unknown",
          aired: data.aired?.string || "Unknown",
          status: data.status || "Unknown",
          season: data.season && data.year ? `${data.season} ${data.year}` : "Unknown",
          studios: data.studios?.map((s: any) => s.name).join(", ") || "Unknown",
          source: data.source || "Unknown",
          rating: data.score || null,
          duration: data.duration || "Unknown",
          desc: data.synopsis || "No description",
        })
      })
      .finally(() => setLoading(false))
  }, [id])

  return { anime, isLoading }
}
