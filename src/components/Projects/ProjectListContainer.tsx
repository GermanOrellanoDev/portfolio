import ProjectList from "./ProjectList";
import { Project } from "./models/Project";
import { FcHighPriority } from "react-icons/fc";

interface Props {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const ProjectListContainer = ({ projects, loading, error }: Props) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-14 h-14 border-4 border-t-transparent border-purple-600 rounded-full animate-spin"></div>
        <p className="px-4 text-gray-300 text-lg">Cargando proyectos...</p>
      </div>
    );
  }

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <FcHighPriority className="mx-4" size={42} />
        <p className="px-2 text-gray-300 text-lg">
          Error al cargar los proyectos:
        </p>
        <p className="px-2 text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div
      className="min-h-screen bg-gray-800 py-10 px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl text-white text-center font-bold mb-6">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProjectList projects={projects}></ProjectList>
        </div>
      </div>
    </div>
  );
};

export default ProjectListContainer;
