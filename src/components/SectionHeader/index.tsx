import React from "react";

const SectionHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="mb-4 flex h-10 items-center gap-2 space-y-2 whitespace-nowrap">
            <div className="flex items-end">
                <span className="text-4xl font-extrabold">
                    {children}
                    {/* <span className="text-primary">.</span> */}
                </span>
            </div>
            <div className="flex h-1 w-full gap-2 rounded-full bg-black/10 dark:bg-white/10">
                <div className="h-1 w-24 rounded-full bg-primary" />
                <div className="h-1 w-4 rounded-full bg-primary" />
                <div className="h-1 w-2 rounded-full bg-primary" />
            </div>
        </div>
    );
};

export default SectionHeader;
