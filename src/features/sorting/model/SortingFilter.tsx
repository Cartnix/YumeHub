import { SortDropdown } from "@/features/sorting/ui/AnimeOrderDropdown"
import { useSearchParams } from "react-router-dom"

export const Sorting = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selected = searchParams.get('order') || 'popularity';

    const handleSelect = (id: string) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('order', id);
        newParams.set('page', '1');
        setSearchParams(newParams);
    };

    return (
        <SortDropdown handleSelect={handleSelect} selected={selected}/>
    )
}