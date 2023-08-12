import React, { useEffect } from "react";
import { FiMail, FiGithub } from "react-icons/fi"; // Import icons
import "../styles/Contact.css";
import CreateMessageForm from "../components/CreateMessage";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="main-title-underline"></div>
      <p>
        If you have any questions or inquiries, please feel free to contact me:
      </p>
      <ul>
        <li>
          <span className="icon">
            <FiMail />
          </span>
          Email: paugarcia32@gmail.com
        </li>
        <li>
          <span className="icon">
            <FiGithub />
          </span>
          GitHub:{" "}
          <a
            href="https://github.com/paugarcia32"
            target="_blank"
            rel="noopener noreferrer"
          >
            paugarcia32
          </a>
        </li>
      </ul>

      <CreateMessageForm />
    </div>
  );
}
