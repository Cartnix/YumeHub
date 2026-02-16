import { useQuery } from "@tanstack/react-query";
import type { Anime } from "../types/AnimePageI";

const fetchAnimeById = async (id: string): Promise<Anime> => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!res.ok) {
    throw new Error(`Anime not found (${res.status})`);
  }

  const json = await res.json();
  const data = json.data;

  return {
    id: parseInt(id),
    title: data.title || "Unknown Title",
    year: data.aired?.prop?.from?.year || null,
    background: data.images?.jpg?.large_image_url || data.images?.jpg?.image_url || "",
    type: data.type || "Unknown",
    episodes: data.episodes || 0,
    genre: data.genres?.map((g: any) => g.name).join(", ") || "Unknown",
    aired: data.aired?.string || "Unknown",
    status: data.status || "Unknown",
    season: data.season && data.year
      ? `${data.season.charAt(0).toUpperCase() + data.season.slice(1)} ${data.year}`
      : "Unknown",
    studios: data.studios?.map((s: any) => s.name).join(", ") || "Unknown",
    source: data.source || "Unknown",
    rating: data.score || null,
    duration: data.duration || "Unknown",
    desc: data.synopsis || "No description available",
  };
}

export const useFetchAnimeById = (id: string) => {
  return useQuery({
    queryKey: ['anime', id],
    queryFn: () => fetchAnimeById(id),
    enabled: !!id,
  })
}