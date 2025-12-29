import { useEffect, useState } from "react"
import type { AnimePageI } from "../pages/AnimePage/model/AnimePageI"

interface UseFetchAnimeResult {
  anime: AnimePageI | null
  isLoading: boolean
  error: string | null
}

export default function useFetchAnimeById(id: string): UseFetchAnimeResult {
  const [anime, setAnime] = useState<AnimePageI | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    let isCancelled = false

    setLoading(true)
    setError(null)

    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Anime not found (${res.status})`)
        }
        return res.json()
      })
      .then(json => {
        if (isCancelled) return

        const data = json.data

        setAnime({
          id: parseInt(id),
          title: data.title || "Unknown Title",
          year: data.aired?.prop?.from?.year || null,  // null вместо 0
          background: data.images?.jpg?.large_image_url || data.images?.jpg?.image_url || "",
          type: data.type || "Unknown",
          episodes: data.episodes || 0,
          genre: data.genres?.map((g: any) => g.name).join(", ") || "Unknown",
          aired: data.aired?.string || "Unknown",
          status: data.status || "Unknown",
          season: data.season && data.year 
            ? `${data.season.charAt(0).toUpperCase() + data.season.slice(1)} ${data.year}` 
            : "Unknown",
          studios: data.studios?.map((s: any) => s.name).join(", ") || "Unknown",
          source: data.source || "Unknown",
          rating: data.score || null,
          duration: data.duration || "Unknown",
          desc: data.synopsis || "No description available",
        })
      })
      .catch(err => {
        if (!isCancelled) {
          setError(err.message || "Failed to fetch anime")
          setAnime(null)
        }
      })
      .finally(() => {
        if (!isCancelled) {
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [id])

  return { anime, isLoading, error }
}