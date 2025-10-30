import { useState } from "react"
import useFetchAnimeCards from "../../../features/fetchAnimeCards"

export default function useAnimeCatalog() {
    const { data, error, isLoading, hasMore: remoteHasMore, showMore: fetchMore } = useFetchAnimeCards()
    const [visibleCount, setVisibleCount] = useState(12)

    const showMore = () => {
        const next = visibleCount + 12
        if (next > data.length && remoteHasMore) {
            fetchMore()
        }
        setVisibleCount(next)
    }

    const animes = data.slice(0, visibleCount)
    const hasMore = visibleCount < data.length || remoteHasMore

    return { animes, error, isLoading, showMore, hasMore }
}
