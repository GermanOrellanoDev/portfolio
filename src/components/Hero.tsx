import { FaArrowDown, FaEnvelope } from "react-icons/fa";
import BlurText from "./react-bits/BlurText";
import ShinyText from "./react-bits/ShinyText";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-pure animate-pulse" />
        <span>Desarrollador Full Stack & Estudiante de Ciencia de Datos & IA</span>
      </div>

      <div className="mb-4">
        <BlurText
          text="Germán Orellano"
          delay={80}
          animateBy="letters"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-pure leading-tight"
          direction="top"
        />
      </div>

      <div className="text-base sm:text-xl md:text-2xl mb-6">
        <ShinyText
          text="Desarrollador Full Stack | React · TypeScript · Python · Java" 
          speed={3}
          color="#A855F7"
          shineColor="#F8FAFC"
          className="font-medium tracking-wide"
        />
      </div>

      <div className="mb-10 max-w-2xl mx-auto">
        <BlurText
          text="Desarrollo software de extremo a extremo, conectando experiencias de usuario fluidas con arquitecturas y APIs sólidas. Soluciones digitales impulsadas por visión de negocio."
          delay={30}
          animateBy="words"
          className="text-sm sm:text-base md:text-lg text-muted leading-relaxed font-normal"
          direction="bottom"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="#my-projects"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple text-pure font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple/20 active:scale-95"
        >
          <span>Ver Proyectos</span>
          <FaArrowDown className="text-xs" />
        </a>

        <a
          href="#contact-me"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card border border-border text-pure font-semibold hover:border-purple hover:text-purple transition-all duration-300 active:scale-95"
        >
          <FaEnvelope className="text-sm" />
          <span>Contáctame</span>
        </a>
      </div>

    </div>
  );
};

export default Hero;