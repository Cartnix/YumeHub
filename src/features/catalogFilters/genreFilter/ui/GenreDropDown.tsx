import { useState } from "react";
import type { RadioDropDownI } from "../../model/types/dropDownType";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { genres } from "../../model/genreFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";

export const GenreFilter = ({ title }: RadioDropDownI) => {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleGenre = (genre: string) => {
        setSelected(prev =>
            prev.includes(genre) ? prev.filter(s => s !== genre) : [...prev, genre]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {genres.map(genre => (
                    <label key={genre} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox checked={selected.includes(genre)} onChange={() => toggleGenre(genre)} />
                        <span className="text-[var(--color-gray-1)] text-xl">{genre}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
