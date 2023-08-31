import ProjectCard, { type IProjectCard } from "~/components/projectSection/projectCard";
import Reveal from "../reveal";

const data: IProjectCard[] = [
    {
        title: "Web shop",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis, fugiat aut totam veritatis dolore quos recusandae nemo cumque alias.",
        imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        githubLink: "",
        demolink: "",
        techUsed: [],
    },
    {
        title: "Web shop",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis, fugiat aut totam veritatis dolore quos recusandae nemo cumque alias.",
        imgUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        githubLink: "",
        demolink: "",
        techUsed: [],
    },
];

const ProjectSection = () => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {data.map((data, index) => (
                <Reveal key={index}>
                    <ProjectCard {...data} />
                </Reveal>
            ))}
        </div>
    );
};

export default ProjectSection;
