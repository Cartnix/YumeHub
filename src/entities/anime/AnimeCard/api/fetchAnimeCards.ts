import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import type { AnimeCardI } from "../types/AnimeCardI"
import { useLoader } from "@/shared/model/store/useLoader"

export const useFetchAnimeCards = () => {
    const [data, setData] = useState<AnimeCardI[]>([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [error, setError] = useState<Error | null>(null)
    const isLoading = useLoader(state => state.isLoading)
    const setLoading = useLoader(state => state.setLoading)

    const [searchParams] = useSearchParams()
    const order = searchParams.get('order') || 'popularity'
    const status = searchParams.get('status')

    useEffect(() => {
        setPage(1)
        setData([])
        setHasMore(true)
    }, [order, status])

    useEffect(() => {
        let ignore = false

        const fetchAnime = async () => {
            try {
                setLoading(true)

                const params = new URLSearchParams({
                    page: page.toString(),
                    limit: '50',
                    order: order,
                    ...(order !== 'id' && { order_by: 'id' })
                })

                if (status) {
                    params.append('status', status)
                }

                const res = await fetch(
                    `https://shikimori.one/api/animes?${params.toString()}`
                )

                if (!res.ok) throw new Error("Failed to fetch anime")
                const json = await res.json()

                if (ignore) return

                const newData: AnimeCardI[] = json
                    .filter((item: any) => {
                        return !item.image?.original.includes("missing_original") &&
                            !item.image?.preview.includes("missing_preview")
                    })
                    .map((item: any) => ({
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
                    if (page === 1) return newData

                    const existingIds = new Set(prev.map(item => item.id))
                    const unique = newData.filter(item => !existingIds.has(item.id))
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
    }, [page, order, status])

    const showMore = () => {
        if (hasMore && !isLoading) setPage(prev => prev + 1)
    }


    return { data, error, hasMore, showMore }
}