import type { RadioDropDownI } from "../../model/types/dropDownType";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { CheckBox } from "@/shared/ui/Checkbox";
import { useSearchParams } from "react-router-dom";
import { airingStatuses } from "../../model/airingFilterConstants";

export const AiringFilter = ({ title }: RadioDropDownI) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedAiring = searchParams.get('airing')?.split(',') || [] 

    const toggleAiring = (airing: string) => {
        const newAiring = selectedAiring.includes(airing)
            ? selectedAiring.filter(a => a !== airing)
            : [...selectedAiring, airing]

        if (newAiring.length > 0) {
            searchParams.set('airing', newAiring.join(',')) 
        } else {
            searchParams.delete('airing')
        }

        setSearchParams(searchParams)
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {airingStatuses.map(airing => (
                    <label key={airing} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox
                            checked={selectedAiring.includes(airing)}
                            onChange={() => toggleAiring(airing)} />
                        <span className="text-[var(--color-gray-1)] text-xl">{airing}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}