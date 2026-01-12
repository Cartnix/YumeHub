import { useState } from "react"
import SecondaryButtonUI from "../../../../shared/ui/Buttons/SecondaryButton"
import InputUI from "../../../../shared/ui/Input/Input"
import { useAuth } from "../../AuthorizationQuery"

interface AutorizationI {
    switchToRegistration: () => void
    onSuccess?: () => void
}

export default function Authorization({ 
    switchToRegistration,
    onSuccess 
}: AutorizationI) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn, loading, error } = useAuth()

    const handleSubmit = async () => {
        try {
            await signIn(email, password)
            if (onSuccess) {
                onSuccess()
            }
        } catch (err) {
            console.error('Sign in error:', err)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !loading) {
            e.preventDefault()
            handleSubmit()
        }
    }

    return (
        <div onKeyPress={handleKeyPress}>
            <h2 className="mb-6 text-xl font-semibold text-white text-center">
                Log In
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-1 block text-xs text-white/50">Email</label>
                    <InputUI 
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
                    <InputUI 
                        placeholder="Enter your password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
            </div>

            {error && (
                <p className="mt-2 text-xs text-red-500">{error}</p>
            )}
            
            <div className="flex items-center justify-center mt-5 w-full">
                <SecondaryButtonUI 
                    className="w-full" 
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Sign in'}
                </SecondaryButtonUI>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
                Don't have an account?{" "}
                <span className="cursor-pointer text-white hover:underline" onClick={switchToRegistration}>
                    Click here
                </span>
            </p>
        </div>
    )
}