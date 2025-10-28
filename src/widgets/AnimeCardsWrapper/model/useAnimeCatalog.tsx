import useFetchAnimeCards from "../../../features/fetchAnimeCards"

export default function useAnimeCatalog()
{
    const {data, error, isLoading} = useFetchAnimeCards()
    const animes = data.slice(0,10)
    return {animes, error, isLoading}
}