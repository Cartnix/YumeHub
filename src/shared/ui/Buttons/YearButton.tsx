export interface YearButtonI {
    year: number
    isActive?: boolean
    onClick?: (year: number) => void
}

export default function YearButton({ year, isActive, onClick }: YearButtonI) {
    return (
        <button
            onClick={() => onClick?.(year)}
            className={`
        p-3 rounded-xl border transition cursor-pointer
        ${isActive ? "bg-[#f2f2f2] text-[#1b1b1b] border-[#cfaaaa]" : "bg-transparent text-[#c5c5c5] border-[#444] hover:bg-[#f2f2f2] hover:text-[#1b1b1b] focus:bg-[#f2f2f2] focus:text-[#1b1b1b]"}
      `}
        >
            {year}
        </button> 
    )
}