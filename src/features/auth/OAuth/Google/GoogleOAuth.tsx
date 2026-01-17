import { useState } from "react";
import { supabase } from "@/shared/api/supabaseClient";
import { GoogleOAuthButton } from "./GoogleOAuthUI";

export const GoogleOAuth = () => {
    const [isLogIn, setLogIne] = useState<boolean>(false)

    const HandleGoogleLogin = async() => {
        setLogIne(true)

        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            queryParams: {
                prompt: 'consent',
                access_type: 'offline'
            }
            }
        })

        if (error) {
            console.log("You can't enter by Google", error.message)
            setLogIne(false)
        }
    }

    return (
        <GoogleOAuthButton isActive={isLogIn} Submit={HandleGoogleLogin}/>
    )
}