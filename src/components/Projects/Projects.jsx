import React from "react";
// import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectDetails = [
    // {
    //   imageUrl: "https://miro.medium.com/1*k3OU519iKbNHycQXdiRraw.jpeg",
    //   title: "Learning Management System",
    //   description:
    //     "A complete, production-ready Learning Management System (LMS) platform architected for scalability and security. Utilizing the MERN stack, it provides distinct Student and Instructor dashboards with robust, role-specific authentication and authorization. The system integrates Stripe for a verified, secure course enrollment and payment gateway, simulating a real-world educational marketplace.",
    //   demoLink: "https://lmsappclone.netlify.app/",
    //   codeLink: "https://github.com/Thapa-Dipesh/lms-app",
    // },
    // {
    //   imageUrl:
    //     "https://i.pinimg.com/736x/dd/07/d8/dd07d85ceabbc7dbe17635f51dcdc1ea.jpg",
    //   title: "E-commerce App",
    //   description:
    //     "A complete e-commerce website built from the ground up using React and the MERN stack (Node.js, Express.js, MongoDB). This platform handles complex features like user logins, product catalogs, and fast searching. We used Redux Toolkit to manage the site's data efficiently and Tailwind CSS for modern, responsive styling.",
    //   demoLink: "https://fullstack-find.netlify.app/",
    //   codeLink: "https://github.com/Thapa-Dipesh/fullstack-finds",
    // },
    {
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1358/format:webp/0*GosUnxAuWPrzIeLP",
      title: "Uber Clone App",
      description:
        "I built a full working clone of the Uber app. This project was a great challenge because it required handling real-time data, like tracking the driver's exact location on a map. It lets riders book a trip and drivers accept it instantly, featuring live updates for things like arrival times and payment processing. It’s a great example of building an app that handles two different user types at once.",
      demoLink: "https://uberrideclone.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/Uber-Clone-App",
    },
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
        "https://media.licdn.com/dms/image/v2/D4D22AQEWLM5SItxnfQ/feedshare-shrink_800/B4DZRf28dpHUAk-/0/1736775027571?e=2147483647&v=beta&t=Hvq_ui2qEQ7j4snvs3psO99YeYdxaXb_eifinD3Ldzw",
      title: "Employee Management System",
      description:
        "A client-side Employee Management System (EMS) built with React and Context API for global state management. Features include CRUD operations and data persistence using LocalStorage.",
      demoLink: "https://emsappreact.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/react-ems",
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
        "https://assets.admiretheweb.com/wp-content/uploads/2021/06/K72.jpg?w=1500&h=750&fit=crop&fp-y=0",
      title: "Creative Agency Website Clone (K72)",
      description:
        "This is a high-fidelity website clone featuring complex, dynamic animations, built using the power of React for a component-based structure, GSAP for smooth, custom timeline animations, and Tailwind CSS for utility-first styling and pixel-perfect responsiveness.",
      demoLink: "https://k72-ca.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/k72",
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
