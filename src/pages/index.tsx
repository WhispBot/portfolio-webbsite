import { HomeIcon, UserIcon, CodeIcon, MailIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { type MutableRefObject, useRef, useEffect, useState } from "react";
import ThemeToggle from "~/components/toggleTheme";
import { Button } from "~/components/ui/button";
import { Open_Sans, Montserrat } from "@next/font/google";
import { cn } from "~/lib/utils";
import ProjectSection from "~/components/projectSection";
import HomeSection from "~/components/homeSection";
import ContactForm from "~/components/contactForm";
import AboutSection from "~/components/aboutSection";
import SectionHeader from "~/components/SectionHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { motion } from "framer-motion";
import Reveal from "~/components/reveal";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

const OpenSans = Open_Sans({
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
                <title>ES</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={cn(MontserRat.className)}>
                <div className="relative flex scroll-smooth">
                    <div className="sticky top-0 h-screen p-4">
                        <div className="grid h-full w-20 grid-rows-[0.1fr_1fr_0.1fr] items-center rounded-md border bg-card">
                            <div className="grid place-content-center">
                                <Link href="/" className="text-2xl font-extrabold ">
                                    ES
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-8 font-semibold">
                                <Button
                                    ref={navLinkHome}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(homeRef)}
                                    id="home"
                                    className="flex-col"
                                >
                                    <HomeIcon className="h-16 w-16" />
                                    <SectionUnderline section="home" current={section} />
                                </Button>
                                <Button
                                    ref={navLinkAbout}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(aboutRef)}
                                    id="about"
                                    className="flex-col"
                                >
                                    <UserIcon className="h-16 w-16" />
                                    <SectionUnderline section="about" current={section} />
                                </Button>

                                <Button
                                    ref={navLinkPorject}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(projRef)}
                                    id="projects"
                                    className="flex-col"
                                >
                                    <CodeIcon className="h-16 w-16" />
                                    <SectionUnderline
                                        section="projects"
                                        current={section}
                                    />
                                </Button>
                                <Button
                                    ref={navLinkContact}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(contactRef)}
                                    id="contact"
                                    className="flex-col"
                                >
                                    <MailIcon className="h-16 w-16" />
                                    <SectionUnderline
                                        section="contact"
                                        current={section}
                                    />
                                </Button>
                            </div>
                            <div className="flex justify-center">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div ref={homeRef} id="home" className=" h-screen scroll-m-0 p-8">
                            <HomeSection>
                                <Button size={"lg"} onClick={() => scrollTo(contactRef)}>
                                    CONTACT ME
                                </Button>
                            </HomeSection>
                        </div>
                        <div
                            ref={aboutRef}
                            id="about"
                            className="h-screen scroll-m-0 p-8"
                        >
                            <div className="container h-full">
                                <SectionHeader>ABOUT ME</SectionHeader>
                                <AboutSection />
                            </div>
                        </div>
                        <div
                            ref={projRef}
                            className="h-screen scroll-m-0 p-8"
                            id="projects"
                        >
                            <div className="container h-full">
                                <SectionHeader>PROJECTS</SectionHeader>
                                <Reveal>
                                    <ProjectSection />
                                </Reveal>
                            </div>
                        </div>
                        <div
                            ref={contactRef}
                            className="h-screen scroll-m-0 p-8"
                            id="contact"
                        >
                            <div className="container h-full">
                                <SectionHeader>CONTACT</SectionHeader>
                                <Reveal className="flex h-[calc(100%-2.5rem)] items-center justify-center">
                                    <ContactForm />
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

const SectionUnderline: React.FC<{ section: string; current: string }> = ({
    section,
    current,
}) => {
    return (
        <>
            {current === section ? (
                <motion.div
                    initial={{ width: "50%" }}
                    animate={{ width: "100%" }}
                    className="h-2 w-full rounded-md bg-primary"
                    transition={{ duration: 0.5, delay: 0 }}
                />
            ) : (
                <div className="h-2 w-full" />
            )}
        </>
    );
};
