import express from "express";
import addFruit from "./middleware/addFruit.js";
import luckyLoggerReq from "./middleware/luckyLoggerReq.js";

const app = express();

app.use(addFruit);

app.use(luckyLoggerReq);

app.get("/", (req, res) => {
  res.send("Hello!!!!");
});

app.listen(3030, () => {
  console.log("Listen up at http://localhost:3030");
});
