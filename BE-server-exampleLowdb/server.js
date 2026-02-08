import express from "express";
import db from "./db.js";

// 1.Initializing application
const app = express();
app.use(express.json());

// 2. add endpoints
app.get("/", (req, res) => res.send("Root get!"));

app.post("/", (req, res) => {
  db.data.posts.push(req.body);
  db.write();
  res.send("Root POST");
});

// 3.listen for endpoints
app.listen(8080, () => console.log("Up at http://localhost:8080"));
