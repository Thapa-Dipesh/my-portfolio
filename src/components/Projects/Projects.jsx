// import ProjectCard from "./ProjectCard";
import watchly from "../../assets/watchly.png";

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
    //     "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Real-time SaaS Platform",
    //   description:
    //     "A high-performance full-stack platform for real-time content management, leveraging Next.js 16 Server Actions and a reactive backend for seamless, instant user collaboration.",
    //   demoLink: "https://the-mern-store.netlify.app/",
    //   codeLink: "https://github.com/Thapa-Dipesh/realtime-nextjs-16-saas",
    // },
    {
      imageUrl: watchly, // A high-quality watch/product image
      title: "Watchly: Next.js 15 Marketplace",
      description:
        "A high-performance e-commerce platform leveraging Next.js 15 Server Actions and MongoDB for seamless, zero-API-overhead CRUD operations. Features a mobile-responsive UI with React Suspense for optimized asynchronous data fetching and instant search functionality.",
      demoLink: "https://next-watchly.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/watchly",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "E-commerce App",
      description:
        "Scalable MERN marketplace featuring a custom REST API and high-performance MongoDB aggregation for product filtering. Implements Redux Toolkit and RTK Query for efficient global state management and a seamless checkout experience.",
      demoLink: "https://the-mern-store.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/shopify",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg?semt=ais_hybrid&w=740&q=80",
      title: "Full-Stack Find",
      description:
        "A complete e-commerce website built from the ground up using React and the MERN stack (Node.js, Express.js, MongoDB). This platform handles complex features like user logins, product catalogs, and fast searching. We used Redux Toolkit to manage the site's data efficiently and Tailwind CSS for modern, responsive styling.",
      demoLink: "https://fullstack-find.netlify.app/",
      codeLink: "https://github.com/Thapa-Dipesh/fullstack-finds",
    },
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
    <div
      id="Projects"
      className="px-6 md:px-12 mt-32 text-[#ccc] max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
          Featured Projects
        </h1>
        <div className="h-1 w-20 bg-[#465697] mt-4 rounded-full"></div>
      </div>

      {/* Grid Container: Flex on mobile for scroll, Grid on Desktop for stability */}
      <div className="py-8 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full overflow-x-auto sm:overflow-visible snap-x">
        {projectDetails.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col bg-[#111422] border border-slate-800 shadow-2xl rounded-2xl transition-all duration-500 hover:border-[#465697]/50 hover:shadow-[#465697]/10 w-[85vw] sm:w-auto flex-none snap-center"
          >
            {/* Image Container with Overlay */}
            <div className="relative overflow-hidden rounded-t-2xl aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.imageUrl}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e19] to-transparent opacity-60"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#465697] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
                {item.description}
              </p>

              {/* Buttons Pushed to Bottom */}
              <div className="mt-auto flex gap-3">
                <a
                  href={item.demoLink}
                  target="_blank"
                  className="flex-1 text-center text-white py-2.5 px-4 text-sm font-bold rounded-xl bg-[#465697] hover:bg-[#3b4880] transition-all active:scale-95 shadow-lg shadow-[#465697]/20"
                >
                  Live Demo
                </a>
                <a
                  href={item.codeLink}
                  target="_blank"
                  className="flex-1 text-center text-white py-2.5 px-4 text-sm font-bold rounded-xl border border-slate-700 hover:bg-slate-800 transition-all active:scale-95"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
