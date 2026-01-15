import ToWatch from "../../../shared/ui/AnimeStatus/ToWatch";
import Watched from "../../../shared/ui/AnimeStatus/Watched";
import Watching from "../../../shared/ui/AnimeStatus/Watching";
import PrimaryButtonUI from "../../../shared/ui/Buttons/PrimaryButton";

export default function AmimeStatusButtonsUI() {
    return (
        <div className="flex gap-5">
            <PrimaryButtonUI>
                <Watching/>
            </PrimaryButtonUI>

            <PrimaryButtonUI>
                <ToWatch/>
            </PrimaryButtonUI>

            <PrimaryButtonUI>
                <Watched/>
            </PrimaryButtonUI>
        </div>
    )
}