import { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[100%] md:w-[90%] px-8 py-3 rounded-2xl border backdrop-blur-md
      transition-all duration-500 ease-in-out
      ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      shadow-lg hover:shadow-teal-500/10
      bg-black/30 border border-white/10`}
    >
      <div className="flex items-center justify-between">
        {/* Left side: profie + Name */}
        <div className="flex items-center space-x-4">
          <div className="relative group w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-inner shadow-teal-500/10">
            <img
              src="https://res.cloudinary.com/db9dqphdc/image/upload/v1758103543/Gemini_Generated_Image_oux9jpoux9jpoux9_y1l8wv.png"
              alt="Amisha"
              className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          <a
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-wide relative 
              text-white hover:text-teal-400 transition-colors duration-300
              after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
              after:bg-teal-400 after:rounded-full after:transition-all after:duration-500
              hover:after:w-full"
          >
            Amisha Singh
          </a>
        </div>

        {/* Right side: Simple glowing accent */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-teal-400/70 animate-pulse shadow-lg shadow-teal-500/30"></div>
          <span className="text-sm text-gray-300 tracking-wide">
            Portfolio Active
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
