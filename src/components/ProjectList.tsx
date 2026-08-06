import { Project } from "../models/Project";
import ProjectItem from "./ProjectItem";
import BorderGlow from "./react-bits/BorderGlow";
import { PROJECT_IMAGES_MAP, DEFAULT_PROJECT_IMAGE } from "../data/projectImages";

interface Props {
  projects: Project[];
}

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project) => {
        const projectImages =
          PROJECT_IMAGES_MAP[project.name] || [DEFAULT_PROJECT_IMAGE];

        return (
          <BorderGlow
            key={project.id}
            edgeSensitivity={10}
            glowColor="168 85 247"
            borderRadius={20}
            glowRadius={28}
            glowIntensity={0.6}
            coneSpread={12}
            animated
            colors={["#A855F7", "#38BDF8", "#F472B6"]}
            className="p-1.5 group overflow-hidden bg-card border-border h-full transition-all duration-300 hover:border-purple/40"
          >
            <ProjectItem
              id={project.id}
              image={projectImages}
              name={project.name}
              description={project.description}
              html_url={project.html_url}
              language={project.language}
            />
          </BorderGlow>
        );
      })}
    </>
  );
};

export default ProjectList;