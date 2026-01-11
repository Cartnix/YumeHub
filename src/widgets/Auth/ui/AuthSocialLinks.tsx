import { FaGoogle } from "react-icons/fa";
import GithubOAuth from "../../../features/auth/OAuth/GithubOAuth";

export default function AuthSocialLinks() {
    return (
        <div>
            <div className="my-6 flex items-center gap-3 text-xs text-white/40">
                <span className="h-px flex-1 bg-white/10" />
                or
                <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-4">

                <GithubOAuth/>
                <button
                    type="button"
                    className="flex justify-center items-center gap-4 w-full rounded-lg border border-white/15 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10 active:bg-white/15"
                >
                    <FaGoogle className="text-xl" />
                    <span>Continue with Google</span>
                </button>
            </div>
        </div>
    )
}