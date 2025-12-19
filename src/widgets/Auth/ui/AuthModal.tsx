import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot || !isOpen) return null;

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.body.offsetWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        const fixedElements = document.querySelectorAll<HTMLElement>('header, .fixed');
        fixedElements.forEach(el => {
            el.style.paddingRight = `${scrollBarWidth}px`;
        });

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
            fixedElements.forEach(el => {
                el.style.paddingRight = "";
            });
        };
    }, []);


    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
        >
            <form
                className="relative w-[360px] rounded-2xl border border-white/10 bg-[var(--color-dark-1)] p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white/50 hover:text-white transition text-xl font-bold"
                >
                    ×
                </button>

                <h2 className="mb-6 text-xl font-semibold text-white text-center">
                    Create an account
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="mb-1 block text-xs text-white/50">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[var(--color-border-active)]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-xs text-white/50">Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[var(--color-border-active)]"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-xs text-white/50">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[var(--color-border-active)]"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-[var(--color-btn-primary)] py-2 text-sm font-medium text-white transition hover:bg-[var(--color-btn-primary-hover)] active:bg-[var(--color-btn-primary-active)] cursor-pointer"
                >
                    Sign up
                </button>

                <p className="mt-4 text-center text-xs text-white/40">
                    Already have an account?{" "}
                    <span className="cursor-pointer text-white hover:underline">Log in</span>
                </p>

                <div className="my-6 flex items-center gap-3 text-xs text-white/40">
                    <span className="h-px flex-1 bg-white/10" />
                    or
                    <span className="h-px flex-1 bg-white/10" />
                </div>

                <div className="space-y-4">
                    <button
                        type="button"
                        className="flex justify-center items-center gap-4 w-full rounded-lg border border-white/15 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10 active:bg-white/15"
                    >
                        <FaGithub className="text-xl" />
                        <span>Continue with GitHub</span>
                    </button>

                    <button
                        type="button"
                        className="flex justify-center items-center gap-4 w-full rounded-lg border border-white/15 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10 active:bg-white/15"
                    >
                        <FaGoogle className="text-xl" />
                        <span>Continue with Google</span>
                    </button>
                </div>
            </form>
        </div>,
        modalRoot
    );
}
