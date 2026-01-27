import { Input } from "@/shared/ui/Input"
import { NavMenu } from "./NavMenu"
import { LogoIcon } from "./Logo"

export const HeaderSkeleton = () => {
    return (
        <div className="flex gap-6 items-center py-6">
            <LogoIcon />
            
            <NavMenu />
            
            <Input placeholder="Search..." type="text" withIcon />
            
            <div className="flex gap-4 items-center ml-auto">
                <div className="w-8 h-8 bg-gray-700/50 rounded-full animate-pulse" />
                <div className="w-16 h-9 bg-gray-700/50 rounded-lg animate-pulse" />
            </div>
        </div>
    )
}