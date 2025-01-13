import { FaGithub } from "react-icons/fa";

interface Props {
  id: number;
  image: string;
  name: string;
  detail: string;
  html_url: string;
  language: string;
}

const ProjectItem = ({ name, image, detail, html_url, language }: Props) => {
  return (
    <div className="bg-gray-500 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative">
      <div className="relative h-48 overflow-hidden">
        {/* modificar */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <FaGithub size={28} className="text-white" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-5">{name}</h3>
        <p className="text-gray-300 mb-4">{detail}</p>
        <p className="text-gray-400 text-sm mb-4">Lenguaje: {language}</p>
        <a href={html_url}></a>
      </div>
    </div>
  );
};

export default ProjectItem;
