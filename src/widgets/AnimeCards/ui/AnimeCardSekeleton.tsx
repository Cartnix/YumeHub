export const AnimeCardSkeleton = () => {
    return (
        <div className="animate-pulse bg-[#1a1a1a] rounded-xl overflow-hidden h-[380px] w-full border border-white/5">
            <div className="relative h-full w-full bg-[#242424]">
                <div className="absolute bottom-3 left-3 w-12 h-5 bg-[#333] rounded-md" />
                <div className="absolute bottom-3 right-3 w-20 h-5 bg-[#333] rounded-md" />
            </div>
        </div>
    )
}