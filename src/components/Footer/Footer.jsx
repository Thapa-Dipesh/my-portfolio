import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="flex flex-col md:flex-row items-center justify-between bg-[#111422] border-t border-slate-800 text-white p-12 mt-24 md:px-24 transition-all duration-300"
    >
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
          Contact
        </h1>
        <h3 className="text-gray-400 text-base md:text-xl font-medium">
          Let&apos;s build something{" "}
          <span className="text-[#465697]">extraordinary</span> together.
        </h3>
      </div>

      <ul className="flex flex-col gap-4 text-base md:text-lg">
        <li className="group flex gap-3 items-center transition-colors hover:text-[#465697]">
          <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#465697] transition-all">
            <MdOutlineEmail size={22} className="group-hover:text-white" />
          </div>
          <a href="mailto:dipesht468@gmail.com" className="hover:underline">
            dipesht468@gmail.com
          </a>
        </li>

        <li className="group flex gap-3 items-center transition-colors hover:text-[#465697]">
          <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#465697] transition-all">
            <CiLinkedin size={22} className="group-hover:text-white" />
          </div>
          <a
            href="https://www.linkedin.com/in/dipesh-thapa-095250232/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/dipesh-thapa
          </a>
        </li>

        <li className="group flex gap-3 items-center transition-colors hover:text-[#465697]">
          <div className="p-2 bg-slate-800 rounded-full group-hover:bg-[#465697] transition-all">
            <FaGithub size={22} className="group-hover:text-white" />
          </div>
          <a
            href="https://github.com/Thapa-Dipesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Thapa-Dipesh
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
