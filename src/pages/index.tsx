import { HomeIcon, UserIcon, CodeIcon, MailIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { type MutableRefObject, useRef, type PropsWithChildren, useEffect } from "react";
import ThemeToggle from "~/components/toggleTheme";
import { Button } from "~/components/ui/button";
import { Inter } from "@next/font/google";
import { cn } from "~/lib/utils";
import ES from "../../public/LogoEs.svg";
import Image from "next/image";
import ProjectSection from "~/components/projectSection";
import HomeSection from "~/components/homeSection";
import ContactForm from "~/components/contactForm";
import AboutSection from "~/components/aboutSection";
import SectionHeader from "~/components/SectionHeader";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";

const inter = Inter({
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
                        console.log(el.current.id);
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
            <main className={cn(inter.className)}>
                <div className="relative flex scroll-smooth">
                    <div className="sticky top-0 h-screen p-4">
                        <div className="grid h-full w-20 grid-rows-[0.1fr_1fr_0.1fr] items-center rounded-md border bg-card">
                            <div className="grid place-content-center">
                                <Link
                                    href="/"
                                    className="text-2xl font-extrabold text-primary"
                                >
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
                                >
                                    <HomeIcon className="h-16 w-16" />
                                </Button>
                                <Button
                                    ref={navLinkAbout}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(aboutRef)}
                                    id="about"
                                >
                                    <UserIcon className="h-16 w-16" />
                                </Button>
                                <Button
                                    ref={navLinkPorject}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(projRef)}
                                    id="projects"
                                >
                                    <CodeIcon className="h-16 w-16" />
                                </Button>
                                <Button
                                    ref={navLinkContact}
                                    variant={"nav"}
                                    size={"icon"}
                                    onClick={() => scrollTo(contactRef)}
                                    id="contact"
                                >
                                    <MailIcon className="h-16 w-16" />
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
                                <Button
                                    size={"lg"}
                                    variant={"accent"}
                                    onClick={() => scrollTo(contactRef)}
                                >
                                    CONTACT ME
                                </Button>
                            </HomeSection>
                        </div>
                        <div
                            ref={aboutRef}
                            id="about"
                            className="h-screen scroll-m-0 p-8"
                        >
                            <div className="h-full">
                                <SectionHeader>ABOUT ME</SectionHeader>
                                <AboutSection />
                            </div>
                        </div>
                        <div
                            ref={projRef}
                            className="h-screen scroll-m-0 p-8"
                            id="projects"
                        >
                            <div className="h-full">
                                <SectionHeader>PROJECTS</SectionHeader>
                                <ProjectSection />
                            </div>
                        </div>
                        <div
                            ref={contactRef}
                            className="h-screen scroll-m-0 p-8"
                            id="contact"
                        >
                            <div className="h-full">
                                <SectionHeader>CONTACT</SectionHeader>
                                <div className="flex h-[calc(100%-2.5rem)] items-center justify-center">
                                    <Card className="w-[30rem]">
                                        <CardHeader>
                                            <CardTitle>Contact me</CardTitle>
                                            <CardDescription>
                                                Send a message if you have any questions!
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ContactForm />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
