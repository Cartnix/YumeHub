import { useEffect, useState } from "react"
import type { AnimeCardI } from "../entities/AnimeCard/model/AnimeCardI"

export default function useFetchAnimeById(id: string) {
  const [anime, setAnime] = useState<AnimeCardI | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => res.json())
      .then(json => setAnime({
        title: json.data.title,
        year: json.data.aired?.prop?.from?.year || 0,
        background: json.data.images?.jpg?.image_url || "",
        genre: json.data.genres?.[0]?.name || "Unknown",
        desc: json.data.synopsis || "",
      }))
      .finally(() => setLoading(false))
  }, [id])

  return { anime, isLoading }
}
