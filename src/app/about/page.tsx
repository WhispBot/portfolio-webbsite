import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Icon from "../_components/icon";
import type dynamicIconImports from "lucide-react/dynamicIconImports";
import Link from "next/link";
import Tooltip from "../_components/tooltip";

const About = () => {
    return (
        <main className="relative flex-grow xl:overflow-hidden">
            <article className="grid h-full w-full grid-cols-1 grid-rows-1 xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]">
                <div className="flex h-full items-center justify-center p-8">
                    <div className="space-y-6 lg:container xl:basis-2/3 ">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            <span className="border bg-secondary p-2 text-primary">
                                H
                            </span>
                            {`
                        ello, my name is Emil. I'm a passionet and kind person
                        love to code and play games. Love to work with other that
                        find coding interesting and like to solve problems that
                        help others. Love to learn new things i'm a very curious
                        person.
                       `}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            {`
                        I learn to code my self, and i found that when i coded and
                        something didn't work i couldn't let it go and had to
                        figure out why and to solve the problem. When i was play
                        games i sometimes wounderd how the game work under the
                        hood and how all the system interacted with each other.
                        `}
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-6"></p>
                    </div>
                </div>
                <div className="flex flex-col justify-between border-l px-8 py-16">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-semibold">Front-end</h3>
                        <ul className="flex flex-wrap items-center justify-center gap-2">
                            <ListItem>React</ListItem>
                            <span>|</span>
                            <ListItem>Vite</ListItem>
                            <span>|</span>
                            <ListItem>Tailwindcss</ListItem>
                            <span>|</span>
                            <ListItem>CSS</ListItem>
                            <span>|</span>
                            <ListItem>HTML</ListItem>
                            <span>|</span>
                            <ListItem>Next</ListItem>
                            <span>|</span>
                            <ListItem>Typescript</ListItem>
                            <span>|</span>
                            <ListItem>Javascript</ListItem>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-semibold">Back-end</h3>
                        <ul className="flex flex-wrap items-center justify-center gap-2">
                            <ListItem>Next</ListItem>
                            <span>|</span>
                            <ListItem>Nodejs</ListItem>
                            <span>|</span>
                            <ListItem>MySql</ListItem>
                            <span>|</span>
                            <ListItem>Planetscale</ListItem>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-semibold">Tools</h3>
                        <ul className="flex flex-wrap items-center justify-center gap-2">
                            <ListItem>VScode</ListItem>
                            <span>|</span>
                            <ListItem>git</ListItem>
                            <span>|</span>
                            <ListItem>github</ListItem>
                            <span>|</span>
                            <ListItem>figma</ListItem>
                            <span>|</span>
                            <ListItem>Bash</ListItem>
                        </ul>
                    </div>
                </div>
                <div className="row-start-2 flex h-full items-center p-8 xl:row-start-auto xl:border-t">
                    <div className="uppercase">
                        <span className="text-2xl font-extrabold md:text-3xl xl:text-5xl">
                            {"Passionate"}
                            <br />
                            {"Full-stack Developer"}
                            <br />
                            {"from"}
                        </span>
                        <div className="flex items-center gap-2 text-primary">
                            <span className="text-2xl font-bold md:text-3xl xl:text-5xl">
                                {"malmo, Sweden"}
                            </span>
                            <Icon name="map-pin" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-evenly gap-4 border-l border-t p-8">
                    <div className="flex items-center justify-center">
                        <Link
                            href={"/contact"}
                            className="bg-primary p-2 text-xl uppercase text-primary-foreground"
                        >
                            Get in touch
                        </Link>
                    </div>
                    <div className="flex  gap-4">
                        <Tooltip text="Message me on Linkedin">
                            <Link
                                href={"https://www.linkedin.com/in/emilstr/"}
                                target="_blank"
                                className="border p-4 text-primary"
                            >
                                <Linkedin />
                            </Link>
                        </Tooltip>
                        <Tooltip text="send email to emilstrjobb@gmail.com">
                            <Link
                                href={"mailto:emilstrjobb@gmail.com"}
                                className="border p-4 text-primary"
                            >
                                <Mail />
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default About;

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <li className="">
            <span className="text-xl">{children}</span>
        </li>
    );
};
