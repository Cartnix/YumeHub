import SecondaryButtonUI from "../../../shared/ui/Buttons/SecondaryButton";
import InputUI from "../../../shared/ui/Input/Input";

interface AutorizationI {
    switchToRegistration: () => void
}

export default function Authorization({ switchToRegistration }: AutorizationI) {
    return (
        <div>
            <h2 className="mb-6 text-xl font-semibold text-white text-center">
                Login in
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-1 block text-xs text-white/50">Email</label>
                    <InputUI placeholder="Enter your email" type="email" />
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white/50">Password</label>
                    <InputUI placeholder="Enter your password" type="password" />
                </div>
            </div>
            
            <div className="flex items-center justify-center mt-5 w-full">
                <SecondaryButtonUI className="w-full">
                    Sign up
                </SecondaryButtonUI>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
                Don't have an account?{" "}
                <span className="cursor-pointer text-white hover:underline" onClick={switchToRegistration}>Click here</span>
            </p>
        </div>
    )
}