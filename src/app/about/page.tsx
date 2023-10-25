import Icon from "../_components/icon";
import type dynamicIconImports from "lucide-react/dynamicIconImports";

const About = () => {
    return (
        <main className="relative flex-grow xl:overflow-hidden">
            <article className="grid h-full w-full grid-cols-1 grid-rows-1 xl:grid-cols-[2fr_1fr] xl:grid-rows-[2fr_1fr]">
                <div className="flex h-full items-center justify-center p-8">
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
                            {/* <Button
                                onClick={() => router.push("/contact")}
                                className="uppercase"
                            >
                                Get in touch
                            </Button> */}
                        </div>
                    </div>
                </div>
                <div className="flex h-full flex-col justify-evenly gap-4 p-8 sm:flex-row xl:border-l ">
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-semibold">Front-end</h3>
                        <ul className="flex h-full flex-col items-center gap-2 xl:items-start">
                            <ListItem name="square-code" text="React" />
                            <ListItem name="square-code" text="Vite" />
                            <ListItem name="square-code" text="Tailwindcss" />
                            <ListItem name="square-code" text="CSS" />
                            <ListItem name="square-code" text="HTML" />
                            <ListItem name="square-code" text="Next" />
                            <ListItem name="square-code" text="Typescript" />
                            <ListItem name="square-code" text="Javascript" />
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="text-2xl font-semibold">Back-end</h3>
                        <ul className="flex h-full flex-col items-center gap-2 xl:items-start">
                            <ListItem name="square-code" text="Next" />
                            <ListItem name="square-code" text="Nodejs" />
                            <ListItem name="square-code" text="MySql" />
                            <ListItem name="square-code" text="Planetscale" />
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-4 xl:hidden">
                        <h3 className="text-2xl font-semibold ">Tools</h3>
                        <ul className="flex flex-col items-center gap-2 ">
                            {/* <ListItem icon={TbBrandVscode} text="Vs Code" />
                            <ListItem icon={TbBrandGit} text="Git" />
                            <ListItem icon={TbBrandGithub} text="Github" />
                            <ListItem icon={TbBrandFigma} text="Figma" />
                            <ListItem icon={TbTerminal} text="Bash" /> */}
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
                <div className="hidden h-full p-8 xl:flex xl:border-l xl:border-t">
                    <div className="h-full space-y-4">
                        <h3 className="text-2xl font-semibold">Tools</h3>
                        <ul className="flex flex-wrap gap-2">
                            <ListItem name="code" text="Vs Code" />
                            {/* <ListItem name="git" text="Git" /> */}
                            <ListItem name="github" text="Github" />
                            <ListItem name="figma" text="Figma" />
                            <ListItem name="terminal" text="Bash" />
                        </ul>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default About;

const ListItem: React.FC<{ name: keyof typeof dynamicIconImports; text: string }> = ({
    text,
}) => {
    return (
        <li className="flex items-center gap-2 text-lg">
            {/* <Icon name={name} className="text-primary" /> */}
            <span className="text-base">{text}</span>
        </li>
    );
};
