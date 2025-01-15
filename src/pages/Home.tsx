import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutMe from "../components/AboutMe/AboutMe.tsx";
import Hero from "../components/Hero/Hero.tsx";
import ProjectListContainer from "../components/Projects/ProjectListContainer.tsx";
import useFetchProjects from "../hooks/useFetchProjects.ts";

function Home() {
  const { projectsArray, loading, error } = useFetchProjects(
    "https://api.github.com/users/GermanOrellanoDev/repos"
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    //revisar
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <section id="hero">
          <Hero />
        </section>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="my-projects">
          <ProjectListContainer
            projects={projectsArray}
            loading={loading}
            error={error}
          ></ProjectListContainer>
        </section>
        <section id="skills"></section>
        <section id="contact-me"></section>
      </div>
    </>
  );
}

export default Home;
