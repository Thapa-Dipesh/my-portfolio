import avatarImg from "../../assets/dipesh.jpg";

const Home = () => {
  return (
    <div className="text-white flex items-center p-12 md:pb-10 md:px-20 md:space-x-14">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello, I am Dipesh
        </h1>
        <p className="text-lg mt-4 md:text-2xl tracking-normal">
          As a curious and adaptable person, I am always eager to learn new
          things and take on new responsibilities. I am committed to achieving
          my goals and believe in the power of hard work and dedication.
        </p>
        <a href="#Footer">
          <button className="mt-6 w-full text-white py-3 text-xl cursor-pointer md:mt-10 md:text-lg md:py-2 md:px-4 md:w-fit hover:opacity-85 duration-300 hover:scale-101 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div>
        <img
          className="hidden cursor-pointer md:block"
          src={avatarImg}
          alt="avatar img"
        />
      </div>
    </div>
  );
};

export default Home;
