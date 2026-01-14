import { useNavigate } from "react-router-dom";
import { DefaultAvatar } from "../../../shared/ui/Icons/DefaultAvatar";

export default function AvatarMenu() {
    const Navigate = useNavigate()

    const handleClick = () => {
        Navigate('/profile')
    }
    return (
        <div className="relative cursor-pointer" onClick={handleClick}>
            <div>
                <DefaultAvatar />
            </div>
        </div>
    );
}