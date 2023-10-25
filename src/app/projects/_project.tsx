"use client";
import { Github, LinkIcon, MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../_components/ui/tooltip";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usePrevious from "~/hooks/usePrevious";

interface Proj {
    title: string | null;
    id: number;
    githubUrl: string | null;
    demoUrl: string | null;
    description: string | null;
    imgUrl: string | null;
    tech: string | null;
}

interface ProjectProps {
    data: Proj[];
}

const variants = {
    enter: (direction: number) => ({
        x: `${direction * 100}%`,
    }),
    center: { x: 0 },
    exit: (direction: number) => ({
        x: `${direction * -100}%`,
    }),
};

const Project: React.FC<ProjectProps> = ({ data }) => {
    const [page, setPage] = useState<number>(0);
    const [state, setState] = useState(data[0]);
    const prev = usePrevious(page);
    const direction = page > prev ? 1 : -1;

    useEffect(() => {
        setState(data[page]);
    }, [page, data]);

    return (
        <AnimatePresence initial={false} custom={direction}>
            <motion.article
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.5 }}
                key={state?.id}
                className="absolute left-0 top-0 grid h-full w-full select-none grid-cols-1 grid-rows-[0.3fr_0.5fr_1fr_0.1fr] xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]"
            >
                <div
                    className="relative flex h-full items-end  gap-2 bg-cover"
                    style={{ backgroundImage: `url(${state?.imgUrl})` }}
                >
                    <div className="flex w-full border-t bg-background/40 backdrop-blur-md">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={state?.githubUrl ?? ""}
                                        className="flex flex-grow items-center justify-center p-4 hover:bg-background"
                                    >
                                        <Github strokeWidth={1} size={40} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>Github Code</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={state?.demoUrl ?? ""}
                                        className="flex flex-grow items-center justify-center p-4 hover:bg-background"
                                    >
                                        <LinkIcon strokeWidth={1} size={40} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>Demo website</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="flex h-full flex-col items-center justify-between border-l px-8 py-32">
                    <p className="text-muted-foreground">{state?.description}</p>
                    <span className="text-2xl font-semibold">{state?.tech}</span>
                </div>
                <div className="row-start-1 flex h-full items-center justify-between overflow-hidden border-t p-8 xl:row-start-auto">
                    <h1 className="text-3xl font-extrabold uppercase xl:text-6xl">
                        {state?.title?.split(" ").map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </h1>
                    <div className="flex flex-col items-center justify-center text-3xl font-semibold uppercase xl:text-6xl">
                        <span>{page + 1}</span>
                        <div className="my-2 h-1 w-full bg-foreground" />
                        <span>{data.length}</span>
                    </div>
                </div>
                <div className="flex h-full border-l border-t">
                    <button
                        onClick={() => setPage(page - 1)}
                        className="flex flex-grow items-center justify-center hover:bg-accent/50 disabled:pointer-events-none disabled:opacity-50"
                        disabled={page === 0}
                    >
                        <motion.div
                            whileHover={{ x: -25 }}
                            whileTap={{
                                scale: 0.8,
                            }}
                            transition={{ duration: 0.2 }}
                            className="grid h-full w-full place-content-center"
                        >
                            <MoveLeft size={96} strokeWidth="1px" />
                        </motion.div>
                    </button>
                    <button
                        onClick={() => setPage(page + 1)}
                        className="flex flex-grow items-center justify-center hover:bg-accent/50 disabled:pointer-events-none disabled:opacity-50"
                        disabled={page === data.length - 1}
                    >
                        <motion.div
                            whileHover={{ x: 25 }}
                            whileTap={{
                                scale: 0.8,
                            }}
                            transition={{ duration: 0.2 }}
                            className="grid h-full w-full place-content-center"
                        >
                            <MoveRight size={96} strokeWidth="1px" />
                        </motion.div>
                    </button>
                </div>
            </motion.article>
        </AnimatePresence>
    );
};
export default Project;
