import { DefaultAvatar } from "../../../shared/ui/Icons/DefaultAvatar";

export default function UserInfo() {
    return (
        <div className="flex items-center">
            <div>
                <DefaultAvatar size={120} />
            </div>
            <div className="ml-10">
                <h2 className="text-2xl font-semibold">Name</h2>
                <div className="flex gap-5">
                    <span className="text-[var(--color-gray-2)]">number</span>
                    <span className="text-[var(--color-gray-2)]">number</span>
                </div>
            </div>
        </div>
    )
}