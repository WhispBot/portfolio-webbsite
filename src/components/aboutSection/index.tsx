import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import Reveal from "../reveal";
import Link from "next/link";

const tech: string[] = [
    "Javascript",
    "Typescript",
    "CSS",
    "HTML",
    "React",
    "Github",
    "Vercel",
    "Express",
    "Nodejs",
    "Redux",
];

const AboutSection = () => {
    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.5fr]">
            <div className="flex flex-col justify-between">
                <div>
                    <span className="text-2xl font-bold">
                        A passionate Full-stack Developer Based in
                        <div className="flex items-center text-primary">
                            <span>malmo, Sweden</span>
                            <MapPin />
                        </div>
                    </span>
                </div>
                <div className="space-y-6">
                    <Reveal>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                            ut repudiandae quae delectus, totam, expedita soluta quidem
                            inventore harum architecto fugit commodi fugiat ducimus
                            repellat suscipit excepturi doloremque sed error corporis
                            quibusdam dolorem! Quisquam, voluptates quam voluptatibus
                            quaerat ipsum ad.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore accusamus labore facilis quaerat facere doloribus
                            repellendus beatae ipsam asperiores inventore, eum ullam? Enim
                            hic, laborum nobis eos aliquid totam quibusdam.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore accusamus labore facilis quaerat facere doloribus
                            repellendus beatae ipsam asperiores inventore, eum ullam? Enim
                            hic, laborum nobis eos aliquid totam quibusdam.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore accusamus labore facilis quaerat facere doloribus
                            repellendus beatae ipsam asperiores inventore, eum ullam? Enim
                            hic, laborum nobis eos aliquid totam quibusdam.
                        </p>
                    </Reveal>
                    <Reveal>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolore accusamus labore facilis quaerat facere doloribus
                            repellendus beatae ipsam asperiores inventore, eum ullam? Enim
                            hic, laborum nobis eos aliquid totam quibusdam.
                        </p>
                    </Reveal>
                    <div className="flex items-center gap-2 ">
                        <div className="flex items-center gap-2 text-primary">
                            <span>My links</span>
                            <ArrowRight />
                        </div>
                        <div className="flex">
                            <Link
                                href={""}
                                className="relative rounded-md p-2 text-primary transition-colors hover:text-primary/80"
                            >
                                <Github className=" h-8 w-8" />
                            </Link>
                            <Link
                                href={""}
                                className="relative rounded-md p-2 text-primary transition-colors hover:text-primary/80"
                            >
                                <Linkedin className="h-8 w-8" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-wrap gap-1">
                    {tech.map((tech, index) => (
                        <Badge
                            key={index}
                            variant={"secondary"}
                            className="text-md font-normal"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
