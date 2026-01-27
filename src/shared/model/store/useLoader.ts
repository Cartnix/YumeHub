import { create } from "zustand"

interface LoadingStore{
    isLoading: boolean
    setLoading: (loading: boolean) => void
}

let loadingTimeout:number | null = null
const MIN_LOADING_TIME = 300

export const useLoader = create<LoadingStore>((set) => ({
    isLoading: false,
    setLoading: (loading) => {
        if(loading) {
            set({isLoading: true})
        } else {
            if (loadingTimeout) clearTimeout(loadingTimeout)
            loadingTimeout = setTimeout(() => {
                set({isLoading: false})
            }, MIN_LOADING_TIME)
        }
    },
}))