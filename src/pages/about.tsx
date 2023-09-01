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

const MontserRat = Montserrat({
    subsets: ["latin"],
});

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={cn(
                    MontserRat.className,
                    "grid flex-grow grid-cols-1 grid-rows-[0.3fr_0.5fr_0.5fr] xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]"
                )}
            >
                <article className="flex h-full flex-col items-center justify-center border-b p-8 xl:border-none">
                    <div className="space-y-6 lg:container">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            <span className="bg-secondary p-2">L</span>
                            orem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                            ut repudiandae quae delectus, totam, expedita soluta quidem
                            inventore harum architecto fugit commodi fugiat ducimus
                            repellat suscipit excepturi doloremque sed error corporis
                            quibusdam dolorem! Quisquam, voluptates quam voluptatibus
                            quaerat ipsum ad.
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore accusamus labore facilis quaerat facere doloribus
                            repellendus beatae ipsam asperiores inventore, eum ullam? Enim
                            hic, laborum nobis eos aliquid totam quibusdam.
                        </p>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore accusamus labore facilis quaerat facere doloribus
                            repellendus beatae ipsam asperiores inventore, eum ullam? Enim
                            hic, laborum nobis eos aliquid totam quibusdam.
                        </p>
                    </div>
                </article>
                <article className="flex h-full flex-col gap-4 border-l p-8 xl:flex-row">
                    <div className="flex-grow space-y-4 ">
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
                    <div className="flex-grow space-y-4">
                        <h3 className="text-2xl font-semibold">Back-end</h3>
                        <ul className="flex h-full flex-col items-center gap-2 xl:items-start">
                            <ListItem icon={TbBrandNextjs} text="Next" />
                            <ListItem icon={IoLogoNodejs} text="Nodejs" />
                            <ListItem icon={TbBrandMysql} text="MySql" />
                        </ul>
                    </div>
                    <div className="h-full space-y-4 lg:hidden">
                        <h3 className="text-2xl font-semibold ">Tools</h3>
                        <ul className="flex flex-col items-center gap-2 ">
                            <ListItem icon={TbBrandVscode} text="Vs Code" />
                            <ListItem icon={TbBrandGit} text="Git" />
                            <ListItem icon={TbBrandGithub} text="Github" />
                            <ListItem icon={TbBrandFigma} text="Figma" />
                            <ListItem icon={TbTerminal} text="Bash" />
                        </ul>
                    </div>
                </article>
                <article className="row-start-1 flex h-full items-center p-8 xl:row-start-auto xl:border-t">
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
                </article>
                <article className="hidden h-full border-l border-t p-8 xl:flex">
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
                </article>
            </main>
        </>
    );
};
export default AboutPage;

const ListItem: React.FC<{ icon: IconType; text: string }> = ({ icon: Icon, text }) => {
    return (
        <li className="flex items-center gap-2 text-lg">
            <Icon className="text-3xl text-primary xl:text-4xl" />
            <span>{text}</span>
        </li>
    );
};
