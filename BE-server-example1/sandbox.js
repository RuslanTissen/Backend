import express from "express";

const app = express();

app.get("/", (req, res) => {
  const id = Math.random();
  res.send(id);
});
