import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { CheckBox } from "@/shared/ui/Checkbox";
import { useSearchParams } from "react-router-dom";

interface FiltersProps {
    title: string,
    paramName: string,
    options: { label: string, value: string }[],
}

export const MultiSelectFilter = ({ title, paramName, options }: FiltersProps) => {

    const [searchParams, setSearchParams] = useSearchParams()

    const selectedValues = searchParams.get(paramName)?.split(',') || []

    const toggleValue = (value: string) => {
        const newValue = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value]

        if (newValue.length > 0) {
            searchParams.set(paramName, newValue.join(','))
        } else {
            searchParams.delete(paramName)
        }

        setSearchParams(searchParams)
    }

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {options.map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 text-xl">
                        <CheckBox
                            checked={selectedValues.includes(opt.value)}
                            onChange={() => toggleValue(opt.value)}
                        />
                        <span>{opt.label}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}