import { Contact } from "../models/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import BlurText from "./react-bits/BlurText";
import BorderGlow from "./react-bits/BorderGlow";

interface ExtendedContact extends Contact {
  description: string;
}

const contactData: ExtendedContact[] = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    url: "https://linkedin.com/in/germanorellano",
    description: "Conectemos profesionalmente",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} />,
    url: "https://github.com/GermanOrellanoDev",
    description: "Explora mis repositorios",
  },
  {
    name: "Email",
    icon: <MdEmail size={28} />,
    url: "mailto:gorellano.dev@gmail.com?subject=Oportunidad%20laboral%20-%20Germán%20Orellano",
    description: "gorellano.dev@gmail.com",
  },
];

const ContactMe = () => {
  return (
    <div className="container mx-auto px-4">
      <BlurText
        text="¿Hablamos?"
        delay={100}
        animateBy="letters"
        className="text-2xl md:text-3xl text-pure text-center font-bold mb-3"
      />
      <p className="text-center text-muted mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Si buscas un desarrollador Full Stack con visión de negocio, criterio analítico y la capacidad de transformar problemas complejos en software eficiente, hablemos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
        {contactData.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full focus:outline-none focus:ring-2 focus:ring-purple/50 rounded-2xl"
          >
            <BorderGlow
              edgeSensitivity={10}
              glowColor="168 85 247"
              borderRadius={20}
              glowRadius={28}
              glowIntensity={0.6}
              coneSpread={12}
              animated
              colors={["#A855F7", "#38BDF8", "#F472B6"]}
              className="p-6 md:p-8 bg-card border-border h-full transition-all duration-300 hover:border-purple/50"
            >
              <div className="flex flex-col items-center text-center justify-between h-full gap-4">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-bg border border-border group-hover:border-purple/50 transition-colors duration-300">
                  <span className="text-purple group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center gap-1 text-base md:text-lg font-bold text-pure group-hover:text-purple transition-colors">
                    <span>{contact.name}</span>
                    <FiArrowUpRight className="text-muted group-hover:text-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm" />
                  </div>
                  <p className="text-xs text-muted mt-1 truncate max-w-[200px]">
                    {contact.description}
                  </p>
                </div>
              </div>
            </BorderGlow>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;