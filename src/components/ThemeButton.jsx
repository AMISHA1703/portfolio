import { Sun, Moon } from "lucide-react";
import useThemeStore from "../store/useThemeChange";

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border border-white bg-black hover:bg-white/10 transition"
    >
      {theme === "dark" ? (
        <Sun size={22} className="text-yellow-300" />
      ) : (
        <Moon size={22} className="text-gray-50" />
      )}
    </button>
  );
};

export default ThemeButton;
