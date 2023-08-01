import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "light");
  const logoUrl = theme === "dark" ? "Logo/logo-dark-theme.png" : "Logo/logo-light-theme.png";

  const setDarkMode = () => {
    setTheme("dark");
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    setTheme("light");
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  useEffect(() => {
    const icon = document.getElementById("icon");
    if (theme === "dark") {
      icon.src = "sun.png";
    } else {
      icon.src = "moon.png";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, logoUrl }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
