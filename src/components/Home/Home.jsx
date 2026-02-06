import avatarImg from "../../assets/dipesh.jpg";
import { HiDownload, HiEye } from "react-icons/hi"; // Import a professional

const Home = () => {
  return (
    <section
      id="Home"
      className="text-white flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-24 min-h-[80vh]"
    >
      <div className="md:w-3/5 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Hi, I&apos;m Dipesh
        </h1>
        {/* Dynamic Professional Tagline */}
        <p className="text-xl md:text-3xl font-medium text-[#465697] mb-4">
          Full-Stack Developer & Next.js Enthusiast
        </p>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          Specializing in building modern web applications with{" "}
          <b>Next.js 15</b>, <b>TypeScript</b>, and <b>Prisma</b>. I transform
          complex ideas into seamless digital experiences with a focus on
          performance and clean architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          {/* Primary CTA: Contact */}
          <a href="#Footer" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 text-lg font-bold rounded-full bg-[#465697] hover:bg-[#3b4880] transition-all duration-300 shadow-lg shadow-[#465697]/30 active:scale-95 cursor-pointer">
              Hire Me
            </button>
          </a>

          {/* Secondary CTA: Resume Download */}
          <a
            // href="https://drive.google.com/file/d/1eA-Pq5-7kbTM_ggz_lessQXuR1xodcGH/view?usp=sharing" // Ensure this is in your /public folder
            href="https://drive.google.com/file/d/1eA-Pq5-7kbTM_ggz_lessQXuR1xodcGH//preview" // Ensure this is in your /public folder
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="w-full sm:w-auto"
          >
            <button className="flex items-center justify-center gap-2 w-full px-8 py-3 text-lg font-bold rounded-full border border-[#465697] text-white hover:bg-[#465697]/10 transition-all duration-300 active:scale-95 cursor-pointer">
              <HiEye size={20} />
              View Resume
            </button>
          </a>

          {/* Tertiary CTA: View Work (Ghost Button) */}
          <a href="#Projects" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 text-lg font-bold rounded-full border border-slate-700 hover:bg-slate-800 transition-all duration-300 active:scale-95 text-gray-300 cursor-pointer">
              View Work
            </button>
          </a>
        </div>
      </div>

      {/* Avatar with Floating Animation */}
      <div className="md:w-2/5 flex justify-center mb-12 md:mb-0">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#465697] to-slate-800 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#111422] shadow-2xl animate-float"
            src={avatarImg}
            alt="Dipesh Thapa"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
