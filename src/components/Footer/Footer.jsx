import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex items-center justify-between bg-[#465697] text-white p-10 mt-12 md:p-12">
      <div>
        <h1 className="text-2xl md:text-6xl font-semibold">Contact</h1>
        <h3 className="text-sm md:text-2xl">
          Feel Free To Reach Out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          dipesht468@gmal.com
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          linkedin.com
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          github.com
        </li>
      </ul>
    </div>
  );
};

export default Footer;
