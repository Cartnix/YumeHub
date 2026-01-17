import { useState } from "react"
import { useAuth } from "../../AuthorizationQuery"
import { Input } from "@/shared/ui/Input"
import { SecondaryButton } from "@/shared/ui/Buttons"

interface RegistrationI {
    switchToLogin: () => void
    onSuccess?: () => void
}

export const Registration = ({ switchToLogin, onSuccess }: RegistrationI) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { signUp, loading, error } = useAuth()
    const [localError, setLocalError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLocalError(null)

        if (password !== confirmPassword) {
            setLocalError('Passwords do not match')
            return
        }

        if (password.length < 6) {
            setLocalError('Password must be at least 6 characters')
            return
        }

        try {
            await signUp(email, password)
            if (onSuccess) {
                onSuccess()
                console.log("You're In")
            }
        } catch (err) {
            console.error('Sign up error:', err)
        }
    }

    const displayError = localError || error

    return (
        <div>
            <h2 className="mb-6 text-xl font-semibold text-white text-center">
                Sign Up
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-1 block text-xs text-white/50">Email</label>
                    <Input
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white/50">Password</label>
                    <Input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-xs text-white/50">Confirm Password</label>
                    <Input
                        placeholder="Confirm your password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
            </div>

            {displayError && (
                <p className="mt-2 text-xs text-red-500">{displayError}</p>
            )}

            <div className="flex items-center justify-center mt-5 w-full">
                <SecondaryButton
                    className="w-full"
                    htmlType="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {loading ? 'Loading...' : 'Sign up'}
                </SecondaryButton>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
                Already have an account?{" "}
                <span className="cursor-pointer text-white hover:underline" onClick={switchToLogin}>
                    Click here
                </span>
            </p>
        </div>
    )
}