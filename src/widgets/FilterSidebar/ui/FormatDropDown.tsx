import type { RadioDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { useState } from "react";
import { Formats } from "../model/FormatFilterConstants";
import CheckBoxUI from "../../../shared/ui/Checkbox/CheckBoxUI";

export function FormatDropDown({ title }: RadioDropDownI) {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleFormat = (format: string) => {
        setSelected(prev =>
            prev.includes(format) ? prev.filter(s => s !== format) : [...prev, format]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {Formats.map(format => (
                    <label key={format} className="flex items-center gap-2 cursor-pointer">
                        <CheckBoxUI checked={selected.includes(format)} onChange={() => toggleFormat(format)}/>
                        <span className="text-[var(--color-gray-1)] text-xl">{format}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
