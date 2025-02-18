import aboutImg from "../../assets/about.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-[#ccc] px-12 py-8 overflow-hidden items-center md:flex md:flex-wrap sm:justify-center sm:mx-20 bg-black shadow-xl bg-opacity-50 rounded-lg  ">
      <h2 className="text-4xl text-center font-bold sm:text-4xl sm:py-8">
        About Me
      </h2>
      <div className="sm:flex sm:flex-row sm:w-full justify-around flex-wrap flex-col items-center mt-10">
        <img
          className="sm:h-auto sm:w-1/2 w-full mb-8 cursor"
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOF6CwTEp_5dfdCNrBk-x9L7fvjtOgS5dDWQ&s"
          src={aboutImg}
          alt="about img"
        />

        <ul className="flex flex-col sm:gap-10">
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I have X years of experience building user interfaces using
                technologies like React, HTML, CSS, JavaScript and ReactJs. I'm
                passionate about creating clean, responsive, and user-friendly
                interfaces.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I have experience working with backend technologies like Node.js
                and Express. I enjoy building APIs and server-side logic that
                power web applications.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-96">
              <h1 className="text-2xl md:text-2xl font-semibold leading-normal">
                Database
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I'm familiar with relational databases like MySQL and NoSQL
                databases like MongoDB. I understand the importance of data
                storage and retrieval for efficient applications.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
