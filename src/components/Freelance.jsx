import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const freelanceProjects = [
  {
    title: "The Indic Wing",
    client: "Freelance Project",
    description:
      "Developed and deployed a complete WordPress website for a client, handling theme customization, plugin integration, and performance optimization. Ensured smooth navigation, responsive layout, and professional content presentation.",
    link: "https://theindicwing.com",
  },
  {
    title: "Heritage America Land",
    client: "NK Technologies ITSol Pvt. Ltd.",
    description:
      "Delivered multiple WordPress websites during internship, handling complete setup, theme and plugin customization, and deployment via cPanel. Focused on creating clean, functional, and performance-driven sites for client needs.",
      link:"https://heritageamericaland.com"
  }
  
];

const FreelanceProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = "dark"; // replace with your useThemeChange hook if available

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % freelanceProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % freelanceProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + freelanceProjects.length) % freelanceProjects.length
    );
  };

  return (
    <section
      id="freelance"
      className={`shadow-xl backdrop-blur-md py-16 px-6 mt-2 mb-2 md:px-20 rounded-xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-black/20 border border-white/10"
          : "bg-white border border-gray-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-10 text-center ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
         Client Projects
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div
          className={`relative shadow-xl backdrop-blur-md rounded-lg p-8 transition-all duration-300 ${
            theme === "dark"
              ? "bg-black/5 border border-white/10"
              : "bg-white border border-gray-200"
          }`}
        >
          {/* Navigation Buttons */}
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
          <div className="px-8">
            <div className="absolute -left-4 top-8 w-3 h-3 bg-teal-500 rounded-full"></div>

            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {freelanceProjects[currentSlide].title}
            </h3>
            <p className="text-blue-500 font-medium text-sm mt-2">
              {freelanceProjects[currentSlide].client}
            </p>
            <p
              className={`mt-4 leading-relaxed text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {freelanceProjects[currentSlide].description}
            </p>

            {freelanceProjects[currentSlide].link && (
              <div className="mt-4">
                <a
                  href={freelanceProjects[currentSlide].link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-end gap-2 transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
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
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>View Site</span>
                </a>
              </div>
            )}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {freelanceProjects.map((_, index) => (
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
        </div>

        {/* Decorative Timeline Line */}
        <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
      </div>
    </section>
  );
};

export default FreelanceProjects;
