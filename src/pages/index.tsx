import Head from "next/head";
import { type MutableRefObject, useRef, useEffect, useState } from "react";
import { Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import Reveal from "~/components/reveal";
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
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const projRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const els = [homeRef, aboutRef, projRef, contactRef];

    const navLinkHome = useRef<HTMLButtonElement>(null);
    const navLinkAbout = useRef<HTMLButtonElement>(null);
    const navLinkPorject = useRef<HTMLButtonElement>(null);
    const navLinkContact = useRef<HTMLButtonElement>(null);

    const [section, setSection] = useState("home");

    const navEls = [navLinkHome, navLinkAbout, navLinkPorject, navLinkContact];

    const scrollTo = (elementRef: MutableRefObject<HTMLDivElement | null>) => {
        elementRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const checkScrollPosition = () => {
            let currentSection = "home";

            els.forEach((el) => {
                if (el.current !== null) {
                    if (
                        window.scrollY >=
                        el.current.offsetTop - el.current.clientHeight / 2
                    ) {
                        currentSection = el.current.id;
                        setSection(el.current.id);
                    }
                }
            });

            navEls.forEach((nav) => {
                if (nav.current !== null) {
                    if (nav.current.id.includes(currentSection)) {
                        document
                            .querySelector(".text-primary")
                            ?.classList.remove("text-primary");
                        nav.current.classList.add("text-primary");
                    }
                }
            });
        };

        navLinkHome.current?.classList.add("text-primary");

        window.addEventListener("scroll", checkScrollPosition);

        return () => {
            window.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

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
                        <Reveal>
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
                        </Reveal>
                        <Reveal>
                            <span className="text-5xl font-thin">{"I'm a "}</span>
                            <span className="text-5xl font-extrabold text-primary">
                                {"Full-stack developer"}
                            </span>
                        </Reveal>
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
