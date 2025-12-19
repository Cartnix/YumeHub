import { useEffect, useState } from "react"
import type { AnimeCardI } from "../../entities/AnimeCard/model/types/AnimeCardI"

export default function useFetchAnimeCards() {
    const [data, setData] = useState<AnimeCardI[]>([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let ignore = false

        const fetchAnime = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
                if (!res.ok) throw new Error("Failed to fetch anime")

                const json = await res.json()

                if (ignore) return

                console.log(json)

                const newData: AnimeCardI[] = json.data.map((item: any) => ({
                    id: item.mal_id,
                    title: item.title,
                    year: item.aired?.prop?.from?.year || 0,
                    background: item.images?.jpg?.image_url || "",
                    genre: item.genres?.[0]?.name || "Unknown",
                    desc: item.synopsis || "",
                }))

                setData(prev => {
                    const unique = newData.filter(item => !prev.some(p => p.id === item.id))
                    return [...prev, ...unique]
                })

                setHasMore(Boolean(json.pagination?.has_next_page))
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchAnime()

        return () => {
            ignore = true
        }
    }, [page])


    const showMore = () => {
        if (hasMore && !isLoading) setPage(prev => prev + 1)
    }

    return { data, isLoading, error, hasMore, showMore }
}
