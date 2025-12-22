import { useState } from "react";

interface RegistrationData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface ValidationErrors {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export function useRegistration() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validate = (data: RegistrationData): boolean => {
        const errors: ValidationErrors = {};

        if (!data.username.trim()) {
            errors.username = "Username is required";
        } else if (data.username.length < 3) {
            errors.username = "Username must be at least 3 characters";
        }

        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!validateEmail(data.email)) {
            errors.email = "Invalid email format";
        }

        if (!data.password) {
            errors.password = "Password is required";
        } else if (data.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "Please confirm your password";
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const register = async (data: RegistrationData) => {
        setError(null);
        setValidationErrors({});

        if (!validate(data)) {
            return null;
        }

        setIsLoading(true);

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: data.username,
                        email: data.email,
                        password: data.password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Registration failed. Please try again.");
            }

            const result = await response.json();
            
            return result;
        } catch (e: any) {
            const errorMessage = e.message || "An unexpected error occurred";
            setError(errorMessage);
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    const clearErrors = () => {
        setError(null);
        setValidationErrors({});
    };

    return {register, isLoading, error, validationErrors, clearErrors};
}