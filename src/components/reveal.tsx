import { motion } from "framer-motion";
import React from "react";
import { cn } from "~/lib/utils";

interface RevealProps extends React.PropsWithChildren {
    width?: "fit-content" | "100%";
    className?: string;
}

const Reveal: React.FC<RevealProps> = ({
    className,
    children,
    width = "fit-content",
}) => {
    return (
        <div className={cn(className)}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visable: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visable"
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
export default Reveal;
