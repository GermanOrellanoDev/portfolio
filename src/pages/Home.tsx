import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutMe from "../components/AboutMe/AboutMe.tsx";
import Hero from "../components/Hero/Hero.tsx";
import ProjectListContainer from "../components/Projects/ProjectListContainer.tsx";
import useFetchProjects from "../hooks/useFetchProjects.ts";
import Skills from "../components/Skills/Skills.tsx";
import ContactMe from "../components/ContactMe/ContactMe.tsx";
import Footer from "../components/Footer/Footer.tsx";

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
        <section
          className="bg-gradient-to-r from-blue-950 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8"
          data-aos="fade-down"
          id="hero"
        >
          <Hero />
        </section>
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          id="about-me"
        >
          <AboutMe />
        </section>
        <section
          className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          id="my-projects"
        >
          <ProjectListContainer
            projects={projectsArray}
            loading={loading}
            error={error}
          ></ProjectListContainer>
        </section>
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          id="skills"
        >
          <Skills />
        </section>
        <section
          className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          id="contact-me"
        >
          <ContactMe />
        </section>
        <section
          className="py-16 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          id="footer"
        >
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
