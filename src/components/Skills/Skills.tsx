import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { Skill } from "../models/Skill";

const skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "JAVA", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl md:text-2xl text-white text-center font-bold mb-8">
        Habilidades
      </h2>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto md:gap-6 lg:grid-cols-3 lg:gap-8 xl:max-w-5xl">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-md md:p-6"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex items-center justify-center gap-4 my-4">
              <span className="text-3xl text-blue-400">{skill.icon}</span>
              <h4 className="text-sm font-semibold">{skill.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
