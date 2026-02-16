import { useParams } from "react-router-dom"
import { Container } from "@/shared/ui/Container"
import { Star } from "lucide-react"
import { DetailsMenu } from "@/shared/ui/DetailMenu/ui/DetailsMenu"
import { Overview } from "./Overview"
import { useFetchAnimeById } from "@/entities/anime/api/fetchAnimeById"
import { animePageTabs } from "../model/animePageTabs"
import { AmimeStatusButtonsUI } from "./AnimeStatusButtonsUI"

export const AnimePage = () => {
    const { id } = useParams<{ id: string }>()
    const { data: anime, isLoading, isError, error } = useFetchAnimeById(id || "")

    return (
        <main className="py-10 pt-[170px] min-h-screen bg-[var(--color-dark-1)] text-[var(--color-offwhite)]">
            <Container>
                {isError && (
                    <div className="text-center mt-10 text-lg text-white/70 animate-pulse">
                        Error: {error instanceof Error ? error.message : "Something went wrong"}
                    </div>
                )}

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

                            <AmimeStatusButtonsUI />

                        </div>
                    </div>
                )}
                <DetailsMenu tabs={animePageTabs}>
                    {(activeTab) => (
                        <>
                            {activeTab === 'overview' && (
                                <Overview data={anime ? { ...anime, desc: anime.desc ?? "No description available" } : null} />
                            )}
                        </>
                    )}
                </DetailsMenu>
            </Container>
        </main>
    )
}
