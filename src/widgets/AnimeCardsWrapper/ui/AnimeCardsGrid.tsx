import type { FC } from "react";
import AnimeCard from "../../../entities/AnimeCard/ui/AnimeCard";
import type { AnimeCardI } from "../../../entities/AnimeCard/model/AnimeCardI";
import LoaderOverlay from "../../../shared/ui/Loader/LoaderOverlay";
import { Link } from "react-router-dom";

interface Props {
    animes: AnimeCardI[];
    isLoading: boolean;
    hasMore: boolean;
    showMore: () => void;
}

const AnimeCardsGrid: FC<Props> = ({ animes, isLoading, hasMore, showMore }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {animes.map((a) => (
                    <Link key={a.id} to={`/anime/${a.id}`}>
                        <AnimeCard
                            id={a.id}
                            title={a.title}
                            year={a.year}
                            desc={a.desc}
                            background={a.background}
                            genre={a.genre}
                        />
                    </Link>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-6">
                    <button
                        className="cursor-pointer w-full font-bold px-4 py-4 rounded-xl bg-[var(--color-offwhite)] text-[var(--color-dark-1)] hover:bg-[var(--color-btn-secondary-hover)] transition-colors"
                        onClick={showMore}
                    >
                        Show more
                    </button>
                </div>
            )}

            {isLoading && <LoaderOverlay />}
        </>
    );
};

export default AnimeCardsGrid;
