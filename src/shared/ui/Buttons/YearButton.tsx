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
    ${isActive ? "bg-[var(--color-offwhite)] text-[var(--color-dark-1)] border-[var(--color-border-active)]" : "bg-transparent text-[var(--color-gray-1)] border-[var(--color-gray-3)] hover:bg-[var(--color-offwhite)] hover:text-[var(--color-dark-1)] focus:bg-[var(--color-offwhite)] focus:text-[var(--color-dark-1)]"}
      `}
        >
            {year}
        </button> 
    )
}