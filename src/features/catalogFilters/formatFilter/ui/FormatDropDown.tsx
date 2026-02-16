import type { RadioDropDownI } from "../../model/types/dropDownType";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { formats } from "../../model/formatFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";
import { useSearchParams } from "react-router-dom";

export const FormatFilter = ({ title }: RadioDropDownI) => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const selectedFormats = searchParams.get('kind')?.split(',') || []

    const toggleFormat = (value: string) => {
        const newFormats = selectedFormats.includes(value)
            ? selectedFormats.filter(f => f !== value)
            : [...selectedFormats, value]
        
        if (newFormats.length > 0) {
            searchParams.set('kind', newFormats.join(','))
        } else {
            searchParams.delete('kind')
        }
        setSearchParams(searchParams)
    }

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {formats.map(format => (
                    <label key={format.value} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox 
                            checked={selectedFormats.includes(format.value)} 
                            onChange={() => toggleFormat(format.value)}
                        />
                        <span className="text-[var(--color-gray-1)] text-xl">
                            {format.label}
                        </span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}