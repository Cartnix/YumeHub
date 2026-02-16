import { useFetchAnimeCards } from "@/entities/anime/api/fetchAnimeCards"
import { useLoader } from "@/shared/model/store/useLoader"
import { useEffect, useState, useRef } from "react"

export const useAnimeCatalog = () => {
    const { data, error, hasMore: remoteHasMore, showMore: fetchMore } = useFetchAnimeCards()
    const [visibleCount, setVisibleCount] = useState(24)
    const [isFetching, setIsFetching] = useState(false)
    const isLoading = useLoader(state => state.isLoading)
    const hasInitiallyFetchedRef = useRef(false)
    
    const animes = data.slice(0, visibleCount)
    const hasMore = visibleCount < data.length || remoteHasMore

    useEffect(() => {
        const needsInitialData = data.length === 0 && !hasInitiallyFetchedRef.current
        
        if (needsInitialData && remoteHasMore && !isLoading && !isFetching) {
            console.log('🚀 Initial load: fetching first batch')
            hasInitiallyFetchedRef.current = true
            
            const fetchInitial = async () => {
                setIsFetching(true)
                await fetchMore()
                setIsFetching(false)
            }
            fetchInitial()
        }
    }, [data.length, remoteHasMore, isLoading, isFetching, fetchMore])

    useEffect(() => {
        const needsMoreData = data.length > 0 && data.length < visibleCount && data.length < 100
        
        if (needsMoreData && remoteHasMore && !isLoading && !isFetching) {
            console.log('📥 Auto-fetching: data.length =', data.length, 'visibleCount =', visibleCount)
            
            const fetchWithDelay = async () => {
                setIsFetching(true)
                await new Promise(resolve => setTimeout(resolve, 500))
                await fetchMore()
                setIsFetching(false)
            }
            fetchWithDelay()
        }
    }, [data.length, visibleCount, remoteHasMore, isLoading, isFetching, fetchMore])

    const showMore = () => {
        const newVisibleCount = visibleCount + 12
        setVisibleCount(newVisibleCount)

        console.log('👆 Show more clicked: new visibleCount =', newVisibleCount, 'data.length =', data.length)

        const willNeedMore = newVisibleCount >= data.length - 12
        if (willNeedMore && remoteHasMore && !isLoading && !isFetching) {
            console.log('📥 Pre-fetching from showMore')
            const fetchData = async () => {
                setIsFetching(true)
                await fetchMore()
                setIsFetching(false)
            }
            fetchData()
        }
    }

    return { animes, error, showMore, hasMore }
}