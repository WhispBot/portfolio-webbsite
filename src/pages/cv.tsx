import React from "react";
import { Inter } from "@next/font/google";
import { cn } from "~/lib/utils";
import SectionHeader from "~/components/SectionHeader";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";

const inter = Inter({
    subsets: ["latin"],
});

const CvPage = () => {
    return (
        <main className={cn(inter, "container ")}>
            <div className="flex h-screen gap-8 border-x bg-card p-4">
                <div className="h-full">
                    <div className="flex flex-col items-center gap-4 justify-self-center p-16">
                        <div className="grid h-36 w-36 place-content-center rounded-full bg-background">
                            <span className="text-6xl font-bold">ES</span>
                        </div>
                        <div>
                            <p>073 625 93 26</p>
                            <p>emilstrjobb@gmail.com</p>
                        </div>
                    </div>
                    <div className="space-y-16 text-right">
                        <div>
                            <SectionHeader side="right">
                                <h3 className="text-xl font-bold">LINKS</h3>
                            </SectionHeader>
                            <div className="flex flex-col items-end">
                                <Link
                                    href={""}
                                    className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-accent hover:text-primary"
                                >
                                    <span>Github</span>
                                    <Github className="h-6 w-6" />
                                </Link>
                                <Link
                                    href={""}
                                    className="flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-accent hover:text-primary"
                                >
                                    <span>Linkedin</span>
                                    <Linkedin className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <SectionHeader side="right">
                                <h3 className="text-right text-xl font-bold">
                                    KUNSKAPER
                                </h3>
                            </SectionHeader>
                            <div className="space-x-2">
                                <Badge variant={"secondary"}>HTML</Badge>
                                <Badge variant={"secondary"}>Css</Badge>
                                <Badge variant={"secondary"}>Javascript</Badge>
                                <Badge variant={"secondary"}>Typescript</Badge>
                                <Badge variant={"secondary"}>React</Badge>
                                <Badge variant={"secondary"}>Nexsjs</Badge>
                                <Badge variant={"secondary"}>SQL</Badge>
                                <Badge variant={"secondary"}>C#</Badge>
                            </div>
                        </div>
                        <div>
                            <SectionHeader side="right">
                                <h3 className="text-right text-xl font-bold">LANG</h3>
                            </SectionHeader>
                            <p>
                                SVENSKA <br /> ENGELSKA
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-8">
                        <h1 className="mb-2 text-9xl font-bold">
                            Emil <br /> Strömdahl
                        </h1>
                        <span className="text-3xl font-bold">Full-stack developer</span>
                    </div>
                    <div className="mb-8">
                        <SectionHeader>
                            <h3 className="text-xl font-bold">Sum</h3>
                        </SectionHeader>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aliquam mollitia earum assumenda porro voluptates, ullam
                            aliquid nostrum perspiciatis in obcaecati laudantium corporis
                            expedita omnis incidunt quaerat neque amet doloremque nihil?
                        </p>
                    </div>
                    <div>
                        <SectionHeader>
                            <h3 className="text-xl font-bold">Utbildning</h3>
                        </SectionHeader>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between">
                                    <h4 className="font-bold">
                                        Systemutvecklare - arbetsformedlingen lexicon
                                        Malmö
                                    </h4>
                                    <span className="text-muted-foreground">
                                        Sep 2021 - Feb 2022
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Ducimus, inventore.
                                </p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <h4 className="font-bold">
                                        Systemutvecklare - arbetsformedlingen lexicon
                                        Malmö
                                    </h4>
                                    <span className="text-muted-foreground">
                                        Sep 2021 - Feb 2022
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur adipisicing
                                    elit. Ducimus, inventore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default CvPage;
