import { useState } from "react";
import { useRegistration } from "../model/RegistrationQuery";
import InputUI from "../../../shared/ui/Input/Input";
import SecondaryButtonUI from "../../../shared/ui/Buttons/SecondaryButton";


interface RegistrationI {
    switchToAuth: () => void;
}

export default function Registration({ switchToAuth }: RegistrationI) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { register, isLoading, error, validationErrors } = useRegistration();

    const handleSubmit = async () => {
        const result = await register({ username, email, password, confirmPassword,});

        if (result) {
            console.log("Registration successful!", result);
        }
    };

    return (
        <div>
            <h2 className="mb-6 text-xl font-semibold text-white text-center">
                Create an account
            </h2>

            {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-200 text-sm">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <div>
                    <label className="mb-1 block text-xs text-white/50">
                        Username
                    </label>
                    <InputUI
                        placeholder="Enter your name"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {validationErrors.username && (
                        <span className="text-xs text-red-400 mt-1 block">
                            {validationErrors.username}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white/50">
                        Email
                    </label>
                    <InputUI
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {validationErrors.email && (
                        <span className="text-xs text-red-400 mt-1 block">
                            {validationErrors.email}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white/50">
                        Password
                    </label>
                    <InputUI
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {validationErrors.password && (
                        <span className="text-xs text-red-400 mt-1 block">
                            {validationErrors.password}
                        </span>
                    )}
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white/50">
                        Confirm password
                    </label>
                    <InputUI
                        placeholder="Enter your password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {validationErrors.confirmPassword && (
                        <span className="text-xs text-red-400 mt-1 block">
                            {validationErrors.confirmPassword}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-center mt-5 w-full">
                <SecondaryButtonUI
                    className="w-full"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? "Signing up..." : "Sign up"}
                </SecondaryButtonUI>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
                Already have an account?{" "}
                <span
                    className="cursor-pointer text-white hover:underline"
                    onClick={switchToAuth}
                >
                    Log in
                </span>
            </p>
        </div>
    );
}