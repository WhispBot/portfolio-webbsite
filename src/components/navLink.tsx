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
                active && "font-semibold text-primary",
                " uppercase transition-colors hover:text-primary"
            )}
        >
            {children}
        </Link>
    );
};
export default NavLink;
