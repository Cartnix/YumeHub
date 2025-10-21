import ButtonsWrapper from "../../../shared/ui/Buttons/ButtonsWrapper";
import { Container } from "../../../shared/ui/Container";
import InputUI from "../../../shared/ui/Input/Input";
import LogoIcon from "./Logo";
import NavMenu from "./NavMenu";

export default function HeaderApp() {
    return (
        <header className="border-b border-b-[#c5c5c5]">
            <Container>
                <div className="flex gap-6 items-center py-6">
                    <LogoIcon />
                    <NavMenu />
                    <InputUI />
                    <ButtonsWrapper />
                </div>
            </Container>
        </header>
    )
}