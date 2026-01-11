import { useState } from "react";
import { supabase } from "../../../shared/api/supabaseClient";
import GithubAuthButton from "./GithubOAuthUI";

export default function GithubOAuth() {
    const [isLogined, setLogined] = useState<boolean>(false)

    const HandleGithubLogin = async() => {
        setLogined(true)

        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            }
        })

        if(error) {
            console.log("You can't enter by Github", error.message)
            setLogined(false)
        }
        console.log("You're entered by Github")
    }

    return (
        <GithubAuthButton onClick={HandleGithubLogin} isActive={isLogined}/>
    )
}