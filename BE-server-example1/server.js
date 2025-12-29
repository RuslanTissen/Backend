import express from "express";

// 1. Prepare the application
// This creates server object
const app = express();
const luckNumber = Math.round(Math.random() * 20);

// 2. Add endpoints
// The order of endpoints matters;)
// First endpoint - "GET /"
app.get("/", (req, res) => {
  console.log("GET /");
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
