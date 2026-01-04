import { create } from "zustand";
import type { AnimeStore } from "../types/AnimeStoreI";

export const useAnimeStore = create<AnimeStore>((set) => ({
    animeList: [],
    currentAnime: null, 

    setAnimeList: (list) => set({ animeList: list }),
    addAnimeList: (newItems) => set((state) => ({
        animeList: [...state.animeList, ...newItems]
    })),  

    setCurrentAnime: (anime) => set({ currentAnime: anime }),

    clearAnimeList: () => set({ animeList: [] }),
}))