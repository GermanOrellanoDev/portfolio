import { Contact } from "../models/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactData: Contact[] = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    url: "https://linkedin.com/in/germanorellano",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={30} />,
    url: "https://github.com/GermanOrellanoDev",
  },
  {
    name: "gorellano.dev@gmail.com",
    icon: <MdEmail size={30} />,
    url: "mailto:gorellano.dev@gmail.com?subject=Consulta%20sobre%20mi%20portafolio",
  },
];

const ContactMe = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl md:text-2xl text-white text-center font-bold mb-8">
        Contáctame
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactData.map((contact, i) => (
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            <div
              key={i}
              className="p-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="text-white hover:text-blue-400 font-medium flex items-center justify-center gap-4 my-4">
                <h3>{contact.name}</h3>
                <span>{contact.icon}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
