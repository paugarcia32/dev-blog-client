import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useTheme } from "../common/ThemeProvider.js";

export default function Footer() {
  const { theme, logoUrl } = useTheme();

  useEffect(() => {
    const logo = document.getElementById("logo");
    logo.src = logoUrl;
  }, [logoUrl]);

  return (
    <div className="footer">
      <div className="sb_footer section-padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <Link to={'/'}>
              <img
                src={theme === "dark" ? "Logo/logo-dark-theme.png" : "Logo/logo-light-theme.png"}
                alt=""
                id="logo"
              />
            </Link>
          </div>
          <div className="footer-links-div">
            <h4>The project</h4>
            <Link to={'/employer'}>
              <p>About</p>
            </Link>
            <Link to={'/employer'}>
              <p>Home</p>
            </Link>
            <Link to={'/employer'}>
              <p>Author rights</p>
            </Link>
          </div>
          <div className="footer-links-div">
            <h4>Learn more</h4>
            <Link to={'/employer'}>
              <p>Creator</p>
            </Link>
            <Link to={'/employer'}>
              <p>Resources</p>
            </Link>
            <Link to={'/employer'}>
              <p>FAQ</p>
            </Link>
          </div>
          <div className="footer-links-div">
            <h4>Support</h4>
            <Link to={'/employer'}>
              <p>Contact</p>
            </Link>
            <Link to={'/employer'}>
              <p>Terms of Use</p>
            </Link>
            <Link to={'/employer'}>
              <p>Privacy pollicy</p>
            </Link>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>@{new Date().getFullYear()} Pau Garcia. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
