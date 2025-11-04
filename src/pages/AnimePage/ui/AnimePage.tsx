import { useParams } from "react-router-dom"
import { Container } from "../../../shared/ui/Container"
import useFetchAnimeById from "../../../features/fetchAnimeById"
import { Star } from "lucide-react"
import AnimePageButtons from "../../../widgets/AnimePageWidgets/AnimePageButtons"


export default function AnimePage() {
    const { id } = useParams<{ id: string }>()
    const { anime, isLoading } = useFetchAnimeById(id || "")

    return (
        <main className="py-10 pt-[170px] min-h-screen bg-[var(--color-dark-1)] text-[var(--color-offwhite)]">
            <Container>
                {isLoading ? (
                    <div className="text-center mt-10 text-lg text-white/70 animate-pulse">
                        Loading...
                    </div>
                ) : !anime ? (
                    <div className="text-center mt-10 text-white/70">
                        Anime not found.
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div
                            style={{
                                backgroundImage: `url(${anime.background})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            className="relative h-[400px] w-full lg:w-[300px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="absolute transition-all duration-300" />
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-4xl font-extrabold mb-2">{anime.title}</h1>
                                <div className="flex gap-2 items-center">
                                    <Star stroke="var(--color-gray-1)" />
                                    <span className="font-bold text-xl">{anime.rating ?? "N/A"}</span>
                                </div>
                            </div>

                            <AnimePageButtons />

                            {/* <div className="flex flex-wrap gap-4 text-sm">
                                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm">
                                    Year: {anime.year || "—"}
                                </span>
                                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm">
                                    Genre: {anime.genre}
                                </span>
                                <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm">
                                    Episodes: {anime.episodes || "?"}
                                </span>
                            </div>

                            <p className="text-white/80 leading-relaxed text-lg">
                                {anime.desc || "No description available."}
                            </p> */}
                        </div>
                    </div>
                )}
            </Container>
        </main>
    )
}
