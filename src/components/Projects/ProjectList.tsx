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
          image="https://blog.nuthost.com/wp-content/uploads/2022/04/Proyecto-web-blog-NutHost-imagen-destacada.jpg"
          name={project.name}
          detail={project.detail || "Sin descripción"}
          html_url={project.html_url}
          language={project.language || "No especificado"}
        />
      ))}
    </>
  );
};

export default ProjectList;
