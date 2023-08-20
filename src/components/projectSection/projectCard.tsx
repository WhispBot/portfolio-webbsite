import { Github, Link, LinkIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Badge } from "../ui/badge";

const ProjectCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Web store</CardTitle>
                <CardDescription>Description</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-[0.2fr_1fr]">
                <div className="flex flex-col items-center justify-between gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm text-muted-foreground">Tech used</span>
                        <Badge>React</Badge>
                        <Badge>Tailwindcss</Badge>
                        <Badge>Prisma</Badge>
                        <Badge>Next</Badge>
                    </div>
                    <div className="flex gap-2">
                        {/* <Link href={""} target="_blank" className="flex gap-1">
                            <span className="font-semibold">Code</span>
                            <Github />
                        </Link>
                        <Link href={""} target="_blank" className="flex gap-1">
                            <span className="font-semibold">Demo</span>
                            <LinkIcon />
                        </Link> */}
                    </div>
                </div>
                <img
                    className="aspect-video h-64 justify-self-center rounded-sm"
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                />
            </CardContent>
        </Card>
    );
};
export default ProjectCard;
