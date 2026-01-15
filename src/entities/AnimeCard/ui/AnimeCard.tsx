import type { AnimeCardI } from "../types/AnimeCardI";

export default function AnimeCard({ kind = "Unknown", title, score, background, year }: AnimeCardI) {
    return (
        <div className="group relative h-[420px] w-full overflow-hidden rounded-[32px] bg-gray-950 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-cyan-500/20">
            <div
                style={{ backgroundImage: `url(${background})` }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-all duration-500 group-hover:bg-black/75 group-hover:backdrop-blur-[2px]" />

            <div className="absolute inset-x-5 top-5 z-20 flex justify-between items-start">
                {score && (
                    <div className="flex items-center gap-1.5 rounded-2xl bg-black/50 px-3 py-1.5 backdrop-blur-xl border border-white/10">
                        <span className="text-yellow-400 text-xs">★</span>
                        <span className="text-sm font-black text-white">{score}</span>
                    </div>
                )}
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 p-6">
                <h2 className="text-2xl font-black text-white leading-tight transition-all duration-500 group-hover:-translate-y-12 group-hover:opacity-0">
                    {title}
                </h2>

                <div className="absolute inset-x-6 bottom-8 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">Format</span>
                            <span className="text-xs font-bold text-white uppercase">{kind}</span>
                        </div>
                        <div className="flex flex-col text-right">
                            <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">Released</span>
                            <span className="text-xs font-bold text-cyan-400">{year}</span>
                        </div>
                    </div>
                    
                    <button className="w-full cursor-pointer rounded-2xl bg-cyan-500 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95">
                        Open Details
                    </button>
                </div>
            </div>
        </div>
    );
}