import { ToWatch, Watched, Watching } from "@/shared/ui/AnimeStatus"
import { PrimaryButton } from "@/shared/ui/Buttons"

export const AmimeStatusButtonsUI = () => {
    return (
        <div className="flex gap-5">
            <PrimaryButton>
                <Watching/>
            </PrimaryButton>

            <PrimaryButton>
                <ToWatch/>
            </PrimaryButton>

            <PrimaryButton>
                <Watched/>
            </PrimaryButton>
        </div>
    )
}