import { Project } from "./models/Project";
import ProjectItem from "./ProjectItem";

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project, i) => (
        <div
          key={i}
          className="bg-gray-500 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <ProjectItem
            key={i}
            id={project.id}
            image="/project-pic.jpg"
            name={project.name}
            detail={project.detail || "Sin descripción"}
            html_url={project.html_url}
            language={project.language}
          />
        </div>
      ))}
    </>
  );
};

export default ProjectList;
