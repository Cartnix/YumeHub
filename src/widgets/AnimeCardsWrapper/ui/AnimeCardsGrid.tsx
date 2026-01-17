import type { FC } from "react";
import type { AnimeCardI } from "@/entities/anime/AnimeCard/types/AnimeCardI";
import { Link } from "react-router-dom";
import { AnimeCard } from "@/entities/anime/AnimeCard";
import { LoaderOverlay } from "@/shared/ui/Loader";

interface Props {
    animes: AnimeCardI[];
    isLoading: boolean;
    hasMore: boolean;
    showMore: () => void;
}

const AnimeCardsGrid: FC<Props> = ({ animes, isLoading, hasMore, showMore }) => {
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 justify-start">
                {animes.map((a) => (
                    <Link key={a.id} to={`/anime/${a.id}`}>
                        <AnimeCard
                            id={a.id}
                            title={a.title}
                            year={a.year}
                            background={a.background}
                            score={a.score}
                            kind={a.kind}
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
