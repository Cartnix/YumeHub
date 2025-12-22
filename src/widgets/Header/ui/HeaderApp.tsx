import { useState } from "react";
import PrimaryButtonUI from "../../../shared/ui/Buttons/PrimaryButton";
import SecondaryButtonUI from "../../../shared/ui/Buttons/SecondaryButton";
import { Container } from "../../../shared/ui/Container";
import InputUI from "../../../shared/ui/Input/Input";
import LogoIcon from "./Logo";
import NavMenu from "./NavMenu";
import AuthModal from "../../Auth/ui/AuthModal";

type AuthMode = "login" | "register";

export default function HeaderApp() {
    const [isOpen, setOpen] = useState(false);
    const [mode, setMode] = useState<AuthMode>("login");

    const openLogin = () => {
        setMode("login"); 
        setOpen(true);    
    };

    const openRegister = () => {
        setMode("register");
        setOpen(true);      
    };

    const closeModal = () => setOpen(false);

    return (
        <header className="border-b border-b-[var(--color-gray-1)] absolute top-0 w-full h-[91px]">
            <Container>
                <div className="flex gap-6 items-center py-6">
                    <LogoIcon />
                    <NavMenu />
                    <InputUI placeholder="Search..." type="text" withIcon />
                    <div className="flex gap-3">
                        <PrimaryButtonUI onClick={openLogin}>Log In</PrimaryButtonUI>
                        <SecondaryButtonUI onClick={openRegister}>Get Started</SecondaryButtonUI>
                    </div>
                </div>
            </Container>

            {isOpen && <AuthModal isOpen={isOpen} onClose={closeModal} initialMode={mode} />}
        </header>
    );
}
