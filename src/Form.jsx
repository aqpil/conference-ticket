import { useState } from "react";
import DragNDrop from "./components/DragNDrop";
import uploadIcon from "./assets/images/logo-mark.svg";
import "./Form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    console.log("Form submitted!");
  };

  return (
    <main>
      <header>
        <img id="upload-icon" src={uploadIcon} alt="logo" />
        <h3>Coding Conf</h3>
      </header>

      <section id="intro">
        <h1 id="intro-h1">Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p id="intro-p">
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <form className="form-ticket" onSubmit={handleSubmit}>
        <div className="form-ticket">
          <label htmlFor="dnd">Upload Avatar</label>
          <DragNDrop id="dnd" />
        </div>

        <div className="form-ticket">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-ticket">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            className={emailTouched && emailError ? "input-error" : ""}
          />
          {emailTouched && emailError && (
            <p className="email-error">{emailError}</p>
          )}
        </div>

        <div className="form-ticket">
          <label htmlFor="git-name">GitHub Username</label>
          <input
            type="text"
            name="git-name"
            id="git-name"
            placeholder="@yourusername"
          />
        </div>

        <button id="form-submit" type="submit">
          Generate My Ticket
        </button>
      </form>
    </main>
  );
}
