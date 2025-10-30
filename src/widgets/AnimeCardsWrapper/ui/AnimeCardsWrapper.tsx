import useAnimeCatalog from "../model/useAnimeCatalog";
import AnimeCardsGrid from "./AnimeCardsGrid";

export default function AnimeCardWrapper() {
    const { animes, isLoading, hasMore, showMore } = useAnimeCatalog();

    return (
        <div className="w-full">
            <AnimeCardsGrid animes={animes} isLoading={isLoading} hasMore={hasMore} showMore={showMore} />
        </div>
    );
}
