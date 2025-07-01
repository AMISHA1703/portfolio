import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = ["about", "skills", "project", "experience", "articles", "contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 bg-black/60 text-white backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          <a href="/" className="hover:text-teal-400 transition duration-300">
            amis<span className="text-teal-400">Ha</span>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-md font-medium">
          {navItems.map((item) =>
            item === "articles" ? (
              <a
                key={item}
                href="https://medium.com/@amisha1701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-3 py-1 rounded hover:text-teal-400 hover:bg-white/10 transition duration-300"
              >
                Articles
              </a>
            ) : (
              <a
                key={item}
                href={`#${item}`}
                className="text-white px-3 py-1 rounded hover:text-teal-400 hover:bg-white/10 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col md:hidden gap-4 text-md font-medium">
          {navItems.map((item) =>
            item === "articles" ? (
              <a
                key={item}
                href="https://medium.com/@amisha1701"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-white px-3 py-2 rounded hover:text-teal-400 hover:bg-white/10 transition duration-300"
              >
                Articles
              </a>
            ) : (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-white px-3 py-2 rounded hover:text-teal-400 hover:bg-white/10 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
