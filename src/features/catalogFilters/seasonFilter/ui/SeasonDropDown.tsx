import type { RadioDropDownI } from "../../model/types/dropDownType";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { useState } from "react";
import { seasons } from "../../model/seasonFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";

export const SeasonFilter = ({ title }: RadioDropDownI) => {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleSeason = (season: string) => {
        setSelected(prev =>
            prev.includes(season) ? prev.filter(s => s !== season) : [...prev, season]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {seasons.map(season => (
                    <label
                        key={season}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <CheckBox
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
