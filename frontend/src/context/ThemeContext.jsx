import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or default to light
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html> root and save to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
