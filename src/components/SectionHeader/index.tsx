import React from "react";

const SectionHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="mb-4 h-10 space-y-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
                {children}
            </h3>
            <div className="flex h-2 w-full gap-2 rounded-full bg-black/10 dark:bg-white/20">
                <div className="h-2 w-24 rounded-full bg-black dark:bg-white" />
                <div className="h-2 w-4 rounded-full bg-black dark:bg-white" />
                <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
            </div>
        </div>
    );
};

export default SectionHeader;
