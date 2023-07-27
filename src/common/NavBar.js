import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = () => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  const handleIconClick = () => {
    toggleTheme();
    const icon = document.getElementById("icon");
    if (document.body.getAttribute("data-theme") === "dark") {
      icon.src = "sun.png";
    } else {
      icon.src = "moon.png";
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        My Dev Journey
      </Link>
      <div className="links-nav">
        <ul>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
        <img
          src={document.body.getAttribute("data-theme") === "dark" ? "sun.png" : "moon.png"}
          alt=""
          id="icon"
          onClick={handleIconClick}
        />
      </div>
    </nav>
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
