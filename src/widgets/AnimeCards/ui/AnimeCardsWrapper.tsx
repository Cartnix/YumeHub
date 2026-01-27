import { useLoader } from "@/shared/model/store/useLoader";
import { useAnimeCatalog } from "../model/useAnimeCatalog";
import { AnimeCardSkeleton } from "./AnimeCardSekeleton";
import { AnimeCardsGrid } from "./AnimeCardsGrid";

export const AnimeCardsWrapper = () => {
    const { animes, hasMore, showMore } = useAnimeCatalog();
    const isLoading = useLoader(state => state.isLoading)

    if (isLoading && animes.length === 0) {
        return (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(24)].map((_, i) => (
                    <AnimeCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full">
            <AnimeCardsGrid
                animes={animes} 
                hasMore={hasMore} 
                showMore={showMore} 
            />
        </div>
    );
}