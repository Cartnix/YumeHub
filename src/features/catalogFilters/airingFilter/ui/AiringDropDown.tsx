import type { RadioDropDownI } from "../../model/types/dropDownType";
import { DropDown } from "@/shared/ui/DropDown/ui/DropDown";
import { airingStatuses } from "../../model/airingFilterConstants";
import { CheckBox } from "@/shared/ui/Checkbox";
import { useSearchParams } from "react-router-dom";

export const AiringFilter = ({ title }: RadioDropDownI) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selected = searchParams.get('airing')?.split(',').filter(Boolean) || [];

    const toggleAiring = (airing: string) => {
        setSearchParams(prev => {
            const current = prev.get('airing')?.split(',').filter(Boolean) || [];
            const newSelected = current.includes(airing)
                ? current.filter(s => s !== airing)
                : [...current, airing];
            
            if (newSelected.length > 0) {
                prev.set('airing', newSelected.join(','));
            } else {
                prev.delete('airing');
            }
            return prev;
        });
    };

    return (
        <DropDown title={title}>
            <div className="flex flex-col gap-2 mt-2">
                {airingStatuses.map(airing => (
                    <label key={airing} className="flex items-center gap-2 cursor-pointer">
                        <CheckBox 
                            checked={selected.includes(airing)} 
                            onChange={() => toggleAiring(airing)} 
                        />
                        <span className="text-[var(--color-gray-1)] text-xl">{airing}</span>
                    </label>
                ))}
            </div>
        </DropDown>
    );
}