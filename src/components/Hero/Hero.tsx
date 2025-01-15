const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-950 to-purple-600 text-white py-10 px-4 sm:px-6 lg:px-8"
      data-aos="fade-down"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Germán Orellano</h1>
        <p className="text-xl md:text-2xl mb-8">
          Desarrollador Junior | Aprendiz Apasionado
        </p>
        <a
          href="#my-projects"
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-70 transition duration-300"
        >
          Ver Proyectos
        </a>
      </div>
    </section>
  );
};

export default Hero;
