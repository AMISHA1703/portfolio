// src/store/useThemeChange.js
import { create } from "zustand";

const useThemeChange = create((set) => ({
  theme: "light", // default theme

  toggleTheme: () =>
    set((state) =>({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  setTheme: (theme) => set({ theme }),
}));

export default useThemeChange;
