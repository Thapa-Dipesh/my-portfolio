import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-12 py-8 md:px-20 md:mt-4">
      <span className="text-xl font-bold tracking-wide md:text-4xl cursor-pointer">
        Portfolio
      </span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        }    mx-24 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 md:text-lg hover:opacity-50">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0 md:text-lg hover:opacity-50">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 md:text-lg hover:opacity-50">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0 md:text-lg hover:opacity-50">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <AiOutlineMenu
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <IoCloseSharp
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
