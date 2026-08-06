import BlurText from "./react-bits/BlurText";

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4">
      <BlurText
        text="Sobre mí"
        delay={100}
        animateBy="letters"
        className="text-2xl md:text-3xl text-pure text-center font-bold mb-3"
      />
      <p className="text-center text-muted mb-12 max-w-2xl mx-auto text-sm sm:text-base">
        Desarrollador con perfil híbrido: sólida trayectoria profesional y
        enfoque técnico orientado a resultados.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto gap-10 lg:gap-14">

        <div className="relative shrink-0">
          <div className="relative z-10 w-56 sm:w-64 md:w-72 lg:w-80 h-72 sm:h-80 md:h-96">
            <img
              src="/me-image.png"
              alt="Germán Orellano - Desarrollador Full Stack"
              className="w-auto h-full object-cover"
            />
          </div>
          <div className="absolute -inset-2 rounded-full bg-purple/25 blur-xl z-0 pointer-events-none" />
        </div>

        <div className="flex flex-col gap-4 text-justify text-sm sm:text-base text-muted leading-relaxed max-w-xl">
          <p>
            Soy <strong className="text-pure font-semibold">Desarrollador Full Stack</strong>{" "}
            apasionado por resolver problemas complejos a través de la tecnología. Aporto un perfil híbrido respaldado por{" "}
            <strong className="text-pure font-semibold">
              más de 10 años de trayectoria en el sector de abastecimiento y logística
            </strong>{" "}
            , donde aporté mi conocimiento para mejorar procesos de gestión y toma de decisiones estratégicas. Esta experiencia me otorga una sólida visión de negocio.
          </p>

          <p>
            En el <strong className="text-pure font-semibold">frontend</strong>, construyo
            interfaces con{" "}
            <strong className="text-purple font-semibold">React, TypeScript y Tailwind CSS</strong>
            , priorizando accesibilidad, rendimiento y experiencia de usuario.
          </p>

          <p>
            En el <strong className="text-pure font-semibold">backend</strong>, desarrollo
            APIs con{" "}
            <strong className="text-purple font-semibold">Node.js, Python y Java (Spring Boot)</strong>
            , integrando bases de datos relacionales (
            <strong className="text-pure font-semibold">MySQL</strong>) y no relacionales (
            <strong className="text-pure font-semibold">MongoDB</strong>).
          </p>

          <p>
            Actualmente complemento mi perfil técnico con formación continua en {" "}
            <strong className="text-pure font-semibold">
              Ciencia de Datos e Inteligencia Artificial
            </strong>
            , buscando aplicar ese criterio analítico en el desarrollo de software escalable y la optimización de procesos.
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            {[
              "Trabajo en equipo",
              "Adaptabilidad",
              "Orientación a resultados",
              "Aprendizaje continuo",
              "Resiliencia",
              "Gestión del cambio"
            ].map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 text-xs sm:text-sm rounded-full bg-card border border-border text-pure font-medium hover:border-purple/60 transition-colors"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;