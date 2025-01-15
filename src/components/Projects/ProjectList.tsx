import { Project } from "./models/Project";
import ProjectItem from "./ProjectItem";

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          image="/project-pic.jpg"
          name={project.name}
          detail={project.detail || "Sin descripción"}
          html_url={project.html_url}
          language={project.language}
        />
      ))}
    </>
  );
};

export default ProjectList;
