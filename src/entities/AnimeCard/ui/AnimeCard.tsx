import type { AnimeCardI } from "../model/AnimeCardI";

export default function AnimeCard({ title, year, background, genre, desc }: AnimeCardI) {
    return (
        <article
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="
                relative
                h-[350px] w-[250px]
                rounded-2xl
                overflow-hidden
                transition-all duration-300 ease-in-out
                shadow-lg
                hover:shadow-xl
                hover:scale-[1.02]
                cursor-pointer
                group
            "
        >
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-t from-black/90 via-black/30 to-transparent
                    transition-opacity duration-300
                    group-hover:via-black/40
                "
            />

            <div
                className="
                    absolute bottom-0 left-0 right-0
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-500
                    bg-black/70 backdrop-blur-sm
                    z-10
                    text-center
                    h-[200px]
                    p-4
                "
            >
                <h2
                    className="
                        text-lg font-semibold text-white mb-2
                        line-clamp-2
                    "
                >
                    {title}
                </h2>
                <p className="text-white/80 text-sm line-clamp-5">
                    {desc || "No description available."}
                </p>
            </div>

            <div
                className="
                    absolute bottom-0 left-0 right-0
                    p-4
                    flex justify-between items-center
                    bg-gradient-to-t from-black/80 to-transparent
                    transition-opacity duration-300
                    group-hover:opacity-0
                "
            >
                <div
                    className="
                        px-3 py-1
                        rounded-lg
                        bg-white/10
                        backdrop-blur-sm
                        text-sm font-medium
                        text-white/90
                    "
                >
                    {year}
                </div>
                <div
                    className="
                        backdrop-blur-sm
                        text-sm font-medium
                        text-white/90
                    "
                >
                    {genre}
                </div>
            </div>
        </article>
    );
}
