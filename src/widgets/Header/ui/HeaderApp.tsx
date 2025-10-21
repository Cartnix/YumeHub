import ButtonsWrapper from "../../../shared/ui/Buttons/ButtonsWrapper";
import InputUI from "../../../shared/ui/Input/Input";
import LogoIcon from "./Logo";
import NavMenu from "./NavMenu";

export default function HeaderApp() {
    return (
        <header className="flex gap-6 items-center p-4 border-b-1 border-b-[#c5c5c5]">
            <LogoIcon/>
            <NavMenu />
            <InputUI />
            <ButtonsWrapper />
        </header>
    )
}