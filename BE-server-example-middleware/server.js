import express from "express";
import addFruit from "./middleware/addFruit.js";
import luckyLoggerReq from "./middleware/luckyLoggerReq.js";

const app = express();
app.use(addFruit);

app.get(
  "/users",
  (req, res, next) => {
    console.log(" /users loading");
    next();
  },
  (req, res) => {
    res.send("Users here hallo");
  },
);

app.post("/users", (req, res, next) => {
  next(new Error("POST users not allowed"));
});

app.use("/", (req, res) => {
  res.send("Resource not found!!!!!");
});

app.use((err, req, res, next) => {
  console.log("ERROR during request processing", err);
  res.send({ message: err.message });
});

app.listen(3030, () => {
  console.log("Listen up at http://localhost:3030");
});
