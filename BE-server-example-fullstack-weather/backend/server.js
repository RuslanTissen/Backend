import express from "express";
import cors from "cors";

// 1. Initialize an application
const app = express();
app.use(cors());
app.use(express.json());

const history = [];

// 2. Add endpoints
app.post("/weather", (req, res) => {
  const data = {
    requestedCity: req.body.city,
    temperatur: Math.round(Math.random() * 20),
  };

  history.push(data);

  res.send(data);
});

app.get("/history", (req, res) => {
  res.send(history);
});

// 3. Start listening to requests
app.listen(3000, () => console.log("listen up at http://localhost:3000/"));
