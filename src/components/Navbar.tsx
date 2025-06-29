import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 bg-black/60 text-white backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          <a href="/" className="hover:text-teal-400 transition duration-300">
            amis<span className="text-teal-400">Ha</span>
          </a>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-md font-medium">
          {["about", "skills",  "project","experience", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white px-3 py-1 rounded hover:text-teal-400 hover:bg-white/10 transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col md:hidden gap-4 text-md font-medium">
          {["about", "skills", "experience", "project", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)} // close on click
              className="text-white px-3 py-2 rounded hover:text-teal-400 hover:bg-white/10 transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
