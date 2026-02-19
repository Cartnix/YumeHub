import { formatFilterConstants } from "@/features/catalogFilters/model/formatFilterConstants"
import { genreFilterConstants } from "@/features/catalogFilters/model/genreFilterConstants"
import { studioFilterConstants } from "@/features/catalogFilters/model/studioFilterConstants"
import { yearFilterConstants } from "@/features/catalogFilters/model/yearFilterConstants"
import { MultiSelectFilter } from "@/features/catalogFilters/MultipleFilters"

export const AnimeFilters = () => {
    return (
        <aside>
            <div className="flex flex-col gap-6">
                <MultiSelectFilter 
                title="Year"
                paramName="season"
                options={yearFilterConstants} />

                <MultiSelectFilter 
                title="Genre"
                paramName="genre"
                options={genreFilterConstants} />

                <MultiSelectFilter 
                title="Format"
                paramName="kind"
                options={formatFilterConstants} />

                <MultiSelectFilter 
                title="Studio"
                paramName="studio"
                options={studioFilterConstants} />
            </div>
        </aside>
    )
}