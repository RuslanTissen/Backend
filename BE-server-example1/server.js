import express from "express";

// This creates server object
const app = express();

// First endpoint - "GET /"
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Listening to http://localhost:3000");
});
