import useAnimeCatalog from "../model/useAnimeCatalog";
import AnimeCardSkeleton from "./AnimeCardSekeleton";
import AnimeCardsGrid from "./AnimeCardsGrid";

export default function AnimeCardWrapper() {
    const { animes, isLoading, hasMore, showMore } = useAnimeCatalog();

    if (isLoading && animes.length === 0) {
        return (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                    <AnimeCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full">
            <AnimeCardsGrid 
                animes={animes} 
                isLoading={isLoading} 
                hasMore={hasMore} 
                showMore={showMore} 
            />
            
            {isLoading && animes.length > 0 && (
                <div className="flex justify-center p-6">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}