import { api } from "~/trpc/server";
import Project from "./_project";

export interface Proj {
    id: number;
    title: string | null;
    description: string | null;
    githubUrl: string | null;
    demoUrl: string | null;
    imgUrl: string | null;
    tech: string | null;
}

const Projects = async () => {
    const data = await api.projects.getprojects.query();

    return (
        <main className="relative flex-grow overflow-hidden">
            <Project data={data} />
        </main>
    );
};
export default Projects;
