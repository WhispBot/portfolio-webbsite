import React, { useEffect, useState } from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import Head from "next/head";
import { Github, LinkIcon, MoveLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../public/webstore.jpeg";
import Link from "next/link";
import usePrevious from "~/hooks/usePrevious";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

interface Project {
    id: string;
    title: string[];
    description: string;
    tech: [];
    url: string;
    githubUrl?: string;
    demoUrl?: string;
}

const Projects: Project[] = [
    {
        id: "0",
        title: ["Web", "Store"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        earum sapiente pariatur architecto non blanditiis mollitia
        quasi ut reiciendis dicta distinctio consequuntur, rerum
        laboriosam quos error, facere repellendus dolore fugit.`,
        tech: [],
        url: Img.src,
        githubUrl: "https://github.com/WhispBot/WebStore",
        demoUrl: "https://web-store-psi.vercel.app/",
    },
    {
        id: "1",
        title: ["Web", "Store"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        earum sapiente pariatur architecto non blanditiis mollitia
        quasi ut reiciendis dicta distinctio consequuntur, rerum
        laboriosam quos error, facere repellendus dolore fugit.`,
        tech: [],
        url: Img.src,
        githubUrl: "https://github.com/WhispBot/WebStore",
        demoUrl: "https://web-store-psi.vercel.app/",
    },
    {
        id: "2",
        title: ["Web", "Store"],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        earum sapiente pariatur architecto non blanditiis mollitia
        quasi ut reiciendis dicta distinctio consequuntur, rerum
        laboriosam quos error, facere repellendus dolore fugit.`,
        tech: [],
        url: Img.src,
        githubUrl: "https://github.com/WhispBot/WebStore",
        demoUrl: "https://web-store-psi.vercel.app/",
    },
];

const variants = {
    enter: (direction: number) => ({
        x: `${direction * 100}%`,
    }),
    center: { x: 0 },
    exit: (direction: number) => ({
        x: `${direction * -100}%`,
    }),
};

const ProjectsPage = () => {
    const [page, setPage] = useState<number>(0);
    const [state, setState] = useState<Project | undefined>(Projects[0] ?? undefined);
    const prev = usePrevious(page);
    const direction = page > prev ? 1 : -1;

    useEffect(() => {
        setState(Projects[page]);
    }, [page]);

    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/logoNos.ico" />
            </Head>
            <main
                className={cn(MontserRat.className, "relative flex-grow overflow-hidden")}
            >
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
                            style={{
                                backgroundImage: `url(${state?.url})`,
                            }}
                        >
                            <div className="flex w-full border-t bg-card/50 backdrop-blur-md">
                                <Link
                                    href={state?.githubUrl ?? ""}
                                    className="flex flex-grow items-center justify-center gap-1 p-4 transition-colors hover:bg-accent/50"
                                    target="_blank"
                                >
                                    <Github className="stroke-muted-foreground xl:h-12 xl:w-12" />
                                </Link>
                                <Link
                                    href={state?.demoUrl ?? ""}
                                    className="flex flex-grow items-center justify-center gap-1 p-4 transition-colors hover:bg-accent/50"
                                    target="_blank"
                                >
                                    <LinkIcon className="text-muted-foreground " />
                                </Link>
                            </div>
                        </div>
                        <div className="flex h-full flex-col justify-between border-l p-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Description</h2>
                                <p>{state?.description}</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">Tech Used</h2>
                                <ul></ul>
                            </div>
                        </div>
                        <div className="row-start-1 flex h-full items-center justify-between overflow-hidden border-t p-8 xl:row-start-auto">
                            <h1 className="text-3xl font-extrabold uppercase xl:text-6xl">
                                {state?.title.map((text, index) => (
                                    <React.Fragment key={index}>
                                        {text}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h1>
                            <div className="flex flex-col items-center justify-center text-3xl font-extrabold uppercase xl:text-6xl">
                                <span>{page + 1}</span>
                                <div className="my-2 h-1 w-full bg-foreground" />
                                <span>{Projects.length}</span>
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
                                disabled={page === Projects.length - 1}
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
            </main>
        </>
    );
};
export default ProjectsPage;
