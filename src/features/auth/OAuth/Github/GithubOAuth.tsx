import { useState } from "react";
import { supabase } from "../../../../shared/api/supabaseClient";
import GithubAuthButton from "./GithubOAuthUI";

export default function GithubOAuth() {
    const [isLogIn, setLogIne] = useState<boolean>(false)

    const HandleGithubLogin = async() => {
        setLogIne(true)

        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
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
        <GithubAuthButton isActive={isLogIn} onClick={HandleGithubLogin}/>
    )
}