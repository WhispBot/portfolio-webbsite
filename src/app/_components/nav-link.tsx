"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

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
            className={cn(
                "whitespace-nowrap font-semibold uppercase text-muted-foreground transition-colors hover:text-primary",
                active ? "text-primary" : ""
            )}
        >
            {children}
            {active ? (
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    className="h-1 w-full bg-primary"
                />
            ) : (
                <div className="h-1 w-full bg-transparent" />
            )}
        </Link>
    );
};
export default NavLink;
