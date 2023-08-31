import React from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import Head from "next/head";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

const ProjectsPage = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={cn(
                    MontserRat.className,
                    "grid flex-grow grid-cols-1 grid-rows-4 lg:grid-cols-[2fr_1fr] lg:grid-rows-[2fr_1fr]"
                )}
            >
                <article className="flex h-full items-center justify-center border-b bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)] bg-cover bg-center"></article>
                <article className="flex h-full flex-col justify-between gap-4 border-l p-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                            earum sapiente pariatur architecto non blanditiis mollitia
                            quasi ut reiciendis dicta distinctio consequuntur, rerum
                            laboriosam quos error, facere repellendus dolore fugit.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Tech Used</h2>
                        <ul></ul>
                    </div>
                </article>
                <article className="flex h-full items-center border-b border-t px-8">
                    <h1 className="text-6xl font-extrabold uppercase">
                        {"Web"} <br /> {"store"}
                    </h1>
                </article>
                <article className="flex h-full border-l border-t text-muted-foreground">
                    <motion.button className="flex flex-grow items-center justify-center hover:bg-accent">
                        <ArrowLeft size={96} />
                    </motion.button>
                    <motion.button className="flex flex-grow items-center justify-center hover:bg-accent">
                        <ArrowRight size={96} />
                    </motion.button>
                </article>
            </main>
        </>
    );
};
export default ProjectsPage;
