import Head from "next/head";
import { cn } from "~/lib/utils";
import { Montserrat } from "@next/font/google";
import { MapPin } from "lucide-react";

import {
    TbBrandVite,
    TbBrandReact,
    TbBrandTailwind,
    TbBrandNextjs,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandMysql,
    TbBrandVscode,
    TbBrandGit,
    TbBrandGithub,
    TbBrandFigma,
    TbTerminal,
    TbBrandTypescript,
    TbBrandJavascript,
} from "react-icons/tb";
import { type IconType } from "react-icons";
import { IoLogoNodejs } from "react-icons/io";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

const MontserRat = Montserrat({
    subsets: ["latin"],
});

const AboutPage = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <main
                className={cn(
                    MontserRat.className,
                    "relative flex-grow xl:overflow-hidden"
                )}
            >
                <article className="grid h-full w-full grid-cols-1 grid-rows-1 xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]">
                    <div className="flex h-full items-center justify-center px-8">
                        <div className="space-y-6 lg:container xl:basis-2/3 ">
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                <span className="bg-secondary p-2">H</span>
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
                            <div className="flex items-center gap-4">
                                <span className="text-primary">Have any question?</span>
                                <Button
                                    onClick={() => router.push("/contact")}
                                    className="uppercase"
                                >
                                    Get in touch
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full flex-col justify-evenly gap-4 p-8 sm:flex-row xl:border-l ">
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="text-2xl font-semibold">Front-end</h3>
                            <ul className="flex h-full flex-col items-center gap-2 xl:items-start">
                                <ListItem icon={TbBrandReact} text="React" />
                                <ListItem icon={TbBrandVite} text="Vite" />
                                <ListItem icon={TbBrandTailwind} text="Tailwindcss" />
                                <ListItem icon={TbBrandCss3} text="CSS" />
                                <ListItem icon={TbBrandHtml5} text="HTML" />
                                <ListItem icon={TbBrandNextjs} text="Next" />
                                <ListItem icon={TbBrandTypescript} text="Typescript" />
                                <ListItem icon={TbBrandJavascript} text="Javascript" />
                            </ul>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="text-2xl font-semibold">Back-end</h3>
                            <ul className="flex h-full flex-col items-center gap-2 xl:items-start">
                                <ListItem icon={TbBrandNextjs} text="Next" />
                                <ListItem icon={IoLogoNodejs} text="Nodejs" />
                                <ListItem icon={TbBrandMysql} text="MySql" />
                            </ul>
                        </div>
                        <div className="flex flex-col items-center gap-4 xl:hidden">
                            <h3 className="text-2xl font-semibold ">Tools</h3>
                            <ul className="flex flex-col items-center gap-2 ">
                                <ListItem icon={TbBrandVscode} text="Vs Code" />
                                <ListItem icon={TbBrandGit} text="Git" />
                                <ListItem icon={TbBrandGithub} text="Github" />
                                <ListItem icon={TbBrandFigma} text="Figma" />
                                <ListItem icon={TbTerminal} text="Bash" />
                            </ul>
                        </div>
                    </div>
                    <div className="row-start-1 flex h-full items-center p-8 xl:row-start-auto xl:border-t">
                        <div className="uppercase">
                            <span className="text-2xl font-extrabold md:text-3xl xl:text-5xl">
                                {"Passionate"}
                                <br />
                                {"Full-stack Developer"}
                                <br />
                                {"Based in"}
                            </span>
                            <div className="flex items-center gap-2 text-primary">
                                <span className="text-2xl font-bold md:text-3xl xl:text-5xl">
                                    {"malmo, Sweden"}
                                </span>
                                <MapPin />
                            </div>
                        </div>
                    </div>
                    <div className="hidden h-full p-8 xl:flex xl:border-l xl:border-t">
                        <div className="h-full space-y-4">
                            <h3 className="text-2xl font-semibold">Tools</h3>
                            <ul className="flex flex-wrap gap-2">
                                <ListItem icon={TbBrandVscode} text="Vs Code" />
                                <ListItem icon={TbBrandGit} text="Git" />
                                <ListItem icon={TbBrandGithub} text="Github" />
                                <ListItem icon={TbBrandFigma} text="Figma" />
                                <ListItem icon={TbTerminal} text="Bash" />
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
};
export default AboutPage;

const ListItem: React.FC<{ icon: IconType; text: string }> = ({ icon: Icon, text }) => {
    return (
        <li className="flex items-center gap-2 text-lg">
            <Icon className="text-3xl text-primary xl:text-4xl" strokeWidth={1} />
            <span className="text-base">{text}</span>
        </li>
    );
};
