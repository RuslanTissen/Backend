import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3030, () => {
  console.log("Listen up at http://localhost:3030");
});
