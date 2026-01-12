import type { RadioDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { useState } from "react";
import { AiringStatuses } from "../model/AiringFilterConstants";
import CheckBoxUI from "../../../shared/ui/Checkbox/CheckBoxUI";

export function AiringDropDown({ title }: RadioDropDownI) {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleFormat = (airing: string) => {
        setSelected(prev =>
            prev.includes(airing) ? prev.filter(s => s !== airing) : [...prev, airing]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {AiringStatuses.map(airing => (
                    <label key={airing} className="flex items-center gap-2 cursor-pointer">
                        <CheckBoxUI checked={selected.includes(airing)} onChange={() => toggleFormat(airing)}/>
                        <span className="text-[var(--color-gray-1)] text-xl">{airing}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
