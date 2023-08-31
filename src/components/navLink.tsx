"use client";

import Link, { type LinkProps } from "next/link";
import React, { type PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";

const NavLink: React.FC<LinkProps & PropsWithChildren> = ({
    href,
    children,
    ...props
}) => {
    const router = useRouter();

    const active = href === router.pathname;

    return (
        <Link
            href={href}
            {...props}
            className={cn(
                "relative font-semibold uppercase text-muted-foreground transition-colors hover:text-foreground",
                active && " text-primary underline"
            )}
        >
            {children}
            {active && (
                <div className="absolute left-0 h-1 w-16 rounded-full bg-primary" />
            )}
        </Link>
    );
};
export default NavLink;
