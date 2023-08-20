import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeSection: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex h-full flex-col justify-center px-14 py-24">
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
            <div className="mt-8">
                <div className="flex items-center gap-4">
                    {children}
                    <Link href={""}>
                        <Github />
                    </Link>
                    <Link href={""}>
                        <Linkedin />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
