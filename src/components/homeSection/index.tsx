import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeSection: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center gap-4 text-muted-foreground">
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
            <div className="flex flex-1 flex-col justify-center gap-32">
                <div className="">
                    <div className="flex items-end">
                        <h2 className="text-7xl font-extrabold">{"Hello, I'm Emil"}</h2>
                        <svg width="30" height="30">
                            <circle cx="15" cy="15" r="10" className="fill-primary" />
                            <circle cx="12" cy="12" r="10" className="fill-accent2" />
                        </svg>
                    </div>
                    <div className="flex gap-3 whitespace-nowrap">
                        <span className="text-4xl">{"I'm a"}</span>
                        <div className="relative">
                            <h2 className="absolute left-1 top-1 text-4xl font-extrabold text-primary">
                                full-stack developer
                            </h2>
                            <h2 className="absolute left-0 top-0 text-4xl font-extrabold text-accent2">
                                full-stack developer
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default HomeSection;
