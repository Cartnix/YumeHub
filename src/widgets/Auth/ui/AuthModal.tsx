import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AuthSocialLinks from "./AuthSocialLinks";
import Registration from "../../../features/auth/registration/ui/Registration";
import Authorization from "../../../features/auth/login/ui/Authorization";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: "login" | "register";
}

export default function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
    const [mode, setMode] = useState<"login" | "register">(initialMode);

    useEffect(() => {
        setMode(initialMode);
    }, [initialMode]);

    useEffect(() => {
        if (!isOpen) return;

        const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        const fixedElements = document.querySelectorAll<HTMLElement>('header, .fixed');
        fixedElements.forEach(el => el.style.paddingRight = `${scrollBarWidth}px`);

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            fixedElements.forEach(el => el.style.paddingRight = "");
        };
    }, [isOpen]);

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot || !isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-y-auto"
            onClick={onClose}
        >
            <form
                className="
                relative w-[400px] max-h-[90dvh] overflow-y-auto 
                rounded-2xl borde bg-[var(--color-dark-1)] 
                py-6 px-9
                border-[var(--white-30)]
                shadow-[0_0_15px_var(--white-10-shadow)]"
                onSubmit={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="cursor-pointer absolute top-7 right-5 text-white/60 hover:text-white transition"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>

                {mode === "login" && (
                    <Authorization switchToRegistration={() => setMode("register")} />
                )}

                {mode === "register" && (
                    <Registration switchToLogin={() => setMode("login")} />
                )}

                <AuthSocialLinks />
            </form>
        </div>,
        modalRoot
    );
}
