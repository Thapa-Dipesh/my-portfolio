import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked (for mobile)
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center text-white px-8 py-6 md:px-20 sticky top-0 z-50 bg-[#0c0e19]/80 backdrop-blur-md border-b border-slate-800/50">
      {/* Brand Logo */}
      <a
        href="#Home"
        className="text-xl font-extrabold tracking-tighter md:text-3xl cursor-pointer hover:text-[#465697] transition-colors"
      >
        DIPESH<span className="text-[#465697]">.</span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-medium items-center">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item}`}>
            <li className="text-lg relative group transition-all duration-300">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#465697] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </a>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <div
        className="md:hidden transition-all duration-300 z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <IoCloseSharp size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-screen w-3/4 bg-[#111422] shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-10 z-40`}
      >
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={toggleMenu}
            className="text-2xl font-semibold hover:text-[#465697]"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
