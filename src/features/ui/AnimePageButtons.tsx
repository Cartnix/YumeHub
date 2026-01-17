import { PrimaryButton } from "@/shared/ui/Buttons";
import { Bookmark, Check, Eye, Plus } from "lucide-react";

export const AnimePageButtons = () => {
    return (
        <div className="flex gap-4">
            <PrimaryButton>
                <Eye></Eye>
                <span className="font-bold">Watching</span>
            </PrimaryButton>

            <PrimaryButton>
                <Bookmark></Bookmark>
                <span className="font-bold">To Watch</span>
            </PrimaryButton>

            <PrimaryButton>
                <Check></Check>
                <span className="font-bold">Watched</span>
            </PrimaryButton>

            <PrimaryButton>
                <Plus></Plus>
                <span className="font-bold">Add To Collection</span>
            </PrimaryButton>
        </div>
    )
}