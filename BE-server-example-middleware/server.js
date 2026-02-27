import express from "express";
import addFruit from "./middleware/addFruit.js";
import luckyLoggerReq from "./middleware/luckyLoggerReq.js";

const app = express();
app.use(addFruit);

app.get(
  "/users",
  luckyLoggerReq,
  (req, res, next) => {
    console.log(" /users loading");
    next();
  },
  (req, res) => {
    res.send("Users here hallo");
  },
);

app.use((req, res) => {
  res.send("Resource not found!");
});

app.listen(3030, () => {
  console.log("Listen up at http://localhost:3030");
});
