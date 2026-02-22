import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("<Request Coming In!>");
  next(); // continue processing request
  console.log("А я выполнюсь в самом конце!");
});

app.use((req, res, next) => {
  console.log(`Req: ${req.method} ${req.url}`);

  if (Math.random() > 0.7) {
    next(); // continue processing request
  } else {
    res.send("Bad luck");
  }
});

app.get("/", (req, res) => {
  res.send("Hello!!!!");
});

app.listen(3030, () => {
  console.log("Listen up at http://localhost:3030");
});
