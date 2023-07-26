import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  const handleIconClick = () => {
    document.body.classList.toggle("dark-theme");
    const icon = document.getElementById("icon");
    if (document.body.classList.contains("dark-theme")) {
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
        src="moon.png"
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
  const isActie = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActie ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
