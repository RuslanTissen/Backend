import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function App() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const url = "http://localhost:4000/messages";
    fetch(url)
      .then((response) => response.json())
      .then((result) => setMessages(result))
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const url = "http://localhost:4000/messages";
    const payload = { name, message };
    const config = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMessages([...messages, result.message]);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }

  console.log(messages);

  return (
    <div className="App">
      <h1>Message board</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            {msg.name}: {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
