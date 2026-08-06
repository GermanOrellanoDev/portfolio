import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs sm:text-sm text-muted">
      <div className="flex items-center gap-2 text-center sm:text-left">
        <p>
          © {currentYear}{" "}
          <span className="text-pure font-semibold">Germán Orellano</span>.
          Desarrollado con React, TypeScript & Tailwind.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="https://linkedin.com/in/germanorellano"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-purple transition-colors p-1"
          aria-label="LinkedIn de Germán Orellano"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://github.com/GermanOrellanoDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-purple transition-colors p-1"
          aria-label="GitHub de Germán Orellano"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="mailto:gorellano.dev@gmail.com"
          className="text-muted hover:text-purple transition-colors p-1"
          aria-label="Email de Germán Orellano"
        >
          <MdEmail size={18} />
        </a>
        <span className="w-px h-4 bg-border" />
        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-card border border-border text-muted hover:text-purple hover:border-purple/50 transition-all active:scale-95"
          aria-label="Volver arriba"
        >
          <FiArrowUp size={16} />
        </button>
      </div>

    </div>
  );
};

export default Footer;