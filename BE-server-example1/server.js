import express from "express";
import axios from "axios";

const app = express();
const luckNumber = Math.round(Math.random() * 20);

app.get("/", (req, res) => {
  axios({
    method: "get",
    url: "https://google.com/ksjdvbnksjdvbskvjnsdvkjn.png",
  })
    .then(function (response) {
      res.send("Hello RESPONSE!");
    })
    .catch(function (err) {
      console.log("Oh NO! We have got an ERROR!!!", err);
      res.send("An error has happened");
    });
  console.log("sending response to client");
});

import { readFile } from "node:fs/promises";

// Second endpoint -"GET /chush"
app.get("/chush", (req, res) => {
  readFile("test.txt", "utf-8").then((stuff) => res.send({ data: stuff }));
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
