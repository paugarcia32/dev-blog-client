import React, { useEffect, useRef, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";

export default function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "light");
  const navRef = useRef();

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
    if (theme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, [theme]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleIconClick = () => {
    toggleTheme();
  };

  useEffect(() => {
    // Actualizar el icono cuando cambie el tema
    const icon = document.getElementById("icon");
    if (theme === "dark") {
      icon.src = "sun.png";
    } else {
      icon.src = "moon.png";
    }
  }, [theme]);

  return (
    <header className="nav">
      <Link to="/" className="site-title">
        My Dev Journey
      </Link>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav className="links-nav" ref={navRef}>
        <ul>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
        <img
          src={theme === "dark" ? "sun.png" : "moon.png"}
          alt=""
          id="icon"
          onClick={handleIconClick}
        />
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
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
