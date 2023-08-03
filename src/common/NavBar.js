import React, { useEffect, useRef } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import { ThemeProvider, useTheme } from "../common/ThemeProvider.js";


export default function NavBar() {
  const { theme, toggleTheme } = useTheme(); // Suscribir el NavBar al contexto del tema
  const navRef = useRef();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }, [theme]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="nav">
      <Link to="/" className="site-title">
        <img src={theme === "dark" ? "Logo/logo-dark-theme.png" : "Logo/logo-light-theme.png"} alt="" id="logo" />
      </Link>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav className="links-nav" ref={navRef}>
      {/* <nav className={`links-nav ${theme === "dark" ? "responsive_nav" : ""}`} ref={navRef}> */}
        <ul>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
        <img src={theme === "dark" ? "sun.png" : "moon.png"} alt="" id="icon" onClick={toggleTheme} />
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    // <ThemeProvider>
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    // </ThemeProvider>
  );
}
