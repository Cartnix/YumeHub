import { useEffect, useState } from "react"
import type { AnimeCardI } from "../types/AnimeCardI"

export const useFetchAnimeCards = () => {
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
                const res = await fetch(
                    `https://shikimori.one/api/animes?page=${page}&limit=50&order=popularity`
                )

                if (!res.ok) throw new Error("Failed to fetch anime")

                const json = await res.json()

                if (ignore) return

                console.log(json)

                const newData: AnimeCardI[] = json.filter((item: any) => {
                    return !item.image?.original.includes("missing_original") &&
                        !item.image?.preview.includes("missing_preview")
                }).map((item: any) => ({
                    id: item.id,
                    title: item.name,
                    year: item.aired_on ? new Date(item.aired_on).getFullYear() : 0,
                    score: item.score,
                    background: item.image?.original
                        ? `https://shikimori.one${item.image.original}`
                        : `https://shikimori.one${item.image?.preview || ''}`,
                    desc: item.description || "",
                    kind: item.kind,
                }))

                setData(prev => {
                    const unique = newData.filter(item => !prev.some(p => p.id === item.id))
                    return [...prev, ...unique]
                })

                setHasMore(json.length === 50)

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