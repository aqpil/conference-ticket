import DragNDrop from "./components/DragNDrop";
import uploadIcon from "./assets/images/logo-mark.svg";
import "./Form.css";

export default function Form() {
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

      <form class="form-ticket">
        <div class="form-ticket">
          <label for="dnd">Upload Avatar</label>
          <DragNDrop id="dnd" />
        </div>

        <div class="form-ticket">
          <label for="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div class="form-ticket">
          <label for="email">Email Address </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
          />
        </div>

        <div class="form-ticket">
          <label for="git-name">GitHub Username</label>
          <input
            type="text"
            name="git-name"
            id="git-name"
            placeholder="@yourusername"
          />
        </div>

        <button id="form-submit">Generate My Ticket</button>
      </form>
    </main>
  );
}
