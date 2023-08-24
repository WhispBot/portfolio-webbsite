import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

interface RevealProps extends React.PropsWithChildren {
    width?: "w-fit" | "w-full";
    className?: string;
}

const Reveal: React.FC<RevealProps> = ({
    className,
    children,
    width = "fit-content",
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            void mainControls.start("visable");
            void slideControls.start("visable");
        }
    }, [isInView]);

    return (
        <div ref={ref} className={cn(className, "relative", width)}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visable: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visable: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="absolute bottom-[4px] left-0 right-0 top-[4px] z-30 bg-primary"
            />
        </div>
    );
};
export default Reveal;
