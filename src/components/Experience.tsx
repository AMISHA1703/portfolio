import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

type ExperienceCardProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  demoLink?: string;
};

const experiences: ExperienceCardProps[] = [
  {
    title: "Web Developer Intern",
    company: "Nk Technologies ITSol Pvt Ltd, Noida, Uttar Pradesh — On-site",
    date: "Aug 2025 – Present",
    description:
      "Developed a full-stack Municipal Corporation Portal (MERN) with modules for tenders, news, gallery, feedback, and multilingual support, enabling digital access to civic services. Integrated Cloudinary and Multer for secure media management, built a JWT + bcrypt–secured admin panel for dynamic content control, and deployed the portal using cPanel (frontend), Render (backend), and MongoDB Atlas (database). Contributed to an E-commerce site by implementing client-requested updates, including login and registration flow fixes, mouse-scroll functionality in the Popular Products section, a new Junior section, and improved navbar design. Delivered multiple WordPress projects, managing complete setup, customization, and deployment while ensuring functional, performance-focused web experiences for clients.",
  },
  {
    title: "Full Stack Intern",
    company: "SmartInternz in collaboration with SmartBridge & MongoDB — Virtual",
    date: "Jan 2025 – Mar 2025",
    description:
      "Completed a structured MERN Stack internship program with hands-on projects focused on full-stack development. Built and deployed applications implementing authentication, validation, and modern best practices.",
    demoLink:
      "https://drive.google.com/file/d/1kfCw3mzlQVMkEw8X0-Xqof6-ZL58YOBu/view",
  },
];

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = "dark"; // Replace with useThemeChange() if needed

  // Reset expansion when slide changes
  useEffect(() => {
    setIsExpanded(false);
  }, [currentSlide]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % experiences.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % experiences.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <section
      id="experience"
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
        Experience
      </h2>

      {/* Slider Container */}
      <div className="relative max-w-4xl mx-auto">
        <div
          className={`relative shadow-xl backdrop-blur-md rounded-lg p-6 md:p-8 transition-all duration-300 ${
            theme === "dark"
              ? "bg-black/5 border border-white/10"
              : "bg-white border border-gray-200"
          }`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-1 md:left-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full transition-colors duration-300 z-10 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-white/5"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
            aria-label="Previous experience"
          >
            <FaChevronLeft className="text-lg md:text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-1 md:right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 rounded-full transition-colors duration-300 z-10 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-white/5"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
            }`}
            aria-label="Next experience"
          >
            <FaChevronRight className="text-lg md:text-xl" />
          </button>

          {/* Experience Content */}
          <div className="px-6 md:px-8">
            <div className="absolute -left-4 top-8 w-3 h-3 bg-teal-500 rounded-full"></div>

            <h3
              className={`text-lg md:text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {experiences[currentSlide].title}
            </h3>
            <p className="text-blue-500 font-medium mt-2 text-sm md:text-base">
              {experiences[currentSlide].company}
            </p>
            <p
              className={`text-xs md:text-sm mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {experiences[currentSlide].date}
            </p>

            {/* Description with Read More */}
            <div className="mt-4">
              <p
                className={`text-sm leading-relaxed text-justify ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } ${
                  !isExpanded ? "line-clamp-3 lg:line-clamp-none" : ""
                }`}
              >
                {experiences[currentSlide].description}
              </p>
              
              {/* Read More Button - Only on mobile and tablet */}
              <button
                onClick={toggleExpanded}
                className={`lg:hidden flex items-center gap-1 mt-2 text-sm font-medium transition-colors duration-300 ${
                  theme === "dark"
                    ? "text-teal-400 hover:text-teal-300"
                    : "text-teal-600 hover:text-teal-700"
                }`}
              >
                {isExpanded ? (
                  <>
                    <span>Read less</span>
                    <FaChevronUp className="text-xs" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <FaChevronDown className="text-xs" />
                  </>
                )}
              </button>
            </div>

            {experiences[currentSlide].demoLink && (
              <div className="mt-4 flex justify-end">
                <a
                  href={experiences[currentSlide].demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
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
                  <span>Demo</span>
                </a>
              </div>
            )}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {experiences.map((_, index) => (
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
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Timeline Line */}
        <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
      </div>
    </section>
  );
};

export default Experience;