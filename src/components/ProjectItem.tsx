import { FaGithub } from "react-icons/fa";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface Props {
  id: number;
  image: string[];
  name: string;
  description: string | null;
  html_url: string;
  language: string;
}

const ProjectItem = ({
  image,
  name,
  description,
  html_url,
}: Props) => {
  return (
    <div className="flex flex-col h-full justify-between">

      <ProjectImageCarousel images={image} projectName={name} />

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="gap-3 mb-3">
            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-pure hover:text-purple transition-colors shrink-0 p-1 rounded-lg"
              aria-label={`Ver ${name} en GitHub`}
            >
              <h3 className="text-lg md:text-xl font-bold text-pure hover:text-purple capitalize tracking-wide">
                {name.replace(/-/g, " ")}
              </h3>
              <FaGithub size={22} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-muted mb-4 line-clamp-3 min-h-[3.25rem] leading-relaxed">
            {description || "Proyecto en desarrollo activo."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;