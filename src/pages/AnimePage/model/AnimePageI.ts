import type { AnimeCardI } from "../../../entities/AnimeCard/model/AnimeCardI";

export interface AnimePageI extends AnimeCardI{
    rating: number;
    episodes: number;
    status: string; 
}