import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  // SiAppwrite,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="Skills" className="pt-10 px-12 mt-4 md:px-24">
      <h1 className="text-4xl text-center md:text-4xl text-white font-bold">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 mt-10">
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <FaHtml5 color="#E34F26" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <FaCss3 color="#1572b6" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <FaJs color="#F7DF1E" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <FaReact color="#61DAFB" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <FaNodeJs color="#6CC24A" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <SiExpress color="#33B24C" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <SiMongodb color="#023430" size={120} />
        </div>
        <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <SiTailwindcss color="#2596be" size={120} />
        </div>
        {/* <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4">
          <SiAppwrite color="#FD366E" size={120} />
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
