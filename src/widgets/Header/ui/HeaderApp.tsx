import { useEffect, useState } from "react";
import { Container } from "@/shared/ui/Container";
import { supabase } from "@/shared/api/supabaseClient";
import type { User } from "@supabase/supabase-js";
import { AvatarMenu } from "./AvatarMenu";
import { LogoIcon } from "./Logo";
import { NavMenu } from "./NavMenu";
import { PrimaryButton, SecondaryButton } from "@/shared/ui/Buttons";
import { Input } from "@/shared/ui/Input";
import { useAuthStore } from "@/shared/model/store/useAuthStore";
import { useLoader } from "@/shared/model/store/useLoader";
import { HeaderSkeleton } from "./HeaderSkeletone";

export const HeaderApp = () => {
    const openAuth = useAuthStore((state) => state.open);
    const closeAuth = useAuthStore((state) => state.close);

    const [user, setUser] = useState<User | null>(null);
    const loading = useLoader(state => state.isLoading)
    const setLoading = useLoader(state => state.setLoading)

    useEffect(() => {
        const getSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                setUser(session?.user ?? null);
            } catch (error) {
                console.error("💥 Ошибка сессии", error);
            } finally {
                setLoading(false);
            }
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth event", event)
            setUser(session?.user ?? null);

            if (event == "SIGNED_IN" || event == "TOKEN_REFRESHED") {
                closeAuth()
            }
        });

        return () => subscription.unsubscribe();
    }, [closeAuth]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    return (
        <header className="z-50 border-b border-b-[var(--color-gray-1)] absolute top-0 w-full h-[91px]">
            <Container>
                {loading ? (
                    <HeaderSkeleton />
                ) : (
                    <div className="flex gap-6 items-center py-6">
                        <LogoIcon />
                        <NavMenu />
                        <Input placeholder="Search..." type="text" withIcon />

                        {!user ? (
                            <div className="flex gap-3 ml-auto">
                                <PrimaryButton onClick={() => openAuth("login")}>
                                    Log In
                                </PrimaryButton>
                                <SecondaryButton onClick={() => openAuth("register")}>
                                    Get Started
                                </SecondaryButton>
                            </div>
                        ) : (
                            <div className="flex gap-4 items-center ml-auto">
                                <AvatarMenu />
                                <PrimaryButton onClick={handleLogout}>
                                    Quit
                                </PrimaryButton>
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </header>
    );
}