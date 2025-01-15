import { FaGithub } from "react-icons/fa";

interface Props {
  id: number;
  image: string;
  name: string;
  detail: string;
  html_url: string;
  language: string;
}

const ProjectItem = (project: Props) => {
  return (
    <div
      key={project.id}
      className="bg-gray-500 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white flex items-center space-x-2"
        >
          <FaGithub size={28} className="text-white" />
        </a>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-5">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.detail}</p>
        <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
          {project.language}
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
