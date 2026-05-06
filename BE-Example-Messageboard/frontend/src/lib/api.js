export function createMessage(name, message, setMessages, messages, password) {
  const url = "http://localhost:4000/messages";
  const payload = { name, message };
  const config = {
    method: "POST",
    headers: {
      Authorisation: password,
      "content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  fetch(url, config)
    .then((response) => response.json())
    .then((result) => {
      if (result.error) {
        alert("ERROR " + result.error);
        return;
      }
      setMessages([...messages, result.message]);
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
}
