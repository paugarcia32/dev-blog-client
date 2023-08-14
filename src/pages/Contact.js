import React, { useEffect } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import "../styles/Contact.css";
import CreateMessageForm from "../components/CreateMessage";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Contact() {
  useScrollToTop();

  const contactInfo = [
    {
      icon: <FiMail />,
      site: "Email",
      username: "paugarcia32@gmail.com",
    },
    {
      icon: <FiGithub />,
      site: "GitHub",
      username: "paugarcia32",
    },
    {
      icon: <FiLinkedin />,
      site: "LinkedIn",
      username: "Pau Garcia",
    },
  ];

  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <div className="main-title-underline"></div>
      <div className="rowContact">
        <p>
          Welcome to my Contact Me page! Whether you have an exciting project in
          mind, are interested in collaboration, or simply want to connect, I'm
          here to listen and help. Feel free to drop me a message and let's
          start a conversation. Your ideas, questions, and thoughts are valuable
          to me, and I'm eager to hear from you. Together, we can create
          something amazing. Looking forward to the opportunity to work with you
          and explore new possibilities.
        </p>

        <CreateMessageForm />
      </div>

      <div className="contact-cards">
        {contactInfo.map((contact) => (
          <div key={contact.site} className="contact-card">
            <span className="icon">{contact.icon}</span>
            <div className="contact-info">
              <p className="Psite">{contact.site}</p>
              <p className="Pusername">{contact.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
