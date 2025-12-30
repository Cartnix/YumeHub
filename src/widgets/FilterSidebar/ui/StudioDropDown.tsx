import type { RadioDropDownI } from "../model/types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { useState } from "react";
import { Studios } from "../model/StudioFilterConstants";

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
                        <input
                            type="checkbox"
                            checked={selected.includes(studio)}
                            onChange={() => toggleStudio(studio)}
                            className="w-5 h-5 border-2 border-[var(--color-gray-2)] rounded checked:bg-[var(--color-gray-1)] checked:border-[var(--color-gray-3)] transition-colors"
                        />
                        <span className="text-[var(--color-gray-1)] text-xl">{studio}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
