import { useEffect, useState } from "react"
import type { AnimeCardI } from "../entities/AnimeCard/model/AnimeCardI"

export default function useFetchAnimeCards() {
    const [data, setData] = useState<AnimeCardI[]>([])
    const [error, setError] = useState<null | Error>(null)
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        const AnimeFetch = async () => {
            try {
                const res = await fetch("https://api.jikan.moe/v4/anime")
                if (!res.ok) {
                    throw new Error("Connection error!")
                }
                const json = await res.json()
                const clearData: AnimeCardI[] = json.data.map((item: any) => ({
                    title: item.title,
                    year: parseInt(item.year) || "",
                    background: item.images?.jpg?.image_url || "",
                    genre: item.genres?.[0]?.name || "Unknown",
                }))
                console.log(clearData)
                setData(clearData)
            } catch(error)
            {
                setError(error as Error)
            } finally{
                setLoading(false)
            }
        }
        AnimeFetch()
    }, [])

    return { data, error, isLoading }
}