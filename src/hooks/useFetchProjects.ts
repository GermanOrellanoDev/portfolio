import { useEffect, useState } from "react";
import { Project } from "../components/Projects/models/Project";

const useFetchProjects = (url: string) => {
  const [projectsArray, setProjectsArray] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch repos");
        const data: Project[] = await response.json();
        const filteredProjects = data.filter(
          (project) =>
            project.name.toLowerCase() !== "germanorellanodev" &&
            project.name.toLocaleLowerCase() !== "portfolio"
        );
        setProjectsArray(filteredProjects);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [url]);

  return { projectsArray, loading, error };
};

export default useFetchProjects;
