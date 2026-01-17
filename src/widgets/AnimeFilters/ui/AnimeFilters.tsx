import {
    YearFilter,
    SeasonFilter,
    GenreFilter,
    StudioFilter,
    FormatFilter,
    AiringFilter
} from '@/features/catalogFilters/index'

export const AnimeFilters = () => {
    return (
        <aside>
            <div className="flex flex-col gap-6">
                <YearFilter title="Year" />
                <SeasonFilter title="Season" />
                <GenreFilter title="Genre" />
                <StudioFilter title="Studio" />
                <FormatFilter title="Format" />
                <AiringFilter title="Airing Status" />
            </div>
        </aside>
    )
}