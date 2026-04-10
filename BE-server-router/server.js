import express from "express";
import petsRouter from "./routes/pets.js";

const app = express();
app.use(express.json());

// use the router
app.use("/pets", petsRouter);

app.listen(9000, () => console.log("Up: http://localhost:9000"));
