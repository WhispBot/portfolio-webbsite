import Head from "next/head";
import React from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import {
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from "react-icons/bi";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={cn(
                    MontserRat.className,
                    "grid flex-grow grid-cols-1  lg:grid-cols-[2fr_1fr] lg:grid-rows-[2fr_1fr]"
                )}
            >
                <article className="flex h-full flex-col items-center justify-center gap-16">
                    <div className="w-fit space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-5xl font-extrabold tracking-tight lg:text-8xl">
                                {"Hey, I'm Emil"}
                            </span>
                            <div className="flex h-1 gap-2 rounded-full">
                                <div className="h-1 w-24 rounded-full bg-primary" />
                                <div className="h-1 w-4 rounded-full bg-primary" />
                                <div className="h-1 w-2 rounded-full bg-primary" />
                            </div>
                        </div>
                        <div>
                            <span className="text-5xl font-thin">{"I'm a "}</span>
                            <span className="text-5xl font-extrabold text-primary">
                                {"Full-stack developer"}
                            </span>
                        </div>
                    </div>
                </article>
                <article className="flex h-full items-center border-l px-16">
                    <div className="flex flex-col gap-8 text-3xl ">
                        <div className="flex items-center gap-8">
                            <BiLogoTypescript className="text-primary" />
                            <span className="text-2xl font-semibold">Typescript</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <BiLogoJavascript className="text-primary" />
                            <span className="text-2xl font-semibold">Javascript</span>
                        </div>
                        <BiLogoCss3 />
                        <BiLogoHtml5 />
                        <BiLogoReact />
                        <BiLogoNodejs />
                        <BiLogoTailwindCss />
                    </div>
                </article>
                <article className="flex h-full items-center border-t px-16">
                    <h1 className="text-8xl font-extrabold">HOME</h1>
                </article>
                <article className="h-full border-l border-t"></article>
            </main>
        </>
    );
}
