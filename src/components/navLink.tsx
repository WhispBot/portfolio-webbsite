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
    // const segment = useSelectedLayoutSegment();
    const router = useRouter();

    const active = href === `/${router.basePath}`;

    return (
        <Link
            href={href}
            {...props}
            className={cn(active && "underline", "rounded-md bg-muted px-4 py-2")}
        >
            {children}
        </Link>
    );
};
export default NavLink;
