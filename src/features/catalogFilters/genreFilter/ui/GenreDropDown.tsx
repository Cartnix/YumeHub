import type { RadioDropDownI } from "../../model/types/dropDownType";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { genres } from "../../model/genreFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";
import { useSearchParams } from "react-router-dom";

export const GenreFilter = ({ title }: RadioDropDownI) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedGenres = searchParams.get('genre')?.split(',') || [] 

    const toggleGenre = (genre: string) => {
        const newGenres = selectedGenres.includes(genre)
            ? selectedGenres.filter(g => g !== genre)
            : [...selectedGenres, genre]

        if (newGenres.length > 0) {
            searchParams.set('genre', newGenres.join(',')) 
        } else {
            searchParams.delete('genre')
        }

        setSearchParams(searchParams)
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {genres.map(genre => (
                    <label key={genre} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox
                            checked={selectedGenres.includes(genre)}
                            onChange={() => toggleGenre(genre)} />
                        <span className="text-[var(--color-gray-1)] text-xl">{genre}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}