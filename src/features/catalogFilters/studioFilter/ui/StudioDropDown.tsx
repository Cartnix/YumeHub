import {DropDown} from "@/shared/ui/DropDown/ui/DropDown";
import { useState } from "react";
import type { RadioDropDownI } from "../../model/types/dropDownType";
import { studios } from "../../model/studioFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";

export const StudioFilter = ({ title }: RadioDropDownI) => {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleStudio = (studio: string) => {
        setSelected(prev =>
            prev.includes(studio) ? prev.filter(s => s !== studio) : [...prev, studio]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {studios.map(studio => (
                    <label key={studio} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox checked={selected.includes(studio)} onChange={() => toggleStudio(studio)}/>
                        <span className="text-[var(--color-gray-1)] text-xl">{studio}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
