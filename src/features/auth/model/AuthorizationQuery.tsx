import { useState } from "react";

export function useSendData() {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const send = async (payload: any) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!res.ok) throw new Error("Send failed");

            return await res.json();
        } catch (e: any) {
            setError(e);
            throw e;
        } finally {
            setLoading(false);
        }
    };

    return { send, isLoading, error };
}
