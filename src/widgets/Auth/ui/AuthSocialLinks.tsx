import { GithubOAuth } from "@/features/auth/OAuth/Github/GithubOAuth"
import { GoogleOAuth } from "@/features/auth/OAuth/Google/GoogleOAuth"

export const AuthSocialLinks = () => {
    return (
        <div>
            <div className="my-6 flex items-center gap-3 text-xs text-white/40">
                <span className="h-px flex-1 bg-white/10" />
                or
                <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-4">

                <GithubOAuth />
                <GoogleOAuth />
            </div>
        </div>
    )
}