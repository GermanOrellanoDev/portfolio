import ProjectListContainer from "../components/Projects/ProjectListContainer.tsx";
import useFetchProjects from "../hooks/useFetchProjects.ts";

function Home() {
  const { projectsArray, loading, error } = useFetchProjects(
    "https://api.github.com/users/GermanOrellanoDev/repos"
  );

  if (loading) return <p>Cargando proyectos</p>;
  if (error) return <p>Error al cargar los proyectos</p>;

  return <ProjectListContainer projects={projectsArray}></ProjectListContainer>;
}

export default Home;
