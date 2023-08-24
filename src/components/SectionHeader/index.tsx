import React from "react";
import { cn } from "~/lib/utils";

const SectionHeader: React.FC<React.PropsWithChildren & { side?: "right" | "left" }> = ({
    children,
    side = "left",
}) => {
    return (
        <div className="mb-4 h-10 space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                {children}
            </h3>
            <div
                className={cn(
                    "flex h-1 w-full gap-2 rounded-full bg-black/10 dark:bg-white/20",
                    side === "right" && "justify-end"
                )}
            >
                {side === "left" && (
                    <>
                        <div className="h-1 w-24 rounded-full bg-black dark:bg-white" />
                        <div className="h-1 w-4 rounded-full bg-black dark:bg-white" />
                        <div className="h-1 w-2 rounded-full bg-black dark:bg-white" />
                    </>
                )}
                {side === "right" && (
                    <>
                        <div className="h-1 w-2 rounded-full bg-black dark:bg-white" />
                        <div className="h-1 w-4 rounded-full bg-black dark:bg-white" />
                        <div className="h-1 w-24 rounded-full bg-black dark:bg-white" />
                    </>
                )}
            </div>
        </div>
    );
};

export default SectionHeader;
