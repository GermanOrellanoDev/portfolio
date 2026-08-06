import { useEffect, useState } from "react";
import { Project } from "../models/Project";

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
            project.name.toLocaleLowerCase() == "erp-project" || project.name.toLocaleLowerCase() == "appointment-management-platform" || project.name.toLocaleLowerCase() == "support-api" || project.name.toLocaleLowerCase() == "auth-api"
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
