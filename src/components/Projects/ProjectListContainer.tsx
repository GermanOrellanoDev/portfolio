import ProjectList from "./ProjectList";
import { Project } from "./models/Project";

interface Props {
  projects: Project[];
}

const ProjectListContainer = ({ projects }: Props) => {
  return (
    <div className="min-h-screen bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white font-bold mb-6">Mis Proyectos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProjectList projects={projects}></ProjectList>
        </div>
      </div>
    </div>
  );
};

export default ProjectListContainer;
