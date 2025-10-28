import type { AnimeCardI } from "../model/AnimeCardI";

export default function AnimeCard({ title, year, background }: AnimeCardI) {
    return (
        <article style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} className="h-[350px] max-w-[250px] w-[200px] rounded-xl">
            <h2>{title}</h2>
            <div>
                <span>{year}</span>
            </div>
        </article>
    )
}