import { Bookmark, Check, Eye } from "lucide-react";
import PrimaryButtonUI from "../../shared/ui/Buttons/PrimaryButton";

export default function AnimePageButtons() {
    return (
        <div className="flex gap-4">
            <PrimaryButtonUI>
                <Eye></Eye>
                <span className="font-bold">Watching</span>
            </PrimaryButtonUI>

            <PrimaryButtonUI>
                <Bookmark></Bookmark>
                <span className="font-bold">To Watch</span>
            </PrimaryButtonUI>

            <PrimaryButtonUI>
                <Check></Check>
                <span className="font-bold">Watched</span>
            </PrimaryButtonUI>
        </div>
    )
}