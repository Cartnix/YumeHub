import { create } from "zustand";

export const useAnimeStore = create((set) => ({
    animeList: []
}))