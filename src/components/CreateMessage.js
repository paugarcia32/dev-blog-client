import { useState } from "react";
import * as EmailValidator from "email-validator"; // Importa el paquete email-validator

const CreateMessageForm = () => {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState(""); // Agrega el estado para el correo electrónico
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!author || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Valida el formato del correo electrónico utilizando email-validator
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
        body: JSON.stringify({ author, email, message }), // Agrega 'email' aquí
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
    <div>
      <h2>Create a New Message</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Create Message
        </button>
      </form>
    </div>
  );
};

export default CreateMessageForm;
