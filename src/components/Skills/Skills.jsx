import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3 color="#1572b6" />, name: "CSS3" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" }, // Essential for your new project!
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <SiNextdotjs color="#ffffff" />, name: "Next.js" }, // Matches your Watchly project
    { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind" },
    { icon: <FaNodeJs color="#6CC24A" />, name: "Node.js" },
    { icon: <SiExpress color="#ffffff" />, name: "Express" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  ];

  return (
    <section id="Skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
          Technical Skills
        </h1>
        <div className="h-1.5 w-20 bg-[#465697] mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center bg-[#111422] border border-slate-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#465697] hover:shadow-[0_0_20px_rgba(70,86,151,0.2)]"
          >
            <div className="text-5xl md:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
