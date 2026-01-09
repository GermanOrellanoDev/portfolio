const AboutMe = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl md:text-2xl text-white text-center font-bold mb-8">
        Sobre mi
      </h2>
      <div className="animate-blob animation-delay-2000 absolute w-28 h-28 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full bg-gray-400 left-10 md:left-36 lg:left-40 opacity-70 filter blur-2xl mix-blend-multiply"></div>
      <div className="animate-blob animation-delay-4000 absolute w-28 h-28 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full bg-blue-950 right-14 md:right-36 lg:left-0 opacity-70 filter blur-2xl mix-blend-multiply"></div>
      <div className="animate-blob animation-delay-6000 absolute w-28 h-28 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full bg-purple-300 right-14 top-44 md:right-60 md:top-52 lg:left-14 lg:top-72 opacity-70 filter blur-2xl mix-blend-multiply"></div>
      <div className="flex flex-col justify-center items-center lg:flex-row mx-w-3xl mx-auto text-gray-300 text-justify text-base sm:text-lg md:text-xl leading-relaxed">
        <img
          src="/me-image.png"
          alt="foto-mia-sección-sobre-mi"
          className="z-10 w-auto h-64 md:h-80 md:mr-14 opacity-90"
        />
        <div className="flex flex-col mb-4">
          <p className="z-10 m-3">
            👋 <strong>¡Hola, mundo!</strong>
          </p>

          <p className="z-10 m-3">
            Soy un desarrollador <strong>full stack junior</strong> apasionado
            por la tecnología y listo para dar un gran giro en mi vida
            profesional. Después de más de 10 años de experiencia en el{" "}
            <strong>sector de compras en el rubro de la construcción</strong>,
            donde desarrollé habilidades clave como el trabajo en equipo, la
            resolución de problemas y la adaptabilidad, decidí seguir mi
            verdadera pasión: la programación.
          </p>
          <p className="z-10 m-3">
            Durante los últimos años me he formado como desarrollador fullstack
            y he trabajado tanto en la parte de cliente como en la de servidor.
            🎨 En el frontend me especializo en <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
            <strong>React</strong>, <strong>TypeScript</strong> y diseño con{" "}
            <strong>Tailwind CSS</strong>, construyendo interfaces accesibles y
            responsivas.
          </p>
          <p className="z-10 m-3">
            💻 En el backend manejo tecnologías y patrones tanto en Java como en
            JavaScript:
            <strong> Node.js</strong> y <strong>Express</strong> para APIs
            rápidas y ligeras, y <strong>Java</strong> con{" "}
            <strong>Spring Boot</strong> para aplicaciones empresariales. Además
            trabajo con bases de datos relacionales y no relacionales (por
            ejemplo <strong>MySQL</strong> con <strong>JDBC</strong> y
            soluciones NoSQL), lo que me permite diseñar y consumir servicios
            robustos y escalables.
          </p>
          <p className="z-10 m-3">
            🚀 Estoy en busca de nuevos desafíos y oportunidades en el sector
            tecnológico, donde pueda aplicar mis habilidades técnicas y
            continuar creciendo profesionalmente. Cuando no estoy codificando,
            disfruto hacer <strong>mountain bike</strong> y entrenar en el
            gimnasio, actividades que me ayudan a mantenerme enfocado y
            enérgico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
