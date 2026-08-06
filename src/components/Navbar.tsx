import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about-me" },
  { name: "Proyectos", href: "#my-projects" },
  { name: "Stack", href: "#skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/30 backdrop-blur-md shadow-lg shadow-bg/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="https://www.linkedin.com/in/germanorellano/"
          className="text-lg sm:text-xl font-bold tracking-tight text-pure hover:text-purple transition-colors flex items-center gap-1.5"
        >
          <span className="text-purple">&lt;</span>
          <span>GermánOrellano</span>
          <span className="text-purple">/&gt;</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted hover:text-pure hover:bg-card/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact-me"
            className="ml-3 px-4 py-2 rounded-xl bg-purple/10 border border-purple/30 text-purple text-sm font-semibold hover:bg-purple hover:text-pure transition-all duration-300 active:scale-95"
          >
            Hablemos
          </a>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl text-muted hover:text-pure hover:bg-card border border-transparent hover:border-border transition-colors"
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-4 pt-4 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-muted hover:text-pure hover:bg-bg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact-me"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-purple text-pure font-semibold hover:opacity-90 transition-opacity"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;