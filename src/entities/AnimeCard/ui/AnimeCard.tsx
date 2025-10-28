import type { AnimeCardI } from "../model/AnimeCardI";

export default function AnimeCard({ title, year, genre, background }: AnimeCardI) {
    return (
        <article style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} className="h-[250px] w-[150px] rounded-xl">
            <h2>{title}</h2>
            <div>
                <span>{year}</span>
                <p>{genre}</p>
            </div>
        </article>
    )
}