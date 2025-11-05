import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Urban Local Body Services Portal",
    description:
      "MERN, JWT, bcrypt, Multer, Cloudinary. Developed a full-stack municipal services portal with modules for Dashboard, News, Gallery, Officials, Tenders, Feedback, and Hero Image management. Built a secure Admin Panel for real-time upload, edit, and deletion of content using JWT authentication, role-based access, and bcrypt security. Integrated Multer + Cloudinary for efficient document and image uploads with live previews and public access. Implemented search, filters, and pagination, improving administrative efficiency.",
    codeLink: "https://github.com/AMISHA1703/SampleNagarNigam",
    demoLink: "https://urban-local-body-6c3z.vercel.app/",
  },
  {
    title: "Collaborative Whiteboard",
    description:
      "Built a real-time collaborative whiteboard with room-based multi-user sessions and live drawing synchronization. Implemented Socket.IO events for real-time cursor tracking, color selection, stroke width adjustment, and canvas clearing. Persisted drawing history in MongoDB, enabling users to recover whiteboard states after refresh or reconnection.",
    codeLink: "https://github.com/AMISHA1703/Collaborative-Whiteboard",
    demoLink: "https://collaborative-whiteboard-gilt-theta.vercel.app/",
  },
  {
    title: "QuickPay",
    description:
      "Full-stack digital wallet app replicating P2P payment platforms. Features user registration, authentication, balance tracking, and secure fund transfers with JWT-based authentication and Zod validation.",
    codeLink: "https://github.com/AMISHA1703/QuickPay",
    demoLink: "https://quick-pay-fjil.vercel.app/",
  },
  {
    title: "Gemini Bot",
    description:
      "Full-stack AI chatbot with React.js frontend and Express.js backend. Integrated with Google Gemini API to handle user queries and asynchronous flows using Axios.",
    codeLink: "https://github.com/AMISHA1703/Gemini-bot",
    demoLink: "https://gemini-bot-4ibv.vercel.app/",
  },
];

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = "dark"; 

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Theme classes
  const sectionClasses =
    theme === "dark"
      ? "bg-black/20 border border-white/10"
      : "bg-white border border-black/10";

  const cardClasses =
    theme === "dark"
      ? "bg-black/5 border border-white/10 hover:bg-black/20 text-white"
      : "bg-white border border-gray-300 hover:bg-gray-100 text-black";

  const headingClasses = theme === "dark" ? "text-white" : "text-black";
  const subHeadingClasses = theme === "dark" ? "text-gray-500" : "text-gray-600";
  const descriptionClasses = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const linkClasses =
    theme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-black";

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      className={`backdrop-blur-md rounded-xl p-6 transition-all duration-300 ${sectionClasses}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h2
          className={`text-lg md:text-2xl font-medium text-center md:text-left ${headingClasses}`}
        >
          Projects
        </h2>
        <span
          className={`text-xs md:text-sm transition-colors duration-300 text-center md:text-right ${subHeadingClasses}`}
        >
          Full-stack Website Development
        </span>
      </div>

      {/* Slider */}
      <div className="mt-6 relative">
        <article
          className={`p-4 rounded-lg backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-teal-500/10 relative ${cardClasses}`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors duration-300 z-10 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-white/5"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors duration-300 z-10 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-white/5"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
            aria-label="Next project"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Project Content */}
          <div className="px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Project Info */}
              <div className="flex-1">
                <h3
                  className={`font-semibold text-base md:text-lg mb-2 ${headingClasses}`}
                >
                  {projects[currentSlide].title}
                </h3>
                <p
                  className={`text-sm md:text-sm leading-relaxed text-justify ${descriptionClasses}`}
                >
                  {projects[currentSlide].description}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm justify-end">
                <a
                  href={projects[currentSlide].codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 transition-colors duration-300 ${linkClasses}`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1..." />
                  </svg>
                  <span>Code</span>
                </a>
                <a
                  href={projects[currentSlide].demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 transition-colors duration-300 ${linkClasses}`}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-teal-500 w-8"
                    : theme === "dark"
                    ? "bg-gray-600 hover:bg-gray-500 w-2"
                    : "bg-gray-400 hover:bg-gray-500 w-2"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
