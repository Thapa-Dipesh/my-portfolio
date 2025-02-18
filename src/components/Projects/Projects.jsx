import React from "react";
// import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectDetails = [
    {
      imageUrl:
        "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/670d6c3ec8f6cf2996c40e02_www_viber_com_en__208abcd7fdd1.jpeg",
      title: "Viber website",
      description:
        "This is a clone of Viber Website created using HTML and CSS.",
      demoLink: "https://thapa-dipesh.github.io/Website-Clones/viber-clone/",
      codeLink:
        "https://github.com/Thapa-Dipesh/Website-Clones/tree/main/viber-clone",
    },
    {
      imageUrl:
        "https://engineering.fb.com/wp-content/uploads/2020/05/1.-Home-Setting-Light-Mode.png",
      title: "Socialbook website",
      description:
        "This is a SocialBook website created using HTML, CSS and little JS.",
      demoLink:
        "https://thapa-dipesh.github.io/Website-Clones/socialbook-clone/",
      codeLink:
        "https://github.com/Thapa-Dipesh/Website-Clones/tree/main/socialbook-clone",
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQEJnXe9RK5c0A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680694587353?e=2147483647&v=beta&t=-74iuxwHyCa9jNp6hL4YftNxAcKc-f3HsMEU0f-gv70",
      title: "UsabilityHub website",
      description:
        "This is a UsabilityHub  website clone created using HTML and CSS.",
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
    {
      imageUrl: "https://images04.nicepage.com/feature/461183/blog.jpg",
      title: "Blog website",
      description: "this is a blogging website created using HTML, CSS",
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
      <div className="py-16 flex flex-col gap-8 w-full sm:flex-row overflow-auto">
        {projectDetails.map((item, index) => (
          <div
            key={index}
            className=" flex flex-wrap flex-col bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl duration-600 hover:scale-102 sm:w-96 sm:flex-none sm:p-4 sm:snap-center ">
            <img
              className="p-8 rounded-3xl duration-500 cursor-pointer hover:scale-105 sm:p-4"
              src={item.imageUrl}
              alt="banner img"
            />
            <h3 className="px-8 text-2xl font-bold leading-normal sm:text-3xl sm:px-4 sm:mt-4">
              {item.title}
            </h3>
            <p className="px-8 mt-2 text-base leading-tight sm:text-base sm:px-4">
              {item.description}
            </p>
            <div className="my-10 px-4 flex gap-4 items-center justify-center w-full sm:mt-10">
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
