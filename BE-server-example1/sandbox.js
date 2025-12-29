import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("GET /");
  res.send("Hello world!");
});
