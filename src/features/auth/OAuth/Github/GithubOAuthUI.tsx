import { FaGithub } from "react-icons/fa";

interface GithubAuthButtonI {
    onClick: () => void
    isActive: boolean
}

export default function GithubAuthButton({onClick, isActive}: GithubAuthButtonI) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isActive}
            className="flex justify-center items-center gap-4 w-full rounded-lg border border-white/15 bg-white/5 py-2 text-sm text-white transition hover:bg-white/10 active:bg-white/15"
        >
            <FaGithub className="text-xl" />
            <span>Continue with GitHub</span>
        </button>
    )
}