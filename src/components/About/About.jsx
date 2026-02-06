import aboutImg from "../../assets/my-image.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-[#ccc] px-6 md:px-12 py-16 overflow-hidden bg-[#111422] border border-slate-800 shadow-2xl rounded-2xl max-w-7xl mx-auto mt-24"
    >
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
          About Me
        </h2>
        <div className="h-1.5 w-20 bg-[#465697] mt-4 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Profile Image with subtle glow */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#465697] to-[#1e293b] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            className="hidden md:block relative rounded-2xl w-full max-w-sm lg:max-w-md shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            src={aboutImg}
            alt="Dipesh Thapa"
          />
        </div>

        {/* Content List */}
        <ul className="flex flex-col gap-6 max-w-xl">
          <li className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all">
            <IoArrowForward
              size={24}
              className="mt-1 text-[#465697] group-hover:translate-x-2 transition-transform"
            />
            <span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Frontend Engineer
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Specializing in building high-performance, type-safe interfaces
                with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. I
                focus on core web vitals, accessible UI/UX, and fluid user
                experiences.
              </p>
            </span>
          </li>

          <li className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all">
            <IoArrowForward
              size={24}
              className="mt-1 text-[#465697] group-hover:translate-x-2 transition-transform"
            />
            <span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Backend Architect
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Experienced in designing scalable server-side logic using
                **Node.js** and **Next.js Server Actions**. I build robust APIs
                and implement secure data mutations with an emphasis on
                performance.
              </p>
            </span>
          </li>

          <li className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all">
            <IoArrowForward
              size={24}
              className="mt-1 text-[#465697] group-hover:translate-x-2 transition-transform"
            />
            <span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Database Management
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Proficient in data modeling with **MongoDB** (Mongoose) and
                relational systems. I focus on optimizing queries and ensuring
                data integrity for complex, data-driven applications.
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
