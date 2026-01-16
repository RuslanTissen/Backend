import express from "express";
import axios from "axios";

const app = express();
const luckNumber = Math.round(Math.random() * 20);

app.get("/", (req, res) => {
  const promise = axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });
  promise.then(function (response) {
    console.log("Response: ", response);
  });

  res.send("Hello world!");
});

// Second endpoint -"GET /chush"
app.get("/chush", (req, res) => {
  console.log("GET /chush");
  res.send("<h1>Chush found luckNumber: " + luckNumber + "</h1>");
});

// Third endpoind - "GET /pet"
app.get("/pet", (req, res) => {
  const pet = {
    name: "Tuzik",
    age: "???",
  };
  res.send(pet);
});

// Fallback endpoint - "GET *splat"
app.get("/*splat", (req, res) => {
  res.send("404: Resource not found");
});

// 3. Start application
app.listen(3000, () => {
  console.log("Listening to http://localhost:3000");
});
