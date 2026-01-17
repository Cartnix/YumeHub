import type { AnimeCardI } from "./AnimeCardI";

export interface Anime extends AnimeCardI{
    rating: number | null;
    episodes: number;
    status: string;
    type: string;
    aired: string;
    season: string;
    studios: string;
    source: string;
    duration: string;
    genre: string;
    desc?: string
}