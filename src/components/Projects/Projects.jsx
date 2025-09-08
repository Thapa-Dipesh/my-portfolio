import React from "react";
// import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectDetails = [
    {
      imageUrl:
        "https://i.pinimg.com/736x/dd/07/d8/dd07d85ceabbc7dbe17635f51dcdc1ea.jpg",
      title: "Note Taking App",
      description:
        "This is an intuitive and responsive note-taking application built using the MERN stack, leveraging MongoDB for flexible data storage, Express.js and Node.js for a robust backend API, and React for a dynamic and engaging user interface.",
      demoLink: "https://webnote1.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/notes-app",
    },
    {
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/404/ad7427180507383.Y3JvcCwxMzQyLDEwNTAsMjksMA.png",
      title: "Landing Page Design",
      description:
        "This is a simple and responsive landing page built using React with TypeScript for enhanced type safety and Tailwind CSS for rapid and utility-first styling.",
      demoLink: "https://thapa-dipesh.github.io/landing-page",
      codeLink: "https://github.com/Thapa-Dipesh/landing-page",
    },
    {
      imageUrl:
        "https://engineering.fb.com/wp-content/uploads/2020/05/1.-Home-Setting-Light-Mode.png",
      title: "Socialbook website",
      description:
        "SocialBook: A basic social networking website built with HTML, CSS, and minimal JavaScript for core interactivity.",
      demoLink:
        "https://thapa-dipesh.github.io/Website-Clones/socialbook-clone/",
      codeLink:
        "https://github.com/Thapa-Dipesh/Website-Clones/tree/main/socialbook-clone",
    },
    {
      imageUrl:
        "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/670d6c3ec8f6cf2996c40e02_www_viber_com_en__208abcd7fdd1.jpeg",
      title: "Viber website",
      description:
        "This project is a static front-end clone of the Viber website, constructed using only HTML for the structure and CSS for its visual styling.",
      demoLink: "https://thapa-dipesh.github.io/Website-Clones/viber-clone/",
      codeLink:
        "https://github.com/Thapa-Dipesh/Website-Clones/tree/main/viber-clone",
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQEJnXe9RK5c0A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680694587353?e=2147483647&v=beta&t=-74iuxwHyCa9jNp6hL4YftNxAcKc-f3HsMEU0f-gv70",
      title: "UsabilityHub website",
      description:
        "This project is a static front-end clone of the UsabilityHub website, constructed using only HTML for the structure and CSS for its visual styling.",
      demoLink:
        "https://thapa-dipesh.github.io/Website-Clones/usabilityhub-clone/",
      codeLink:
        "https://github.com/Thapa-Dipesh/Website-Clones/tree/main/usabilityhub-clone",
    },
    {
      imageUrl: "https://images04.nicepage.com/feature/461183/blog.jpg",
      title: "Blog website",
      description: "this is a blogging website created using HTML, CSS",
    },
  ];
  return (
    <div id="Projects" className="px-12 mt-24 sm:pt-12  text-[#ccc]">
      <h1 className="text-4xl text-center md:text-4xl text-white font-bold">
        Projects
      </h1>
      <div className="py-16 flex flex-col gap-8 w-full sm:flex-row overflow-auto ">
        {projectDetails.map((item, index) => (
          <div
            key={index}
            className="h-fit md:h-auto flex flex-wrap flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl duration-600 hover:scale-102 sm:w-96 sm:flex-none pb-6  sm:snap-center"
          >
            <img
              className=" w-full h-[50%] p-8 rounded-3xl duration-500 cursor-pointer hover:scale-105 sm:p-4"
              src={item.imageUrl}
              alt="banner img"
            />
            <h3 className="px-8 text-2xl font-bold leading-normal sm:text-3xl sm:px-4 sm:mt-4">
              {item.title}
            </h3>
            <p className="px-8 mt-2 text-gray-400 text-base leading-tight sm:text-base sm:px-4 sm:h-20">
              {item.description}
            </p>
            <div className="mt-10 px-4 flex gap-4 items-center justify-center w-full sm:mt-10">
              <button className="text-white py-2 px-4 text-base cursor-pointer sm:text-lg sm:w-1/2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                <a href={item.demoLink} target="_blank">
                  Demo
                </a>
              </button>
              <button className="text-white py-2 px-4 text-base cursor-pointer sm:text-lg sm:w-1/2 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                <a href={item.codeLink} target="_blank">
                  Source Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
