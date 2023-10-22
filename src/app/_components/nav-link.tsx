"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "~/lib/utils";

interface NavLinkprops extends React.PropsWithChildren {
    href: string;
}

const NavLink: React.FC<NavLinkprops> = ({ href, children }) => {
    const segment = useSelectedLayoutSegment();

    const isHome = segment === null && href === "/";
    const active = href === `/${segment}` || isHome;

    return (
        <Link
            href={href}
            className={cn("text-muted-foreground", active ? "text-white" : "")}
        >
            {children}
        </Link>
    );
};
export default NavLink;
