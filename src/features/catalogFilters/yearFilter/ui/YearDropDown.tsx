import { YearButton } from "@/shared/ui/Buttons/ui/YearButton";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { years } from "../../model/yearFilterConstants";
import type { RadioDropDownI } from "../../model/types/dropDownType";
import { useState } from "react";

export const YearFilter = ({ title }: RadioDropDownI) => {

    const [selectedYears, setSelectedYears] = useState<number[]>([])

    const toggleYear = (year: number) => {
        setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y != year) : [...prev, year])
    }

    return (
        <DropDown title={title}>
            <div className="flex gap-3 mt-2 flex-wrap">
                {years.map(item => (
                    <YearButton key={item} year={item} onClick={() => toggleYear(item)} isActive={selectedYears.includes(item)}/>
                ))}
            </div>
        </DropDown>
    );
}
