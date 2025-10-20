import { NavLink } from "react-router-dom";

export default function NavMenu() {
    const links = [
        { to: "/", label: "Home" },
        { to: "/catalog", label: "Catalog" },
        { to: "/news", label: "News" },
        { to: "/collections", label: "Collections" },
    ];

    return (
        <nav>
            <ul className="flex gap-5">
                {links.map(link => (
                    <li key={link.to}>
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                `hover:!text-[#f2f2f2] transition-colors duration-200 ${isActive ? "!text-[#f2f2f2] font-medium" : "!text-[#afa2a2]"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
