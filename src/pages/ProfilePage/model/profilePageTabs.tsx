import {
    Watching, 
    Watched,
    ToWatch,
    Collections
} from '@/shared/ui/AnimeStatus'
import type { TabsI } from "@/shared/ui/DetailMenu/ui/DetailsMenu";

export const profilePageTabs: TabsI[] = [
    { id: 'watching', label: <Watching /> },
    { id: 'to_watch', label: <ToWatch /> },
    { id: 'watched', label: <Watched /> },
    { id: 'collections', label: <Collections /> },
];