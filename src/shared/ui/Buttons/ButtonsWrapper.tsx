import PrimaryButtonUI from "./PrimaryButton";
import SecondaryButtonUI from "./SecondaryButton";

export default function ButtonsWrapper()
{
    return(
        <div className="flex gap-2">
            <PrimaryButtonUI/>
            <SecondaryButtonUI/>
        </div>
    )
}