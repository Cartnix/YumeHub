import Collections from "../../../shared/ui/AnimeStatus/Collections";
import ToWatch from "../../../shared/ui/AnimeStatus/ToWatch";
import Watched from "../../../shared/ui/AnimeStatus/Watched";
import Watching from "../../../shared/ui/AnimeStatus/Watching";
import type { TabsI } from "../../../shared/ui/DetailMenuWidget";

export const ProfilePageTabs: TabsI[] = [
    { id: 'watching', label: <Watching /> },
    { id: 'to_watch', label: <ToWatch /> },
    { id: 'watched', label: <Watched /> },
    { id: 'collections', label: <Collections /> },
];