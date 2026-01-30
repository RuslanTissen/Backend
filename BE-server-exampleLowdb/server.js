import express from "express";
import db from "./db.js";

// 1.Initializing application
const app = express();
// here

// 2. add endpoints
app.get("/", (req, res) => res.send("Root get!"));
// more...

// 3.listen for endpoints
app.listen(8080, () => console.log("Up at http://localhost:8080"));
