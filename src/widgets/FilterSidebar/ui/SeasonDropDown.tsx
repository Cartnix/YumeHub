import type { RadioDropDownI } from "../model/types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { Seasons } from "../model/SeasonFilterConstants";
import { useState } from "react";
import CheckBoxUI from "../../../shared/ui/Checkbox/CheckBoxUI";

export function SeasonDropDown({ title }: RadioDropDownI) {

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
                    <label
                        key={season}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <CheckBoxUI
                            checked={selected.includes(season)}
                            onChange={() => toggleSeason(season)}
                        />
                        <span className="text-[var(--color-gray-1)] text-xl">
                            {season}
                        </span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
