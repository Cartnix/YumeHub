import type { FC } from "react";
import AnimeCard from "../../../entities/AnimeCard/ui/AnimeCard";
import type { AnimeCardI } from "../../../entities/AnimeCard/model/AnimeCardI";

interface Props {
  animes: AnimeCardI[];
  isLoading: boolean;
  hasMore: boolean;
  showMore: () => void;
}

const AnimeCardsGrid: FC<Props> = ({ animes, isLoading, hasMore, showMore }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-[350px] w-full rounded-2xl bg-zinc-800 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!isLoading && animes.length === 0) {
    return <div className="text-center text-[var(--color-gray-1)] py-8">No anime found.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animes.map((a) => (
          <AnimeCard
            key={a.title}
            title={a.title}
            year={a.year}
            desc={a.desc}
            background={a.background}
            genre={a.genre}
          />
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
    </>
  );
};

export default AnimeCardsGrid;
