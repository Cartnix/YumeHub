import type { RadioDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { useState } from "react";
import { Studios } from "../model/StudioFilterConstants";
import CheckBoxUI from "../../../shared/ui/Checkbox/CheckBoxUI";

export function StudioDropDown({ title }: RadioDropDownI) {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleStudio = (studio: string) => {
        setSelected(prev =>
            prev.includes(studio) ? prev.filter(s => s !== studio) : [...prev, studio]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {Studios.map(studio => (
                    <label key={studio} className="flex items-center gap-2 cursor-pointer">
                        <CheckBoxUI checked={selected.includes(studio)} onChange={() => toggleStudio(studio)}/>
                        <span className="text-[var(--color-gray-1)] text-xl">{studio}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
