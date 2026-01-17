import { Link } from "react-router-dom";
import { DefaultAvatar } from "@/shared/ui/Icons/ui/DefaultAvatar";

export const AvatarMenu = () => {

    return (
        <div>
            <Link to="/profile" className="relative cursor-pointer">
                <div>
                    <DefaultAvatar />
                </div>
            </Link>
        </div>


    );
}