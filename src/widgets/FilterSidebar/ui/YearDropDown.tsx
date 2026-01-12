import { YEARS } from "../model/YearFilterConstants";
import YearButton from "../../../shared/ui/Buttons/YearButton";
import type { RadioDropDownI } from "../types/DropDownType";
import DropDown from "../../../shared/ui/DropDown/DropDown";



export function YearDropDown({ title }: RadioDropDownI) {

    return (
        <DropDown title={title}>
            <div className="flex gap-3 mt-2 flex-wrap">
                {YEARS.map(item => (
                    <YearButton key={item} year={item} />
                ))}
            </div>
        </DropDown>
    );
}
