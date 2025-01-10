import "./App.css";
import { Project } from "./Projects/models/Project";
import ProjectList from "./Projects/ProjectList";

//layout -> display -> spacing -> border -> colors -> text

function App() {
  const projectsArray: Project[] = [
    {
      name: "primer proyecto",
      detail: "detalle primer proyecto",
      image: "",
    },
  ];

  return <ProjectList projects={projectsArray}></ProjectList>;
}

export default App;
