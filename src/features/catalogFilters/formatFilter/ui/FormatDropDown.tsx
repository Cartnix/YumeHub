import type { RadioDropDownI } from "../../model/types/dropDownType";
import {DropDown} from "@/shared/ui/DropDown/ui/DropDown";
import { useState } from "react";
import { formats } from "../../model/formatFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";

export const FormatFilter = ({ title }: RadioDropDownI) => {

    const [selected, setSelected] = useState<string[]>([]);

    const toggleFormat = (format: string) => {
        setSelected(prev =>
            prev.includes(format) ? prev.filter(s => s !== format) : [...prev, format]
        );
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {formats.map(format => (
                    <label key={format} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox checked={selected.includes(format)} onChange={() => toggleFormat(format)}/>
                        <span className="text-[var(--color-gray-1)] text-xl">{format}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}
