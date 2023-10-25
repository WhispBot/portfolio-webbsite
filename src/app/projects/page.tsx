import { api } from "~/trpc/server";
import Project from "./_project";

const Projects = async () => {
    const data = await api.projects.getprojects.query();

    return (
        <main className="relative flex-grow overflow-hidden">
            <Project data={data} />
        </main>
    );
};
export default Projects;
