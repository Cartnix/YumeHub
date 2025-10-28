import AnimeCard from "../../../entities/AnimeCard/ui/AnimeCard";
import useAnimeCatalog from "../model/useAnimeCatalog"

export default function AnimeCardWrapper()
{
    const {animes, isLoading} = useAnimeCatalog();

    return (
        <div className="flex-wrap gap-4 flex">
            {animes.map(item => (
                <AnimeCard 
                key={item.title}
                title={item.title}
                year={item.year}
                desc={item.desc}
                background={item.background}/>
            ))}
        </div>
    )
}