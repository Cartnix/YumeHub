import type { RadioDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { useState } from "react";
import { Genres } from "../model/GenreFilterConstants";

export function GenreDropDown({ title }: RadioDropDownI) {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleGenre = (genre: string) => {
        setSelected(prev =>
            prev.includes(genre) ? prev.filter(s => s !== genre) : [...prev, genre]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {Genres.map(genre => (
                    <label key={genre} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selected.includes(genre)}
                            onChange={() => toggleGenre(genre)}
                            className="w-5 h-5 border-2 border-[var(--color-gray-2)] rounded checked:bg-[var(--color-gray-1)] checked:border-[var(--color-gray-3)] transition-colors"
                        />
                        <span className="text-[var(--color-gray-1)] text-xl">{genre}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
