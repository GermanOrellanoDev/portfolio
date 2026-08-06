import ProjectList from "./ProjectList";
import { Project } from "../models/Project";
import { FcHighPriority } from "react-icons/fc";
import BlurText from "./react-bits/BlurText";

interface Props {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const ProjectListContainer = ({ projects, loading, error }: Props) => {

  if (loading) {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-24 text-center">
        <div className="w-10 h-10 border-3 border-t-transparent border-purple rounded-full animate-spin" />
        <p className="text-muted text-base sm:text-lg">Cargando proyectos desde GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-20 text-center max-w-md mx-auto p-6 rounded-2xl bg-card border border-border">
        <FcHighPriority size={36} className="shrink-0" />
        <div className="text-left">
          <p className="text-pure font-medium text-base">Error al cargar proyectos</p>
          <p className="text-muted text-xs mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <BlurText
        text="Proyectos destacados"
        delay={100}
        animateBy="letters"
        className="text-2xl md:text-3xl text-pure text-center font-bold mb-3"
      />
      <p className="text-center text-muted mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Repositorios de GitHub que demuestran mi trabajo con distintas
        tecnologías y enfoques de desarrollo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default ProjectListContainer;