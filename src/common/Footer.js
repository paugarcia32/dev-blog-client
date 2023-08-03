import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useTheme } from "../common/ThemeProvider.js";
import darkLogo from '../Assets/logo-dark-theme.png'
import lightLogo from '../Assets/logo-light-theme.png'

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
                src={theme === "dark" ? darkLogo : lightLogo}
                alt=""
                id="logo"
              />
            </Link>
          </div>
          <div className="footer-links-div">
            <h4>The project</h4>
            <Link to={'/'}>
              <p>Home</p>
            </Link>
            <Link to={'/about'}>
              <p>About</p>
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
            <Link to={'/Resources'}>
              <p>Resources</p>
            </Link>
            <Link to={'/FAQ'}>
              <p>FAQ</p>
            </Link>
          </div>
          <div className="footer-links-div">
            <h4>Support</h4>
            <Link to={'/contact'}>
              <p>Contact</p>
            </Link>
            <Link to={'/TermsAndConditions'}>
              <p>Terms and Conditions</p>
            </Link>
            <Link to={'/PrivacyPolicy'}>
              <p>Privacy policy</p>
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
