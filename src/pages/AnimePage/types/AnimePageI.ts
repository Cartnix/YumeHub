import type { AnimeCardI } from "../../../entities/AnimeCard/types/AnimeCardI";

export interface AnimePageI extends AnimeCardI{
    rating: number | null;
    episodes: number;
    status: string;
    type: string;
    aired: string;
    season: string;
    studios: string;
    source: string;
    duration: string;
}