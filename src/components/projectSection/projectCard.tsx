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
        <div className="rounded-md border bg-card p-8 text-card-foreground shadow-lg">
            <div className="flex">
                <div className="flex flex-col items-center justify-between gap-4">
                    <div className="text-center">
                        <span className="text-2xl font-bold">{props.title}</span>
                        <p className="text-sm text-muted-foreground">
                            {props.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Tech used</span>
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
                <div className="flex flex-1 justify-center ">
                    <img
                        className="aspect-video h-64 justify-self-center rounded-sm"
                        src={props.imgUrl}
                    />
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
