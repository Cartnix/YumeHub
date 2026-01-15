import { Check } from "lucide-react";

export default function Watched() {
    return (
        <div className="flex gap-2">
            <Check></Check>
            <span className="font-bold">Watched</span>
        </div>
    )
}