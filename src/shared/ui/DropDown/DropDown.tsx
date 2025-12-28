import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface DropDownI{
    children: React.ReactNode;
    title: string;
}

export default function DropDown({children, title}: DropDownI) {
    const[isOpen, setOpen] = useState<boolean>(false)
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-b-[#332833] border-b pb-2" onClick={() => setOpen(prev => !prev)}>
                <h2 className="text-2xl">{title}</h2>
                {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>

            <div
                className={`overflow-y-auto transition-all duration-200 ${isOpen ? "max-h-[420px]" : "max-h-0"
                    }`}
            >
                <div className="flex gap-2 mt-2 flex-wrap">
                    {children}
                </div>
            </div>
        </div>
    )
}