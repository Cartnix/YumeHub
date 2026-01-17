import { FaGoogle } from "react-icons/fa";

interface GoogleOAuthI {
    isActive: boolean
    Submit: () => void
}

export const GoogleOAuthButton = ({isActive, Submit}: GoogleOAuthI) => {
    return (
        <button
            type="button"
            className="flex justify-center items-center gap-4 w-full rounded-lg border border-white/15 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10 active:bg-white/15"
            onClick={Submit}
            disabled={isActive}
        >
            <FaGoogle className="text-xl" />
            <span>Continue with Google</span>
        </button>
    )
}