import { YearButton } from "@/shared/ui/Buttons/ui/YearButton";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { years } from "../../model/yearFilterConstants";
import type { RadioDropDownI } from "../../model/types/dropDownType";



export const YearFilter = ({ title }: RadioDropDownI) => {

    return (
        <DropDown title={title}>
            <div className="flex gap-3 mt-2 flex-wrap">
                {years.map(item => (
                    <YearButton key={item} year={item} />
                ))}
            </div>
        </DropDown>
    );
}
