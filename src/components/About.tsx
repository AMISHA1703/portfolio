import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = "dark"; // or use useThemeChange()

  const slides = [
    {
      title: "About",
      subtitle: "Professional Overview",
      content: (
        <p
          className={`text-sm md:text-base leading-relaxed text-justify ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Hi, I’m a full-stack developer skilled in the MERN stack — MongoDB,
          Express, React, and Node.js. I enjoy building web applications that
          are fast, reliable, and easy to use. Along with backend development, I
          also create WordPress websites for clients, focusing on clean
          structure, smooth performance, and practical results.
        </p>
      ),
    },
    {
      title: "Education",
      subtitle: "Academic Background",
      content: (
        <div className="text-center">
          <p
            className={`text-base md:text-lg font-semibold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            B.Tech — Computer Science & Engineering{" "}
            <span
              className={`text-sm mt-1 ${
                theme === "dark" ? "text-gray-600" : "text-gray-600"
              }`}
            >
              (2025)
            </span>
          </p>
          <p
            className={`text-sm mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Institute of Technology & Management
          </p>
          <p
            className={`text-xs mt-1 ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Gorakhpur, Uttar Pradesh, India
          </p>
        </div>
      ),
    },
    {
      title: "Skills",
      subtitle: "Technical Proficiencies",
      content: (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
          {[
            "JavaScript",
            "React.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Tailwind CSS",
            "Git",
            "Github",
            "Docker",
            "HTML",
            "CSS",
            "C++",
            "C",
            "cPanel",
            "WordPress",
          ].map((skill) => (
            <span
              key={skill}
              className={`text-xs sm:text-sm px-3 py-1.5 rounded ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-200 border border-gray-700"
                  : "bg-gray-200 text-gray-800 border border-gray-400"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Connect",
      subtitle: "Social & Professional Links",
      content: (
        <div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-center">
          {[
            {
              href: "mailto:amishasingh1701@gmail.com",
              icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
              label: "Email",
            },
            {
              href: "https://github.com/AMISHA1703",
              icon: <FaGithub className="text-2xl sm:text-3xl" />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/amisha-singh1701/",
              icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
              label: "LinkedIn",
            },
            {
              href: "https://x.com/AmishaS86389365?s=08",
              icon: <FaXTwitter className="text-2xl sm:text-3xl" />,
              label: "Twitter",
            },
            {
              href: "https://medium.com/@amisha1701",
              icon: <SiMedium className="text-2xl sm:text-3xl" />,
              label: "Medium",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-col items-center gap-2 hover:text-teal-500 transition-colors ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {icon}
              <span className="text-xs sm:text-sm">{label}</span>
            </a>
          ))}
        </div>
      ),
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section
      className={`backdrop-blur-md rounded-xl p-6  mt-6 mb-6 transition-all duration-300 ${sectionClasses}`}
    >
      {/* Header (Dynamic Title) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h2
          className={`text-lg md:text-2xl font-medium text-center md:text-left ${headingClasses}`}
        >
          {slides[currentSlide].title}
        </h2>
        <span
          className={`text-xs md:text-sm transition-colors duration-300 text-center md:text-right ${subHeadingClasses}`}
        >
          {slides[currentSlide].subtitle}
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
            aria-label="Previous slide"
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
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Slide Content */}
          <div className="px-6 py-4 text-center">
            {slides[currentSlide].content}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
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
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
