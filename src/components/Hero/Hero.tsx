const Hero = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        Germán Orellano
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">
        Full Stack Developer
      </p>
      <a
        href="#my-projects"
        title="Proyectos de aplicaciones web"
        className="text-l bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-70 transition duration-300"
      >
        Ver proyectos
      </a>
    </div>
  );
};

export default Hero;
