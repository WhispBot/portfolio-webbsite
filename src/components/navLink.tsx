"use client";

import Link, { type LinkProps } from "next/link";
import React, { type PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";

const NavLink: React.FC<LinkProps & PropsWithChildren & { className?: string }> = ({
    href,
    children,
    className,
    ...props
}) => {
    const router = useRouter();

    const active = href === router.pathname;

    return (
        <Link
            href={href}
            {...props}
            className={cn(
                className ?? "",
                "font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground",
                active && " text-primary "
            )}
        >
            {children}
            {active ? (
                <div className="h-1 w-full bg-primary" />
            ) : (
                <div className="h-1 w-full bg-transparent" />
            )}
        </Link>
    );
};
export default NavLink;
