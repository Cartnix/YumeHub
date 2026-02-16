import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import { fetchAnimeCards } from "../hooks/useAnimeCards"

export const useFetchAnimeCards = () => {
  const [searchParams] = useSearchParams()
  
  const order = searchParams.get('order') || 'popularity'
  const status = searchParams.get('status')
  const format = searchParams.get('kind')
  const genre = searchParams.get('genre')
  const airing = searchParams.get('airing')

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['anime', order, status, format, genre, airing],
    queryFn: ({ pageParam }) => 
      fetchAnimeCards({ 
        page: pageParam, 
        order, 
        status, 
        format, 
        genre, 
        airing 
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 50 ? allPages.length + 1 : undefined
    },
    select: (data) => {
      const allItems = data.pages.flat()
      const uniqueItems = allItems.filter((item, index, self) => 
        index === self.findIndex((t) => t.id === item.id)
      )
      return {
        pages: [uniqueItems],
        pageParams: data.pageParams
      }
    }
  })

  const showMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  const flatData = data?.pages.flat() ?? []

  return { 
    data: flatData,
    error, 
    hasMore: hasNextPage,
    showMore,
    isLoading: isLoading || isFetching
  }
}