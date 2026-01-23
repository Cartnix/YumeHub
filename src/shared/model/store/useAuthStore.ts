import { create } from 'zustand';

interface AuthState {
    isOpen: boolean;
    mode: "login" | "register";
    open: (mode?: "login" | "register") => void;
    close: () => void;
    setMode: (mode: "login" | "register") => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isOpen: false,
    mode: "login",
    open: (mode = "login") => set({ isOpen: true, mode }),
    close: () => set({ isOpen: false }),
    setMode: (mode) => set({ mode }),
}));