import { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = "dark";
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  const slides = [
    {
      title: "About",
      content: (
        <p
          className={`text-sm leading-relaxed text-center ${
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
      content: (
        <div className="text-center">
          <p
            className={`text-lg font-semibold ${
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
            Gorakhpur , Uttar Pradesh , India
          </p>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="flex items-center justify-center flex-wrap gap-2">
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
              className={`text-xs px-3 py-1.5 rounded ${
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
      content: (
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <a
            href="mailto:amishasingh1701@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={`flex flex-col items-center gap-2 hover:text-teal-500 transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaEnvelope className="text-3xl" />
            <span className="text-xs">Email</span>
          </a>
          <a
            href="https://github.com/AMISHA1703"
            target="_blank"
            rel="noreferrer"
            className={`flex flex-col items-center gap-2 hover:text-teal-500 transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaGithub className="text-3xl" />
            <span className="text-xs">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/amisha-singh1701/"
            target="_blank"
            rel="noreferrer"
            className={`flex flex-col items-center gap-2 hover:text-teal-500 transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaLinkedin className="text-3xl" />
            <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="https://x.com/AmishaS86389365?s=08"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-2 hover:text-teal-500 transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaXTwitter className="text-3xl" />
            <span className="text-xs">Twitter</span>
          </a>
          <a
            href="https://medium.com/@amisha1701"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-2 hover:text-teal-500 transition-colors ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <SiMedium className="text-3xl" />
            <span className="text-xs">Medium</span>
          </a>
        </div>
      ),
    },
  ];

  const containerClasses =
    theme === "dark"
      ? "bg-black/30 rounded-xl border border-white/10"
      : "bg-white/60 rounded-xl border border-black/10";

  const headingClasses = theme === "dark" ? "text-white" : "text-black";

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // slower now: 7 seconds
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`p-6 sm:p-8 mt-6 mb-2 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-teal-500/10 ${containerClasses}`}
    >
      {/* Slide Title */}
      <h2
        className={`text-2xl sm:text-3xl font-semibold text-center mb-6 ${headingClasses}`}
      >
        {slides[currentSlide].title}
      </h2>

      {/* Slide Content */}
      <div className="min-h-[200px] flex items-center justify-center px-8">
        {slides[currentSlide].content}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-700/50 transition-colors ${
          theme === "dark"
            ? "text-gray-400 hover:text-white"
            : "text-gray-600 hover:text-black"
        }`}
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-700/50 transition-colors ${
          theme === "dark"
            ? "text-gray-400 hover:text-white"
            : "text-gray-600 hover:text-black"
        }`}
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-teal-500 w-8"
                : theme === "dark"
                ? "bg-gray-600 hover:bg-gray-500"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
