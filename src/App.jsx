import "./Index.css";
import Form from "./Form";
import Background from "./Background.jsx";
import Ticket from "./Ticket.jsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Background>
      {!formData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Ticket data={formData} />
      )}
    </Background>
  );
}

export default App;
