import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from "react-icons/bi";
import Reveal from "../reveal";

const HomeSection: React.FC<React.PropsWithChildren> = ({ children }) => {
    const router = useRouter();
    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 text-muted-foreground">
                <div className="flex">
                    <Link
                        href={""}
                        className="relative rounded-md p-2 transition-colors hover:bg-accent hover:text-primary"
                    >
                        <Github className=" h-8 w-8" />
                    </Link>
                    <Link
                        href={""}
                        className="relative rounded-md p-2 transition-colors hover:bg-accent hover:text-primary"
                    >
                        <Linkedin className="h-8 w-8" />
                    </Link>
                </div>
                <Button
                    size={"lg"}
                    variant={"outline"}
                    onClick={() => router.push("/cv")}
                >
                    CV
                </Button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-16">
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
                <div className="flex items-center gap-8 text-3xl text-muted-foreground">
                    <BiLogoTypescript />
                    <BiLogoJavascript />
                    <BiLogoCss3 />
                    <BiLogoHtml5 />
                    <BiLogoReact />
                    <BiLogoNodejs />
                    <BiLogoTailwindCss />
                </div>
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default HomeSection;
