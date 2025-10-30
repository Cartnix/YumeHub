import { useState } from "react"
import useFetchAnimeCards from "../../../features/fetchAnimeCards"

export default function useAnimeCatalog() {
    const { data, error, isLoading } = useFetchAnimeCards()
    const [visibleCount, setVisibleCount] = useState(12)

    const showMore = () => {
        setVisibleCount(prev => prev + 12)
    }

    const animes = data.slice(0, visibleCount)
    const hasMore = visibleCount < data.length

    return { animes, error, isLoading, showMore, hasMore }
}
