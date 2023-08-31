import { Github, LinkIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";

export interface IProjectCard {
    title: string;
    description: string;
    imgUrl: string;
    githubLink: string;
    demolink: string;
    techUsed: string[];
}

const ProjectCard: React.FC<IProjectCard> = (props) => {
    return (
        <div className="rounded-md border bg-card text-card-foreground shadow-lg">
            <div className="">
                <div className="">
                    <img
                        className="aspect-video h-full rounded-lg rounded-tl-none"
                        src={props.imgUrl}
                    />
                </div>
                <div className="space-y-2 p-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="whitespace-nowrap text-xl font-bold">
                                {props.title}
                            </span>
                            <div className="flex gap-2 overflow-hidden">
                                <Badge>Nextjs</Badge>
                                <Badge>Typescript</Badge>
                                <Badge>Tailwindcss</Badge>
                                <Badge>HTML</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {props.description}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href={props.githubLink}
                            target="_blank"
                            className="flex gap-1 hover:text-primary"
                        >
                            <span className="font-semibold">Code</span>
                            <Github />
                        </Link>
                        <Link
                            href={props.demolink}
                            target="_blank"
                            className="flex gap-1 hover:text-primary"
                        >
                            <span className="font-semibold">Demo</span>
                            <LinkIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
