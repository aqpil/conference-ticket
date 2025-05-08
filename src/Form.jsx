import DragNDrop from "./components/DragNDrop";
import uploadIcon from "./assets/images/logo-mark.svg";
import "./Form.css";

export default function Form() {
  return (
    <main>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img id="upload-icon" src={uploadIcon} alt="logo" />
        <h3>Coding Conf</h3>
      </header>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 54,
            marginBottom: 10,
          }}
        >
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p
          style={{
            fontSize: 22,
            fontWeight: 200,
          }}
        >
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <form
        style={{
          maxWidth: 510,
          marginTop: 30,
        }}
      >
        <label>Upload Avatar</label>
        <DragNDrop />

        <label>
          Full Name: <input name="fullName" />
        </label>

        <label>
          Email Address:{" "}
          <input name="myEmail" placeholder="example@email.com" />
        </label>

        <label>
          GitHub Username: <input name="myGithub" placeholder="@yourusername" />
        </label>

        <button>Generate My Ticket</button>
      </form>
    </main>
  );
}

// <label>
// Upload Avatar: <input
// type="file"
// name="myAvatar"
// accept="image/png, image/jpeg"
// placeholder="Drag and drop or click to upload" />
// </label>
