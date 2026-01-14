import { Link } from "react-router-dom";
import { DefaultAvatar } from "../../../shared/ui/Icons/DefaultAvatar";

export default function AvatarMenu() {

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