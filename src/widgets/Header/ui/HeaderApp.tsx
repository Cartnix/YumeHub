import { useEffect, useState } from "react";
import PrimaryButtonUI from "../../../shared/ui/Buttons/PrimaryButton";
import SecondaryButtonUI from "../../../shared/ui/Buttons/SecondaryButton";
import { Container } from "../../../shared/ui/Container";
import InputUI from "../../../shared/ui/Input/Input";
import LogoIcon from "./Logo";
import NavMenu from "./NavMenu";
import AuthModal from "../../Auth/ui/AuthModal";
import { supabase } from "../../../shared/api/supabaseClient";
import type { User } from "@supabase/supabase-js";

type AuthMode = "login" | "register";

export default function HeaderApp() {
    const [isOpen, setOpen] = useState(false);
    const [mode, setMode] = useState<AuthMode>("login");
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log('🔍 Проверка сессии при загрузке Header');
        
        const getSession = async () => {
            try {
                const { data: { session }, error } = await supabase.auth.getSession();
                
                console.log('📦 Session data:', session);
                console.log('❌ Session error:', error);

                if (error || !session) {
                    console.log('⚠️ Нет активной сессии');
                    setUser(null);
                    setLoading(false);
                    return;
                }

                const { data: userData, error: userError } = await supabase.auth.getUser();
                
                console.log('👤 User data:', userData);
                console.log('❌ User error:', userError);
                
                if (userError || !userData.user) {
                    console.log('⚠️ Ошибка получения пользователя, выполняем signOut');
                    await supabase.auth.signOut();
                    setUser(null);
                } else {
                    console.log('✅ Пользователь найден:', userData.user.email);
                    setUser(userData.user);
                }
            } catch (error) {
                console.error("💥 Ошибка сессии", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log('🔔 Auth state changed:', event);
                console.log('📦 New session:', session);
                
                if (event === 'SIGNED_OUT' || !session) {
                    console.log('👋 Пользователь вышел');
                    setUser(null);
                } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                    console.log('👤 Пользователь вошёл:', session.user.email);
                    setUser(session.user);
                    setOpen(false);
                }
            }
        );

        return () => {
            console.log('🧹 Отписка от auth changes');
            subscription.unsubscribe();
        };
    }, []);

    const openLogin = () => {
        console.log('🔓 Открытие окна входа');
        setMode("login");
        setOpen(true);
    };

    const openRegister = () => {
        console.log('📝 Открытие окна регистрации');
        setMode("register");
        setOpen(true);
    };

    const closeModal = () => {
        console.log('❌ Закрытие модального окна');
        setOpen(false);
    };

    const handleLogout = async () => {
        console.log('👋 Начало выхода из системы');
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('❌ Ошибка выхода:', error);
        } else {
            console.log('✅ Успешный выход');
        }
    };

    if (loading) {
        return (
            <header className="border-b border-b-[var(--color-gray-1)] absolute top-0 w-full h-[91px]">
                <Container>
                    <div className="flex gap-6 items-center py-6 justify-center">
                        <span className="text-gray-500">Загрузка...</span>
                    </div>
                </Container>
            </header>
        );
    }

    console.log('🎨 Рендер Header, user:', user?.email || 'не авторизован');

    return (
        <header className="border-b border-b-[var(--color-gray-1)] absolute top-0 w-full h-[91px]">
            <Container>
                <div className="flex gap-6 items-center py-6">
                    <LogoIcon />
                    <NavMenu />
                    <InputUI placeholder="Search..." type="text" withIcon />
                    {!user ? (
                        <div className="flex gap-3 ml-auto">
                            <PrimaryButtonUI onClick={openLogin}>Log In</PrimaryButtonUI>
                            <SecondaryButtonUI onClick={openRegister}>Get Started</SecondaryButtonUI>
                        </div>
                    ) : (
                        <div className="flex gap-4 items-center ml-auto">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                                {user.email?.charAt(0).toUpperCase()}
                            </div>
                            
                            <span className="text-sm font-medium">
                                {user.email}
                            </span>
                            
                            <button 
                                onClick={handleLogout}
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded hover:bg-gray-100"
                            >
                                Выйти
                            </button>
                        </div>
                    )}
                </div>
            </Container>

            {isOpen && <AuthModal isOpen={isOpen} onClose={closeModal} initialMode={mode} />}
        </header>
    );
}