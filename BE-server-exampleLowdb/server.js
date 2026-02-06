import express from "express";
import db from "./db.js";

// 1.Initializing application
const app = express();
app.use(express.json());

// Lowdb practice
// db.data.posts.push({ id: 1, content: "Alexander likes pancekes!" });
// db.write();

// 2. add endpoints
app.get("/", (req, res) => res.send("Root get!"));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Root POST");
});

// 3.listen for endpoints
app.listen(8080, () => console.log("Up at http://localhost:8080"));
