import { useFetchAnimeCards } from "@/entities/anime/AnimeCard/api/fetchAnimeCards"
import { useLoader } from "@/shared/model/store/useLoader"
import { useEffect, useState } from "react"

export const useAnimeCatalog = () => {
    const { data, error, hasMore: remoteHasMore, showMore: fetchMore } = useFetchAnimeCards()
    const [visibleCount, setVisibleCount] = useState(24)
    const [isFetching, setIsFetching] = useState(false) 
    const isLoading = useLoader(state => state.isLoading)
    const animes = data.slice(0, visibleCount)
    const hasMore = visibleCount < data.length || remoteHasMore

    useEffect(() => {
        const fetchWithDelay = async () => {
            if (remoteHasMore && !isLoading && data.length < visibleCount && !isFetching) {
                setIsFetching(true)
                await new Promise(resolve => setTimeout(resolve, 500))
                fetchMore()
                setIsFetching(false)
            }
        }
        fetchWithDelay()
    }, [visibleCount, remoteHasMore, isLoading, data.length, fetchMore, isFetching])

    const showMore = () => {
        setVisibleCount(prev => prev + 12)
        if (visibleCount + 12 >= data.length - 12 && remoteHasMore && !isLoading && !isFetching) {
            setIsFetching(true)
            fetchMore()
            setIsFetching(false)
        }
    }

    return { animes, error, showMore, hasMore }
}
