import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AboutMe from "../components/AboutMe.tsx";
import Hero from "../components/Hero.tsx";
import Navbar from "../components/Navbar.tsx";
import ProjectListContainer from "../components/ProjectListContainer.tsx";
import useFetchProjects from "../hooks/useFetchProjects.ts";
import Skills from "../components/Skills.tsx";
import ContactMe from "../components/ContactMe.tsx";
import Footer from "../components/Footer.tsx";
import SoftAurora from "../components/react-bits/SoftAurora.tsx";

function Home() {
  const { projectsArray, loading, error } = useFetchProjects(
    "https://api.github.com/users/GermanOrellanoDev/repos"
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0F0C1B] text-white overflow-x-hidden selection:bg-sky-400 selection:text-slate-950">
      {/* Fondo Aurora interactivo */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <SoftAurora
          speed={1}
          scale={2.2}
          brightness={1.4}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2}
          noiseAmplitude={1.5}
          bandHeight={0.5}
          bandSpread={0.9}
          octaveDecay={0.26}
          layerOffset={0.2}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.3}
        />
      </div>

      <Navbar />

      {/* Contenido principal centrado con sistema de grilla */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28" id="hero">
          <Hero />
        </section>

        {/* ABOUT ME */}
        <section className="py-16 md:py-24 lg:py-28" data-aos="fade-up" id="about-me">
          <AboutMe />
        </section>

        {/* PROYECTOS */}
        <section className="py-16 md:py-24 lg:py-28" data-aos="fade-up" id="my-projects">
          <ProjectListContainer
            projects={projectsArray}
            loading={loading}
            error={error}
          />
        </section>

        {/* SKILLS */}
        <section className="py-16 md:py-24 lg:py-28" data-aos="fade-up" id="skills">
          <Skills />
        </section>

        {/* CONTACTO */}
        <section className="py-16 md:py-24 lg:py-28" data-aos="fade-up" id="contact-me">
          <ContactMe />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 border-t border-[#2A244D] bg-[#0F0C1B]/80 backdrop-blur-md" id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default Home;