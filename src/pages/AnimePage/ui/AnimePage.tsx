import { useParams } from "react-router-dom"
import { Container } from "../../../shared/ui/Container"
import useFetchAnimeById from "../../../features/fetchAnimeById"

export default function AnimePage() {
    const { id } = useParams<{ id: string }>()
    const { anime, isLoading } = useFetchAnimeById(id || "")

    return (
        <main className="py-10 pt-[170px]">
            <Container>
                {isLoading ? (
                    <div className="text-center mt-10">Loading...</div>
                ) : !anime ? (
                    <div className="text-center mt-10">Anime not found.</div>
                ) : (
                    <div
                        className="relative w-full max-w-[800px] rounded-2xl overflow-hidden shadow-lg mx-auto"
                        style={{
                            backgroundImage: `url(${anime.background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="relative z-10 p-8 text-white">
                            <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
                            <p className="text-white/80 mb-4">{anime.desc}</p>
                            <p className="text-sm text-white/60">
                                <strong>Year:</strong> {anime.year} &nbsp; | &nbsp;
                                <strong>Genre:</strong> {anime.genre}
                            </p>
                        </div>
                    </div>
                )}
            </Container>
        </main>
    )
}
