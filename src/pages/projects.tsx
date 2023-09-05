import React, { useState } from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import Head from "next/head";
import { Github, LinkIcon, MoveLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../../public/webstore.jpeg";
import Link from "next/link";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

interface Project {
    id: string;
    title: string;
    description: string;
    tech: [];
    url: string;
    githubUrl?: string;
    demoUrl?: string;
}

const Projects: Project[] = [
    {
        id: "1",
        title: "Web Store",
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
        title: "amet consectetur adipisicing",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        earum sapiente pariatur architecto non blanditiis mollitiaquasi reiciendis dicta distinctio consequuntur, rerum
        laboriosam quos error, facere repellendus dolore fugit.reiciendis dicta distinctio consequuntur, rerum
        laboriosam quos error, facere repellendus dolore fugit.`,
        tech: [],
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    },
];

const ProjectsPage = () => {
    const [page, setPage] = useState<number>(0);
    const [dir, setDir] = useState("-100");

    const handleRight = () => {
        if (page !== Projects.length - 1) {
            setPage(page + 1);
            setDir("100");
        }
    };

    const handleLeft = () => {
        if (page > 0) {
            setPage(page - 1);
            setDir("-100");
        }
    };

    // useEffect(() => {
    //     void mainControls.start("visable");
    // }, [state]);

    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main
                className={cn(MontserRat.className, "relative flex-grow overflow-hidden")}
            >
                <AnimatePresence initial={false}>
                    {Projects.map((project, index) => {
                        if (index === page) return;

                        return (
                            <motion.article
                                variants={{
                                    hidden: { opacity: 1, x: `${dir}%`, scale: 1 },
                                    visable: { opacity: 1, x: 0, scale: 1 },
                                    exit: { opacity: 1, x: `${dir}%`, scale: 1 },
                                }}
                                initial="hidden"
                                animate="visable"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                key={project.id}
                                className="absolute left-0 top-0 grid h-full w-full grid-cols-[2fr_1fr] grid-rows-[2fr_1fr]"
                            >
                                <div
                                    className="relative flex h-full items-end  gap-2 bg-cover"
                                    style={{ backgroundImage: `url(${project?.url})` }}
                                >
                                    <div className="flex w-full border-t bg-card/50 backdrop-blur-md">
                                        <Link
                                            href={project.githubUrl ?? ""}
                                            className="flex flex-grow items-center justify-center gap-1 p-4 transition-colors hover:bg-accent/50"
                                            target="_blank"
                                        >
                                            <Github
                                                size={48}
                                                className="stroke-muted-foreground"
                                            />
                                        </Link>
                                        <Link
                                            href={project.demoUrl ?? ""}
                                            className="flex flex-grow items-center justify-center gap-1 p-4 transition-colors hover:bg-accent/50"
                                            target="_blank"
                                        >
                                            <LinkIcon
                                                size={48}
                                                className="text-muted-foreground "
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex h-full flex-col justify-between border-l p-8">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-semibold">
                                            Description
                                        </h2>
                                        <p>{project.description}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold">
                                            Tech Used
                                        </h2>
                                        <ul></ul>
                                    </div>
                                </div>
                                <div className="flex h-full items-center overflow-hidden border-t p-8">
                                    <motion.h1
                                        variants={{
                                            hidden: { opacity: 1, y: -100 },
                                            visable: { opacity: 1, y: 0 },
                                        }}
                                        initial="visable"
                                        // animate={mainControls}
                                        transition={{ duration: 0.5 }}
                                        className="text-6xl font-extrabold uppercase"
                                    >
                                        {project?.title.split(" ").map((text, index) => (
                                            <React.Fragment key={index}>
                                                {text}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </motion.h1>
                                </div>
                                <div className="flex h-full border-l border-t">
                                    <button
                                        onClick={() => handleLeft()}
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
                                        onClick={() => handleRight()}
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
                        );
                    })}
                </AnimatePresence>
            </main>
        </>
    );
};
export default ProjectsPage;
