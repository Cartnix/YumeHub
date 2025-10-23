import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { YEARS } from "../model/YearFilterConstants";
import YearButton from "../../../shared/ui/Buttons/YearButton";
import type { DropDownI } from "../types/DropDownType";



export function DropDown({ title }: DropDownI) {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-2 max-w-1/6">
            <div className="flex items-center justify-between border-b-amber-50 border-b pb-2" onClick={() => setOpen(prev => !prev)}>
                <h2 className="text-2xl">{title}</h2>
                {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronUp className="w-6 h-6" />}
            </div>

            <div
                className={`overflow-y-scroll transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0"
                    }`}
            >
                <div className="flex gap-2 mt-2 flex-wrap">
                    {YEARS.map(item => (
                        <YearButton year={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
