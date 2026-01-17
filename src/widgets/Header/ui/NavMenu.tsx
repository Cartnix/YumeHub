import { NavLink } from "react-router-dom";

export const NavMenu = () => {
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
                                `hover:!text-[var(--color-offwhite)] transition-colors duration-200 ${isActive ? "!text-[var(--color-offwhite)] font-medium border-b-2 border-[var(--color-offwhite)]" : "!text-[var(--color-gray-2)] "
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
