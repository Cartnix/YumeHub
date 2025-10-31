interface IconsProps {
    children: React.ReactNode,
    href: string,
}
export default function LinksContainer({ children, href }: IconsProps) {
    return (
        <a href={href}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-[var(--color-offwhite)] h-[50px] w-[50px] rounded-xl grid place-items-center text-black hover:scale-105 transition cursor-pointer">
            {children}
        </a>
    )
}