import { useState } from "react";
import * as EmailValidator from "email-validator";
import "../styles/CreateMessage.css";

const CreateMessageForm = () => {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!author || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!EmailValidator.validate(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, email, message }),
      });

      if (response.ok) {
        alert("Message created successfully");
        setAuthor("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error creating message");
      }
    } catch (error) {
      console.error("Error creating message:", error);
      alert("An error occurred while creating the message");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="sendMessage">
      <h2>Create a New Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="AuthorMessage">
          <input
            placeholder="Name"
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="EmailMessage">
          <input
            placeholder="Email Address"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ContentMessage">
          <textarea
            placeholder="Message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="create-message"
        >
          Create Message
        </button>
      </form>
    </div>
  );
};

export default CreateMessageForm;
