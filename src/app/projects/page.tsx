import { api } from "~/trpc/server";
import Upload from "../_components/upload";

const Projects = async () => {
    const data = await api.projects.getprojects.query();

    return (
        <main className="container flex-grow py-4">
            {/* <Upload /> */}
            {data.map((project) => (
                <div key={project.id} className="flex gap-4 border bg-card p-4">
                    <div
                        className="flex aspect-video h-[400px] border bg-muted bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.imgUrl})` }}
                    >
                        {/* <div className="flex w-full bg-muted/40 text-2xl font-bold backdrop-blur-sm"></div> */}
                    </div>
                    <div>
                        <span className="text-4xl font-bold ">{project.title}</span>
                        <p>{project.description}</p>
                        <div></div>
                    </div>
                </div>
            ))}
        </main>
    );
};
export default Projects;
