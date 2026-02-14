import express from "express";
import cors from "cors";

// 1. Initialize an application
const app = express();
app.use(cors());
app.use(express.json()); // Parses(populates) incoming requests into req.body

// 2. Add endpoints
app.post("/weather", (req, res) => {
  console.log("POST /weather");
  // read city from the request
  console.log(req.body);

  // Do some stuff!!!

  res.send({
    requestedCity: req.body.city,
    temperature: Math.round(Math.random() * 20),
  });
});

// 3. Start listening to requests
app.listen(3000, () => console.log("listen up at http://localhost:3000/"));
