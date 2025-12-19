import { useState } from "react";
import PrimaryButtonUI from "../../../shared/ui/Buttons/PrimaryButton";
import SecondaryButtonUI from "../../../shared/ui/Buttons/SecondaryButton";
import { Container } from "../../../shared/ui/Container";
import InputUI from "../../../shared/ui/Input/Input";
import LogoIcon from "./Logo";
import NavMenu from "./NavMenu";
import AuthModal from "../../Auth/ui/AuthModal";

export default function HeaderApp() {

    const onClose = () => {
        setOpen(false)
    }

    const [isOpen, setOpen] = useState<boolean>(false)

    return (
        <header className="border-b border-b-[var(--color-gray-1)] absolute t-0 w-full h-[91px]">
            <Container>
                <div className="flex gap-6 items-center py-6">
                    <LogoIcon />
                    <NavMenu />
                    <InputUI />
                    <div className="flex gap-3">
                        <PrimaryButtonUI onClick={() => setOpen(true)}>
                            Log In
                        </PrimaryButtonUI>
                        <SecondaryButtonUI onClick={() => setOpen(true)}>
                            Get Started
                        </SecondaryButtonUI>
                    </div>
                </div>
            </Container>

            {isOpen && (
                <AuthModal isOpen onClose={onClose} />
            )}
        </header>
    )
}