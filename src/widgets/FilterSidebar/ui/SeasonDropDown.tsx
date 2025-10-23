import type { YearDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { Seasons } from "../model/SeasonFilterConstants";
import { useState } from "react";

export function SeasonDropDown({ title }: YearDropDownI) {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleSeason = (season: string) => {
        setSelected(prev =>
            prev.includes(season) ? prev.filter(s => s !== season) : [...prev, season]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {Seasons.map(season => (
                    <label key={season} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selected.includes(season)}
                            onChange={() => toggleSeason(season)}
                            className="w-5 h-5 border-2 border-[var(--color-gray-2)] rounded checked:bg-[var(--color-gray-1)] checked:border-[var(--color-gray-3)] transition-colors"
                        />
                        <span className="text-[var(--color-gray-1)] text-xl">{season}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
