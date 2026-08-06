import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJava,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiSpringboot,
  SiPostgresql,
  SiSupabase,
  SiGithubactions,
  SiJfrogpipelines,
  SiPostman,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { Skill } from "../models/Skill";
import BlurText from "./react-bits/BlurText";
import BorderGlow from "./react-bits/BorderGlow";

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Three.js", icon: <TbBrandThreejs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    title: "Bases de Datos",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "CI/CD", icon: <SiJfrogpipelines /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      { name: "Playwright", icon: <LiaTheaterMasksSolid /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <BlurText
        text="Stack tecnológico"
        delay={100}
        animateBy="letters"
        className="text-2xl md:text-3xl text-pure text-center font-bold mb-3"
      />
      <p className="text-center text-muted mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Tecnologías que utilizo para desarrollar soluciones web completas, desde la interfaz hasta la infraestructura.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {skillCategories.map((category) => (
          <BorderGlow
            key={category.title}
            edgeSensitivity={10}
            glowColor="168 85 247"
            borderRadius={20}
            glowRadius={28}
            glowIntensity={0.6}
            coneSpread={12}
            animated
            colors={["#A855F7", "#38BDF8", "#F472B6"]}
            className="p-5 h-full w-full bg-card border-border transition-all duration-300 hover:border-purple/40"
          >
            <div className="flex flex-col h-full w-full">
              <h3 className="text-base sm:text-lg font-bold text-pure mb-4 pb-2 border-b border-border/50 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-xs text-purple font-medium bg-purple/10 px-2 py-0.5 rounded-full">
                  {category.skills.length}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2.5 content-start">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-bg/60 border border-border text-pure hover:border-purple/60 hover:text-purple transition-all duration-300 group cursor-default"
                  >
                    <span className="text-base text-purple group-hover:scale-110 transition-transform duration-200 shrink-0">
                      {skill.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-muted group-hover:text-pure transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>
    </div>
  );
};

export default Skills;