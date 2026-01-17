import type { AnimeCardI } from "./AnimeCardI"

export interface AnimeState {
  animeList: AnimeCardI[]
  currentAnime: AnimeCardI | null
}

export interface AnimeActions {
  setAnimeList: (list: AnimeCardI[]) => void
  addAnimeList: (newItems: AnimeCardI[]) => void
  setCurrentAnime: (anime: AnimeCardI | null) => void
  clearAnimeList: () => void
}

export type AnimeStore = AnimeState & AnimeActions